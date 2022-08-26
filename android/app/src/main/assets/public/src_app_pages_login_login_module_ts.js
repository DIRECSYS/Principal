"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6552);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6552);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6552:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let LoginPage = class LoginPage {
    constructor() {
    }
    ngOnInit() {
    }
    login() {
        let correo = this.correo;
        if (correo == "admin") {
            location.href = "/admin-tabs";
        }
        else if (correo == "user") {
            location.href = "/tabs";
        }
    }
};
LoginPage.ctorParameters = () => [];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".bg-imagen {\n  background-image: url('bg-img4.jpg');\n  background-repeat: no-repeat;\n  background-position: bottom;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.bg-oscuro {\n  background-color: rgba(0, 0, 0, 0.2);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.header, .footer {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  gap: 1.5rem;\n  align-items: center;\n}\n\n.form-fields {\n  background-color: rgba(255, 255, 255, 0.7);\n  margin: 10px auto;\n  border-radius: 5px;\n  color: black;\n  padding: 5px 20px;\n  width: 50%;\n}\n\n@media (max-width: 650px) {\n  .form-fields {\n    width: 95%;\n  }\n}\n\n@media (max-width: 900px) {\n  .form-fields {\n    width: 80%;\n  }\n}\n\n.form-header {\n  text-align: center;\n}\n\n.form-header p, .form-header h1 {\n  margin: 10px;\n  padding: 0;\n}\n\n.form-header h1 {\n  font-weight: bold;\n  font-size: 24px;\n}\n\n.form-header p {\n  font-weight: normal;\n  font-size: 16px;\n  margin-bottom: 25px;\n}\n\n.form-inputs ion-input {\n  border: 1px solid black;\n  margin: 8px auto;\n  border-radius: 5px;\n  font-size: 14px;\n}\n\n.forgot-pass {\n  font-size: 10px;\n  font-weight: lighter;\n  margin: 0px;\n  padding: 0;\n  padding: 0px;\n  width: 100%;\n}\n\n.form-buttons {\n  width: 100%;\n  margin: 0;\n  margin-top: 25px;\n  margin-bottom: 10px;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.form-buttons ion-button {\n  width: 18rem;\n  margin: 0;\n  padding: 0;\n  font-size: 12px;\n}\n\n#logo {\n  height: 75%;\n}\n\n.header {\n  position: absolute;\n  top: -75px;\n  height: 50%;\n  max-height: 50%;\n}\n\n.footer {\n  height: 30px;\n  position: absolute;\n  bottom: 0px;\n  background-color: rgba(255, 102, 0, 0);\n}\n\n.buttons {\n  font-size: 12px;\n}\n\nion-button#help {\n  --border-radius: 50%;\n}\n\nion-label {\n  padding: 0;\n}\n\n.hyper {\n  color: #ff5100;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpREE7RUFDSSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFoREo7O0FBbURBO0VBQ0ksb0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBaERKOztBQW9EQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFqREo7O0FBb0RBO0VBQ0ksMENBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQWpESjs7QUFvREE7RUFDSTtJQUNJLFVBQUE7RUFqRE47QUFDRjs7QUFvREE7RUFDSTtJQUNJLFVBQUE7RUFsRE47QUFDRjs7QUF1REE7RUFDSSxrQkFBQTtBQXJESjs7QUF3REE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtBQXJESjs7QUF3REE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFyREo7O0FBd0RBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFyREo7O0FBd0RBO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQXJESjs7QUF3REE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBckRKOztBQXdEQTtFQUNJLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXJESjs7QUF3REE7RUFDSSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBckRKOztBQXdEQTtFQUNJLFdBQUE7QUFyREo7O0FBd0RBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFyREo7O0FBd0RBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0FBckRKOztBQXdEQTtFQUNJLGVBQUE7QUFyREo7O0FBd0RBO0VBQ0ksb0JBQUE7QUFyREo7O0FBd0RBO0VBQ0ksVUFBQTtBQXJESjs7QUF3REE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFyREoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmJne1xuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiaHR0cHM6Ly9tZWRpYS5pc3RvY2twaG90by5jb20vcGhvdG9zL3RoZS10cnVjay1ydW5zLW9uLXRoZS1oaWdod2F5LXdpdGgtc3BlZWQtcGljdHVyZS1pZDEyNDk4ODg4NTc/az0yMCZtPTEyNDk4ODg4NTcmcz02MTJ4NjEyJnc9MCZoPTQxLW13bXp2bTgxelFiUGpMOXNTc016eVM2ejcwMGdVSWJHOVBVVVhkTkk9XCIpO1xuLy8gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4vLyAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyB9XG4vLyAuZWxlbXN7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC42KTtcbi8vIH1cblxuLy8gLmZvcm0tZmllbGRze1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuNik7XG4vLyAgICAgd2lkdGg6IDEwMCUgO1xuLy8gICAgIGhlaWdodDogMTAwJTtcbi8vICAgICBmbGV4OmNvbnRlbnQ7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuLy8gfVxuLy8gLmxvZ297XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6IG9yYW5nZSwgJGFscGhhOiAxKTtcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHRvcDogMHB4XG4vLyB9XG5cbi8vIC5mb290ZXIge1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiBvcmFuZ2UsICRhbHBoYTogMSk7XG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBoZWlnaHQ6IDUwcHg7XG4vLyAgICAgYm90dG9tOiAwcHg7XG4vLyB9XG5cbi8vIC5idXR0b257XG4gICAgXG4gICBcbi8vIH1cblxuLmJnLWltYWdlbntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi4uLy4uLy4uL2Fzc2V0cy9iZy1pbWc0LmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5iZy1vc2N1cm97XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC4yKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuXG4uaGVhZGVyLCAuZm9vdGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxLjVyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvcm0tZmllbGRze1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCl7XG4gICAgLmZvcm0tZmllbGRze1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgLmZvcm0tZmllbGRze1xuICAgICAgICB3aWR0aDogODAlO1xuICAgIH1cbn1cblxuXG5cbi5mb3JtLWhlYWRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb3JtLWhlYWRlciBwLCAuZm9ybS1oZWFkZXIgaDF7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5mb3JtLWhlYWRlciBoMXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5mb3JtLWhlYWRlciBwe1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5mb3JtLWlucHV0cyBpb24taW5wdXR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgbWFyZ2luOiA4cHggYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZm9yZ290LXBhc3N7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybS1idXR0b25ze1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb3JtLWJ1dHRvbnMgaW9uLWJ1dHRvbntcbiAgICB3aWR0aDogMThyZW07XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbiNsb2dve1xuICAgIGhlaWdodDogNzUlO1xufVxuXG4uaGVhZGVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC03NXB4O1xuICAgIGhlaWdodDogNTAlO1xuICAgIG1heC1oZWlnaHQ6IDUwJTtcbn1cblxuLmZvb3RlcntcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjY2MDAwMDtcbn1cblxuLmJ1dHRvbnN7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5pb24tYnV0dG9uI2hlbHB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbmlvbi1sYWJlbHtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uaHlwZXJ7XG4gICAgY29sb3I6ICNmZjUxMDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n<!-- <ion-content scrollY=\"false\">\n  \n  <div class=\"logo\">\n    <img src=\"../../../assets/direcsys.svg\" alt=\"\" srcset=\"\" height=\"100px\">\n  </div>\n  \n  <div class=\"bg\">\n    <div class=\"elems\">\n      <div class=\"form-fields\">\n        <form [formGroup]=\"ngForm\">\n          <ion-input placeholder=\"Matricula\" class=\"inputs\" ></ion-input>\n          <ion-input placeholder=\"Contraseña\" class=\"inputs\"></ion-input>  \n        </form>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"footer\">\n    <ion-button class=\"button\" color=\"medium\" (click)=\"login()\">\n      <ion-label> Iniciar Sesion</ion-label>\n    </ion-button>\n  </div>\n  \n</ion-content> -->\n\n<ion-content scrollY=\"false\">\n  <div class=\"bg-imagen\">\n\n    <div class=\"header\">\n      <img src=\"../../../assets/direcsys.svg\" alt=\"\" srcset=\"\" id=\"logo\">\n    </div>\n\n  \n    <div class=\"bg-oscuro\">\n      <div class=\"form-fields\">\n        <form >\n          <div class=\"form-header\">\n            <h1>¡Bienvenido!</h1>\n            <p>Inicia sesión en tu cuenta</p>\n          </div>\n          <div class=\"form-inputs\">\n            <ion-input placeholder=\" Correo\" class=\"inputs\" [(ngModel)]=\"correo\" name=\"usuario\"></ion-input>\n            <ion-input placeholder=\" Contraseña\" class=\"inputs\" type=\"password\"></ion-input>  \n            <ion-label class=\"forgot-pass\"><a href=\"\" class=\"hyper\">¿Olvidaste tu contraseña?</a></ion-label>\n          </div>\n          <div class=\"form-buttons\">\n            <ion-button class=\"buttons\" (click)=\"login()\">\n              <ion-label>Iniciar sesión</ion-label>\n            </ion-button>\n          </div>\n        </form>\n      </div>\n    </div>\n  \n\n  \n    <div class=\"footer\">\n      <!-- <ion-button class=\"buttons\" color=\"light\" (click)=\"login()\">\n        <ion-label>Iniciar sesión</ion-label>\n      </ion-button>\n      <ion-button class=\"buttons\" color=\"light\" href=\"/register\">\n        <ion-label>Registrarme</ion-label>\n      </ion-button>\n      <ion-button class=\"buttons\" id=\"help\" color=\"warning\" href=\"\">\n        <ion-label>?</ion-label>\n      </ion-button> -->\n      <p class=\"register-text\">No tienes una cuenta <a href=\"/register\" class=\"hyper\">Regístrate</a></p>\n    </div>\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map