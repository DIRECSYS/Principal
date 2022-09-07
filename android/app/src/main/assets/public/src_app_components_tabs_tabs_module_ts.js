"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_components_tabs_tabs_module_ts"],{

/***/ 83738:
/*!********************************************************!*\
  !*** ./src/app/components/tabs/tabs-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 57330);




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'history',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_history_history_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/pages/history/history.module */ 10608)).then(m => m.HistoryPageModule)
            },
            {
                path: 'settings',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_settings-user_settings-user_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! src/app/pages/settings-user/settings-user.module */ 30084)).then(m => m.SettingsUserPageModule)
            },
            {
                path: 'dashboard',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_dashboard-user_dashboard-user_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/pages/dashboard-user/dashboard-user.module */ 78604)).then(m => m.DashboardUserPageModule)
            },
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_dashboard-user_dashboard-user_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/pages//dashboard-user/dashboard-user.module */ 78604)).then(m => m.DashboardUserPageModule)
            }
        ]
    },
    {
        path: '',
        redirectTo: 'src/app/components/tabs',
        pathMatch: 'full'
    },
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 51802:
/*!************************************************!*\
  !*** ./src/app/components/tabs/tabs.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 83738);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 57330);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 57330:
/*!**********************************************!*\
  !*** ./src/app/components/tabs/tabs.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 89365);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 3963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let TabsPage = class TabsPage {
    constructor() { }
    ngOnInit() {
    }
};
TabsPage.ctorParameters = () => [];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 3963:
/*!***********************************************************!*\
  !*** ./src/app/components/tabs/tabs.page.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".tab-selected {\n  background: #d64400;\n  color: white !important;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiLXNlbGVjdGVke1xuICAgIGJhY2tncm91bmQ6ICNkNjQ0MDA7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufSJdfQ== */";

/***/ }),

/***/ 89365:
/*!***********************************************************!*\
  !*** ./src/app/components/tabs/tabs.page.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    \n\n    <ion-tab-button tab=\"settings\" mode=\"md\">\n      <ion-icon name=\"cog-outline\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"dashboard\" mode=\"md\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"history\" mode=\"md\">\n      <ion-icon name=\"file-tray-stacked-outline\"></ion-icon>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n</ion-tabs>";

/***/ })

}]);
//# sourceMappingURL=src_app_components_tabs_tabs_module_ts.js.map