"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/protected-page",{

/***/ "./pages/protected-page.js":
/*!*********************************!*\
  !*** ./pages/protected-page.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"../../../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst ProtectedPage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [headline, setHeadline] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (router.asPath.includes(\"/admin/login\")) {\n            router.push(\"/login\");\n        }\n    }, []);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3___default().post(\"/api/news\", {\n                image,\n                headline,\n                description\n            });\n            console.log(\"Response:\", response.data);\n            router.push(\"/success-page\");\n        } catch (error) {\n            console.error(\"Error submitting form:\", error);\n            setError(\"Failed to submit form\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Protected Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\news\\\\client\\\\pages\\\\protected-page.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"image\",\n                                children: \"Image URL:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\news\\\\client\\\\pages\\\\protected-page.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"image\",\n                                value: image,\n                                onChange: (e)=>setImage(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\news\\\\client\\\\pages\\\\protected-page.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\news\\\\client\\\\pages\\\\protected-page.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"headline\",\n                                children: \"Headline:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\news\\\\client\\\\pages\\\\protected-page.js\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"headline\",\n                                value: headline,\n                                onChange: (e)=>setHeadline(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\news\\\\client\\\\pages\\\\protected-page.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\news\\\\client\\\\pages\\\\protected-page.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"description\",\n                                children: \"Description:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\news\\\\client\\\\pages\\\\protected-page.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"description\",\n                                value: description,\n                                onChange: (e)=>setDescription(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\news\\\\client\\\\pages\\\\protected-page.js\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\news\\\\client\\\\pages\\\\protected-page.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\news\\\\client\\\\pages\\\\protected-page.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\news\\\\client\\\\pages\\\\protected-page.js\",\n                        lineNumber: 65,\n                        columnNumber: 19\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\news\\\\client\\\\pages\\\\protected-page.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\news\\\\client\\\\pages\\\\protected-page.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProtectedPage, \"asHtOLDuEd8V+Nc5LFK22wtKPx4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ProtectedPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProtectedPage);\nvar _c;\n$RefreshReg$(_c, \"ProtectedPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm90ZWN0ZWQtcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE0QztBQUNKO0FBQ2Q7QUFFMUIsTUFBTUksZ0JBQWdCOztJQUNwQixNQUFNQyxTQUFTSCxzREFBU0E7SUFDeEIsTUFBTSxDQUFDSSxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ08sVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNTLGFBQWFDLGVBQWUsR0FBR1YsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDVyxPQUFPQyxTQUFTLEdBQUdaLCtDQUFRQSxDQUFDO0lBRW5DRCxnREFBU0EsQ0FBQztRQUNSLElBQUlLLE9BQU9TLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLGlCQUFpQjtZQUMxQ1YsT0FBT1csSUFBSSxDQUFDO1FBQ2Q7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNQyxlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1qQixpREFBVSxDQUFDLGFBQWE7Z0JBQzdDRztnQkFDQUU7Z0JBQ0FFO1lBQ0Y7WUFDQVksUUFBUUMsR0FBRyxDQUFDLGFBQWFILFNBQVNJLElBQUk7WUFDdENuQixPQUFPVyxJQUFJLENBQUM7UUFDZCxFQUFFLE9BQU9KLE9BQU87WUFDZFUsUUFBUVYsS0FBSyxDQUFDLDBCQUEwQkE7WUFDeENDLFNBQVM7UUFDWDtJQUNGO0lBRUEscUJBQ0UsOERBQUNZOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUtDLFVBQVVYOztrQ0FDZCw4REFBQ1E7OzBDQUNDLDhEQUFDSTtnQ0FBTUMsU0FBUTswQ0FBUTs7Ozs7OzBDQUN2Qiw4REFBQ0M7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hDLE9BQU81QjtnQ0FDUDZCLFVBQVUsQ0FBQ2pCLElBQU1YLFNBQVNXLEVBQUVrQixNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7OztrQ0FHNUMsOERBQUNUOzswQ0FDQyw4REFBQ0k7Z0NBQU1DLFNBQVE7MENBQVc7Ozs7OzswQ0FDMUIsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMQyxJQUFHO2dDQUNIQyxPQUFPMUI7Z0NBQ1AyQixVQUFVLENBQUNqQixJQUFNVCxZQUFZUyxFQUFFa0IsTUFBTSxDQUFDRixLQUFLOzs7Ozs7Ozs7Ozs7a0NBRy9DLDhEQUFDVDs7MENBQ0MsOERBQUNJO2dDQUFNQyxTQUFROzBDQUFjOzs7Ozs7MENBQzdCLDhEQUFDTztnQ0FDQ0osSUFBRztnQ0FDSEMsT0FBT3hCO2dDQUNQeUIsVUFBVSxDQUFDakIsSUFBTVAsZUFBZU8sRUFBRWtCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7O2tDQUdsRCw4REFBQ0k7d0JBQU9OLE1BQUs7a0NBQVM7Ozs7OztvQkFDckJwQix1QkFBUyw4REFBQzJCO2tDQUFHM0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl0QjtHQWhFTVI7O1FBQ1dGLGtEQUFTQTs7O0tBRHBCRTtBQWtFTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm90ZWN0ZWQtcGFnZS5qcz8wYjkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IFByb3RlY3RlZFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaGVhZGxpbmUsIHNldEhlYWRsaW5lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyb3V0ZXIuYXNQYXRoLmluY2x1ZGVzKFwiL2FkbWluL2xvZ2luXCIpKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvbmV3c1wiLCB7XHJcbiAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgaGVhZGxpbmUsXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlJlc3BvbnNlOlwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgcm91dGVyLnB1c2goXCIvc3VjY2Vzcy1wYWdlXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHN1Ym1pdHRpbmcgZm9ybTpcIiwgZXJyb3IpO1xyXG4gICAgICBzZXRFcnJvcihcIkZhaWxlZCB0byBzdWJtaXQgZm9ybVwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPlByb3RlY3RlZCBQYWdlPC9oMT5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VcIj5JbWFnZSBVUkw6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICB2YWx1ZT17aW1hZ2V9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW1hZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJoZWFkbGluZVwiPkhlYWRsaW5lOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cImhlYWRsaW5lXCJcclxuICAgICAgICAgICAgdmFsdWU9e2hlYWRsaW5lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEhlYWRsaW5lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjo8L2xhYmVsPlxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICB7ZXJyb3IgJiYgPHA+e2Vycm9yfTwvcD59XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm90ZWN0ZWRQYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsIlByb3RlY3RlZFBhZ2UiLCJyb3V0ZXIiLCJpbWFnZSIsInNldEltYWdlIiwiaGVhZGxpbmUiLCJzZXRIZWFkbGluZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJlcnJvciIsInNldEVycm9yIiwiYXNQYXRoIiwiaW5jbHVkZXMiLCJwdXNoIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJkaXYiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInRleHRhcmVhIiwiYnV0dG9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/protected-page.js\n"));

/***/ })

});