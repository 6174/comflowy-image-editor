"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _BaseFilters=_interopRequireDefault(require("./BaseFilters")),SEPIA_CONST=.4,BRIGHTNESS_CONST=.13,CONTRAST_CONST=-.05;function Reyes(a){_BaseFilters["default"].apply(a,_BaseFilters["default"].sepia(SEPIA_CONST),_BaseFilters["default"].brightness(BRIGHTNESS_CONST),_BaseFilters["default"].contrast(CONTRAST_CONST))}Reyes.filterName="Reyes";var _default=exports["default"]=Reyes;