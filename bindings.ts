import { FFIType, JSCallback, type FFITypeOrString } from "bun:ffi";

/// Enums

// CXErrorCode.h

export enum CXErrorCode {
  success = 0,
  failure = 1,
  crashed = 2,
  invalidArguments = 3,
  astReadError = 4,
}

// CXDiagnostic.h

export enum CXDiagnosticSeverity {
  ignored = 0,
  note = 1,
  warning = 2,
  error = 3,
  fatal = 4,
}

export enum CXLoadDiag_Error {
  none = 0,
  unknown = 1,
  cannotLoad = 2,
  invalidFile = 3,
}

export enum CXDiagnosticDisplayOptions {
  displaySourceLocation = 0x01,
  displayColumn = 0x02,
  displaySourceRanges = 0x04,
  displayOption = 0x08,
  displayCategoryId = 0x10,
  displayCategoryName = 0x20,
}

// Index.h

export enum CXAvailabilityKind {
  available = 0,
  deprecated = 1,
  notAvailable = 2,
  notAccessible = 3,
}

export enum CXCursor_ExceptionSpecificationKind {
  none = 0,
  dynamicNone = 1,
  dynamic = 2,
  MSAny = 3,
  basicNoexcept = 4,
  computedNoexcept = 5,
  unevaluated = 6,
  uninstantiated = 7,
  unparsed = 8,
  noThrow = 9,
}

export enum CXChoice {
  default = 0,
  enabled = 1,
  disabled = 2,
}

export enum CXGlobalOptFlags {
  none = 0x0,
  threadBackgroundPriorityForIndexing = 0x1,
  threadBackgroundPriorityForEditing = 0x2,
  threadBackgroundPriorityForAll = CXGlobalOptFlags.threadBackgroundPriorityForIndexing |
    CXGlobalOptFlags.threadBackgroundPriorityForEditing,
}

export enum CXTranslationUnit_Flags {
  none = 0x0,
  detailedPreprocessingRecord = 0x01,
  incomplete = 0x02,
  precompiledPreamble = 0x04,
  cacheCompletionResults = 0x08,
  forSerialization = 0x10,
  CXXChainedPCH = 0x20,
  skipFunctionBodies = 0x40,
  includeBriefCommentsInCodeCompletion = 0x80,
  createPreambleOnFirstParse = 0x100,
  keepGoing = 0x200,
  singleFileParse = 0x400,
  limitSkipFunctionBodiesToPreamble = 0x800,
  includeAttributedTypes = 0x1000,
  // Backward-compatible alias.
  includeAttributedTypesInCodeCompletion = CXTranslationUnit_Flags.includeAttributedTypes,
  visitImplicitAttributes = 0x2000,
  ignoreNonErrorsFromIncludedFiles = 0x4000,
  retainExcludedConditionalBlocks = 0x8000,
}

export enum CXSaveTranslationUnit_Flags {
  none = 0x0,
}

export enum CXSaveError {
  none = 0,
  unknown = 1,
  translationErrors = 2,
  invalidTU = 3,
}

export enum CXReparse_Flags {
  none = 0x0,
}

export enum CXTUResourceUsageKind {
  AST = 1,
  identifiers = 2,
  selectors = 3,
  globalCompletionResults = 4,
  sourceManagerContentCache = 5,
  AST_SideTables = 6,
  // Backward-compatible alias.
  AST_SideFiles = CXTUResourceUsageKind.AST_SideTables,
  sourceManager_Membuffer_Malloc = 7,
  sourceManager_Membuffer_MMap = 8,
  externalASTSource_Membuffer_Malloc = 9,
  externalASTSource_Membuffer_MMap = 10,
  preprocessor = 11,
  preprocessingRecord = 12,
  sourceManager_DataStructures = 13,
  preprocessor_HeaderSearch = 14,
  MEMORY_IN_BYTES_BEGIN = CXTUResourceUsageKind.AST,
  MEMORY_IN_BYTES_END = CXTUResourceUsageKind.preprocessor_HeaderSearch,
  first = CXTUResourceUsageKind.AST,
  last = CXTUResourceUsageKind.preprocessor_HeaderSearch,
}

export enum CXCursorKind {
  unexposedDecl = 1,
  structDecl = 2,
  unionDecl = 3,
  classDecl = 4,
  enumDecl = 5,
  fieldDecl = 6,
  enumConstantDecl = 7,
  functionDecl = 8,
  varDecl = 9,
  parmDecl = 10,
  objCInterfaceDecl = 11,
  objCCategoryDecl = 12,
  objCProtocolDecl = 13,
  objCPropertyDecl = 14,
  objCIvarDecl = 15,
  objCInstanceMethodDecl = 16,
  objCClassMethodDecl = 17,
  objCImplementationDecl = 18,
  objCCategoryImplDecl = 19,
  typedefDecl = 20,
  CXXMethod = 21,
  namespace = 22,
  linkageSpec = 23,
  constructor = 24,
  destructor = 25,
  conversionFunction = 26,
  templateTypeParameter = 27,
  nonTypeTemplateParameter = 28,
  templateTemplateParameter = 29,
  functionTemplate = 30,
  classTemplate = 31,
  classTemplatePartialSpecialization = 32,
  namespaceAlias = 33,
  usingDirective = 34,
  usingDeclaration = 35,
  typeAliasDecl = 36,
  objCSynthesizeDecl = 37,
  objCDynamicDecl = 38,
  CXXAccessSpecifier = 39,
  firstDecl = CXCursorKind.unexposedDecl,
  lastDecl = CXCursorKind.CXXAccessSpecifier,
  firstRef = 40,
  objCSuperClassRef = 40,
  objCProtocolRef = 41,
  objCClassRef = 42,
  typeRef = 43,
  CXXBaseSpecifier = 44,
  templateRef = 45,
  namespaceRef = 46,
  memberRef = 47,
  labelRef = 48,
  overloadedDeclRef = 49,
  variableRef = 50,
  lastRef = CXCursorKind.variableRef,
  firstInvalid = 70,
  invalidFile = 70,
  noDeclFound = 71,
  notImplemented = 72,
  invalidCode = 73,
  lastInvalid = CXCursorKind.invalidCode,
  firstExpr = 100,
  unexposedExpr = 100,
  declRefExpr = 101,
  memberRefExpr = 102,
  callExpr = 103,
  objCMessageExpr = 104,
  blockExpr = 105,
  integerLiteral = 106,
  floatingLiteral = 107,
  imaginaryLiteral = 108,
  stringLiteral = 109,
  characterLiteral = 110,
  parenExpr = 111,
  unaryOperator = 112,
  arraySubscriptExpr = 113,
  binaryOperator = 114,
  compoundAssignOperator = 115,
  conditionalOperator = 116,
  CStyleCastExpr = 117,
  compoundLiteralExpr = 118,
  initListExpr = 119,
  addrLabelExpr = 120,
  stmtExpr = 121,
  genericSelectionExpr = 122,
  GNUNullExpr = 123,
  CXXStaticCastExpr = 124,
  CXXDynamicCastExpr = 125,
  CXXReinterpretCastExpr = 126,
  CXXConstCastExpr = 127,
  CXXFunctionalCastExpr = 128,
  CXXTypeidExpr = 129,
  CXXBoolLiteralExpr = 130,
  CXXNullPtrLiteralExpr = 131,
  CXXThisExpr = 132,
  CXXThrowExpr = 133,
  CXXNewExpr = 134,
  CXXDeleteExpr = 135,
  unaryExpr = 136,
  objCStringLiteral = 137,
  objCEncodeExpr = 138,
  objCSelectorExpr = 139,
  objCProtocolExpr = 140,
  objCBridgedCastExpr = 141,
  packExpansionExpr = 142,
  sizeOfPackExpr = 143,
  lambdaExpr = 144,
  objCBoolLiteralExpr = 145,
  objCSelfExpr = 146,
  arraySectionExpr = 147,
  objCAvailabilityCheckExpr = 148,
  fixedPointLiteral = 149,
  OMPArrayShapingExpr = 150,
  OMPIteratorExpr = 151,
  CXXAddrspaceCastExpr = 152,
  conceptSpecializationExpr = 153,
  requiresExpr = 154,
  CXXParenListInitExpr = 155,
  packIndexingExpr = 156,
  lastExpr = CXCursorKind.packIndexingExpr,
  firstStmt = 200,
  unexposedStmt = 200,
  labelStmt = 201,
  compoundStmt = 202,
  caseStmt = 203,
  defaultStmt = 204,
  ifStmt = 205,
  switchStmt = 206,
  whileStmt = 207,
  doStmt = 208,
  forStmt = 209,
  gotoStmt = 210,
  indirectGotoStmt = 211,
  continueStmt = 212,
  breakStmt = 213,
  returnStmt = 214,
  GCCAsmStmt = 215,
  asmStmt = CXCursorKind.GCCAsmStmt,
  objCAtTryStmt = 216,
  objCAtCatchStmt = 217,
  objCAtFinallyStmt = 218,
  objCAtThrowStmt = 219,
  objCAtSynchronizedStmt = 220,
  objCAutoreleasePoolStmt = 221,
  objCForCollectionStmt = 222,
  CXXCatchStmt = 223,
  CXXTryStmt = 224,
  CXXForRangeStmt = 225,
  SEHTryStmt = 226,
  SEHExceptStmt = 227,
  SEHFinallyStmt = 228,
  MSAsmStmt = 229,
  nullStmt = 230,
  declStmt = 231,
  OMPParallelDirective = 232,
  OMPSimdDirective = 233,
  OMPForDirective = 234,
  OMPSectionsDirective = 235,
  OMPSectionDirective = 236,
  OMPSingleDirective = 237,
  OMPParallelForDirective = 238,
  OMPParallelSectionsDirective = 239,
  OMPTaskDirective = 240,
  OMPMasterDirective = 241,
  OMPCriticalDirective = 242,
  OMPTaskyieldDirective = 243,
  OMPBarrierDirective = 244,
  OMPTaskwaitDirective = 245,
  OMPFlushDirective = 246,
  SEHLeaveStmt = 247,
  OMPOrderedDirective = 248,
  OMPAtomicDirective = 249,
  OMPForSimdDirective = 250,
  OMPParallelForSimdDirective = 251,
  OMPTargetDirective = 252,
  OMPTeamsDirective = 253,
  OMPTaskgroupDirective = 254,
  OMPCancellationPointDirective = 255,
  OMPCancelDirective = 256,
  OMPTargetDataDirective = 257,
  OMPTaskLoopDirective = 258,
  OMPTaskLoopSimdDirective = 259,
  OMPDistributeDirective = 260,
  OMPTargetEnterDataDirective = 261,
  OMPTargetExitDataDirective = 262,
  OMPTargetParallelDirective = 263,
  OMPTargetParallelForDirective = 264,
  OMPTargetUpdateDirective = 265,
  OMPDistributeParallelForDirective = 266,
  OMPDistributeParallelForSimdDirective = 267,
  OMPDistributeSimdDirective = 268,
  OMPTargetParallelForSimdDirective = 269,
  OMPTargetSimdDirective = 270,
  OMPTeamsDistributeDirective = 271,
  OMPTeamsDistributeSimdDirective = 272,
  OMPTeamsDistributeParallelForSimdDirective = 273,
  OMPTeamsDistributeParallelForDirective = 274,
  OMPTargetTeamsDirective = 275,
  OMPTargetTeamsDistributeDirective = 276,
  OMPTargetTeamsDistributeParallelForDirective = 277,
  OMPTargetTeamsDistributeParallelForSimdDirective = 278,
  OMPTargetTeamsDistributeSimdDirective = 279,
  builtinBitCastExpr = 280,
  OMPMasterTaskLoopDirective = 281,
  OMPParallelMasterTaskLoopDirective = 282,
  OMPMasterTaskLoopSimdDirective = 283,
  OMPParallelMasterTaskLoopSimdDirective = 284,
  OMPParallelMasterDirective = 285,
  OMPDepobjDirective = 286,
  OMPScanDirective = 287,
  OMPTileDirective = 288,
  OMPCanonicalLoop = 289,
  OMPInteropDirective = 290,
  OMPDispatchDirective = 291,
  OMPMaskedDirective = 292,
  OMPUnrollDirective = 293,
  OMPMetaDirective = 294,
  OMPGenericLoopDirective = 295,
  OMPTeamsGenericLoopDirective = 296,
  OMPTargetTeamsGenericLoopDirective = 297,
  OMPParallelGenericLoopDirective = 298,
  OMPTargetParallelGenericLoopDirective = 299,
  OMPParallelMaskedDirective = 300,
  OMPMaskedTaskLoopDirective = 301,
  OMPMaskedTaskLoopSimdDirective = 302,
  OMPParallelMaskedTaskLoopDirective = 303,
  OMPParallelMaskedTaskLoopSimdDirective = 304,
  OMPErrorDirective = 305,
  OMPScopeDirective = 306,
  OMPReverseDirective = 307,
  OMPInterchangeDirective = 308,
  OMPAssumeDirective = 309,
  OMPStripeDirective = 310,
  OMPFuseDirective = 311,
  openACCComputeConstruct = 320,
  openACCLoopConstruct = 321,
  openACCCombinedConstruct = 322,
  openACCDataConstruct = 323,
  openACCEnterDataConstruct = 324,
  openACCExitDataConstruct = 325,
  openACCHostDataConstruct = 326,
  openACCWaitConstruct = 327,
  openACCInitConstruct = 328,
  openACCShutdownConstruct = 329,
  openACCSetConstruct = 330,
  openACCUpdateConstruct = 331,
  openACCAtomicConstruct = 332,
  openACCCacheConstruct = 333,
  lastStmt = CXCursorKind.openACCCacheConstruct,
  translationUnit = 350,
  firstAttr = 400,
  unexposedAttr = 400,
  IBActionAttr = 401,
  IBOutletAttr = 402,
  IBOutletCollectionAttr = 403,
  CXXFinalAttr = 404,
  CXXOverrideAttr = 405,
  annotateAttr = 406,
  asmLabelAttr = 407,
  packedAttr = 408,
  pureAttr = 409,
  constAttr = 410,
  noDuplicateAttr = 411,
  CUDAConstantAttr = 412,
  CUDADeviceAttr = 413,
  CUDAGlobalAttr = 414,
  CUDAHostAttr = 415,
  CUDASharedAttr = 416,
  visibilityAttr = 417,
  DLLExport = 418,
  DLLImport = 419,
  NSReturnsRetained = 420,
  NSReturnsNotRetained = 421,
  NSReturnsAutoreleased = 422,
  NSConsumesSelf = 423,
  NSConsumed = 424,
  objCException = 425,
  objCNSObject = 426,
  objCIndependentClass = 427,
  objCPreciseLifetime = 428,
  objCReturnsInnerPointer = 429,
  objCRequiresSuper = 430,
  objCRootClass = 431,
  objCSubclassingRestricted = 432,
  objCExplicitProtocolImpl = 433,
  objCDesignatedInitializer = 434,
  objCRuntimeVisible = 435,
  objCBoxable = 436,
  flagEnum = 437,
  convergentAttr = 438,
  warnUnusedAttr = 439,
  warnUnusedResultAttr = 440,
  alignedAttr = 441,
  lastAttr = CXCursorKind.alignedAttr,
  preprocessingDirective = 500,
  macroDefinition = 501,
  macroExpansion = 502,
  macroInstantiation = CXCursorKind.macroExpansion,
  inclusionDirective = 503,
  firstPreprocessing = CXCursorKind.preprocessingDirective,
  lastPreprocessing = CXCursorKind.inclusionDirective,
  moduleImportDecl = 600,
  typeAliasTemplateDecl = 601,
  staticAssert = 602,
  friendDecl = 603,
  conceptDecl = 604,
  firstExtraDecl = CXCursorKind.moduleImportDecl,
  lastExtraDecl = CXCursorKind.conceptDecl,
  overloadCandidate = 700,
}

