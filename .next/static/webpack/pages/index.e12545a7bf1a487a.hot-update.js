"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Header(param) {\n    let { title } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: title ? title : \"Default title\"\n    }, void 0, false, {\n        fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/index.jsx\",\n        lineNumber: 3,\n        columnNumber: 10\n    }, this);\n}\n_c = Header;\nfunction HomePage() {\n    _s();\n    var [rotate, setRotate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const clockwise = (e)=>{\n        e.preventDefault();\n        setRotate(rotate += 5);\n    };\n    const counterClockwise = (e)=>{\n        e.preventDefault();\n        setRotate(rotate -= 5);\n    };\n    const rotTabStyle = {\n        backgroundColor: \"red\",\n        position: \"relative\",\n        top: \"50%\",\n        left: \"50%\",\n        width: \"5em\",\n        borderRadius: \"50%\",\n        textAlign: \"center\",\n        padding: \"5em\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: counterClockwise,\n                children: \"Counter clock\"\n            }, void 0, false, {\n                fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/index.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rotTab\",\n                style: rotTabStyle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Hello world\"\n                }, void 0, false, {\n                    fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/index.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/index.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: clockwise,\n                children: \"Clockwise\"\n            }, void 0, false, {\n                fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/index.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/index.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"/Z/5LFXl56ZWCtPHsPY3EBXSOkA=\");\n_c1 = HomePage;\nvar _c, _c1;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpQztBQUNqQyxTQUFTQyxPQUFPLEtBQVM7UUFBVCxFQUFFQyxLQUFLLEVBQUUsR0FBVDtJQUNkLHFCQUFPLDhEQUFDQztrQkFBSUQsUUFBUUEsUUFBUTs7Ozs7O0FBQzlCO0tBRlNEO0FBSU0sU0FBU0c7O0lBQ3RCLElBQUksQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNTyxZQUFZLENBQUNDO1FBQ2pCQSxFQUFFQztRQUNGSCxVQUFVRCxVQUFVO0lBQ3RCO0lBRUEsTUFBTUssbUJBQW1CLENBQUNGO1FBQ3hCQSxFQUFFQztRQUNGSCxVQUFVRCxVQUFVO0lBQ3RCO0lBRUEsTUFBTU0sY0FBYztRQUNsQkMsaUJBQWlCO1FBQ2pCQyxVQUFVO1FBQ1ZDLEtBQUs7UUFDTEMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGNBQWM7UUFDZEMsV0FBVztRQUNYQyxTQUFTO0lBQ1g7SUFFQSxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQztnQkFBT0MsU0FBU1o7MEJBQWtCOzs7Ozs7MEJBQ25DLDhEQUFDVTtnQkFBSUcsV0FBVTtnQkFBU0MsT0FBT2I7MEJBQzdCLDRFQUFDYzs4QkFBRTs7Ozs7Ozs7Ozs7MEJBRUwsOERBQUNKO2dCQUFPQyxTQUFTZjswQkFBVzs7Ozs7Ozs7Ozs7O0FBR2xDO0dBakN3Qkg7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5mdW5jdGlvbiBIZWFkZXIoeyB0aXRsZSB9KSB7XG4gIHJldHVybiA8aDE+e3RpdGxlID8gdGl0bGUgOiAnRGVmYXVsdCB0aXRsZSd9PC9oMT47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICB2YXIgW3JvdGF0ZSwgc2V0Um90YXRlXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGNsb2Nrd2lzZSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0Um90YXRlKHJvdGF0ZSArPSA1KVxuICB9XG5cbiAgY29uc3QgY291bnRlckNsb2Nrd2lzZSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0Um90YXRlKHJvdGF0ZSAtPSA1KVxuICB9XG5cbiAgY29uc3Qgcm90VGFiU3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0b3A6ICc1MCUnLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIHdpZHRoOiAnNWVtJyxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgcGFkZGluZzogJzVlbSdcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gb25DbGljaz17Y291bnRlckNsb2Nrd2lzZX0+Q291bnRlciBjbG9jazwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdFRhYicgc3R5bGU9e3JvdFRhYlN0eWxlfT5cbiAgICAgICAgPHA+SGVsbG8gd29ybGQ8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gb25DbGljaz17Y2xvY2t3aXNlfT5DbG9ja3dpc2U8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIZWFkZXIiLCJ0aXRsZSIsImgxIiwiSG9tZVBhZ2UiLCJyb3RhdGUiLCJzZXRSb3RhdGUiLCJjbG9ja3dpc2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb3VudGVyQ2xvY2t3aXNlIiwicm90VGFiU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsInRleHRBbGlnbiIsInBhZGRpbmciLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});