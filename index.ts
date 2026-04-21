import {
  FFIType,
  type FFIFunction,
  dlopen,
  viewSource,
  type FFITypeOrString,
  cc,
  suffix,
  JSCallback,
  toArrayBuffer,
  type Pointer,
} from "bun:ffi";
import os from "os";
import {
  libclangBindings,
  ClangType,
  type ClangFFIFunctionLike,
  CXCursorTypedef,
  CXTypeTypedef,
  CXStringTypedef,
  CXTokenTypedef,
  CXStringToArrayBuffer,
  CXStringFromArrayBuffer,
  CXCursorFromArrayBuffer,
  CXCursorToArrayBuffer,
  CXTypeFromArrayBuffer,
  CXTypeToArrayBuffer,
  CXTokenFromArrayBuffer,
  CXTokenToArrayBuffer,
  nodeApiCall,
} from "./bindings";

/// Visitor

var visitorCount = 0;

function cstringToJSString(
  argName: string,
  resultName: string,
  earlyRet: string,
) {
  return `napi_value ${resultName};
  ${nodeApiCall(earlyRet, `napi_create_string_utf8(env, ${argName}, NAPI_AUTO_LENGTH, &${resultName})`)}`;
}

function cstringFromJSString(
  argName: string,
  resultName: string,
  earlyRet: string,
) {
  // Don't forget to free the result after use!!
  return `size_t ${resultName}_len;
  ${nodeApiCall(earlyRet, `napi_get_value_string_utf8(env, ${argName}, NULL, 0, &${resultName}_len)`)}
  char *${resultName} = (char *)malloc(${resultName}_len + 1);
  ${nodeApiCall(earlyRet, `napi_get_value_string_utf8(env, ${argName}, ${resultName}, ${resultName}_len + 1, NULL)`)}`;
}

export function makeCXCursorVisitor(
  callback: (
    cursor: ArrayBuffer,
    parent: ArrayBuffer,
    clientData: FFIType.pointer,
  ) => number,
): Pointer {
  const id = visitorCount++;
  const wrappedCb = (
    cursorAddr: Pointer,
    parentAddr: Pointer,
    clientData: Pointer,
  ) => {
    const cursorBuf = toArrayBuffer(cursorAddr, 0, 32); // sizeof(CXCursor) == 32 (64-bit)
    const parentBuf = toArrayBuffer(parentAddr, 0, 32); // note me when human progress to 128-bit computer (
    return callback(cursorBuf, parentBuf, clientData);
  };
  const cb = new JSCallback(wrappedCb, {
    args: [FFIType.pointer, FFIType.pointer, FFIType.pointer],
    returns: FFIType.i32,
  });
  const code = `#include <node/node_api.h>

${CXCursorTypedef}

int __visitor_${id}(CXCursor cursor, CXCursor parent, void* client_data) {
  return ((int (*)(CXCursor *, CXCursor *, void *))${cb.ptr})(&cursor, &parent, client_data);
}

void* getVisitor${id}() {
  return (void*)&__visitor_${id};
}`;
  const source = Bun.file(os.tmpdir() + `/__bun_libclang_visitor_${id}.c`);
  Bun.write(source, code);
  const fptr = cc({
    source,
    symbols: { [`getVisitor${id}`]: { args: [], returns: FFIType.pointer } },
  }).symbols[`getVisitor${id}`]!();
  source.delete();
  if (fptr === null) {
    throw new Error("Failed to create CXCursorVisitor");
  }
  return fptr;
}

/// Wrapper code generation

interface WrapperCode {
  typedefs: Set<string>;
  fdef: string;
  code: string;
  fns: Record<string, FFIFunction>;
}

