import { FFIType, JSCallback } from "bun:ffi";

/// Enums

// CXErrorCode.h

export const CXError_Success = 0;
export const CXError_Failure = 1;
export const CXError_Crashed = 2;
export const CXError_InvalidArguments = 3;
export const CXError_ASTReadError = 4;

// CXDiagnostic.h

export const CXDiagnostic_Ignored = 0;
export const CXDiagnostic_Note = 1;
export const CXDiagnostic_Warning = 2;
export const CXDiagnostic_Error = 3;
export const CXDiagnostic_Fatal = 4;

export const CXLoadDiag_None = 0;
export const CXLoadDiag_Unknown = 1;
export const CXLoadDiag_CannotLoad = 2;
export const CXLoadDiag_InvalidFile = 3;

export const CXDiagnostic_DisplaySourceLocation = 0x01;
export const CXDiagnostic_DisplayColumn = 0x02;
export const CXDiagnostic_DisplaySourceRanges = 0x04;
export const CXDiagnostic_DisplayOption = 0x08;
export const CXDiagnostic_DisplayCategoryId = 0x10;
export const CXDiagnostic_DisplayCategoryName = 0x20;

// Index.h

export const CXAvailability_Available = 0;
export const CXAvailability_Deprecated = 1;
export const CXAvailability_NotAvailable = 2;
export const CXAvailability_NotAccessible = 3;

export const CXCursor_ExceptionSpecificationKind_None = 0;
export const CXCursor_ExceptionSpecificationKind_DynamicNone = 1;
export const CXCursor_ExceptionSpecificationKind_Dynamic = 2;
export const CXCursor_ExceptionSpecificationKind_MSAny = 3;
export const CXCursor_ExceptionSpecificationKind_BasicNoexcept = 4;
export const CXCursor_ExceptionSpecificationKind_ComputedNoexcept = 5;
export const CXCursor_ExceptionSpecificationKind_Unevaluated = 6;
export const CXCursor_ExceptionSpecificationKind_Uninstantiated = 7;
export const CXCursor_ExceptionSpecificationKind_Unparsed = 8;
export const CXCursor_ExceptionSpecificationKind_NoThrow = 9;

export const CXChoice_Default = 0;
export const CXChoice_Enabled = 1;
export const CXChoice_Disabled = 2;

export const CXGlobalOpt_None = 0x0;
export const CXGlobalOpt_ThreadBackgroundPriorityForIndexing = 0x1;
export const CXGlobalOpt_ThreadBackgroundPriorityForEditing = 0x2;
export const CXGlobalOpt_ThreadBackgroundPriorityForAll =
  CXGlobalOpt_ThreadBackgroundPriorityForIndexing |
  CXGlobalOpt_ThreadBackgroundPriorityForEditing;

export const CXTranslationUnit_None = 0x0;
export const CXTranslationUnit_DetailedPreprocessingRecord = 0x01;
export const CXTranslationUnit_Incomplete = 0x02;
export const CXTranslationUnit_PrecompiledPreamble = 0x04;
export const CXTranslationUnit_CacheCompletionResults = 0x08;
export const CXTranslationUnit_ForSerialization = 0x10;
export const CXTranslationUnit_CXXChainedPCH = 0x20;
export const CXTranslationUnit_SkipFunctionBodies = 0x40;
export const CXTranslationUnit_IncludeBriefCommentsInCodeCompletion = 0x80;
export const CXTranslationUnit_CreatePreambleOnFirstParse = 0x100;
export const CXTranslationUnit_KeepGoing = 0x200;
export const CXTranslationUnit_SingleFileParse = 0x400;
export const CXTranslationUnit_LimitSkipFunctionBodiesToPreamble = 0x800;
export const CXTranslationUnit_IncludeAttributedTypes = 0x1000;
// Backward-compatible alias.
export const CXTranslationUnit_IncludeAttributedTypesInCodeCompletion =
  CXTranslationUnit_IncludeAttributedTypes;
export const CXTranslationUnit_VisitImplicitAttributes = 0x2000;
export const CXTranslationUnit_IgnoreNonErrorsFromIncludedFiles = 0x4000;
export const CXTranslationUnit_RetainExcludedConditionalBlocks = 0x8000;

export const CXSaveTranslationUnit_None = 0x0;

export const CXSaveError_None = 0;
export const CXSaveError_Unknown = 1;
export const CXSaveError_TranslationErrors = 2;
export const CXSaveError_InvalidTU = 3;

export const CXReparse_None = 0x0;

export const CXTUResourceUsage_AST = 1;
export const CXTUResourceUsage_Identifiers = 2;
export const CXTUResourceUsage_Selectors = 3;
export const CXTUResourceUsage_GlobalCompletionResults = 4;
export const CXTUResourceUsage_SourceManagerContentCache = 5;
export const CXTUResourceUsage_AST_SideTables = 6;
// Backward-compatible alias.
export const CXTUResourceUsage_AST_SideFiles = CXTUResourceUsage_AST_SideTables;
export const CXTUResourceUsage_SourceManager_Membuffer_Malloc = 7;
export const CXTUResourceUsage_SourceManager_Membuffer_MMap = 8;
export const CXTUResourceUsage_ExternalASTSource_Membuffer_Malloc = 9;
export const CXTUResourceUsage_ExternalASTSource_Membuffer_MMap = 10;
export const CXTUResourceUsage_Preprocessor = 11;
export const CXTUResourceUsage_PreprocessingRecord = 12;
export const CXTUResourceUsage_SourceManager_DataStructures = 13;
export const CXTUResourceUsage_Preprocessor_HeaderSearch = 14;
export const CXTUResourceUsage_MEMORY_IN_BYTES_BEGIN = CXTUResourceUsage_AST;
export const CXTUResourceUsage_MEMORY_IN_BYTES_END =
  CXTUResourceUsage_Preprocessor_HeaderSearch;
export const CXTUResourceUsage_First = CXTUResourceUsage_AST;
export const CXTUResourceUsage_Last =
  CXTUResourceUsage_Preprocessor_HeaderSearch;

export const CXCursor_UnexposedDecl = 1;
export const CXCursor_StructDecl = 2;
export const CXCursor_UnionDecl = 3;
export const CXCursor_ClassDecl = 4;
export const CXCursor_EnumDecl = 5;
export const CXCursor_FieldDecl = 6;
export const CXCursor_EnumConstantDecl = 7;
export const CXCursor_FunctionDecl = 8;
export const CXCursor_VarDecl = 9;
export const CXCursor_ParmDecl = 10;
export const CXCursor_ObjCInterfaceDecl = 11;
export const CXCursor_ObjCCategoryDecl = 12;
export const CXCursor_ObjCProtocolDecl = 13;
export const CXCursor_ObjCPropertyDecl = 14;
export const CXCursor_ObjCIvarDecl = 15;
export const CXCursor_ObjCInstanceMethodDecl = 16;
export const CXCursor_ObjCClassMethodDecl = 17;
export const CXCursor_ObjCImplementationDecl = 18;
export const CXCursor_ObjCCategoryImplDecl = 19;
export const CXCursor_TypedefDecl = 20;
export const CXCursor_CXXMethod = 21;
export const CXCursor_Namespace = 22;
export const CXCursor_LinkageSpec = 23;
export const CXCursor_Constructor = 24;
export const CXCursor_Destructor = 25;
export const CXCursor_ConversionFunction = 26;
export const CXCursor_TemplateTypeParameter = 27;
export const CXCursor_NonTypeTemplateParameter = 28;
export const CXCursor_TemplateTemplateParameter = 29;
export const CXCursor_FunctionTemplate = 30;
export const CXCursor_ClassTemplate = 31;
export const CXCursor_ClassTemplatePartialSpecialization = 32;
export const CXCursor_NamespaceAlias = 33;
export const CXCursor_UsingDirective = 34;
export const CXCursor_UsingDeclaration = 35;
export const CXCursor_TypeAliasDecl = 36;
export const CXCursor_ObjCSynthesizeDecl = 37;
export const CXCursor_ObjCDynamicDecl = 38;
export const CXCursor_CXXAccessSpecifier = 39;
export const CXCursor_FirstDecl = CXCursor_UnexposedDecl;
export const CXCursor_LastDecl = CXCursor_CXXAccessSpecifier;

