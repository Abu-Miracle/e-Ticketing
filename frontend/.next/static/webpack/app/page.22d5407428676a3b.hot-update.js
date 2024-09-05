"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/esm/hooks/useAccount.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/esm/hooks/useReadContract.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_abi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/abi */ \"(app-pages-browser)/./utils/abi.js\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar */ \"(app-pages-browser)/./src/app/components/navbar.js\");\n/* harmony import */ var _components_landingpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/landingpage */ \"(app-pages-browser)/./src/app/components/landingpage.js\");\n/* harmony import */ var _components_eventCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/eventCard */ \"(app-pages-browser)/./src/app/components/eventCard.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null); // Set to false initially, so the drawer is closed by default\n    const { isConnecting } = (0,wagmi__WEBPACK_IMPORTED_MODULE_7__.useAccount)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { data: contractData, isError } = (0,wagmi__WEBPACK_IMPORTED_MODULE_8__.useReadContract)({\n        address: \"0xfde7e2D4a943da48416e2D2607e3396f405E25D7\",\n        abi: _utils_abi__WEBPACK_IMPORTED_MODULE_3__.abi,\n        functionName: \"getAllEvent\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (contractData) {\n            setData(contractData);\n            setLoading(false);\n        }\n        if (isError) {\n            setError(\"Error occurred while fetching data\");\n            setLoading(false);\n        }\n    }, [\n        contractData,\n        isError\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/user/Documents/dev/E-ticketing/frontend/src/app/page.js\",\n            lineNumber: 39,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: error\n        }, void 0, false, {\n            fileName: \"/Users/user/Documents/dev/E-ticketing/frontend/src/app/page.js\",\n            lineNumber: 43,\n            columnNumber: 12\n        }, this);\n    }\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/user/Documents/dev/E-ticketing/frontend/src/app/page.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_landingpage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/user/Documents/dev/E-ticketing/frontend/src/app/page.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-1 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-bold mb-4\",\n                        children: \"Upcoming Events\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/dev/E-ticketing/frontend/src/app/page.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\",\n                        children: data.map((event)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_eventCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                event: event\n                            }, event.id, false, {\n                                fileName: \"/Users/user/Documents/dev/E-ticketing/frontend/src/app/page.js\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/dev/E-ticketing/frontend/src/app/page.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/dev/E-ticketing/frontend/src/app/page.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Documents/dev/E-ticketing/frontend/src/app/page.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n} // import { useQuery } from '@apollo/client';\n // import { gql } from '@apollo/client';\n // import EventCard from '../components/EventCard';\n // const GET_EVENTS = gql`\n //   query GetEvents {\n //     events {\n //       id\n //       name\n //       category\n //       ticketPrice\n //       availableTickets\n //     }\n //   }\n // `;\n // export default function Home() {\n //   const { loading, error, data } = useQuery(GET_EVENTS);\n //   if (loading) return <p>Loading...</p>;\n //   if (error) return <p>Error: {error.message}</p>;\n //   return (\n //     <div>\n //       <h1 className=\"text-3xl font-bold mb-4\">Upcoming Events</h1>\n //       <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n //         {data.events.map((event) => (\n //           <EventCard key={event.id} event={event} />\n //         ))}\n //       </div>\n //     </div>\n //   );\n // }\n_s(Home, \"+jcQMRFxR0V2amYDxgXsvRHoyiU=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_7__.useAccount,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        wagmi__WEBPACK_IMPORTED_MODULE_8__.useReadContract\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRW9EO0FBQ1I7QUFDWDtBQUNDO0FBQ0k7QUFFRztBQUNVO0FBQ0o7QUFFaEMsU0FBU1M7O0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNTLE1BQU1DLFFBQVEsR0FBR1YsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDVyxPQUFPQyxTQUFTLEdBQUdaLCtDQUFRQSxDQUFDLE9BQU8sNkRBQTZEO0lBQ3ZHLE1BQU0sRUFBRWEsWUFBWSxFQUFFLEdBQUdoQixpREFBVUE7SUFDbkMsTUFBTWlCLFNBQVNmLDBEQUFTQTtJQUV4QixNQUFNLEVBQUVVLE1BQU1NLFlBQVksRUFBRUMsT0FBTyxFQUFFLEdBQUdsQixzREFBZUEsQ0FBQztRQUN0RG1CLFNBQVM7UUFDVGYsR0FBR0EsNkNBQUFBO1FBQ0hnQixjQUFjO0lBQ2hCO0lBRUFqQixnREFBU0EsQ0FBQztRQUNSLElBQUljLGNBQWM7WUFDaEJMLFFBQVFLO1lBQ1JQLFdBQVc7UUFDYjtRQUVBLElBQUlRLFNBQVM7WUFDWEosU0FBUztZQUNUSixXQUFXO1FBQ2I7SUFDRixHQUFHO1FBQUNPO1FBQWNDO0tBQVE7SUFFMUIsSUFBSVQsU0FBUztRQUNYLHFCQUFPLDhEQUFDWTtzQkFBSTs7Ozs7O0lBQ2Q7SUFFQSxJQUFJUixPQUFPO1FBQ1QscUJBQU8sOERBQUNRO3NCQUFLUjs7Ozs7O0lBQ2Y7SUFFQVMsUUFBUUMsR0FBRyxDQUFDWjtJQUVaLHFCQUNFLDhEQUFDVTs7MEJBQ0MsOERBQUNoQiwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDQywrREFBV0E7Ozs7OzBCQUVaLDhEQUFDZTtnQkFBSUcsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUEwQjs7Ozs7O2tDQUN4Qyw4REFBQ0g7d0JBQUlHLFdBQVU7a0NBQ1piLEtBQUtlLEdBQUcsQ0FBQyxDQUFDQyxzQkFDVCw4REFBQ3BCLDZEQUFTQTtnQ0FBZ0JvQixPQUFPQTsrQkFBakJBLE1BQU1DLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEMsRUFFQSw2Q0FBNkM7Q0FDN0Msd0NBQXdDO0NBQ3hDLG1EQUFtRDtDQUVuRCwwQkFBMEI7Q0FDMUIsc0JBQXNCO0NBQ3RCLGVBQWU7Q0FDZixXQUFXO0NBQ1gsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixvQkFBb0I7Q0FDcEIseUJBQXlCO0NBQ3pCLFFBQVE7Q0FDUixNQUFNO0NBQ04sS0FBSztDQUVMLG1DQUFtQztDQUNuQywyREFBMkQ7Q0FFM0QsMkNBQTJDO0NBQzNDLHFEQUFxRDtDQUVyRCxhQUFhO0NBQ2IsWUFBWTtDQUNaLHFFQUFxRTtDQUNyRSwrRUFBK0U7Q0FDL0Usd0NBQXdDO0NBQ3hDLHVEQUF1RDtDQUN2RCxjQUFjO0NBQ2QsZUFBZTtDQUNmLGFBQWE7Q0FDYixPQUFPO0NBQ1AsSUFBSTtHQXBGb0JwQjs7UUFJR1QsNkNBQVVBO1FBQ3BCRSxzREFBU0E7UUFFZ0JELGtEQUFlQTs7O0tBUGpDUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlQWNjb3VudCwgdXNlUmVhZENvbnRyYWN0IH0gZnJvbSBcIndhZ21pXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhYmkgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYWJpXCI7XG5cbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4vY29tcG9uZW50cy9uYXZiYXJcIjtcbmltcG9ydCBMYW5kaW5nUGFnZSBmcm9tIFwiLi9jb21wb25lbnRzL2xhbmRpbmdwYWdlXCI7XG5pbXBvcnQgRXZlbnRDYXJkIGZyb20gXCIuL2NvbXBvbmVudHMvZXZlbnRDYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTsgLy8gU2V0IHRvIGZhbHNlIGluaXRpYWxseSwgc28gdGhlIGRyYXdlciBpcyBjbG9zZWQgYnkgZGVmYXVsdFxuICBjb25zdCB7IGlzQ29ubmVjdGluZyB9ID0gdXNlQWNjb3VudCgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCB7IGRhdGE6IGNvbnRyYWN0RGF0YSwgaXNFcnJvciB9ID0gdXNlUmVhZENvbnRyYWN0KHtcbiAgICBhZGRyZXNzOiBcIjB4ZmRlN2UyRDRhOTQzZGE0ODQxNmUyRDI2MDdlMzM5NmY0MDVFMjVEN1wiLFxuICAgIGFiaSxcbiAgICBmdW5jdGlvbk5hbWU6IFwiZ2V0QWxsRXZlbnRcIixcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29udHJhY3REYXRhKSB7XG4gICAgICBzZXREYXRhKGNvbnRyYWN0RGF0YSk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAoaXNFcnJvcikge1xuICAgICAgc2V0RXJyb3IoXCJFcnJvciBvY2N1cnJlZCB3aGlsZSBmZXRjaGluZyBkYXRhXCIpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9LCBbY29udHJhY3REYXRhLCBpc0Vycm9yXSk7XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxkaXY+e2Vycm9yfTwvZGl2PjtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxOYXZCYXIgLz5cbiAgICAgIDxMYW5kaW5nUGFnZSAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbXQtMTAgZ3JpZCBtYXgtdy0yeGwgZ3JpZC1jb2xzLTEgZ2FwLXgtOCBnYXAteS0xNiBib3JkZXItdCBib3JkZXItZ3JheS0yMDAgcHQtMSBzbTptdC04IHNtOnB0LTggbGc6bXgtMCBsZzptYXgtdy1ub25lIGxnOmdyaWQtY29scy0zXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNFwiPlVwY29taW5nIEV2ZW50czwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNFwiPlxuICAgICAgICAgIHtkYXRhLm1hcCgoZXZlbnQpID0+IChcbiAgICAgICAgICAgIDxFdmVudENhcmQga2V5PXtldmVudC5pZH0gZXZlbnQ9e2V2ZW50fSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyBpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50Jztcbi8vIGltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50Jztcbi8vIGltcG9ydCBFdmVudENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9FdmVudENhcmQnO1xuXG4vLyBjb25zdCBHRVRfRVZFTlRTID0gZ3FsYFxuLy8gICBxdWVyeSBHZXRFdmVudHMge1xuLy8gICAgIGV2ZW50cyB7XG4vLyAgICAgICBpZFxuLy8gICAgICAgbmFtZVxuLy8gICAgICAgY2F0ZWdvcnlcbi8vICAgICAgIHRpY2tldFByaWNlXG4vLyAgICAgICBhdmFpbGFibGVUaWNrZXRzXG4vLyAgICAgfVxuLy8gICB9XG4vLyBgO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuLy8gICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfRVZFTlRTKTtcblxuLy8gICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuLy8gICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXY+XG4vLyAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTRcIj5VcGNvbWluZyBFdmVudHM8L2gxPlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC00XCI+XG4vLyAgICAgICAgIHtkYXRhLmV2ZW50cy5tYXAoKGV2ZW50KSA9PiAoXG4vLyAgICAgICAgICAgPEV2ZW50Q2FyZCBrZXk9e2V2ZW50LmlkfSBldmVudD17ZXZlbnR9IC8+XG4vLyAgICAgICAgICkpfVxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9XG4iXSwibmFtZXMiOlsidXNlQWNjb3VudCIsInVzZVJlYWRDb250cmFjdCIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYWJpIiwiTmF2QmFyIiwiTGFuZGluZ1BhZ2UiLCJFdmVudENhcmQiLCJIb21lIiwibG9hZGluZyIsInNldExvYWRpbmciLCJkYXRhIiwic2V0RGF0YSIsImVycm9yIiwic2V0RXJyb3IiLCJpc0Nvbm5lY3RpbmciLCJyb3V0ZXIiLCJjb250cmFjdERhdGEiLCJpc0Vycm9yIiwiYWRkcmVzcyIsImZ1bmN0aW9uTmFtZSIsImRpdiIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsImV2ZW50IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});