function genWrapperCode(name: string, func: ClangFFIFunctionLike): WrapperCode {
  const typedefs: Set<string> = new Set();
  const sig = (type: ClangType | FFITypeOrString): string => {
    switch (type) {
      case FFIType.i8:
      case "i8":
        return "int8_t";
      case FFIType.u8:
      case "u8":
        return "uint8_t";
      case FFIType.i16:
      case "i16":
        return "int16_t";
      case FFIType.u16:
      case "u16":
        return "uint16_t";
      case FFIType.i32:
      case "i32":
        return "int32_t";
      case FFIType.u32:
      case "u32":
        return "uint32_t";
      case FFIType.i64:
      case "i64":
        return "int64_t";
      case FFIType.u64:
      case "u64":
        return "uint64_t";
      case FFIType.f32:
      case "f32":
        return "float";
      case FFIType.f64:
      case "f64":
        return "double";
      case FFIType.bool:
      case "bool":
        return "bool";
      case FFIType.pointer:
      case "ptr":
        return "void*";
      case FFIType.cstring:
      case "cstring":
        return "char*";
      case FFIType.void:
      case "void":
        return "void";
      case FFIType.char:
      case "char":
        return "char";
      case ClangType.CXString:
        typedefs.add(CXStringTypedef);
        return "CXString";
      case ClangType.CXCursor:
        typedefs.add(CXCursorTypedef);
        return "CXCursor";
      case ClangType.CXType:
        typedefs.add(CXTypeTypedef);
        return "CXType";
      case ClangType.CXToken:
        typedefs.add(CXTokenTypedef);
        return "CXToken";
      default:
        throw new TypeError(`Unsupported type: ${type}`);
    }
  };

  const wrappedName = `__wrapped_${name}`;
  const defArgs: string[] = [];
  const preCallForms: string[] = [];

  const calleeRetType = sig(func.returns);
  const calleeDef = `${calleeRetType} ${name}(${func.args.map(sig).join(", ")});`;
  const callArgs: string[] = [];

  const postCallForms: string[] = [];
  let retVar: string;
  let retType: FFITypeOrString;
  let earlyRet: string;

  const jsArgs: FFITypeOrString[] = [];
  let jsRet: FFITypeOrString;

  switch (func.returns) {
    case ClangType.CXString:
      earlyRet = "NULL";
      postCallForms.push(
        CXStringToArrayBuffer("result", "result_buf", earlyRet),
      );
      retVar = "result_buf";
      retType = "napi_value";
      jsRet = FFIType.napi_value;
      break;
    case ClangType.CXCursor:
      earlyRet = "NULL";
      postCallForms.push(
        CXCursorToArrayBuffer("result", "result_buf", earlyRet),
      );
      retVar = "result_buf";
      retType = "napi_value";
      jsRet = FFIType.napi_value;
      break;
    case ClangType.CXType:
      earlyRet = "NULL";
      postCallForms.push(CXTypeToArrayBuffer("result", "result_buf", earlyRet));
      retVar = "result_buf";
      retType = "napi_value";
      jsRet = FFIType.napi_value;
      break;
    case ClangType.CXToken:
      earlyRet = "NULL";
      postCallForms.push(
        CXTokenToArrayBuffer("result", "result_buf", earlyRet),
      );
      retVar = "result_buf";
      retType = "napi_value";
      jsRet = FFIType.napi_value;
      break;
    case FFIType.void:
      earlyRet = "";
      retVar = "";
      retType = "void";
      jsRet = FFIType.void;
      break;
    case FFIType.cstring:
      earlyRet = "NULL";
      postCallForms.push(cstringToJSString("result", "result_str", earlyRet));
      retVar = "result_str";
      retType = "napi_value";
      jsRet = FFIType.napi_value;
      break;
    default:
      earlyRet = "0";
      retVar = "result";
      retType = calleeRetType as FFITypeOrString;
      jsRet = func.returns;
      break;
  }
  func.args.forEach((arg, i) => {
    switch (arg) {
      case ClangType.CXString:
        defArgs.push(`napi_value arg${i}`);
        preCallForms.push(
          CXStringFromArrayBuffer(`arg${i}`, `arg${i}_buf`, earlyRet),
        );
        callArgs.push(`arg${i}_buf`);
        jsArgs.push(FFIType.napi_value);
        break;
      case ClangType.CXCursor:
        defArgs.push(`napi_value arg${i}`);
        preCallForms.push(
          CXCursorFromArrayBuffer(`arg${i}`, `arg${i}_buf`, earlyRet),
        );
        callArgs.push(`arg${i}_buf`);
        jsArgs.push(FFIType.napi_value);
        break;
      case ClangType.CXType:
        defArgs.push(`napi_value arg${i}`);
        preCallForms.push(
          CXTypeFromArrayBuffer(`arg${i}`, `arg${i}_buf`, earlyRet),
        );
        callArgs.push(`arg${i}_buf`);
        jsArgs.push(FFIType.napi_value);
        break;
      case ClangType.CXToken:
        defArgs.push(`napi_value arg${i}`);
        preCallForms.push(
          CXTokenFromArrayBuffer(`arg${i}`, `arg${i}_buf`, earlyRet),
        );
        callArgs.push(`arg${i}_buf`);
        jsArgs.push(FFIType.napi_value);
        break;
      case FFIType.cstring:
        defArgs.push(`napi_value arg${i}`);
        preCallForms.push(
          cstringFromJSString(`arg${i}`, `arg${i}_cstr`, earlyRet),
        );
        postCallForms.push(`free(arg${i}_cstr);`);
        callArgs.push(`arg${i}_cstr`);
        jsArgs.push(FFIType.napi_value);
        break;
      default:
        defArgs.push(`${sig(arg)} arg${i}`);
        callArgs.push(`arg${i}`);
        jsArgs.push(arg);
        break;
    }
  });
  defArgs.push("napi_env env");
  jsArgs.push(FFIType.napi_env);

  const call = `${calleeRetType === "void" ? "" : calleeRetType + " result = "}${name}(${callArgs.join(", ")});`;
  return {
    typedefs,
    fdef: calleeDef,
    code: `
${retType} ${wrappedName}(${defArgs.join(", ")}) {
  ${preCallForms.join("\n  ")}
  ${call}
  ${postCallForms.join("\n  ")}
  return ${retVar};
}`,
    fns: {
      [wrappedName]: {
        args: jsArgs,
        returns: jsRet,
      },
    },
  };
}

