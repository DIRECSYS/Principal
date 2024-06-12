(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_settings-user_settings-user_module_ts"],{

/***/ 61143:
/*!*********************************************************************!*\
  !*** ./src/app/pages/settings-user/settings-user-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsUserPageRoutingModule: () => (/* binding */ SettingsUserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _settings_user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-user.page */ 71705);




const routes = [{
  path: '',
  component: _settings_user_page__WEBPACK_IMPORTED_MODULE_0__.SettingsUserPage
}];
let SettingsUserPageRoutingModule = class SettingsUserPageRoutingModule {};
SettingsUserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], SettingsUserPageRoutingModule);


/***/ }),

/***/ 61766:
/*!*************************************************************!*\
  !*** ./src/app/pages/settings-user/settings-user.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsUserPageModule: () => (/* binding */ SettingsUserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _settings_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-user-routing.module */ 61143);
/* harmony import */ var _settings_user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-user.page */ 71705);







let SettingsUserPageModule = class SettingsUserPageModule {};
SettingsUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _settings_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsUserPageRoutingModule],
  declarations: [_settings_user_page__WEBPACK_IMPORTED_MODULE_1__.SettingsUserPage]
})], SettingsUserPageModule);


/***/ }),

/***/ 71705:
/*!***********************************************************!*\
  !*** ./src/app/pages/settings-user/settings-user.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsUserPage: () => (/* binding */ SettingsUserPage)
/* harmony export */ });
/* harmony import */ var F_Cursos_Ionic_Principal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _settings_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-user.page.html?ngResource */ 98411);
/* harmony import */ var _settings_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-user.page.scss?ngResource */ 33295);
/* harmony import */ var _settings_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_settings_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 37401);






let SettingsUserPage = class SettingsUserPage {
  constructor(alertController) {
    this.alertController = alertController;
  }
  editUserAlert() {
    var _this = this;
    return (0,F_Cursos_Ionic_Principal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController
  }];
};
SettingsUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-settings-user',
  template: _settings_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_settings_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SettingsUserPage);


/***/ }),

