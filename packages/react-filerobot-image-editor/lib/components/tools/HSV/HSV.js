"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(require("react")),_saturation=require("@scaleflex/icons/saturation"),_ToolsBarItemButton=_interopRequireDefault(require("../../ToolsBar/ToolsBarItemButton")),_constants=require("../../../utils/constants"),HSV=function(a){var b=a.selectTool,c=a.isSelected,d=a.t;return _react["default"].createElement(_ToolsBarItemButton["default"],{className:"FIE_hsv-tool-button",id:_constants.TOOLS_IDS.HSV,label:d("hsvTool"),Icon:_saturation.Saturation,onClick:b,isSelected:c})};HSV.defaultProps={isSelected:!1};var _default=exports["default"]=HSV;