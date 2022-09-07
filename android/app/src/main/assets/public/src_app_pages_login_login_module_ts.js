"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 85691:
/*!*********************************************************************!*\
  !*** ./src/app/components/splash-screen/splash-screen.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashScreenComponent": () => (/* binding */ SplashScreenComponent)
/* harmony export */ });
/* harmony import */ var _Users_arturo_Documents_Servicio_Social_Proyecto_DIRECSYS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _splash_screen_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash-screen.component.html?ngResource */ 35907);
/* harmony import */ var _splash_screen_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splash-screen.component.scss?ngResource */ 91913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);






let SplashScreenComponent = class SplashScreenComponent {
  constructor(tc) {
    this.tc = tc;
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_arturo_Documents_Servicio_Social_Proyecto_DIRECSYS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.tc.create({
        message: '',
        cssClass: 'splash-screen',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
    })();
  }

};

SplashScreenComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController
}];

SplashScreenComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-splash-screen',
  template: _splash_screen_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_splash_screen_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SplashScreenComponent);


/***/ }),

/***/ 73403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




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

/***/ 21053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 73403);
/* harmony import */ var src_app_components_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/splash-screen/splash-screen.component */ 85691);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page */ 3058);









let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_2__.LoginPage, src_app_components_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_1__.SplashScreenComponent]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 96752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 98433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);





let LoginPage = class LoginPage {
    constructor(auth) {
        this.auth = auth;
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
    loginFirebase() {
        let email = this.correo;
        let password = this.password;
        console.log(email, password);
        this.auth.login(email, password);
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 91913:
/*!**********************************************************************************!*\
  !*** ./src/app/components/splash-screen/splash-screen.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "div {\n  width: 100%;\n  height: 100%;\n  background-color: aqua;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaC1zY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBQ0oiLCJmaWxlIjoic3BsYXNoLXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn0iXX0= */";

/***/ }),

/***/ 98433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".bg-imagen {\n  background-image: url('bg-img4.jpg');\n  background-repeat: no-repeat;\n  background-position: bottom;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.bg-oscuro {\n  background-color: rgba(0, 0, 0, 0.2);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.header, .footer {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  gap: 1.5rem;\n  align-items: center;\n}\n\n.form-fields {\n  background-color: rgba(255, 255, 255, 0.7);\n  margin: 10px auto;\n  border-radius: 5px;\n  color: black;\n  padding: 5px 20px;\n  width: 50%;\n}\n\n@media (max-width: 650px) {\n  .form-fields {\n    width: 95%;\n  }\n}\n\n@media (max-width: 900px) {\n  .form-fields {\n    width: 80%;\n  }\n}\n\n.form-header {\n  text-align: center;\n}\n\n.form-header p, .form-header h1 {\n  margin: 10px;\n  padding: 0;\n}\n\n.form-header h1 {\n  font-weight: bold;\n  font-size: 24px;\n}\n\n.form-header p {\n  font-weight: normal;\n  font-size: 16px;\n  margin-bottom: 25px;\n}\n\n.form-inputs ion-input {\n  border: 1px solid black;\n  margin: 8px auto;\n  border-radius: 5px;\n  font-size: 14px;\n}\n\n.forgot-pass {\n  font-size: 10px;\n  font-weight: lighter;\n  margin: 0px;\n  padding: 0;\n  padding: 0px;\n  width: 100%;\n}\n\n.form-buttons {\n  width: 100%;\n  margin: 0;\n  margin-top: 25px;\n  margin-bottom: 10px;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.form-buttons ion-button {\n  width: 18rem;\n  margin: 0;\n  padding: 0;\n  font-size: 12px;\n}\n\n#logo {\n  height: 40%;\n  object-fit: cover;\n}\n\n.header {\n  position: absolute;\n  top: -75px;\n  height: 50%;\n}\n\n.footer {\n  height: 30px;\n  position: absolute;\n  bottom: 0px;\n  background-color: rgba(255, 102, 0, 0);\n}\n\n.buttons {\n  font-size: 12px;\n}\n\nion-button#help {\n  --border-radius: 50%;\n}\n\nion-label {\n  padding: 0;\n}\n\n.hyper {\n  color: #ff5100;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpREE7RUFDSSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFoREo7O0FBbURBO0VBQ0ksb0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBaERKOztBQW9EQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFqREo7O0FBb0RBO0VBQ0ksMENBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQWpESjs7QUFvREE7RUFDSTtJQUNJLFVBQUE7RUFqRE47QUFDRjs7QUFvREE7RUFDSTtJQUNJLFVBQUE7RUFsRE47QUFDRjs7QUF1REE7RUFDSSxrQkFBQTtBQXJESjs7QUF3REE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtBQXJESjs7QUF3REE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFyREo7O0FBd0RBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFyREo7O0FBd0RBO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQXJESjs7QUF3REE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBckRKOztBQXdEQTtFQUNJLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXJESjs7QUF3REE7RUFDSSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBckRKOztBQXdEQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQXJESjs7QUF3REE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBckRKOztBQXdEQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtBQXJESjs7QUF3REE7RUFDSSxlQUFBO0FBckRKOztBQXdEQTtFQUNJLG9CQUFBO0FBckRKOztBQXdEQTtFQUNJLFVBQUE7QUFyREo7O0FBd0RBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBckRKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5iZ3tcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChcImh0dHBzOi8vbWVkaWEuaXN0b2NrcGhvdG8uY29tL3Bob3Rvcy90aGUtdHJ1Y2stcnVucy1vbi10aGUtaGlnaHdheS13aXRoLXNwZWVkLXBpY3R1cmUtaWQxMjQ5ODg4ODU3P2s9MjAmbT0xMjQ5ODg4ODU3JnM9NjEyeDYxMiZ3PTAmaD00MS1td216dm04MXpRYlBqTDlzU3NNenlTNno3MDBnVUliRzlQVVVYZE5JPVwiKTtcbi8vICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuLy8gICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGhlaWdodDogMTAwJTtcbi8vICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gfVxuLy8gLmVsZW1ze1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuNik7XG4vLyB9XG5cbi8vIC5mb3JtLWZpZWxkc3tcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjYpO1xuLy8gICAgIHdpZHRoOiAxMDAlIDtcbi8vICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgZmxleDpjb250ZW50O1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbi8vIH1cbi8vIC5sb2dve1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiBvcmFuZ2UsICRhbHBoYTogMSk7XG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB0b3A6IDBweFxuLy8gfVxuXG4vLyAuZm9vdGVyIHtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogb3JhbmdlLCAkYWxwaGE6IDEpO1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgaGVpZ2h0OiA1MHB4O1xuLy8gICAgIGJvdHRvbTogMHB4O1xuLy8gfVxuXG4vLyAuYnV0dG9ue1xuICAgIFxuICAgXG4vLyB9XG5cbi5iZy1pbWFnZW57XG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmctaW1nNC5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYmctb3NjdXJve1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuMik7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cblxuLmhlYWRlciwgLmZvb3RlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMS41cmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb3JtLWZpZWxkc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICB3aWR0aDogNTAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpe1xuICAgIC5mb3JtLWZpZWxkc3tcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIC5mb3JtLWZpZWxkc3tcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG59XG5cblxuXG4uZm9ybS1oZWFkZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9ybS1oZWFkZXIgcCwgLmZvcm0taGVhZGVyIGgxe1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uZm9ybS1oZWFkZXIgaDF7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uZm9ybS1oZWFkZXIgcHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uZm9ybS1pbnB1dHMgaW9uLWlucHV0e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIG1hcmdpbjogOHB4IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZvcmdvdC1wYXNze1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tYnV0dG9uc3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9ybS1idXR0b25zIGlvbi1idXR0b257XG4gICAgd2lkdGg6IDE4cmVtO1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4jbG9nb3tcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmhlYWRlcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtNzVweDtcbiAgICBoZWlnaHQ6IDUwJTtcbn1cblxuLmZvb3RlcntcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjY2MDAwMDtcbn1cblxuLmJ1dHRvbnN7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5pb24tYnV0dG9uI2hlbHB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbmlvbi1sYWJlbHtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uaHlwZXJ7XG4gICAgY29sb3I6ICNmZjUxMDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */";

/***/ }),

