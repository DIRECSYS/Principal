"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard-user_dashboard-user_module_ts"],{

/***/ 1817:
/*!*********************************************************************!*\
  !*** ./src/app/components/test-result-c/test-result-c.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestResultCComponent": () => (/* binding */ TestResultCComponent)
/* harmony export */ });
/* harmony import */ var _Users_arturo_Documents_Servicio_Social_Proyecto_DIRECSYS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _test_result_c_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test-result-c.component.html?ngResource */ 7674);
/* harmony import */ var _test_result_c_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test-result-c.component.scss?ngResource */ 723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let TestResultCComponent = class TestResultCComponent {
  constructor(toastController) {
    this.toastController = toastController;
  }

  ngOnInit() {}

  loadDetails() {
    var _this = this;

    return (0,_Users_arturo_Documents_Servicio_Social_Proyecto_DIRECSYS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        header: 'Detalles de prueba',
        message: `<ul> 
      <li> Prueba 1 = Paso </li>
      <li> Prueba 2 = Paso </li>
      <li> Prueba 3 = Paso </li>
      <li> Prueba 4 = Paso </li>
      </ul>`,
        icon: 'checkmark-circle',
        position: 'bottom',
        buttons: [{
          text: 'Listo',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      yield toast.present();
      const {
        role
      } = yield toast.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    })();
  }

};

TestResultCComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController
}];

TestResultCComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-test-result-c',
  template: _test_result_c_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_test_result_c_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], TestResultCComponent);


/***/ }),

/***/ 1112:
/*!***********************************************************************!*\
  !*** ./src/app/pages/dashboard-user/dashboard-user-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardUserPageRoutingModule": () => (/* binding */ DashboardUserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _dashboard_user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-user.page */ 4067);




const routes = [
    {
        path: '',
        component: _dashboard_user_page__WEBPACK_IMPORTED_MODULE_0__.DashboardUserPage
    }
];
let DashboardUserPageRoutingModule = class DashboardUserPageRoutingModule {
};
DashboardUserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardUserPageRoutingModule);



/***/ }),

/***/ 8604:
/*!***************************************************************!*\
  !*** ./src/app/pages/dashboard-user/dashboard-user.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardUserPageModule": () => (/* binding */ DashboardUserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _dashboard_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-user-routing.module */ 1112);
/* harmony import */ var _dashboard_user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-user.page */ 4067);
/* harmony import */ var src_app_components_test_result_c_test_result_c_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/test-result-c/test-result-c.component */ 1817);








let DashboardUserPageModule = class DashboardUserPageModule {
};
DashboardUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _dashboard_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardUserPageRoutingModule
        ],
        declarations: [_dashboard_user_page__WEBPACK_IMPORTED_MODULE_1__.DashboardUserPage, src_app_components_test_result_c_test_result_c_component__WEBPACK_IMPORTED_MODULE_2__.TestResultCComponent]
    })
], DashboardUserPageModule);



/***/ }),

/***/ 4067:
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard-user/dashboard-user.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardUserPage": () => (/* binding */ DashboardUserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _dashboard_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-user.page.html?ngResource */ 2684);
/* harmony import */ var _dashboard_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-user.page.scss?ngResource */ 9866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let DashboardUserPage = class DashboardUserPage {
    constructor() { }
    ngOnInit() {
    }
};
DashboardUserPage.ctorParameters = () => [];
DashboardUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-dashboard-user',
        template: _dashboard_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dashboard_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardUserPage);



/***/ }),

/***/ 723:
/*!**********************************************************************************!*\
  !*** ./src/app/components/test-result-c/test-result-c.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ".bg {\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  flex-direction: row;\n}\n\nimg {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.items {\n  margin: 0;\n  top: 50%;\n  position: absolute;\n  transform: translateY(-50%);\n  padding-left: 30px;\n  padding-right: 30px;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QtcmVzdWx0LWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDSixnQkFBQTtBQUNBOztBQUdBO0VBQ0ksU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBSiIsImZpbGUiOiJ0ZXN0LXJlc3VsdC1jLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuaW1ne1xuICAgIG1heC13aWR0aDoxMDAlO1xubWF4LWhlaWdodDoxMDAlO1xuXG59XG5cbi5pdGVtc3tcbiAgICBtYXJnaW46IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */";

/***/ }),

/***/ 9866:
/*!**************************************************************************!*\
  !*** ./src/app/pages/dashboard-user/dashboard-user.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtdXNlci5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 7674:
/*!**********************************************************************************!*\
  !*** ./src/app/components/test-result-c/test-result-c.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-card class=\"ion-text-center\">\n  <ion-card-header>\n    Resultado : Paso\n  </ion-card-header>\n  <ion-card-subtitle>\n    Fecha : 02/08/2022\n  </ion-card-subtitle>\n  <ion-card-content>\n    <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png\">\n    <div class=\"bg\">\n      <ion-button (click) ='loadDetails()' > Detalles</ion-button>\n    </div>\n  </ion-card-content>\n</ion-card>";

/***/ }),

/***/ 2684:
/*!**************************************************************************!*\
  !*** ./src/app/pages/dashboard-user/dashboard-user.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Welcome Arturo!</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-test-result-c></app-test-result-c>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard-user_dashboard-user_module_ts.js.map