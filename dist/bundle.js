/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _pregx = __webpack_require__(/*! ./src/pregx */ 1);\n\nvar _pregx2 = _interopRequireDefault(_pregx);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar str = 'sdgsdf 545343 564654 sdfsdf';\n\nconsole.log(str);\nconsole.log(_pregx2.default.Digit(str, {\n\tflags: ['g']\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9pbmRleC5qcz8xNjg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmVnWCBmcm9tICcuL3NyYy9wcmVneCdcclxuXHJcbmNvbnN0IHN0ciA9ICdzZGdzZGYgNTQ1MzQzIDU2NDY1NCBzZGZzZGYnXHJcblxyXG5jb25zb2xlLmxvZyhzdHIpXHJcbmNvbnNvbGUubG9nKFByZWdYLkRpZ2l0KHN0ciwge1xyXG5cdGZsYWdzOiBbJ2cnXVxyXG59KSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gaW5kZXguanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************!*\
  !*** ./src/pregx.js ***!
  \**********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _alphaNumeric = __webpack_require__(/*! ./patterns/alpha-numeric */ 2);\n\nObject.defineProperty(exports, 'alphaNumeric', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_alphaNumeric).default;\n  }\n});\n\nvar _alphabet = __webpack_require__(/*! ./patterns/alphabet */ 3);\n\nObject.defineProperty(exports, 'alphabet', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_alphabet).default;\n  }\n});\n\nvar _creditCardNumber = __webpack_require__(/*! ./patterns/credit-card-number */ 4);\n\nObject.defineProperty(exports, 'creditCardNumber', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_creditCardNumber).default;\n  }\n});\n\nvar _date = __webpack_require__(/*! ./patterns/date */ 5);\n\nObject.defineProperty(exports, 'date', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_date).default;\n  }\n});\n\nvar _digits = __webpack_require__(/*! ./patterns/digits */ 6);\n\nObject.defineProperty(exports, 'digits', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_digits).default;\n  }\n});\n\nvar _email = __webpack_require__(/*! ./patterns/email */ 7);\n\nObject.defineProperty(exports, 'email', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_email).default;\n  }\n});\n\nvar _password = __webpack_require__(/*! ./patterns/password */ 8);\n\nObject.defineProperty(exports, 'password', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_password).default;\n  }\n});\n\nvar _phoneNumber = __webpack_require__(/*! ./patterns/phone-number */ 9);\n\nObject.defineProperty(exports, 'phoneNumber', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_phoneNumber).default;\n  }\n});\n\nvar _postalCode = __webpack_require__(/*! ./patterns/postal-code */ 10);\n\nObject.defineProperty(exports, 'postalCode', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_postalCode).default;\n  }\n});\n\nvar _url = __webpack_require__(/*! ./patterns/url */ 11);\n\nObject.defineProperty(exports, 'url', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_url).default;\n  }\n});\n\nvar _zipcode = __webpack_require__(/*! ./patterns/zipcode */ 12);\n\nObject.defineProperty(exports, 'zipcode', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_zipcode).default;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcHJlZ3guanM/YzFmZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBAdG9kbyBjcmVkaXQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9uZXJkc3Jlc2N1ZW1lXHJcbiAqL1xyXG5cclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbHBoYU51bWVyaWMgfSBmcm9tICcuL3BhdHRlcm5zL2FscGhhLW51bWVyaWMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWxwaGFiZXQgfSBmcm9tICcuL3BhdHRlcm5zL2FscGhhYmV0J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNyZWRpdENhcmROdW1iZXIgfSBmcm9tICcuL3BhdHRlcm5zL2NyZWRpdC1jYXJkLW51bWJlcidcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBkYXRlIH0gZnJvbSAnLi9wYXR0ZXJucy9kYXRlJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGRpZ2l0cyB9IGZyb20gJy4vcGF0dGVybnMvZGlnaXRzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGVtYWlsIH0gZnJvbSAnLi9wYXR0ZXJucy9lbWFpbCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXNzd29yZCB9IGZyb20gJy4vcGF0dGVybnMvcGFzc3dvcmQnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGhvbmVOdW1iZXIgfSBmcm9tICcuL3BhdHRlcm5zL3Bob25lLW51bWJlcidcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBwb3N0YWxDb2RlIH0gZnJvbSAnLi9wYXR0ZXJucy9wb3N0YWwtY29kZSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB1cmwgfSBmcm9tICcuL3BhdHRlcm5zL3VybCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB6aXBjb2RlIH0gZnJvbSAnLi9wYXR0ZXJucy96aXBjb2RlJ1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9wcmVneC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFJQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***************************************!*\
  !*** ./src/patterns/alpha-numeric.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\n/*\r\n * Pattern for alpha-numeric characters\r\n */\nexports.default = function (str, config) {\n\tvar pattern = '[a-zA-Z0-9]+',\n\t    flags = config && config.flags ? config.flags.join('') : '';\n\n\t// For a restricted match\n\tpattern = config && config.strict === true ? '^' + pattern + '$' : pattern;\n\n\treturn str.match(new RegExp(pattern, flags));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcGF0dGVybnMvYWxwaGEtbnVtZXJpYy5qcz84YTc2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFBhdHRlcm4gZm9yIGFscGhhLW51bWVyaWMgY2hhcmFjdGVyc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKHN0ciwgY29uZmlnKSA9PiB7XHJcblx0bGV0IHBhdHRlcm4gPSAnW2EtekEtWjAtOV0rJyxcclxuXHRcdGZsYWdzID0gY29uZmlnICYmIGNvbmZpZy5mbGFncyA/IGNvbmZpZy5mbGFncy5qb2luKCcnKSA6ICcnXHJcblxyXG5cdC8vIEZvciBhIHJlc3RyaWN0ZWQgbWF0Y2hcclxuXHRwYXR0ZXJuID0gY29uZmlnICYmIGNvbmZpZy5zdHJpY3QgPT09IHRydWUgPyBgXiR7cGF0dGVybn0kYCA6IHBhdHRlcm5cclxuXHJcblx0cmV0dXJuIHN0ci5tYXRjaCggbmV3IFJlZ0V4cChwYXR0ZXJuLCBmbGFncykgKVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcGF0dGVybnMvYWxwaGEtbnVtZXJpYy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7OztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!**********************************!*\
  !*** ./src/patterns/alphabet.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\n/*\r\n * Pattern for alphabetic characters\r\n */\nexports.default = function (str, config) {\n\tvar pattern = '[a-zA-Z]+',\n\t    flags = config && config.flags ? config.flags.join('') : '';\n\n\t// For a restricted match\n\tpattern = config && config.strict === true ? '^' + pattern + '$' : pattern;\n\n\treturn str.match(new RegExp(pattern, flags));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcGF0dGVybnMvYWxwaGFiZXQuanM/YWExMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBQYXR0ZXJuIGZvciBhbHBoYWJldGljIGNoYXJhY3RlcnNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IChzdHIsIGNvbmZpZykgPT4ge1xyXG5cdGxldCBwYXR0ZXJuID0gJ1thLXpBLVpdKycsXHJcblx0XHRmbGFncyA9IGNvbmZpZyAmJiBjb25maWcuZmxhZ3MgPyBjb25maWcuZmxhZ3Muam9pbignJykgOiAnJ1xyXG5cclxuXHQvLyBGb3IgYSByZXN0cmljdGVkIG1hdGNoXHJcblx0cGF0dGVybiA9IGNvbmZpZyAmJiBjb25maWcuc3RyaWN0ID09PSB0cnVlID8gYF4ke3BhdHRlcm59JGAgOiBwYXR0ZXJuXHJcblxyXG5cdHJldHVybiBzdHIubWF0Y2goIG5ldyBSZWdFeHAocGF0dGVybiwgZmxhZ3MpIClcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3BhdHRlcm5zL2FscGhhYmV0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!********************************************!*\
  !*** ./src/patterns/credit-card-number.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n/*\r\n * Pattern to match credit card numbers\r\n *\r\n * Supports all major credit cards:\r\n * \t\t- American Express (Amex)\r\n * \t\t- Discover\r\n * \t\t- Mastercard\r\n * \t\t- Visa\r\n */\nexports.default = function (str, config) {\n  var pattern = '(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6011[0-9]{12}|3(?:0[0-5]|[68][0-9])[0-9]{11}|3[47][0-9]{13})',\n      flags = config && config.flags ? config.flags.join('') : '';\n\n  // For a restricted match\n  pattern = config && config.strict === true ? '^' + pattern + '$' : pattern;\n\n  return str.match(new RegExp(pattern, flags));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcGF0dGVybnMvY3JlZGl0LWNhcmQtbnVtYmVyLmpzPzAzYjEiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogUGF0dGVybiB0byBtYXRjaCBjcmVkaXQgY2FyZCBudW1iZXJzXHJcbiAqXHJcbiAqIFN1cHBvcnRzIGFsbCBtYWpvciBjcmVkaXQgY2FyZHM6XHJcbiAqIFx0XHQtIEFtZXJpY2FuIEV4cHJlc3MgKEFtZXgpXHJcbiAqIFx0XHQtIERpc2NvdmVyXHJcbiAqIFx0XHQtIE1hc3RlcmNhcmRcclxuICogXHRcdC0gVmlzYVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKHN0ciwgY29uZmlnKSA9PiB7XHJcblx0bGV0IHBhdHRlcm4gPSAnKD86NFswLTldezEyfSg/OlswLTldezN9KT98NVsxLTVdWzAtOV17MTR9fDYwMTFbMC05XXsxMn18Myg/OjBbMC01XXxbNjhdWzAtOV0pWzAtOV17MTF9fDNbNDddWzAtOV17MTN9KScsXHJcblx0XHRmbGFncyA9IGNvbmZpZyAmJiBjb25maWcuZmxhZ3MgPyBjb25maWcuZmxhZ3Muam9pbignJykgOiAnJ1xyXG5cclxuXHQvLyBGb3IgYSByZXN0cmljdGVkIG1hdGNoXHJcblx0cGF0dGVybiA9IGNvbmZpZyAmJiBjb25maWcuc3RyaWN0ID09PSB0cnVlID8gYF4ke3BhdHRlcm59JGAgOiBwYXR0ZXJuXHJcblxyXG5cdHJldHVybiBzdHIubWF0Y2goIG5ldyBSZWdFeHAocGF0dGVybiwgZmxhZ3MpIClcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3BhdHRlcm5zL2NyZWRpdC1jYXJkLW51bWJlci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!******************************!*\
  !*** ./src/patterns/date.js ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n/*\r\n * Pattern for Date (MM/DD/YYYY)\r\n *\r\n * Optional separators are spaces, hyphens, forward slashes,\r\n * and periods. The year is limited between 1900 and 2099.\r\n */\nexports.default = function (str, config) {\n  var pattern = '(0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2}',\n      flags = config && config.flags ? config.flags.join('') : '';\n\n  // For a restricted match\n  pattern = config && config.strict === true ? '^' + pattern + '$' : pattern;\n\n  return str.match(new RegExp(pattern, flags));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcGF0dGVybnMvZGF0ZS5qcz85Njk4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFBhdHRlcm4gZm9yIERhdGUgKE1NL0REL1lZWVkpXHJcbiAqXHJcbiAqIE9wdGlvbmFsIHNlcGFyYXRvcnMgYXJlIHNwYWNlcywgaHlwaGVucywgZm9yd2FyZCBzbGFzaGVzLFxyXG4gKiBhbmQgcGVyaW9kcy4gVGhlIHllYXIgaXMgbGltaXRlZCBiZXR3ZWVuIDE5MDAgYW5kIDIwOTkuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoc3RyLCBjb25maWcpID0+IHtcclxuXHRsZXQgcGF0dGVybiA9ICcoMD9bMS05XXwxWzAxMl0pWy0gLy5dKDA/WzEtOV18WzEyXVswLTldfDNbMDFdKVstIC8uXSgxOXwyMCk/WzAtOV17Mn0nLFxyXG5cdFx0ZmxhZ3MgPSBjb25maWcgJiYgY29uZmlnLmZsYWdzID8gY29uZmlnLmZsYWdzLmpvaW4oJycpIDogJydcclxuXHJcblx0Ly8gRm9yIGEgcmVzdHJpY3RlZCBtYXRjaFxyXG5cdHBhdHRlcm4gPSBjb25maWcgJiYgY29uZmlnLnN0cmljdCA9PT0gdHJ1ZSA/IGBeJHtwYXR0ZXJufSRgIDogcGF0dGVyblxyXG5cclxuXHRyZXR1cm4gc3RyLm1hdGNoKCBuZXcgUmVnRXhwKHBhdHRlcm4sIGZsYWdzKSApXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9wYXR0ZXJucy9kYXRlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!********************************!*\
  !*** ./src/patterns/digits.js ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\n/*\r\n * Pattern for digits (whole numbers)\r\n */\nexports.default = function (str, config) {\n\tvar pattern = '[0-9]+',\n\t    flags = config && config.flags ? config.flags.join('') : '';\n\n\t// For a restricted match\n\tpattern = config && config.strict === true ? '^' + pattern + '$' : pattern;\n\n\treturn str.match(new RegExp(pattern, flags));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcGF0dGVybnMvZGlnaXRzLmpzP2I5NjQiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogUGF0dGVybiBmb3IgZGlnaXRzICh3aG9sZSBudW1iZXJzKVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKHN0ciwgY29uZmlnKSA9PiB7XHJcblx0bGV0IHBhdHRlcm4gPSAnWzAtOV0rJyxcclxuXHRcdGZsYWdzID0gY29uZmlnICYmIGNvbmZpZy5mbGFncyA/IGNvbmZpZy5mbGFncy5qb2luKCcnKSA6ICcnXHJcblxyXG5cdC8vIEZvciBhIHJlc3RyaWN0ZWQgbWF0Y2hcclxuXHRwYXR0ZXJuID0gY29uZmlnICYmIGNvbmZpZy5zdHJpY3QgPT09IHRydWUgPyBgXiR7cGF0dGVybn0kYCA6IHBhdHRlcm5cclxuXHJcblx0cmV0dXJuIHN0ci5tYXRjaCggbmV3IFJlZ0V4cChwYXR0ZXJuLCBmbGFncykgKVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcGF0dGVybnMvZGlnaXRzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*******************************!*\
  !*** ./src/patterns/email.js ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n/*\r\n * Pattern for emails\r\n *\r\n * This email regex is not fully RFC5322-compliant, but\r\n * it will validate most common email address formats correctly.\r\n */\nexports.default = function (str, config) {\n  var pattern = '[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}',\n      flags = config && config.flags ? config.flags.join('') : '';\n\n  // For a restricted match\n  pattern = config && config.strict === true ? '^' + pattern + '$' : pattern;\n\n  return str.match(new RegExp(pattern, flags));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcGF0dGVybnMvZW1haWwuanM/ZTlmNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBQYXR0ZXJuIGZvciBlbWFpbHNcclxuICpcclxuICogVGhpcyBlbWFpbCByZWdleCBpcyBub3QgZnVsbHkgUkZDNTMyMi1jb21wbGlhbnQsIGJ1dFxyXG4gKiBpdCB3aWxsIHZhbGlkYXRlIG1vc3QgY29tbW9uIGVtYWlsIGFkZHJlc3MgZm9ybWF0cyBjb3JyZWN0bHkuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoc3RyLCBjb25maWcpID0+IHtcclxuXHRsZXQgcGF0dGVybiA9ICdbYS16QS1aMC05Ll8lLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWl17Miw0fScsXHJcblx0XHRmbGFncyA9IGNvbmZpZyAmJiBjb25maWcuZmxhZ3MgPyBjb25maWcuZmxhZ3Muam9pbignJykgOiAnJ1xyXG5cclxuXHQvLyBGb3IgYSByZXN0cmljdGVkIG1hdGNoXHJcblx0cGF0dGVybiA9IGNvbmZpZyAmJiBjb25maWcuc3RyaWN0ID09PSB0cnVlID8gYF4ke3BhdHRlcm59JGAgOiBwYXR0ZXJuXHJcblxyXG5cdHJldHVybiBzdHIubWF0Y2goIG5ldyBSZWdFeHAocGF0dGVybiwgZmxhZ3MpIClcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3BhdHRlcm5zL2VtYWlsLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!**********************************!*\
  !*** ./src/patterns/password.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n/*\r\n * Pattern for password\r\n *\r\n * Test for a strong password with this regex. The password\r\n * must contain one lowercase letter, one uppercase letter,\r\n * one number, and be at least 6 characters long.\r\n */\nexports.default = function (str, config) {\n  var pattern = '(?=^.{6,}$)((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.*',\n      flags = config && config.flags ? config.flags.join('') : '';\n\n  // For a restricted match\n  pattern = config && config.strict === true ? '^' + pattern + '$' : pattern;\n\n  return str.match(new RegExp(pattern, flags));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcGF0dGVybnMvcGFzc3dvcmQuanM/M2U3MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBQYXR0ZXJuIGZvciBwYXNzd29yZFxyXG4gKlxyXG4gKiBUZXN0IGZvciBhIHN0cm9uZyBwYXNzd29yZCB3aXRoIHRoaXMgcmVnZXguIFRoZSBwYXNzd29yZFxyXG4gKiBtdXN0IGNvbnRhaW4gb25lIGxvd2VyY2FzZSBsZXR0ZXIsIG9uZSB1cHBlcmNhc2UgbGV0dGVyLFxyXG4gKiBvbmUgbnVtYmVyLCBhbmQgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoc3RyLCBjb25maWcpID0+IHtcclxuXHRsZXQgcGF0dGVybiA9ICcoPz1eLns2LH0kKSgoPz0uKltBLVphLXowLTldKSg/PS4qW0EtWl0pKD89LipbYS16XSkpXi4qJyxcclxuXHRcdGZsYWdzID0gY29uZmlnICYmIGNvbmZpZy5mbGFncyA/IGNvbmZpZy5mbGFncy5qb2luKCcnKSA6ICcnXHJcblxyXG5cdC8vIEZvciBhIHJlc3RyaWN0ZWQgbWF0Y2hcclxuXHRwYXR0ZXJuID0gY29uZmlnICYmIGNvbmZpZy5zdHJpY3QgPT09IHRydWUgPyBgXiR7cGF0dGVybn0kYCA6IHBhdHRlcm5cclxuXHJcblx0cmV0dXJuIHN0ci5tYXRjaCggbmV3IFJlZ0V4cChwYXR0ZXJuLCBmbGFncykgKVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcGF0dGVybnMvcGFzc3dvcmQuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7O0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!**************************************!*\
  !*** ./src/patterns/phone-number.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n/*\r\n * Pattern for (North American) phone numbers\r\n *\r\n * This regex will validate a 10-digit North American\r\n * telephone number. Separators are not required, but\r\n * can include spaces, hyphens, or periods.\r\n * Parentheses around the area code are also optional.\r\n */\nexports.default = function (str, config) {\n  var pattern = '(([0-9]{1})*[- .(]*([0-9]{3})[- .)]*[0-9]{3}[- .]*[0-9]{4})+',\n      flags = config && config.flags ? config.flags.join('') : '';\n\n  // For a restricted match\n  pattern = config && config.strict === true ? '^' + pattern + '$' : pattern;\n\n  return str.match(new RegExp(pattern, flags));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcGF0dGVybnMvcGhvbmUtbnVtYmVyLmpzP2M0ZDQiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogUGF0dGVybiBmb3IgKE5vcnRoIEFtZXJpY2FuKSBwaG9uZSBudW1iZXJzXHJcbiAqXHJcbiAqIFRoaXMgcmVnZXggd2lsbCB2YWxpZGF0ZSBhIDEwLWRpZ2l0IE5vcnRoIEFtZXJpY2FuXHJcbiAqIHRlbGVwaG9uZSBudW1iZXIuIFNlcGFyYXRvcnMgYXJlIG5vdCByZXF1aXJlZCwgYnV0XHJcbiAqIGNhbiBpbmNsdWRlIHNwYWNlcywgaHlwaGVucywgb3IgcGVyaW9kcy5cclxuICogUGFyZW50aGVzZXMgYXJvdW5kIHRoZSBhcmVhIGNvZGUgYXJlIGFsc28gb3B0aW9uYWwuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoc3RyLCBjb25maWcpID0+IHtcclxuXHRsZXQgcGF0dGVybiA9ICcoKFswLTldezF9KSpbLSAuKF0qKFswLTldezN9KVstIC4pXSpbMC05XXszfVstIC5dKlswLTldezR9KSsnLFxyXG5cdFx0ZmxhZ3MgPSBjb25maWcgJiYgY29uZmlnLmZsYWdzID8gY29uZmlnLmZsYWdzLmpvaW4oJycpIDogJydcclxuXHJcblx0Ly8gRm9yIGEgcmVzdHJpY3RlZCBtYXRjaFxyXG5cdHBhdHRlcm4gPSBjb25maWcgJiYgY29uZmlnLnN0cmljdCA9PT0gdHJ1ZSA/IGBeJHtwYXR0ZXJufSRgIDogcGF0dGVyblxyXG5cclxuXHRyZXR1cm4gc3RyLm1hdGNoKCBuZXcgUmVnRXhwKHBhdHRlcm4sIGZsYWdzKSApXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9wYXR0ZXJucy9waG9uZS1udW1iZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7OztBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!*************************************!*\
  !*** ./src/patterns/postal-code.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\n/*\r\n * Pattern for postal codes\r\n *\r\n * Currently only supports Canadian postal codes\r\n */\nexports.default = function (str, config) {\n\tvar pattern = '[ABCEGHJKLMNPRSTVXY][0-9][A-Z] [0-9][A-Z][0-9]',\n\t    flags = config && config.flags ? config.flags.join('') : '';\n\n\t// For a restricted match\n\tpattern = config && config.strict === true ? '^' + pattern + '$' : pattern;\n\n\treturn str.match(new RegExp(pattern, flags));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL3Bvc3RhbC1jb2RlLmpzPzNiZTgiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogUGF0dGVybiBmb3IgcG9zdGFsIGNvZGVzXHJcbiAqXHJcbiAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIENhbmFkaWFuIHBvc3RhbCBjb2Rlc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKHN0ciwgY29uZmlnKSA9PiB7XHJcblx0bGV0IHBhdHRlcm4gPSAnW0FCQ0VHSEpLTE1OUFJTVFZYWV1bMC05XVtBLVpdIFswLTldW0EtWl1bMC05XScsXHJcblx0XHRmbGFncyA9IGNvbmZpZyAmJiBjb25maWcuZmxhZ3MgPyBjb25maWcuZmxhZ3Muam9pbignJykgOiAnJ1xyXG5cclxuXHQvLyBGb3IgYSByZXN0cmljdGVkIG1hdGNoXHJcblx0cGF0dGVybiA9IGNvbmZpZyAmJiBjb25maWcuc3RyaWN0ID09PSB0cnVlID8gYF4ke3BhdHRlcm59JGAgOiBwYXR0ZXJuXHJcblxyXG5cdHJldHVybiBzdHIubWF0Y2goIG5ldyBSZWdFeHAocGF0dGVybiwgZmxhZ3MpIClcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3BhdHRlcm5zL3Bvc3RhbC1jb2RlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!*****************************!*\
  !*** ./src/patterns/url.js ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\n/*\r\n * Pattern for URLs\r\n *\r\n * This URL regex will validate most common URL formats correctly.\r\n */\nexports.default = function (str, config) {\n\tvar pattern = '((http|https|ftp)://)?([[a-zA-Z0-9]\\-\\.])+(\\.)([[a-zA-Z0-9]]){2,4}([[a-zA-Z0-9]/+=%&_\\.~?\\-]*)',\n\t    flags = config && config.flags ? config.flags.join('') : '';\n\n\t// For a restricted match\n\tpattern = config && config.strict === true ? '^' + pattern + '$' : pattern;\n\n\treturn str.match(new RegExp(pattern, flags));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL3VybC5qcz9lYjA1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFBhdHRlcm4gZm9yIFVSTHNcclxuICpcclxuICogVGhpcyBVUkwgcmVnZXggd2lsbCB2YWxpZGF0ZSBtb3N0IGNvbW1vbiBVUkwgZm9ybWF0cyBjb3JyZWN0bHkuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoc3RyLCBjb25maWcpID0+IHtcclxuXHRsZXQgcGF0dGVybiA9ICcoKGh0dHB8aHR0cHN8ZnRwKTovLyk/KFtbYS16QS1aMC05XVxcLVxcLl0pKyhcXC4pKFtbYS16QS1aMC05XV0pezIsNH0oW1thLXpBLVowLTldLys9JSZfXFwufj9cXC1dKiknLFxyXG5cdFx0ZmxhZ3MgPSBjb25maWcgJiYgY29uZmlnLmZsYWdzID8gY29uZmlnLmZsYWdzLmpvaW4oJycpIDogJydcclxuXHJcblx0Ly8gRm9yIGEgcmVzdHJpY3RlZCBtYXRjaFxyXG5cdHBhdHRlcm4gPSBjb25maWcgJiYgY29uZmlnLnN0cmljdCA9PT0gdHJ1ZSA/IGBeJHtwYXR0ZXJufSRgIDogcGF0dGVyblxyXG5cclxuXHRyZXR1cm4gc3RyLm1hdGNoKCBuZXcgUmVnRXhwKHBhdHRlcm4sIGZsYWdzKSApXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9wYXR0ZXJucy91cmwuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7OztBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!*********************************!*\
  !*** ./src/patterns/zipcode.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n/*\r\n * Pattern for ZIP Codes\r\n *\r\n * Currently only supports US ZIP Codes, with\r\n * an optional 4 number ZIP code extension.\r\n */\nexports.default = function (str, config) {\n  var pattern = '[0-9]{5}(?:-[0-9]{4})?',\n      flags = config && config.flags ? config.flags.join('') : '';\n\n  // For a restricted match\n  pattern = config && config.strict === true ? '^' + pattern + '$' : pattern;\n\n  return str.match(new RegExp(pattern, flags));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhdHRlcm5zL3ppcGNvZGUuanM/NTE2MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBQYXR0ZXJuIGZvciBaSVAgQ29kZXNcclxuICpcclxuICogQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgVVMgWklQIENvZGVzLCB3aXRoXHJcbiAqIGFuIG9wdGlvbmFsIDQgbnVtYmVyIFpJUCBjb2RlIGV4dGVuc2lvbi5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IChzdHIsIGNvbmZpZykgPT4ge1xyXG5cdGxldCBwYXR0ZXJuID0gJ1swLTldezV9KD86LVswLTldezR9KT8nLFxyXG5cdFx0ZmxhZ3MgPSBjb25maWcgJiYgY29uZmlnLmZsYWdzID8gY29uZmlnLmZsYWdzLmpvaW4oJycpIDogJydcclxuXHJcblx0Ly8gRm9yIGEgcmVzdHJpY3RlZCBtYXRjaFxyXG5cdHBhdHRlcm4gPSBjb25maWcgJiYgY29uZmlnLnN0cmljdCA9PT0gdHJ1ZSA/IGBeJHtwYXR0ZXJufSRgIDogcGF0dGVyblxyXG5cclxuXHRyZXR1cm4gc3RyLm1hdGNoKCBuZXcgUmVnRXhwKHBhdHRlcm4sIGZsYWdzKSApXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9wYXR0ZXJucy96aXBjb2RlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ })
/******/ ]);