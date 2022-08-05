"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_settings-user_settings-user_module_ts"],{

/***/ 9535:
/*!*********************************************************************!*\
  !*** ./src/app/pages/settings-user/settings-user-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsUserPageRoutingModule": () => (/* binding */ SettingsUserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _settings_user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-user.page */ 7526);




const routes = [
    {
        path: '',
        component: _settings_user_page__WEBPACK_IMPORTED_MODULE_0__.SettingsUserPage
    }
];
let SettingsUserPageRoutingModule = class SettingsUserPageRoutingModule {
};
SettingsUserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingsUserPageRoutingModule);



/***/ }),

/***/ 84:
/*!*************************************************************!*\
  !*** ./src/app/pages/settings-user/settings-user.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsUserPageModule": () => (/* binding */ SettingsUserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _settings_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-user-routing.module */ 9535);
/* harmony import */ var _settings_user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-user.page */ 7526);







let SettingsUserPageModule = class SettingsUserPageModule {
};
SettingsUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _settings_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsUserPageRoutingModule
        ],
        declarations: [_settings_user_page__WEBPACK_IMPORTED_MODULE_1__.SettingsUserPage]
    })
], SettingsUserPageModule);



/***/ }),

/***/ 7526:
/*!***********************************************************!*\
  !*** ./src/app/pages/settings-user/settings-user.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsUserPage": () => (/* binding */ SettingsUserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _settings_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-user.page.html?ngResource */ 5370);
/* harmony import */ var _settings_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-user.page.scss?ngResource */ 7087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let SettingsUserPage = class SettingsUserPage {
    constructor() { }
    ngOnInit() {
    }
};
SettingsUserPage.ctorParameters = () => [];
SettingsUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-settings-user',
        template: _settings_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_settings_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SettingsUserPage);



/***/ }),

/***/ 7087:
/*!************************************************************************!*\
  !*** ./src/app/pages/settings-user/settings-user.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy11c2VyLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 5370:
/*!************************************************************************!*\
  !*** ./src/app/pages/settings-user/settings-user.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>settings-user</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_settings-user_settings-user_module_ts.js.map