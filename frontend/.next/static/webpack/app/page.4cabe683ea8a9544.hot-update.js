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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductCard */ \"(app-pages-browser)/./src/components/ProductCard.tsx\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ \"(app-pages-browser)/./src/components/Navbar.tsx\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SearchBar */ \"(app-pages-browser)/./src/components/SearchBar.tsx\");\n/* harmony import */ var _components_CategoryTabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CategoryTabs */ \"(app-pages-browser)/./src/components/CategoryTabs.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selectedChurch, setSelectedChurch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch the products from the backend\n        const fetchProducts = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:5000/api/products\");\n                const data = await response.json();\n                setProducts(data);\n            } catch (error) {\n                console.error(\"Error fetching products:\", error);\n            }\n        };\n        fetchProducts();\n    }, []);\n    // Get unique church names\n    const churchNames = Array.from(new Set(products.map((product)=>product.churchName)));\n    // Filter products by search query and selected church\n    const filteredProducts = products.filter((product)=>{\n        const matchesSearchQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase());\n        const matchesChurch = selectedChurch ? product.churchName === selectedChurch : true;\n        return matchesSearchQuery && matchesChurch;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__.Navbar, {}, void 0, false, {\n                fileName: \"/Users/garrettbollenbacher/projects/churchmerch/churchmerch/frontend/src/app/page.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container mx-auto px-4 py-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_4__.SearchBar, {\n                            onSearch: setSearchQuery\n                        }, void 0, false, {\n                            fileName: \"/Users/garrettbollenbacher/projects/churchmerch/churchmerch/frontend/src/app/page.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/garrettbollenbacher/projects/churchmerch/churchmerch/frontend/src/app/page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CategoryTabs__WEBPACK_IMPORTED_MODULE_5__.CategoryTabs, {\n                        categories: churchNames,\n                        selectedCategory: selectedChurch,\n                        onSelectCategory: setSelectedChurch\n                    }, void 0, false, {\n                        fileName: \"/Users/garrettbollenbacher/projects/churchmerch/churchmerch/frontend/src/app/page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8\",\n                        children: filteredProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCard__WEBPACK_IMPORTED_MODULE_2__.ProductCard, {\n                                product: product\n                            }, product.id, false, {\n                                fileName: \"/Users/garrettbollenbacher/projects/churchmerch/churchmerch/frontend/src/app/page.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/garrettbollenbacher/projects/churchmerch/churchmerch/frontend/src/app/page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    filteredProducts.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center text-gray-500 mt-8\",\n                        children: \"No products found. Try adjusting your search or filters.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/garrettbollenbacher/projects/churchmerch/churchmerch/frontend/src/app/page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/garrettbollenbacher/projects/churchmerch/churchmerch/frontend/src/app/page.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/garrettbollenbacher/projects/churchmerch/churchmerch/frontend/src/app/page.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"4RPXBifS9EDPe5DchTg0fh4Ep8c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUU0QztBQUVZO0FBQ1Y7QUFDTTtBQUNNO0FBRTNDLFNBQVNNOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQVksRUFBRTtJQUN0RCxNQUFNLENBQUNTLGFBQWFDLGVBQWUsR0FBR1YsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDVyxnQkFBZ0JDLGtCQUFrQixHQUFHWiwrQ0FBUUEsQ0FBQztJQUVyREMsZ0RBQVNBLENBQUM7UUFDUixzQ0FBc0M7UUFDdEMsTUFBTVksZ0JBQWdCO1lBQ3BCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO2dCQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7Z0JBQ2hDVCxZQUFZUTtZQUNkLEVBQUUsT0FBT0UsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLDRCQUE0QkE7WUFDNUM7UUFDRjtRQUVBTDtJQUNGLEdBQUcsRUFBRTtJQUVMLDBCQUEwQjtJQUMxQixNQUFNTyxjQUFjQyxNQUFNQyxJQUFJLENBQzVCLElBQUlDLElBQUloQixTQUFTaUIsR0FBRyxDQUFDLENBQUNDLFVBQVlBLFFBQVFDLFVBQVU7SUFHdEQsc0RBQXNEO0lBQ3RELE1BQU1DLG1CQUFtQnBCLFNBQVNxQixNQUFNLENBQUMsQ0FBQ0g7UUFDeEMsTUFBTUkscUJBQXFCSixRQUFRSyxJQUFJLENBQ3BDQyxXQUFXLEdBQ1hDLFFBQVEsQ0FBQ3ZCLFlBQVlzQixXQUFXO1FBQ25DLE1BQU1FLGdCQUFnQnRCLGlCQUNsQmMsUUFBUUMsVUFBVSxLQUFLZixpQkFDdkI7UUFDSixPQUFPa0Isc0JBQXNCSTtJQUMvQjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ2hDLHNEQUFNQTs7Ozs7MEJBQ1AsOERBQUNpQztnQkFBS0QsV0FBVTs7a0NBQ2QsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDL0IsNERBQVNBOzRCQUFDaUMsVUFBVTNCOzs7Ozs7Ozs7OztrQ0FFdkIsOERBQUNMLGtFQUFZQTt3QkFDWGlDLFlBQVlsQjt3QkFDWm1CLGtCQUFrQjVCO3dCQUNsQjZCLGtCQUFrQjVCOzs7Ozs7a0NBRXBCLDhEQUFDc0I7d0JBQUlDLFdBQVU7a0NBQ1pSLGlCQUFpQkgsR0FBRyxDQUFDLENBQUNDLHdCQUNyQiw4REFBQ3ZCLGdFQUFXQTtnQ0FBa0J1QixTQUFTQTsrQkFBckJBLFFBQVFnQixFQUFFOzs7Ozs7Ozs7O29CQUcvQmQsaUJBQWlCZSxNQUFNLEtBQUssbUJBQzNCLDhEQUFDUjt3QkFBSUMsV0FBVTtrQ0FBaUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8xRDtHQTdEd0I3QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vdHlwZXMvUHJvZHVjdFwiO1xuaW1wb3J0IHsgUHJvZHVjdENhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9kdWN0Q2FyZFwiO1xuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hCYXJcIjtcbmltcG9ydCB7IENhdGVnb3J5VGFicyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NhdGVnb3J5VGFic1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlPFByb2R1Y3RbXT4oW10pO1xuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2VsZWN0ZWRDaHVyY2gsIHNldFNlbGVjdGVkQ2h1cmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gRmV0Y2ggdGhlIHByb2R1Y3RzIGZyb20gdGhlIGJhY2tlbmRcbiAgICBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvcHJvZHVjdHNcIik7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldFByb2R1Y3RzKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHByb2R1Y3RzOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoUHJvZHVjdHMoKTtcbiAgfSwgW10pO1xuXG4gIC8vIEdldCB1bmlxdWUgY2h1cmNoIG5hbWVzXG4gIGNvbnN0IGNodXJjaE5hbWVzID0gQXJyYXkuZnJvbShcbiAgICBuZXcgU2V0KHByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdC5jaHVyY2hOYW1lKSlcbiAgKTtcblxuICAvLyBGaWx0ZXIgcHJvZHVjdHMgYnkgc2VhcmNoIHF1ZXJ5IGFuZCBzZWxlY3RlZCBjaHVyY2hcbiAgY29uc3QgZmlsdGVyZWRQcm9kdWN0cyA9IHByb2R1Y3RzLmZpbHRlcigocHJvZHVjdCkgPT4ge1xuICAgIGNvbnN0IG1hdGNoZXNTZWFyY2hRdWVyeSA9IHByb2R1Y3QubmFtZVxuICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgIC5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKTtcbiAgICBjb25zdCBtYXRjaGVzQ2h1cmNoID0gc2VsZWN0ZWRDaHVyY2hcbiAgICAgID8gcHJvZHVjdC5jaHVyY2hOYW1lID09PSBzZWxlY3RlZENodXJjaFxuICAgICAgOiB0cnVlO1xuICAgIHJldHVybiBtYXRjaGVzU2VhcmNoUXVlcnkgJiYgbWF0Y2hlc0NodXJjaDtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTEwMFwiPlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBweS04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICAgIDxTZWFyY2hCYXIgb25TZWFyY2g9e3NldFNlYXJjaFF1ZXJ5fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPENhdGVnb3J5VGFic1xuICAgICAgICAgIGNhdGVnb3JpZXM9e2NodXJjaE5hbWVzfVxuICAgICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnk9e3NlbGVjdGVkQ2h1cmNofVxuICAgICAgICAgIG9uU2VsZWN0Q2F0ZWdvcnk9e3NldFNlbGVjdGVkQ2h1cmNofVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgZ2FwLTYgbXQtOFwiPlxuICAgICAgICAgIHtmaWx0ZXJlZFByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgICAgPFByb2R1Y3RDYXJkIGtleT17cHJvZHVjdC5pZH0gcHJvZHVjdD17cHJvZHVjdH0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtmaWx0ZXJlZFByb2R1Y3RzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNTAwIG10LThcIj5cbiAgICAgICAgICAgIE5vIHByb2R1Y3RzIGZvdW5kLiBUcnkgYWRqdXN0aW5nIHlvdXIgc2VhcmNoIG9yIGZpbHRlcnMuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQcm9kdWN0Q2FyZCIsIk5hdmJhciIsIlNlYXJjaEJhciIsIkNhdGVnb3J5VGFicyIsIkhvbWUiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInNlbGVjdGVkQ2h1cmNoIiwic2V0U2VsZWN0ZWRDaHVyY2giLCJmZXRjaFByb2R1Y3RzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiY2h1cmNoTmFtZXMiLCJBcnJheSIsImZyb20iLCJTZXQiLCJtYXAiLCJwcm9kdWN0IiwiY2h1cmNoTmFtZSIsImZpbHRlcmVkUHJvZHVjdHMiLCJmaWx0ZXIiLCJtYXRjaGVzU2VhcmNoUXVlcnkiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIm1hdGNoZXNDaHVyY2giLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwib25TZWFyY2giLCJjYXRlZ29yaWVzIiwic2VsZWN0ZWRDYXRlZ29yeSIsIm9uU2VsZWN0Q2F0ZWdvcnkiLCJpZCIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});