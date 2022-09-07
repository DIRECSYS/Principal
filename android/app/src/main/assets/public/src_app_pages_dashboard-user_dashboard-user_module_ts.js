"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard-user_dashboard-user_module_ts"],{

/***/ 22358:
/*!*******************************************************************!*\
  !*** ./src/app/components/test-loading/test-loading.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestLoadingComponent": () => (/* binding */ TestLoadingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _test_loading_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-loading.component.html?ngResource */ 16282);
/* harmony import */ var _test_loading_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test-loading.component.scss?ngResource */ 82804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let TestLoadingComponent = class TestLoadingComponent {
    constructor() { }
    ngOnInit() { }
};
TestLoadingComponent.ctorParameters = () => [];
TestLoadingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-test-loading',
        template: _test_loading_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_test_loading_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TestLoadingComponent);



/***/ }),

/***/ 81817:
/*!*********************************************************************!*\
  !*** ./src/app/components/test-result-c/test-result-c.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestResultCComponent": () => (/* binding */ TestResultCComponent)
/* harmony export */ });
/* harmony import */ var _Users_arturo_Documents_Servicio_Social_Proyecto_DIRECSYS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _test_result_c_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test-result-c.component.html?ngResource */ 87674);
/* harmony import */ var _test_result_c_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test-result-c.component.scss?ngResource */ 30723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/reports.service */ 91291);







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

    return (0,_Users_arturo_Documents_Servicio_Social_Proyecto_DIRECSYS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

};

TestResultCComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
}, {
  type: _services_reports_service__WEBPACK_IMPORTED_MODULE_3__.ReportsService
}];

TestResultCComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-test-result-c',
  template: _test_result_c_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_test_result_c_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], TestResultCComponent);


/***/ }),

/***/ 41926:
/*!***************************************************!*\
  !*** ./src/app/components/test/test.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestComponent": () => (/* binding */ TestComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _test_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.component.html?ngResource */ 98590);
/* harmony import */ var _test_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.component.scss?ngResource */ 80223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let TestComponent = class TestComponent {
    constructor() {
        this.isModalOpen = false;
    }
    ngOnInit() { }
    setOpen(isOpen) {
        this.isModalOpen = isOpen;
    }
};
TestComponent.ctorParameters = () => [];
TestComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-test',
        template: _test_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_test_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TestComponent);



/***/ }),

/***/ 21112:
/*!***********************************************************************!*\
  !*** ./src/app/pages/dashboard-user/dashboard-user-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardUserPageRoutingModule": () => (/* binding */ DashboardUserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _dashboard_user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-user.page */ 24067);




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

/***/ 78604:
/*!***************************************************************!*\
  !*** ./src/app/pages/dashboard-user/dashboard-user.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardUserPageModule": () => (/* binding */ DashboardUserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _dashboard_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-user-routing.module */ 21112);
/* harmony import */ var _dashboard_user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-user.page */ 24067);
/* harmony import */ var src_app_components_test_result_c_test_result_c_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/test-result-c/test-result-c.component */ 81817);
/* harmony import */ var src_app_components_test_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/test/test.component */ 41926);
/* harmony import */ var src_app_components_test_loading_test_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/test-loading/test-loading.component */ 22358);










let DashboardUserPageModule = class DashboardUserPageModule {
};
DashboardUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _dashboard_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardUserPageRoutingModule
        ],
        declarations: [_dashboard_user_page__WEBPACK_IMPORTED_MODULE_1__.DashboardUserPage, src_app_components_test_result_c_test_result_c_component__WEBPACK_IMPORTED_MODULE_2__.TestResultCComponent, src_app_components_test_test_component__WEBPACK_IMPORTED_MODULE_3__.TestComponent, src_app_components_test_loading_test_loading_component__WEBPACK_IMPORTED_MODULE_4__.TestLoadingComponent]
    })
], DashboardUserPageModule);



/***/ }),

/***/ 24067:
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard-user/dashboard-user.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardUserPage": () => (/* binding */ DashboardUserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dashboard_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-user.page.html?ngResource */ 92684);
/* harmony import */ var _dashboard_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-user.page.scss?ngResource */ 69866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




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

/***/ 82804:
/*!********************************************************************************!*\
  !*** ./src/app/components/test-loading/test-loading.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".cargando {\n  margin-top: 270px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QtbG9hZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoidGVzdC1sb2FkaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmdhbmRve1xuICBtYXJnaW4tdG9wOiAyNzBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuIl19 */";

/***/ }),

/***/ 30723:
/*!**********************************************************************************!*\
  !*** ./src/app/components/test-result-c/test-result-c.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ".bg {\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  flex-direction: row;\n}\n\nimg {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.items {\n  margin: 0;\n  top: 50%;\n  position: absolute;\n  transform: translateY(-50%);\n  padding-left: 30px;\n  padding-right: 30px;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QtcmVzdWx0LWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDSixnQkFBQTtBQUNBOztBQUdBO0VBQ0ksU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBSiIsImZpbGUiOiJ0ZXN0LXJlc3VsdC1jLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuaW1ne1xuICAgIG1heC13aWR0aDoxMDAlO1xubWF4LWhlaWdodDoxMDAlO1xuXG59XG5cbi5pdGVtc3tcbiAgICBtYXJnaW46IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */";

/***/ }),

