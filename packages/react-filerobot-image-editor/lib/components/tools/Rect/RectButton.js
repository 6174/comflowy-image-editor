"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(require("react")),_cropLandscape=require("@scaleflex/icons/crop-landscape"),_ToolsBarItemButton=_interopRequireDefault(require("../../ToolsBar/ToolsBarItemButton")),_constants=require("../../../utils/constants"),RectButton=function(a){var b=a.selectTool,c=a.isSelected,d=a.t;return _react["default"].createElement(_ToolsBarItemButton["default"],{className:"FIE_rect-tool-button",id:_constants.TOOLS_IDS.RECT,label:d("rectangleTool"),Icon:_cropLandscape.CropLandscape,onClick:b,isSelected:c})};RectButton.defaultProps={isSelected:!1};var _default=exports["default"]=RectButton;