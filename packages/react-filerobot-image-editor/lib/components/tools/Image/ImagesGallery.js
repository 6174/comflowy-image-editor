"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(require("react")),_popper=_interopRequireDefault(require("@scaleflex/ui/core/popper")),_Image=require("./Image.styled"),ImagesGallery=function(a){var b=a.gallery,c=a.anchorEl,d=a.onClose,e=a.onSelect;return _react["default"].createElement(_popper["default"],{className:"FIE_image-tool-gallery",anchorEl:c,open:!!c,position:"top",onClick:d,overlay:!0},_react["default"].createElement(_Image.StyledImagesGallery,null,b.map(function(a){var b=a.originalUrl,c=a.previewUrl;return _react["default"].createElement(_Image.StyledImageWrapper,{key:b,onClick:function onClick(){return e(b)}},_react["default"].createElement("img",{src:c,alt:c,crossOrigin:"Anonymous",draggable:!1}))})))};ImagesGallery.defaultProps={gallery:[],anchorEl:null};var _default=exports["default"]=ImagesGallery;