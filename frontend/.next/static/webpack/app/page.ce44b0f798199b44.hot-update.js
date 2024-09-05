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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/esm/hooks/useAccount.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/esm/hooks/useReadContract.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_abi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/abi */ \"(app-pages-browser)/./utils/abi.js\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar */ \"(app-pages-browser)/./src/app/components/navbar.js\");\n/* harmony import */ var _components_landingpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/landingpage */ \"(app-pages-browser)/./src/app/components/landingpage.js\");\n/* harmony import */ var _components_eventCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/eventCard */ \"(app-pages-browser)/./src/app/components/eventCard.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null); // Set to false initially, so the drawer is closed by default\n    const { isConnecting } = (0,wagmi__WEBPACK_IMPORTED_MODULE_7__.useAccount)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { data: contractData, isError } = (0,wagmi__WEBPACK_IMPORTED_MODULE_8__.useReadContract)({\n        address: \"0xfde7e2D4a943da48416e2D2607e3396f405E25D7\",\n        abi: _utils_abi__WEBPACK_IMPORTED_MODULE_3__.abi,\n        functionName: \"getAllEvent\"\n    });\n    useEffect(()=>{\n        if (contractData) {\n            setData(contractData);\n            setLoading(false);\n        }\n        if (isError) {\n            setError(\"Error occurred while fetching data\");\n            setLoading(false);\n        }\n    }, [\n        contractData,\n        isError\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/user/Documents/dev/E-ticketing/frontend/src/app/page.js\",\n            lineNumber: 38,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: error\n        }, void 0, false, {\n            fileName: \"/Users/user/Documents/dev/E-ticketing/frontend/src/app/page.js\",\n            lineNumber: 42,\n            columnNumber: 12\n        }, this);\n    }\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/user/Documents/dev/E-ticketing/frontend/src/app/page.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_landingpage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/user/Documents/dev/E-ticketing/frontend/src/app/page.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Documents/dev/E-ticketing/frontend/src/app/page.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n} // import { useQuery } from '@apollo/client';\n // import { gql } from '@apollo/client';\n // import EventCard from '../components/EventCard';\n // const GET_EVENTS = gql`\n //   query GetEvents {\n //     events {\n //       id\n //       name\n //       category\n //       ticketPrice\n //       availableTickets\n //     }\n //   }\n // `;\n // export default function Home() {\n //   const { loading, error, data } = useQuery(GET_EVENTS);\n //   if (loading) return <p>Loading...</p>;\n //   if (error) return <p>Error: {error.message}</p>;\n //   return (\n //     <div>\n //       <h1 className=\"text-3xl font-bold mb-4\">Upcoming Events</h1>\n //       <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n //         {data.events.map((event) => (\n //           <EventCard key={event.id} event={event} />\n //         ))}\n //       </div>\n //     </div>\n //   );\n // }\n_s(Home, \"+jcQMRFxR0V2amYDxgXsvRHoyiU=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_7__.useAccount,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        wagmi__WEBPACK_IMPORTED_MODULE_8__.useReadContract\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRW9EO0FBQ1I7QUFDWDtBQUNLO0FBRUc7QUFDVTtBQUNKO0FBRWhDLFNBQVNROztJQUN0QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDUSxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1UsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQyxPQUFPLDZEQUE2RDtJQUN2RyxNQUFNLEVBQUVZLFlBQVksRUFBRSxHQUFHZixpREFBVUE7SUFDbkMsTUFBTWdCLFNBQVNkLDBEQUFTQTtJQUV4QixNQUFNLEVBQUVTLE1BQU1NLFlBQVksRUFBRUMsT0FBTyxFQUFFLEdBQUdqQixzREFBZUEsQ0FBQztRQUN0RGtCLFNBQVM7UUFDVGYsR0FBR0EsNkNBQUFBO1FBQ0hnQixjQUFjO0lBQ2hCO0lBRUFDLFVBQVU7UUFDUixJQUFJSixjQUFjO1lBQ2hCTCxRQUFRSztZQUNSUCxXQUFXO1FBQ2I7UUFFQSxJQUFJUSxTQUFTO1lBQ1hKLFNBQVM7WUFDVEosV0FBVztRQUNiO0lBQ0YsR0FBRztRQUFDTztRQUFjQztLQUFRO0lBRTFCLElBQUlULFNBQVM7UUFDWCxxQkFBTyw4REFBQ2E7c0JBQUk7Ozs7OztJQUNkO0lBRUEsSUFBSVQsT0FBTztRQUNULHFCQUFPLDhEQUFDUztzQkFBS1Q7Ozs7OztJQUNmO0lBRUFVLFFBQVFDLEdBQUcsQ0FBQ2I7SUFFWixxQkFDRSw4REFBQ1c7OzBCQUNDLDhEQUFDakIsMERBQU1BOzs7OzswQkFDUCw4REFBQ0MsK0RBQVdBOzs7Ozs7Ozs7OztBQVVsQixFQUVBLDZDQUE2QztDQUM3Qyx3Q0FBd0M7Q0FDeEMsbURBQW1EO0NBRW5ELDBCQUEwQjtDQUMxQixzQkFBc0I7Q0FDdEIsZUFBZTtDQUNmLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLG9CQUFvQjtDQUNwQix5QkFBeUI7Q0FDekIsUUFBUTtDQUNSLE1BQU07Q0FDTixLQUFLO0NBRUwsbUNBQW1DO0NBQ25DLDJEQUEyRDtDQUUzRCwyQ0FBMkM7Q0FDM0MscURBQXFEO0NBRXJELGFBQWE7Q0FDYixZQUFZO0NBQ1oscUVBQXFFO0NBQ3JFLCtFQUErRTtDQUMvRSx3Q0FBd0M7Q0FDeEMsdURBQXVEO0NBQ3ZELGNBQWM7Q0FDZCxlQUFlO0NBQ2YsYUFBYTtDQUNiLE9BQU87Q0FDUCxJQUFJO0dBbEZvQkU7O1FBSUdSLDZDQUFVQTtRQUNwQkUsc0RBQVNBO1FBRWdCRCxrREFBZUE7OztLQVBqQ08iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUFjY291bnQsIHVzZVJlYWRDb250cmFjdCB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGFiaSB9IGZyb20gXCIuLi8uLi91dGlscy9hYmlcIjtcblxuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi9jb21wb25lbnRzL25hdmJhclwiO1xuaW1wb3J0IExhbmRpbmdQYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvbGFuZGluZ3BhZ2VcIjtcbmltcG9ydCBFdmVudENhcmQgZnJvbSBcIi4vY29tcG9uZW50cy9ldmVudENhcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpOyAvLyBTZXQgdG8gZmFsc2UgaW5pdGlhbGx5LCBzbyB0aGUgZHJhd2VyIGlzIGNsb3NlZCBieSBkZWZhdWx0XG4gIGNvbnN0IHsgaXNDb25uZWN0aW5nIH0gPSB1c2VBY2NvdW50KCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHsgZGF0YTogY29udHJhY3REYXRhLCBpc0Vycm9yIH0gPSB1c2VSZWFkQ29udHJhY3Qoe1xuICAgIGFkZHJlc3M6IFwiMHhmZGU3ZTJENGE5NDNkYTQ4NDE2ZTJEMjYwN2UzMzk2ZjQwNUUyNUQ3XCIsXG4gICAgYWJpLFxuICAgIGZ1bmN0aW9uTmFtZTogXCJnZXRBbGxFdmVudFwiLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb250cmFjdERhdGEpIHtcbiAgICAgIHNldERhdGEoY29udHJhY3REYXRhKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cblxuICAgIGlmIChpc0Vycm9yKSB7XG4gICAgICBzZXRFcnJvcihcIkVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIGRhdGFcIik7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtjb250cmFjdERhdGEsIGlzRXJyb3JdKTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPGRpdj57ZXJyb3J9PC9kaXY+O1xuICB9XG5cbiAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPE5hdkJhciAvPlxuICAgICAgPExhbmRpbmdQYWdlIC8+XG5cbiAgICAgIHsvKiA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTRcIj5VcGNvbWluZyBFdmVudHM8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICAgIHtldmVudHMubWFwKChldmVudCkgPT4gKFxuICAgICAgICAgIDxFdmVudENhcmQga2V5PXtldmVudC5pZH0gZXZlbnQ9e2V2ZW50fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8gaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG4vLyBpbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG4vLyBpbXBvcnQgRXZlbnRDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvRXZlbnRDYXJkJztcblxuLy8gY29uc3QgR0VUX0VWRU5UUyA9IGdxbGBcbi8vICAgcXVlcnkgR2V0RXZlbnRzIHtcbi8vICAgICBldmVudHMge1xuLy8gICAgICAgaWRcbi8vICAgICAgIG5hbWVcbi8vICAgICAgIGNhdGVnb3J5XG4vLyAgICAgICB0aWNrZXRQcmljZVxuLy8gICAgICAgYXZhaWxhYmxlVGlja2V0c1xuLy8gICAgIH1cbi8vICAgfVxuLy8gYDtcblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbi8vICAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX0VWRU5UUyk7XG5cbi8vICAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbi8vICAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD47XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2PlxuLy8gICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi00XCI+VXBjb21pbmcgRXZlbnRzPC9oMT5cbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNFwiPlxuLy8gICAgICAgICB7ZGF0YS5ldmVudHMubWFwKChldmVudCkgPT4gKFxuLy8gICAgICAgICAgIDxFdmVudENhcmQga2V5PXtldmVudC5pZH0gZXZlbnQ9e2V2ZW50fSAvPlxuLy8gICAgICAgICApKX1cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfVxuIl0sIm5hbWVzIjpbInVzZUFjY291bnQiLCJ1c2VSZWFkQ29udHJhY3QiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImFiaSIsIk5hdkJhciIsIkxhbmRpbmdQYWdlIiwiRXZlbnRDYXJkIiwiSG9tZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YSIsInNldERhdGEiLCJlcnJvciIsInNldEVycm9yIiwiaXNDb25uZWN0aW5nIiwicm91dGVyIiwiY29udHJhY3REYXRhIiwiaXNFcnJvciIsImFkZHJlc3MiLCJmdW5jdGlvbk5hbWUiLCJ1c2VFZmZlY3QiLCJkaXYiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});