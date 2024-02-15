"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(require("react")),_compare=_interopRequireDefault(require("@scaleflex/icons/compare")),_actions=require("../../actions"),_hooks=require("../../hooks"),_getProperDimensions=_interopRequireDefault(require("../../utils/getProperDimensions")),_Separator=_interopRequireDefault(require("../common/Separator")),_Topbar=require("./Topbar.styled"),_CanvasZooming=_interopRequireDefault(require("./CanvasZooming")),ImageDimensionsAndDisplayToggle=function(a){var b=a.showBackButton,c=a.isPhoneScreen,d=(0,_hooks.useStore)(),e=d.dispatch,f=d.isResetted,g=!(void 0!==f)||f,h=d.originalImage,i=d.resize,j=void 0===i?{}:i,k=d.adjustments,l=k.crop,m=k.rotation,n=void 0===m?0:m,o=d.shownImageDimensions,p=d.config.disableZooming,q=d.t,r=function(){e({type:_actions.TOGGLE_ORIGINAL_IMAGE_DISPLAY,payload:{isShow:!1}}),document.removeEventListener("mouseup",r),document.removeEventListener("mouseleave",r),document.removeEventListener("touchcancel",r),document.removeEventListener("touchend",r)},s=function(){e({type:_actions.TOGGLE_ORIGINAL_IMAGE_DISPLAY,payload:{isShow:!0}}),document.addEventListener("mouseup",r),document.addEventListener("mouseleave",r),document.addEventListener("touchcancel",r),document.addEventListener("touchend",r)};if(!h)return null;var t=(0,_getProperDimensions["default"])(j,l,o,h,n);return _react["default"].createElement(_Topbar.StyledImageOptionsButtons,{isPhoneScreen:c},_react["default"].createElement(_Topbar.StyledDimensionsLabel,{title:q("imageDimensionsHoverTitle")},"".concat(t.width," x ").concat(t.height," px")),_react["default"].createElement(_Topbar.StyledDimensionsButtons,null,_react["default"].createElement(_Topbar.StyledSmallButton,{color:"basic",onMouseDown:g?void 0:s,onTouchStart:g?void 0:s,disabled:g,showBackButton:b,title:q("showImageTitle")},_react["default"].createElement(_compare["default"],null)),!p&&_react["default"].createElement(_react["default"].Fragment,null,_react["default"].createElement(_Separator["default"],null),_react["default"].createElement(_CanvasZooming["default"],{showBackButton:b}))))};ImageDimensionsAndDisplayToggle.defaultProps={showBackButton:!1,isPhoneScreen:!1};var _default=exports["default"]=ImageDimensionsAndDisplayToggle;