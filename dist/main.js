"use strict";
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/object */ "./src/modules/object.js");


const descriptiontext = document.getElementById('task');
const todolist = document.querySelector('.interactive-list');
const submitbtn = document.querySelector('.submit');

submitbtn.addEventListener('click', () => {
  _modules_object__WEBPACK_IMPORTED_MODULE_0__["default"].description = descriptiontext.value;
  _modules_object__WEBPACK_IMPORTED_MODULE_0__["default"].completed = false;
  while (submitbtn) {
    _modules_object__WEBPACK_IMPORTED_MODULE_0__["default"].index += 1;
    return _modules_object__WEBPACK_IMPORTED_MODULE_0__["default"].index;
  }
  console.log(_modules_object__WEBPACK_IMPORTED_MODULE_0__["default"].index);
});



/***/ }),

/***/ "./src/modules/object.js":
/*!*******************************!*\
  !*** ./src/modules/object.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todotasks)
/* harmony export */ });
class todotasks {
    constructor(description, completed, index) {
      this.description = description;
      this.completed = false;
      this.index = index;
    }
  }

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1FQUFxQjtBQUN2QixFQUFFLGlFQUFtQjtBQUNyQjtBQUNBLElBQUksNkRBQWU7QUFDbkIsV0FBVyw2REFBZTtBQUMxQjtBQUNBLGNBQWMsNkRBQWU7QUFDN0IsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7QUNmZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL29iamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9kb3Rhc2tzIGZyb20gXCIuL21vZHVsZXMvb2JqZWN0XCI7XHJcblxyXG5jb25zdCBkZXNjcmlwdGlvbnRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzaycpO1xyXG5jb25zdCB0b2RvbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnRlcmFjdGl2ZS1saXN0Jyk7XHJcbmNvbnN0IHN1Ym1pdGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKTtcclxuXHJcbnN1Ym1pdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICB0b2RvdGFza3MuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbnRleHQudmFsdWU7XHJcbiAgdG9kb3Rhc2tzLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gIHdoaWxlIChzdWJtaXRidG4pIHtcclxuICAgIHRvZG90YXNrcy5pbmRleCArPSAxO1xyXG4gICAgcmV0dXJuIHRvZG90YXNrcy5pbmRleDtcclxuICB9XHJcbiAgY29uc29sZS5sb2codG9kb3Rhc2tzLmluZGV4KTtcclxufSk7XHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB0b2RvdGFza3Mge1xyXG4gICAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24sIGNvbXBsZXRlZCwgaW5kZXgpIHtcclxuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICB9XHJcbiAgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==