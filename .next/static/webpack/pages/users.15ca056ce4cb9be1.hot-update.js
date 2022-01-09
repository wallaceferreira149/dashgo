"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users",{

/***/ "./src/components/Pagination/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/Pagination/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Pagination\": function() { return /* binding */ Pagination; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _PaginationItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaginationItem */ \"./src/components/Pagination/PaginationItem.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar siblingsCount = 1; //quantas pág irmães que serão exibidas na paginação\n//Essa função retorna um array com o número das páginas dentro de um range, excluindo o número inicial. O filter retorna somente os resultados positivos do array.\nfunction generatePageArray(from, to) {\n    return _toConsumableArray(new Array(to - from)).map(function(_, index) {\n        return from + index + 1;\n    }).filter(function(page) {\n        return page > 0;\n    });\n}\nfunction Pagination(param) {\n    var totalCountOfRegisters = param.totalCountOfRegisters, _registerPerPage = param.registerPerPage, registerPerPage = _registerPerPage === void 0 ? 10 : _registerPerPage, _currentPage = param.currentPage, currentPage = _currentPage === void 0 ? 1 : _currentPage, onPageChange = param.onPageChange;\n    var lastPage = Math.floor(totalCountOfRegisters / registerPerPage); //Arredonda para cima o número de registro pela qtd de registros por pág.\n    //Páginas anteriories serão, caso a página atual seja maior que 1, um array da posição autal - 1, e as posições irmãs anteriores, até a página atual - 1.\n    var previousPage = currentPage > 1 ? generatePageArray(currentPage - 1 - siblingsCount, currentPage - 1) : [];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n        direction: [\n            'column',\n            'row'\n        ],\n        mt: \"8\",\n        spacing: \"6\",\n        justify: \"space-between\",\n        align: \"center\",\n        __source: {\n            fileName: \"/home/wallace/REACT/dashgo/src/components/Pagination/index.tsx\",\n            lineNumber: 37,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                __source: {\n                    fileName: \"/home/wallace/REACT/dashgo/src/components/Pagination/index.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", {\n                        __source: {\n                            fileName: \"/home/wallace/REACT/dashgo/src/components/Pagination/index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"0\"\n                    }),\n                    \" - \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", {\n                        __source: {\n                            fileName: \"/home/wallace/REACT/dashgo/src/components/Pagination/index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 30\n                        },\n                        __self: this,\n                        children: \"10\"\n                    }),\n                    \" de \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", {\n                        __source: {\n                            fileName: \"/home/wallace/REACT/dashgo/src/components/Pagination/index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 53\n                        },\n                        __self: this,\n                        children: \"100\"\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                direction: \"row\",\n                spacing: \"2\",\n                __source: {\n                    fileName: \"/home/wallace/REACT/dashgo/src/components/Pagination/index.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                        isCurrent: true,\n                        number: 1,\n                        __source: {\n                            fileName: \"/home/wallace/REACT/dashgo/src/components/Pagination/index.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                        number: 2,\n                        __source: {\n                            fileName: \"/home/wallace/REACT/dashgo/src/components/Pagination/index.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                        number: 3,\n                        __source: {\n                            fileName: \"/home/wallace/REACT/dashgo/src/components/Pagination/index.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                        number: 4,\n                        __source: {\n                            fileName: \"/home/wallace/REACT/dashgo/src/components/Pagination/index.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_c = Pagination;\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXFEO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNqRCxHQUFLLENBQUNHLGFBQWEsR0FBRyxDQUFDLENBQUUsQ0FBb0QsRUFBSztBQUU3RSxFQUE2SjtTQUNwSkMsaUJBQVksQ0FBQ0MsSUFBWSxFQUFFQyxFQUFVLEVBQUUsQ0FBQztJQUNwRCxNQUFNLG9CQUFLLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDRCxFQUFFLEdBQUdELElBQUksR0FDM0JHLEdBQUcsQ0FBQyxRQUFRLENBQVBDLENBQUMsRUFBRUMsS0FBSyxFQUFLLENBQUM7UUFDbEIsTUFBTSxDQUFDTCxJQUFJLEdBQUdLLEtBQUssR0FBRyxDQUFDO0lBQ3pCLENBQUMsRUFDQUMsTUFBTSxDQUFDLFFBQVEsQ0FBUEMsSUFBSTtRQUFLQSxNQUFNLENBQU5BLElBQUksR0FBRyxDQUFDOztBQUM5QixDQUFDO0FBRU0sU0FBU0MsVUFBVSxDQUFDLEtBS1QsRUFBRSxDQUFDO1FBSm5CQyxxQkFBcUIsR0FESSxLQUtULENBSmhCQSxxQkFBcUIscUJBREksS0FLVCxDQUhoQkMsZUFBZSxFQUFmQSxlQUFlLGlDQUFHLEVBQUUsb0NBRkssS0FLVCxDQUZoQkMsV0FBVyxFQUFYQSxXQUFXLDZCQUFHLENBQUMsaUJBQ2ZDLFlBQVksR0FKYSxLQUtULENBRGhCQSxZQUFZO0lBRVosR0FBSyxDQUFDQyxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDTixxQkFBcUIsR0FBR0MsZUFBZSxFQUFHLENBQXlFLEVBQUU7SUFFL0ksRUFBdUo7SUFDekosR0FBSyxDQUFDTSxZQUFZLEdBQ2hCTCxXQUFXLEdBQUcsQ0FBQyxHQUNYWixpQkFBaUIsQ0FBQ1ksV0FBVyxHQUFHLENBQUMsR0FBR2IsYUFBYSxFQUFFYSxXQUFXLEdBQUcsQ0FBQyxJQUNsRSxDQUFDLENBQUM7SUFFUixNQUFNLHVFQUNIZixtREFBSztRQUNKcUIsU0FBUyxFQUFFLENBQUM7WUFBQSxDQUFRO1lBQUUsQ0FBSztRQUFBLENBQUM7UUFDNUJDLEVBQUUsRUFBQyxDQUFHO1FBQ05DLE9BQU8sRUFBQyxDQUFHO1FBQ1hDLE9BQU8sRUFBQyxDQUFlO1FBQ3ZCQyxLQUFLLEVBQUMsQ0FBUTs7Ozs7Ozs7a0ZBRWIxQixpREFBRzs7Ozs7Ozs7eUZBQ0QyQixDQUFNOzs7Ozs7O2tDQUFDLENBQUM7O29CQUFTLENBQUc7eUZBQUNBLENBQU07Ozs7Ozs7a0NBQUMsQ0FBRTs7b0JBQVMsQ0FBSTt5RkFBQ0EsQ0FBTTs7Ozs7OztrQ0FBQyxDQUFHOzs7O2tGQUV4RDFCLG1EQUFLO2dCQUFDcUIsU0FBUyxFQUFDLENBQUs7Z0JBQUNFLE9BQU8sRUFBQyxDQUFHOzs7Ozs7Ozt5RkFDL0J0QiwyREFBYzt3QkFBQzBCLFNBQVM7d0JBQUNDLE1BQU0sRUFBRSxDQUFDOzs7Ozs7Ozt5RkFDbEMzQiwyREFBYzt3QkFBQzJCLE1BQU0sRUFBRSxDQUFDOzs7Ozs7Ozt5RkFDeEIzQiwyREFBYzt3QkFBQzJCLE1BQU0sRUFBRSxDQUFDOzs7Ozs7Ozt5RkFDeEIzQiwyREFBYzt3QkFBQzJCLE1BQU0sRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7QUFJakMsQ0FBQztLQWpDZWhCLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFnaW5hdGlvbi9pbmRleC50c3g/YzFjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgU3RhY2sgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IFBhZ2luYXRpb25JdGVtIH0gZnJvbSAnLi9QYWdpbmF0aW9uSXRlbSc7XG5cbmludGVyZmFjZSBQYWdpbmF0aW9uUHJvcHMge1xuICB0b3RhbENvdW50T2ZSZWdpc3RlcnM6IG51bWJlcjtcbiAgcmVnaXN0ZXJQZXJQYWdlPzogbnVtYmVyO1xuICBjdXJyZW50UGFnZT86IG51bWJlcjtcbiAgb25QYWdlQ2hhbmdlOiAocGFnZTogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5jb25zdCBzaWJsaW5nc0NvdW50ID0gMTsgLy9xdWFudGFzIHDDoWcgaXJtw6NlcyBxdWUgc2Vyw6NvIGV4aWJpZGFzIG5hIHBhZ2luYcOnw6NvXG5cbi8vRXNzYSBmdW7Dp8OjbyByZXRvcm5hIHVtIGFycmF5IGNvbSBvIG7Dum1lcm8gZGFzIHDDoWdpbmFzIGRlbnRybyBkZSB1bSByYW5nZSwgZXhjbHVpbmRvIG8gbsO6bWVybyBpbmljaWFsLiBPIGZpbHRlciByZXRvcm5hIHNvbWVudGUgb3MgcmVzdWx0YWRvcyBwb3NpdGl2b3MgZG8gYXJyYXkuXG5mdW5jdGlvbiBnZW5lcmF0ZVBhZ2VBcnJheShmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIpIHtcbiAgcmV0dXJuIFsuLi5uZXcgQXJyYXkodG8gLSBmcm9tKV1cbiAgICAubWFwKChfLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIGZyb20gKyBpbmRleCArIDE7XG4gICAgfSlcbiAgICAuZmlsdGVyKChwYWdlKSA9PiBwYWdlID4gMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQYWdpbmF0aW9uKHtcbiAgdG90YWxDb3VudE9mUmVnaXN0ZXJzLFxuICByZWdpc3RlclBlclBhZ2UgPSAxMCxcbiAgY3VycmVudFBhZ2UgPSAxLFxuICBvblBhZ2VDaGFuZ2UsXG59OiBQYWdpbmF0aW9uUHJvcHMpIHtcbiAgY29uc3QgbGFzdFBhZ2UgPSBNYXRoLmZsb29yKHRvdGFsQ291bnRPZlJlZ2lzdGVycyAvIHJlZ2lzdGVyUGVyUGFnZSk7IC8vQXJyZWRvbmRhIHBhcmEgY2ltYSBvIG7Dum1lcm8gZGUgcmVnaXN0cm8gcGVsYSBxdGQgZGUgcmVnaXN0cm9zIHBvciBww6FnLlxuXG4gIC8vUMOhZ2luYXMgYW50ZXJpb3JpZXMgc2Vyw6NvLCBjYXNvIGEgcMOhZ2luYSBhdHVhbCBzZWphIG1haW9yIHF1ZSAxLCB1bSBhcnJheSBkYSBwb3Npw6fDo28gYXV0YWwgLSAxLCBlIGFzIHBvc2nDp8O1ZXMgaXJtw6NzIGFudGVyaW9yZXMsIGF0w6kgYSBww6FnaW5hIGF0dWFsIC0gMS5cbiAgY29uc3QgcHJldmlvdXNQYWdlID1cbiAgICBjdXJyZW50UGFnZSA+IDFcbiAgICAgID8gZ2VuZXJhdGVQYWdlQXJyYXkoY3VycmVudFBhZ2UgLSAxIC0gc2libGluZ3NDb3VudCwgY3VycmVudFBhZ2UgLSAxKVxuICAgICAgOiBbXTtcblxuICByZXR1cm4gKFxuICAgIDxTdGFja1xuICAgICAgZGlyZWN0aW9uPXtbJ2NvbHVtbicsICdyb3cnXX1cbiAgICAgIG10PVwiOFwiXG4gICAgICBzcGFjaW5nPVwiNlwiXG4gICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgPlxuICAgICAgPEJveD5cbiAgICAgICAgPHN0cm9uZz4wPC9zdHJvbmc+IC0gPHN0cm9uZz4xMDwvc3Ryb25nPiBkZSA8c3Ryb25nPjEwMDwvc3Ryb25nPlxuICAgICAgPC9Cb3g+XG4gICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz1cIjJcIj5cbiAgICAgICAgPFBhZ2luYXRpb25JdGVtIGlzQ3VycmVudCBudW1iZXI9ezF9IC8+XG4gICAgICAgIDxQYWdpbmF0aW9uSXRlbSBudW1iZXI9ezJ9IC8+XG4gICAgICAgIDxQYWdpbmF0aW9uSXRlbSBudW1iZXI9ezN9IC8+XG4gICAgICAgIDxQYWdpbmF0aW9uSXRlbSBudW1iZXI9ezR9IC8+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvU3RhY2s+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQm94IiwiU3RhY2siLCJQYWdpbmF0aW9uSXRlbSIsInNpYmxpbmdzQ291bnQiLCJnZW5lcmF0ZVBhZ2VBcnJheSIsImZyb20iLCJ0byIsIkFycmF5IiwibWFwIiwiXyIsImluZGV4IiwiZmlsdGVyIiwicGFnZSIsIlBhZ2luYXRpb24iLCJ0b3RhbENvdW50T2ZSZWdpc3RlcnMiLCJyZWdpc3RlclBlclBhZ2UiLCJjdXJyZW50UGFnZSIsIm9uUGFnZUNoYW5nZSIsImxhc3RQYWdlIiwiTWF0aCIsImZsb29yIiwicHJldmlvdXNQYWdlIiwiZGlyZWN0aW9uIiwibXQiLCJzcGFjaW5nIiwianVzdGlmeSIsImFsaWduIiwic3Ryb25nIiwiaXNDdXJyZW50IiwibnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Pagination/index.tsx\n");

/***/ })

});