"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(require("react")),_imageOutline=require("@scaleflex/icons/image-outline"),_ToolsBarItemButton=_interopRequireDefault(require("../../ToolsBar/ToolsBarItemButton")),_constants=require("../../../utils/constants"),ImageButton=function(a){var b=a.selectTool,c=a.isSelected,d=a.t;return _react["default"].createElement(_ToolsBarItemButton["default"],{className:"FIE_image-tool-button",id:_constants.TOOLS_IDS.IMAGE,label:d("imageTool"),Icon:_imageOutline.ImageOutline,onClick:b,isSelected:c})};ImageButton.defaultProps={isSelected:!1};var _default=exports["default"]=ImageButton;