"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=exports.SET_SHOWN_TABS_MENU=void 0;function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var SET_SHOWN_TABS_MENU=exports.SET_SHOWN_TABS_MENU="SET_SHOWN_TABS_MENU",setShowTabsMenu=function(a,b){return _objectSpread(_objectSpread({},a),{},{showTabsMenu:b.opened})},_default=exports["default"]=setShowTabsMenu;