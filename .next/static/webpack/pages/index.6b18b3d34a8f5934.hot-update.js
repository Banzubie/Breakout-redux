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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Header(param) {\n    let { title } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: title ? title : \"Default title\"\n    }, void 0, false, {\n        fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/index.jsx\",\n        lineNumber: 3,\n        columnNumber: 10\n    }, this);\n}\n_c = Header;\nfunction HomePage() {\n    _s();\n    var [rotate, setRotate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const clockwise = (e)=>{\n        e.preventDefault();\n        setRotate(rotate += 15);\n    };\n    const counterClockwise = (e)=>{\n        e.preventDefault();\n        setRotate(rotate -= 15);\n    };\n    const rotTabStyle = {\n        backgroundColor: \"red\",\n        position: \"relative\",\n        left: \"50%\",\n        width: \"3em\",\n        height: \"3em\",\n        borderRadius: \"50%\",\n        textAlign: \"center\",\n        padding: \"10%\",\n        transform: \"rotate(\".concat(rotate, \"deg)\")\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: counterClockwise,\n                children: \"Counter clock\"\n            }, void 0, false, {\n                fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/index.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rotTab\",\n                style: rotTabStyle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Hello world\"\n                }, void 0, false, {\n                    fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/index.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/index.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: clockwise,\n                children: \"Clockwise\"\n            }, void 0, false, {\n                fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/index.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/index.jsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"/Z/5LFXl56ZWCtPHsPY3EBXSOkA=\");\n_c1 = HomePage;\nvar _c, _c1;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpQztBQUNqQyxTQUFTQyxPQUFPLEtBQVM7UUFBVCxFQUFFQyxLQUFLLEVBQUUsR0FBVDtJQUNkLHFCQUFPLDhEQUFDQztrQkFBSUQsUUFBUUEsUUFBUTs7Ozs7O0FBQzlCO0tBRlNEO0FBSU0sU0FBU0c7O0lBQ3RCLElBQUksQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNTyxZQUFZLENBQUNDO1FBQ2pCQSxFQUFFQztRQUNGSCxVQUFVRCxVQUFVO0lBQ3RCO0lBRUEsTUFBTUssbUJBQW1CLENBQUNGO1FBQ3hCQSxFQUFFQztRQUNGSCxVQUFVRCxVQUFVO0lBQ3RCO0lBRUEsTUFBTU0sY0FBYztRQUNsQkMsaUJBQWlCO1FBQ2pCQyxVQUFVO1FBQ1ZDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLGNBQWM7UUFDZEMsV0FBVztRQUNYQyxTQUFTO1FBQ1RDLFdBQVcsVUFBaUIsT0FBUGYsUUFBTztJQUM5QjtJQUVBLHFCQUNFLDhEQUFDZ0I7OzBCQUNDLDhEQUFDQztnQkFBT0MsU0FBU2I7MEJBQWtCOzs7Ozs7MEJBQ25DLDhEQUFDVztnQkFBSUcsV0FBVTtnQkFBU0MsT0FBT2Q7MEJBQzdCLDRFQUFDZTs4QkFBRTs7Ozs7Ozs7Ozs7MEJBRUwsOERBQUNKO2dCQUFPQyxTQUFTaEI7MEJBQVc7Ozs7Ozs7Ozs7OztBQUdsQztHQWxDd0JIO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuZnVuY3Rpb24gSGVhZGVyKHsgdGl0bGUgfSkge1xuICByZXR1cm4gPGgxPnt0aXRsZSA/IHRpdGxlIDogJ0RlZmF1bHQgdGl0bGUnfTwvaDE+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgdmFyIFtyb3RhdGUsIHNldFJvdGF0ZV0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBjbG9ja3dpc2UgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHNldFJvdGF0ZShyb3RhdGUgKz0gMTUpXG4gIH1cblxuICBjb25zdCBjb3VudGVyQ2xvY2t3aXNlID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBzZXRSb3RhdGUocm90YXRlIC09IDE1KVxuICB9XG5cbiAgY29uc3Qgcm90VGFiU3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICB3aWR0aDogJzNlbScsXG4gICAgaGVpZ2h0OiAnM2VtJyxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgcGFkZGluZzogJzEwJScsXG4gICAgdHJhbnNmb3JtOiBgcm90YXRlKCR7cm90YXRlfWRlZylgXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NvdW50ZXJDbG9ja3dpc2V9PkNvdW50ZXIgY2xvY2s8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3RUYWInIHN0eWxlPXtyb3RUYWJTdHlsZX0+XG4gICAgICAgIDxwPkhlbGxvIHdvcmxkPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Nsb2Nrd2lzZX0+Q2xvY2t3aXNlPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSGVhZGVyIiwidGl0bGUiLCJoMSIsIkhvbWVQYWdlIiwicm90YXRlIiwic2V0Um90YXRlIiwiY2xvY2t3aXNlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY291bnRlckNsb2Nrd2lzZSIsInJvdFRhYlN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwicG9zaXRpb24iLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nIiwidHJhbnNmb3JtIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSIsInN0eWxlIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});