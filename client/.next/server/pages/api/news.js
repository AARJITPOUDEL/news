/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/news";
exports.ids = ["pages/api/news"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/../models/News.js":
/*!*************************!*\
  !*** ../models/News.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\n\r\nconst newsSchema = new mongoose.Schema({\r\n  image: String,\r\n  headline: String,\r\n  description: String,\r\n});\r\n\r\nconst News = mongoose.model(\"News\", newsSchema);\r\n\r\nmodule.exports = News;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi4vbW9kZWxzL05ld3MuanMiLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCLG1CQUFPLENBQUMsMEJBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uLi9tb2RlbHMvTmV3cy5qcz9hYjNiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xyXG5cclxuY29uc3QgbmV3c1NjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIGltYWdlOiBTdHJpbmcsXHJcbiAgaGVhZGxpbmU6IFN0cmluZyxcclxuICBkZXNjcmlwdGlvbjogU3RyaW5nLFxyXG59KTtcclxuXHJcbmNvbnN0IE5ld3MgPSBtb25nb29zZS5tb2RlbChcIk5ld3NcIiwgbmV3c1NjaGVtYSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE5ld3M7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/../models/News.js\n");

/***/ }),

/***/ "(api)/../node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fnews&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cnews.js&middlewareConfigBase64=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fnews&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cnews.js&middlewareConfigBase64=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/../node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/../node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/../node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_news_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\news.js */ \"(api)/./pages/api/news.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_news_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_news_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/news\",\n        pathname: \"/api/news\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_news_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1yb3V0ZS1sb2FkZXIvaW5kZXguanM/a2luZD1QQUdFU19BUEkmcGFnZT0lMkZhcGklMkZuZXdzJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGcGFnZXMlNUNhcGklNUNuZXdzLmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQ2tEO0FBQ2xEO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQywrQ0FBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsK0NBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Lz8yNTM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlc1xcXFxhcGlcXFxcbmV3cy5qc1wiO1xuLy8gUmUtZXhwb3J0IHRoZSBoYW5kbGVyIChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCBcImRlZmF1bHRcIik7XG4vLyBSZS1leHBvcnQgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCBcImNvbmZpZ1wiKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL25ld3NcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9uZXdzXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogXCJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiXCJcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/../node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fnews&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cnews.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./pages/api/news.js":
/*!***************************!*\
  !*** ./pages/api/news.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dbConnect */ \"(api)/../utils/dbConnect.js\");\n/* harmony import */ var _models_News__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/News */ \"(api)/../models/News.js\");\n/* harmony import */ var _models_News__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_News__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    await (0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (req.method === \"POST\") {\n        try {\n            const { image, headline, description } = req.body;\n            if (!image || !headline || !description) {\n                return res.status(400).json({\n                    success: false,\n                    message: \"Missing required fields\"\n                });\n            }\n            const news = new (_models_News__WEBPACK_IMPORTED_MODULE_1___default())({\n                image,\n                headline,\n                description\n            });\n            await news.save();\n            res.status(201).json({\n                success: true,\n                data: news\n            });\n        } catch (error) {\n            console.error(error);\n            res.status(500).json({\n                success: false,\n                message: \"Internal server error\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            success: false,\n            message: \"Method not allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWlEO0FBQ1Q7QUFFekIsZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLE1BQU1KLDREQUFTQTtJQUVmLElBQUlHLElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLElBQUk7WUFDRixNQUFNLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUUsR0FBR0wsSUFBSU0sSUFBSTtZQUVqRCxJQUFJLENBQUNILFNBQVMsQ0FBQ0MsWUFBWSxDQUFDQyxhQUFhO2dCQUN2QyxPQUFPSixJQUNKTSxNQUFNLENBQUMsS0FDUEMsSUFBSSxDQUFDO29CQUFFQyxTQUFTO29CQUFPQyxTQUFTO2dCQUEwQjtZQUMvRDtZQUVBLE1BQU1DLE9BQU8sSUFBSWIscURBQUlBLENBQUM7Z0JBQUVLO2dCQUFPQztnQkFBVUM7WUFBWTtZQUNyRCxNQUFNTSxLQUFLQyxJQUFJO1lBQ2ZYLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7Z0JBQU1JLE1BQU1GO1lBQUs7UUFDbkQsRUFBRSxPQUFPRyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7WUFDZGIsSUFDR00sTUFBTSxDQUFDLEtBQ1BDLElBQUksQ0FBQztnQkFBRUMsU0FBUztnQkFBT0MsU0FBUztZQUF3QjtRQUM3RDtJQUNGLE9BQU87UUFDTFQsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1lBQU9DLFNBQVM7UUFBcUI7SUFDdkU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2FwaS9uZXdzLmpzP2FjZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZGJDb25uZWN0XCI7XHJcbmltcG9ydCBOZXdzIGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvTmV3c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG5cclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgaW1hZ2UsIGhlYWRsaW5lLCBkZXNjcmlwdGlvbiB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgICBpZiAoIWltYWdlIHx8ICFoZWFkbGluZSB8fCAhZGVzY3JpcHRpb24pIHtcclxuICAgICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgICAuc3RhdHVzKDQwMClcclxuICAgICAgICAgIC5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiTWlzc2luZyByZXF1aXJlZCBmaWVsZHNcIiB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbmV3cyA9IG5ldyBOZXdzKHsgaW1hZ2UsIGhlYWRsaW5lLCBkZXNjcmlwdGlvbiB9KTtcclxuICAgICAgYXdhaXQgbmV3cy5zYXZlKCk7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbmV3cyB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICByZXNcclxuICAgICAgICAuc3RhdHVzKDUwMClcclxuICAgICAgICAuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkludGVybmFsIHNlcnZlciBlcnJvclwiIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIk1ldGhvZCBub3QgYWxsb3dlZFwiIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZGJDb25uZWN0IiwiTmV3cyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJpbWFnZSIsImhlYWRsaW5lIiwiZGVzY3JpcHRpb24iLCJib2R5Iiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwibmV3cyIsInNhdmUiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/news.js\n");

/***/ }),

/***/ "(api)/../utils/dbConnect.js":
/*!*****************************!*\
  !*** ../utils/dbConnect.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst connection = {};\r\n\r\nasync function dbConnect() {\r\n  if (connection.isConnected) {\r\n    return;\r\n  }\r\n\r\n  try {\r\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {\r\n      useNewUrlParser: true,\r\n      useUnifiedTopology: true,\r\n      useFindAndModify: false,\r\n      useCreateIndex: true,\r\n    });\r\n    connection.isConnected = db.connections[0].readyState;\r\n    console.log(\"Connected to MongoDB\");\r\n  } catch (error) {\r\n    console.error(\"Error connecting to MongoDB:\", error);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi4vdXRpbHMvZGJDb25uZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsdURBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi4vdXRpbHMvZGJDb25uZWN0LmpzPzM5YjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgY29ubmVjdGlvbiA9IHt9O1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xyXG4gIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLCB7XHJcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcclxuICAgICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXHJcbiAgICB9KTtcclxuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG4gICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gTW9uZ29EQlwiKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gTW9uZ29EQjpcIiwgZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/../utils/dbConnect.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/../node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fnews&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cnews.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();