export const CXCursor_FirstRef = 40;
export const CXCursor_ObjCSuperClassRef = 40;
export const CXCursor_ObjCProtocolRef = 41;
export const CXCursor_ObjCClassRef = 42;
export const CXCursor_TypeRef = 43;
export const CXCursor_CXXBaseSpecifier = 44;
export const CXCursor_TemplateRef = 45;
export const CXCursor_NamespaceRef = 46;
export const CXCursor_MemberRef = 47;
export const CXCursor_LabelRef = 48;
export const CXCursor_OverloadedDeclRef = 49;
export const CXCursor_VariableRef = 50;
export const CXCursor_LastRef = CXCursor_VariableRef;

export const CXCursor_FirstInvalid = 70;
export const CXCursor_InvalidFile = 70;
export const CXCursor_NoDeclFound = 71;
export const CXCursor_NotImplemented = 72;
export const CXCursor_InvalidCode = 73;
export const CXCursor_LastInvalid = CXCursor_InvalidCode;

export const CXCursor_FirstExpr = 100;
export const CXCursor_UnexposedExpr = 100;
export const CXCursor_DeclRefExpr = 101;
export const CXCursor_MemberRefExpr = 102;
export const CXCursor_CallExpr = 103;
export const CXCursor_ObjCMessageExpr = 104;
export const CXCursor_BlockExpr = 105;
export const CXCursor_IntegerLiteral = 106;
export const CXCursor_FloatingLiteral = 107;
export const CXCursor_ImaginaryLiteral = 108;
export const CXCursor_StringLiteral = 109;
export const CXCursor_CharacterLiteral = 110;
export const CXCursor_ParenExpr = 111;
export const CXCursor_UnaryOperator = 112;
export const CXCursor_ArraySubscriptExpr = 113;
export const CXCursor_BinaryOperator = 114;
export const CXCursor_CompoundAssignOperator = 115;
export const CXCursor_ConditionalOperator = 116;
export const CXCursor_CStyleCastExpr = 117;
export const CXCursor_CompoundLiteralExpr = 118;
export const CXCursor_InitListExpr = 119;
export const CXCursor_AddrLabelExpr = 120;
export const CXCursor_StmtExpr = 121;
export const CXCursor_GenericSelectionExpr = 122;
export const CXCursor_GNUNullExpr = 123;
export const CXCursor_CXXStaticCastExpr = 124;
export const CXCursor_CXXDynamicCastExpr = 125;
export const CXCursor_CXXReinterpretCastExpr = 126;
export const CXCursor_CXXConstCastExpr = 127;
export const CXCursor_CXXFunctionalCastExpr = 128;
export const CXCursor_CXXTypeidExpr = 129;
export const CXCursor_CXXBoolLiteralExpr = 130;
export const CXCursor_CXXNullPtrLiteralExpr = 131;
export const CXCursor_CXXThisExpr = 132;
export const CXCursor_CXXThrowExpr = 133;
export const CXCursor_CXXNewExpr = 134;
export const CXCursor_CXXDeleteExpr = 135;
export const CXCursor_UnaryExpr = 136;
export const CXCursor_ObjCStringLiteral = 137;
export const CXCursor_ObjCEncodeExpr = 138;
export const CXCursor_ObjCSelectorExpr = 139;
export const CXCursor_ObjCProtocolExpr = 140;
export const CXCursor_ObjCBridgedCastExpr = 141;
export const CXCursor_PackExpansionExpr = 142;
export const CXCursor_SizeOfPackExpr = 143;
export const CXCursor_LambdaExpr = 144;
export const CXCursor_ObjCBoolLiteralExpr = 145;
export const CXCursor_ObjCSelfExpr = 146;
export const CXCursor_ArraySectionExpr = 147;
export const CXCursor_ObjCAvailabilityCheckExpr = 148;
export const CXCursor_FixedPointLiteral = 149;
export const CXCursor_OMPArrayShapingExpr = 150;
export const CXCursor_OMPIteratorExpr = 151;
export const CXCursor_CXXAddrspaceCastExpr = 152;
export const CXCursor_ConceptSpecializationExpr = 153;
export const CXCursor_RequiresExpr = 154;
export const CXCursor_CXXParenListInitExpr = 155;
export const CXCursor_PackIndexingExpr = 156;
export const CXCursor_LastExpr = CXCursor_PackIndexingExpr;

