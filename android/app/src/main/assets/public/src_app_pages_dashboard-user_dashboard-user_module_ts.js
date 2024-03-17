(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard-user_dashboard-user_module_ts"],{

/***/ 51301:
/*!*******************************************************************!*\
  !*** ./src/app/components/test-loading/test-loading.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestLoadingComponent: () => (/* binding */ TestLoadingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _test_loading_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-loading.component.html?ngResource */ 22335);
/* harmony import */ var _test_loading_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test-loading.component.scss?ngResource */ 21467);
/* harmony import */ var _test_loading_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_test_loading_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);




let TestLoadingComponent = class TestLoadingComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
TestLoadingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-test-loading',
  template: _test_loading_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_test_loading_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TestLoadingComponent);


/***/ }),

/***/ 14069:
/*!*********************************************************************!*\
  !*** ./src/app/components/test-result-c/test-result-c.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestResultCComponent: () => (/* binding */ TestResultCComponent)
/* harmony export */ });
/* harmony import */ var F_Cursos_Ionic_Principal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _test_result_c_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test-result-c.component.html?ngResource */ 63655);
/* harmony import */ var _test_result_c_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test-result-c.component.scss?ngResource */ 91719);
/* harmony import */ var _test_result_c_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_test_result_c_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/reports.service */ 66169);







let TestResultCComponent = class TestResultCComponent {
  constructor(toastController, rs) {
    this.toastController = toastController;
    this.rs = rs;
  }
  ngOnInit() {
    this.actualtest = {};
    this.rs.tests.subscribe(data => {
      this.testsf = data;
      this.actualtest = data[data.length - 1];
      const a = new Date(this.actualtest.FDP * 1000);
      const month = a.getMonth();
      const date = a.getDate();
      const year = a.getFullYear() - 1969;
      this.temperatura = date + '/' + month + '/' + year;
    });
  }
  loadDetails(test) {
    var _this = this;
    return (0,F_Cursos_Ionic_Principal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        header: 'Detalles de prueba',
        message: `<ul>
      <li>Estado Emocional   = ${test.PEE}</li>
      <li>Horas de sueño     = ${test.PHS}</li>
      <li>Alcoholimetro      = ${test.PRA}</li>
      <li>PPrueba de Drogas  = ${test.PRD}</li>
      <li>Prueba de ojos     = ${test.PRO}</li>
      </ul>`,
        icon: 'checkmark-circle',
        position: 'bottom',
        buttons: [{
          text: 'Listo',
          role: 'cancel'
        }]
      });
      yield toast.present();
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
  }, {
    type: _services_reports_service__WEBPACK_IMPORTED_MODULE_3__.ReportsService
  }];
};
TestResultCComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-test-result-c',
  template: _test_result_c_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_test_result_c_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], TestResultCComponent);


/***/ }),

/***/ 86043:
/*!***************************************************!*\
  !*** ./src/app/components/test/test.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestComponent: () => (/* binding */ TestComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _test_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.component.html?ngResource */ 68117);
/* harmony import */ var _test_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.component.scss?ngResource */ 80625);
/* harmony import */ var _test_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_test_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);




let TestComponent = class TestComponent {
  constructor() {
    this.isModalOpen = false;
  }
  ngOnInit() {}
  setOpen(isOpen) {
    this.isModalOpen = isOpen;
  }
  recoverAlertValue(event) {
    this.optionSelected = event.detail.value;
    console.log(this.optionSelected);
    console.log(event.detail);
  }
  static #_ = this.ctorParameters = () => [];
};
TestComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-test',
  template: _test_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_test_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TestComponent);


/***/ }),

/***/ 22457:
/*!***********************************************************************!*\
  !*** ./src/app/pages/dashboard-user/dashboard-user-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardUserPageRoutingModule: () => (/* binding */ DashboardUserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _dashboard_user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-user.page */ 72011);




const routes = [{
  path: '',
  component: _dashboard_user_page__WEBPACK_IMPORTED_MODULE_0__.DashboardUserPage
}];
let DashboardUserPageRoutingModule = class DashboardUserPageRoutingModule {};
DashboardUserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], DashboardUserPageRoutingModule);


/***/ }),

/***/ 88848:
/*!***************************************************************!*\
  !*** ./src/app/pages/dashboard-user/dashboard-user.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardUserPageModule: () => (/* binding */ DashboardUserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _dashboard_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-user-routing.module */ 22457);
/* harmony import */ var _dashboard_user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-user.page */ 72011);
/* harmony import */ var src_app_components_test_result_c_test_result_c_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/test-result-c/test-result-c.component */ 14069);
/* harmony import */ var src_app_components_test_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/test/test.component */ 86043);
/* harmony import */ var src_app_components_test_loading_test_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/test-loading/test-loading.component */ 51301);










