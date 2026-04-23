import { expect, test } from "bun:test";
import { load, libclang, assertLibclang, makeCXCursorVisitor } from "../index";
import { CXChildVisitResult } from "../bindings";

test("Basic", () => {
  load();
  assertLibclang(libclang);
  const idx = libclang.clang_createIndex!(false, false);
  console.log("Index:", idx);
  console.log(libclang.clang_createTranslationUnitFromSourceFile);
  const tu = libclang.clang_createTranslationUnitFromSourceFile!(
    idx,
    "./test/hello.c",
    0,
    null,
    0,
    null,
  );
  console.log("Translation Unit:", tu);
  const cursor = libclang.clang_getTranslationUnitCursor!(tu);
  console.log("Cursor:", cursor);
  const kind = libclang.clang_getCursorKind!(cursor);
  console.log("Cursor kind:", kind);
  const kinds: number[] = [];
  const visitor = makeCXCursorVisitor((cursor, parent, clientData) => {
    console.log("Visiting cursor", cursor);
    console.log(
      "Cursor:",
      libclang!.clang_getCString!(libclang!.clang_getCursorSpelling!(cursor)),
      "kind:",
      libclang!.clang_getCursorKind!(cursor),
    );
    kinds.push(libclang!.clang_getCursorKind!(cursor));
    return CXChildVisitResult.recurse;
  });
  libclang.clang_visitChildren!(cursor, visitor, null);
  console.log("Visited cursor kinds:", kinds);
});
