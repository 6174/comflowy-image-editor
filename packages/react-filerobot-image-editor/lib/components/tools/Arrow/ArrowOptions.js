"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_react=_interopRequireDefault(require("react")),_hooks=require("../../../hooks"),_constants=require("../../../utils/constants"),_AnnotationOptions=_interopRequireDefault(require("../../common/AnnotationOptions")),ArrowOptions=function(a){var b=a.t,c=(0,_hooks.useAnnotation)({name:_constants.TOOLS_IDS.ARROW}),d=(0,_slicedToArray2["default"])(c,2),e=d[0],f=d[1];return _react["default"].createElement(_AnnotationOptions["default"],{className:"FIE_arrow-tool-options",annotation:e,updateAnnotation:f,t:b,hidePositionField:!0,hideFillOption:!0})},_default=exports["default"]=ArrowOptions;