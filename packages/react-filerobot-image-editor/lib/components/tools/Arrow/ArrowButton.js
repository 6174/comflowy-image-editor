import React from"react";import{ArrowTool as ArrowIcon}from"@scaleflex/icons/arrow-tool";import ToolsBarItemButton from"../../ToolsBar/ToolsBarItemButton";import{TOOLS_IDS}from"../../../utils/constants";var ArrowButton=function(a){var b=a.selectTool,c=a.isSelected,d=a.t;return React.createElement(ToolsBarItemButton,{className:"FIE_arrow-tool-button",id:TOOLS_IDS.ARROW,label:d("arrowTool"),Icon:ArrowIcon,onClick:b,isSelected:c})};ArrowButton.defaultProps={isSelected:!1};export default ArrowButton;