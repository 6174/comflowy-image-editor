"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(require("react")),_brightness=require("@scaleflex/icons/brightness"),_ToolsBarItemButton=_interopRequireDefault(require("../../ToolsBar/ToolsBarItemButton")),_constants=require("../../../utils/constants"),Brightness=function(a){var b=a.selectTool,c=a.isSelected,d=a.t;return _react["default"].createElement(_ToolsBarItemButton["default"],{className:"FIE_brightness-tool-button",id:_constants.TOOLS_IDS.BRIGHTNESS,label:d("brightnessTool"),Icon:_brightness.Brightness,onClick:b,isSelected:c})};Brightness.defaultProps={isSelected:!1};var _default=exports["default"]=Brightness;