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

/***/ "./pages/rotab.jsx":
/*!*************************!*\
  !*** ./pages/rotab.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Rotab; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Rotab() {\n    _s();\n    const [rotate, setRotate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const intervalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const stopSpin = ()=>{\n        if (intervalRef.current) {\n            clearInterval(intervalRef.current);\n            intervalRef.current = null;\n        }\n    };\n    const clockwise = ()=>{\n        if (intervalRef.current) return;\n        intervalRef.current = setInterval(()=>{\n            setRotate((rotate)=>rotate + 3.6);\n        }, 25);\n    };\n    const counterClockwise = ()=>{\n        if (intervalRef.current) return;\n        intervalRef.current = setInterval(()=>{\n            setRotate((rotate)=>rotate - 3.6);\n        }, 25);\n    };\n    const rotTabStyle = {\n        backgroundColor: \"red\",\n        position: \"relative\",\n        left: \"40%\",\n        width: \"25em\",\n        height: \"25em\",\n        borderRadius: \"50%\",\n        textAlign: \"center\",\n        transform: \"rotate(\".concat(rotate, \"deg)\")\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onMouseDown: counterClockwise,\n                onMouseUp: stopSpin,\n                onMouseLeave: stopSpin,\n                children: \"Counter clock\"\n            }, void 0, false, {\n                fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/rotab.jsx\",\n                lineNumber: 40,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rotTab\",\n                style: rotTabStyle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Spin\"\n                }, void 0, false, {\n                    fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/rotab.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/rotab.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onMouseDown: clockwise,\n                onMouseUp: stopSpin,\n                onMouseLeave: stopSpin,\n                children: \"Clockwise\"\n            }, void 0, false, {\n                fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/rotab.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Rotab, \"hH9KVoyt4HzU5RMYCoAmZ7etNCM=\");\n_c = Rotab;\nvar _c;\n$RefreshReg$(_c, \"Rotab\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yb3RhYi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QztBQUcxQixTQUFTRTs7SUFDdEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU1LLGNBQWNKLDZDQUFNQSxDQUFDO0lBRTNCLE1BQU1LLFdBQVc7UUFDZixJQUFJRCxZQUFZRSxTQUFTO1lBQ3ZCQyxjQUFjSCxZQUFZRTtZQUMxQkYsWUFBWUUsVUFBVTtRQUN4QjtJQUNGO0lBQ0EsTUFBTUUsWUFBWTtRQUNoQixJQUFJSixZQUFZRSxTQUFTO1FBQ3pCRixZQUFZRSxVQUFVRyxZQUFZO1lBQ2hDTixVQUFVLENBQUNELFNBQVdBLFNBQVM7UUFDakMsR0FBRztJQUNMO0lBRUEsTUFBTVEsbUJBQW1CO1FBQ3ZCLElBQUlOLFlBQVlFLFNBQVM7UUFDekJGLFlBQVlFLFVBQVVHLFlBQVk7WUFDaENOLFVBQVUsQ0FBQ0QsU0FBV0EsU0FBUztRQUNqQyxHQUFHO0lBQ0w7SUFFQSxNQUFNUyxjQUFjO1FBQ2xCQyxpQkFBaUI7UUFDakJDLFVBQVU7UUFDVkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsY0FBYztRQUNkQyxXQUFXO1FBQ1hDLFdBQVcsVUFBaUIsT0FBUGpCLFFBQU87SUFDOUI7SUFDQSxxQkFDRTs7MEJBQ0EsOERBQUNrQjtnQkFBT0MsYUFBYVg7Z0JBQWtCWSxXQUFXakI7Z0JBQVVrQixjQUFjbEI7MEJBQVU7Ozs7OzswQkFDbEYsOERBQUNtQjtnQkFBSUMsV0FBVTtnQkFBU0MsT0FBT2Y7MEJBQzdCLDRFQUFDZ0I7OEJBQUU7Ozs7Ozs7Ozs7OzBCQUVMLDhEQUFDUDtnQkFBT0MsYUFBYWI7Z0JBQVdjLFdBQVdqQjtnQkFBVWtCLGNBQWNsQjswQkFBVTs7Ozs7Ozs7QUFHbkY7R0EzQ3dCSjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yb3RhYi5qc3g/YTdiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvdGFiICgpIHtcbiAgY29uc3QgW3JvdGF0ZSwgc2V0Um90YXRlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBpbnRlcnZhbFJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBzdG9wU3BpbiA9ICgpID0+IHtcbiAgICBpZiAoaW50ZXJ2YWxSZWYuY3VycmVudCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbFJlZi5jdXJyZW50KTtcbiAgICAgIGludGVydmFsUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgIH1cbiAgfVxuICBjb25zdCBjbG9ja3dpc2UgPSAoKSA9PiB7XG4gICAgaWYgKGludGVydmFsUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICBpbnRlcnZhbFJlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0Um90YXRlKChyb3RhdGUpID0+IHJvdGF0ZSArIDMuNilcbiAgICB9LCAyNSk7XG4gIH1cblxuICBjb25zdCBjb3VudGVyQ2xvY2t3aXNlID0gKCkgPT4ge1xuICAgIGlmIChpbnRlcnZhbFJlZi5jdXJyZW50KSByZXR1cm47XG4gICAgaW50ZXJ2YWxSZWYuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldFJvdGF0ZSgocm90YXRlKSA9PiByb3RhdGUgLSAzLjYpXG4gICAgfSwgMjUpO1xuICB9XG5cbiAgY29uc3Qgcm90VGFiU3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBsZWZ0OiAnNDAlJyxcbiAgICB3aWR0aDogJzI1ZW0nLFxuICAgIGhlaWdodDogJzI1ZW0nLFxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICB0cmFuc2Zvcm06IGByb3RhdGUoJHtyb3RhdGV9ZGVnKWBcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGJ1dHRvbiBvbk1vdXNlRG93bj17Y291bnRlckNsb2Nrd2lzZX0gb25Nb3VzZVVwPXtzdG9wU3Bpbn0gb25Nb3VzZUxlYXZlPXtzdG9wU3Bpbn0+Q291bnRlciBjbG9jazwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdFRhYicgc3R5bGU9e3JvdFRhYlN0eWxlfT5cbiAgICAgICAgPHA+U3BpbjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBvbk1vdXNlRG93bj17Y2xvY2t3aXNlfSBvbk1vdXNlVXA9e3N0b3BTcGlufSBvbk1vdXNlTGVhdmU9e3N0b3BTcGlufT5DbG9ja3dpc2U8L2J1dHRvbj5cbiAgICA8Lz5cbiAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsIlJvdGFiIiwicm90YXRlIiwic2V0Um90YXRlIiwiaW50ZXJ2YWxSZWYiLCJzdG9wU3BpbiIsImN1cnJlbnQiLCJjbGVhckludGVydmFsIiwiY2xvY2t3aXNlIiwic2V0SW50ZXJ2YWwiLCJjb3VudGVyQ2xvY2t3aXNlIiwicm90VGFiU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInRleHRBbGlnbiIsInRyYW5zZm9ybSIsImJ1dHRvbiIsIm9uTW91c2VEb3duIiwib25Nb3VzZVVwIiwib25Nb3VzZUxlYXZlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/rotab.jsx\n"));

/***/ })

});