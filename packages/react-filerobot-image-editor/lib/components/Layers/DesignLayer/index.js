"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray")),_react=_interopRequireWildcard(require("react")),_reactKonva=require("react-konva"),_getDimensionsMinimalRatio=_interopRequireDefault(require("../../../utils/getDimensionsMinimalRatio")),_cropImage=_interopRequireDefault(require("../../../utils/cropImage")),_constants=require("../../../utils/constants"),_actions=require("../../../actions"),_getProperImageToCanvasSpacing=_interopRequireDefault(require("../../../utils/getProperImageToCanvasSpacing")),_hooks=require("../../../hooks"),_getSizeAfterRotation=_interopRequireDefault(require("../../../utils/getSizeAfterRotation")),_getCenterRotatedPoint=_interopRequireDefault(require("../../../utils/getCenterRotatedPoint")),_AnnotationNodes=_interopRequireDefault(require("./AnnotationNodes")),_PreviewGroup=_interopRequireDefault(require("./PreviewGroup"));function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(b,c){if(!c&&b&&b.__esModule)return b;if(null===b||"object"!=_typeof(b)&&"function"!=typeof b)return{default:b};var d=_getRequireWildcardCache(c);if(d&&d.has(b))return d.get(b);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in b)if("default"!=a&&Object.prototype.hasOwnProperty.call(b,a)){var g=f?Object.getOwnPropertyDescriptor(b,a):null;g&&(g.get||g.set)?Object.defineProperty(e,a,g):e[a]=b[a]}return e["default"]=b,d&&d.set(b,e),e}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var CANVAS_TO_IMG_SPACING=(0,_getProperImageToCanvasSpacing["default"])(),MIN_SPACED_WIDTH=10,DesignLayer=function(){var a,b,c,d,e=(0,_react.useRef)(),f=(0,_hooks.useStore)(),g=f.initialCanvasWidth,h=f.initialCanvasHeight,i=f.canvasWidth,j=f.canvasHeight,k=f.dispatch,l=f.toolId,m=f.canvasScale,n=f.originalImage,o=void 0===n?{}:n,p=f.finetunes,q=void 0===p?[]:p,r=f.finetunesProps,s=void 0===r?{}:r,t=f.filter,u=void 0===t?null:t,v=f.adjustments,w=void 0===v?{}:v,x=w.rotation,y=void 0===x?0:x,z=w.crop,A=void 0===z?{}:z,B=w.isFlippedX,C=w.isFlippedY,D=f.resize,E=(0,_react.useRef)(),F=(0,_react.useRef)(),G=l===_constants.TOOLS_IDS.CROP,H=(0,_react.useMemo)(function(){return u?[].concat((0,_toConsumableArray2["default"])(q),[u]):q},[q,u]),I=(0,_react.useMemo)(function(){var a=Math.max(MIN_SPACED_WIDTH,o.width-CANVAS_TO_IMG_SPACING),b=o.width/o.height;return{width:a,height:a/b}},[o]),J=(0,_react.useMemo)(function(){return(0,_getSizeAfterRotation["default"])(o.width,o.height,y)},[o,y]),K=(0,_react.useMemo)(function(){return(0,_getDimensionsMinimalRatio["default"])(g,h,o.width,o.height)},[o,g,h]),L=(0,_react.useMemo)(function(){return{width:I.width*K,height:I.height*K}},[I,K]),M=D.width&&!G?D.width/(null!==(a=null!==(b=A.width)&&void 0!==b?b:L.width)&&void 0!==a?a:J.width):1,N=D.height&&!G?D.height/(null!==(c=null!==(d=A.height)&&void 0!==d?d:L.height)&&void 0!==c?c:J.height):1,O=i/(2*m)-L.width*M/2,P=j/(2*m)-L.height*N/2,Q=i/(2*m)-L.width/2,R=j/(2*m)-L.height/2,S=(0,_react.useMemo)(function(){return{x:Math.round(O),y:Math.round(P),abstractX:Math.round(Q),abstractY:Math.round(R),width:L.width,height:L.height,scaledBy:m}},[m,O,P,Q,R,L]),T=(0,_react.useCallback)(function(){E.current?E.current.cache():setTimeout(T,0)},[]),U=(0,_getSizeAfterRotation["default"])(S.width,S.height,y),V=G?1:(0,_getDimensionsMinimalRatio["default"])(S.width,S.height,U.width,U.height);if((0,_react.useEffect)(function(){return o&&T(),function(){var a;null===(a=E.current)||void 0===a||a.clearCache()}},[o]),(0,_react.useEffect)(function(){S&&k({type:_actions.SET_SHOWN_IMAGE_DIMENSIONS,payload:{shownImageDimensions:S,designLayer:e.current,previewGroup:F.current}})},[S]),!O||!P||!S)return null;var W=(0,_getCenterRotatedPoint["default"])(A.x,A.y,y),X=O+(!G&&A.width?(B?-1:1)*(S.width/2-A.x-A.width/2+W.x)*M:0),Y=P+(!G&&A.height?(C?-1:1)*(S.height/2-A.y-A.height/2+W.y)*N:0),Z=G?Q:X,$=G?R:Y,_=(B?-1:1)*(G?1:M)*V,aa=(C?-1:1)*(G?1:N)*V;return _react["default"].createElement(_reactKonva.Layer,{id:_constants.DESIGN_LAYER_ID,ref:e,xPadding:Z,yPadding:$,offsetX:L.width/2,offsetY:L.height/2,x:L.width*M/2+Z,y:L.height*N/2+$,scaleX:_,scaleY:aa,rotation:G?0:y,clipFunc:function clipFunc(a){var b,c=G&&!(null!==(b=e.current)&&void 0!==b&&null!==(b=b.attrs)&&void 0!==b&&b.isSaving),d=c||A.noEffect?_objectSpread(_objectSpread({},S),{},{x:0,y:0}):{width:A.width||S.width,height:A.height||S.height,x:A.x||0,y:A.y||0};(0,_cropImage["default"])(a,_objectSpread({ratio:A.ratio},d),c),e.current&&e.current.setAttrs({clipX:d.x,clipY:d.y,clipWidth:d.width,clipHeight:d.height})}},_react["default"].createElement(_reactKonva.Image,(0,_extends2["default"])({id:_constants.IMAGE_NODE_ID,image:o,width:L.width,height:L.height,offsetX:L.width/2,offsetY:L.height/2,x:L.width/2,y:L.height/2,listening:!1,filters:H,ref:E},s)),_react["default"].createElement(_AnnotationNodes["default"],null),_react["default"].createElement(_PreviewGroup["default"],{ref:F}))},_default=exports["default"]=DesignLayer;