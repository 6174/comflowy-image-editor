"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(require("react")),_annotation=require("@scaleflex/icons/annotation"),_ToolsBarItemButton=_interopRequireDefault(require("../../ToolsBar/ToolsBarItemButton")),_constants=require("../../../utils/constants"),PenButton=function(a){var b=a.selectTool,c=a.isSelected,d=a.t;return _react["default"].createElement(_ToolsBarItemButton["default"],{className:"FIE_pen-tool-button",id:_constants.TOOLS_IDS.PEN,label:d("penTool"),Icon:_annotation.Annotation,onClick:b,isSelected:c})};PenButton.defaultProps={isSelected:!1};var _default=exports["default"]=PenButton;