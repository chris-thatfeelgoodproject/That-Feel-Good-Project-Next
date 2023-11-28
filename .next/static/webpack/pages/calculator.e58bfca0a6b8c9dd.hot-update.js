"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/calculator",{

/***/ "./pages/calculator.js":
/*!*****************************!*\
  !*** ./pages/calculator.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var dangerous_html_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dangerous-html/react */ \"./node_modules/dangerous-html/dist/react/lib.mjs\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar ONE_BILLION = 1000000000;\nvar Calculator = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), currentIncome = ref[0], setCurrentIncome = ref[1];\n    var onChangeIncome = function(event) {\n        setCurrentIncome(event.target.value);\n    };\n    var formattedIncome = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        return new Intl.NumberFormat(\"en-US\", {\n            style: \"currency\",\n            currency: \"USD\"\n        }).format(currentIncome);\n    }, [\n        currentIncome\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-3a21fe971182dbe9\" + \" \" + \"calculator-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                className: \"jsx-3a21fe971182dbe9\",\n                                children: \"Calculator - Tax Savings Feel Good\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chris/projects/That-Feel-Good-Project-Next/pages/calculator.js\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                property: \"og:title\",\n                                content: \"Calculator - Tax Savings Feel Good\",\n                                className: \"jsx-3a21fe971182dbe9\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chris/projects/That-Feel-Good-Project-Next/pages/calculator.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chris/projects/That-Feel-Good-Project-Next/pages/calculator.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        rootClassName: \"header-root-class-name3\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chris/projects/That-Feel-Good-Project-Next/pages/calculator.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-3a21fe971182dbe9\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-3a21fe971182dbe9\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        className: \"jsx-3a21fe971182dbe9\",\n                                        children: \"Gross Income\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chris/projects/That-Feel-Good-Project-Next/pages/calculator.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                        className: \"jsx-3a21fe971182dbe9\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chris/projects/That-Feel-Good-Project-Next/pages/calculator.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"jsx-3a21fe971182dbe9\",\n                                        children: formattedIncome\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chris/projects/That-Feel-Good-Project-Next/pages/calculator.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                        className: \"jsx-3a21fe971182dbe9\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chris/projects/That-Feel-Good-Project-Next/pages/calculator.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        className: \"jsx-3a21fe971182dbe9\",\n                                        children: [\n                                            \"Net Income \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                className: \"jsx-3a21fe971182dbe9\",\n                                                children: \"after deducting average taxes\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/chris/projects/That-Feel-Good-Project-Next/pages/calculator.js\",\n                                                lineNumber: 42,\n                                                columnNumber: 27\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/chris/projects/That-Feel-Good-Project-Next/pages/calculator.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                        className: \"jsx-3a21fe971182dbe9\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chris/projects/That-Feel-Good-Project-Next/pages/calculator.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"jsx-3a21fe971182dbe9\",\n                                        children: formattedIncome\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chris/projects/That-Feel-Good-Project-Next/pages/calculator.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                        className: \"jsx-3a21fe971182dbe9\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chris/projects/That-Feel-Good-Project-Next/pages/calculator.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        className: \"jsx-3a21fe971182dbe9\",\n                                        children: [\n                                            \"Net Income \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                className: \"jsx-3a21fe971182dbe9\",\n                                                children: \"under act 60\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/chris/projects/That-Feel-Good-Project-Next/pages/calculator.js\",\n                                                lineNumber: 46,\n                                                columnNumber: 27\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/chris/projects/That-Feel-Good-Project-Next/pages/calculator.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                        className: \"jsx-3a21fe971182dbe9\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chris/projects/That-Feel-Good-Project-Next/pages/calculator.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"jsx-3a21fe971182dbe9\",\n                                        children: formattedIncome\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chris/projects/That-Feel-Good-Project-Next/pages/calculator.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                        className: \"jsx-3a21fe971182dbe9\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chris/projects/That-Feel-Good-Project-Next/pages/calculator.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chris/projects/That-Feel-Good-Project-Next/pages/calculator.js\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"range\",\n                                min: 0,\n                                max: ONE_BILLION,\n                                value: currentIncome,\n                                onChange: onChangeIncome,\n                                class: \"slider\",\n                                className: \"jsx-3a21fe971182dbe9\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chris/projects/That-Feel-Good-Project-Next/pages/calculator.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chris/projects/That-Feel-Good-Project-Next/pages/calculator.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        rootClassName: \"footer-root-class-name1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chris/projects/That-Feel-Good-Project-Next/pages/calculator.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chris/projects/That-Feel-Good-Project-Next/pages/calculator.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"3a21fe971182dbe9\",\n                children: \".calculator-container.jsx-3a21fe971182dbe9{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;overflow:auto;min-height:100vh;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;background-image:-webkit-linear-gradient(315deg,rgb(238,85,144)46%,rgb(52,251,237)97%);background-image:-moz-linear-gradient(315deg,rgb(238,85,144)46%,rgb(52,251,237)97%);background-image:-o-linear-gradient(315deg,rgb(238,85,144)46%,rgb(52,251,237)97%);background-image:linear-gradient(135deg,rgb(238,85,144)46%,rgb(52,251,237)97%)}.calculator-container1.jsx-3a21fe971182dbe9{-webkit-box-flex:0;-webkit-flex:0 0 auto;-moz-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:100%;height:100px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.calculator-text.jsx-3a21fe971182dbe9{color:var(--dl-color-act60directory-c10)}.calculator-container2.jsx-3a21fe971182dbe9{-webkit-box-flex:0;-webkit-flex:0 0 auto;-moz-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto;height:auto;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;margin-bottom:var(--dl-space-space-unit);-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.calculator-text04.jsx-3a21fe971182dbe9{color:var(--dl-color-act60directory-c10)}.calculator-text07.jsx-3a21fe971182dbe9{color:var(--dl-color-act60directory-c10);margin-left:var(--dl-space-space-fiveunits)}.calculator-container4.jsx-3a21fe971182dbe9{display:contents}\"\n            }, void 0, false, void 0, _this)\n        ]\n    }, void 0, true);\n};\n_s(Calculator, \"BWTd6bBO/kvmwQIKCo4/ZhsUUPs=\");\n_c = Calculator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);\nvar _c;\n$RefreshReg$(_c, \"Calculator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYWxjdWxhdG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQWdEO0FBQ3BCO0FBRWE7QUFFQTtBQUNBO0FBRXpDLElBQU1PLFdBQVcsR0FBRyxVQUFVO0FBRTlCLElBQU1DLFVBQVUsR0FBRyxTQUFDQyxLQUFLLEVBQUs7O0lBQzVCLElBQTBDUCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQTlDUSxhQUFhLEdBQXNCUixHQUFXLEdBQWpDLEVBQUVTLGdCQUFnQixHQUFJVCxHQUFXLEdBQWY7SUFFdEMsSUFBTVUsY0FBYyxHQUFHLFNBQUNDLEtBQUssRUFBSztRQUNoQ0YsZ0JBQWdCLENBQUNFLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsSUFBTUMsZUFBZSxHQUFHZiw4Q0FBTyxDQUFDLFdBQU07UUFDcEMsT0FBTyxJQUFJZ0IsSUFBSSxDQUFDQyxZQUFZLENBQUMsT0FBTyxFQUFFO1lBQ3BDQyxLQUFLLEVBQUUsVUFBVTtZQUNqQkMsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQyxDQUFDQyxNQUFNLENBQUNYLGFBQWEsQ0FBQyxDQUFDO0lBQzNCLENBQUMsRUFBRTtRQUFDQSxhQUFhO0tBQUMsQ0FBQztJQUVuQixxQkFDRTs7MEJBQ0UsOERBQUNZLEtBQUc7MERBQVcsc0JBQXNCOztrQ0FDbkMsOERBQUNuQixrREFBSTs7MENBQ0gsOERBQUNvQixPQUFLOzswQ0FBQyxvQ0FBa0M7Ozs7O3FDQUFROzBDQUNqRCw4REFBQ0MsTUFBSTtnQ0FDSEMsUUFBUSxFQUFDLFVBQVU7Z0NBQ25CQyxPQUFPLEVBQUMsb0NBQW9DOzs7Ozs7cUNBQzVDOzs7Ozs7NkJBQ0c7a0NBQ1AsOERBQUNyQiwwREFBTTt3QkFBQ3NCLGFBQWEsRUFBQyx5QkFBeUI7Ozs7OzZCQUFVO2tDQUN6RCw4REFBQ0wsS0FBRzs7OzBDQUNGLDhEQUFDQSxLQUFHOzs7a0RBQ0YsOERBQUNNLEdBQUM7O2tEQUFDLGNBQVk7Ozs7OzZDQUFJO2tEQUNuQiw4REFBQ0MsSUFBRTs7Ozs7OzZDQUFHO2tEQUNOLDhEQUFDQyxNQUFJOztrREFBRWQsZUFBZTs7Ozs7NkNBQVE7a0RBQzlCLDhEQUFDYSxJQUFFOzs7Ozs7NkNBQU07a0RBQ1QsOERBQUNELEdBQUM7Ozs0Q0FBQyxhQUFXOzBEQUFBLDhEQUFDRyxHQUFDOzswREFBQywrQkFBNkI7Ozs7O3FEQUFJOzs7Ozs7NkNBQUk7a0RBQ3RELDhEQUFDRixJQUFFOzs7Ozs7NkNBQUc7a0RBQ04sOERBQUNDLE1BQUk7O2tEQUFFZCxlQUFlOzs7Ozs2Q0FBUTtrREFDOUIsOERBQUNhLElBQUU7Ozs7Ozs2Q0FBTTtrREFDVCw4REFBQ0QsR0FBQzs7OzRDQUFDLGFBQVc7MERBQUEsOERBQUNHLEdBQUM7OzBEQUFDLGNBQVk7Ozs7O3FEQUFJOzs7Ozs7NkNBQUk7a0RBQ3JDLDhEQUFDRixJQUFFOzs7Ozs7NkNBQUc7a0RBQ04sOERBQUNDLE1BQUk7O2tEQUFFZCxlQUFlOzs7Ozs2Q0FBUTtrREFDOUIsOERBQUNhLElBQUU7Ozs7Ozs2Q0FBTTs7Ozs7O3FDQUNMOzBDQUNOLDhEQUFDRyxPQUFLO2dDQUFDQyxJQUFJLEVBQUMsT0FBTztnQ0FBQ0MsR0FBRyxFQUFFLENBQUM7Z0NBQUVDLEdBQUcsRUFBRTVCLFdBQVc7Z0NBQUVRLEtBQUssRUFBRUwsYUFBYTtnQ0FBRTBCLFFBQVEsRUFBRXhCLGNBQWM7Z0NBQUV5QixLQUFLLEVBQUMsUUFBUTs7Ozs7O3FDQUFHOzs7Ozs7NkJBQzNHO2tDQUNOLDhEQUFDL0IsMERBQU07d0JBQUNxQixhQUFhLEVBQUMseUJBQXlCOzs7Ozs2QkFBVTs7Ozs7O3FCQUNyRDs7Ozs7O29CQWtETCxDQUNKO0FBQ0gsQ0FBQztHQS9GS25CLFVBQVU7QUFBVkEsS0FBQUEsVUFBVTtBQWlHaEIsK0RBQWVBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FsY3VsYXRvci5qcz9hZjM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgU2NyaXB0IGZyb20gJ2Rhbmdlcm91cy1odG1sL3JlYWN0J1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcblxuY29uc3QgT05FX0JJTExJT04gPSAxMDAwMDAwMDAwO1xuXG5jb25zdCBDYWxjdWxhdG9yID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50SW5jb21lLCBzZXRDdXJyZW50SW5jb21lXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IG9uQ2hhbmdlSW5jb21lID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0Q3VycmVudEluY29tZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0dGVkSW5jb21lID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICB9KS5mb3JtYXQoY3VycmVudEluY29tZSk7XG4gIH0sIFtjdXJyZW50SW5jb21lXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxjdWxhdG9yLWNvbnRhaW5lclwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+Q2FsY3VsYXRvciAtIFRheCBTYXZpbmdzIEZlZWwgR29vZDwvdGl0bGU+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIHByb3BlcnR5PVwib2c6dGl0bGVcIlxuICAgICAgICAgICAgY29udGVudD1cIkNhbGN1bGF0b3IgLSBUYXggU2F2aW5ncyBGZWVsIEdvb2RcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPEhlYWRlciByb290Q2xhc3NOYW1lPVwiaGVhZGVyLXJvb3QtY2xhc3MtbmFtZTNcIj48L0hlYWRlcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGI+R3Jvc3MgSW5jb21lPC9iPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8c3Bhbj57Zm9ybWF0dGVkSW5jb21lfTwvc3Bhbj5cbiAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgPGI+TmV0IEluY29tZSA8aT5hZnRlciBkZWR1Y3RpbmcgYXZlcmFnZSB0YXhlczwvaT48L2I+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxzcGFuPntmb3JtYXR0ZWRJbmNvbWV9PC9zcGFuPlxuICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICA8Yj5OZXQgSW5jb21lIDxpPnVuZGVyIGFjdCA2MDwvaT48L2I+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxzcGFuPntmb3JtYXR0ZWRJbmNvbWV9PC9zcGFuPlxuICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj17MH0gbWF4PXtPTkVfQklMTElPTn0gdmFsdWU9e2N1cnJlbnRJbmNvbWV9IG9uQ2hhbmdlPXtvbkNoYW5nZUluY29tZX0gY2xhc3M9XCJzbGlkZXJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciByb290Q2xhc3NOYW1lPVwiZm9vdGVyLXJvb3QtY2xhc3MtbmFtZTFcIj48L0Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY2FsY3VsYXRvci1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICAxMzVkZWcsXG4gICAgICAgICAgICAgIHJnYigyMzgsIDg1LCAxNDQpIDQ2JSxcbiAgICAgICAgICAgICAgcmdiKDUyLCAyNTEsIDIzNykgOTclXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FsY3VsYXRvci1jb250YWluZXIxIHtcbiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYWxjdWxhdG9yLXRleHQge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWRsLWNvbG9yLWFjdDYwZGlyZWN0b3J5LWMxMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYWxjdWxhdG9yLWNvbnRhaW5lcjIge1xuICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWRsLXNwYWNlLXNwYWNlLXVuaXQpO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYWxjdWxhdG9yLXRleHQwNCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZGwtY29sb3ItYWN0NjBkaXJlY3RvcnktYzEwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhbGN1bGF0b3ItdGV4dDA3IHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kbC1jb2xvci1hY3Q2MGRpcmVjdG9yeS1jMTApO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IHZhcigtLWRsLXNwYWNlLXNwYWNlLWZpdmV1bml0cyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYWxjdWxhdG9yLWNvbnRhaW5lcjQge1xuICAgICAgICAgICAgZGlzcGxheTogY29udGVudHM7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJIZWFkIiwiU2NyaXB0IiwiSGVhZGVyIiwiRm9vdGVyIiwiT05FX0JJTExJT04iLCJDYWxjdWxhdG9yIiwicHJvcHMiLCJjdXJyZW50SW5jb21lIiwic2V0Q3VycmVudEluY29tZSIsIm9uQ2hhbmdlSW5jb21lIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZvcm1hdHRlZEluY29tZSIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0IiwiZGl2IiwidGl0bGUiLCJtZXRhIiwicHJvcGVydHkiLCJjb250ZW50Iiwicm9vdENsYXNzTmFtZSIsImIiLCJiciIsInNwYW4iLCJpIiwiaW5wdXQiLCJ0eXBlIiwibWluIiwibWF4Iiwib25DaGFuZ2UiLCJjbGFzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/calculator.js\n"));

/***/ })

});