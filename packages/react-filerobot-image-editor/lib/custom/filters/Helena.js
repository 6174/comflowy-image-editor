"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _BaseFilters=_interopRequireDefault(require("./BaseFilters")),COLOR_FILTER_CONST=[208,208,86,.2],CONTRAST_CONST=.15;function Helena(a){_BaseFilters["default"].apply(a,_BaseFilters["default"].colorFilter(COLOR_FILTER_CONST),_BaseFilters["default"].contrast(CONTRAST_CONST))}Helena.filterName="Helena";var _default=exports["default"]=Helena;