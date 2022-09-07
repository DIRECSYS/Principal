"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_settings-user_settings-user_module_ts"],{

/***/ 79535:
/*!*********************************************************************!*\
  !*** ./src/app/pages/settings-user/settings-user-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsUserPageRoutingModule": () => (/* binding */ SettingsUserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _settings_user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-user.page */ 65794);




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

/***/ 30084:
/*!*************************************************************!*\
  !*** ./src/app/pages/settings-user/settings-user.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsUserPageModule": () => (/* binding */ SettingsUserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _settings_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-user-routing.module */ 79535);
/* harmony import */ var _settings_user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-user.page */ 65794);







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

/***/ 65794:
/*!***********************************************************!*\
  !*** ./src/app/pages/settings-user/settings-user.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsUserPage": () => (/* binding */ SettingsUserPage)
/* harmony export */ });
/* harmony import */ var _Users_arturo_Documents_Servicio_Social_Proyecto_DIRECSYS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _settings_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-user.page.html?ngResource */ 15370);
/* harmony import */ var _settings_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-user.page.scss?ngResource */ 47087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);






let SettingsUserPage = class SettingsUserPage {
  constructor(alertController) {
    this.alertController = alertController;
  }

  editUserAlert() {
    var _this = this;

    return (0,_Users_arturo_Documents_Servicio_Social_Proyecto_DIRECSYS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: 'Completa tu información',
        buttons: ['Descartar', 'Guardar'],
        cssClass: 'alert',
        inputs: [{
          placeholder: 'Nombre',
          cssClass: 'alertInput'
        }, {
          type: 'email',
          placeholder: 'Correo'
        }, {
          type: 'tel',
          placeholder: 'Teléfono'
        }, {
          type: 'date',
          placeholder: 'Fecha de nacimiento'
        }]
      });
      yield alert.present();
    })();
  }

  ngOnInit() {}

};

SettingsUserPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController
}];

SettingsUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-settings-user',
  template: _settings_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_settings_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SettingsUserPage);


/***/ }),

/***/ 47087:
/*!************************************************************************!*\
  !*** ./src/app/pages/settings-user/settings-user.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".card {\n  width: 90%;\n  margin: 5px auto;\n  padding: 0px;\n}\n\n.ion-card-subtitles {\n  display: flex;\n  justify-content: space-between;\n}\n\nion-img {\n  border-radius: 50% !important;\n  overflow: hidden;\n  max-width: 350px;\n}\n\n.profile-image {\n  margin: 0 auto;\n}\n\n.profile-image ion-img {\n  margin: 3px auto;\n}\n\n.dato {\n  margin: 8px 0;\n}\n\n.botones {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin: 40px auto 20px auto;\n  padding: 0px 100px;\n}\n\n.botones ion-button {\n  font-size: 0.8rem;\n}\n\n.ion-color-new {\n  background-color: var(--ion-color-new);\n}\n\n.info-card {\n  padding: 0;\n  width: 90%;\n  margin: 10px auto 5px auto;\n}\n\n.info-card ion-label {\n  font-size: 12px;\n}\n\n.info-card ion-item {\n  margin: 0px;\n  padding: 0px;\n}\n\nspan {\n  font-weight: bold;\n  margin: 0 5px;\n}\n\n.botones-ind {\n  --background: #d64400;\n  margin: 2px;\n  padding: 3px;\n  font-size: 14px;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLXVzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFDQztFQUNHLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0FBR0o7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFBQTtFQUNJLGlCQUFBO0FBR0o7O0FBQUE7RUFDSSxzQ0FBQTtBQUdKOztBQUFBO0VBQ0ksVUFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtBQUdKOztBQUFBO0VBQ0ksZUFBQTtBQUdKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFHSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtBQUdKOztBQUFBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQUdKIiwiZmlsZSI6InNldHRpbmdzLXVzZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDVweCBhdXRvO1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLmlvbi1jYXJkLXN1YnRpdGxlc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuaW9uLWltZ3tcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1heC13aWR0aDogMzUwcHg7XG59XG5cbi5wcm9maWxlLWltYWdle1xuICAgIG1hcmdpbjowIGF1dG87XG59XG4gLnByb2ZpbGUtaW1hZ2UgaW9uLWltZ3tcbiAgICBtYXJnaW46IDNweCBhdXRvO1xuIH1cbi5kYXRve1xuICAgIG1hcmdpbjogOHB4IDA7XG59XG5cbi5ib3RvbmVze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDQwcHggYXV0byAyMHB4IGF1dG8gO1xuICAgIHBhZGRpbmc6ICAwcHggMTAwcHg7XG59XG5cbi5ib3RvbmVzIGlvbi1idXR0b257XG4gICAgZm9udC1zaXplOiAuOHJlbTtcbn1cblxuLmlvbi1jb2xvci1uZXcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1uZXcpO1xufVxuXG4uaW5mby1jYXJke1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46MTBweCBhdXRvIDVweCBhdXRvO1xufVxuXG4uaW5mby1jYXJkIGlvbi1sYWJlbHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5pbmZvLWNhcmQgaW9uLWl0ZW17XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG5zcGFue1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMCA1cHg7XG59XG5cbi5ib3RvbmVzLWluZHtcbiAgICAtLWJhY2tncm91bmQ6ICNkNjQ0MDA7XG4gICAgbWFyZ2luOiAycHg7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuIl19 */";

