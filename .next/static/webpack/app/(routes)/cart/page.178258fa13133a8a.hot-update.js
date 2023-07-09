"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(routes)/cart/page",{

/***/ "(app-client)/./app/(routes)/cart/components/summary.tsx":
/*!**************************************************!*\
  !*** ./app/(routes)/cart/components/summary.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-client)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_currency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/currency */ \"(app-client)/./components/ui/currency.tsx\");\n/* harmony import */ var _hooks_use_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/use-cart */ \"(app-client)/./hooks/use-cart.ts\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-toast */ \"(app-client)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Summary = ()=>{\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const items = (0,_hooks_use_cart__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((state)=>state.items);\n    const emptyCart = (0,_hooks_use_cart__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((state)=>state.emptyCart);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (searchParams.get(\"success\")) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.success(\"Payment completed.\");\n            emptyCart();\n        }\n        if (searchParams.get(\"canceled\")) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.error(\"Something went wrong.\");\n        }\n    }, [\n        searchParams,\n        emptyCart\n    ]);\n    const totalPrice = items.reduce((total, item)=>{\n        return total + Number(item.price) * item.quantity;\n    }, 0);\n    const onCheckout = async ()=>{\n    // const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {\n    //   productIds: items.map((item) => item.id)\n    // });\n    // window.location = response.data.url;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-lg font-medium text-gray-900\",\n                children: \"Order summary\"\n            }, void 0, false, {\n                fileName: \"/Users/thanhtut/Projects/other/buystuffs/app/(routes)/cart/components/summary.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6 space-y-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-between border-t border-gray-200 pt-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            \"data-cy\": \"order-total\",\n                            className: \"text-base font-medium text-gray-900\",\n                            children: \"Order total\"\n                        }, void 0, false, {\n                            fileName: \"/Users/thanhtut/Projects/other/buystuffs/app/(routes)/cart/components/summary.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_currency__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            value: totalPrice\n                        }, void 0, false, {\n                            fileName: \"/Users/thanhtut/Projects/other/buystuffs/app/(routes)/cart/components/summary.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/thanhtut/Projects/other/buystuffs/app/(routes)/cart/components/summary.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/thanhtut/Projects/other/buystuffs/app/(routes)/cart/components/summary.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                \"data-cy-data\": \"checkout\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    onClick: onCheckout,\n                    disabled: items.length === 0,\n                    className: \"w-full mt-6\",\n                    children: \"Checkout\"\n                }, void 0, false, {\n                    fileName: \"/Users/thanhtut/Projects/other/buystuffs/app/(routes)/cart/components/summary.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/thanhtut/Projects/other/buystuffs/app/(routes)/cart/components/summary.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/thanhtut/Projects/other/buystuffs/app/(routes)/cart/components/summary.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Summary, \"Khi554JNIYXTWsX0iVHCmWJh4Eg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams,\n        _hooks_use_cart__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _hooks_use_cart__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Summary;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Summary);\nvar _c;\n$RefreshReg$(_c, \"Summary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwLyhyb3V0ZXMpL2NhcnQvY29tcG9uZW50cy9zdW1tYXJ5LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFa0M7QUFDZ0I7QUFFTjtBQUNJO0FBQ1Q7QUFDQztBQUV4QyxNQUFNTSxVQUFVOztJQUNkLE1BQU1DLGVBQWVOLGdFQUFlQTtJQUNwQyxNQUFNTyxRQUFRSiwyREFBT0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNRDtJQUN2QyxNQUFNRSxZQUFZTiwyREFBT0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNQztJQUUzQ1YsZ0RBQVNBLENBQUM7UUFDUixJQUFJTyxhQUFhSSxJQUFJLFlBQVk7WUFDL0JOLGtEQUFLQSxDQUFDTyxRQUFRO1lBQ2RGO1FBQ0Y7UUFFQSxJQUFJSCxhQUFhSSxJQUFJLGFBQWE7WUFDaENOLGtEQUFLQSxDQUFDUSxNQUFNO1FBQ2Q7SUFDRixHQUFHO1FBQUNOO1FBQWNHO0tBQVU7SUFFNUIsTUFBTUksYUFBYU4sTUFBTU8sT0FBTyxDQUFDQyxPQUFPQztRQUN0QyxPQUFPRCxRQUFRRSxPQUFPRCxLQUFLRSxTQUFTRixLQUFLRztJQUMzQyxHQUFHO0lBRUgsTUFBTUMsYUFBYTtJQUNqQixxRkFBcUY7SUFDckYsNkNBQTZDO0lBQzdDLE1BQU07SUFDTix1Q0FBdUM7SUFDekM7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFvQzs7Ozs7OzBCQUNsRCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQ0NHLFdBQVE7NEJBQ1JGLFdBQVU7c0NBQ1g7Ozs7OztzQ0FHRCw4REFBQ3BCLCtEQUFRQTs0QkFBQ3VCLE9BQU9aOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHckIsOERBQUNRO2dCQUFJSyxnQkFBYTswQkFDaEIsNEVBQUN6Qiw2REFBTUE7b0JBQ0wwQixTQUFTUDtvQkFDVFEsVUFBVXJCLE1BQU1zQixXQUFXO29CQUMzQlAsV0FBVTs4QkFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQXBETWpCOztRQUNpQkwsNERBQWVBO1FBQ3RCRyx1REFBT0E7UUFDSEEsdURBQU9BOzs7S0FIckJFO0FBc0ROLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8ocm91dGVzKS9jYXJ0L2NvbXBvbmVudHMvc3VtbWFyeS50c3g/NTVkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCBDdXJyZW5jeSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2N1cnJlbmN5XCI7XG5pbXBvcnQgdXNlQ2FydCBmcm9tIFwiQC9ob29rcy91c2UtY2FydFwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5cbmNvbnN0IFN1bW1hcnkgPSAoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCBpdGVtcyA9IHVzZUNhcnQoKHN0YXRlKSA9PiBzdGF0ZS5pdGVtcyk7XG4gIGNvbnN0IGVtcHR5Q2FydCA9IHVzZUNhcnQoKHN0YXRlKSA9PiBzdGF0ZS5lbXB0eUNhcnQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlYXJjaFBhcmFtcy5nZXQoXCJzdWNjZXNzXCIpKSB7XG4gICAgICB0b2FzdC5zdWNjZXNzKFwiUGF5bWVudCBjb21wbGV0ZWQuXCIpO1xuICAgICAgZW1wdHlDYXJ0KCk7XG4gICAgfVxuXG4gICAgaWYgKHNlYXJjaFBhcmFtcy5nZXQoXCJjYW5jZWxlZFwiKSkge1xuICAgICAgdG9hc3QuZXJyb3IoXCJTb21ldGhpbmcgd2VudCB3cm9uZy5cIik7XG4gICAgfVxuICB9LCBbc2VhcmNoUGFyYW1zLCBlbXB0eUNhcnRdKTtcblxuICBjb25zdCB0b3RhbFByaWNlID0gaXRlbXMucmVkdWNlKCh0b3RhbCwgaXRlbSkgPT4ge1xuICAgIHJldHVybiB0b3RhbCArIE51bWJlcihpdGVtLnByaWNlKSAqIGl0ZW0ucXVhbnRpdHk7XG4gIH0sIDApO1xuXG4gIGNvbnN0IG9uQ2hlY2tvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2NoZWNrb3V0YCwge1xuICAgIC8vICAgcHJvZHVjdElkczogaXRlbXMubWFwKChpdGVtKSA9PiBpdGVtLmlkKVxuICAgIC8vIH0pO1xuICAgIC8vIHdpbmRvdy5sb2NhdGlvbiA9IHJlc3BvbnNlLmRhdGEudXJsO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xNiByb3VuZGVkLWxnIGJnLWdyYXktNTAgcHgtNCBweS02IHNtOnAtNiBsZzpjb2wtc3Bhbi01IGxnOm10LTAgbGc6cC04XCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+T3JkZXIgc3VtbWFyeTwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgc3BhY2UteS00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci10IGJvcmRlci1ncmF5LTIwMCBwdC00XCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgZGF0YS1jeT1cIm9yZGVyLXRvdGFsXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBPcmRlciB0b3RhbFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxDdXJyZW5jeSB2YWx1ZT17dG90YWxQcmljZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgZGF0YS1jeS1kYXRhPVwiY2hlY2tvdXRcIj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2hlY2tvdXR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2l0ZW1zLmxlbmd0aCA9PT0gMH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtNlwiXG4gICAgICAgID5cbiAgICAgICAgICBDaGVja291dFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3VtbWFyeTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTZWFyY2hQYXJhbXMiLCJCdXR0b24iLCJDdXJyZW5jeSIsInVzZUNhcnQiLCJ0b2FzdCIsIlN1bW1hcnkiLCJzZWFyY2hQYXJhbXMiLCJpdGVtcyIsInN0YXRlIiwiZW1wdHlDYXJ0IiwiZ2V0Iiwic3VjY2VzcyIsImVycm9yIiwidG90YWxQcmljZSIsInJlZHVjZSIsInRvdGFsIiwiaXRlbSIsIk51bWJlciIsInByaWNlIiwicXVhbnRpdHkiLCJvbkNoZWNrb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJkYXRhLWN5IiwidmFsdWUiLCJkYXRhLWN5LWRhdGEiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/(routes)/cart/components/summary.tsx\n"));

/***/ })

});