export enum CXLinkageKind {
  invalid = 0,
  noLinkage = 1,
  internal = 2,
  uniqueExternal = 3,
  external = 4,
}

export enum CXVisibilityKind {
  invalid = 0,
  hidden = 1,
  protected = 2,
  default = 3,
}

export enum CXLanguageKind {
  invalid = 0,
  C = 1,
  objC = 2,
  CPlusPlus = 3,
}

export enum CXTLSKind {
  none = 0,
  dynamic = 1,
  static = 2,
}

export enum CXTypeKind {
  invalid = 0,
  unexposed = 1,
  void = 2,
  bool = 3,
  char_U = 4,
  UChar = 5,
  char16 = 6,
  char32 = 7,
  UShort = 8,
  UInt = 9,
  ULong = 10,
  ULongLong = 11,
  UInt128 = 12,
  char_S = 13,
  SChar = 14,
  WChar = 15,
  short = 16,
  int = 17,
  long = 18,
  longLong = 19,
  int128 = 20,
  float = 21,
  double = 22,
  longDouble = 23,
  nullPtr = 24,
  overload = 25,
  dependent = 26,
  objCId = 27,
  objCClass = 28,
  objCSel = 29,
  float128 = 30,
  half = 31,
  float16 = 32,
  shortAccum = 33,
  accum = 34,
  longAccum = 35,
  UShortAccum = 36,
  UAccum = 37,
  ULongAccum = 38,
  BFloat16 = 39,
  ibm128 = 40,
  firstBuiltin = CXTypeKind.void,
  lastBuiltin = CXTypeKind.ibm128,
  complex = 100,
  pointer = 101,
  blockPointer = 102,
  LValueReference = 103,
  RValueReference = 104,
  record = 105,
  enum = 106,
  typedef = 107,
  objCInterface = 108,
  objCObjectPointer = 109,
  functionNoProto = 110,
  functionProto = 111,
  constantArray = 112,
  vector = 113,
  incompleteArray = 114,
  variableArray = 115,
  dependentSizedArray = 116,
  memberPointer = 117,
  auto = 118,
  elaborated = 119,
  pipe = 120,
  OCLImage1dRO = 121,
  OCLImage1dArrayRO = 122,
  OCLImage1dBufferRO = 123,
  OCLImage2dRO = 124,
  OCLImage2dArrayRO = 125,
  OCLImage2dDepthRO = 126,
  OCLImage2dArrayDepthRO = 127,
  OCLImage2dMSAARO = 128,
  OCLImage2dArrayMSAARO = 129,
  OCLImage2dMSAADepthRO = 130,
  OCLImage2dArrayMSAADepthRO = 131,
  OCLImage3dRO = 132,
  OCLImage1dWO = 133,
  OCLImage1dArrayWO = 134,
  OCLImage1dBufferWO = 135,
  OCLImage2dWO = 136,
  OCLImage2dArrayWO = 137,
  OCLImage2dDepthWO = 138,
  OCLImage2dArrayDepthWO = 139,
  OCLImage2dMSAAWO = 140,
  OCLImage2dArrayMSAAWO = 141,
  OCLImage2dMSAADepthWO = 142,
  OCLImage2dArrayMSAADepthWO = 143,
  OCLImage3dWO = 144,
  OCLImage1dRW = 145,
  OCLImage1dArrayRW = 146,
  OCLImage1dBufferRW = 147,
  OCLImage2dRW = 148,
  OCLImage2dArrayRW = 149,
  OCLImage2dDepthRW = 150,
  OCLImage2dArrayDepthRW = 151,
  OCLImage2dMSAARW = 152,
  OCLImage2dArrayMSAARW = 153,
  OCLImage2dMSAADepthRW = 154,
  OCLImage2dArrayMSAADepthRW = 155,
  OCLImage3dRW = 156,
  OCLSampler = 157,
  OCLEvent = 158,
  OCLQueue = 159,
  OCLReserveID = 160,
  objCObject = 161,
  objCTypeParam = 162,
  attributed = 163,
  OCLIntelSubgroupAVCMcePayload = 164,
  OCLIntelSubgroupAVCImePayload = 165,
  OCLIntelSubgroupAVCRefPayload = 166,
  OCLIntelSubgroupAVCSicPayload = 167,
  OCLIntelSubgroupAVCMceResult = 168,
  OCLIntelSubgroupAVCImeResult = 169,
  OCLIntelSubgroupAVCRefResult = 170,
  OCLIntelSubgroupAVCSicResult = 171,
  OCLIntelSubgroupAVCImeResultSingleReferenceStreamout = 172,
  OCLIntelSubgroupAVCImeResultDualReferenceStreamout = 173,
  OCLIntelSubgroupAVCImeSingleReferenceStreamin = 174,
  OCLIntelSubgroupAVCImeDualReferenceStreamin = 175,
  OCLIntelSubgroupAVCImeResultSingleRefStreamout = 172,
  OCLIntelSubgroupAVCImeResultDualRefStreamout = 173,
  OCLIntelSubgroupAVCImeSingleRefStreamin = 174,
  OCLIntelSubgroupAVCImeDualRefStreamin = 175,
  extVector = 176,
  atomic = 177,
  BTFTagAttributed = 178,
  HLSLResource = 179,
  HLSLAttributedResource = 180,
  HLSLInlineSpirv = 181,
}

export enum CXCallingConv {
  default = 0,
  C = 1,
  X86StdCall = 2,
  X86FastCall = 3,
  X86ThisCall = 4,
  X86Pascal = 5,
  AAPCS = 6,
  AAPCS_VFP = 7,
  X86RegCall = 8,
  intelOclBicc = 9,
  win64 = 10,
  X86_64Win64 = CXCallingConv.win64,
  X86_64SysV = 11,
  X86VectorCall = 12,
  swift = 13,
  preserveMost = 14,
  preserveAll = 15,
  AArch64VectorCall = 16,
  swiftAsync = 17,
  AArch64SVEPCS = 18,
  M68kRTD = 19,
  preserveNone = 20,
  RISCVVectorCall = 21,
  RISCVVLSCall_32 = 22,
  RISCVVLSCall_64 = 23,
  RISCVVLSCall_128 = 24,
  RISCVVLSCall_256 = 25,
  RISCVVLSCall_512 = 26,
  RISCVVLSCall_1024 = 27,
  RISCVVLSCall_2048 = 28,
  RISCVVLSCall_4096 = 29,
  RISCVVLSCall_8192 = 30,
  RISCVVLSCall_16384 = 31,
  RISCVVLSCall_32768 = 32,
  RISCVVLSCall_65536 = 33,
  invalid = 100,
  unexposed = 200,
}