export const CXCursor_FirstStmt = 200;
export const CXCursor_UnexposedStmt = 200;
export const CXCursor_LabelStmt = 201;
export const CXCursor_CompoundStmt = 202;
export const CXCursor_CaseStmt = 203;
export const CXCursor_DefaultStmt = 204;
export const CXCursor_IfStmt = 205;
export const CXCursor_SwitchStmt = 206;
export const CXCursor_WhileStmt = 207;
export const CXCursor_DoStmt = 208;
export const CXCursor_ForStmt = 209;
export const CXCursor_GotoStmt = 210;
export const CXCursor_IndirectGotoStmt = 211;
export const CXCursor_ContinueStmt = 212;
export const CXCursor_BreakStmt = 213;
export const CXCursor_ReturnStmt = 214;
export const CXCursor_GCCAsmStmt = 215;
export const CXCursor_AsmStmt = CXCursor_GCCAsmStmt;
export const CXCursor_ObjCAtTryStmt = 216;
export const CXCursor_ObjCAtCatchStmt = 217;
export const CXCursor_ObjCAtFinallyStmt = 218;
export const CXCursor_ObjCAtThrowStmt = 219;
export const CXCursor_ObjCAtSynchronizedStmt = 220;
export const CXCursor_ObjCAutoreleasePoolStmt = 221;
export const CXCursor_ObjCForCollectionStmt = 222;
export const CXCursor_CXXCatchStmt = 223;
export const CXCursor_CXXTryStmt = 224;
export const CXCursor_CXXForRangeStmt = 225;
export const CXCursor_SEHTryStmt = 226;
export const CXCursor_SEHExceptStmt = 227;
export const CXCursor_SEHFinallyStmt = 228;
export const CXCursor_MSAsmStmt = 229;
export const CXCursor_NullStmt = 230;
export const CXCursor_DeclStmt = 231;
export const CXCursor_OMPParallelDirective = 232;
export const CXCursor_OMPSimdDirective = 233;
export const CXCursor_OMPForDirective = 234;
export const CXCursor_OMPSectionsDirective = 235;
export const CXCursor_OMPSectionDirective = 236;
export const CXCursor_OMPSingleDirective = 237;
export const CXCursor_OMPParallelForDirective = 238;
export const CXCursor_OMPParallelSectionsDirective = 239;
export const CXCursor_OMPTaskDirective = 240;
export const CXCursor_OMPMasterDirective = 241;
export const CXCursor_OMPCriticalDirective = 242;
export const CXCursor_OMPTaskyieldDirective = 243;
export const CXCursor_OMPBarrierDirective = 244;
export const CXCursor_OMPTaskwaitDirective = 245;
export const CXCursor_OMPFlushDirective = 246;
export const CXCursor_SEHLeaveStmt = 247;
export const CXCursor_OMPOrderedDirective = 248;
export const CXCursor_OMPAtomicDirective = 249;
export const CXCursor_OMPForSimdDirective = 250;
export const CXCursor_OMPParallelForSimdDirective = 251;
export const CXCursor_OMPTargetDirective = 252;
export const CXCursor_OMPTeamsDirective = 253;
export const CXCursor_OMPTaskgroupDirective = 254;
export const CXCursor_OMPCancellationPointDirective = 255;
export const CXCursor_OMPCancelDirective = 256;
export const CXCursor_OMPTargetDataDirective = 257;
export const CXCursor_OMPTaskLoopDirective = 258;
export const CXCursor_OMPTaskLoopSimdDirective = 259;
export const CXCursor_OMPDistributeDirective = 260;
export const CXCursor_OMPTargetEnterDataDirective = 261;
export const CXCursor_OMPTargetExitDataDirective = 262;
export const CXCursor_OMPTargetParallelDirective = 263;
export const CXCursor_OMPTargetParallelForDirective = 264;
export const CXCursor_OMPTargetUpdateDirective = 265;
export const CXCursor_OMPDistributeParallelForDirective = 266;
export const CXCursor_OMPDistributeParallelForSimdDirective = 267;
export const CXCursor_OMPDistributeSimdDirective = 268;
export const CXCursor_OMPTargetParallelForSimdDirective = 269;
export const CXCursor_OMPTargetSimdDirective = 270;
export const CXCursor_OMPTeamsDistributeDirective = 271;
export const CXCursor_OMPTeamsDistributeSimdDirective = 272;
export const CXCursor_OMPTeamsDistributeParallelForSimdDirective = 273;
export const CXCursor_OMPTeamsDistributeParallelForDirective = 274;
export const CXCursor_OMPTargetTeamsDirective = 275;
export const CXCursor_OMPTargetTeamsDistributeDirective = 276;
export const CXCursor_OMPTargetTeamsDistributeParallelForDirective = 277;
export const CXCursor_OMPTargetTeamsDistributeParallelForSimdDirective = 278;
export const CXCursor_OMPTargetTeamsDistributeSimdDirective = 279;
export const CXCursor_BuiltinBitCastExpr = 280;
export const CXCursor_OMPMasterTaskLoopDirective = 281;
export const CXCursor_OMPParallelMasterTaskLoopDirective = 282;
export const CXCursor_OMPMasterTaskLoopSimdDirective = 283;
export const CXCursor_OMPParallelMasterTaskLoopSimdDirective = 284;
export const CXCursor_OMPParallelMasterDirective = 285;
export const CXCursor_OMPDepobjDirective = 286;
export const CXCursor_OMPScanDirective = 287;
export const CXCursor_OMPTileDirective = 288;
export const CXCursor_OMPCanonicalLoop = 289;
export const CXCursor_OMPInteropDirective = 290;
export const CXCursor_OMPDispatchDirective = 291;
export const CXCursor_OMPMaskedDirective = 292;
export const CXCursor_OMPUnrollDirective = 293;
export const CXCursor_OMPMetaDirective = 294;
export const CXCursor_OMPGenericLoopDirective = 295;
export const CXCursor_OMPTeamsGenericLoopDirective = 296;
export const CXCursor_OMPTargetTeamsGenericLoopDirective = 297;
export const CXCursor_OMPParallelGenericLoopDirective = 298;
export const CXCursor_OMPTargetParallelGenericLoopDirective = 299;
export const CXCursor_OMPParallelMaskedDirective = 300;
export const CXCursor_OMPMaskedTaskLoopDirective = 301;
export const CXCursor_OMPMaskedTaskLoopSimdDirective = 302;
export const CXCursor_OMPParallelMaskedTaskLoopDirective = 303;
export const CXCursor_OMPParallelMaskedTaskLoopSimdDirective = 304;
export const CXCursor_OMPErrorDirective = 305;
export const CXCursor_OMPScopeDirective = 306;
export const CXCursor_OMPReverseDirective = 307;
export const CXCursor_OMPInterchangeDirective = 308;
export const CXCursor_OMPAssumeDirective = 309;
export const CXCursor_OMPStripeDirective = 310;
export const CXCursor_OMPFuseDirective = 311;
export const CXCursor_OpenACCComputeConstruct = 320;
export const CXCursor_OpenACCLoopConstruct = 321;
export const CXCursor_OpenACCCombinedConstruct = 322;
export const CXCursor_OpenACCDataConstruct = 323;
export const CXCursor_OpenACCEnterDataConstruct = 324;
export const CXCursor_OpenACCExitDataConstruct = 325;
export const CXCursor_OpenACCHostDataConstruct = 326;
export const CXCursor_OpenACCWaitConstruct = 327;
export const CXCursor_OpenACCInitConstruct = 328;
export const CXCursor_OpenACCShutdownConstruct = 329;
export const CXCursor_OpenACCSetConstruct = 330;
export const CXCursor_OpenACCUpdateConstruct = 331;
export const CXCursor_OpenACCAtomicConstruct = 332;
export const CXCursor_OpenACCCacheConstruct = 333;
export const CXCursor_LastStmt = CXCursor_OpenACCCacheConstruct;