let DashboardUserPageModule = class DashboardUserPageModule {};
DashboardUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _dashboard_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardUserPageRoutingModule],
  declarations: [_dashboard_user_page__WEBPACK_IMPORTED_MODULE_1__.DashboardUserPage, src_app_components_test_result_c_test_result_c_component__WEBPACK_IMPORTED_MODULE_2__.TestResultCComponent, src_app_components_test_test_component__WEBPACK_IMPORTED_MODULE_3__.TestComponent, src_app_components_test_loading_test_loading_component__WEBPACK_IMPORTED_MODULE_4__.TestLoadingComponent]
})], DashboardUserPageModule);


/***/ }),

/***/ 72011:
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard-user/dashboard-user.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardUserPage: () => (/* binding */ DashboardUserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _dashboard_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-user.page.html?ngResource */ 67053);
/* harmony import */ var _dashboard_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-user.page.scss?ngResource */ 35857);
/* harmony import */ var _dashboard_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dashboard_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);




let DashboardUserPage = class DashboardUserPage {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
DashboardUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-dashboard-user',
  template: _dashboard_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_dashboard_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DashboardUserPage);


/***/ }),

/***/ 21467:
/*!********************************************************************************!*\
  !*** ./src/app/components/test-loading/test-loading.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.cargando {
  margin-top: 270px;
  align-items: center;
  justify-content: center;
  text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/app/components/test-loading/test-loading.component.scss"],"names":[],"mappings":"AAAA;EACE,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;AACF","sourcesContent":[".cargando{\r\n  margin-top: 270px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  }\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 91719:
/*!**********************************************************************************!*\
  !*** ./src/app/components/test-result-c/test-result-c.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.bg {
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
}

img {
  max-width: 100%;
  max-height: 100%;
}

.items {
  margin: 0;
  top: 50%;
  position: absolute;
  transform: translateY(-50%);
  padding-left: 30px;
  padding-right: 30px;
  align-items: center;
  justify-content: center;
}`, "",{"version":3,"sources":["webpack://./src/app/components/test-result-c/test-result-c.component.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;EACA,mBAAA;AACJ;;AAEA;EACI,eAAA;EACJ,gBAAA;AACA;;AAGA;EACI,SAAA;EACA,QAAA;EACA,kBAAA;EACA,2BAAA;EACA,kBAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;AAAJ","sourcesContent":[".bg{\r\n    width: 100%;\r\n    height: 100%;\r\n    align-items: center;\r\n    justify-content: center;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\nimg{\r\n    max-width:100%;\r\nmax-height:100%;\r\n\r\n}\r\n\r\n.items{\r\n    margin: 0;\r\n    top: 50%;\r\n    position: absolute;\r\n    transform: translateY(-50%);\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 80625:
/*!****************************************************************!*\
  !*** ./src/app/components/test/test.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.conexion {
  border-radius: 15px;
  margin: 20px 50px;
  background-color: #ff5100;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 50px;
  align-items: center;
}

.conexion div {
  margin: 10px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.test {
  width: 300px;
  height: 300px;
  font-size: 20px;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.boton {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-left: 5px;
  margin-right: 5px;
}

.enviar {
  display: flex;
  align-items: center;
  justify-content: center;
}`, "",{"version":3,"sources":["webpack://./src/app/components/test/test.component.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,iBAAA;EACA,yBAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,YAAA;EACA,mBAAA;AACF;;AAEA;EACE,YAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;EACA,4DAAA;AACF;;AAEA;EACI,YAAA;EACA,aAAA;EACA,eAAA;EACA,iBAAA;EACA,4DAAA;AACJ;;AAEE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,gBAAA;EACA,iBAAA;AACJ;;AAEE;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;AACJ","sourcesContent":[".conexion{\r\n  border-radius: 15px;\r\n  margin: 20px 50px;\r\n  background-color: #ff5100;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  height: 50px;\r\n  align-items: center;\r\n}\r\n\r\n.conexion div{\r\n  margin: 10px;\r\n  color: white;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.test{\r\n    width: 300px;\r\n    height: 300px;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n  .boton{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 100px;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n  }\r\n\r\n  .enviar{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 35857:
/*!**************************************************************************!*\
  !*** ./src/app/pages/dashboard-user/dashboard-user.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 22335:
/*!********************************************************************************!*\
  !*** ./src/app/components/test-loading/test-loading.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <div class=\"cargando\">\r\n    <ion-spinner icon=\"ios\"></ion-spinner><br>Espere por favor...\r\n    <br><br><ion-button class=\"enviar\">Cancelar</ion-button>\r\n  </div>\r\n</ion-content>";

/***/ }),