export enum CXTemplateArgumentKind {
  null = 0,
  type = 1,
  declaration = 2,
  nullPtr = 3,
  integral = 4,
  template = 5,
  templateExpansion = 6,
  expression = 7,
  pack = 8,
  invalid = 9,
}

export enum CXTypeNullabilityKind {
  nonNull = 0,
  nullable = 1,
  unspecified = 2,
  invalid = 3,
  nullableResult = 4,
}

export enum CXTypeLayoutError {
  invalid = -1,
  incomplete = -2,
  dependent = -3,
  notConstantSize = -4,
  invalidFieldName = -5,
  undeduced = -6,
}

export enum CXRefQualifierKind {
  none = 0,
  LValue = 1,
  RValue = 2,
}

export enum CX_CXXAccessSpecifier {
  invalidAccessSpecifier = 0,
  public = 1,
  protected = 2,
  private = 3,
}

export enum CX_StorageClass {
  invalid = 0,
  none = 1,
  extern = 2,
  static = 3,
  privateExtern = 4,
  openCLWorkGroupLocal = 5,
  auto = 6,
  register = 7,
}

export enum CX_BinaryOperatorKind {
  invalid = 0,
  ptrMemD = 1,
  ptrMemI = 2,
  mul = 3,
  div = 4,
  rem = 5,
  add = 6,
  sub = 7,
  shl = 8,
  shr = 9,
  cmp = 10,
  LT = 11,
  GT = 12,
  LE = 13,
  GE = 14,
  EQ = 15,
  NE = 16,
  and = 17,
  xor = 18,
  or = 19,
  LAnd = 20,
  LOr = 21,
  assign = 22,
  mulAssign = 23,
  divAssign = 24,
  remAssign = 25,
  addAssign = 26,
  subAssign = 27,
  shlAssign = 28,
  shrAssign = 29,
  andAssign = 30,
  xorAssign = 31,
  orAssign = 32,
  comma = 33,
  LAST = CX_BinaryOperatorKind.comma,
}

export enum CXChildVisitResult {
  break = 0,
  continue = 1,
  recurse = 2,
}

export enum CXPrintingPolicyProperty {
  indentation = 0,
  suppressSpecifiers = 1,
  suppressTagKeyword = 2,
  includeTagDefinition = 3,
  suppressScope = 4,
  suppressUnwrittenScope = 5,
  suppressInitializers = 6,
  constantArraySizeAsWritten = 7,
  anonymousTagLocations = 8,
  suppressStrongLifetime = 9,
  suppressLifetimeQualifiers = 10,
  suppressTemplateArgsInCXXConstructors = 11,
  bool = 12,
  restrict = 13,
  alignof = 14,
  underscoreAlignof = 15,
  useVoidForZeroParams = 16,
  terseOutput = 17,
  polishForDeclaration = 18,
  half = 19,
  MSWChar = 20,
  includeNewlines = 21,
  MSVCFormatting = 22,
  constantsAsWritten = 23,
  suppressImplicitBase = 24,
  fullyQualifiedName = 25,
  lastProperty = CXPrintingPolicyProperty.fullyQualifiedName,
}

export enum CXObjCPropertyAttrKind {
  noattr = 0x00,
  readonly = 0x01,
  getter = 0x02,
  assign = 0x04,
  readwrite = 0x08,
  retain = 0x10,
  copy = 0x20,
  nonatomic = 0x40,
  setter = 0x80,
  atomic = 0x100,
  weak = 0x200,
  strong = 0x400,
  unsafe_unretained = 0x800,
  class = 0x1000,
}

export enum CXObjCDeclQualifierKind {
  none = 0x0,
  in = 0x1,
  inout = 0x2,
  out = 0x4,
  bycopy = 0x8,
  byref = 0x10,
  oneway = 0x20,
}

export enum CXNameRefFlags {
  wantQualifier = 0x1,
  wantTemplateArgs = 0x2,
  wantSinglePiece = 0x4,
}

export enum CXTokenKind {
  punctuation = 0,
  keyword = 1,
  identifier = 2,
  literal = 3,
  comment = 4,
}

export enum CXCompletionChunkKind {
  optional = 0,
  typedText = 1,
  text = 2,
  placeholder = 3,
  informative = 4,
  currentParameter = 5,
  leftParen = 6,
  rightParen = 7,
  leftBracket = 8,
  rightBracket = 9,
  leftBrace = 10,
  rightBrace = 11,
  leftAngle = 12,
  rightAngle = 13,
  comma = 14,
  resultType = 15,
  colon = 16,
  semiColon = 17,
  equal = 18,
  horizontalSpace = 19,
  verticalSpace = 20,
}

export enum CXCodeComplete_Flags {
  includeMacros = 0x01,
  includeCodePatterns = 0x02,
  includeBriefComments = 0x04,
  skipPreamble = 0x08,
  includeCompletionsWithFixIts = 0x10,
}

export enum CXCompletionContext {
  unexposed = 0,
  anyType = 1 << 0,
  anyValue = 1 << 1,
  objCObjectValue = 1 << 2,
  objCSelectorValue = 1 << 3,
  CXXClassTypeValue = 1 << 4,
  dotMemberAccess = 1 << 5,
  arrowMemberAccess = 1 << 6,
  objCPropertyAccess = 1 << 7,
  enumTag = 1 << 8,
  unionTag = 1 << 9,
  structTag = 1 << 10,
  classTag = 1 << 11,
  namespace = 1 << 12,
  nestedNameSpecifier = 1 << 13,
  objCInterface = 1 << 14,
  objCProtocol = 1 << 15,
  objCCategory = 1 << 16,
  objCInstanceMessage = 1 << 17,
  objCClassMessage = 1 << 18,
  objCSelectorName = 1 << 19,
  macroName = 1 << 20,
  naturalLanguage = 1 << 21,
  includedFile = 1 << 22,
  unknown = (1 << 23) - 1,
}

export enum CXEvalResultKind {
  int = 1,
  float = 2,
  objCStrLiteral = 3,
  strLiteral = 4,
  CFStr = 5,
  other = 6,
  unExposed = 0,
}

export enum CXVisitorResult {
  break = 0,
  continue = 1,
}

export enum CXResult {
  success = 0,
  invalid = 1,
  visitBreak = 2,
}

export enum CXIdxEntityKind {
  unexposed = 0,
  typedef = 1,
  function = 2,
  variable = 3,
  field = 4,
  enumConstant = 5,
  objCClass = 6,
  objCProtocol = 7,
  objCCategory = 8,
  objCInstanceMethod = 9,
  objCClassMethod = 10,
  objCProperty = 11,
  objCIvar = 12,
  enum = 13,
  struct = 14,
  union = 15,
  CXXClass = 16,
  CXXNamespace = 17,
  CXXNamespaceAlias = 18,
  CXXStaticVariable = 19,
  CXXStaticMethod = 20,
  CXXInstanceMethod = 21,
  CXXConstructor = 22,
  CXXDestructor = 23,
  CXXConversionFunction = 24,
  CXXTypeAlias = 25,
  CXXInterface = 26,
  CXXConcept = 27,
}

export enum CXIdxEntityLanguage {
  none = 0,
  C = 1,
  objC = 2,
  CXX = 3,
  swift = 4,
}

export enum CXIdxEntityCXXTemplateKind {
  nonTemplate = 0,
  template = 1,
  templatePartialSpecialization = 2,
  templateSpecialization = 3,
}

export enum CXIdxAttrKind {
  unexposed = 0,
  IBAction = 1,
  IBOutlet = 2,
  IBOutletCollection = 3,
}

export enum CXIdxDeclInfoFlags {
  skipped = 0x1,
}

export enum CXIdxObjCContainerKind {
  forwardRef = 0,
  interface = 1,
  implementation = 2,
}

export enum CXIdxEntityRefKind {
  direct = 1,
  implicit = 2,
}

export enum CXSymbolRole {
  none = 0,
  declaration = 1 << 0,
  definition = 1 << 1,
  reference = 1 << 2,
  read = 1 << 3,
  write = 1 << 4,
  call = 1 << 5,
  dynamic = 1 << 6,
  addressOf = 1 << 7,
  implicit = 1 << 8,
}

export enum CXIndexOptFlags {
  none = 0x0,
  suppressRedundantRefs = 0x1,
  indexFunctionLocalSymbols = 0x2,
  indexImplicitTemplateInstantiations = 0x4,
  suppressWarnings = 0x8,
  skipParsedBodiesInSession = 0x10,
}

export enum CXBinaryOperatorKind {
  invalid = 0,
  ptrMemD = 1,
  ptrMemI = 2,
  mul = 3,
  div = 4,
  rem = 5,
  add = 6,
  sub = 7,
  shl = 8,
  shr = 9,
  cmp = 10,
  LT = 11,
  GT = 12,
  LE = 13,
  GE = 14,
  EQ = 15,
  NE = 16,
  and = 17,
  xor = 18,
  or = 19,
  LAnd = 20,
  LOr = 21,
  assign = 22,
  mulAssign = 23,
  divAssign = 24,
  remAssign = 25,
  addAssign = 26,
  subAssign = 27,
  shlAssign = 28,
  shrAssign = 29,
  andAssign = 30,
  xorAssign = 31,
  orAssign = 32,
  comma = 33,
  last = CXBinaryOperatorKind.comma,
}

export enum CXUnaryOperatorKind {
  invalid = 0,
  postInc = 1,
  postDec = 2,
  preInc = 3,
  preDec = 4,
  addrOf = 5,
  deref = 6,
  plus = 7,
  minus = 8,
  not = 9,
  LNot = 10,
  real = 11,
  imag = 12,
  extension = 13,
  coawait = 14,
}

/// Typedef

/**
 * For structs that defined by-value but always used by-pointer in functions.
 *
 * `typedef struct *` should use `"ptr"` instead.
 */
const cstructPtr = "ptr";

export enum ClangType {
  // CXString.h
  CXString = "CXString", // by-value
  CXStringSet = cstructPtr,

  // CXFile.h
  CXFile = "ptr",
  CXFileUniqueID = "CXFileUniqueID", // by-value

  // CXSourceLocation.h
  CXSourceLocation = "CXSourceLocation", // by-value
  CXSourceRange = "CXSourceRange", // by-value
  CXSourceRangeList = cstructPtr,

  // CXDiagnostic.h
  CXDiagnostic = "ptr",
  CXDiagnosticSet = "ptr",

  // Index.h
  CXIndex = "ptr",
  CXTargetInfo = "ptr",
  CXTranslationUnit = "ptr",
  CXClientData = "ptr",
  CXUnsavedFile = "CXUnsavedFile", // by-value
  CXIndexOptions = cstructPtr,
  CXTUResourceUsage = "CXTUResourceUsage", // by-value
  CXCursor = "CXCursor", // CXCursor is used by-value
  CXPlatformAvailability = cstructPtr,
  CXCursorSet = "ptr",
  CXType = "CXType", // by-value
  CXModule = "ptr",
  CXPrintingPolicy = "ptr",
  CXToken = "CXToken", // by-value
  CXCompletionString = "ptr",
  CXCompletionResult = cstructPtr,
  CXCodeCompleteResults = cstructPtr,
  CXEvalResult = "ptr",
  CXCursorAndRangeVisitor = "CXCursorAndRangeVisitor", // by-value
  CXIdxLoc = "CXIdxLoc", // by-value
  CXIndexAction = "ptr",