/***/ 35907:
/*!**********************************************************************************!*\
  !*** ./src/app/components/splash-screen/splash-screen.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "";

/***/ }),

/***/ 96752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n<!-- <ion-content scrollY=\"false\">\n  \n  <div class=\"logo\">\n    <img src=\"../../../assets/direcsys.svg\" alt=\"\" srcset=\"\" height=\"100px\">\n  </div>\n  \n  <div class=\"bg\">\n    <div class=\"elems\">\n      <div class=\"form-fields\">\n        <form [formGroup]=\"ngForm\">\n          <ion-input placeholder=\"Matricula\" class=\"inputs\" ></ion-input>\n          <ion-input placeholder=\"Contraseña\" class=\"inputs\"></ion-input>  \n        </form>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"footer\">\n    <ion-button class=\"button\" color=\"medium\" (click)=\"login()\">\n      <ion-label> Iniciar Sesion</ion-label>\n    </ion-button>\n  </div>\n  \n</ion-content> -->\n\n<ion-content scrollY=\"false\">\n  <div class=\"bg-imagen\">\n\n    <div class=\"header\">\n      <img src=\"../../../assets/direcsys.svg\" alt=\"\" srcset=\"\" id=\"logo\">\n    </div>\n\n  \n    <div class=\"bg-oscuro\">\n      <div class=\"form-fields\">\n        <form >\n          <div class=\"form-header\">\n            <h1>¡Bienvenido!</h1>\n            <p>Inicia sesión en tu cuenta</p>\n          </div>\n          <div class=\"form-inputs\">\n            <ion-input placeholder=\" Correo\" class=\"inputs\" [(ngModel)]=\"correo\" name=\"usuario\"></ion-input>\n            <ion-input placeholder=\" Contraseña\" class=\"inputs\" type=\"password\" [(ngModel)]=\"password\" name=\"password\"></ion-input>  \n            <ion-label class=\"forgot-pass\"><a  class=\"hyper\" (click)=\" loginFirebase()\">¿Olvidaste tu contraseña?</a></ion-label>\n          </div>\n          <div class=\"form-buttons\">\n            <ion-button class=\"buttons\" (click)=\"login()\">\n              <ion-label>Iniciar sesión</ion-label>\n            </ion-button>\n          </div>\n        </form>\n      </div>\n    </div>\n  \n    <app-splash-screen></app-splash-screen>\n\n  \n    <div class=\"footer\">\n      <!-- <ion-button class=\"buttons\" color=\"light\" (click)=\"login()\">\n        <ion-label>Iniciar sesión</ion-label>\n      </ion-button>\n      <ion-button class=\"buttons\" color=\"light\" href=\"/register\">\n        <ion-label>Registrarme</ion-label>\n      </ion-button>\n      <ion-button class=\"buttons\" id=\"help\" color=\"warning\" href=\"\">\n        <ion-label>?</ion-label>\n      </ion-button> -->\n      <p class=\"register-text\">No tienes una cuenta <a href=\"/register\" class=\"hyper\">Regístrate</a></p>\n    </div>\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map