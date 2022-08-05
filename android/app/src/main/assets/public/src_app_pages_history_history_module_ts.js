"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_history_history_module_ts"],{

/***/ 4207:
/*!*********************************************************!*\
  !*** ./src/app/pages/history/history-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryPageRoutingModule": () => (/* binding */ HistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history.page */ 2722);




const routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_0__.HistoryPage
    }
];
let HistoryPageRoutingModule = class HistoryPageRoutingModule {
};
HistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HistoryPageRoutingModule);



/***/ }),

/***/ 608:
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryPageModule": () => (/* binding */ HistoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history-routing.module */ 4207);
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.page */ 2722);







let HistoryPageModule = class HistoryPageModule {
};
HistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _history_routing_module__WEBPACK_IMPORTED_MODULE_0__.HistoryPageRoutingModule
        ],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_1__.HistoryPage]
    })
], HistoryPageModule);



/***/ }),

/***/ 2722:
/*!***********************************************!*\
  !*** ./src/app/pages/history/history.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryPage": () => (/* binding */ HistoryPage)
/* harmony export */ });
/* harmony import */ var _Users_arturo_Documents_Servicio_Social_Proyecto_DIRECSYS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _history_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.page.html?ngResource */ 6351);
/* harmony import */ var _history_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history.page.scss?ngResource */ 6496);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let HistoryPage = class HistoryPage {
  constructor(alertController) {
    this.alertController = alertController;
  }

  presentAlert(a) {
    var _this = this;

    return (0,_Users_arturo_Documents_Servicio_Social_Proyecto_DIRECSYS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: `Folio : ${a}`,
        subHeader: 'Fecha : 12/08/2022',
        message: `<ul> 
      <li>Prueba 1   = Paso</li>
      <li>Prueba 2   = No Paso</li>
      <li>Prueba 3   = No Paso</li>
      <li>Prueba 4   = Paso</li>
      
      </ul>`,
        buttons: ['Regresar'],
        cssClass: 'custom-alert'
      });
      yield alert.present();
    })();
  }

  ngOnInit() {}

};

HistoryPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController
}];

HistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-history',
  template: _history_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_history_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HistoryPage);


/***/ }),

/***/ 6496:
/*!************************************************************!*\
  !*** ./src/app/pages/history/history.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".id {\n  margin-left: 10px;\n}\n\nul {\n  list-style: none;\n}\n\nion-content {\n  --background: url(\"https://s29755.pcdn.co/wp-content/uploads/2019/08/2019_Top_Five_Class_5-Mack.jpg.optimal.jpg\") center/cover no-repeat ;\n}\n\n.bg-transparent {\n  background: transparent;\n}\n\nion-alert.custom-alert {\n  color: black;\n}\n\nli {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBSUE7RUFDSSx5SUFBQTtBQURKOztBQU1BO0VBQ0csdUJBQUE7QUFISDs7QUFNQTtFQUVJLFlBQUE7QUFKSjs7QUFPQTtFQUNJLFlBQUE7QUFKSiIsImZpbGUiOiJoaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pZHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuXG51bHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5cbmlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9zMjk3NTUucGNkbi5jby93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC8yMDE5X1RvcF9GaXZlX0NsYXNzXzUtTWFjay5qcGcub3B0aW1hbC5qcGdcIikgY2VudGVyL2NvdmVyIG5vLXJlcGVhdCAgO1xuICAgIFxuXG59XG5cbi5iZy10cmFuc3BhcmVudHtcbiAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tYWxlcnQuY3VzdG9tLWFsZXJ0e1xuICAgIC8vYmFja2dyb3VuZDogIHJnYigxMzksIDEzOSwgMTM5KTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbmxpe1xuICAgIGNvbG9yOiBibGFjaztcbn0iXX0= */";

/***/ }),

/***/ 6351:
/*!************************************************************!*\
  !*** ./src/app/pages/history/history.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-toolbar>\n  <ion-title>Historial de Pruebas</ion-title>\n</ion-toolbar>\n\n<ion-content >\n  <ion-list class=\"bg-transparent\">\n    <ion-card >\n      <ion-item detail=\"false\" (click)=\"presentAlert('1')\" color=\"danger\" >\n        <ion-icon name=\"close-circle\"></ion-icon>\n        <ion-label class=\"id\">\n          Folio 1\n        </ion-label>\n      </ion-item>\n    </ion-card>\n\n    <ion-card>\n\n      <ion-item detail=\"false\" (click)=\"presentAlert('2')\" color=\"danger\">\n        <ion-icon name=\"close-circle\"> </ion-icon>\n        <ion-label class=\"id\">\n          Folio 2\n        </ion-label>\n      </ion-item>\n      \n    </ion-card>\n\n    <ion-card>\n      <ion-item detail=\"false\" (click)=\"presentAlert('3')\" color=\"success\">\n        <ion-icon name=\"checkmark-done-circle\"> </ion-icon>\n        <ion-label class=\"id\">\n          Folio 3\n        </ion-label>\n      </ion-item>\n    </ion-card>\n\n  </ion-list>\n</ion-content>\n\n\n\n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_history_history_module_ts.js.map