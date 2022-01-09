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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Pagination\": function() { return /* binding */ Pagination; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _PaginationItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaginationItem */ \"./src/components/Pagination/PaginationItem.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar siblingsCount = 1; //quantas pág irmães que serão exibidas na paginação\n//Essa função retorna um array com o número das páginas dentro de um range, excluindo o número inicial. O filter retorna somente os resultados positivos do array.\nfunction generatePageArray(from, to) {\n    return _toConsumableArray(new Array(to - from)).map(function(_, index) {\n        return from + index + 1;\n    }).filter(function(page) {\n        return page > 0;\n    });\n}\nfunction Pagination(param) {\n    var totalCountOfRegisters = param.totalCountOfRegisters, _registerPerPage = param.registerPerPage, registerPerPage = _registerPerPage === void 0 ? 10 : _registerPerPage, _currentPage = param.currentPage, currentPage = _currentPage === void 0 ? 1 : _currentPage, onPageChange = param.onPageChange;\n    var _this = this;\n    var lastPage = Math.floor(totalCountOfRegisters / registerPerPage); //Arredonda para cima o número de registro pela qtd de registros por pág.\n    //Páginas anteriories serão, caso a página atual seja maior que 1, um array da posição autal - 1, e as posições irmãs anteriores, até a página atual - 1. A lógica das páginas posteriores é a mesma para frente da página atual, inclusive.\n    var previousPages = currentPage > 1 ? generatePageArray(currentPage - 1 - siblingsCount, currentPage - 1) : [];\n    var nextPages = currentPage < lastPage ? generatePageArray(currentPage, Math.min(currentPage + siblingsCount, lastPage)) : [];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n        direction: [\n            'column',\n            'row'\n        ],\n        mt: \"8\",\n        spacing: \"6\",\n        justify: \"space-between\",\n        align: \"center\",\n        __source: {\n            fileName: \"/home/wallace/REACT/dashgo/src/components/Pagination/index.tsx\",\n            lineNumber: 45,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                __source: {\n                    fileName: \"/home/wallace/REACT/dashgo/src/components/Pagination/index.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", {\n                        __source: {\n                            fileName: \"/home/wallace/REACT/dashgo/src/components/Pagination/index.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"0\"\n                    }),\n                    \" - \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", {\n                        __source: {\n                            fileName: \"/home/wallace/REACT/dashgo/src/components/Pagination/index.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 30\n                        },\n                        __self: this,\n                        children: \"10\"\n                    }),\n                    \" de \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", {\n                        __source: {\n                            fileName: \"/home/wallace/REACT/dashgo/src/components/Pagination/index.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 53\n                        },\n                        __self: this,\n                        children: \"100\"\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                direction: \"row\",\n                spacing: \"2\",\n                __source: {\n                    fileName: \"/home/wallace/REACT/dashgo/src/components/Pagination/index.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    currentPage > 1 + siblingsCount && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                                number: 1,\n                                __source: {\n                                    fileName: \"/home/wallace/REACT/dashgo/src/components/Pagination/index.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                },\n                                __self: this\n                            }),\n                            currentPage > 2 + siblingsCount && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                color: \"gray.300\",\n                                w: \"8\",\n                                __source: {\n                                    fileName: \"/home/wallace/REACT/dashgo/src/components/Pagination/index.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                },\n                                __self: this,\n                                children: \"...\"\n                            })\n                        ]\n                    }),\n                    previousPages.length > 0 && previousPages.map(function(page) {\n                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                            number: page,\n                            __source: {\n                                fileName: \"/home/wallace/REACT/dashgo/src/components/Pagination/index.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 20\n                            },\n                            __self: _this\n                        }, page));\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                        isCurrent: true,\n                        number: currentPage,\n                        __source: {\n                            fileName: \"/home/wallace/REACT/dashgo/src/components/Pagination/index.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    nextPages.length > 0 && nextPages.map(function(page) {\n                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                            number: page,\n                            __source: {\n                                fileName: \"/home/wallace/REACT/dashgo/src/components/Pagination/index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 20\n                            },\n                            __self: _this\n                        }, page));\n                    }),\n                    currentPage + siblingsCount < lastPage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            currentPage + siblingsCount + 1 < lastPage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                __source: {\n                                    fileName: \"/home/wallace/REACT/dashgo/src/components/Pagination/index.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 60\n                                },\n                                __self: this,\n                                children: \"...\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                                number: lastPage,\n                                __source: {\n                                    fileName: \"/home/wallace/REACT/dashgo/src/components/Pagination/index.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                },\n                                __self: this\n                            })\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_c = Pagination;\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNqRCxHQUFLLENBQUNJLGFBQWEsR0FBRyxDQUFDLENBQUUsQ0FBb0QsRUFBSztBQUU3RSxFQUE2SjtTQUNwSkMsaUJBQVksQ0FBQ0MsSUFBWSxFQUFFQyxFQUFVLEVBQUUsQ0FBQztJQUNwRCxNQUFNLG9CQUFLLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDRCxFQUFFLEdBQUdELElBQUksR0FDM0JHLEdBQUcsQ0FBQyxRQUFRLENBQVBDLENBQUMsRUFBRUMsS0FBSyxFQUFLLENBQUM7UUFDbEIsTUFBTSxDQUFDTCxJQUFJLEdBQUdLLEtBQUssR0FBRyxDQUFDO0lBQ3pCLENBQUMsRUFDQUMsTUFBTSxDQUFDLFFBQVEsQ0FBUEMsSUFBSTtRQUFLQSxNQUFNLENBQU5BLElBQUksR0FBRyxDQUFDOztBQUM5QixDQUFDO0FBRU0sU0FBU0MsVUFBVSxDQUFDLEtBS1QsRUFBRSxDQUFDO1FBSm5CQyxxQkFBcUIsR0FESSxLQUtULENBSmhCQSxxQkFBcUIscUJBREksS0FLVCxDQUhoQkMsZUFBZSxFQUFmQSxlQUFlLGlDQUFHLEVBQUUsb0NBRkssS0FLVCxDQUZoQkMsV0FBVyxFQUFYQSxXQUFXLDZCQUFHLENBQUMsaUJBQ2ZDLFlBQVksR0FKYSxLQUtULENBRGhCQSxZQUFZOztJQUVaLEdBQUssQ0FBQ0MsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ04scUJBQXFCLEdBQUdDLGVBQWUsRUFBRyxDQUF5RSxFQUFFO0lBRS9JLEVBQTBPO0lBQzlOLEdBQVQsQ0FBQ00sYUFBYSxHQUNqQkwsV0FBVyxHQUFHLENBQUMsR0FDWFosaUJBQWlCLENBQUNZLFdBQVcsR0FBRyxDQUFDLEdBQUdiLGFBQWEsRUFBRWEsV0FBVyxHQUFHLENBQUMsSUFDbEUsQ0FBQyxDQUFDO0lBRVIsR0FBSyxDQUFDTSxTQUFTLEdBQ2JOLFdBQVcsR0FBR0UsUUFBUSxHQUNsQmQsaUJBQWlCLENBQ2ZZLFdBQVcsRUFDWEcsSUFBSSxDQUFDSSxHQUFHLENBQUNQLFdBQVcsR0FBR2IsYUFBYSxFQUFFZSxRQUFRLEtBRWhELENBQUMsQ0FBQztJQUVSLE1BQU0sdUVBQ0hsQixtREFBSztRQUNKd0IsU0FBUyxFQUFFLENBQUM7WUFBQSxDQUFRO1lBQUUsQ0FBSztRQUFBLENBQUM7UUFDNUJDLEVBQUUsRUFBQyxDQUFHO1FBQ05DLE9BQU8sRUFBQyxDQUFHO1FBQ1hDLE9BQU8sRUFBQyxDQUFlO1FBQ3ZCQyxLQUFLLEVBQUMsQ0FBUTs7Ozs7Ozs7a0ZBRWI3QixpREFBRzs7Ozs7Ozs7eUZBQ0Q4QixDQUFNOzs7Ozs7O2tDQUFDLENBQUM7O29CQUFTLENBQUc7eUZBQUNBLENBQU07Ozs7Ozs7a0NBQUMsQ0FBRTs7b0JBQVMsQ0FBSTt5RkFBQ0EsQ0FBTTs7Ozs7OztrQ0FBQyxDQUFHOzs7O2tGQUV4RDdCLG1EQUFLO2dCQUFDd0IsU0FBUyxFQUFDLENBQUs7Z0JBQUNFLE9BQU8sRUFBQyxDQUFHOzs7Ozs7OztvQkFFL0JWLFdBQVcsR0FBRyxDQUFDLEdBQUdiLGFBQWE7O2lHQUUzQkQsMkRBQWM7Z0NBQUM0QixNQUFNLEVBQUUsQ0FBQzs7Ozs7Ozs7NEJBQ3hCZCxXQUFXLEdBQUcsQ0FBQyxHQUFHYixhQUFhLHlFQUM3QkYsa0RBQUk7Z0NBQUM4QixLQUFLLEVBQUMsQ0FBVTtnQ0FBQ0MsQ0FBQyxFQUFDLENBQUc7Ozs7Ozs7MENBQUMsQ0FFN0I7Ozs7b0JBSUxYLGFBQWEsQ0FBQ1ksTUFBTSxHQUFHLENBQUMsSUFDdkJaLGFBQWEsQ0FBQ2IsR0FBRyxDQUFDLFFBQVEsQ0FBUEksSUFBSSxFQUFLLENBQUM7d0JBQzNCLE1BQU0sc0VBQUVWLDJEQUFjOzRCQUFZNEIsTUFBTSxFQUFFbEIsSUFBSTs7Ozs7OzsyQkFBbEJBLElBQUk7b0JBQ2xDLENBQUM7eUZBQ0ZWLDJEQUFjO3dCQUFDZ0MsU0FBUzt3QkFBQ0osTUFBTSxFQUFFZCxXQUFXOzs7Ozs7OztvQkFDNUNNLFNBQVMsQ0FBQ1csTUFBTSxHQUFHLENBQUMsSUFDbkJYLFNBQVMsQ0FBQ2QsR0FBRyxDQUFDLFFBQVEsQ0FBUEksSUFBSSxFQUFLLENBQUM7d0JBQ3ZCLE1BQU0sc0VBQUVWLDJEQUFjOzRCQUFZNEIsTUFBTSxFQUFFbEIsSUFBSTs7Ozs7OzsyQkFBbEJBLElBQUk7b0JBQ2xDLENBQUM7b0JBRUZJLFdBQVcsR0FBR2IsYUFBYSxHQUFHZSxRQUFROzs0QkFFbENGLFdBQVcsR0FBR2IsYUFBYSxHQUFHLENBQUMsR0FBR2UsUUFBUSx5RUFBS2pCLGtEQUFJOzs7Ozs7OzBDQUFDLENBQUc7O2lHQUN2REMsMkRBQWM7Z0NBQUM0QixNQUFNLEVBQUVaLFFBQVE7Ozs7Ozs7Ozs7Ozs7O0FBTTVDLENBQUM7S0FoRWVMLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFnaW5hdGlvbi9pbmRleC50c3g/YzFjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIFN0YWNrLCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uSXRlbSB9IGZyb20gJy4vUGFnaW5hdGlvbkl0ZW0nO1xuXG5pbnRlcmZhY2UgUGFnaW5hdGlvblByb3BzIHtcbiAgdG90YWxDb3VudE9mUmVnaXN0ZXJzOiBudW1iZXI7XG4gIHJlZ2lzdGVyUGVyUGFnZT86IG51bWJlcjtcbiAgY3VycmVudFBhZ2U/OiBudW1iZXI7XG4gIG9uUGFnZUNoYW5nZTogKHBhZ2U6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuY29uc3Qgc2libGluZ3NDb3VudCA9IDE7IC8vcXVhbnRhcyBww6FnIGlybcOjZXMgcXVlIHNlcsOjbyBleGliaWRhcyBuYSBwYWdpbmHDp8Ojb1xuXG4vL0Vzc2EgZnVuw6fDo28gcmV0b3JuYSB1bSBhcnJheSBjb20gbyBuw7ptZXJvIGRhcyBww6FnaW5hcyBkZW50cm8gZGUgdW0gcmFuZ2UsIGV4Y2x1aW5kbyBvIG7Dum1lcm8gaW5pY2lhbC4gTyBmaWx0ZXIgcmV0b3JuYSBzb21lbnRlIG9zIHJlc3VsdGFkb3MgcG9zaXRpdm9zIGRvIGFycmF5LlxuZnVuY3Rpb24gZ2VuZXJhdGVQYWdlQXJyYXkoZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyKSB7XG4gIHJldHVybiBbLi4ubmV3IEFycmF5KHRvIC0gZnJvbSldXG4gICAgLm1hcCgoXywgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBmcm9tICsgaW5kZXggKyAxO1xuICAgIH0pXG4gICAgLmZpbHRlcigocGFnZSkgPT4gcGFnZSA+IDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUGFnaW5hdGlvbih7XG4gIHRvdGFsQ291bnRPZlJlZ2lzdGVycyxcbiAgcmVnaXN0ZXJQZXJQYWdlID0gMTAsXG4gIGN1cnJlbnRQYWdlID0gMSxcbiAgb25QYWdlQ2hhbmdlLFxufTogUGFnaW5hdGlvblByb3BzKSB7XG4gIGNvbnN0IGxhc3RQYWdlID0gTWF0aC5mbG9vcih0b3RhbENvdW50T2ZSZWdpc3RlcnMgLyByZWdpc3RlclBlclBhZ2UpOyAvL0FycmVkb25kYSBwYXJhIGNpbWEgbyBuw7ptZXJvIGRlIHJlZ2lzdHJvIHBlbGEgcXRkIGRlIHJlZ2lzdHJvcyBwb3IgcMOhZy5cblxuICAvL1DDoWdpbmFzIGFudGVyaW9yaWVzIHNlcsOjbywgY2FzbyBhIHDDoWdpbmEgYXR1YWwgc2VqYSBtYWlvciBxdWUgMSwgdW0gYXJyYXkgZGEgcG9zacOnw6NvIGF1dGFsIC0gMSwgZSBhcyBwb3Npw6fDtWVzIGlybcOjcyBhbnRlcmlvcmVzLCBhdMOpIGEgcMOhZ2luYSBhdHVhbCAtIDEuIEEgbMOzZ2ljYSBkYXMgcMOhZ2luYXMgcG9zdGVyaW9yZXMgw6kgYSBtZXNtYSBwYXJhIGZyZW50ZSBkYSBww6FnaW5hIGF0dWFsLCBpbmNsdXNpdmUuXG4gIGNvbnN0IHByZXZpb3VzUGFnZXMgPVxuICAgIGN1cnJlbnRQYWdlID4gMVxuICAgICAgPyBnZW5lcmF0ZVBhZ2VBcnJheShjdXJyZW50UGFnZSAtIDEgLSBzaWJsaW5nc0NvdW50LCBjdXJyZW50UGFnZSAtIDEpXG4gICAgICA6IFtdO1xuXG4gIGNvbnN0IG5leHRQYWdlcyA9XG4gICAgY3VycmVudFBhZ2UgPCBsYXN0UGFnZVxuICAgICAgPyBnZW5lcmF0ZVBhZ2VBcnJheShcbiAgICAgICAgICBjdXJyZW50UGFnZSxcbiAgICAgICAgICBNYXRoLm1pbihjdXJyZW50UGFnZSArIHNpYmxpbmdzQ291bnQsIGxhc3RQYWdlKSxcbiAgICAgICAgKVxuICAgICAgOiBbXTtcblxuICByZXR1cm4gKFxuICAgIDxTdGFja1xuICAgICAgZGlyZWN0aW9uPXtbJ2NvbHVtbicsICdyb3cnXX1cbiAgICAgIG10PVwiOFwiXG4gICAgICBzcGFjaW5nPVwiNlwiXG4gICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgPlxuICAgICAgPEJveD5cbiAgICAgICAgPHN0cm9uZz4wPC9zdHJvbmc+IC0gPHN0cm9uZz4xMDwvc3Ryb25nPiBkZSA8c3Ryb25nPjEwMDwvc3Ryb25nPlxuICAgICAgPC9Cb3g+XG4gICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz1cIjJcIj5cbiAgICAgICAgey8qIFNlIG8gdG90YWwgZGUgcGFnIGFudGVyaW9yZXMgw6kgbWFpb3IgcXVlIDAsIGVudMOjbyByZXRvcm5hIHVtIFBhZ2luYXRpb25JdGVtIHBhcmEgY2FkYSB1bWEgKi99XG4gICAgICAgIHtjdXJyZW50UGFnZSA+IDEgKyBzaWJsaW5nc0NvdW50ICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFBhZ2luYXRpb25JdGVtIG51bWJlcj17MX0gLz5cbiAgICAgICAgICAgIHtjdXJyZW50UGFnZSA+IDIgKyBzaWJsaW5nc0NvdW50ICYmIChcbiAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJncmF5LjMwMFwiIHc9XCI4XCI+XG4gICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtwcmV2aW91c1BhZ2VzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICBwcmV2aW91c1BhZ2VzLm1hcCgocGFnZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxQYWdpbmF0aW9uSXRlbSBrZXk9e3BhZ2V9IG51bWJlcj17cGFnZX0gLz47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDxQYWdpbmF0aW9uSXRlbSBpc0N1cnJlbnQgbnVtYmVyPXtjdXJyZW50UGFnZX0gLz5cbiAgICAgICAge25leHRQYWdlcy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgbmV4dFBhZ2VzLm1hcCgocGFnZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxQYWdpbmF0aW9uSXRlbSBrZXk9e3BhZ2V9IG51bWJlcj17cGFnZX0gLz47XG4gICAgICAgICAgfSl9XG5cbiAgICAgICAge2N1cnJlbnRQYWdlICsgc2libGluZ3NDb3VudCA8IGxhc3RQYWdlICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAge2N1cnJlbnRQYWdlICsgc2libGluZ3NDb3VudCArIDEgPCBsYXN0UGFnZSAmJiA8VGV4dD4uLi48L1RleHQ+fVxuICAgICAgICAgICAgPFBhZ2luYXRpb25JdGVtIG51bWJlcj17bGFzdFBhZ2V9IC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L1N0YWNrPlxuICAgIDwvU3RhY2s+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQm94IiwiU3RhY2siLCJUZXh0IiwiUGFnaW5hdGlvbkl0ZW0iLCJzaWJsaW5nc0NvdW50IiwiZ2VuZXJhdGVQYWdlQXJyYXkiLCJmcm9tIiwidG8iLCJBcnJheSIsIm1hcCIsIl8iLCJpbmRleCIsImZpbHRlciIsInBhZ2UiLCJQYWdpbmF0aW9uIiwidG90YWxDb3VudE9mUmVnaXN0ZXJzIiwicmVnaXN0ZXJQZXJQYWdlIiwiY3VycmVudFBhZ2UiLCJvblBhZ2VDaGFuZ2UiLCJsYXN0UGFnZSIsIk1hdGgiLCJmbG9vciIsInByZXZpb3VzUGFnZXMiLCJuZXh0UGFnZXMiLCJtaW4iLCJkaXJlY3Rpb24iLCJtdCIsInNwYWNpbmciLCJqdXN0aWZ5IiwiYWxpZ24iLCJzdHJvbmciLCJudW1iZXIiLCJjb2xvciIsInciLCJsZW5ndGgiLCJpc0N1cnJlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Pagination/index.tsx\n");

/***/ })

});