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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Header(param) {\n    let { title } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: title ? title : \"Default title\"\n    }, void 0, false, {\n        fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/index.jsx\",\n        lineNumber: 3,\n        columnNumber: 10\n    }, this);\n}\n_c = Header;\nfunction HomePage() {\n    _s();\n    const [rotate, setRotate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const intervalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const stopSpin = ()=>{\n        if (intervalRef.current) {\n            clearInterval(intervalRef.current);\n            intervalRef.current = null;\n        }\n    };\n    const clockwise = ()=>{\n        if (intervalRef.current) return;\n        intervalRef.current = setInterval(()=>{\n            setRotate((rotate)=>rotate + 3.6);\n        }, 25);\n    };\n    const counterClockwise = ()=>{\n        if (intervalRef.current) return;\n        intervalRef.current = setInterval(()=>{\n            setRotate((rotate)=>rotate - 3.6);\n        }, 25);\n    };\n    const rotTabStyle = {\n        backgroundColor: \"red\",\n        position: \"relative\",\n        left: \"50%\",\n        width: \"15em\",\n        height: \"15em\",\n        borderRadius: \"50%\",\n        textAlign: \"center\",\n        transform: \"rotate(\".concat(rotate, \"deg)\")\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onMouseDown: counterClockwise,\n                onMouseUp: stopSpin,\n                onMouseLeave: stopSpin,\n                children: \"Counter clock\"\n            }, void 0, false, {\n                fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/index.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rotTab\",\n                style: rotTabStyle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Spin\"\n                }, void 0, false, {\n                    fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/index.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/index.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onMouseDown: clockwise,\n                onMouseUp: stopSpin,\n                onMouseLeave: stopSpin,\n                children: \"Clockwise\"\n            }, void 0, false, {\n                fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/index.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/index.jsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"hH9KVoyt4HzU5RMYCoAmZ7etNCM=\");\n_c1 = HomePage;\nvar _c, _c1;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QztBQUN6QyxTQUFTRSxPQUFPLEtBQVM7UUFBVCxFQUFFQyxLQUFLLEVBQUUsR0FBVDtJQUNkLHFCQUFPLDhEQUFDQztrQkFBSUQsUUFBUUEsUUFBUTs7Ozs7O0FBQzlCO0tBRlNEO0FBSU0sU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNUSxjQUFjUCw2Q0FBTUEsQ0FBQztJQUUzQixNQUFNUSxXQUFXO1FBQ2YsSUFBSUQsWUFBWUUsU0FBUztZQUN2QkMsY0FBY0gsWUFBWUU7WUFDMUJGLFlBQVlFLFVBQVU7UUFDeEI7SUFDRjtJQUNBLE1BQU1FLFlBQVk7UUFDaEIsSUFBSUosWUFBWUUsU0FBUztRQUN6QkYsWUFBWUUsVUFBVUcsWUFBWTtZQUNoQ04sVUFBVSxDQUFDRCxTQUFXQSxTQUFTO1FBQ2pDLEdBQUc7SUFDTDtJQUVBLE1BQU1RLG1CQUFtQjtRQUN2QixJQUFJTixZQUFZRSxTQUFTO1FBQ3pCRixZQUFZRSxVQUFVRyxZQUFZO1lBQ2hDTixVQUFVLENBQUNELFNBQVdBLFNBQVM7UUFDakMsR0FBRztJQUNMO0lBRUEsTUFBTVMsY0FBYztRQUNsQkMsaUJBQWlCO1FBQ2pCQyxVQUFVO1FBQ1ZDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLGNBQWM7UUFDZEMsV0FBVztRQUNYQyxXQUFXLFVBQWlCLE9BQVBqQixRQUFPO0lBQzlCO0lBRUEscUJBQ0UsOERBQUNrQjs7MEJBQ0MsOERBQUNDO2dCQUFPQyxhQUFhWjtnQkFBa0JhLFdBQVdsQjtnQkFBVW1CLGNBQWNuQjswQkFBVTs7Ozs7OzBCQUNwRiw4REFBQ2U7Z0JBQUlLLFdBQVU7Z0JBQVNDLE9BQU9mOzBCQUM3Qiw0RUFBQ2dCOzhCQUFFOzs7Ozs7Ozs7OzswQkFFTCw4REFBQ047Z0JBQU9DLGFBQWFkO2dCQUFXZSxXQUFXbEI7Z0JBQVVtQixjQUFjbkI7MEJBQVU7Ozs7Ozs7Ozs7OztBQUduRjtHQTVDd0JKO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5mdW5jdGlvbiBIZWFkZXIoeyB0aXRsZSB9KSB7XG4gIHJldHVybiA8aDE+e3RpdGxlID8gdGl0bGUgOiAnRGVmYXVsdCB0aXRsZSd9PC9oMT47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICBjb25zdCBbcm90YXRlLCBzZXRSb3RhdGVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGludGVydmFsUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IHN0b3BTcGluID0gKCkgPT4ge1xuICAgIGlmIChpbnRlcnZhbFJlZi5jdXJyZW50KSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsUmVmLmN1cnJlbnQpO1xuICAgICAgaW50ZXJ2YWxSZWYuY3VycmVudCA9IG51bGw7XG4gICAgfVxuICB9XG4gIGNvbnN0IGNsb2Nrd2lzZSA9ICgpID0+IHtcbiAgICBpZiAoaW50ZXJ2YWxSZWYuY3VycmVudCkgcmV0dXJuO1xuICAgIGludGVydmFsUmVmLmN1cnJlbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRSb3RhdGUoKHJvdGF0ZSkgPT4gcm90YXRlICsgMy42KVxuICAgIH0sIDI1KTtcbiAgfVxuXG4gIGNvbnN0IGNvdW50ZXJDbG9ja3dpc2UgPSAoKSA9PiB7XG4gICAgaWYgKGludGVydmFsUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICBpbnRlcnZhbFJlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0Um90YXRlKChyb3RhdGUpID0+IHJvdGF0ZSAtIDMuNilcbiAgICB9LCAyNSk7XG4gIH1cblxuICBjb25zdCByb3RUYWJTdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIHdpZHRoOiAnMTVlbScsXG4gICAgaGVpZ2h0OiAnMTVlbScsXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke3JvdGF0ZX1kZWcpYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBvbk1vdXNlRG93bj17Y291bnRlckNsb2Nrd2lzZX0gb25Nb3VzZVVwPXtzdG9wU3Bpbn0gb25Nb3VzZUxlYXZlPXtzdG9wU3Bpbn0+Q291bnRlciBjbG9jazwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdFRhYicgc3R5bGU9e3JvdFRhYlN0eWxlfT5cbiAgICAgICAgPHA+U3BpbjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBvbk1vdXNlRG93bj17Y2xvY2t3aXNlfSBvbk1vdXNlVXA9e3N0b3BTcGlufSBvbk1vdXNlTGVhdmU9e3N0b3BTcGlufT5DbG9ja3dpc2U8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJIZWFkZXIiLCJ0aXRsZSIsImgxIiwiSG9tZVBhZ2UiLCJyb3RhdGUiLCJzZXRSb3RhdGUiLCJpbnRlcnZhbFJlZiIsInN0b3BTcGluIiwiY3VycmVudCIsImNsZWFySW50ZXJ2YWwiLCJjbG9ja3dpc2UiLCJzZXRJbnRlcnZhbCIsImNvdW50ZXJDbG9ja3dpc2UiLCJyb3RUYWJTdHlsZSIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwidGV4dEFsaWduIiwidHJhbnNmb3JtIiwiZGl2IiwiYnV0dG9uIiwib25Nb3VzZURvd24iLCJvbk1vdXNlVXAiLCJvbk1vdXNlTGVhdmUiLCJjbGFzc05hbWUiLCJzdHlsZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});