export const CXCursor_TranslationUnit = 350;
export const CXCursor_FirstAttr = 400;
export const CXCursor_UnexposedAttr = 400;
export const CXCursor_IBActionAttr = 401;
export const CXCursor_IBOutletAttr = 402;
export const CXCursor_IBOutletCollectionAttr = 403;
export const CXCursor_CXXFinalAttr = 404;
export const CXCursor_CXXOverrideAttr = 405;
export const CXCursor_AnnotateAttr = 406;
export const CXCursor_AsmLabelAttr = 407;
export const CXCursor_PackedAttr = 408;
export const CXCursor_PureAttr = 409;
export const CXCursor_ConstAttr = 410;
export const CXCursor_NoDuplicateAttr = 411;
export const CXCursor_CUDAConstantAttr = 412;
export const CXCursor_CUDADeviceAttr = 413;
export const CXCursor_CUDAGlobalAttr = 414;
export const CXCursor_CUDAHostAttr = 415;
export const CXCursor_CUDASharedAttr = 416;
export const CXCursor_VisibilityAttr = 417;
export const CXCursor_DLLExport = 418;
export const CXCursor_DLLImport = 419;
export const CXCursor_NSReturnsRetained = 420;
export const CXCursor_NSReturnsNotRetained = 421;
export const CXCursor_NSReturnsAutoreleased = 422;
export const CXCursor_NSConsumesSelf = 423;
export const CXCursor_NSConsumed = 424;
export const CXCursor_ObjCException = 425;
export const CXCursor_ObjCNSObject = 426;
export const CXCursor_ObjCIndependentClass = 427;
export const CXCursor_ObjCPreciseLifetime = 428;
export const CXCursor_ObjCReturnsInnerPointer = 429;
export const CXCursor_ObjCRequiresSuper = 430;
export const CXCursor_ObjCRootClass = 431;
export const CXCursor_ObjCSubclassingRestricted = 432;
export const CXCursor_ObjCExplicitProtocolImpl = 433;
export const CXCursor_ObjCDesignatedInitializer = 434;
export const CXCursor_ObjCRuntimeVisible = 435;
export const CXCursor_ObjCBoxable = 436;
export const CXCursor_FlagEnum = 437;
export const CXCursor_ConvergentAttr = 438;
export const CXCursor_WarnUnusedAttr = 439;
export const CXCursor_WarnUnusedResultAttr = 440;
export const CXCursor_AlignedAttr = 441;
export const CXCursor_LastAttr = CXCursor_AlignedAttr;

export const CXCursor_PreprocessingDirective = 500;
export const CXCursor_MacroDefinition = 501;
export const CXCursor_MacroExpansion = 502;
export const CXCursor_MacroInstantiation = CXCursor_MacroExpansion;
export const CXCursor_InclusionDirective = 503;
export const CXCursor_FirstPreprocessing = CXCursor_PreprocessingDirective;
export const CXCursor_LastPreprocessing = CXCursor_InclusionDirective;
export const CXCursor_ModuleImportDecl = 600;
export const CXCursor_TypeAliasTemplateDecl = 601;
export const CXCursor_StaticAssert = 602;
export const CXCursor_FriendDecl = 603;
export const CXCursor_ConceptDecl = 604;
export const CXCursor_FirstExtraDecl = CXCursor_ModuleImportDecl;
export const CXCursor_LastExtraDecl = CXCursor_ConceptDecl;
export const CXCursor_OverloadCandidate = 700;

export const CXLinkage_Invalid = 0;
export const CXLinkage_NoLinkage = 1;
export const CXLinkage_Internal = 2;
export const CXLinkage_UniqueExternal = 3;
export const CXLinkage_External = 4;

export const CXVisibility_Invalid = 0;
export const CXVisibility_Hidden = 1;
export const CXVisibility_Protected = 2;
export const CXVisibility_Default = 3;

export const CXLanguage_Invalid = 0;
export const CXLanguage_C = 1;
export const CXLanguage_ObjC = 2;
export const CXLanguage_CPlusPlus = 3;

export const CXTLS_None = 0;
export const CXTLS_Dynamic = 1;
export const CXTLS_Static = 2;

export const CXType_Invalid = 0;
export const CXType_Unexposed = 1;
export const CXType_Void = 2;
export const CXType_Bool = 3;
export const CXType_Char_U = 4;
export const CXType_UChar = 5;
export const CXType_Char16 = 6;
export const CXType_Char32 = 7;
export const CXType_UShort = 8;
export const CXType_UInt = 9;
export const CXType_ULong = 10;
export const CXType_ULongLong = 11;
export const CXType_UInt128 = 12;
export const CXType_Char_S = 13;
export const CXType_SChar = 14;
export const CXType_WChar = 15;
export const CXType_Short = 16;
export const CXType_Int = 17;
export const CXType_Long = 18;
export const CXType_LongLong = 19;
export const CXType_Int128 = 20;
export const CXType_Float = 21;
export const CXType_Double = 22;
export const CXType_LongDouble = 23;
export const CXType_NullPtr = 24;
export const CXType_Overload = 25;
export const CXType_Dependent = 26;
export const CXType_ObjCId = 27;
export const CXType_ObjCClass = 28;
export const CXType_ObjCSel = 29;
export const CXType_Float128 = 30;
export const CXType_Half = 31;
export const CXType_Float16 = 32;
export const CXType_ShortAccum = 33;
export const CXType_Accum = 34;
export const CXType_LongAccum = 35;
export const CXType_UShortAccum = 36;
export const CXType_UAccum = 37;
export const CXType_ULongAccum = 38;
export const CXType_BFloat16 = 39;
export const CXType_Ibm128 = 40;
export const CXType_FirstBuiltin = CXType_Void;
export const CXType_LastBuiltin = CXType_Ibm128;
export const CXType_Complex = 100;
export const CXType_Pointer = 101;
export const CXType_BlockPointer = 102;
export const CXType_LValueReference = 103;
export const CXType_RValueReference = 104;
export const CXType_Record = 105;
export const CXType_Enum = 106;
export const CXType_Typedef = 107;
export const CXType_ObjCInterface = 108;
export const CXType_ObjCObjectPointer = 109;
export const CXType_FunctionNoProto = 110;
export const CXType_FunctionProto = 111;
export const CXType_ConstantArray = 112;
export const CXType_Vector = 113;
export const CXType_IncompleteArray = 114;
export const CXType_VariableArray = 115;
export const CXType_DependentSizedArray = 116;
export const CXType_MemberPointer = 117;
export const CXType_Auto = 118;
export const CXType_Elaborated = 119;
export const CXType_Pipe = 120;
export const CXType_OCLImage1dRO = 121;
export const CXType_OCLImage1dArrayRO = 122;
export const CXType_OCLImage1dBufferRO = 123;
export const CXType_OCLImage2dRO = 124;
export const CXType_OCLImage2dArrayRO = 125;
export const CXType_OCLImage2dDepthRO = 126;
export const CXType_OCLImage2dArrayDepthRO = 127;
export const CXType_OCLImage2dMSAARO = 128;
export const CXType_OCLImage2dArrayMSAARO = 129;
export const CXType_OCLImage2dMSAADepthRO = 130;
export const CXType_OCLImage2dArrayMSAADepthRO = 131;
export const CXType_OCLImage3dRO = 132;
export const CXType_OCLImage1dWO = 133;
export const CXType_OCLImage1dArrayWO = 134;
export const CXType_OCLImage1dBufferWO = 135;
export const CXType_OCLImage2dWO = 136;
export const CXType_OCLImage2dArrayWO = 137;
export const CXType_OCLImage2dDepthWO = 138;
export const CXType_OCLImage2dArrayDepthWO = 139;
export const CXType_OCLImage2dMSAAWO = 140;
export const CXType_OCLImage2dArrayMSAAWO = 141;
export const CXType_OCLImage2dMSAADepthWO = 142;
export const CXType_OCLImage2dArrayMSAADepthWO = 143;
export const CXType_OCLImage3dWO = 144;
export const CXType_OCLImage1dRW = 145;
export const CXType_OCLImage1dArrayRW = 146;
export const CXType_OCLImage1dBufferRW = 147;
export const CXType_OCLImage2dRW = 148;
export const CXType_OCLImage2dArrayRW = 149;
export const CXType_OCLImage2dDepthRW = 150;
export const CXType_OCLImage2dArrayDepthRW = 151;
export const CXType_OCLImage2dMSAARW = 152;
export const CXType_OCLImage2dArrayMSAARW = 153;
export const CXType_OCLImage2dMSAADepthRW = 154;
export const CXType_OCLImage2dArrayMSAADepthRW = 155;
export const CXType_OCLImage3dRW = 156;
export const CXType_OCLSampler = 157;
export const CXType_OCLEvent = 158;
export const CXType_OCLQueue = 159;
export const CXType_OCLReserveID = 160;
export const CXType_ObjCObject = 161;
export const CXType_ObjCTypeParam = 162;
export const CXType_Attributed = 163;
export const CXType_OCLIntelSubgroupAVCMcePayload = 164;
export const CXType_OCLIntelSubgroupAVCImePayload = 165;
export const CXType_OCLIntelSubgroupAVCRefPayload = 166;
export const CXType_OCLIntelSubgroupAVCSicPayload = 167;
export const CXType_OCLIntelSubgroupAVCMceResult = 168;
export const CXType_OCLIntelSubgroupAVCImeResult = 169;
export const CXType_OCLIntelSubgroupAVCRefResult = 170;
export const CXType_OCLIntelSubgroupAVCSicResult = 171;
export const CXType_OCLIntelSubgroupAVCImeResultSingleReferenceStreamout = 172;
export const CXType_OCLIntelSubgroupAVCImeResultDualReferenceStreamout = 173;
export const CXType_OCLIntelSubgroupAVCImeSingleReferenceStreamin = 174;
export const CXType_OCLIntelSubgroupAVCImeDualReferenceStreamin = 175;
export const CXType_OCLIntelSubgroupAVCImeResultSingleRefStreamout = 172;
export const CXType_OCLIntelSubgroupAVCImeResultDualRefStreamout = 173;
export const CXType_OCLIntelSubgroupAVCImeSingleRefStreamin = 174;
export const CXType_OCLIntelSubgroupAVCImeDualRefStreamin = 175;
export const CXType_ExtVector = 176;
export const CXType_Atomic = 177;
export const CXType_BTFTagAttributed = 178;
export const CXType_HLSLResource = 179;
export const CXType_HLSLAttributedResource = 180;
export const CXType_HLSLInlineSpirv = 181;

