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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Rotab; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _block_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.jsx */ \"./pages/block.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Rotab() {\n    _s();\n    const [rotate, setRotate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const intervalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const blockPlacementLogic = [\n        1,\n        2,\n        3,\n        4,\n        5,\n        6,\n        7,\n        8,\n        9,\n        10\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.addEventListener(\"keydown\", onKeyDown, true);\n        document.addEventListener(\"keyup\", stopSpin, true);\n    }, []);\n    const onKeyDown = (e)=>{\n        if (e.key === \"a\" || e.key === \"ArrowLeft\") {\n            counterClockwise();\n        } else if (e.key === \"d\" || e.key === \"ArrowRight\") {\n            clockwise();\n        } else {\n            return;\n        }\n    };\n    const stopSpin = ()=>{\n        if (intervalRef.current) {\n            clearInterval(intervalRef.current);\n            intervalRef.current = null;\n        }\n    };\n    const clockwise = ()=>{\n        if (intervalRef.current) return;\n        intervalRef.current = setInterval(()=>{\n            setRotate((rotate)=>rotate + 3.6);\n        }, 25);\n    };\n    const counterClockwise = ()=>{\n        if (intervalRef.current) return;\n        intervalRef.current = setInterval(()=>{\n            setRotate((rotate)=>rotate - 3.6);\n        }, 25);\n    };\n    const rotTabStyle = {\n        backgroundColor: \"red\",\n        position: \"relative\",\n        left: \"37.5%\",\n        top: \"25%\",\n        width: \"25em\",\n        height: \"25em\",\n        borderRadius: \"50%\",\n        textAlign: \"center\",\n        margin: \"2em\",\n        transform: \"rotate(\".concat(rotate, \"deg)\")\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rotTab\",\n                style: rotTabStyle,\n                children: blockPlacementLogic.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_block_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        multiplier: item\n                    }, void 0, false, {\n                        fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/rotab.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 42\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/rotab.jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onMouseDown: counterClockwise,\n                onMouseUp: stopSpin,\n                onMouseLeave: stopSpin,\n                children: \"Counter clock\"\n            }, void 0, false, {\n                fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/rotab.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onMouseDown: clockwise,\n                onMouseUp: stopSpin,\n                onMouseLeave: stopSpin,\n                children: \"Clockwise\"\n            }, void 0, false, {\n                fileName: \"/Users/banzubie/Projects/Breakout-redux/pages/rotab.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Rotab, \"lUIqtDY3W2BSn+VoGDX1qYkHiuY=\");\n_c = Rotab;\nvar _c;\n$RefreshReg$(_c, \"Rotab\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yb3RhYi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDckI7QUFHaEIsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNTyxjQUFjTiw2Q0FBTUEsQ0FBQztJQUMzQixNQUFNTyxzQkFBc0I7UUFBQztRQUFHO1FBQUc7UUFBRztRQUFHO1FBQUc7UUFBRztRQUFHO1FBQUc7UUFBRztLQUFHO0lBRTNETixnREFBU0EsQ0FBQztRQUNSTyxTQUFTQyxpQkFBaUIsV0FBV0MsV0FBVztRQUNoREYsU0FBU0MsaUJBQWlCLFNBQVNFLFVBQVU7SUFDL0MsR0FBRSxFQUFFO0lBRUosTUFBTUQsWUFBWSxDQUFDRTtRQUNqQixJQUFJQSxFQUFFQyxRQUFRLE9BQU9ELEVBQUVDLFFBQVEsYUFBYTtZQUMxQ0M7UUFDRixPQUFPLElBQUlGLEVBQUVDLFFBQVEsT0FBT0QsRUFBRUMsUUFBUSxjQUFhO1lBQ2pERTtRQUNGLE9BQU87WUFDTDtRQUNGO0lBQ0Y7SUFFQSxNQUFNSixXQUFXO1FBQ2YsSUFBSUwsWUFBWVUsU0FBUztZQUN2QkMsY0FBY1gsWUFBWVU7WUFDMUJWLFlBQVlVLFVBQVU7UUFDeEI7SUFDRjtJQUNBLE1BQU1ELFlBQVk7UUFDaEIsSUFBSVQsWUFBWVUsU0FBUztRQUN6QlYsWUFBWVUsVUFBVUUsWUFBWTtZQUNoQ2IsVUFBVSxDQUFDRCxTQUFXQSxTQUFTO1FBQ2pDLEdBQUc7SUFDTDtJQUVBLE1BQU1VLG1CQUFtQjtRQUN2QixJQUFJUixZQUFZVSxTQUFTO1FBQ3pCVixZQUFZVSxVQUFVRSxZQUFZO1lBQ2hDYixVQUFVLENBQUNELFNBQVdBLFNBQVM7UUFDakMsR0FBRztJQUNMO0lBRUEsTUFBTWUsY0FBYztRQUNsQkMsaUJBQWlCO1FBQ2pCQyxVQUFVO1FBQ1ZDLE1BQU07UUFDTkMsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsY0FBYztRQUNkQyxXQUFXO1FBQ1hDLFFBQVE7UUFDUkMsV0FBVyxVQUFpQixPQUFQekIsUUFBTztJQUM5QjtJQUNBLHFCQUNFOzswQkFDRSw4REFBQzBCO2dCQUFJQyxXQUFVO2dCQUFTQyxPQUFPYjswQkFDNUJaLG9CQUFvQjBCLElBQUlDLENBQUFBLHFCQUFRLDhEQUFDaEMsa0RBQUtBO3dCQUFDaUMsWUFBWUQ7Ozs7Ozs7Ozs7OzBCQUV0RCw4REFBQ0U7Z0JBQU9DLGFBQWF2QjtnQkFBa0J3QixXQUFXM0I7Z0JBQVU0QixjQUFjNUI7MEJBQVU7Ozs7OzswQkFDcEYsOERBQUN5QjtnQkFBT0MsYUFBYXRCO2dCQUFXdUIsV0FBVzNCO2dCQUFVNEIsY0FBYzVCOzBCQUFVOzs7Ozs7OztBQUduRjtHQTdEd0JSO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JvdGFiLmpzeD9hN2JlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCbG9jayBmcm9tICcuL2Jsb2NrLmpzeCdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb3RhYiAoKSB7XG4gIGNvbnN0IFtyb3RhdGUsIHNldFJvdGF0ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgaW50ZXJ2YWxSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGJsb2NrUGxhY2VtZW50TG9naWMgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlEb3duLCB0cnVlKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgc3RvcFNwaW4sIHRydWUpXG4gIH0sW10pXG5cbiAgY29uc3Qgb25LZXlEb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdhJyB8fCBlLmtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgIGNvdW50ZXJDbG9ja3dpc2UoKVxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdkJyB8fCBlLmtleSA9PT0gJ0Fycm93UmlnaHQnKXtcbiAgICAgIGNsb2Nrd2lzZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHN0b3BTcGluID0gKCkgPT4ge1xuICAgIGlmIChpbnRlcnZhbFJlZi5jdXJyZW50KSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsUmVmLmN1cnJlbnQpO1xuICAgICAgaW50ZXJ2YWxSZWYuY3VycmVudCA9IG51bGw7XG4gICAgfVxuICB9XG4gIGNvbnN0IGNsb2Nrd2lzZSA9ICgpID0+IHtcbiAgICBpZiAoaW50ZXJ2YWxSZWYuY3VycmVudCkgcmV0dXJuO1xuICAgIGludGVydmFsUmVmLmN1cnJlbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRSb3RhdGUoKHJvdGF0ZSkgPT4gcm90YXRlICsgMy42KVxuICAgIH0sIDI1KTtcbiAgfVxuXG4gIGNvbnN0IGNvdW50ZXJDbG9ja3dpc2UgPSAoKSA9PiB7XG4gICAgaWYgKGludGVydmFsUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICBpbnRlcnZhbFJlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0Um90YXRlKChyb3RhdGUpID0+IHJvdGF0ZSAtIDMuNilcbiAgICB9LCAyNSk7XG4gIH1cblxuICBjb25zdCByb3RUYWJTdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGxlZnQ6ICczNy41JScsXG4gICAgdG9wOiAnMjUlJyxcbiAgICB3aWR0aDogJzI1ZW0nLFxuICAgIGhlaWdodDogJzI1ZW0nLFxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBtYXJnaW46ICcyZW0nLFxuICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke3JvdGF0ZX1kZWcpYFxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3RUYWInIHN0eWxlPXtyb3RUYWJTdHlsZX0+XG4gICAgICAgIHtibG9ja1BsYWNlbWVudExvZ2ljLm1hcChpdGVtID0+IDxCbG9jayBtdWx0aXBsaWVyPXtpdGVtfS8+KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBvbk1vdXNlRG93bj17Y291bnRlckNsb2Nrd2lzZX0gb25Nb3VzZVVwPXtzdG9wU3Bpbn0gb25Nb3VzZUxlYXZlPXtzdG9wU3Bpbn0+Q291bnRlciBjbG9jazwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbk1vdXNlRG93bj17Y2xvY2t3aXNlfSBvbk1vdXNlVXA9e3N0b3BTcGlufSBvbk1vdXNlTGVhdmU9e3N0b3BTcGlufT5DbG9ja3dpc2U8L2J1dHRvbj5cbiAgICA8Lz5cbiAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIkJsb2NrIiwiUm90YWIiLCJyb3RhdGUiLCJzZXRSb3RhdGUiLCJpbnRlcnZhbFJlZiIsImJsb2NrUGxhY2VtZW50TG9naWMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbktleURvd24iLCJzdG9wU3BpbiIsImUiLCJrZXkiLCJjb3VudGVyQ2xvY2t3aXNlIiwiY2xvY2t3aXNlIiwiY3VycmVudCIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInJvdFRhYlN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJ0cmFuc2Zvcm0iLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm1hcCIsIml0ZW0iLCJtdWx0aXBsaWVyIiwiYnV0dG9uIiwib25Nb3VzZURvd24iLCJvbk1vdXNlVXAiLCJvbk1vdXNlTGVhdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/rotab.jsx\n"));

/***/ })

});