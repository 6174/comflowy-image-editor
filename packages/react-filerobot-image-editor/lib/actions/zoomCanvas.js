"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=exports.ZOOM_CANVAS=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_calculateZoomData=_interopRequireDefault(require("../utils/calculateZoomData")),_constants=require("../utils/constants"),_restrictNumber=_interopRequireDefault(require("../utils/restrictNumber")),_excluded=["preparedDimensions"];function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var ZOOM_CANVAS=exports.ZOOM_CANVAS="ZOOM_CANVAS",MIN_ZOOM_FACTOR=.03,MAX_ZOOM_FACTOR=60,zoomCanvas=function(a,b){var c,d=(0,_restrictNumber["default"])(parseFloat(b.factor).toFixed(2),MIN_ZOOM_FACTOR,MAX_ZOOM_FACTOR);if(b.preparedDimensions){var e=b.preparedDimensions,f=(0,_objectWithoutProperties2["default"])(b,_excluded);c=f}else{var g,h,i={x:b.x||0===b.x?null!==(g=b.x)&&void 0!==g?g:a.zoom.x:a.canvasWidth/2,y:b.y||0===b.y?null!==(h=b.y)&&void 0!==h?h:a.zoom.y:a.canvasHeight/2};c=(0,_calculateZoomData["default"])(_objectSpread(_objectSpread({},i),{},{factor:d}),b.isAbsoluteZoom?{factor:_constants.DEFAULT_ZOOM_FACTOR,x:null,y:null}:a.zoom,a.canvasWidth,a.canvasHeight)}return c.factor===a.zoom.factor&&c.x===a.zoom.x&&c.y===a.zoom.y?a:_objectSpread(_objectSpread({},a),{},{zoom:_objectSpread(_objectSpread({},a.zoom),c)})},_default=exports["default"]=zoomCanvas;