  // Enums
  CXErrorCode = "enumCXErrorCode",
  CXDiagnosticSeverity = "enumCXDiagnosticSeverity",
  CXLoadDiag_Error = "enumCXLoadDiag_Error",
  CXDiagnosticDisplayOptions = "enumCXDiagnosticDisplayOptions",
  CXAvailabilityKind = "enumCXAvailabilityKind",
  CXCursor_ExceptionSpecificationKind = "enumCXCursor_ExceptionSpecificationKind",
  CXChoice = "enumCXChoice",
  CXGlobalOptFlags = "enumCXGlobalOptFlags",
  CXTranslationUnit_Flags = "enumCXTranslationUnit_Flags",
  CXSaveTranslationUnit_Flags = "enumCXSaveTranslationUnit_Flags",
  CXSaveError = "enumCXSaveError",
  CXReparse_Flags = "enumCXReparse_Flags",
  CXTUResourceUsageKind = "enumCXTUResourceUsageKind",
  CXCursorKind = "enumCXCursorKind",
  CXLinkageKind = "enumCXLinkageKind",
  CXVisibilityKind = "enumCXVisibilityKind",
  CXLanguageKind = "enumCXLanguageKind",
  CXTLSKind = "enumCXTLSKind",
  CXTypeKind = "enumCXTypeKind",
  CXCallingConv = "enumCXCallingConv",
  CXTemplateArgumentKind = "enumCXTemplateArgumentKind",
  CXTypeNullabilityKind = "enumCXTypeNullabilityKind",
  CXTypeLayoutError = "enumCXTypeLayoutError",
  CXRefQualifierKind = "enumCXRefQualifierKind",
  CX_CXXAccessSpecifier = "enumCX_CXXAccessSpecifier",
  CX_StorageClass = "enumCX_StorageClass",
  CX_BinaryOperatorKind = "enumCX_BinaryOperatorKind",
  CXChildVisitResult = "enumCXChildVisitResult",
  CXPrintingPolicyProperty = "enumCXPrintingPolicyProperty",
  CXObjCPropertyAttrKind = "enumCXObjCPropertyAttrKind",
  CXObjCDeclQualifierKind = "enumCXObjCDeclQualifierKind",
  CXNameRefFlags = "enumCXNameRefFlags",
  CXTokenKind = "enumCXTokenKind",
  CXCompletionChunkKind = "enumCXCompletionChunkKind",
  CXCodeComplete_Flags = "enumCXCodeComplete_Flags",
  CXCompletionContext = "enumCXCompletionContext",
  CXEvalResultKind = "enumCXEvalResultKind",
  CXVisitorResult = "enumCXVisitorResult",
  CXResult = "enumCXResult",
  CXIdxEntityKind = "enumCXIdxEntityKind",
  CXIdxEntityLanguage = "enumCXIdxEntityLanguage",
  CXIdxEntityCXXTemplateKind = "enumCXIdxEntityCXXTemplateKind",
  CXIdxAttrKind = "enumCXIdxAttrKind",
  CXIdxDeclInfoFlags = "enumCXIdxDeclInfoFlags",
  CXIdxObjCContainerKind = "enumCXIdxObjCContainerKind",
  CXIdxEntityRefKind = "enumCXIdxEntityRefKind",
  CXSymbolRole = "enumCXSymbolRole",
  CXIndexOptFlags = "enumCXIndexOptFlags",
  CXBinaryOperatorKind = "enumCXBinaryOperatorKind",
  CXUnaryOperatorKind = "enumCXUnaryOperatorKind",
}

export interface ClangTypeToEnumType {
  enumCXErrorCode: CXErrorCode;
  enumCXDiagnosticSeverity: CXDiagnosticSeverity;
  enumCXLoadDiag_Error: CXLoadDiag_Error;
  enumCXDiagnosticDisplayOptions: CXDiagnosticDisplayOptions;
  enumCXAvailabilityKind: CXAvailabilityKind;
  enumCXCursor_ExceptionSpecificationKind: CXCursor_ExceptionSpecificationKind;
  enumCXChoice: CXChoice;
  enumCXGlobalOptFlags: CXGlobalOptFlags;
  enumCXTranslationUnit_Flags: CXTranslationUnit_Flags;
  enumCXSaveTranslationUnit_Flags: CXSaveTranslationUnit_Flags;
  enumCXSaveError: CXSaveError;
  enumCXReparse_Flags: CXReparse_Flags;
  enumCXTUResourceUsageKind: CXTUResourceUsageKind;
  enumCXCursorKind: CXCursorKind;
  enumCXLinkageKind: CXLinkageKind;
  enumCXVisibilityKind: CXVisibilityKind;
  enumCXLanguageKind: CXLanguageKind;
  enumCXTLSKind: CXTLSKind;
  enumCXTypeKind: CXTypeKind;
  enumCXCallingConv: CXCallingConv;
  enumCXTemplateArgumentKind: CXTemplateArgumentKind;
  enumCXTypeNullabilityKind: CXTypeNullabilityKind;
  enumCXTypeLayoutError: CXTypeLayoutError;
  enumCXRefQualifierKind: CXRefQualifierKind;
  enumCX_CXXAccessSpecifier: CX_CXXAccessSpecifier;
  enumCX_StorageClass: CX_StorageClass;
  enumCX_BinaryOperatorKind: CX_BinaryOperatorKind;
  enumCXChildVisitResult: CXChildVisitResult;
  enumCXPrintingPolicyProperty: CXPrintingPolicyProperty;
  enumCXObjCPropertyAttrKind: CXObjCPropertyAttrKind;
  enumCXObjCDeclQualifierKind: CXObjCDeclQualifierKind;
  enumCXNameRefFlags: CXNameRefFlags;
  enumCXTokenKind: CXTokenKind;
  enumCXCompletionChunkKind: CXCompletionChunkKind;
  enumCXCodeComplete_Flags: CXCodeComplete_Flags;
  enumCXCompletionContext: CXCompletionContext;
  enumCXEvalResultKind: CXEvalResultKind;
  enumCXVisitorResult: CXVisitorResult;
  enumCXResult: CXResult;
  enumCXIdxEntityKind: CXIdxEntityKind;
  enumCXIdxEntityLanguage: CXIdxEntityLanguage;
  enumCXIdxEntityCXXTemplateKind: CXIdxEntityCXXTemplateKind;
  enumCXIdxAttrKind: CXIdxAttrKind;
  enumCXIdxDeclInfoFlags: CXIdxDeclInfoFlags;
  enumCXIdxObjCContainerKind: CXIdxObjCContainerKind;
  enumCXIdxEntityRefKind: CXIdxEntityRefKind;
  enumCXSymbolRole: CXSymbolRole;
  enumCXIndexOptFlags: CXIndexOptFlags;
  enumCXBinaryOperatorKind: CXBinaryOperatorKind;
  enumCXUnaryOperatorKind: CXUnaryOperatorKind;
}

export type ClangByValueStruct = Exclude<
  (typeof ClangType)[keyof typeof ClangType],
  FFITypeOrString | `enum${string}`
>;

export type ClangEnum = Extract<
  (typeof ClangType)[keyof typeof ClangType],
  `enum${string}`
>;

export const ClangTypedefs: Record<ClangByValueStruct, string> = {
  CXString: `typedef struct {
  const void *data;
  unsigned private_flags;
} CXString;`,
  CXFileUniqueID: `typedef struct {
  unsigned long long data[3];
} CXFileUniqueID;`,
  CXSourceLocation: `typedef struct {
  const void *ptr_data[2];
  unsigned int_data;
} CXSourceLocation;`,
  CXSourceRange: `typedef struct {
  const void *ptr_data[2];
  unsigned begin_int_data;
  unsigned end_int_data;
} CXSourceRange;`,
  CXUnsavedFile: `struct CXUnsavedFile {
  const char *Filename;
  const char *Contents;
  unsigned long Length;
};`,
  CXTUResourceUsage: `typedef struct CXTUResourceUsageEntry {
  enum CXTUResourceUsageKind kind;
  unsigned long amount;
} CXTUResourceUsageEntry;

typedef struct CXTUResourceUsage {
  void *data;
  unsigned numEntries;
  CXTUResourceUsageEntry *entries;
} CXTUResourceUsage;`,
  CXCursor: `typedef struct {
  int kind;
  int xdata;
  const void *data[3];
} CXCursor;`,
  CXType: `typedef struct {
  int kind;
  void *data[2];
} CXType;`,
  CXToken: `typedef struct {
  unsigned int_data[4];
  void *ptr_data;
} CXToken;`,
  CXCursorAndRangeVisitor: `typedef struct CXCursorAndRangeVisitor {
  void *context;
  enum CXVisitorResult (*visit)(void *context, CXCursor, CXSourceRange);
} CXCursorAndRangeVisitor;`,
  CXIdxLoc: `typedef struct {
  void *ptr_data[2];
  unsigned int_data;
} CXIdxLoc;`,
} as const;

/**
 * 64-bit only
 */
export const ClangTypeSizes: Record<ClangByValueStruct, number> = {
  CXString: 16,
  CXFileUniqueID: 24,
  CXSourceLocation: 24,
  CXSourceRange: 32,
  CXUnsavedFile: 24,
  CXTUResourceUsage: 24,
  CXCursor: 32,
  CXType: 24,
  CXToken: 24,
  CXCursorAndRangeVisitor: 16,
  CXIdxLoc: 24,
} as const;

// copied from https://nodejs.org/api/n-api.html
export const nodeApiCall = (earlyRet: string, call: string) => `do {
    napi_status status = ${call};
    if (status != napi_ok) {
        const napi_extended_error_info* error_info = NULL;
        napi_get_last_error_info(env, &error_info);
        const char* err_message = error_info->error_message;
        bool is_pending;
        napi_is_exception_pending(env, &is_pending);
        if (!is_pending) {
          const char* message = (err_message == NULL)
              ? "empty error message"
              : err_message;
          napi_throw_error(env, NULL, message);
        }
        return ${earlyRet};
    }
  } while(0);`;

export function structToArrayBuffer(
  ctype: string,
  argName: string,
  resultName: string,
  earlyRet: string,
) {
  return `void *${argName}_data;
  napi_value ${resultName};
  ${nodeApiCall(earlyRet, `napi_create_arraybuffer(env, sizeof(${ctype}), &${argName}_data, &${resultName})`)}
  memcpy(${argName}_data, &${argName}, sizeof(${ctype}));`;
}

export function structFromArrayBuffer(
  ctype: string,
  argName: string,
  resultName: string,
  earlyRet: string,
) {
  return `${ctype} *${resultName}_ptr;
  size_t ${resultName}_size;
  ${nodeApiCall(earlyRet, `napi_get_arraybuffer_info(env, ${argName}, (void**)&${resultName}_ptr, &${resultName}_size)`)}
  if (${resultName}_size != sizeof(${ctype})) {
    napi_throw_error(env, NULL, "Invalid ${ctype} size");
    return ${earlyRet};
  }
  ${ctype} ${resultName} = *${resultName}_ptr;`;
}

