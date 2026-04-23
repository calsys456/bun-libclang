import {
  FFIType,
  type FFIFunction,
  dlopen,
  type FFITypeOrString,
  cc,
  suffix,
  JSCallback,
  toArrayBuffer,
  type Pointer,
  toBuffer,
  ptr,
  type FFITypeToArgsType,
  type FFITypeStringToType,
  type FFITypeToReturnsType,
  type ToFFIType,
} from "bun:ffi";
import os from "os";
import {
  libclangBindings,
  ClangType,
  nodeApiCall,
  structToArrayBuffer,
  structFromArrayBuffer,
  ClangTypedefs,
  ClangTypeSizes,
  CXLoadDiag_None,
  type libclangByValueStruct,
} from "./bindings";

/// Types

type libclangFunction = keyof typeof libclangBindings;

function isByValueStruct(type: unknown): type is libclangByValueStruct {
  return typeof type === "string" && type.startsWith("CX");
}

type libclangArg<U> = U extends libclangByValueStruct
  ? ArrayBuffer
  : U extends FFIType.cstring | "cstring"
    ? string
    : U extends FFITypeOrString
      ? FFITypeToArgsType[ToFFIType<U>]
      : never;

type libclangRet<U> = U extends libclangByValueStruct
  ? ArrayBuffer
  : U extends FFIType.cstring | "cstring"
    ? string
    : U extends FFITypeOrString
      ? FFITypeToReturnsType[ToFFIType<U>]
      : never;

type libclangArgs<T> = {
  [K in keyof T]: libclangArg<T[K]>;
};

type libclangLib = {
  [P in libclangFunction]: (
    ...args: libclangArgs<(typeof libclangBindings)[P]["args"]>
  ) => libclangRet<(typeof libclangBindings)[P]["returns"]>;
};

export var libclang: libclangLib | undefined;

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
    const cursorBuf = toArrayBuffer(cursorAddr, 0, ClangTypeSizes.CXCursor);
    const parentBuf = toArrayBuffer(parentAddr, 0, ClangTypeSizes.CXCursor);
    return callback(cursorBuf, parentBuf, clientData);
  };
  const cb = new JSCallback(wrappedCb, {
    args: [FFIType.pointer, FFIType.pointer, FFIType.pointer],
    returns: FFIType.i32,
  });
  const code = `#include <node/node_api.h>

${ClangTypedefs[ClangType.CXCursor]}

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

function genWrapperCode(
  name: string,
  func: (typeof libclangBindings)[keyof typeof libclangBindings],
): WrapperCode {
  const typedefs: Set<string> = new Set();
  const sig = (type: ClangType | FFITypeOrString): string => {
    if (isByValueStruct(type)) {
      typedefs.add(ClangTypedefs[type]);
      return type;
    } else {
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
        default:
          throw new TypeError(`Unsupported type: ${type}`);
      }
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

  if (isByValueStruct(func.returns)) {
    earlyRet = "NULL";
    postCallForms.push(
      structToArrayBuffer(func.returns, "result", "result_buf", earlyRet),
    );
    retVar = "result_buf";
    retType = "napi_value";
    jsRet = FFIType.napi_value;
  } else if (func.returns === FFIType.void) {
    earlyRet = "";
    retVar = "";
    retType = "void";
    jsRet = FFIType.void;
  } else if (func.returns === FFIType.cstring) {
    earlyRet = "NULL";
    postCallForms.push(cstringToJSString("result", "result_str", earlyRet));
    retVar = "result_str";
    retType = "napi_value";
    jsRet = FFIType.napi_value;
  } else {
    earlyRet = "0";
    retVar = "result";
    retType = calleeRetType as FFITypeOrString;
    jsRet = func.returns as FFITypeOrString;
  }
  func.args.forEach((arg, i) => {
    if (isByValueStruct(arg)) {
      defArgs.push(`napi_value arg${i}`);
      preCallForms.push(
        structFromArrayBuffer(arg, `arg${i}`, `arg${i}_buf`, earlyRet),
      );
      callArgs.push(`arg${i}_buf`);
      jsArgs.push(FFIType.napi_value);
    } else if (arg === FFIType.cstring) {
      defArgs.push(`napi_value arg${i}`);
      preCallForms.push(
        cstringFromJSString(`arg${i}`, `arg${i}_cstr`, earlyRet),
      );
      postCallForms.push(`free(arg${i}_cstr);`);
      callArgs.push(`arg${i}_cstr`);
      jsArgs.push(FFIType.napi_value);
    } else {
      defArgs.push(`${sig(arg)} arg${i}`);
      callArgs.push(`arg${i}`);
      jsArgs.push(arg as FFITypeOrString);
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

export function load(libclangPath: string = defaultLibclangPath) {
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
    Buffer.from(libclangPath + "\0"),
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
  const lib: Record<string, (...args: any[]) => any> = {};
  Object.entries(
    cc({
      source,
      symbols: fnss,
    }).symbols,
  ).forEach(([name, fn]) => {
    lib[name.replace("__wrapped_", "")] = fn;
  });
  source.delete();
  libclang = lib as libclangLib;
}

export function assertLibclang(lib: any): asserts lib is libclangLib {
  if (!libclang) {
    throw new Error("libclang is not loaded. Call load() first.");
  }
  if (lib.clang_getCString === undefined) {
    throw new Error("libclang is not loaded correctly.");
  }
}

export function unload() {
  // again, nobody dlclose ;P
  libclang = undefined;
}