export const CXCallingConv_Default = 0;
export const CXCallingConv_C = 1;
export const CXCallingConv_X86StdCall = 2;
export const CXCallingConv_X86FastCall = 3;
export const CXCallingConv_X86ThisCall = 4;
export const CXCallingConv_X86Pascal = 5;
export const CXCallingConv_AAPCS = 6;
export const CXCallingConv_AAPCS_VFP = 7;
export const CXCallingConv_X86RegCall = 8;
export const CXCallingConv_IntelOclBicc = 9;
export const CXCallingConv_Win64 = 10;
export const CXCallingConv_X86_64Win64 = CXCallingConv_Win64;
export const CXCallingConv_X86_64SysV = 11;
export const CXCallingConv_X86VectorCall = 12;
export const CXCallingConv_Swift = 13;
export const CXCallingConv_PreserveMost = 14;
export const CXCallingConv_PreserveAll = 15;
export const CXCallingConv_AArch64VectorCall = 16;
export const CXCallingConv_SwiftAsync = 17;
export const CXCallingConv_AArch64SVEPCS = 18;
export const CXCallingConv_M68kRTD = 19;
export const CXCallingConv_PreserveNone = 20;
export const CXCallingConv_RISCVVectorCall = 21;
export const CXCallingConv_RISCVVLSCall_32 = 22;
export const CXCallingConv_RISCVVLSCall_64 = 23;
export const CXCallingConv_RISCVVLSCall_128 = 24;
export const CXCallingConv_RISCVVLSCall_256 = 25;
export const CXCallingConv_RISCVVLSCall_512 = 26;
export const CXCallingConv_RISCVVLSCall_1024 = 27;
export const CXCallingConv_RISCVVLSCall_2048 = 28;
export const CXCallingConv_RISCVVLSCall_4096 = 29;
export const CXCallingConv_RISCVVLSCall_8192 = 30;
export const CXCallingConv_RISCVVLSCall_16384 = 31;
export const CXCallingConv_RISCVVLSCall_32768 = 32;
export const CXCallingConv_RISCVVLSCall_65536 = 33;
export const CXCallingConv_Invalid = 100;
export const CXCallingConv_Unexposed = 200;

export const CXTemplateArgumentKind_Null = 0;
export const CXTemplateArgumentKind_Type = 1;
export const CXTemplateArgumentKind_Declaration = 2;
export const CXTemplateArgumentKind_NullPtr = 3;
export const CXTemplateArgumentKind_Integral = 4;
export const CXTemplateArgumentKind_Template = 5;
export const CXTemplateArgumentKind_TemplateExpansion = 6;
export const CXTemplateArgumentKind_Expression = 7;
export const CXTemplateArgumentKind_Pack = 8;
export const CXTemplateArgumentKind_Invalid = 9;

export const CXTypeNullability_NonNull = 0;
export const CXTypeNullability_Nullable = 1;
export const CXTypeNullability_Unspecified = 2;
export const CXTypeNullability_Invalid = 3;
export const CXTypeNullability_NullableResult = 4;

export const CXTypeLayoutError_Invalid = -1;
export const CXTypeLayoutError_Incomplete = -2;
export const CXTypeLayoutError_Dependent = -3;
export const CXTypeLayoutError_NotConstantSize = -4;
export const CXTypeLayoutError_InvalidFieldName = -5;
export const CXTypeLayoutError_Undeduced = -6;

export const CXRefQualifier_None = 0;
export const CXRefQualifier_LValue = 1;
export const CXRefQualifier_RValue = 2;

export const CX_CXXInvalidAccessSpecifier = 0;
export const CX_CXXPublic = 1;
export const CX_CXXProtected = 2;
export const CX_CXXPrivate = 3;

export const CX_SC_Invalid = 0;
export const CX_SC_None = 1;
export const CX_SC_Extern = 2;
export const CX_SC_Static = 3;
export const CX_SC_PrivateExtern = 4;
export const CX_SC_OpenCLWorkGroupLocal = 5;
export const CX_SC_Auto = 6;
export const CX_SC_Register = 7;

export const CX_BO_Invalid = 0;
export const CX_BO_PtrMemD = 1;
export const CX_BO_PtrMemI = 2;
export const CX_BO_Mul = 3;
export const CX_BO_Div = 4;
export const CX_BO_Rem = 5;
export const CX_BO_Add = 6;
export const CX_BO_Sub = 7;
export const CX_BO_Shl = 8;
export const CX_BO_Shr = 9;
export const CX_BO_Cmp = 10;
export const CX_BO_LT = 11;
export const CX_BO_GT = 12;
export const CX_BO_LE = 13;
export const CX_BO_GE = 14;
export const CX_BO_EQ = 15;
export const CX_BO_NE = 16;
export const CX_BO_And = 17;
export const CX_BO_Xor = 18;
export const CX_BO_Or = 19;
export const CX_BO_LAnd = 20;
export const CX_BO_LOr = 21;
export const CX_BO_Assign = 22;
export const CX_BO_MulAssign = 23;
export const CX_BO_DivAssign = 24;
export const CX_BO_RemAssign = 25;
export const CX_BO_AddAssign = 26;
export const CX_BO_SubAssign = 27;
export const CX_BO_ShlAssign = 28;
export const CX_BO_ShrAssign = 29;
export const CX_BO_AndAssign = 30;
export const CX_BO_XorAssign = 31;
export const CX_BO_OrAssign = 32;
export const CX_BO_Comma = 33;
export const CX_BO_LAST = CX_BO_Comma;

