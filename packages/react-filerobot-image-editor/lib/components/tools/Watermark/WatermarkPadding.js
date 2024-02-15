"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_react=_interopRequireWildcard(require("react")),_menu=_interopRequireDefault(require("@scaleflex/ui/core/menu")),_padding=_interopRequireDefault(require("@scaleflex/icons/padding")),_restrictNumber=_interopRequireDefault(require("../../../utils/restrictNumber")),_AnnotationOptions=require("../../common/AnnotationOptions/AnnotationOptions.styled"),_Slider=_interopRequireDefault(require("../../common/Slider")),_core=require("@scaleflex/ui/core");function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(b,c){if(!c&&b&&b.__esModule)return b;if(null===b||"object"!=_typeof(b)&&"function"!=typeof b)return{default:b};var d=_getRequireWildcardCache(c);if(d&&d.has(b))return d.get(b);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in b)if("default"!=a&&Object.prototype.hasOwnProperty.call(b,a)){var g=f?Object.getOwnPropertyDescriptor(b,a):null;g&&(g.get||g.set)?Object.defineProperty(e,a,g):e[a]=b[a]}return e["default"]=b,d&&d.set(b,e),e}var WatermarkPadding=function(a){var b=a.watermark,c=a.saveWatermark,d=a.t,e=(0,_react.useState)(null),f=(0,_slicedToArray2["default"])(e,2),g=f[0],h=f[1],i=b.padding||0;return _react["default"].createElement(_react["default"].Fragment,null,_react["default"].createElement(_AnnotationOptions.StyledIconWrapper,{className:"FIE_watermark-padding-triggerer",title:d("padding"),onClick:function openOptionPopup(a){h(a.currentTarget)},active:g},_react["default"].createElement(_padding["default"],{size:20})),_react["default"].createElement(_menu["default"],{className:"FIE_watermark-padding-popup",anchorEl:g,open:!!g,onClose:function closeOptionPopup(){h(null)},position:"top"},_react["default"].createElement(_AnnotationOptions.StyledOptionPopupContent,null,_react["default"].createElement(_core.Label,null,d("padding")),_react["default"].createElement(_AnnotationOptions.StyledSpacedOptionFields,null,_react["default"].createElement(_Slider["default"],{annotation:"px",onChange:function updatePadding(a){c({padding:(0,_restrictNumber["default"])(a,0,100)})},value:i,noMargin:!0}),_react["default"].createElement(_AnnotationOptions.StyledIconLabel,null,"".concat(i,"px"))))))},_default=exports["default"]=WatermarkPadding;