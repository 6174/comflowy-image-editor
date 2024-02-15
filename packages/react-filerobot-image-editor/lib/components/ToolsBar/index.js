"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireWildcard(require("react")),_actions=require("../../actions"),_tools=require("../tools/tools.constants"),_constants=require("../../utils/constants"),_hooks=require("../../hooks"),_Carousel=_interopRequireDefault(require("../common/Carousel")),_ToolsBar=require("./ToolsBar.styled"),_ToolsBarItemOptionsWrapper=_interopRequireDefault(require("./ToolsBarItemOptionsWrapper"));function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(b,c){if(!c&&b&&b.__esModule)return b;if(null===b||"object"!=_typeof(b)&&"function"!=typeof b)return{default:b};var d=_getRequireWildcardCache(c);if(d&&d.has(b))return d.get(b);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in b)if("default"!=a&&Object.prototype.hasOwnProperty.call(b,a)){var g=f?Object.getOwnPropertyDescriptor(b,a):null;g&&(g.get||g.set)?Object.defineProperty(e,a,g):e[a]=b[a]}return e["default"]=b,d&&d.set(b,e),e}var style={maxWidth:"100%",width:"100%"},ToolsBar=function(a){var b,c=a.isPhoneScreen,d=(0,_hooks.useStore)(),e=d.t,f=d.dispatch,g=d.tabId,h=d.toolId,i=d.annotations,j=d.selectionsIds,k=void 0===j?[]:j,l=d.config,m=l.defaultTabId,n=l.defaultToolId,o=l.useCloudimage,p=g||m,q=h||n||(null===(b=_tools.TABS_TOOLS[p])||void 0===b?void 0:b[0]),r=(0,_react.useMemo)(function(){return _tools.TABS_TOOLS[p]||[]},[p]),s=(0,_react.useCallback)(function(a){f({type:_actions.SELECT_TOOL,payload:{toolId:a}})},[]),t=(0,_react.useMemo)(function(){return r.map(function(a){var b=_tools.TOOLS_ITEMS[a],c=b.Item,d=b.hideFn;return c&&(!d||!d({useCloudimage:o}))&&_react["default"].createElement(c,{key:a,selectTool:s,t:e,isSelected:q===a})})},[r,q]),u=(0,_react.useMemo)(function(){var a,b,c;if(!q)return!1;if(p===_constants.TABS_IDS.ANNOTATE){var d=k.length;if(1===d){var e,f=i[k[0]];return null===(e=_tools.TOOLS_ITEMS[f.name])||void 0===e?void 0:e.ItemOptions}if(1<d)return null}return p&&q&&_tools.TABS_TOOLS[p].includes(q)&&(!(null!==(a=_tools.TOOLS_ITEMS[h])&&void 0!==a&&a.hideFn)||!(null!==(b=_tools.TOOLS_ITEMS[h])&&void 0!==b&&b.hideFn({useCloudimage:o})))&&(null===(c=_tools.TOOLS_ITEMS[h])||void 0===c?void 0:c.ItemOptions)},[p,q,i,k]);return(0,_react.useEffect)(function(){!h&&q&&f({type:_actions.SELECT_TOOL,payload:{toolId:q}})},[]),_react["default"].createElement(_ToolsBar.StyledToolsBar,{className:"FIE_tools-bar-wrapper"},_react["default"].createElement(_ToolsBarItemOptionsWrapper["default"],{isPhoneScreen:c},u&&_react["default"].createElement(u,{t:e})),t&&_react["default"].createElement(_ToolsBar.StyledToolsBarItems,{className:"FIE_tools-bar",isPhoneScreen:c},p===_constants.TABS_IDS.WATERMARK?t:_react["default"].createElement(_Carousel["default"],{className:"FIE_tools",style:style},t)))};ToolsBar.defaultProps={isPhoneScreen:!1};var _default=exports["default"]=ToolsBar;