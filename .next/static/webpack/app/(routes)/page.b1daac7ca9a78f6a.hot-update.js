"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(routes)/page",{

/***/ "(app-client)/./components/ui/currency.tsx":
/*!************************************!*\
  !*** ./components/ui/currency.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst formatter = new Intl.NumberFormat(\"en-US\", {\n    style: \"currency\",\n    currency: \"USD\"\n});\nconst Currency = (param)=>{\n    let { value = 0 } = param;\n    _s();\n    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsMounted(true);\n    }, []);\n    if (!isMounted) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"font-semibold\",\n        \"data-cy-info\": \"price\",\n        children: formatter.format(Number(value))\n    }, void 0, false, {\n        fileName: \"/Users/thanhtut/Projects/other/buystuffs/components/ui/currency.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Currency, \"h7njlszr1nxUzrk46zHyBTBrvgI=\");\n_c = Currency;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Currency);\nvar _c;\n$RefreshReg$(_c, \"Currency\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy91aS9jdXJyZW5jeS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRTRDO0FBRTVDLE1BQU1FLFlBQVksSUFBSUMsS0FBS0MsYUFBYSxTQUFTO0lBQy9DQyxPQUFPO0lBQ1BDLFVBQVU7QUFDWjtBQU1BLE1BQU1DLFdBQW9DO1FBQUMsRUFBRUMsUUFBUSxDQUFDLEVBQUU7O0lBQ3RELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUUzQ0QsZ0RBQVNBLENBQUM7UUFDUlUsYUFBYTtJQUNmLEdBQUcsRUFBRTtJQUVMLElBQUksQ0FBQ0QsV0FBVztRQUNkLE9BQU87SUFDVDtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVO1FBQWdCQyxnQkFBYTtrQkFDekNYLFVBQVVZLE9BQU9DLE9BQU9QOzs7Ozs7QUFHL0I7R0FoQk1EO0tBQUFBO0FBa0JOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvY3VycmVuY3kudHN4PzdlODEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tVVNcIiwge1xuICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICBjdXJyZW5jeTogXCJVU0RcIixcbn0pO1xuXG5pbnRlcmZhY2UgQ3VycmVuY3lQcm9wcyB7XG4gIHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5jb25zdCBDdXJyZW5jeTogUmVhY3QuRkM8Q3VycmVuY3lQcm9wcz4gPSAoeyB2YWx1ZSA9IDAgfSkgPT4ge1xuICBjb25zdCBbaXNNb3VudGVkLCBzZXRJc01vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNNb3VudGVkKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgaWYgKCFpc01vdW50ZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCIgZGF0YS1jeS1pbmZvPVwicHJpY2VcIj5cbiAgICAgIHtmb3JtYXR0ZXIuZm9ybWF0KE51bWJlcih2YWx1ZSkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VycmVuY3k7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsIkN1cnJlbmN5IiwidmFsdWUiLCJpc01vdW50ZWQiLCJzZXRJc01vdW50ZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJkYXRhLWN5LWluZm8iLCJmb3JtYXQiLCJOdW1iZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/ui/currency.tsx\n"));

/***/ })

});