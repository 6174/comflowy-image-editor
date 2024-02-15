"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _core=require("@scaleflex/ui/core"),_styledComponents=_interopRequireDefault(require("styled-components")),_palette=require("@scaleflex/ui/utils/types/palette"),ColorPickerModal=(0,_styledComponents["default"])(_core.Modal).withConfig({componentId:"sc-7tf41j-0"})(["max-width:350px;"]),ColorPickerWrap=_styledComponents["default"].div.withConfig({componentId:"sc-7tf41j-1"})([".SfxColorPicker-root{max-width:100%;padding:0;box-shadow:none;border:none;","}.SfxColorPicker-action{display:flex;gap:12px;.SfxColorPicker-select{width:100px;}.SfxInput-root{width:190px !important;}}.SfxColorPicker-icon{color:",";}.SfxColorPicker-range-picker,.SfxColorPicker-bar-wrapper{width:100%;}"],function(a){var b=a.hideModalTitle;return b&&"padding-top: 12px;"},function(a){var b=a.theme.palette;return b[_palette.Color.IconsPrimary]}),ModalActions=(0,_styledComponents["default"])(_core.ModalActions).withConfig({componentId:"sc-7tf41j-2"})(["gap:12px;padding:24px;.SfxButton-root{flex:1;margin:0;height:40px;}"]),Styled={ColorPickerModal:ColorPickerModal,ColorPickerWrap:ColorPickerWrap,ModalActions:ModalActions},_default=exports["default"]=Styled;