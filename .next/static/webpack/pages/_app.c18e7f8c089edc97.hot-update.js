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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeServer\": function() { return /* binding */ makeServer; }\n/* harmony export */ });\n/* harmony import */ var miragejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! miragejs */ \"./node_modules/miragejs/dist/mirage-esm.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ \"./node_modules/faker/index.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* eslint-disable import/no-extraneous-dependencies */ \n\nfunction makeServer() {\n    var server = (0,miragejs__WEBPACK_IMPORTED_MODULE_1__.createServer)({\n        models: {\n            user: miragejs__WEBPACK_IMPORTED_MODULE_1__.Model.extend({\n            })\n        },\n        // factories são utilizadas para gerar dados em massa, podendo utilizar um contador, por exemplo, para gerar 200 usuários com o texto \"usuario1, 2, 3...200\"\n        factories: {\n            user: miragejs__WEBPACK_IMPORTED_MODULE_1__.Factory.extend({\n                // todo campo de factory recebe um índice que é um número. Podemos ter acesso a esse número para criar itens únicos com números incrementais.\n                name: function(i) {\n                    return \"User\".concat(i + 1); // O primeiro índice é 0\n                },\n                email: function() {\n                    return faker__WEBPACK_IMPORTED_MODULE_0___default().internet.email().toLocaleLowerCase(); // Utilizamos a biblioteca faker para criar um email único para cada usuário\n                },\n                createdAt: function() {\n                    return faker__WEBPACK_IMPORTED_MODULE_0___default().date.recent(10);\n                // utilizando o faker para criar uma data recente nos últimos 10 dias.\n                }\n            })\n        },\n        // cria dados assim que o servidor for inicializado para não vir sem nenhum dado fake\n        seeds: function(sv) {\n            sv.createList('user', 200);\n        },\n        routes: function() {\n            this.namespace = 'api';\n            this.timing = 100; // Demora para simular uma chamada na internet, ou DB\n            this.get('/users');\n            this.post('/users');\n            this.namespace = ''; // Resetar as rotas para não ser igual ao API do Next\n            this.passthrough(); // Todas as chamadas a rota 'api' vão passar pelo mirageJs e caso não tenha correspondência ele vai passar para a 'api' do next\n        }\n    });\n    return server;\n}\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvbWlyYWdlL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsRUFBc0QscURBQ0M7QUFDOUI7QUFRbEIsU0FBU0ksVUFBVSxHQUFHLENBQUM7SUFDNUIsR0FBSyxDQUFDQyxNQUFNLEdBQUdMLHNEQUFZLENBQUMsQ0FBQztRQUMzQk0sTUFBTSxFQUFFLENBQUM7WUFDUEMsSUFBSSxFQUFFTCxrREFBWSxDQUFnQixDQUFDO1lBQUEsQ0FBQztRQUN0QyxDQUFDO1FBRUQsRUFBNEo7UUFDMUpPLFNBQU8sRUFBRSxDQUFDO1lBQ1ZGLElBQUksRUFBRU4sb0RBQWMsQ0FBQyxDQUFDO2dCQUNwQixFQUE2STtnQkFDdklTLElBQUYsRUFBSkEsUUFBUSxDQUFIQyxDQUFDLEVBQUUsQ0FBQztvQkFDUCxNQUFNLENBQUUsQ0FBSSxNQUFRLE9BQU5BLENBQUMsR0FBRyxDQUFDLEVBQUksQ0FBd0IsRUFBRTtnQkFDakQsQ0FBRDtnQkFDREMsS0FBSyxFQUFMQSxRQUFRLElBQUM7b0JBQ1AsTUFBTSxDQUFDVCwyREFBb0IsR0FBR1csaUJBQWlCLEdBQUksQ0FBNEUsRUFBRTtnQkFDakksQ0FBRDtnQkFDREMsU0FBUyxFQUFUQSxRQUFRLEdBQUksQ0FBQztvQkFDWCxNQUFNLENBQUNaLHdEQUFpQixDQUFDLEVBQUU7Z0JBQzNCLEVBQXNFO2dCQUN2RTtZQUNILENBQUM7UUFDSCxDQUFDO1FBRUQsRUFBcUY7UUFDcEZlLEtBQUksRUFBTEEsUUFBUSxDQUFGQyxFQUFFLEVBQUUsQ0FBQztZQUNUQSxFQUFFLENBQUNDLFVBQVUsQ0FBQyxDQUFNLE9BQUUsR0FBRztRQUMzQixDQUFDO1FBRURDLE1BQU0sRUFBTkEsUUFBUSxHQUFDLENBQUM7WUFDUixJQUFJLENBQUNDLFNBQVMsR0FBRyxDQUFLO1lBQ3RCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEdBQUcsQ0FBRSxDQUFxRDtZQUN4RSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFRO1lBQ2pCLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQVE7WUFFbEIsSUFBSSxDQUFDSCxTQUFTLEdBQUcsQ0FBRSxFQUFFLENBQXFELEVBQUM7WUFDMUUsSUFBRyxDQUFDSSxXQUFXLEdBQUksQ0FBK0g7UUFDckosQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUNyQixNQUFNO0FBQ2YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VydmljZXMvbWlyYWdlL2luZGV4LnRzPzRmMWEiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzICovXG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXIsIEZhY3RvcnksIE1vZGVsIH0gZnJvbSAnbWlyYWdlanMnO1xuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcblxuaW50ZXJmYWNlIFVzZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTZXJ2ZXIoKSB7XG4gIGNvbnN0IHNlcnZlciA9IGNyZWF0ZVNlcnZlcih7XG4gICAgbW9kZWxzOiB7XG4gICAgICB1c2VyOiBNb2RlbC5leHRlbmQ8UGFydGlhbDxVc2VyPj4oe30pLFxuICAgIH0sXG5cbiAgICAvLyBmYWN0b3JpZXMgc8OjbyB1dGlsaXphZGFzIHBhcmEgZ2VyYXIgZGFkb3MgZW0gbWFzc2EsIHBvZGVuZG8gdXRpbGl6YXIgdW0gY29udGFkb3IsIHBvciBleGVtcGxvLCBwYXJhIGdlcmFyIDIwMCB1c3XDoXJpb3MgY29tIG8gdGV4dG8gXCJ1c3VhcmlvMSwgMiwgMy4uLjIwMFwiXG4gICAgZmFjdG9yaWVzOiB7XG4gICAgICB1c2VyOiBGYWN0b3J5LmV4dGVuZCh7XG4gICAgICAgIC8vIHRvZG8gY2FtcG8gZGUgZmFjdG9yeSByZWNlYmUgdW0gw61uZGljZSBxdWUgw6kgdW0gbsO6bWVyby4gUG9kZW1vcyB0ZXIgYWNlc3NvIGEgZXNzZSBuw7ptZXJvIHBhcmEgY3JpYXIgaXRlbnMgw7puaWNvcyBjb20gbsO6bWVyb3MgaW5jcmVtZW50YWlzLlxuICAgICAgICBuYW1lKGkpIHtcbiAgICAgICAgICByZXR1cm4gYFVzZXIke2kgKyAxfWA7IC8vIE8gcHJpbWVpcm8gw61uZGljZSDDqSAwXG4gICAgICAgIH0sXG4gICAgICAgIGVtYWlsKCkge1xuICAgICAgICAgIHJldHVybiBmYWtlci5pbnRlcm5ldC5lbWFpbCgpLnRvTG9jYWxlTG93ZXJDYXNlKCk7IC8vIFV0aWxpemFtb3MgYSBiaWJsaW90ZWNhIGZha2VyIHBhcmEgY3JpYXIgdW0gZW1haWwgw7puaWNvIHBhcmEgY2FkYSB1c3XDoXJpb1xuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkQXQoKSB7XG4gICAgICAgICAgcmV0dXJuIGZha2VyLmRhdGUucmVjZW50KDEwKTtcbiAgICAgICAgICAvLyB1dGlsaXphbmRvIG8gZmFrZXIgcGFyYSBjcmlhciB1bWEgZGF0YSByZWNlbnRlIG5vcyDDumx0aW1vcyAxMCBkaWFzLlxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgfSxcblxuICAgIC8vIGNyaWEgZGFkb3MgYXNzaW0gcXVlIG8gc2Vydmlkb3IgZm9yIGluaWNpYWxpemFkbyBwYXJhIG7Do28gdmlyIHNlbSBuZW5odW0gZGFkbyBmYWtlXG4gICAgc2VlZHMoc3YpIHtcbiAgICAgIHN2LmNyZWF0ZUxpc3QoJ3VzZXInLCAyMDApO1xuICAgIH0sXG5cbiAgICByb3V0ZXMoKSB7XG4gICAgICB0aGlzLm5hbWVzcGFjZSA9ICdhcGknO1xuICAgICAgdGhpcy50aW1pbmcgPSAxMDA7IC8vIERlbW9yYSBwYXJhIHNpbXVsYXIgdW1hIGNoYW1hZGEgbmEgaW50ZXJuZXQsIG91IERCXG4gICAgICB0aGlzLmdldCgnL3VzZXJzJyk7XG4gICAgICB0aGlzLnBvc3QoJy91c2VycycpO1xuXG4gICAgICB0aGlzLm5hbWVzcGFjZSA9ICcnOyAvLyBSZXNldGFyIGFzIHJvdGFzIHBhcmEgbsOjbyBzZXIgaWd1YWwgYW8gQVBJIGRvIE5leHRcbiAgICAgIHRoaXMucGFzc3Rocm91Z2goKTsgLy8gVG9kYXMgYXMgY2hhbWFkYXMgYSByb3RhICdhcGknIHbDo28gcGFzc2FyIHBlbG8gbWlyYWdlSnMgZSBjYXNvIG7Do28gdGVuaGEgY29ycmVzcG9uZMOqbmNpYSBlbGUgdmFpIHBhc3NhciBwYXJhIGEgJ2FwaScgZG8gbmV4dFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiBzZXJ2ZXI7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlU2VydmVyIiwiRmFjdG9yeSIsIk1vZGVsIiwiZmFrZXIiLCJtYWtlU2VydmVyIiwic2VydmVyIiwibW9kZWxzIiwidXNlciIsImV4dGVuZCIsImZhY3RvcmllcyIsIm5hbWUiLCJpIiwiZW1haWwiLCJpbnRlcm5ldCIsInRvTG9jYWxlTG93ZXJDYXNlIiwiY3JlYXRlZEF0IiwiZGF0ZSIsInJlY2VudCIsInNlZWRzIiwic3YiLCJjcmVhdGVMaXN0Iiwicm91dGVzIiwibmFtZXNwYWNlIiwidGltaW5nIiwiZ2V0IiwicG9zdCIsInBhc3N0aHJvdWdoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/mirage/index.ts\n");

/***/ })

});