/***/ 80223:
/*!****************************************************************!*\
  !*** ./src/app/components/test/test.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".conexion {\n  border-radius: 15px;\n  margin: 20px 50px;\n  background-color: #ff5100;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  height: 50px;\n  align-items: center;\n}\n\n.conexion div {\n  margin: 10px;\n  color: white;\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.test {\n  width: 300px;\n  height: 300px;\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.boton {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 100px;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.enviar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0REFBQTtBQUNGOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0REFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0oiLCJmaWxlIjoidGVzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25leGlvbntcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgbWFyZ2luOiAyMHB4IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjUxMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb25leGlvbiBkaXZ7XG4gIG1hcmdpbjogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5cbi50ZXN0e1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5cbiAgLmJvdG9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG5cbiAgLmVudmlhcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICJdfQ== */";

/***/ }),

/***/ 69866:
/*!**************************************************************************!*\
  !*** ./src/app/pages/dashboard-user/dashboard-user.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtdXNlci5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 16282:
/*!********************************************************************************!*\
  !*** ./src/app/components/test-loading/test-loading.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"cargando\">\n    <ion-spinner icon=\"ios\"></ion-spinner><br>Espere por favor...\n    <br><br><ion-button class=\"enviar\">Cancelar</ion-button>\n  </div>\n</ion-content>";

/***/ }),

/***/ 87674:
/*!**********************************************************************************!*\
  !*** ./src/app/components/test-result-c/test-result-c.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-card class=\"ion-text-center\">\n  <ion-card-header>\n    Resultado : {{this.actualtest.EDP}}\n </ion-card-header>\n  <ion-card-subtitle>\n    Fecha : {{this.temperatura}}\n  </ion-card-subtitle>\n  <ion-card-content>\n    <ng-template *ngIf=\"(this.actualtest.EDP === 'approved'); then thenBlock\" ></ng-template>\n    <ng-template *ngIf=\"(this.actualtest.EDP === 'failed'); then elseBlock\"></ng-template>\n    <ng-template #thenBlock>\n      <img alt=\"Passed\" class=\"test-img\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png\">\n    </ng-template>\n    <ng-template #elseBlock>\n      <img alt=\"Not-passed\" class=\"test-img\" src=\"https://coor.es/imgs/close-icon-png-19.png\">\n    </ng-template>\n    <div class=\"bg\">\n      <ion-button (click) ='loadDetails(this.actualtest)' > Detalles</ion-button>\n    </div>\n  </ion-card-content>\n</ion-card>\n";

/***/ }),

/***/ 98590:
/*!****************************************************************!*\
  !*** ./src/app/components/test/test.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"contenido\">\n    <div class=\"conexion\">\n          <div>\n            <ion-icon name=\"bluetooth\" ></ion-icon> BT-350\n          </div>\n          <div>   \n            Estado   \n            <ion-icon name=\"alert-circle\"></ion-icon>\n          </div>\n    </div>\n      <div class=\"boton\">\n        <ion-button class =\"test\" expand=\"block\" (click)=\"setOpen(true)\">REALIZAR TEST</ion-button>\n        <ion-modal [isOpen]=\"isModalOpen\">\n          <ng-template>\n            <ion-header>\n              <ion-toolbar>\n                <ion-title>Encuesta</ion-title>\n                <ion-buttons slot=\"end\">\n                  <ion-button (click)=\"setOpen(false)\">Cancelar</ion-button>\n                </ion-buttons>\n              </ion-toolbar>\n            </ion-header>\n            <ion-content class=\"ion-padding\">\n              <p>\n                <ion-list>\n                  <ion-item>\n                    <ion-label>¿Cómo te sientes el día de hoy?</ion-label>\n                    <ion-select placeholder=\"Seleccionar\" okText=\"Seleccionar\" cancelText=\"Cancelar\">\n                      <ion-select-option value=\"mal\">Mal</ion-select-option>\n                      <ion-select-option value=\"cansado\">Cansado</ion-select-option>\n                      <ion-select-option value=\"regular\">Regular</ion-select-option>\n                      <ion-select-option value=\"bien\">Bien</ion-select-option>\n                      <ion-select-option value=\"excelente\">Excelente</ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                  <ion-item>\n                    <ion-label>¿Cuántas horas dormiste?</ion-label>\n                    <ion-select placeholder=\"Seleccionar\" okText=\"Seleccionar\" cancelText=\"Cancelar\">\n                      <ion-select-option value=\"dos\">0-2 horas</ion-select-option>\n                      <ion-select-option value=\"cuatro\">2-4 horas</ion-select-option>\n                      <ion-select-option value=\"seis\">4-6 horas</ion-select-option>\n                      <ion-select-option value=\"ocho\">6-8 horas</ion-select-option>\n                      <ion-select-option value=\"diez\">Más de 8 horas</ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-list>\n              </p>\n                <br><br>\n                <div class=\"enviar\">\n                <ion-button class=\"enviar\">Enviar</ion-button>\n                </div>\n            </ion-content>\n          </ng-template>\n        </ion-modal>\n      </div>\n</ion-content>\n ";

/***/ }),

/***/ 92684:
/*!**************************************************************************!*\
  !*** ./src/app/pages/dashboard-user/dashboard-user.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-toolbar>\n  <ion-title>Welcome Arturo!</ion-title>\n  <ion-buttons slot=\"end\">\n   <ion-back-button defaultHref=\"/\" text=\"\" color=\"dark\" icon=\"arrow-redo-circle-outline\" onclick=\"location.href=''\"></ion-back-button>\n  </ion-buttons>\n</ion-toolbar>\n\n<ion-content>\n\n \n<app-test-loading></app-test-loading>\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard-user_dashboard-user_module_ts.js.map