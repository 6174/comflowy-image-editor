"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireDefault(require("react")),_reactKonva=require("react-konva"),_nodesCommonPropTypes=_interopRequireDefault(require("../nodesCommonPropTypes")),_excluded=["id","name","fill","x","y","radiusX","radiusY","scaleX","scaleY","rotation","annotationEvents","stroke","strokeWidth","shadowOffsetX","shadowOffsetY","shadowBlur","shadowColor","shadowOpacity","opacity"];function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var EllipseNode=function(a){var b=a.id,c=a.name,d=a.fill,e=a.x,f=a.y,g=a.radiusX,h=a.radiusY,i=a.scaleX,j=a.scaleY,k=a.rotation,l=a.annotationEvents,m=a.stroke,n=a.strokeWidth,o=a.shadowOffsetX,p=a.shadowOffsetY,q=a.shadowBlur,r=a.shadowColor,s=a.shadowOpacity,t=a.opacity,u=(0,_objectWithoutProperties2["default"])(a,_excluded);return _react["default"].createElement(_reactKonva.Ellipse,(0,_extends2["default"])({id:b,name:c,rotation:k,scaleX:i,scaleY:j,stroke:m,strokeWidth:n,shadowOffsetX:o,shadowOffsetY:p,shadowBlur:q,shadowColor:r,shadowOpacity:s,fill:d,x:e,y:f,radiusX:g,radiusY:h,offsetX:-g,offsetY:-h,opacity:t},l,u))};EllipseNode.defaultProps=_objectSpread(_objectSpread({},_nodesCommonPropTypes["default"].defaults),{},{fill:"#000",radiusX:0,radiusY:0});var _default=exports["default"]=EllipseNode;