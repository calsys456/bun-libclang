import { expect, test } from "bun:test";
import { load, libclang, assertLibclang, makeCXCursorVisitor } from "../index";
import { CXChildVisit_Recurse } from "../bindings";

test("Basic", () => {
  load();
  assertLibclang(libclang);
  const idx = libclang.clang_createIndex!(false, false);
  console.log("Index:", idx);
  console.log(libclang.clang_createTranslationUnitFromSourceFile);
  const tu = libclang.clang_createTranslationUnitFromSourceFile!(
    idx,
    Buffer.from(
      "/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk/System/Library/Frameworks/AppKit.framework/Versions/C/Headers/NSWindow.h\0",
    ),
    0,
    null,
    0,
    null,
  );
  console.log("Translation Unit:", tu);
  const cursor = libclang.clang_getTranslationUnitCursor!(tu);
  const kind = libclang.clang_getCursorKind!(cursor);
  const visitor = makeCXCursorVisitor((cursor, parent, clientData) => {
    console.log("Cursor kind:", libclang!.clang_getCursorKind!(cursor));
    return CXChildVisit_Recurse;
  });
  libclang.clang_visitChildren!(cursor, visitor, null);
});