/***/ 63655:
/*!**********************************************************************************!*\
  !*** ./src/app/components/test-result-c/test-result-c.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card class=\"ion-text-center\">\r\n  <ion-card-header>\r\n    Resultado : {{this.actualtest.EDP}}\r\n </ion-card-header>\r\n  <ion-card-subtitle>\r\n    Fecha : {{this.temperatura}}\r\n  </ion-card-subtitle>\r\n  <ion-card-content>\r\n    <ng-template *ngIf=\"(this.actualtest.EDP === 'approved'); then thenBlock\" ></ng-template>\r\n    <ng-template *ngIf=\"(this.actualtest.EDP === 'failed'); then elseBlock\"></ng-template>\r\n    <ng-template #thenBlock>\r\n      <img alt=\"Passed\" class=\"test-img\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png\">\r\n    </ng-template>\r\n    <ng-template #elseBlock>\r\n      <img alt=\"Not-passed\" class=\"test-img\" src=\"https://coor.es/imgs/close-icon-png-19.png\">\r\n    </ng-template>\r\n    <div class=\"bg\">\r\n      <ion-button (click) ='loadDetails(this.actualtest)' > Detalles</ion-button>\r\n    </div>\r\n  </ion-card-content>\r\n</ion-card>\r\n";

/***/ }),

/***/ 68117:
/*!****************************************************************!*\
  !*** ./src/app/components/test/test.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content class=\"contenido\">\r\n    <div class=\"conexion\">\r\n          <div>\r\n            <ion-icon name=\"bluetooth\" ></ion-icon> BT-350\r\n          </div>\r\n          <div>   \r\n            Estado   \r\n            <ion-icon name=\"alert-circle\"></ion-icon>\r\n          </div>\r\n    </div>\r\n      <div class=\"boton\">\r\n        <ion-button class =\"test\" expand=\"block\" (click)=\"setOpen(true)\">REALIZAR TEST</ion-button>\r\n        <ion-modal [isOpen]=\"isModalOpen\">\r\n          <ng-template>\r\n            <ion-header>\r\n              <ion-toolbar>\r\n                <ion-title>Encuesta</ion-title>\r\n                <ion-buttons slot=\"end\">\r\n                  <ion-button (click)=\"setOpen(false)\">Cancelar</ion-button>\r\n                </ion-buttons>\r\n              </ion-toolbar>\r\n            </ion-header>\r\n            <ion-content class=\"ion-padding\">\r\n                  <form>\r\n                  <ion-list>\r\n                  <ion-item>\r\n                    <ion-label>¿Cómo te sientes el día de hoy?</ion-label>\r\n                    <ion-select (ionChange)=\"recoverAlertValue($event)\" placeholder=\"Seleccionar\" okText=\"Seleccionar\" cancelText=\"Cancelar\" required>\r\n                      <ion-select-option value=\"1\">Mal</ion-select-option>\r\n                      <ion-select-option value=\"2\">Cansado</ion-select-option>\r\n                      <ion-select-option value=\"3\">Regular</ion-select-option>\r\n                      <ion-select-option value=\"4\">Bien</ion-select-option>\r\n                      <ion-select-option value=\"5\">Excelente</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n  \r\n                  <ion-item>\r\n                    <ion-label>¿Cuántas horas dormiste?</ion-label>\r\n                    <ion-select (ionChange)=\"recoverAlertValue($event)\" placeholder=\"Seleccionar\" okText=\"Seleccionar\" cancelText=\"Cancelar\" required>\r\n                      <ion-select-option value=\"1\">0-2 horas</ion-select-option>\r\n                      <ion-select-option value=\"2\">2-4 horas</ion-select-option>\r\n                      <ion-select-option value=\"3\">4-6 horas</ion-select-option>\r\n                      <ion-select-option value=\"4\">6-8 horas</ion-select-option>\r\n                      <ion-select-option value=\"5\">Más de 8 horas</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n                </ion-list>\r\n              </form>\r\n                <br><br>\r\n                <div class=\"enviar\">\r\n                <ion-button class=\"enviar\" type=\"submit\" >Enviar</ion-button>\r\n                </div>\r\n            </ion-content>\r\n          </ng-template>\r\n        </ion-modal>\r\n      </div>\r\n</ion-content>\r\n ";

/***/ }),

/***/ 67053:
/*!**************************************************************************!*\
  !*** ./src/app/pages/dashboard-user/dashboard-user.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-toolbar>\r\n  <ion-title>Welcome Arturo!</ion-title>\r\n  <ion-buttons slot=\"end\">\r\n   <ion-back-button defaultHref=\"/\" text=\"\" color=\"dark\" icon=\"arrow-redo-circle-outline\" onclick=\"location.href=''\"></ion-back-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content>\r\n\r\n \r\n<app-test></app-test>\r\n\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard-user_dashboard-user_module_ts.js.map