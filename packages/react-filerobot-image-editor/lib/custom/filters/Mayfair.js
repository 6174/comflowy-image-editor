"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _BaseFilters=_interopRequireDefault(require("./BaseFilters")),COLOR_FILTER_CONST=[230,115,108,.05],SATURATION_CONST=.15;function Mayfair(a){_BaseFilters["default"].apply(a,_BaseFilters["default"].colorFilter(COLOR_FILTER_CONST),_BaseFilters["default"].saturation(SATURATION_CONST))}Mayfair.filterName="Mayfair";var _default=exports["default"]=Mayfair;