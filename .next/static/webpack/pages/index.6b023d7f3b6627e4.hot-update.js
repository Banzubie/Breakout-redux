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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Rotab; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _block_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.jsx */ \"./pages/block.jsx\");\n/* harmony import */ var _ball_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ball.jsx */ \"./pages/ball.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Rotab() {\n    _s();\n    const [rotate, setRotate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const intervalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const blockPlacementLogic = [\n        1,\n        2,\n        3,\n        4,\n        5,\n        6,\n        7,\n        8,\n        9,\n        10\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.addEventListener(\"keydown\", onKeyDown, true);\n        document.addEventListener(\"keyup\", stopSpin, true);\n    }, []);\n    const onKeyDown = (e)=>{\n        if (e.key === \"a\" || e.key === \"ArrowLeft\") {\n            counterClockwise();\n        } else if (e.key === \"d\" || e.key === \"ArrowRight\") {\n            clockwise();\n        } else {\n            return;\n        }\n    };\n    const stopSpin = ()=>{\n        if (intervalRef.current) {\n            clearInterval(intervalRef.current);\n            intervalRef.current = null;\n        }\n    };\n    const clockwise = ()=>{\n        if (intervalRef.current) return;\n        intervalRef.current = setInterval(()=>{\n            setRotate((rotate)=>rotate + 3.6);\n        }, 25);\n    };\n    const counterClockwise = ()=>{\n        if (intervalRef.current) return;\n        intervalRef.current = setInterval(()=>{\n            setRotate((rotate)=>rotate - 3.6);\n        }, 25);\n    };\n    const rotTabStyle = {\n        backgroundColor: \"green\",\n        position: \"relative\",\n        left: \"50%\",\n        top: \"50%\",\n        width: \"25em\",\n        height: \"25em\",\n        borderRadius: \"50%\",\n        textAlign: \"center\",\n        margin: \"2em\",\n        transform: \"rotate(\".concat(rotate, \"deg) translate(-50%, -50%)\")\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rotTab\",\n                style: rotTabStyle,\n                children: [\n                    blockPlacementLogic.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_block_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            multiplier: item\n                        }, void 0, false, {\n                            fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/rotab.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 42\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ball_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/rotab.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/rotab.jsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onMouseDown: counterClockwise,\n                onMouseUp: stopSpin,\n                onMouseLeave: stopSpin,\n                children: \"Counter clock\"\n            }, void 0, false, {\n                fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/rotab.jsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onMouseDown: clockwise,\n                onMouseUp: stopSpin,\n                onMouseLeave: stopSpin,\n                children: \"Clockwise\"\n            }, void 0, false, {\n                fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/rotab.jsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Rotab, \"lUIqtDY3W2BSn+VoGDX1qYkHiuY=\");\n_c = Rotab;\nvar _c;\n$RefreshReg$(_c, \"Rotab\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yb3RhYi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ3JCO0FBQ0Y7QUFHZCxTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU1RLGNBQWNQLDZDQUFNQSxDQUFDO0lBQzNCLE1BQU1RLHNCQUFzQjtRQUFDO1FBQUc7UUFBRztRQUFHO1FBQUc7UUFBRztRQUFHO1FBQUc7UUFBRztRQUFHO0tBQUc7SUFFM0RQLGdEQUFTQSxDQUFDO1FBQ1JRLFNBQVNDLGlCQUFpQixXQUFXQyxXQUFXO1FBQ2hERixTQUFTQyxpQkFBaUIsU0FBU0UsVUFBVTtJQUMvQyxHQUFFLEVBQUU7SUFFSixNQUFNRCxZQUFZLENBQUNFO1FBQ2pCLElBQUlBLEVBQUVDLFFBQVEsT0FBT0QsRUFBRUMsUUFBUSxhQUFhO1lBQzFDQztRQUNGLE9BQU8sSUFBSUYsRUFBRUMsUUFBUSxPQUFPRCxFQUFFQyxRQUFRLGNBQWE7WUFDakRFO1FBQ0YsT0FBTztZQUNMO1FBQ0Y7SUFDRjtJQUVBLE1BQU1KLFdBQVc7UUFDZixJQUFJTCxZQUFZVSxTQUFTO1lBQ3ZCQyxjQUFjWCxZQUFZVTtZQUMxQlYsWUFBWVUsVUFBVTtRQUN4QjtJQUNGO0lBQ0EsTUFBTUQsWUFBWTtRQUNoQixJQUFJVCxZQUFZVSxTQUFTO1FBQ3pCVixZQUFZVSxVQUFVRSxZQUFZO1lBQ2hDYixVQUFVLENBQUNELFNBQVdBLFNBQVM7UUFDakMsR0FBRztJQUNMO0lBRUEsTUFBTVUsbUJBQW1CO1FBQ3ZCLElBQUlSLFlBQVlVLFNBQVM7UUFDekJWLFlBQVlVLFVBQVVFLFlBQVk7WUFDaENiLFVBQVUsQ0FBQ0QsU0FBV0EsU0FBUztRQUNqQyxHQUFHO0lBQ0w7SUFFQSxNQUFNZSxjQUFjO1FBQ2xCQyxpQkFBaUI7UUFDakJDLFVBQVU7UUFDVkMsTUFBTTtRQUNOQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxjQUFjO1FBQ2RDLFdBQVc7UUFDWEMsUUFBUTtRQUNSQyxXQUFXLFVBQWlCLE9BQVB6QixRQUFPO0lBQzlCO0lBQ0EscUJBQ0U7OzBCQUNFLDhEQUFDMEI7Z0JBQUlDLFdBQVU7Z0JBQVNDLE9BQU9iOztvQkFDNUJaLG9CQUFvQjBCLElBQUlDLENBQUFBLHFCQUFRLDhEQUFDakMsa0RBQUtBOzRCQUFDa0MsWUFBWUQ7Ozs7OztrQ0FDcEQsOERBQUNoQyxpREFBSUE7Ozs7Ozs7Ozs7OzBCQUVQLDhEQUFDa0M7Z0JBQU9DLGFBQWF2QjtnQkFBa0J3QixXQUFXM0I7Z0JBQVU0QixjQUFjNUI7MEJBQVU7Ozs7OzswQkFDcEYsOERBQUN5QjtnQkFBT0MsYUFBYXRCO2dCQUFXdUIsV0FBVzNCO2dCQUFVNEIsY0FBYzVCOzBCQUFVOzs7Ozs7OztBQUduRjtHQTlEd0JSO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JvdGFiLmpzeD9hN2JlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCbG9jayBmcm9tICcuL2Jsb2NrLmpzeCdcbmltcG9ydCBCYWxsIGZyb20gJy4vYmFsbC5qc3gnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm90YWIgKCkge1xuICBjb25zdCBbcm90YXRlLCBzZXRSb3RhdGVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGludGVydmFsUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBibG9ja1BsYWNlbWVudExvZ2ljID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93biwgdHJ1ZSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHN0b3BTcGluLCB0cnVlKVxuICB9LFtdKVxuXG4gIGNvbnN0IG9uS2V5RG93biA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnYScgfHwgZS5rZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICBjb3VudGVyQ2xvY2t3aXNlKClcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnZCcgfHwgZS5rZXkgPT09ICdBcnJvd1JpZ2h0Jyl7XG4gICAgICBjbG9ja3dpc2UoKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cblxuICBjb25zdCBzdG9wU3BpbiA9ICgpID0+IHtcbiAgICBpZiAoaW50ZXJ2YWxSZWYuY3VycmVudCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbFJlZi5jdXJyZW50KTtcbiAgICAgIGludGVydmFsUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgIH1cbiAgfVxuICBjb25zdCBjbG9ja3dpc2UgPSAoKSA9PiB7XG4gICAgaWYgKGludGVydmFsUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICBpbnRlcnZhbFJlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0Um90YXRlKChyb3RhdGUpID0+IHJvdGF0ZSArIDMuNilcbiAgICB9LCAyNSk7XG4gIH1cblxuICBjb25zdCBjb3VudGVyQ2xvY2t3aXNlID0gKCkgPT4ge1xuICAgIGlmIChpbnRlcnZhbFJlZi5jdXJyZW50KSByZXR1cm47XG4gICAgaW50ZXJ2YWxSZWYuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldFJvdGF0ZSgocm90YXRlKSA9PiByb3RhdGUgLSAzLjYpXG4gICAgfSwgMjUpO1xuICB9XG5cbiAgY29uc3Qgcm90VGFiU3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnZ3JlZW4nLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIHRvcDogJzUwJScsXG4gICAgd2lkdGg6ICcyNWVtJyxcbiAgICBoZWlnaHQ6ICcyNWVtJyxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgbWFyZ2luOiAnMmVtJyxcbiAgICB0cmFuc2Zvcm06IGByb3RhdGUoJHtyb3RhdGV9ZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSlgXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdFRhYicgc3R5bGU9e3JvdFRhYlN0eWxlfT5cbiAgICAgICAge2Jsb2NrUGxhY2VtZW50TG9naWMubWFwKGl0ZW0gPT4gPEJsb2NrIG11bHRpcGxpZXI9e2l0ZW19Lz4pfVxuICAgICAgICA8QmFsbCAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIG9uTW91c2VEb3duPXtjb3VudGVyQ2xvY2t3aXNlfSBvbk1vdXNlVXA9e3N0b3BTcGlufSBvbk1vdXNlTGVhdmU9e3N0b3BTcGlufT5Db3VudGVyIGNsb2NrPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uTW91c2VEb3duPXtjbG9ja3dpc2V9IG9uTW91c2VVcD17c3RvcFNwaW59IG9uTW91c2VMZWF2ZT17c3RvcFNwaW59PkNsb2Nrd2lzZTwvYnV0dG9uPlxuICAgIDwvPlxuICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiQmxvY2siLCJCYWxsIiwiUm90YWIiLCJyb3RhdGUiLCJzZXRSb3RhdGUiLCJpbnRlcnZhbFJlZiIsImJsb2NrUGxhY2VtZW50TG9naWMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbktleURvd24iLCJzdG9wU3BpbiIsImUiLCJrZXkiLCJjb3VudGVyQ2xvY2t3aXNlIiwiY2xvY2t3aXNlIiwiY3VycmVudCIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInJvdFRhYlN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJ0cmFuc2Zvcm0iLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm1hcCIsIml0ZW0iLCJtdWx0aXBsaWVyIiwiYnV0dG9uIiwib25Nb3VzZURvd24iLCJvbk1vdXNlVXAiLCJvbk1vdXNlTGVhdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/rotab.jsx\n"));

/***/ })

});