/***/ 33295:
/*!************************************************************************!*\
  !*** ./src/app/pages/settings-user/settings-user.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.card {
  width: 90%;
  margin: 5px auto;
  padding: 0px;
}

.ion-card-subtitles {
  display: flex;
  justify-content: space-between;
}

ion-img {
  border-radius: 50% !important;
  overflow: hidden;
  max-width: 350px;
}

.profile-image {
  margin: 0 auto;
}

.profile-image ion-img {
  margin: 3px auto;
}

.dato {
  margin: 8px 0;
}

.botones {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 40px auto 20px auto;
  padding: 0px 100px;
}

.botones ion-button {
  font-size: 0.8rem;
}

.ion-color-new {
  background-color: var(--ion-color-new);
}

.info-card {
  padding: 0;
  width: 90%;
  margin: 10px auto 5px auto;
}

.info-card ion-label {
  font-size: 12px;
}

.info-card ion-item {
  margin: 0px;
  padding: 0px;
}

span {
  font-weight: bold;
  margin: 0 5px;
}

.botones-ind {
  --background: #d64400;
  margin: 2px;
  padding: 3px;
  font-size: 14px;
  text-transform: capitalize;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/settings-user/settings-user.page.scss"],"names":[],"mappings":"AAAA;EACI,UAAA;EACA,gBAAA;EACA,YAAA;AACJ;;AAEA;EACI,aAAA;EACA,8BAAA;AACJ;;AAEA;EACI,6BAAA;EACA,gBAAA;EACA,gBAAA;AACJ;;AAEA;EACI,cAAA;AACJ;;AACC;EACG,gBAAA;AAEJ;;AAAA;EACI,aAAA;AAGJ;;AAAA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,2BAAA;EACA,kBAAA;AAGJ;;AAAA;EACI,iBAAA;AAGJ;;AAAA;EACI,sCAAA;AAGJ;;AAAA;EACI,UAAA;EACA,UAAA;EACA,0BAAA;AAGJ;;AAAA;EACI,eAAA;AAGJ;;AAAA;EACI,WAAA;EACA,YAAA;AAGJ;;AAAA;EACI,iBAAA;EACA,aAAA;AAGJ;;AAAA;EACI,qBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,0BAAA;AAGJ","sourcesContent":[".card{\r\n    width: 90%;\r\n    margin: 5px auto;\r\n    padding: 0px;\r\n}\r\n\r\n.ion-card-subtitles{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\nion-img{\r\n    border-radius: 50% !important;\r\n    overflow: hidden;\r\n    max-width: 350px;\r\n}\r\n\r\n.profile-image{\r\n    margin:0 auto;\r\n}\r\n .profile-image ion-img{\r\n    margin: 3px auto;\r\n }\r\n.dato{\r\n    margin: 8px 0;\r\n}\r\n\r\n.botones{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    margin: 40px auto 20px auto ;\r\n    padding:  0px 100px;\r\n}\r\n\r\n.botones ion-button{\r\n    font-size: .8rem;\r\n}\r\n\r\n.ion-color-new {\r\n    background-color: var(--ion-color-new);\r\n}\r\n\r\n.info-card{\r\n    padding: 0;\r\n    width: 90%;\r\n    margin:10px auto 5px auto;\r\n}\r\n\r\n.info-card ion-label{\r\n    font-size: 12px;\r\n}\r\n\r\n.info-card ion-item{\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\nspan{\r\n    font-weight: bold;\r\n    margin: 0 5px;\r\n}\r\n\r\n.botones-ind{\r\n    --background: #d64400;\r\n    margin: 2px;\r\n    padding: 3px;\r\n    font-size: 14px;\r\n    text-transform: capitalize;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 98411:
/*!************************************************************************!*\
  !*** ./src/app/pages/settings-user/settings-user.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\r\n<ion-toolbar>\r\n  <ion-title>Configuración</ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-content>\r\n  <ion-card class=\"card\">\r\n\r\n    <ion-card-header class=\"card-head\">\r\n      <div class=\"ion-card-subtitles\">\r\n        <ion-card-subtitle color=\"primary\">1819401</ion-card-subtitle>\r\n        <ion-card-subtitle color=\"primary\">Administrador</ion-card-subtitle>\r\n      </div>\r\n    </ion-card-header>\r\n  \r\n    <ion-card-content class=\"card-content\">\r\n      <ion-row>\r\n        <ion-col size=\"6\" class=\"profile-image\">\r\n          <ion-img class=\"img\" src=\"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80\" ></ion-img>\r\n        </ion-col>\r\n        <ion-col>\r\n          <div class=\"dato\">\r\n            <ion-label>Nombre:</ion-label>\r\n            <span>Airam Ontiveros</span>\r\n          </div>\r\n          <div class=\"dato\">\r\n            <ion-label>Correo:</ion-label>\r\n            <span>correo@correo.com</span>\r\n          </div>\r\n          <div class=\"dato\">\r\n            <ion-label>Teléfono:</ion-label>\r\n            <span>##########</span>\r\n          </div>\r\n          <div class=\"dato\">\r\n            <ion-label>Fecha de nacimiento:</ion-label>\r\n            <span>18/08/2000</span>\r\n          </div>\r\n      \r\n          <div class=\"botones\">\r\n            <ion-button class=\"botones-ind\" (click)=\"editUserAlert()\">\r\n              <ion-icon name=\"pencil\" slot=\"start\"></ion-icon>\r\n              Editar valores\r\n            </ion-button>\r\n            <ion-button class=\"botones-ind\">\r\n              Cambiar contraseña\r\n            </ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-card-content>\r\n  </ion-card>\r\n  \r\n      <ion-card class=\"info-card ion-color-new\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size-lg=\"3\" size-sm=\"6\" size-md=\"4\">\r\n              <ion-item  href=\"#\" class=\"ion-activated\" color=\"none\" lines=\"none\">\r\n                <ion-icon name=\"information-circle-outline\" slot=\"start\"></ion-icon>\r\n                <ion-label>Acerca de</ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size-lg=\"3\" size-sm=\"6\" size-md=\"4\">\r\n              <ion-item href=\"#\" class=\"ion-activated\" color=\"none\" lines=\"none\">\r\n                <ion-icon name=\"information-circle-outline\" slot=\"start\"></ion-icon>\r\n                <ion-label>Ver permisos</ion-label>\r\n              </ion-item>\r\n            </ion-col >\r\n            <ion-col size-lg=\"3\" size-sm=\"6\" size-md=\"4\">\r\n\r\n              <ion-item class=\"ion-activated\" color=\"none\" lines=\"none\">\r\n                <ion-icon name=\"shield-checkmark-outline\" slot=\"start\"></ion-icon>\r\n                <ion-label>Desarrollado por DASANA♥</ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size-lg=\"3\" size-sm=\"6\" size-md=\"4\">\r\n              <ion-item class=\"ion-activated\" color=\"none\" lines=\"none\">\r\n                <ion-icon name=\"shield-checkmark-outline\" slot=\"start\"></ion-icon>\r\n                <ion-label>Versión 1.0.0</ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n        </ion-grid>\r\n      </ion-card>\r\n  \r\n      \r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_settings-user_settings-user_module_ts.js.map