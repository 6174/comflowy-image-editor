"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray")),_typeof2=_interopRequireDefault(require("@babel/runtime/helpers/typeof")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var deepMerge=function(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],d=_objectSpread({},a),e=Object.keys(b);return e.forEach(function(e){var f=b[e];if(void 0!==f){var g=(0,_typeof2["default"])(f);if("object"!==g||f instanceof HTMLElement||null===f||Array.isArray(f)||!a[e]||"object"!==(0,_typeof2["default"])(a[e]))return void(d[e]=c&&Array.isArray(d[e])&&Array.isArray(f)?[].concat((0,_toConsumableArray2["default"])(d[e]),(0,_toConsumableArray2["default"])(f)):f);d[e]=deepMerge(a[e],f)}}),d},_default=exports["default"]=deepMerge;