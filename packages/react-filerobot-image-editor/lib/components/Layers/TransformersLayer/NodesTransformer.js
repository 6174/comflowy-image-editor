"use strict";var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireWildcard(require("react")),_reactKonva=require("react-konva"),_constants=require("../../../utils/constants"),_hooks=require("../../../hooks"),_actions=require("../../../actions");function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(b,c){if(!c&&b&&b.__esModule)return b;if(null===b||"object"!=_typeof(b)&&"function"!=typeof b)return{default:b};var d=_getRequireWildcardCache(c);if(d&&d.has(b))return d.get(b);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in b)if("default"!=a&&Object.prototype.hasOwnProperty.call(b,a)){var g=f?Object.getOwnPropertyDescriptor(b,a):null;g&&(g.get||g.set)?Object.defineProperty(e,a,g):e[a]=b[a]}return e["default"]=b,d&&d.set(b,e),e}var NodesTransformer=function(){var a,b=(0,_hooks.useStore)(),c=b.selectionsIds,d=void 0===c?[]:c,e=b.theme,f=b.designLayer,g=b.dispatch,h=b.config.useCloudimage,i=(0,_react.useMemo)(function(){return null!==f&&void 0!==f&&f.findOne?d.map(function(a){return f.findOne("#".concat(a))}).filter(Boolean):[]},[d]),j=function(){1===i.length&&i[0].name()===_constants.TOOLS_IDS.TEXT&&g({type:_actions.ENABLE_TEXT_CONTENT_EDIT,payload:{textIdOfEditableContent:i[0].id()}})},k=h?["top-left","bottom-left","top-right","bottom-right"]:void 0;return _react["default"].createElement(_reactKonva.Transformer,{id:_constants.NODES_TRANSFORMER_ID,centeredScaling:!1,rotationSnaps:[0,45,90,135,180,225,270,315],nodes:i,rotateAnchorOffset:30,anchorSize:14,anchorCornerRadius:7,padding:1===i.length?null!==(a=i[0].attrs.padding)&&void 0!==a?a:1:1,ignoreStroke:!1,anchorStroke:e.palette["accent-primary"],anchorFill:e.palette["access-primary"],anchorStrokeWidth:2,borderStroke:e.palette["accent-primary"],borderStrokeWidth:2,borderDash:[4],rotateEnabled:!h,onMouseOver:function changePointerIconToMove(){g({type:_actions.CHANGE_POINTER_ICON,payload:{pointerCssIcon:_constants.POINTER_ICONS.MOVE}})},onMouseLeave:function changePointerIconToDraw(){g({type:_actions.CHANGE_POINTER_ICON,payload:{pointerCssIcon:_constants.POINTER_ICONS.DRAW}})},onDblClick:j,onDblTap:j,enabledAnchors:k,flipEnabled:!h,shouldOverdrawWholeArea:!0})},_default=exports["default"]=NodesTransformer;