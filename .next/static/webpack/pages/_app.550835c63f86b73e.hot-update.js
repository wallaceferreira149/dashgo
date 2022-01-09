"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/services/mirage/index.ts":
/*!**************************************!*\
  !*** ./src/services/mirage/index.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeServer\": function() { return /* binding */ makeServer; }\n/* harmony export */ });\n/* harmony import */ var miragejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! miragejs */ \"./node_modules/miragejs/dist/mirage-esm.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ \"./node_modules/faker/index.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* eslint-disable import/no-extraneous-dependencies */ \n\nfunction makeServer() {\n    var server = (0,miragejs__WEBPACK_IMPORTED_MODULE_1__.createServer)({\n        models: {\n            user: miragejs__WEBPACK_IMPORTED_MODULE_1__.Model.extend({\n            })\n        },\n        // factories são utilizadas para gerar dados em massa, podendo utilizar um contador, por exemplo, para gerar 200 usuários com o texto \"usuario1, 2, 3...200\"\n        factories: {\n            user: miragejs__WEBPACK_IMPORTED_MODULE_1__.Factory.extend({\n                // todo campo de factory recebe um índice que é um número. Podemos ter acesso a esse número para criar itens únicos com números incrementais.\n                name: function(i) {\n                    return \"User\".concat(i + 1); // O primeiro índice é 0\n                },\n                email: function() {\n                    return faker__WEBPACK_IMPORTED_MODULE_0___default().internet.email().toLocaleLowerCase(); // Utilizamos a biblioteca faker para criar um email único para cada usuário\n                },\n                createdAt: function() {\n                    return faker__WEBPACK_IMPORTED_MODULE_0___default().date.recent(10);\n                // utilizando o faker para criar uma data recente nos últimos 10 dias.\n                }\n            })\n        },\n        // cria dados assim que o servidor for inicializado para não vir sem nenhum dado fake\n        seeds: function(sv) {\n            sv.createList('user', 200);\n        },\n        routes: function() {\n            this.namespace = 'api';\n            this.timing = 100; // Demora para simular uma chamada na internet, ou DB\n            // Por padrão o mirage não trás uma paginação automática, para isso temos que fazer nossa lógica de paginação. O método get recebe uma função como segundo parâmetro.\n            // eslint-disable-next-line func-names\n            this.get('/users', function(schema, request) {\n                // eslint-disable-next-line camelcase\n                var _queryParams = request.queryParams, _page = _queryParams.page, page = _page === void 0 ? 1 : _page, _per_page = _queryParams.per_page, per_page = _per_page === void 0 ? 10 : _per_page; // Pega da requisição a página e a quantidade, os parâmetros são os 10 primeiros da primeira página\n                var total = schema.all('user').length; // Obtendo o total de registros no schema.\n                var pageStart = (Number(page) - 1) * Number(per_page); // Por padrão os parâmetros de uma query vem em string. Os usuários vão começar no registro número da pág menos 1 q é o registro no momento vezes a quantidade de exibição por registros.\n                var pageEnd = pageStart + Number(per_page);\n                var users = this.serialize(schema.all('user')).users.slice(pageStart, pageEnd);\n                return new miragejs__WEBPACK_IMPORTED_MODULE_1__.Response(200, {\n                    'x-total-count': String(total)\n                }, {\n                    users: users\n                });\n            });\n            this.get('/users/:id');\n            this.post('/users');\n            this.namespace = ''; // Resetar as rotas para não ser igual ao API do Next\n            this.passthrough(); // Todas as chamadas a rota 'api' vão passar pelo mirageJs e caso não tenha correspondência ele vai passar para a 'api' do next\n        }\n    });\n    return server;\n}\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBRUQsTUFBTSxDQUFDcEMsTUFBTTtBQUNmLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL21pcmFnZS9pbmRleC50cz80ZjFhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llcyAqL1xuaW1wb3J0IHsgY3JlYXRlU2VydmVyLCBGYWN0b3J5LCBNb2RlbCwgUmVzcG9uc2UgfSBmcm9tICdtaXJhZ2Vqcyc7XG5pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInO1xuXG5pbnRlcmZhY2UgVXNlciB7XG4gIG5hbWU6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgY3JlYXRlZF9hdDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNlcnZlcigpIHtcbiAgY29uc3Qgc2VydmVyID0gY3JlYXRlU2VydmVyKHtcbiAgICBtb2RlbHM6IHtcbiAgICAgIHVzZXI6IE1vZGVsLmV4dGVuZDxQYXJ0aWFsPFVzZXI+Pih7fSksXG4gICAgfSxcblxuICAgIC8vIGZhY3RvcmllcyBzw6NvIHV0aWxpemFkYXMgcGFyYSBnZXJhciBkYWRvcyBlbSBtYXNzYSwgcG9kZW5kbyB1dGlsaXphciB1bSBjb250YWRvciwgcG9yIGV4ZW1wbG8sIHBhcmEgZ2VyYXIgMjAwIHVzdcOhcmlvcyBjb20gbyB0ZXh0byBcInVzdWFyaW8xLCAyLCAzLi4uMjAwXCJcbiAgICBmYWN0b3JpZXM6IHtcbiAgICAgIHVzZXI6IEZhY3RvcnkuZXh0ZW5kKHtcbiAgICAgICAgLy8gdG9kbyBjYW1wbyBkZSBmYWN0b3J5IHJlY2ViZSB1bSDDrW5kaWNlIHF1ZSDDqSB1bSBuw7ptZXJvLiBQb2RlbW9zIHRlciBhY2Vzc28gYSBlc3NlIG7Dum1lcm8gcGFyYSBjcmlhciBpdGVucyDDum5pY29zIGNvbSBuw7ptZXJvcyBpbmNyZW1lbnRhaXMuXG4gICAgICAgIG5hbWUoaSkge1xuICAgICAgICAgIHJldHVybiBgVXNlciR7aSArIDF9YDsgLy8gTyBwcmltZWlybyDDrW5kaWNlIMOpIDBcbiAgICAgICAgfSxcbiAgICAgICAgZW1haWwoKSB7XG4gICAgICAgICAgcmV0dXJuIGZha2VyLmludGVybmV0LmVtYWlsKCkudG9Mb2NhbGVMb3dlckNhc2UoKTsgLy8gVXRpbGl6YW1vcyBhIGJpYmxpb3RlY2EgZmFrZXIgcGFyYSBjcmlhciB1bSBlbWFpbCDDum5pY28gcGFyYSBjYWRhIHVzdcOhcmlvXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWRBdCgpIHtcbiAgICAgICAgICByZXR1cm4gZmFrZXIuZGF0ZS5yZWNlbnQoMTApO1xuICAgICAgICAgIC8vIHV0aWxpemFuZG8gbyBmYWtlciBwYXJhIGNyaWFyIHVtYSBkYXRhIHJlY2VudGUgbm9zIMO6bHRpbW9zIDEwIGRpYXMuXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICB9LFxuXG4gICAgLy8gY3JpYSBkYWRvcyBhc3NpbSBxdWUgbyBzZXJ2aWRvciBmb3IgaW5pY2lhbGl6YWRvIHBhcmEgbsOjbyB2aXIgc2VtIG5lbmh1bSBkYWRvIGZha2VcbiAgICBzZWVkcyhzdikge1xuICAgICAgc3YuY3JlYXRlTGlzdCgndXNlcicsIDIwMCk7XG4gICAgfSxcblxuICAgIHJvdXRlcygpIHtcbiAgICAgIHRoaXMubmFtZXNwYWNlID0gJ2FwaSc7XG4gICAgICB0aGlzLnRpbWluZyA9IDEwMDsgLy8gRGVtb3JhIHBhcmEgc2ltdWxhciB1bWEgY2hhbWFkYSBuYSBpbnRlcm5ldCwgb3UgREJcblxuICAgICAgLy8gUG9yIHBhZHLDo28gbyBtaXJhZ2UgbsOjbyB0csOhcyB1bWEgcGFnaW5hw6fDo28gYXV0b23DoXRpY2EsIHBhcmEgaXNzbyB0ZW1vcyBxdWUgZmF6ZXIgbm9zc2EgbMOzZ2ljYSBkZSBwYWdpbmHDp8Ojby4gTyBtw6l0b2RvIGdldCByZWNlYmUgdW1hIGZ1bsOnw6NvIGNvbW8gc2VndW5kbyBwYXLDom1ldHJvLlxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICAgIHRoaXMuZ2V0KCcvdXNlcnMnLCBmdW5jdGlvbiAoc2NoZW1hLCByZXF1ZXN0KSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbiAgICAgICAgY29uc3QgeyBwYWdlID0gMSwgcGVyX3BhZ2UgPSAxMCB9ID0gcmVxdWVzdC5xdWVyeVBhcmFtczsgLy8gUGVnYSBkYSByZXF1aXNpw6fDo28gYSBww6FnaW5hIGUgYSBxdWFudGlkYWRlLCBvcyBwYXLDom1ldHJvcyBzw6NvIG9zIDEwIHByaW1laXJvcyBkYSBwcmltZWlyYSBww6FnaW5hXG5cbiAgICAgICAgY29uc3QgdG90YWwgPSBzY2hlbWEuYWxsKCd1c2VyJykubGVuZ3RoOyAvLyBPYnRlbmRvIG8gdG90YWwgZGUgcmVnaXN0cm9zIG5vIHNjaGVtYS5cblxuICAgICAgICBjb25zdCBwYWdlU3RhcnQgPSAoTnVtYmVyKHBhZ2UpIC0gMSkgKiBOdW1iZXIocGVyX3BhZ2UpOyAvLyBQb3IgcGFkcsOjbyBvcyBwYXLDom1ldHJvcyBkZSB1bWEgcXVlcnkgdmVtIGVtIHN0cmluZy4gT3MgdXN1w6FyaW9zIHbDo28gY29tZcOnYXIgbm8gcmVnaXN0cm8gbsO6bWVybyBkYSBww6FnIG1lbm9zIDEgcSDDqSBvIHJlZ2lzdHJvIG5vIG1vbWVudG8gdmV6ZXMgYSBxdWFudGlkYWRlIGRlIGV4aWJpw6fDo28gcG9yIHJlZ2lzdHJvcy5cblxuICAgICAgICBjb25zdCBwYWdlRW5kID0gcGFnZVN0YXJ0ICsgTnVtYmVyKHBlcl9wYWdlKTtcblxuICAgICAgICBjb25zdCB1c2VycyA9IHRoaXMuc2VyaWFsaXplKHNjaGVtYS5hbGwoJ3VzZXInKSkudXNlcnMuc2xpY2UoXG4gICAgICAgICAgcGFnZVN0YXJ0LFxuICAgICAgICAgIHBhZ2VFbmQsXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZSgyMDAsIHsgJ3gtdG90YWwtY291bnQnOiBTdHJpbmcodG90YWwpIH0sIHsgdXNlcnMgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5nZXQoJy91c2Vycy86aWQnKTtcbiAgICAgIHRoaXMucG9zdCgnL3VzZXJzJyk7XG5cbiAgICAgIHRoaXMubmFtZXNwYWNlID0gJyc7IC8vIFJlc2V0YXIgYXMgcm90YXMgcGFyYSBuw6NvIHNlciBpZ3VhbCBhbyBBUEkgZG8gTmV4dFxuICAgICAgdGhpcy5wYXNzdGhyb3VnaCgpOyAvLyBUb2RhcyBhcyBjaGFtYWRhcyBhIHJvdGEgJ2FwaScgdsOjbyBwYXNzYXIgcGVsbyBtaXJhZ2VKcyBlIGNhc28gbsOjbyB0ZW5oYSBjb3JyZXNwb25kw6puY2lhIGVsZSB2YWkgcGFzc2FyIHBhcmEgYSAnYXBpJyBkbyBuZXh0XG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHNlcnZlcjtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVTZXJ2ZXIiLCJGYWN0b3J5IiwiTW9kZWwiLCJSZXNwb25zZSIsImZha2VyIiwibWFrZVNlcnZlciIsInNlcnZlciIsIm1vZGVscyIsInVzZXIiLCJleHRlbmQiLCJmYWN0b3JpZXMiLCJuYW1lIiwiaSIsImVtYWlsIiwiaW50ZXJuZXQiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImNyZWF0ZWRBdCIsImRhdGUiLCJyZWNlbnQiLCJzZWVkcyIsInN2IiwiY3JlYXRlTGlzdCIsInJvdXRlcyIsIm5hbWVzcGFjZSIsInRpbWluZyIsImdldCIsInNjaGVtYSIsInJlcXVlc3QiLCJxdWVyeVBhcmFtcyIsInBhZ2UiLCJwZXJfcGFnZSIsInRvdGFsIiwiYWxsIiwibGVuZ3RoIiwicGFnZVN0YXJ0IiwiTnVtYmVyIiwicGFnZUVuZCIsInVzZXJzIiwic2VyaWFsaXplIiwic2xpY2UiLCJTdHJpbmciLCJwb3N0IiwicGFzc3Rocm91Z2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/mirage/index.ts\n");

/***/ })

});