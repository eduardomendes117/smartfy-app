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

/***/ "(app-pages-browser)/./components/swiper.js":
/*!******************************!*\
  !*** ./components/swiper.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MySwiper)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ \"(app-pages-browser)/./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/navigation */ \"(app-pages-browser)/./node_modules/swiper/modules/navigation.css\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ \"(app-pages-browser)/./node_modules/swiper/swiper.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst Swiper = dynamic(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_node_modules_swiper_swiper-react_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/swiper-react.mjs\")).then((mod)=>mod.Swiper), {\n    ssr: false\n});\n_c = Swiper;\nconst SwiperSlide = dynamic(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_node_modules_swiper_swiper-react_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/swiper-react.mjs\")).then((mod)=>mod.SwiperSlide), {\n    ssr: false\n});\n_c1 = SwiperSlide;\n\n\n\nfunction MySwiper() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Swiper, {\n        modules: [\n            swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation\n        ],\n        navigation: true,\n        spaceBetween: 50,\n        slidesPerView: 1,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SwiperSlide, {\n                children: \"Slide 1\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eduar\\\\OneDrive\\\\Documentos\\\\estudos\\\\react\\\\smartfy-app\\\\components\\\\swiper.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SwiperSlide, {\n                children: \"Slide 2\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eduar\\\\OneDrive\\\\Documentos\\\\estudos\\\\react\\\\smartfy-app\\\\components\\\\swiper.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\eduar\\\\OneDrive\\\\Documentos\\\\estudos\\\\react\\\\smartfy-app\\\\components\\\\swiper.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c2 = MySwiper;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Swiper\");\n$RefreshReg$(_c1, \"SwiperSlide\");\n$RefreshReg$(_c2, \"MySwiper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc3dpcGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFZ0M7QUFDaEMsTUFBTUMsU0FBU0MsUUFBUSxJQUFNLHNPQUFzQixDQUFDQyxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlILE1BQU0sR0FBRztJQUFFSSxLQUFLO0FBQU07S0FBcEZKO0FBQ04sTUFBTUssY0FBY0osUUFBUSxJQUFNLHNPQUFzQixDQUFDQyxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlFLFdBQVcsR0FBRztJQUFFRCxLQUFLO0FBQU07TUFBOUZDO0FBQ2M7QUFDVztBQUNLO0FBRXJCLFNBQVNFO0lBQ3RCLHFCQUNFLDhEQUFDUDtRQUNDUSxTQUFTO1lBQUNGLDhDQUFVQTtTQUFDO1FBQ3JCRyxVQUFVO1FBQ1ZDLGNBQWM7UUFDZEMsZUFBZTs7MEJBRWYsOERBQUNOOzBCQUFZOzs7Ozs7MEJBQ2IsOERBQUNBOzBCQUFZOzs7Ozs7Ozs7Ozs7QUFHbkI7TUFad0JFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zd2lwZXIuanM/OTlmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBkaW5hIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmNvbnN0IFN3aXBlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdzd2lwZXIvcmVhY3QnKS50aGVuKG1vZCA9PiBtb2QuU3dpcGVyKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5jb25zdCBTd2lwZXJTbGlkZSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdzd2lwZXIvcmVhY3QnKS50aGVuKG1vZCA9PiBtb2QuU3dpcGVyU2xpZGUpLCB7IHNzcjogZmFsc2UgfSk7XHJcbmltcG9ydCAnc3dpcGVyL2Nzcyc7XHJcbmltcG9ydCAnc3dpcGVyL2Nzcy9uYXZpZ2F0aW9uJztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gJ3N3aXBlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeVN3aXBlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN3aXBlclxyXG4gICAgICBtb2R1bGVzPXtbTmF2aWdhdGlvbl19XHJcbiAgICAgIG5hdmlnYXRpb25cclxuICAgICAgc3BhY2VCZXR3ZWVuPXs1MH1cclxuICAgICAgc2xpZGVzUGVyVmlldz17MX1cclxuICAgID5cclxuICAgICAgPFN3aXBlclNsaWRlPlNsaWRlIDE8L1N3aXBlclNsaWRlPlxyXG4gICAgICA8U3dpcGVyU2xpZGU+U2xpZGUgMjwvU3dpcGVyU2xpZGU+XHJcbiAgICA8L1N3aXBlcj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbImRpbmEiLCJTd2lwZXIiLCJkeW5hbWljIiwidGhlbiIsIm1vZCIsInNzciIsIlN3aXBlclNsaWRlIiwiTmF2aWdhdGlvbiIsIk15U3dpcGVyIiwibW9kdWxlcyIsIm5hdmlnYXRpb24iLCJzcGFjZUJldHdlZW4iLCJzbGlkZXNQZXJWaWV3Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/swiper.js\n"));

/***/ })

});