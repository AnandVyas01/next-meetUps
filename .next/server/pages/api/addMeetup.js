"use strict";
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
exports.id = "pages/api/addMeetup";
exports.ids = ["pages/api/addMeetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/addMeetup.js":
/*!********************************!*\
  !*** ./pages/api/addMeetup.js ***!
  \********************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _mongo = __webpack_require__(/*! ../../utils/mongo */ \"(api)/./utils/mongo.js\");\nasync function handler(req, res) {\n    try {\n        if (req.method === \"POST\") {\n            const { db , client  } = await (0, _mongo.connectMongoDB)();\n            const Meetup = db.collection(\"meetUp\");\n            await Meetup.insertOne(req.body);\n            client.close();\n            res.status(201).json({\n                message: \"MEETUP created successfully.\"\n            });\n        }\n    } catch (error) {\n        res.status(400).json({\n            message: \"An error occured.\" + error.message\n        });\n    }\n}\nmodule.exports = handler;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkTWVldHVwLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBOzs7O21DQUErQixpREFBbUI7QUFFbEQsZUFBZUEsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMvQixJQUFJO1FBQ0YsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1lBQ3pCLE1BQU0sRUFBRUMsRUFBRSxHQUFFQyxNQUFNLEdBQUUsR0FBRyxNQUFNQyxJQUFBQSxNQUFjLGtCQUFFO1lBQzdDLE1BQU1DLE1BQU0sR0FBR0gsRUFBRSxDQUFDSSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBRXRDLE1BQU1ELE1BQU0sQ0FBQ0UsU0FBUyxDQUFDUixHQUFHLENBQUNTLElBQUksQ0FBQyxDQUFDO1lBRWpDTCxNQUFNLENBQUNNLEtBQUssRUFBRSxDQUFDO1lBQ2ZULEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU8sRUFBRSw4QkFBOEI7YUFBRSxDQUFDLENBQUM7UUFDcEUsQ0FBQztJQUNILEVBQUUsT0FBT0MsS0FBSyxFQUFFO1FBQ2RiLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLG1CQUFtQixHQUFHQyxLQUFLLENBQUNELE9BQU87U0FBRSxDQUFDLENBQUM7SUFDekUsQ0FBQztBQUNILENBQUM7QUFFREUsTUFBTSxDQUFDQyxPQUFPLEdBQUdqQixPQUFPLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL2FkZE1lZXR1cC5qcz9lYmIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3RNb25nb0RCIH0gZnJvbSBcIi4uLy4uL3V0aWxzL21vbmdvXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgICBjb25zdCB7IGRiLCBjbGllbnQgfSA9IGF3YWl0IGNvbm5lY3RNb25nb0RCKCk7XHJcbiAgICAgIGNvbnN0IE1lZXR1cCA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0VXBcIik7XHJcblxyXG4gICAgICBhd2FpdCBNZWV0dXAuaW5zZXJ0T25lKHJlcS5ib2R5KTtcclxuXHJcbiAgICAgIGNsaWVudC5jbG9zZSgpO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6IFwiTUVFVFVQIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5LlwiIH0pO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IFwiQW4gZXJyb3Igb2NjdXJlZC5cIiArIGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGhhbmRsZXI7XHJcbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGIiLCJjbGllbnQiLCJjb25uZWN0TW9uZ29EQiIsIk1lZXR1cCIsImNvbGxlY3Rpb24iLCJpbnNlcnRPbmUiLCJib2R5IiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/addMeetup.js\n");

/***/ }),

/***/ "(api)/./utils/mongo.js":
/*!************************!*\
  !*** ./utils/mongo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectMongoDB\": () => (/* binding */ connectMongoDB)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectMongoDB() {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(process.env.MONGO_URI);\n    const db = client.db();\n    return {\n        db,\n        client\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9tb25nby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFL0IsZUFBZUMsY0FBYyxHQUFHO0lBQ3JDLE1BQU1DLE1BQU0sR0FBRyxNQUFNRix3REFBbUIsQ0FBQ0ksT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVMsQ0FBQztJQUMvRCxNQUFNQyxFQUFFLEdBQUdMLE1BQU0sQ0FBQ0ssRUFBRSxFQUFFO0lBQ3RCLE9BQU87UUFBRUEsRUFBRTtRQUFFTCxNQUFNO0tBQUUsQ0FBQztBQUN4QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3V0aWxzL21vbmdvLmpzPzdkNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RNb25nb0RCKCkge1xyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJJKTtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gIHJldHVybiB7IGRiLCBjbGllbnQgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJjb25uZWN0TW9uZ29EQiIsImNsaWVudCIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJJIiwiZGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/mongo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addMeetup.js"));
module.exports = __webpack_exports__;

})();