/***/ }),

/***/ 15370:
/*!************************************************************************!*\
  !*** ./src/app/pages/settings-user/settings-user.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-toolbar>\n  <ion-title>Configuración</ion-title>\n</ion-toolbar>\n\n<ion-content>\n  <ion-card class=\"card\">\n\n    <ion-card-header class=\"card-head\">\n      <div class=\"ion-card-subtitles\">\n        <ion-card-subtitle color=\"primary\">1819401</ion-card-subtitle>\n        <ion-card-subtitle color=\"primary\">Administrador</ion-card-subtitle>\n      </div>\n    </ion-card-header>\n  \n    <ion-card-content class=\"card-content\">\n      <ion-row>\n        <ion-col size=\"6\" class=\"profile-image\">\n          <ion-img class=\"img\" src=\"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80\" ></ion-img>\n        </ion-col>\n        <ion-col>\n          <div class=\"dato\">\n            <ion-label>Nombre:</ion-label>\n            <span>Airam Ontiveros</span>\n          </div>\n          <div class=\"dato\">\n            <ion-label>Correo:</ion-label>\n            <span>correo@correo.com</span>\n          </div>\n          <div class=\"dato\">\n            <ion-label>Teléfono:</ion-label>\n            <span>##########</span>\n          </div>\n          <div class=\"dato\">\n            <ion-label>Fecha de nacimiento:</ion-label>\n            <span>18/08/2000</span>\n          </div>\n      \n          <div class=\"botones\">\n            <ion-button class=\"botones-ind\" (click)=\"editUserAlert()\">\n              <ion-icon name=\"pencil\" slot=\"start\"></ion-icon>\n              Editar valores\n            </ion-button>\n            <ion-button class=\"botones-ind\">\n              Cambiar contraseña\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n\n    </ion-card-content>\n  </ion-card>\n  \n      <ion-card class=\"info-card ion-color-new\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size-lg=\"3\" size-sm=\"6\" size-md=\"4\">\n              <ion-item  href=\"#\" class=\"ion-activated\" color=\"none\" lines=\"none\">\n                <ion-icon name=\"information-circle-outline\" slot=\"start\"></ion-icon>\n                <ion-label>Acerca de</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col size-lg=\"3\" size-sm=\"6\" size-md=\"4\">\n              <ion-item href=\"#\" class=\"ion-activated\" color=\"none\" lines=\"none\">\n                <ion-icon name=\"information-circle-outline\" slot=\"start\"></ion-icon>\n                <ion-label>Ver permisos</ion-label>\n              </ion-item>\n            </ion-col >\n            <ion-col size-lg=\"3\" size-sm=\"6\" size-md=\"4\">\n\n              <ion-item class=\"ion-activated\" color=\"none\" lines=\"none\">\n                <ion-icon name=\"shield-checkmark-outline\" slot=\"start\"></ion-icon>\n                <ion-label>Desarrollado por DASANA♥</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col size-lg=\"3\" size-sm=\"6\" size-md=\"4\">\n              <ion-item class=\"ion-activated\" color=\"none\" lines=\"none\">\n                <ion-icon name=\"shield-checkmark-outline\" slot=\"start\"></ion-icon>\n                <ion-label>Versión 1.0.0</ion-label>\n              </ion-item>\n            </ion-col>\n        </ion-row>\n        </ion-grid>\n      </ion-card>\n  \n      \n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_settings-user_settings-user_module_ts.js.map