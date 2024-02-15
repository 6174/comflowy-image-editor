"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=exports.RESET=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_extractCurrentDesignState=_interopRequireDefault(require("../utils/extractCurrentDesignState"));function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var RESET=exports.RESET="RESET",reset=function(a,b){var c=(0,_extractCurrentDesignState["default"])(_objectSpread(_objectSpread({},b.config),{},{imgSrc:a.imgSrc}),!0);return _objectSpread(_objectSpread(_objectSpread({},a),c),{},{selectionsIds:[],isResetted:!0,pastDesignStates:[],futureDesignStates:[],hasUndo:!1,hasRedo:!1,haveNotSavedChanges:!1})},_default=exports["default"]=reset;