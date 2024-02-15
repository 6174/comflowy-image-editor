"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_react=_interopRequireDefault(require("react")),_toPrecisedFloat=_interopRequireDefault(require("../../../utils/toPrecisedFloat")),_hooks=require("../../../hooks"),_CropPresetItem=_interopRequireDefault(require("./CropPresetItem")),_Crop=require("./Crop.styled");function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var CropPresetGroup=function(a){var b=a.groupTitleKey,c=a.items,d=a.onItemSelect,e=a.t,f=a.isExpanded,g=a.setExpandedGroup,h=(0,_hooks.useStore)(),i=h.adjustments.crop,j=i.ratio,k=i.ratioGroupKey,l=i.ratioTitleKey,m=h.theme,n=function(a,c,e){d(a,c,_objectSpread(_objectSpread({},e),{},{ratioGroupKey:b}))};return _react["default"].createElement(_Crop.StyledAccordion,{label:e(b),onChange:function toggleExpand(){g(f?null:b)},expanded:f},c.map(function(a){var c=a.titleKey,d=a.ratio,f=a.width,g=a.height,h=a.descriptionKey,i=a.icon,o=a.disableManualResize,p=a.noEffect,q=null!==d&&void 0!==d?d:(0,_toPrecisedFloat["default"])(f/g);return _react["default"].createElement(_CropPresetItem["default"],{key:c,titleKey:c,t:e,description:e(h),size:"sm",onClick:n,width:f,height:g,ratio:q,Icon:i,theme:m,isAccordion:!0,disableManualResize:o,isActive:j===q&&l===c&&k===b,noEffect:p})}))},_default=exports["default"]=CropPresetGroup;