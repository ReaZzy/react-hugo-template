"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_hugo"] = self["webpackChunkreact_hugo"] || []).push([["static_js_src_components_App_jsx"],{

/***/ "./static/js/src/components/App.jsx":
/*!******************************************!*\
  !*** ./static/js/src/components/App.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-table */ \"./node_modules/react-table/index.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction App(_ref) {\n  var columns = _ref.columns,\n      data = _ref.data;\n\n  var _useTable = (0,react_table__WEBPACK_IMPORTED_MODULE_1__.useTable)({\n    columns: JSON.parse(columns),\n    data: JSON.parse(data)\n  }),\n      getTableProps = _useTable.getTableProps,\n      getTableBodyProps = _useTable.getTableBodyProps,\n      headerGroups = _useTable.headerGroups,\n      rows = _useTable.rows,\n      prepareRow = _useTable.prepareRow;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"table\", getTableProps(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"thead\", null, headerGroups === null || headerGroups === void 0 ? void 0 : headerGroups.map(function (headerGroup) {\n    var _headerGroup$headers;\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tr\", headerGroup === null || headerGroup === void 0 ? void 0 : headerGroup.getHeaderGroupProps(), headerGroup === null || headerGroup === void 0 ? void 0 : (_headerGroup$headers = headerGroup.headers) === null || _headerGroup$headers === void 0 ? void 0 : _headerGroup$headers.map(function (column) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", column.getHeaderProps(), column.render('Header'));\n    }));\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tbody\", getTableBodyProps(), rows === null || rows === void 0 ? void 0 : rows.map(function (row) {\n    var _row$cells;\n\n    prepareRow(row);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tr\", row.getRowProps(), row === null || row === void 0 ? void 0 : (_row$cells = row.cells) === null || _row$cells === void 0 ? void 0 : _row$cells.map(function (cell) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", cell.getCellProps(), cell.render('Cell'));\n    }));\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack://react-hugo/./static/js/src/components/App.jsx?");

/***/ })

}]);