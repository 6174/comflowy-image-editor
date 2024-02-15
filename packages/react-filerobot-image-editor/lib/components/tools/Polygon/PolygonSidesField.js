"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(require("react")),_label=_interopRequireDefault(require("@scaleflex/ui/core/label")),_AnnotationOptions=require("../../common/AnnotationOptions/AnnotationOptions.styled"),_restrictNumber=_interopRequireDefault(require("../../../utils/restrictNumber")),_Slider=_interopRequireDefault(require("../../common/Slider")),MIN_VALUE=3,MAX_VALUE=25,PolygonSidesField=function(a){var b=a.annotation,c=a.updateAnnotation,d=a.t,e=b.sides;return _react["default"].createElement(_AnnotationOptions.StyledSpacedOptionFields,null,_react["default"].createElement(_label["default"],null,d("sides")),_react["default"].createElement(_Slider["default"],{annotation:"",onChange:function updateSidesNumber(a){c({sides:(0,_restrictNumber["default"])(a,MIN_VALUE,MAX_VALUE)})},value:e,min:MIN_VALUE,max:MAX_VALUE}))},_default=exports["default"]=PolygonSidesField;