export const CXChildVisit_Break = 0;
export const CXChildVisit_Continue = 1;
export const CXChildVisit_Recurse = 2;

export const CXPrintingPolicy_Indentation = 0;
export const CXPrintingPolicy_SuppressSpecifiers = 1;
export const CXPrintingPolicy_SuppressTagKeyword = 2;
export const CXPrintingPolicy_IncludeTagDefinition = 3;
export const CXPrintingPolicy_SuppressScope = 4;
export const CXPrintingPolicy_SuppressUnwrittenScope = 5;
export const CXPrintingPolicy_SuppressInitializers = 6;
export const CXPrintingPolicy_ConstantArraySizeAsWritten = 7;
export const CXPrintingPolicy_AnonymousTagLocations = 8;
export const CXPrintingPolicy_SuppressStrongLifetime = 9;
export const CXPrintingPolicy_SuppressLifetimeQualifiers = 10;
export const CXPrintingPolicy_SuppressTemplateArgsInCXXConstructors = 11;
export const CXPrintingPolicy_Bool = 12;
export const CXPrintingPolicy_Restrict = 13;
export const CXPrintingPolicy_Alignof = 14;
export const CXPrintingPolicy_UnderscoreAlignof = 15;
export const CXPrintingPolicy_UseVoidForZeroParams = 16;
export const CXPrintingPolicy_TerseOutput = 17;
export const CXPrintingPolicy_PolishForDeclaration = 18;
export const CXPrintingPolicy_Half = 19;
export const CXPrintingPolicy_MSWChar = 20;
export const CXPrintingPolicy_IncludeNewlines = 21;
export const CXPrintingPolicy_MSVCFormatting = 22;
export const CXPrintingPolicy_ConstantsAsWritten = 23;
export const CXPrintingPolicy_SuppressImplicitBase = 24;
export const CXPrintingPolicy_FullyQualifiedName = 25;
export const CXPrintingPolicy_LastProperty =
  CXPrintingPolicy_FullyQualifiedName;

export const CXObjCPropertyAttr_noattr = 0x00;
export const CXObjCPropertyAttr_readonly = 0x01;
export const CXObjCPropertyAttr_getter = 0x02;
export const CXObjCPropertyAttr_assign = 0x04;
export const CXObjCPropertyAttr_readwrite = 0x08;
export const CXObjCPropertyAttr_retain = 0x10;
export const CXObjCPropertyAttr_copy = 0x20;
export const CXObjCPropertyAttr_nonatomic = 0x40;
export const CXObjCPropertyAttr_setter = 0x80;
export const CXObjCPropertyAttr_atomic = 0x100;
export const CXObjCPropertyAttr_weak = 0x200;
export const CXObjCPropertyAttr_strong = 0x400;
export const CXObjCPropertyAttr_unsafe_unretained = 0x800;
export const CXObjCPropertyAttr_class = 0x1000;

export const CXObjCDeclQualifier_None = 0x0;
export const CXObjCDeclQualifier_In = 0x1;
export const CXObjCDeclQualifier_Inout = 0x2;
export const CXObjCDeclQualifier_Out = 0x4;
export const CXObjCDeclQualifier_Bycopy = 0x8;
export const CXObjCDeclQualifier_Byref = 0x10;
export const CXObjCDeclQualifier_Oneway = 0x20;

export const CXNameRange_WantQualifier = 0x1;
export const CXNameRange_WantTemplateArgs = 0x2;
export const CXNameRange_WantSinglePiece = 0x4;

export const CXToken_Punctuation = 0;
export const CXToken_Keyword = 1;
export const CXToken_Identifier = 2;
export const CXToken_Literal = 3;
export const CXToken_Comment = 4;

export const CXCompletionChunk_Optional = 0;
export const CXCompletionChunk_TypedText = 1;
export const CXCompletionChunk_Text = 2;
export const CXCompletionChunk_Placeholder = 3;
export const CXCompletionChunk_Informative = 4;
export const CXCompletionChunk_CurrentParameter = 5;
export const CXCompletionChunk_LeftParen = 6;
export const CXCompletionChunk_RightParen = 7;
export const CXCompletionChunk_LeftBracket = 8;
export const CXCompletionChunk_RightBracket = 9;
export const CXCompletionChunk_LeftBrace = 10;
export const CXCompletionChunk_RightBrace = 11;
export const CXCompletionChunk_LeftAngle = 12;
export const CXCompletionChunk_RightAngle = 13;
export const CXCompletionChunk_Comma = 14;
export const CXCompletionChunk_ResultType = 15;
export const CXCompletionChunk_Colon = 16;
export const CXCompletionChunk_SemiColon = 17;
export const CXCompletionChunk_Equal = 18;
export const CXCompletionChunk_HorizontalSpace = 19;
export const CXCompletionChunk_VerticalSpace = 20;

export const CXCodeComplete_IncludeMacros = 0x01;
export const CXCodeComplete_IncludeCodePatterns = 0x02;
export const CXCodeComplete_IncludeBriefComments = 0x04;
export const CXCodeComplete_SkipPreamble = 0x08;
export const CXCodeComplete_IncludeCompletionsWithFixIts = 0x10;

export const CXCompletionContext_Unexposed = 0;
export const CXCompletionContext_AnyType = 1 << 0;
export const CXCompletionContext_AnyValue = 1 << 1;
export const CXCompletionContext_ObjCObjectValue = 1 << 2;
export const CXCompletionContext_ObjCSelectorValue = 1 << 3;
export const CXCompletionContext_CXXClassTypeValue = 1 << 4;
export const CXCompletionContext_DotMemberAccess = 1 << 5;
export const CXCompletionContext_ArrowMemberAccess = 1 << 6;
export const CXCompletionContext_ObjCPropertyAccess = 1 << 7;
export const CXCompletionContext_EnumTag = 1 << 8;
export const CXCompletionContext_UnionTag = 1 << 9;
export const CXCompletionContext_StructTag = 1 << 10;
export const CXCompletionContext_ClassTag = 1 << 11;
export const CXCompletionContext_Namespace = 1 << 12;
export const CXCompletionContext_NestedNameSpecifier = 1 << 13;
export const CXCompletionContext_ObjCInterface = 1 << 14;
export const CXCompletionContext_ObjCProtocol = 1 << 15;
export const CXCompletionContext_ObjCCategory = 1 << 16;
export const CXCompletionContext_ObjCInstanceMessage = 1 << 17;
export const CXCompletionContext_ObjCClassMessage = 1 << 18;
export const CXCompletionContext_ObjCSelectorName = 1 << 19;
export const CXCompletionContext_MacroName = 1 << 20;
export const CXCompletionContext_NaturalLanguage = 1 << 21;
export const CXCompletionContext_IncludedFile = 1 << 22;
export const CXCompletionContext_Unknown = (1 << 23) - 1;