/// Functions

export const libclangBindings = {
  // CXString.h
  clang_getCString: {
    args: [ClangType.CXString],
    returns: FFIType.cstring,
  },
  clang_disposeString: {
    args: [ClangType.CXString],
    returns: FFIType.void,
  },
  clang_disposeStringSet: {
    args: [ClangType.CXStringSet],
    returns: FFIType.void,
  },

  // CXFile.h
  clang_getFileName: {
    args: [ClangType.CXFile],
    returns: FFIType.cstring,
  },
  clang_getFileTime: {
    args: [ClangType.CXFile],
    returns: FFIType.i64,
  },
  clang_getFileUniqueID: {
    args: [ClangType.CXFile, FFIType.pointer],
    returns: FFIType.bool,
  },
  clang_File_isEqual: {
    args: [ClangType.CXFile, ClangType.CXFile],
    returns: FFIType.bool,
  },
  clang_File_tryGetRealPathName: {
    args: [ClangType.CXFile],
    returns: ClangType.CXString,
  },

  // CXSourceLocation.h
  clang_getNullLocation: {
    args: [],
    returns: ClangType.CXSourceLocation,
  },
  clang_equalLocations: {
    args: [ClangType.CXSourceLocation, ClangType.CXSourceLocation],
    returns: FFIType.bool,
  },
  clang_isBeforeInTranslationUnit: {
    args: [ClangType.CXSourceLocation, ClangType.CXSourceLocation],
    returns: FFIType.bool,
  },
  clang_Location_isInSystemHeader: {
    args: [ClangType.CXSourceLocation],
    returns: FFIType.bool,
  },
  clang_Location_isFromMainFile: {
    args: [ClangType.CXSourceLocation],
    returns: FFIType.bool,
  },
  clang_getNullRange: {
    args: [],
    returns: ClangType.CXSourceRange,
  },
  clang_getRange: {
    args: [ClangType.CXSourceLocation, ClangType.CXSourceLocation],
    returns: ClangType.CXSourceRange,
  },
  clang_equalRanges: {
    args: [ClangType.CXSourceRange, ClangType.CXSourceRange],
    returns: FFIType.bool,
  },
  clang_Range_isNull: {
    args: [ClangType.CXSourceRange],
    returns: FFIType.bool,
  },
  clang_getExpansionLocation: {
    args: [
      ClangType.CXSourceLocation,
      FFIType.pointer,
      FFIType.pointer,
      FFIType.pointer,
      FFIType.pointer,
    ],
    returns: FFIType.void,
  },
  clang_getPresumedLocation: {
    args: [
      ClangType.CXSourceLocation,
      FFIType.pointer,
      FFIType.pointer,
      FFIType.pointer,
    ],
    returns: FFIType.void,
  },
  clang_getInstantiationLocation: {
    args: [
      ClangType.CXSourceLocation,
      FFIType.pointer,
      FFIType.pointer,
      FFIType.pointer,
      FFIType.pointer,
    ],
    returns: FFIType.void,
  },
  clang_getSpellingLocation: {
    args: [
      ClangType.CXSourceLocation,
      FFIType.pointer,
      FFIType.pointer,
      FFIType.pointer,
      FFIType.pointer,
    ],
    returns: FFIType.void,
  },
  clang_getFileLocation: {
    args: [
      ClangType.CXSourceLocation,
      FFIType.pointer,
      FFIType.pointer,
      FFIType.pointer,
      FFIType.pointer,
    ],
    returns: FFIType.void,
  },
  clang_getRangeStart: {
    args: [ClangType.CXSourceRange],
    returns: ClangType.CXSourceLocation,
  },
  clang_getRangeEnd: {
    args: [ClangType.CXSourceRange],
    returns: ClangType.CXSourceLocation,
  },
  clang_disposeSourceRangeList: {
    args: [ClangType.CXSourceRangeList],
    returns: FFIType.void,
  },

  // CXDiagnostic.h
  clang_getNumDiagnosticsInSet: {
    args: [ClangType.CXDiagnosticSet],
    returns: FFIType.u32,
  },
  clang_getDiagnosticInSet: {
    args: [ClangType.CXDiagnosticSet, FFIType.u32],
    returns: ClangType.CXDiagnostic,
  },
  clang_loadDiagnostics: {
    args: [FFIType.cstring, FFIType.pointer, FFIType.pointer],
    returns: ClangType.CXDiagnosticSet,
  },
  clang_disposeDiagnosticSet: {
    args: [ClangType.CXDiagnosticSet],
    returns: FFIType.void,
  },
  clang_getChildDiagnostics: {
    args: [ClangType.CXDiagnostic],
    returns: ClangType.CXDiagnosticSet,
  },
  clang_disposeDiagnostic: {
    args: [ClangType.CXDiagnostic],
    returns: FFIType.void,
  },
  clang_formatDiagnostic: {
    args: [ClangType.CXDiagnostic, FFIType.u32],
    returns: ClangType.CXString,
  },
  clang_defaultDiagnosticDisplayOptions: {
    args: [],
    returns: FFIType.u32,
  },
  clang_getDiagnosticSeverity: {
    args: [ClangType.CXDiagnostic],
    returns: FFIType.u32,
  },
  clang_getDiagnosticLocation: {
    args: [ClangType.CXDiagnostic],
    returns: ClangType.CXSourceLocation,
  },
  clang_getDiagnosticSpelling: {
    args: [ClangType.CXDiagnostic],
    returns: ClangType.CXString,
  },
  clang_getDiagnosticOption: {
    args: [ClangType.CXDiagnostic, FFIType.pointer],
    returns: ClangType.CXString,
  },
  clang_getDiagnosticCategory: {
    args: [ClangType.CXDiagnostic],
    returns: FFIType.u32,
  },
  clang_getDiagnosticCategoryText: {
    args: [ClangType.CXDiagnostic],
    returns: ClangType.CXString,
  },
  clang_getDiagnosticNumRanges: {
    args: [ClangType.CXDiagnostic],
    returns: FFIType.u32,
  },
  clang_getDiagnosticRange: {
    args: [ClangType.CXDiagnostic, FFIType.u32],
    returns: ClangType.CXSourceRange,
  },
  clang_getDiagnosticNumFixIts: {
    args: [ClangType.CXDiagnostic],
    returns: FFIType.u32,
  },
  clang_getDiagnosticFixIt: {
    args: [ClangType.CXDiagnostic, FFIType.u32, FFIType.pointer],
    returns: ClangType.CXString,
  },

  // Index.h
  clang_createIndex: {
    args: [FFIType.bool, FFIType.bool],
    returns: ClangType.CXIndex,
  },
  clang_disposeIndex: {
    args: [ClangType.CXIndex],
    returns: FFIType.void,
  },
  clang_createIndexWithOptions: {
    args: [ClangType.CXIndexOptions],
    returns: ClangType.CXIndex,
  },
  clang_CXIndex_setGlobalOptions: {
    args: [ClangType.CXIndex, FFIType.u32],
    returns: FFIType.void,
  },
  clang_CXIndex_getGlobalOptions: {
    args: [ClangType.CXIndex],
    returns: FFIType.u32,
  },
  clang_CXIndex_setInvocationEmissionPathOption: {
    args: [ClangType.CXIndex, FFIType.cstring],
    returns: FFIType.void,
  },
  clang_isFileMultipleIncludeGuarded: {
    args: [ClangType.CXTranslationUnit, ClangType.CXFile],
    returns: FFIType.bool,
  },
  clang_getFile: {
    args: [ClangType.CXTranslationUnit, FFIType.cstring],
    returns: ClangType.CXFile,
  },
  clang_getFileContents: {
    args: [ClangType.CXTranslationUnit, ClangType.CXFile, FFIType.pointer],
    returns: FFIType.cstring,
  },
  clang_getLocation: {
    args: [
      ClangType.CXTranslationUnit,
      ClangType.CXFile,
      FFIType.u32,
      FFIType.u32,
    ],
    returns: ClangType.CXSourceLocation,
  },
  clang_getLocationForOffset: {
    args: [ClangType.CXTranslationUnit, ClangType.CXFile, FFIType.u32],
    returns: ClangType.CXSourceLocation,
  },
  clang_getSkippedRanges: {
    args: [ClangType.CXTranslationUnit, ClangType.CXFile],
    returns: ClangType.CXSourceRangeList,
  },
  clang_getAllSkippedRanges: {
    args: [ClangType.CXTranslationUnit],
    returns: ClangType.CXSourceRangeList,
  },
  clang_getNumDiagnostics: {
    args: [ClangType.CXTranslationUnit],
    returns: FFIType.u32,
  },
  clang_getDiagnostic: {
    args: [ClangType.CXTranslationUnit, FFIType.u32],
    returns: ClangType.CXDiagnostic,
  },
  clang_getDiagnosticSetFromTU: {
    args: [ClangType.CXTranslationUnit],
    returns: ClangType.CXDiagnosticSet,
  },
  clang_getTranslationUnitSpelling: {
    args: [ClangType.CXTranslationUnit],
    returns: ClangType.CXString,
  },
  clang_createTranslationUnitFromSourceFile: {
    args: [
      ClangType.CXIndex,
      FFIType.cstring,
      FFIType.i32,
      FFIType.pointer,
      FFIType.u32,
      FFIType.pointer,
    ],
    returns: ClangType.CXTranslationUnit,
  },
  clang_createTranslationUnit: {
    args: [ClangType.CXIndex, FFIType.cstring],
    returns: ClangType.CXTranslationUnit,
  },
  clang_createTranslationUnit2: {
    args: [ClangType.CXIndex, FFIType.cstring, FFIType.pointer],
    returns: ClangType.CXErrorCode,
  },
  clang_defaultEditingTranslationUnitOptions: {
    args: [],
    returns: FFIType.u32,
  },
  clang_parseTranslationUnit: {
    args: [
      ClangType.CXIndex,
      FFIType.cstring,
      FFIType.pointer,
      FFIType.i32,
      FFIType.ptr,
      FFIType.u32,
      FFIType.u32,
    ],
    returns: ClangType.CXTranslationUnit,
  },
  clang_parseTranslationUnit2: {
    args: [
      ClangType.CXIndex,
      FFIType.cstring,
      FFIType.pointer,
      FFIType.i32,
      FFIType.ptr,
      FFIType.u32,
      FFIType.u32,
      FFIType.pointer,
    ],
    returns: ClangType.CXErrorCode,
  },
  clang_parseTranslationUnit2FullArgv: {
    args: [
      ClangType.CXIndex,
      FFIType.cstring,
      FFIType.pointer,
      FFIType.i32,
      FFIType.ptr,
      FFIType.i32,
      FFIType.u32,
      FFIType.u32,
      FFIType.pointer,
    ],
    returns: ClangType.CXErrorCode,
  },
  clang_defaultSaveOptions: {
    args: [ClangType.CXTranslationUnit],
    returns: FFIType.u32,
  },
  clang_saveTranslationUnit: {
    args: [ClangType.CXTranslationUnit, FFIType.cstring, FFIType.u32],
    returns: FFIType.i32,
  },
  clang_suspendTranslationUnit: {
    args: [ClangType.CXTranslationUnit],
    returns: FFIType.u32,
  },
  clang_disposeTranslationUnit: {
    args: [ClangType.CXTranslationUnit],
    returns: FFIType.void,
  },
  clang_defaultReparseOptions: {
    args: [ClangType.CXTranslationUnit],
    returns: FFIType.u32,
  },
  clang_reparseTranslationUnit: {
    args: [ClangType.CXTranslationUnit, FFIType.u32, FFIType.ptr, FFIType.u32],
    returns: FFIType.i32,
  },
  clang_getTUResourceUsageName: {
    args: [ClangType.CXTUResourceUsageKind],
    returns: FFIType.cstring,
  },
  clang_getCXTUResourceUsage: {
    args: [ClangType.CXTranslationUnit],
    returns: ClangType.CXTUResourceUsage,
  },
  clang_disposeCXTUResourceUsage: {
    args: [ClangType.CXTUResourceUsage],
    returns: FFIType.void,
  },
  clang_getTranslationUnitTargetInfo: {
    args: [ClangType.CXTranslationUnit],
    returns: ClangType.CXTargetInfo,
  },
  clang_TargetInfo_dispose: {
    args: [ClangType.CXTargetInfo],
    returns: FFIType.void,
  },
  clang_TargetInfo_getTriple: {
    args: [ClangType.CXTargetInfo],
    returns: ClangType.CXString,
  },
  clang_TargetInfo_getPointerWidth: {
    args: [ClangType.CXTargetInfo],
    returns: FFIType.i32,
  },
  clang_getNullCursor: {
    args: [],
    returns: ClangType.CXCursor,
  },
  clang_getTranslationUnitCursor: {
    args: [ClangType.CXTranslationUnit],
    returns: ClangType.CXCursor,
  },
  clang_equalCursors: {
    args: [ClangType.CXCursor, ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_Cursor_isNull: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_hashCursor: {
    args: [ClangType.CXCursor],
    returns: FFIType.u32,
  },
  clang_getCursorKind: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXCursorKind,
  },
  clang_isDeclaration: {
    args: [ClangType.CXCursorKind],
    returns: FFIType.bool,
  },
  clang_isInvalidDeclaration: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_isReference: {
    args: [ClangType.CXCursorKind],
    returns: FFIType.bool,
  },
  clang_isExpression: {
    args: [ClangType.CXCursorKind],
    returns: FFIType.bool,
  },
  clang_isStatement: {
    args: [ClangType.CXCursorKind],
    returns: FFIType.bool,
  },
  clang_isAttribute: {
    args: [ClangType.CXCursorKind],
    returns: FFIType.bool,
  },
  clang_Cursor_hasAttrs: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_isInvalid: {
    args: [ClangType.CXCursorKind],
    returns: FFIType.bool,
  },
  clang_isTranslationUnit: {
    args: [ClangType.CXCursorKind],
    returns: FFIType.bool,
  },
  clang_isPreprocessing: {
    args: [ClangType.CXCursorKind],
    returns: FFIType.bool,
  },
  clang_isUnexposed: {
    args: [ClangType.CXCursorKind],
    returns: FFIType.bool,
  },
  clang_getCursorLinkage: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXLinkageKind,
  },
  clang_getCursorVisibility: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXVisibilityKind,
  },
  clang_getCursorAvailability: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXAvailabilityKind,
  },
  clang_getCursorPlatformAvailability: {
    args: [
      ClangType.CXCursor,
      FFIType.pointer,
      FFIType.pointer,
      FFIType.pointer,
      FFIType.pointer,
      FFIType.pointer,
      FFIType.i32,
    ],
    returns: FFIType.i32,
  },
  clang_disposeCXPlatformAvailability: {
    args: [ClangType.CXPlatformAvailability],
    returns: FFIType.void,
  },
  clang_Cursor_getVarDeclInitializer: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXCursor,
  },
  clang_Cursor_hasVarDeclGlobalStorage: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_Cursor_hasVarDeclExternalStorage: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_getCursorLanguage: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXLanguageKind,
  },
  clang_getCursorTLSKind: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXTLSKind,
  },
  clang_Cursor_getTranslationUnit: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXTranslationUnit,
  },
  clang_createCXCursorSet: {
    args: [],
    returns: ClangType.CXCursorSet,
  },
  clang_disposeCXCursorSet: {
    args: [ClangType.CXCursorSet],
    returns: FFIType.void,
  },
  clang_CXCursorSet_contains: {
    args: [ClangType.CXCursorSet, ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_CXCursorSet_insert: {
    args: [ClangType.CXCursorSet, ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_getCursorSemanticParent: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXCursor,
  },
  clang_getCursorLexicalParent: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXCursor,
  },
  clang_getOverriddenCursors: {
    args: [ClangType.CXCursor, FFIType.pointer, FFIType.pointer],
    returns: FFIType.void,
  },
  clang_disposeOverriddenCursors: {
    args: [FFIType.pointer],
    returns: FFIType.void,
  },
  clang_getIncludedFile: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXFile,
  },
  clang_getCursor: {
    args: [ClangType.CXTranslationUnit, ClangType.CXSourceLocation],
    returns: ClangType.CXCursor,
  },
  clang_getCursorLocation: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXSourceLocation,
  },
  clang_getCursorExtent: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXSourceRange,
  },
  clang_getCursorType: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXType,
  },
  clang_getTypeSpelling: {
    args: [ClangType.CXType],
    returns: ClangType.CXString,
  },
  clang_getTypedefDeclUnderlyingType: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXType,
  },
  clang_getEnumDeclIntegerType: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXType,
  },
  clang_getEnumConstantDeclValue: {
    args: [ClangType.CXCursor],
    returns: FFIType.i64,
  },
  clang_getEnumConstantDeclUnsignedValue: {
    args: [ClangType.CXCursor],
    returns: FFIType.u64,
  },
  clang_Cursor_isBitField: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_getFieldDeclBitWidth: {
    args: [ClangType.CXCursor],
    returns: FFIType.i32,
  },
  clang_Cursor_getNumArguments: {
    args: [ClangType.CXCursor],
    returns: FFIType.i32,
  },
  clang_Cursor_getArgument: {
    args: [ClangType.CXCursor, FFIType.u32],
    returns: ClangType.CXCursor,
  },
  clang_Cursor_getNumTemplateArguments: {
    args: [ClangType.CXCursor],
    returns: FFIType.i32,
  },
  clang_Cursor_getTemplateArgumentKind: {
    args: [ClangType.CXCursor, FFIType.u32],
    returns: ClangType.CXTemplateArgumentKind,
  },
  clang_Cursor_getTemplateArgumentType: {
    args: [ClangType.CXCursor, FFIType.u32],
    returns: ClangType.CXType,
  },
  clang_Cursor_getTemplateArgumentValue: {
    args: [ClangType.CXCursor, FFIType.u32],
    returns: FFIType.i64,
  },
  clang_Cursor_getTemplateArgumentUnsignedValue: {
    args: [ClangType.CXCursor, FFIType.u32],
    returns: FFIType.u64,
  },
  clang_equalTypes: {
    args: [ClangType.CXType, ClangType.CXType],
    returns: FFIType.bool,
  },
  clang_getCanonicalType: {
    args: [ClangType.CXType],
    returns: ClangType.CXType,
  },
  clang_isConstQualifiedType: {
    args: [ClangType.CXType],
    returns: FFIType.bool,
  },
  clang_Cursor_isMacroFunctionLike: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_Cursor_isMacroBuiltin: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_Cursor_isFunctionInlined: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_isVolatileQualifiedType: {
    args: [ClangType.CXType],
    returns: FFIType.bool,
  },
  clang_isRestrictQualifiedType: {
    args: [ClangType.CXType],
    returns: FFIType.bool,
  },
  clang_getAddressSpace: {
    args: [ClangType.CXType],
    returns: FFIType.u32,
  },
  clang_getTypedefName: {
    args: [ClangType.CXType],
    returns: ClangType.CXString,
  },
  clang_getPointeeType: {
    args: [ClangType.CXType],
    returns: ClangType.CXType,
  },
  clang_getUnqualifiedType: {
    args: [ClangType.CXType],
    returns: ClangType.CXType,
  },
  clang_getNonReferenceType: {
    args: [ClangType.CXType],
    returns: ClangType.CXType,
  },
  clang_getTypeDeclaration: {
    args: [ClangType.CXType],
    returns: ClangType.CXCursor,
  },
  clang_getDeclObjCTypeEncoding: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXString,
  },
  clang_Type_getObjCEncoding: {
    args: [ClangType.CXType],
    returns: ClangType.CXString,
  },
  clang_getTypeKindSpelling: {
    args: [ClangType.CXTypeKind],
    returns: ClangType.CXString,
  },
  clang_getFunctionTypeCallingConv: {
    args: [ClangType.CXType],
    returns: ClangType.CXCallingConv,
  },
  clang_getResultType: {
    args: [ClangType.CXType],
    returns: ClangType.CXType,
  },
  clang_getExceptionSpecificationType: {
    args: [ClangType.CXType],
    returns: FFIType.i32,
  },
  clang_getNumArgTypes: {
    args: [ClangType.CXType],
    returns: FFIType.i32,
  },
  clang_getArgType: {
    args: [ClangType.CXType, FFIType.u32],
    returns: ClangType.CXType,
  },
  clang_Type_getObjCObjectBaseType: {
    args: [ClangType.CXType],
    returns: ClangType.CXType,
  },
  clang_Type_getNumObjCProtocolRefs: {
    args: [ClangType.CXType],
    returns: FFIType.u32,
  },
  clang_Type_getObjCProtocolDecl: {
    args: [ClangType.CXType, FFIType.u32],
    returns: ClangType.CXCursor,
  },
  clang_Type_getNumObjCTypeArgs: {
    args: [ClangType.CXType],
    returns: FFIType.u32,
  },
  clang_Type_getObjCTypeArg: {
    args: [ClangType.CXType, FFIType.u32],
    returns: ClangType.CXType,
  },
  clang_isFunctionTypeVariadic: {
    args: [ClangType.CXType],
    returns: FFIType.bool,
  },
  clang_getCursorResultType: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXType,
  },
  clang_getCursorExceptionSpecificationType: {
    args: [ClangType.CXCursor],
    returns: FFIType.i32,
  },
  clang_isPODType: {
    args: [ClangType.CXType],
    returns: FFIType.bool,
  },
  clang_getElementType: {
    args: [ClangType.CXType],
    returns: ClangType.CXType,
  },
  clang_getNumElements: {
    args: [ClangType.CXType],
    returns: FFIType.i64,
  },
  clang_getArrayElementType: {
    args: [ClangType.CXType],
    returns: ClangType.CXType,
  },
  clang_getArraySize: {
    args: [ClangType.CXType],
    returns: FFIType.i64,
  },
  clang_Type_getNamedType: {
    args: [ClangType.CXType],
    returns: ClangType.CXType,
  },
  clang_Type_isTransparentTagTypedef: {
    args: [ClangType.CXType],
    returns: FFIType.bool,
  },
  clang_Type_getNullability: {
    args: [ClangType.CXType],
    returns: ClangType.CXTypeNullabilityKind,
  },
  clang_Type_getAlignOf: {
    args: [ClangType.CXType],
    returns: FFIType.i64,
  },
  clang_Type_getClassType: {
    args: [ClangType.CXType],
    returns: ClangType.CXType,
  },
  clang_Type_getSizeOf: {
    args: [ClangType.CXType],
    returns: FFIType.i64,
  },
  clang_Type_getOffsetOf: {
    args: [ClangType.CXType, FFIType.cstring],
    returns: FFIType.i64,
  },
  clang_Type_getModifiedType: {
    args: [ClangType.CXType],
    returns: ClangType.CXType,
  },
  clang_Type_getValueType: {
    args: [ClangType.CXType],
    returns: ClangType.CXType,
  },
  clang_Cursor_getOffsetOfField: {
    args: [ClangType.CXCursor],
    returns: FFIType.i64,
  },
  clang_Cursor_isAnonymous: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_Cursor_isAnonymousRecordDecl: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_Cursor_isInlineNamespace: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_Type_getNumTemplateArguments: {
    args: [ClangType.CXType],
    returns: FFIType.i32,
  },
  clang_Type_getTemplateArgumentAsType: {
    args: [ClangType.CXType, FFIType.u32],
    returns: ClangType.CXType,
  },
  clang_Type_getCXXRefQualifier: {
    args: [ClangType.CXType],
    returns: ClangType.CXRefQualifierKind,
  },
  clang_isVirtualBase: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_getOffsetOfBase: {
    args: [ClangType.CXCursor, ClangType.CXCursor],
    returns: FFIType.i64,
  },
  clang_getCXXAccessSpecifier: {
    args: [ClangType.CXCursor],
    returns: ClangType.CX_CXXAccessSpecifier,
  },
  clang_Cursor_getBinaryOpcode: {
    args: [ClangType.CXCursor],
    returns: ClangType.CX_BinaryOperatorKind,
  },
  clang_Cursor_getBinaryOpcodeStr: {
    args: [ClangType.CX_BinaryOperatorKind],
    returns: ClangType.CXString,
  },
  clang_Cursor_getStorageClass: {
    args: [ClangType.CXCursor],
    returns: ClangType.CX_StorageClass,
  },
  clang_getNumOverloadedDecls: {
    args: [ClangType.CXCursor],
    returns: FFIType.u32,
  },
  clang_getOverloadedDecl: {
    args: [ClangType.CXCursor, FFIType.u32],
    returns: ClangType.CXCursor,
  },
  clang_getIBOutletCollectionType: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXType,
  },
  clang_visitChildren: {
    args: [ClangType.CXCursor, FFIType.pointer, ClangType.CXClientData],
    returns: FFIType.u32,
  },
  clang_visitChildrenWithBlock: {
    args: [ClangType.CXCursor, FFIType.pointer],
    returns: FFIType.u32,
  },
  clang_getCursorUSR: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXString,
  },
  clang_constructUSR_ObjCClass: {
    args: [FFIType.cstring],
    returns: ClangType.CXString,
  },
  clang_constructUSR_ObjCCategory: {
    args: [FFIType.cstring, FFIType.cstring],
    returns: ClangType.CXString,
  },
  clang_constructUSR_ObjCProtocol: {
    args: [FFIType.cstring],
    returns: ClangType.CXString,
  },
  clang_constructUSR_ObjCIvar: {
    args: [FFIType.cstring, ClangType.CXString],
    returns: ClangType.CXString,
  },
  clang_constructUSR_ObjCMethod: {
    args: [FFIType.cstring, FFIType.u32, ClangType.CXString],
    returns: ClangType.CXString,
  },
  clang_constructUSR_ObjCProperty: {
    args: [FFIType.cstring, ClangType.CXString],
    returns: ClangType.CXString,
  },
  clang_getCursorSpelling: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXString,
  },
  clang_Cursor_getSpellingNameRange: {
    args: [ClangType.CXCursor, FFIType.u32, FFIType.u32],
    returns: ClangType.CXSourceRange,
  },
  clang_PrintingPolicy_getProperty: {
    args: [ClangType.CXPrintingPolicy, ClangType.CXPrintingPolicyProperty],
    returns: FFIType.u32,
  },
  clang_PrintingPolicy_setProperty: {
    args: [ClangType.CXPrintingPolicy, ClangType.CXPrintingPolicyProperty, FFIType.u32],
    returns: FFIType.void,
  },
  clang_getCursorPrintingPolicy: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXPrintingPolicy,
  },
  clang_PrintingPolicy_dispose: {
    args: [ClangType.CXPrintingPolicy],
    returns: FFIType.void,
  },
  clang_getCursorPrettyPrinted: {
    args: [ClangType.CXCursor, ClangType.CXPrintingPolicy],
    returns: ClangType.CXString,
  },
  clang_getTypePrettyPrinted: {
    args: [ClangType.CXType, ClangType.CXPrintingPolicy],
    returns: ClangType.CXString,
  },
  clang_getFullyQualifiedName: {
    args: [ClangType.CXType, ClangType.CXPrintingPolicy, FFIType.u32],
    returns: ClangType.CXString,
  },
  clang_getCursorDisplayName: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXString,
  },
  clang_getCursorReferenced: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXCursor,
  },
  clang_getCursorDefinition: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXCursor,
  },
  clang_isCursorDefinition: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_getCanonicalCursor: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXCursor,
  },
  clang_Cursor_getObjCSelectorIndex: {
    args: [ClangType.CXCursor],
    returns: FFIType.i32,
  },
  clang_Cursor_isDynamicCall: {
    args: [ClangType.CXCursor],
    returns: FFIType.i32,
  },
  clang_Cursor_getReceiverType: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXType,
  },
  clang_Cursor_getObjCPropertyAttributes: {
    args: [ClangType.CXCursor, FFIType.u32],
    returns: FFIType.u32,
  },
  clang_Cursor_getObjCPropertyGetterName: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXString,
  },
  clang_Cursor_getObjCPropertySetterName: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXString,
  },
  clang_Cursor_getObjCDeclQualifiers: {
    args: [ClangType.CXCursor],
    returns: FFIType.u32,
  },
  clang_Cursor_isObjCOptional: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_Cursor_isVariadic: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_Cursor_isExternalSymbol: {
    args: [
      ClangType.CXCursor,
      FFIType.pointer,
      FFIType.pointer,
      FFIType.pointer,
    ],
    returns: FFIType.bool,
  },
  clang_Cursor_getCommentRange: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXSourceRange,
  },
  clang_Cursor_getRawCommentText: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXString,
  },
  clang_Cursor_getBriefCommentText: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXString,
  },
  clang_Cursor_getMangling: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXString,
  },
  clang_Cursor_getCXXManglings: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXStringSet,
  },
  clang_Cursor_getObjCManglings: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXStringSet,
  },
  clang_Cursor_getGCCAssemblyTemplate: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXString,
  },
  clang_Cursor_isGCCAssemblyHasGoto: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_Cursor_getGCCAssemblyNumOutputs: {
    args: [ClangType.CXCursor],
    returns: FFIType.u32,
  },
  clang_Cursor_getGCCAssemblyNumInputs: {
    args: [ClangType.CXCursor],
    returns: FFIType.u32,
  },
  clang_Cursor_getGCCAssemblyInput: {
    args: [ClangType.CXCursor, FFIType.u32, FFIType.pointer, FFIType.pointer],
    returns: FFIType.u32,
  },
  clang_Cursor_getGCCAssemblyOutput: {
    args: [ClangType.CXCursor, FFIType.u32, FFIType.pointer, FFIType.pointer],
    returns: FFIType.u32,
  },
  clang_Cursor_getGCCAssemblyNumClobbers: {
    args: [ClangType.CXCursor],
    returns: FFIType.u32,
  },
  clang_Cursor_getGCCAssemblyClobber: {
    args: [ClangType.CXCursor, FFIType.u32],
    returns: ClangType.CXString,
  },
  clang_Cursor_isGCCAssemblyVolatile: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_Cursor_getModule: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXModule,
  },
  clang_getModuleForFile: {
    args: [ClangType.CXTranslationUnit, ClangType.CXFile],
    returns: ClangType.CXModule,
  },
  clang_Module_getASTFile: {
    args: [ClangType.CXModule],
    returns: ClangType.CXFile,
  },
  clang_Module_getParent: {
    args: [ClangType.CXModule],
    returns: ClangType.CXModule,
  },
  clang_Module_getName: {
    args: [ClangType.CXModule],
    returns: ClangType.CXString,
  },
  clang_Module_getFullName: {
    args: [ClangType.CXModule],
    returns: ClangType.CXString,
  },
  clang_Module_isSystem: {
    args: [ClangType.CXModule],
    returns: FFIType.i32,
  },
  clang_Module_getNumTopLevelHeaders: {
    args: [ClangType.CXTranslationUnit, ClangType.CXModule],
    returns: FFIType.u32,
  },
  clang_Module_getTopLevelHeader: {
    args: [ClangType.CXTranslationUnit, ClangType.CXModule, FFIType.u32],
    returns: ClangType.CXFile,
  },
  clang_CXXConstructor_isConvertingConstructor: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_CXXConstructor_isCopyConstructor: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_CXXConstructor_isDefaultConstructor: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_CXXConstructor_isMoveConstructor: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_CXXField_isMutable: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_CXXMethod_isDefaulted: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_CXXMethod_isDeleted: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_CXXMethod_isPureVirtual: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_CXXMethod_isStatic: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_CXXMethod_isVirtual: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_CXXMethod_isCopyAssignmentOperator: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_CXXMethod_isMoveAssignmentOperator: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_CXXMethod_isExplicit: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_CXXRecord_isAbstract: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_EnumDecl_isScoped: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_CXXMethod_isConst: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_getTemplateCursorKind: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXCursorKind,
  },
  clang_getSpecializedCursorTemplate: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXCursor,
  },
  clang_getCursorReferenceNameRange: {
    args: [ClangType.CXCursor, FFIType.u32, FFIType.u32],
    returns: ClangType.CXSourceRange,
  },
  clang_getToken: {
    args: [ClangType.CXTranslationUnit, ClangType.CXSourceLocation],
    returns: FFIType.pointer,
  },
  clang_getTokenKind: {
    args: [ClangType.CXToken],
    returns: FFIType.i32,
  },
  clang_getTokenSpelling: {
    args: [ClangType.CXTranslationUnit, ClangType.CXToken],
    returns: ClangType.CXString,
  },
  clang_getTokenLocation: {
    args: [ClangType.CXTranslationUnit, ClangType.CXToken],
    returns: ClangType.CXSourceLocation,
  },
  clang_getTokenExtent: {
    args: [ClangType.CXTranslationUnit, ClangType.CXToken],
    returns: ClangType.CXSourceRange,
  },
  clang_tokenize: {
    args: [
      ClangType.CXTranslationUnit,
      ClangType.CXSourceRange,
      FFIType.pointer,
      FFIType.pointer,
    ],
    returns: FFIType.void,
  },
  clang_annotateTokens: {
    args: [
      ClangType.CXTranslationUnit,
      FFIType.pointer,
      FFIType.u32,
      FFIType.pointer,
    ],
    returns: FFIType.void,
  },
  clang_disposeTokens: {
    args: [ClangType.CXTranslationUnit, FFIType.pointer, FFIType.u32],
    returns: FFIType.void,
  },
  clang_getCursorKindSpelling: {
    args: [ClangType.CXCursorKind],
    returns: ClangType.CXString,
  },
  clang_getDefinitionSpellingAndExtent: {
    args: [
      ClangType.CXCursor,
      FFIType.pointer,
      FFIType.pointer,
      FFIType.pointer,
      FFIType.pointer,
      FFIType.pointer,
      FFIType.pointer,
    ],
    returns: FFIType.void,
  },
  clang_enableStackTraces: {
    args: [],
    returns: FFIType.void,
  },
  clang_executeOnThread: {
    args: [FFIType.pointer, FFIType.pointer, FFIType.u32],
    returns: FFIType.void,
  },
  clang_getCompletionChunkKind: {
    args: [ClangType.CXCompletionString, FFIType.u32],
    returns: ClangType.CXCompletionChunkKind,
  },
  clang_getCompletionChunkText: {
    args: [ClangType.CXCompletionString, FFIType.u32],
    returns: ClangType.CXString,
  },
  clang_getCompletionChunkCompletionString: {
    args: [ClangType.CXCompletionString, FFIType.u32],
    returns: ClangType.CXCompletionString,
  },
  clang_getNumCompletionChunks: {
    args: [ClangType.CXCompletionString],
    returns: FFIType.u32,
  },
  clang_getCompletionPriority: {
    args: [ClangType.CXCompletionString],
    returns: FFIType.u32,
  },
  clang_getCompletionAvailability: {
    args: [ClangType.CXCompletionString],
    returns: ClangType.CXAvailabilityKind,
  },
  clang_getCompletionNumAnnotations: {
    args: [ClangType.CXCompletionString],
    returns: FFIType.u32,
  },
  clang_getCompletionAnnotation: {
    args: [ClangType.CXCompletionString, FFIType.u32],
    returns: ClangType.CXString,
  },
  clang_getCompletionParent: {
    args: [ClangType.CXCompletionString, FFIType.pointer],
    returns: ClangType.CXString,
  },
  clang_getCompletionBriefComment: {
    args: [ClangType.CXCompletionString],
    returns: ClangType.CXString,
  },
  clang_getCursorCompletionString: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXCompletionString,
  },
  clang_getCompletionNumFixIts: {
    args: [ClangType.CXCodeCompleteResults, FFIType.u32],
    returns: FFIType.u32,
  },
  clang_getCompletionFixIt: {
    args: [
      ClangType.CXCodeCompleteResults,
      FFIType.u32,
      FFIType.u32,
      FFIType.pointer,
    ],
    returns: ClangType.CXString,
  },

  // Code completion invocation
  clang_defaultCodeCompleteOptions: {
    args: [],
    returns: FFIType.u32,
  },
  clang_codeCompleteAt: {
    args: [
      ClangType.CXTranslationUnit,
      FFIType.cstring,
      FFIType.u32,
      FFIType.u32,
      FFIType.pointer,
      FFIType.u32,
      FFIType.u32,
    ],
    returns: ClangType.CXCodeCompleteResults,
  },
  clang_sortCodeCompletionResults: {
    args: [FFIType.pointer, FFIType.u32],
    returns: FFIType.void,
  },
  clang_disposeCodeCompleteResults: {
    args: [ClangType.CXCodeCompleteResults],
    returns: FFIType.void,
  },
  clang_codeCompleteGetNumDiagnostics: {
    args: [ClangType.CXCodeCompleteResults],
    returns: FFIType.u32,
  },
  clang_codeCompleteGetDiagnostic: {
    args: [ClangType.CXCodeCompleteResults, FFIType.u32],
    returns: ClangType.CXDiagnostic,
  },
  clang_codeCompleteGetContexts: {
    args: [ClangType.CXCodeCompleteResults],
    returns: FFIType.u64,
  },
  clang_codeCompleteGetContainerKind: {
    args: [ClangType.CXCodeCompleteResults, FFIType.pointer],
    returns: ClangType.CXCursorKind,
  },
  clang_codeCompleteGetContainerUSR: {
    args: [ClangType.CXCodeCompleteResults],
    returns: ClangType.CXString,
  },
  clang_codeCompleteGetObjCSelector: {
    args: [ClangType.CXCodeCompleteResults],
    returns: ClangType.CXString,
  },

  // Miscellaneous
  clang_getClangVersion: {
    args: [],
    returns: ClangType.CXString,
  },
  clang_toggleCrashRecovery: {
    args: [FFIType.u32],
    returns: FFIType.void,
  },
  clang_getInclusions: {
    args: [
      ClangType.CXTranslationUnit,
      FFIType.pointer,
      ClangType.CXClientData,
    ],
    returns: FFIType.void,
  },

  // Evaluation
  clang_Cursor_Evaluate: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXEvalResult,
  },
  clang_EvalResult_getKind: {
    args: [ClangType.CXEvalResult],
    returns: FFIType.i32,
  },
  clang_EvalResult_getAsInt: {
    args: [ClangType.CXEvalResult],
    returns: FFIType.i32,
  },
  clang_EvalResult_getAsLongLong: {
    args: [ClangType.CXEvalResult],
    returns: FFIType.i64,
  },
  clang_EvalResult_isUnsignedInt: {
    args: [ClangType.CXEvalResult],
    returns: FFIType.u32,
  },
  clang_EvalResult_getAsUnsigned: {
    args: [ClangType.CXEvalResult],
    returns: FFIType.u64,
  },
  clang_EvalResult_getAsDouble: {
    args: [ClangType.CXEvalResult],
    returns: FFIType.f64,
  },
  clang_EvalResult_getAsStr: {
    args: [ClangType.CXEvalResult],
    returns: FFIType.cstring,
  },
  clang_EvalResult_dispose: {
    args: [ClangType.CXEvalResult],
    returns: FFIType.void,
  },

  // Find references / includes in file
  clang_findReferencesInFile: {
    args: [
      ClangType.CXCursor,
      ClangType.CXFile,
      ClangType.CXCursorAndRangeVisitor,
    ],
    returns: FFIType.i32,
  },
  clang_findIncludesInFile: {
    args: [
      ClangType.CXTranslationUnit,
      ClangType.CXFile,
      ClangType.CXCursorAndRangeVisitor,
    ],
    returns: FFIType.i32,
  },
  clang_findReferencesInFileWithBlock: {
    args: [ClangType.CXCursor, ClangType.CXFile, FFIType.pointer],
    returns: FFIType.i32,
  },
  clang_findIncludesInFileWithBlock: {
    args: [ClangType.CXTranslationUnit, ClangType.CXFile, FFIType.pointer],
    returns: FFIType.i32,
  },

  // High-level indexing — index info accessors
  clang_index_isEntityObjCContainerKind: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  clang_index_getObjCContainerDeclInfo: {
    args: [FFIType.pointer],
    returns: FFIType.pointer,
  },
  clang_index_getObjCInterfaceDeclInfo: {
    args: [FFIType.pointer],
    returns: FFIType.pointer,
  },
  clang_index_getObjCCategoryDeclInfo: {
    args: [FFIType.pointer],
    returns: FFIType.pointer,
  },
  clang_index_getObjCProtocolRefListInfo: {
    args: [FFIType.pointer],
    returns: FFIType.pointer,
  },
  clang_index_getObjCPropertyDeclInfo: {
    args: [FFIType.pointer],
    returns: FFIType.pointer,
  },
  clang_index_getIBOutletCollectionAttrInfo: {
    args: [FFIType.pointer],
    returns: FFIType.pointer,
  },
  clang_index_getCXXClassDeclInfo: {
    args: [FFIType.pointer],
    returns: FFIType.pointer,
  },
  clang_index_getClientContainer: {
    args: [FFIType.pointer],
    returns: FFIType.pointer,
  },
  clang_index_setClientContainer: {
    args: [FFIType.pointer, FFIType.pointer],
    returns: FFIType.void,
  },
  clang_index_getClientEntity: {
    args: [FFIType.pointer],
    returns: FFIType.pointer,
  },
  clang_index_setClientEntity: {
    args: [FFIType.pointer, FFIType.pointer],
    returns: FFIType.void,
  },

  // CXIndexAction
  clang_IndexAction_create: {
    args: [ClangType.CXIndex],
    returns: ClangType.CXIndexAction,
  },
  clang_IndexAction_dispose: {
    args: [ClangType.CXIndexAction],
    returns: FFIType.void,
  },

  // Index source file / translation unit
  clang_indexSourceFile: {
    args: [
      ClangType.CXIndexAction,
      ClangType.CXClientData,
      FFIType.pointer, // IndexerCallbacks*
      FFIType.u32,
      FFIType.u32,
      FFIType.cstring,
      FFIType.pointer, // const char* const*
      FFIType.i32,
      FFIType.pointer, // CXUnsavedFile*
      FFIType.u32,
      FFIType.pointer, // CXTranslationUnit*
      FFIType.u32,
    ],
    returns: FFIType.i32,
  },
  clang_indexSourceFileFullArgv: {
    args: [
      ClangType.CXIndexAction,
      ClangType.CXClientData,
      FFIType.pointer,
      FFIType.u32,
      FFIType.u32,
      FFIType.cstring,
      FFIType.pointer,
      FFIType.i32,
      FFIType.pointer,
      FFIType.u32,
      FFIType.pointer,
      FFIType.u32,
    ],
    returns: FFIType.i32,
  },
  clang_indexTranslationUnit: {
    args: [
      ClangType.CXIndexAction,
      ClangType.CXClientData,
      FFIType.pointer,
      FFIType.u32,
      FFIType.u32,
      ClangType.CXTranslationUnit,
    ],
    returns: FFIType.i32,
  },
  clang_indexLoc_getFileLocation: {
    args: [
      ClangType.CXIdxLoc,
      FFIType.pointer, // CXIdxClientFile*
      FFIType.pointer, // CXFile*
      FFIType.pointer, // unsigned*
      FFIType.pointer, // unsigned*
      FFIType.pointer, // unsigned*
    ],
    returns: FFIType.void,
  },
  clang_indexLoc_getCXSourceLocation: {
    args: [ClangType.CXIdxLoc],
    returns: ClangType.CXSourceLocation,
  },

  // Type field / base class / method visitors
  clang_Type_visitFields: {
    args: [ClangType.CXType, FFIType.pointer, ClangType.CXClientData],
    returns: FFIType.u32,
  },
  clang_visitCXXBaseClasses: {
    args: [ClangType.CXType, FFIType.pointer, ClangType.CXClientData],
    returns: FFIType.u32,
  },
  clang_visitCXXMethods: {
    args: [ClangType.CXType, FFIType.pointer, ClangType.CXClientData],
    returns: FFIType.u32,
  },

  // Binary / unary operator spellings
  clang_getBinaryOperatorKindSpelling: {
    args: [ClangType.CXBinaryOperatorKind],
    returns: ClangType.CXString,
  },
  clang_getCursorBinaryOperatorKind: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXBinaryOperatorKind,
  },
  clang_getUnaryOperatorKindSpelling: {
    args: [ClangType.CXUnaryOperatorKind],
    returns: ClangType.CXString,
  },
  clang_getCursorUnaryOperatorKind: {
    args: [ClangType.CXCursor],
    returns: ClangType.CXUnaryOperatorKind,
  },
} as const;
