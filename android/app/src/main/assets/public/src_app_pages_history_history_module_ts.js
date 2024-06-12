(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_history_history_module_ts"],{

/***/ 59351:
/*!*********************************************************!*\
  !*** ./src/app/pages/history/history-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistoryPageRoutingModule: () => (/* binding */ HistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history.page */ 1177);




const routes = [{
  path: '',
  component: _history_page__WEBPACK_IMPORTED_MODULE_0__.HistoryPage
}];
let HistoryPageRoutingModule = class HistoryPageRoutingModule {};
HistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], HistoryPageRoutingModule);


/***/ }),

/***/ 71590:
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistoryPageModule: () => (/* binding */ HistoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history-routing.module */ 59351);
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.page */ 1177);







let HistoryPageModule = class HistoryPageModule {};
HistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _history_routing_module__WEBPACK_IMPORTED_MODULE_0__.HistoryPageRoutingModule],
  declarations: [_history_page__WEBPACK_IMPORTED_MODULE_1__.HistoryPage]
})], HistoryPageModule);


/***/ }),

/***/ 1177:
/*!***********************************************!*\
  !*** ./src/app/pages/history/history.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistoryPage: () => (/* binding */ HistoryPage)
/* harmony export */ });
/* harmony import */ var F_Cursos_Ionic_Principal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _history_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.page.html?ngResource */ 41611);
/* harmony import */ var _history_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history.page.scss?ngResource */ 22015);
/* harmony import */ var _history_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_history_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/reports.service */ 66169);







let HistoryPage = class HistoryPage {
  constructor(alertController, rs) {
    this.alertController = alertController;
    this.rs = rs;
  }
  presentAlert(id, fdp, pee, phs, pra, prd, pro) {
    var _this = this;
    return (0,F_Cursos_Ionic_Principal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const a = new Date(fdp * 1000);
      // eslint-disable-next-line max-len
      const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      const year = a.getFullYear() - 1969;
      const month = months[a.getMonth()];
      const date = a.getDate();
      const time = date + ' ' + month + ' ' + year + ' ';
      const alert = yield _this.alertController.create({
        header: `Folio : ${id}`,
        subHeader: `Fecha : ${time}`,
        message: `<ul>
      <li>Estado Emocional   = ${pee}</li>
      <li>Horas de sueño     = ${phs}</li>
      <li>Alcoholimetro      = ${pra}</li>
      <li>PPrueba de Drogas  = ${prd}</li>
      <li>Prueba de ojos     = ${pro}</li>
      </ul>`,
        buttons: ['Regresar'],
        cssClass: 'custom-alert'
      });
      yield alert.present();
    })();
  }
  ngOnInit() {
    this.rs.tests.subscribe(data => {
      this.testsf = data;
      this.badge = data.length;
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController
  }, {
    type: src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_3__.ReportsService
  }];
};
HistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-history',
  template: _history_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_history_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], HistoryPage);


/***/ }),

/***/ 22015:
/*!************************************************************!*\
  !*** ./src/app/pages/history/history.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.id {
  margin-left: 10px;
}

ul {
  list-style: none;
}

ion-content {
  --background: url("https://s29755.pcdn.co/wp-content/uploads/2019/08/2019_Top_Five_Class_5-Mack.jpg.optimal.jpg") center/cover no-repeat ;
}

.bg-transparent {
  background: transparent;
}

ion-alert.custom-alert {
  color: black;
}

li {
  color: black;
}

ion-badge.badge {
  margin-top: 3px;
  --background: #1e1e1e;
  margin-right: 20%;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/history/history.page.scss"],"names":[],"mappings":"AAAA;EACI,iBAAA;AACJ;;AAGA;EACI,gBAAA;AAAJ;;AAIA;EACI,yIAAA;AADJ;;AAMA;EACG,uBAAA;AAHH;;AAMA;EAEI,YAAA;AAJJ;;AAOA;EACI,YAAA;AAJJ;;AAOA;EACI,eAAA;EACA,qBAAA;EACA,iBAAA;AAJJ","sourcesContent":[".id{\r\n    margin-left: 10px;\r\n}\r\n\r\n\r\nul{\r\n    list-style: none;\r\n}\r\n\r\n\r\nion-content{\r\n    --background: url(\"https://s29755.pcdn.co/wp-content/uploads/2019/08/2019_Top_Five_Class_5-Mack.jpg.optimal.jpg\") center/cover no-repeat  ;\r\n    \r\n\r\n}\r\n\r\n.bg-transparent{\r\n   background: transparent;\r\n}\r\n\r\nion-alert.custom-alert{\r\n    //background:  rgb(139, 139, 139);\r\n    color: black;\r\n}\r\n\r\nli{\r\n    color: black;\r\n}\r\n\r\nion-badge.badge{\r\n    margin-top: 3px;\r\n    --background : #1e1e1e;\r\n    margin-right : 20%;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 41611:
/*!************************************************************!*\
  !*** ./src/app/pages/history/history.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\r\n<ion-toolbar>\r\n  <ion-title>Historial de Pruebas</ion-title>\r\n  <ion-badge slot=\"end\"  class=\"badge\"> {{badge}}</ion-badge>\r\n</ion-toolbar>\r\n<ion-content >\r\n  <ion-list class=\"bg-transparent\">    \r\n    <ion-card *ngFor=\"let item of testsf\" >\r\n      <ng-template *ngIf=\"(item.EDP === 'approved'); then thenBlock else elseBlock\" >\r\n      </ng-template>\r\n      <ng-template #thenBlock>\r\n           <ion-item detail=\"false\" (click)=\"presentAlert(item.IDT, item.FDP,item.PEE, item.PHS, item.PRA, item.PRD, item.PRO)\" color=\"success\">\r\n             <ion-icon name=\"checkmark-done-circle\"> </ion-icon>\r\n             <ion-label class=\"id\">\r\n                Folio: {{item.IDT}}\r\n             </ion-label>\r\n           </ion-item>\r\n\r\n         </ng-template>\r\n      <ng-template #elseBlock>\r\n        <ion-item detail=\"false\" (click)=\"presentAlert(item.IDT, item.FDP,item.PEE, item.PHS, item.PRA, item.PRD, item.PRO)\" color=\"danger\">\r\n          <ion-icon name=\"close-circle\"> </ion-icon>\r\n          <ion-label class=\"id\">\r\n             Folio: {{item.IDT}}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ng-template> \r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_history_history_module_ts.js.map