export const CXEval_Int = 1;
export const CXEval_Float = 2;
export const CXEval_ObjCStrLiteral = 3;
export const CXEval_StrLiteral = 4;
export const CXEval_CFStr = 5;
export const CXEval_Other = 6;
export const CXEval_UnExposed = 0;

export const CXVisit_Break = 0;
export const CXVisit_Continue = 1;

export const CXResult_Success = 0;
export const CXResult_Invalid = 1;
export const CXResult_VisitBreak = 2;

export const CXIdxEntity_Unexposed = 0;
export const CXIdxEntity_Typedef = 1;
export const CXIdxEntity_Function = 2;
export const CXIdxEntity_Variable = 3;
export const CXIdxEntity_Field = 4;
export const CXIdxEntity_EnumConstant = 5;
export const CXIdxEntity_ObjCClass = 6;
export const CXIdxEntity_ObjCProtocol = 7;
export const CXIdxEntity_ObjCCategory = 8;
export const CXIdxEntity_ObjCInstanceMethod = 9;
export const CXIdxEntity_ObjCClassMethod = 10;
export const CXIdxEntity_ObjCProperty = 11;
export const CXIdxEntity_ObjCIvar = 12;
export const CXIdxEntity_Enum = 13;
export const CXIdxEntity_Struct = 14;
export const CXIdxEntity_Union = 15;
export const CXIdxEntity_CXXClass = 16;
export const CXIdxEntity_CXXNamespace = 17;
export const CXIdxEntity_CXXNamespaceAlias = 18;
export const CXIdxEntity_CXXStaticVariable = 19;
export const CXIdxEntity_CXXStaticMethod = 20;
export const CXIdxEntity_CXXInstanceMethod = 21;
export const CXIdxEntity_CXXConstructor = 22;
export const CXIdxEntity_CXXDestructor = 23;
export const CXIdxEntity_CXXConversionFunction = 24;
export const CXIdxEntity_CXXTypeAlias = 25;
export const CXIdxEntity_CXXInterface = 26;
export const CXIdxEntity_CXXConcept = 27;

export const CXIdxEntityLang_None = 0;
export const CXIdxEntityLang_C = 1;
export const CXIdxEntityLang_ObjC = 2;
export const CXIdxEntityLang_CXX = 3;
export const CXIdxEntityLang_Swift = 4;

export const CXIdxEntity_NonTemplate = 0;
export const CXIdxEntity_Template = 1;
export const CXIdxEntity_TemplatePartialSpecialization = 2;
export const CXIdxEntity_TemplateSpecialization = 3;

export const CXIdxAttr_Unexposed = 0;
export const CXIdxAttr_IBAction = 1;
export const CXIdxAttr_IBOutlet = 2;
export const CXIdxAttr_IBOutletCollection = 3;

export const CXIdxDeclFlag_Skipped = 0x1;

export const CXIdxObjCContainer_ForwardRef = 0;
export const CXIdxObjCContainer_Interface = 1;
export const CXIdxObjCContainer_Implementation = 2;

export const CXIdxEntityRef_Direct = 1;
export const CXIdxEntityRef_Implicit = 2;

export const CXSymbolRole_None = 0;
export const CXSymbolRole_Declaration = 1 << 0;
export const CXSymbolRole_Definition = 1 << 1;
export const CXSymbolRole_Reference = 1 << 2;
export const CXSymbolRole_Read = 1 << 3;
export const CXSymbolRole_Write = 1 << 4;
export const CXSymbolRole_Call = 1 << 5;
export const CXSymbolRole_Dynamic = 1 << 6;
export const CXSymbolRole_AddressOf = 1 << 7;
export const CXSymbolRole_Implicit = 1 << 8;

export const CXIndexOpt_None = 0x0;
export const CXIndexOpt_SuppressRedundantRefs = 0x1;
export const CXIndexOpt_IndexFunctionLocalSymbols = 0x2;
export const CXIndexOpt_IndexImplicitTemplateInstantiations = 0x4;
export const CXIndexOpt_SuppressWarnings = 0x8;
export const CXIndexOpt_SkipParsedBodiesInSession = 0x10;

export const CXBinaryOperator_Invalid = 0;
export const CXBinaryOperator_PtrMemD = 1;
export const CXBinaryOperator_PtrMemI = 2;
export const CXBinaryOperator_Mul = 3;
export const CXBinaryOperator_Div = 4;
export const CXBinaryOperator_Rem = 5;
export const CXBinaryOperator_Add = 6;
export const CXBinaryOperator_Sub = 7;
export const CXBinaryOperator_Shl = 8;
export const CXBinaryOperator_Shr = 9;
export const CXBinaryOperator_Cmp = 10;
export const CXBinaryOperator_LT = 11;
export const CXBinaryOperator_GT = 12;
export const CXBinaryOperator_LE = 13;
export const CXBinaryOperator_GE = 14;
export const CXBinaryOperator_EQ = 15;
export const CXBinaryOperator_NE = 16;
export const CXBinaryOperator_And = 17;
export const CXBinaryOperator_Xor = 18;
export const CXBinaryOperator_Or = 19;
export const CXBinaryOperator_LAnd = 20;
export const CXBinaryOperator_LOr = 21;
export const CXBinaryOperator_Assign = 22;
export const CXBinaryOperator_MulAssign = 23;
export const CXBinaryOperator_DivAssign = 24;
export const CXBinaryOperator_RemAssign = 25;
export const CXBinaryOperator_AddAssign = 26;
export const CXBinaryOperator_SubAssign = 27;
export const CXBinaryOperator_ShlAssign = 28;
export const CXBinaryOperator_ShrAssign = 29;
export const CXBinaryOperator_AndAssign = 30;
export const CXBinaryOperator_XorAssign = 31;
export const CXBinaryOperator_OrAssign = 32;
export const CXBinaryOperator_Comma = 33;
export const CXBinaryOperator_Last = CXBinaryOperator_Comma;

export const CXUnaryOperator_Invalid = 0;
export const CXUnaryOperator_PostInc = 1;
export const CXUnaryOperator_PostDec = 2;
export const CXUnaryOperator_PreInc = 3;
export const CXUnaryOperator_PreDec = 4;
export const CXUnaryOperator_AddrOf = 5;
export const CXUnaryOperator_Deref = 6;
export const CXUnaryOperator_Plus = 7;
export const CXUnaryOperator_Minus = 8;
export const CXUnaryOperator_Not = 9;
export const CXUnaryOperator_LNot = 10;
export const CXUnaryOperator_Real = 11;
export const CXUnaryOperator_Imag = 12;
export const CXUnaryOperator_Extension = 13;
export const CXUnaryOperator_Coawait = 14;

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
  CXFileUniqueID = cstructPtr,

  // CXSourceLocation.h
  CXSourceLocation = cstructPtr,
  CXSourceRange = cstructPtr,
  CXSourceRangeList = cstructPtr,

  // CXDiagnostic.h
  CXDiagnostic = "ptr",
  CXDiagnosticSet = "ptr",

  // Index.h
  CXIndex = "ptr",
  CXTargetInfo = "ptr",
  CXTranslationUnit = "ptr",
  CXClientData = "ptr",
  CXUnsavedFile = cstructPtr,
  CXVersion = cstructPtr,
  CXIndexOptions = cstructPtr,
  CXTUResourceUsageEntry = cstructPtr,
  CXTUResourceUsage = cstructPtr,
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
  CXCursorAndRangeVisitor = cstructPtr,
  CXIdxLoc = cstructPtr,
  CXIndexAction = "ptr",
}

