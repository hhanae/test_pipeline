"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/views/navigation/navigation.js":
/*!********************************************!*\
  !*** ./src/views/navigation/navigation.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mdi_material_ui_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mdi-material-ui/Table */ \"./node_modules/mdi-material-ui/Table.js\");\n/* harmony import */ var mdi_material_ui_CubeOutline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mdi-material-ui/CubeOutline */ \"./node_modules/mdi-material-ui/CubeOutline.js\");\n/* harmony import */ var mdi_material_ui_HomeOutline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mdi-material-ui/HomeOutline */ \"./node_modules/mdi-material-ui/HomeOutline.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/dist/web3.min.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _artifacts_SupplyChain_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../artifacts/SupplyChain.json */ \"./src/artifacts/SupplyChain.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n// ** React Imports\n\n// ** Icon imports\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Navigation() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), navItems = ref[0], setNavItems = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), loader = ref1[0], setLoader = ref1[1];\n    // Separate constants for different navigation scenarios\n    var supplyChainUserNav = [\n        {\n            title: 'Dashboard',\n            icon: mdi_material_ui_HomeOutline__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            path: '/'\n        },\n        {\n            sectionTitle: 'Products Section'\n        },\n        {\n            icon: mdi_material_ui_CubeOutline__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            title: 'Buy Product',\n            path: '/products/buy-product'\n        },\n        {\n            title: 'All Products Stages',\n            icon: mdi_material_ui_Table__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            path: '/products/products-stages'\n        },\n        {\n            sectionTitle: 'Tracking'\n        },\n        {\n            icon: mdi_material_ui_CubeOutline__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            title: 'Track the Product',\n            path: '/products/track-product'\n        }\n    ];\n    return navItems;\n}\n_s(Navigation, \"60U4e6L+O8diORsrfX+kZpwYlhg=\");\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3MvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxFQUFtQjtBQUN3QjtBQUUzQyxFQUFrQjtBQUN1QjtBQUNBO0FBQ1k7QUFDQTtBQUNVO0FBQ0U7QUFDQTtBQUNFO0FBQ0E7QUFDTTtBQUVsRDtBQUNzQzs7U0FFcERjLFVBQVUsR0FBRyxDQUFDOztJQUNuQixHQUFLLENBQTJCZCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQXBDZSxRQUFRLEdBQWlCZixHQUFZLEtBQTNCZ0IsV0FBVyxHQUFJaEIsR0FBWTtJQUM1QyxHQUFLLENBQXVCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUFsQ2lCLE1BQU0sR0FBZWpCLElBQWMsS0FBM0JrQixTQUFTLEdBQUlsQixJQUFjO0lBSTFDLEVBQXdEO0lBQ3hELEdBQUssQ0FBQ21CLGtCQUFrQixHQUFHLENBQUM7UUFDeEIsQ0FBQztZQUNHQyxLQUFLLEVBQUUsQ0FBVztZQUNsQkMsSUFBSSxFQUFFaEIsbUVBQVc7WUFDakJpQixJQUFJLEVBQUUsQ0FBRztRQUNYLENBQUM7UUFDRCxDQUFDO1lBQ0NDLFlBQVksRUFBRSxDQUFrQjtRQUNsQyxDQUFDO1FBQ0QsQ0FBQztZQUNDRixJQUFJLEVBQUVqQixtRUFBVztZQUNqQmdCLEtBQUssRUFBRSxDQUFhO1lBQ3BCRSxJQUFJLEVBQUUsQ0FBdUI7UUFDL0IsQ0FBQztRQUNELENBQUM7WUFDQ0YsS0FBSyxFQUFFLENBQXFCO1lBQzVCQyxJQUFJLEVBQUVsQiw2REFBSztZQUNYbUIsSUFBSSxFQUFFLENBQTJCO1FBQ25DLENBQUM7UUFDRCxDQUFDO1lBQ0NDLFlBQVksRUFBRSxDQUFVO1FBQzFCLENBQUM7UUFDRCxDQUFDO1lBQ0NGLElBQUksRUFBRWpCLG1FQUFXO1lBQ2pCZ0IsS0FBSyxFQUFFLENBQW1CO1lBQzFCRSxJQUFJLEVBQUUsQ0FBeUI7UUFDakMsQ0FBQztJQUNQLENBQUM7SUFFRCxNQUFNLENBQUNQLFFBQVE7QUFDbkIsQ0FBQztHQXJDUUQsVUFBVTtLQUFWQSxVQUFVO0FBdUNuQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy92aWV3cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uanM/N2E3OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqKiBSZWFjdCBJbXBvcnRzXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyAqKiBJY29uIGltcG9ydHNcclxuaW1wb3J0IExvZ2luIGZyb20gJ21kaS1tYXRlcmlhbC11aS9Mb2dpbic7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdtZGktbWF0ZXJpYWwtdWkvVGFibGUnO1xyXG5pbXBvcnQgQ3ViZU91dGxpbmUgZnJvbSAnbWRpLW1hdGVyaWFsLXVpL0N1YmVPdXRsaW5lJztcclxuaW1wb3J0IEhvbWVPdXRsaW5lIGZyb20gJ21kaS1tYXRlcmlhbC11aS9Ib21lT3V0bGluZSc7XHJcbmltcG9ydCBGb3JtYXRMZXR0ZXJDYXNlIGZyb20gJ21kaS1tYXRlcmlhbC11aS9Gb3JtYXRMZXR0ZXJDYXNlJztcclxuaW1wb3J0IEFjY291bnRDb2dPdXRsaW5lIGZyb20gJ21kaS1tYXRlcmlhbC11aS9BY2NvdW50Q29nT3V0bGluZSc7XHJcbmltcG9ydCBDcmVkaXRDYXJkT3V0bGluZSBmcm9tICdtZGktbWF0ZXJpYWwtdWkvQ3JlZGl0Q2FyZE91dGxpbmUnO1xyXG5pbXBvcnQgQWNjb3VudFBsdXNPdXRsaW5lIGZyb20gJ21kaS1tYXRlcmlhbC11aS9BY2NvdW50UGx1c091dGxpbmUnO1xyXG5pbXBvcnQgQWxlcnRDaXJjbGVPdXRsaW5lIGZyb20gJ21kaS1tYXRlcmlhbC11aS9BbGVydENpcmNsZU91dGxpbmUnO1xyXG5pbXBvcnQgR29vZ2xlQ2lyY2xlc0V4dGVuZGVkIGZyb20gJ21kaS1tYXRlcmlhbC11aS9Hb29nbGVDaXJjbGVzRXh0ZW5kZWQnO1xyXG5cclxuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XHJcbmltcG9ydCBTdXBwbHlDaGFpbkFCSSBmcm9tICcuLi8uLi9hcnRpZmFjdHMvU3VwcGx5Q2hhaW4uanNvbic7XHJcblxyXG5mdW5jdGlvbiBOYXZpZ2F0aW9uKCkge1xyXG4gICAgY29uc3QgW25hdkl0ZW1zLCBzZXROYXZJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICBcclxuXHJcbiAgICAvLyBTZXBhcmF0ZSBjb25zdGFudHMgZm9yIGRpZmZlcmVudCBuYXZpZ2F0aW9uIHNjZW5hcmlvc1xyXG4gICAgY29uc3Qgc3VwcGx5Q2hhaW5Vc2VyTmF2ID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdEYXNoYm9hcmQnLFxyXG4gICAgICAgICAgICBpY29uOiBIb21lT3V0bGluZSxcclxuICAgICAgICAgICAgcGF0aDogJy8nXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzZWN0aW9uVGl0bGU6ICdQcm9kdWN0cyBTZWN0aW9uJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWNvbjogQ3ViZU91dGxpbmUsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQnV5IFByb2R1Y3QnLFxyXG4gICAgICAgICAgICBwYXRoOiAnL3Byb2R1Y3RzL2J1eS1wcm9kdWN0J1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdBbGwgUHJvZHVjdHMgU3RhZ2VzJyxcclxuICAgICAgICAgICAgaWNvbjogVGFibGUsXHJcbiAgICAgICAgICAgIHBhdGg6ICcvcHJvZHVjdHMvcHJvZHVjdHMtc3RhZ2VzJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc2VjdGlvblRpdGxlOiAnVHJhY2tpbmcnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpY29uOiBDdWJlT3V0bGluZSxcclxuICAgICAgICAgICAgdGl0bGU6ICdUcmFjayB0aGUgUHJvZHVjdCcsXHJcbiAgICAgICAgICAgIHBhdGg6ICcvcHJvZHVjdHMvdHJhY2stcHJvZHVjdCdcclxuICAgICAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIG5hdkl0ZW1zO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxvZ2luIiwiVGFibGUiLCJDdWJlT3V0bGluZSIsIkhvbWVPdXRsaW5lIiwiRm9ybWF0TGV0dGVyQ2FzZSIsIkFjY291bnRDb2dPdXRsaW5lIiwiQ3JlZGl0Q2FyZE91dGxpbmUiLCJBY2NvdW50UGx1c091dGxpbmUiLCJBbGVydENpcmNsZU91dGxpbmUiLCJHb29nbGVDaXJjbGVzRXh0ZW5kZWQiLCJXZWIzIiwiU3VwcGx5Q2hhaW5BQkkiLCJOYXZpZ2F0aW9uIiwibmF2SXRlbXMiLCJzZXROYXZJdGVtcyIsImxvYWRlciIsInNldExvYWRlciIsInN1cHBseUNoYWluVXNlck5hdiIsInRpdGxlIiwiaWNvbiIsInBhdGgiLCJzZWN0aW9uVGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/views/navigation/navigation.js\n");

/***/ })

});