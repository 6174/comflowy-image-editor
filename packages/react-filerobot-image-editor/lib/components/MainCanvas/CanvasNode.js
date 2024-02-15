"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_react=_interopRequireWildcard(require("react")),_konva=_interopRequireDefault(require("konva")),_reactKonva=require("react-konva"),_actions=require("../../actions"),_constants=require("../../utils/constants"),_hooks=require("../../hooks"),_touchZoomingEvents=require("./touchZoomingEvents"),_MainCanvas=require("./MainCanvas.styled");function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(b,c){if(!c&&b&&b.__esModule)return b;if(null===b||"object"!=_typeof(b)&&"function"!=typeof b)return{default:b};var d=_getRequireWildcardCache(c);if(d&&d.has(b))return d.get(b);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in b)if("default"!=a&&Object.prototype.hasOwnProperty.call(b,a)){var g=f?Object.getOwnPropertyDescriptor(b,a):null;g&&(g.get||g.set)?Object.defineProperty(e,a,g):e[a]=b[a]}return e["default"]=b,d&&d.set(b,e),e}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var ZOOM_DELTA_TO_SCALE_CONVERT_FACTOR=.006,CanvasNode=function(a){var b=a.children;(0,_reactKonva.useStrictMode)(!0);var c=(0,_react.useRef)(),d=(0,_hooks.useStore)(),f=d.dispatch,g=d.pointerCssIcon,h=d.tabId,i=d.toolId,j=d.canvasWidth,k=d.canvasHeight,l=d.canvasScale,m=d.selectionsIds,n=void 0===m?[]:m,o=d.zoom,p=void 0===o?{}:o,q=d.config,r=q.previewPixelRatio,s=q.disableZooming;_konva["default"].pixelRatio=r;var t=_constants.DEFAULT_ZOOM_FACTOR,u=!s&&i!==_constants.TOOLS_IDS.CROP,v=(0,_react.useState)(h!==_constants.TABS_IDS.ANNOTATE&&h!==_constants.TABS_IDS.WATERMARK&&p.factor>t),w=(0,_slicedToArray2["default"])(v,2),x=w[0],y=w[1],z=(0,_react.useMemo)(function(){return{cursor:g===_constants.POINTER_ICONS.DEFAULT&&h===_constants.TABS_IDS.ANNOTATE?_constants.POINTER_ICONS.DRAW:g}},[h,g]),A=function(a){f({type:_actions.ZOOM_CANVAS,payload:a})},B=(0,_react.useCallback)(function(a){var b,c;a.evt.preventDefault(),null===(b=(c=a.currentTarget).container)||void 0===b||b.call(c).focus(),a.target instanceof _konva["default"].Stage&&0<n.length&&f({type:_actions.CLEAR_ANNOTATIONS_SELECTIONS})},[n]),C=function(){return y(h!==_constants.TABS_IDS.ANNOTATE||h===_constants.TABS_IDS.WATERMARK)},D=function(a){("Space"===a.code||"Control"===a.key)&&!a.repeat&&p.factor>t&&u&&(a.preventDefault(),y(!0),f({type:_actions.CHANGE_POINTER_ICON,payload:{pointerCssIcon:_constants.POINTER_ICONS.DRAG}}))},E=function(a){"Space"===a.code&&(a.preventDefault(),C())},F=function(){c.current&&c.current.container().focus()};(0,_react.useEffect)(function(){f({type:_actions.CHANGE_POINTER_ICON,payload:{pointerCssIcon:_constants.POINTER_ICONS[x?"DRAG":"DEFAULT"]}})},[x]),(0,_react.useEffect)(function(){y(h!==_constants.TABS_IDS.ANNOTATE&&h!==_constants.TABS_IDS.WATERMARK&&p.factor>t);var a;return c.current&&(a=c.current.container(),a.addEventListener("mouseenter",F),a.addEventListener("keydown",D),a.addEventListener("keyup",E)),function(){a&&(a.removeEventListener("mouseenter",F),a.removeEventListener("keydown",D),a.removeEventListener("keyup",E))}},[h,p.factor,t]);var G=l*(u&&p.factor||t);return _react["default"].createElement(_MainCanvas.StyledCanvasNode,{className:"FIE_canvas-node",tabIndex:-1,ref:c,width:j,height:k,scaleX:G,scaleY:G,x:u&&p.x||null,y:u&&p.y||null,zoomFactor:u&&p.factor||t,onWheel:u?function handleZoom(a){a.evt.preventDefault();var b=(p.factor||t)+a.evt.deltaY*-ZOOM_DELTA_TO_SCALE_CONVERT_FACTOR,c=a.currentTarget.getPointerPosition();A(_objectSpread(_objectSpread({},c),{},{factor:b}))}:void 0,onTap:B,onClick:B,onTouchMove:u?function(a){return(0,_touchZoomingEvents.zoomOnTouchesMove)(a,A)}:void 0,onDragStart:function preventDraggingIfMultiTouches(a){var b;1<(null===(b=a.evt.touches)||void 0===b?void 0:b.length)&&y(!1)},onTouchEnd:u?function endTouchesZoomingEnablePanning(){(0,_touchZoomingEvents.endTouchesZooming)(C)}:void 0,dragBoundFunc:function dragBoundFunc(a){var b=Math.min(0,Math.max(a.x,j*(1-p.factor))),c=Math.min(0,Math.max(a.y,k*(1-p.factor)));return{x:b,y:c}},draggable:u&&x,onDragEnd:function handleCanvasDragEnd(a){a.currentTarget.draggable()&&"stage"===a.target.nodeType.toLowerCase()&&u&&x&&A({factor:p.factor,x:a.target.x(),y:a.target.y(),preparedDimensions:!0})},style:z},b)},_default=exports["default"]=(0,_react.memo)(CanvasNode);