// copied from https://nodejs.org/api/n-api.html
const nodeApiCall = (earlyRet: string, call: string) => `do {
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

function structToArrayBuffer(ctype: string) {
  return (argName: string, resultName: string, earlyRet: string) => `
  napi_value ${resultName};
  ${nodeApiCall(earlyRet, `napi_create_arraybuffer(env, sizeof(${ctype}), (void**)&${argName}, &${resultName})`)}`;
}

function structFromArrayBuffer(ctype: string) {
  return (argName: string, resultName: string, earlyRet: string) =>
    `${ctype} *${resultName}_ptr;
  size_t ${resultName}_size;
  ${nodeApiCall(earlyRet, `napi_get_arraybuffer_info(env, ${argName}, (void**)&${resultName}_ptr, &${resultName}_size)`)}
  if (${resultName}_size != sizeof(${ctype})) {
    napi_throw_error(env, NULL, "Invalid ${ctype} size");
    return ${earlyRet};
  }
  ${ctype} ${resultName} = *${resultName}_ptr;`;
}

export const CXStringTypedef = `
typedef struct {
  const void *data;
  unsigned private_flags;
} CXString;`;

export const CXStringToArrayBuffer = structToArrayBuffer("CXString");

export const CXStringFromArrayBuffer = structFromArrayBuffer("CXString");

export const CXCursorTypedef = `
typedef struct {
  int kind;
  int xdata;
  const void *data[3];
} CXCursor;`;

export const CXCursorToArrayBuffer = structToArrayBuffer("CXCursor");

export const CXCursorFromArrayBuffer = structFromArrayBuffer("CXCursor");

export const CXTypeTypedef = `
typedef struct {
  int kind;
  void *data[2];
} CXType;`;

export const CXTypeToArrayBuffer = structToArrayBuffer("CXType");

export const CXTypeFromArrayBuffer = structFromArrayBuffer("CXType");

export const CXTokenTypedef = `
typedef struct {
  unsigned int_data[4];
  void *ptr_data;
} CXToken;`;

export const CXTokenToArrayBuffer = structToArrayBuffer("CXToken");

export const CXTokenFromArrayBuffer = structFromArrayBuffer("CXToken");

/// Functions

export interface ClangFFIFunctionLike {
  args: (ClangType | FFIType)[];
  returns: ClangType | FFIType;
}

export const libclangBindings: Record<string, ClangFFIFunctionLike> = {
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
    returns: FFIType.pointer,
  },
  clang_disposeIndex: {
    args: [ClangType.CXIndex],
    returns: FFIType.void,
  },
  clang_createIndexWithOptions: {
    args: [ClangType.CXIndexOptions],
    returns: FFIType.pointer,
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
    returns: FFIType.i32,
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
      ClangType.CXUnsavedFile,
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
      ClangType.CXUnsavedFile,
      FFIType.u32,
      FFIType.u32,
      FFIType.pointer,
    ],
    returns: FFIType.i32,
  },
  clang_parseTranslationUnit2FullArgv: {
    args: [
      ClangType.CXIndex,
      FFIType.cstring,
      FFIType.pointer,
      FFIType.i32,
      ClangType.CXUnsavedFile,
      FFIType.i32,
      FFIType.u32,
      FFIType.u32,
      FFIType.pointer,
    ],
    returns: FFIType.i32,
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
    args: [
      ClangType.CXTranslationUnit,
      FFIType.u32,
      ClangType.CXUnsavedFile,
      FFIType.u32,
    ],
    returns: FFIType.i32,
  },
  clang_getTUResourceUsageName: {
    args: [FFIType.i32],
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
    returns: FFIType.i32,
  },
  clang_isDeclaration: {
    args: [FFIType.i32],
    returns: FFIType.bool,
  },
  clang_isInvalidDeclaration: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_isReference: {
    args: [FFIType.i32],
    returns: FFIType.bool,
  },
  clang_isExpression: {
    args: [FFIType.i32],
    returns: FFIType.bool,
  },
  clang_isStatement: {
    args: [FFIType.i32],
    returns: FFIType.bool,
  },
  clang_isAttribute: {
    args: [FFIType.i32],
    returns: FFIType.bool,
  },
  clang_Cursor_hasAttrs: {
    args: [ClangType.CXCursor],
    returns: FFIType.bool,
  },
  clang_isInvalid: {
    args: [FFIType.i32],
    returns: FFIType.bool,
  },
  clang_isTranslationUnit: {
    args: [FFIType.i32],
    returns: FFIType.bool,
  },
  clang_isPreprocessing: {
    args: [FFIType.i32],
    returns: FFIType.bool,
  },
  clang_isUnexposed: {
    args: [FFIType.i32],
    returns: FFIType.bool,
  },
  clang_getCursorLinkage: {
    args: [ClangType.CXCursor],
    returns: FFIType.i32,
  },
  clang_getCursorVisibility: {
    args: [ClangType.CXCursor],
    returns: FFIType.i32,
  },
  clang_getCursorAvailability: {
    args: [ClangType.CXCursor],
    returns: FFIType.i32,
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
    returns: FFIType.i32,
  },
  clang_getCursorTLSKind: {
    args: [ClangType.CXCursor],
    returns: FFIType.i32,
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
    returns: FFIType.i32,
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
    args: [FFIType.i32],
    returns: ClangType.CXString,
  },
  clang_getFunctionTypeCallingConv: {
    args: [ClangType.CXType],
    returns: FFIType.i32,
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
    returns: FFIType.i32,
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
    returns: FFIType.i32,
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
    returns: FFIType.i32,
  },
  clang_Cursor_getBinaryOpcode: {
    args: [ClangType.CXCursor],
    returns: FFIType.i32,
  },
  clang_Cursor_getBinaryOpcodeStr: {
    args: [FFIType.i32],
    returns: ClangType.CXString,
  },
  clang_Cursor_getStorageClass: {
    args: [ClangType.CXCursor],
    returns: FFIType.i32,
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
    args: [ClangType.CXPrintingPolicy, FFIType.i32],
    returns: FFIType.u32,
  },
  clang_PrintingPolicy_setProperty: {
    args: [ClangType.CXPrintingPolicy, FFIType.i32, FFIType.u32],
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
    returns: FFIType.i32,
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
    args: [FFIType.i32],
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
    returns: FFIType.i32,
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
    returns: FFIType.i32,
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
    returns: FFIType.i32,
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
    args: [FFIType.i32],
    returns: ClangType.CXString,
  },
  clang_getCursorBinaryOperatorKind: {
    args: [ClangType.CXCursor],
    returns: FFIType.i32,
  },
  clang_getUnaryOperatorKindSpelling: {
    args: [FFIType.i32],
    returns: ClangType.CXString,
  },
  clang_getCursorUnaryOperatorKind: {
    args: [ClangType.CXCursor],
    returns: FFIType.i32,
  },
};