export const defaultLibclangPath = (await Bun.file(
  `libclang.${suffix}`,
).exists()) // try local
  ? `libclang.${suffix}`
  : os.platform() === "darwin"
    ? (await Bun.file("/opt/homebrew/opt/llvm/lib/libclang.dylib").exists())
      ? "/opt/homebrew/opt/llvm/lib/libclang.dylib" // try homebrew
      : `libclang.${suffix}` // praise the DYLD_LIBRARY_PATH
    : `libclang.${suffix}`;

export var libclang: Record<string, (...args: any[]) => any> | null = null;

export function load(libclangPath?: string) {
  // why we need the `library` option of `cc` to link libclang with TinyCC
  // when we can use symbols directly from RTLD_GLOBAL ? ¯\_(ツ)_/¯
  const libsystem = dlopen(
    os.platform() === "darwin" ? "libSystem.B.dylib" : "ld-linux.so",
    {
      dlopen: {
        args: [FFIType.cstring, FFIType.i32],
        returns: FFIType.u64,
      },
    },
  ).symbols;

  const RTLD_NOW = 0x2;
  const RTLD_GLOBAL = 0x8;

  const libclangHandle = libsystem.dlopen(
    Buffer.from(libclangPath ? libclangPath : defaultLibclangPath + "\0"),
    RTLD_NOW | RTLD_GLOBAL,
  );

  if (libclangHandle === 0n) {
    throw new Error(`Failed to load libclang from path: ${libclangPath}`);
  }

  const typedefss = new Set<string>();
  const fdefs: string[] = [];
  const codes: string[] = [];
  const fnss: Record<string, FFIFunction> = {};
  Object.entries(libclangBindings).forEach(([name, func]) => {
    const { typedefs, fdef, code, fns } = genWrapperCode(name, func);
    typedefs.forEach((td) => typedefss.add(td));
    fdefs.push(fdef);
    codes.push(code);
    Object.assign(fnss, fns);
  });
  const code = `#include <node/node_api.h>
#include <stdlib.h>
#include <string.h>

${Array.from(typedefss).join("\n")}

${fdefs.join("\n")}

${codes.join("\n")}
`;
  const source = Bun.file(os.tmpdir() + `/__bun_libclang_wrapper.c`);
  Bun.write(source, code);
  libclang = {};
  Object.entries(
    cc({
      source,
      symbols: fnss,
    }).symbols,
  ).forEach(([name, fn]) => {
    libclang![name.replace("__wrapped_", "")] = fn;
  });
  source.delete();
}

export function assertLibclang(
  lib: any,
): asserts lib is Record<string, (...args: any[]) => any> {
  if (!libclang) {
    throw new Error("libclang is not loaded. Call load() first.");
  }
  if (lib.clang_getCString === undefined) {
    throw new Error("libclang is not loaded correctly.");
  }
}

export function unload() {
  // again, nobody dlclose ;P
  libclang = null;
}
