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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Rotab; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Rotab() {\n    _s();\n    const [rotate, setRotate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const intervalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.addEventListener(\"keydown\", onKeyDown, true);\n        document.addEventListener(\"keyup\", stopSpin, true);\n    }, []);\n    const onKeyDown = (e)=>{\n        if (e.key === \"a\" || e.key === \"ArrowLeft\") {\n            counterClockwise();\n        } else if (e.key === \"d\" || e.key === \"ArrowRight\") {\n            clockwise();\n        } else {\n            return;\n        }\n    };\n    const stopSpin = ()=>{\n        if (intervalRef.current) {\n            clearInterval(intervalRef.current);\n            intervalRef.current = null;\n        }\n    };\n    const clockwise = ()=>{\n        if (intervalRef.current) return;\n        intervalRef.current = setInterval(()=>{\n            setRotate((rotate)=>rotate + 3.6);\n        }, 25);\n    };\n    const counterClockwise = ()=>{\n        if (intervalRef.current) return;\n        intervalRef.current = setInterval(()=>{\n            setRotate((rotate)=>rotate - 3.6);\n        }, 25);\n    };\n    const rotTabStyle = {\n        backgroundColor: \"red\",\n        position: \"relative\",\n        left: \"40%\",\n        width: \"25em\",\n        height: \"25em\",\n        borderRadius: \"50%\",\n        textAlign: \"center\",\n        transform: \"rotate(\".concat(rotate, \"deg)\")\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onMouseDown: counterClockwise,\n                onMouseUp: stopSpin,\n                onMouseLeave: stopSpin,\n                children: \"Counter clock\"\n            }, void 0, false, {\n                fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/rotab.jsx\",\n                lineNumber: 55,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rotTab\",\n                style: rotTabStyle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Spin\"\n                }, void 0, false, {\n                    fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/rotab.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/rotab.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onMouseDown: clockwise,\n                onMouseUp: stopSpin,\n                onMouseLeave: stopSpin,\n                children: \"Clockwise\"\n            }, void 0, false, {\n                fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/rotab.jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Rotab, \"lUIqtDY3W2BSn+VoGDX1qYkHiuY=\");\n_c = Rotab;\nvar _c;\n$RefreshReg$(_c, \"Rotab\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yb3RhYi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFvRDtBQUdyQyxTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU1NLGNBQWNMLDZDQUFNQSxDQUFDO0lBRTNCQyxnREFBU0EsQ0FBQztRQUNSSyxTQUFTQyxpQkFBaUIsV0FBV0MsV0FBVztRQUNoREYsU0FBU0MsaUJBQWlCLFNBQVNFLFVBQVU7SUFDL0MsR0FBRSxFQUFFO0lBRUosTUFBTUQsWUFBWSxDQUFDRTtRQUNqQixJQUFJQSxFQUFFQyxRQUFRLE9BQU9ELEVBQUVDLFFBQVEsYUFBYTtZQUMxQ0M7UUFDRixPQUFPLElBQUlGLEVBQUVDLFFBQVEsT0FBT0QsRUFBRUMsUUFBUSxjQUFhO1lBQ2pERTtRQUNGLE9BQU87WUFDTDtRQUNGO0lBQ0Y7SUFFQSxNQUFNSixXQUFXO1FBQ2YsSUFBSUosWUFBWVMsU0FBUztZQUN2QkMsY0FBY1YsWUFBWVM7WUFDMUJULFlBQVlTLFVBQVU7UUFDeEI7SUFDRjtJQUNBLE1BQU1ELFlBQVk7UUFDaEIsSUFBSVIsWUFBWVMsU0FBUztRQUN6QlQsWUFBWVMsVUFBVUUsWUFBWTtZQUNoQ1osVUFBVSxDQUFDRCxTQUFXQSxTQUFTO1FBQ2pDLEdBQUc7SUFDTDtJQUVBLE1BQU1TLG1CQUFtQjtRQUN2QixJQUFJUCxZQUFZUyxTQUFTO1FBQ3pCVCxZQUFZUyxVQUFVRSxZQUFZO1lBQ2hDWixVQUFVLENBQUNELFNBQVdBLFNBQVM7UUFDakMsR0FBRztJQUNMO0lBRUEsTUFBTWMsY0FBYztRQUNsQkMsaUJBQWlCO1FBQ2pCQyxVQUFVO1FBQ1ZDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLGNBQWM7UUFDZEMsV0FBVztRQUNYQyxXQUFXLFVBQWlCLE9BQVB0QixRQUFPO0lBQzlCO0lBQ0EscUJBQ0U7OzBCQUNBLDhEQUFDdUI7Z0JBQU9DLGFBQWFmO2dCQUFrQmdCLFdBQVduQjtnQkFBVW9CLGNBQWNwQjswQkFBVTs7Ozs7OzBCQUNsRiw4REFBQ3FCO2dCQUFJQyxXQUFVO2dCQUFTQyxPQUFPZjswQkFDN0IsNEVBQUNnQjs4QkFBRTs7Ozs7Ozs7Ozs7MEJBRUwsOERBQUNQO2dCQUFPQyxhQUFhZDtnQkFBV2UsV0FBV25CO2dCQUFVb0IsY0FBY3BCOzBCQUFVOzs7Ozs7OztBQUduRjtHQTFEd0JQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JvdGFiLmpzeD9hN2JlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb3RhYiAoKSB7XG4gIGNvbnN0IFtyb3RhdGUsIHNldFJvdGF0ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgaW50ZXJ2YWxSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlEb3duLCB0cnVlKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgc3RvcFNwaW4sIHRydWUpXG4gIH0sW10pXG5cbiAgY29uc3Qgb25LZXlEb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdhJyB8fCBlLmtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgIGNvdW50ZXJDbG9ja3dpc2UoKVxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdkJyB8fCBlLmtleSA9PT0gJ0Fycm93UmlnaHQnKXtcbiAgICAgIGNsb2Nrd2lzZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHN0b3BTcGluID0gKCkgPT4ge1xuICAgIGlmIChpbnRlcnZhbFJlZi5jdXJyZW50KSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsUmVmLmN1cnJlbnQpO1xuICAgICAgaW50ZXJ2YWxSZWYuY3VycmVudCA9IG51bGw7XG4gICAgfVxuICB9XG4gIGNvbnN0IGNsb2Nrd2lzZSA9ICgpID0+IHtcbiAgICBpZiAoaW50ZXJ2YWxSZWYuY3VycmVudCkgcmV0dXJuO1xuICAgIGludGVydmFsUmVmLmN1cnJlbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRSb3RhdGUoKHJvdGF0ZSkgPT4gcm90YXRlICsgMy42KVxuICAgIH0sIDI1KTtcbiAgfVxuXG4gIGNvbnN0IGNvdW50ZXJDbG9ja3dpc2UgPSAoKSA9PiB7XG4gICAgaWYgKGludGVydmFsUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICBpbnRlcnZhbFJlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0Um90YXRlKChyb3RhdGUpID0+IHJvdGF0ZSAtIDMuNilcbiAgICB9LCAyNSk7XG4gIH1cblxuICBjb25zdCByb3RUYWJTdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGxlZnQ6ICc0MCUnLFxuICAgIHdpZHRoOiAnMjVlbScsXG4gICAgaGVpZ2h0OiAnMjVlbScsXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke3JvdGF0ZX1kZWcpYFxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8YnV0dG9uIG9uTW91c2VEb3duPXtjb3VudGVyQ2xvY2t3aXNlfSBvbk1vdXNlVXA9e3N0b3BTcGlufSBvbk1vdXNlTGVhdmU9e3N0b3BTcGlufT5Db3VudGVyIGNsb2NrPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm90VGFiJyBzdHlsZT17cm90VGFiU3R5bGV9PlxuICAgICAgICA8cD5TcGluPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIG9uTW91c2VEb3duPXtjbG9ja3dpc2V9IG9uTW91c2VVcD17c3RvcFNwaW59IG9uTW91c2VMZWF2ZT17c3RvcFNwaW59PkNsb2Nrd2lzZTwvYnV0dG9uPlxuICAgIDwvPlxuICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiUm90YWIiLCJyb3RhdGUiLCJzZXRSb3RhdGUiLCJpbnRlcnZhbFJlZiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uS2V5RG93biIsInN0b3BTcGluIiwiZSIsImtleSIsImNvdW50ZXJDbG9ja3dpc2UiLCJjbG9ja3dpc2UiLCJjdXJyZW50IiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwicm90VGFiU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInRleHRBbGlnbiIsInRyYW5zZm9ybSIsImJ1dHRvbiIsIm9uTW91c2VEb3duIiwib25Nb3VzZVVwIiwib25Nb3VzZUxlYXZlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/rotab.jsx\n"));

/***/ })

});