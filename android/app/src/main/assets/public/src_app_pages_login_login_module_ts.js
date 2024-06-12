(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 24987:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageRoutingModule: () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 70413);




const routes = [{
  path: '',
  component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
}];
let LoginPageRoutingModule = class LoginPageRoutingModule {};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], LoginPageRoutingModule);


/***/ }),

/***/ 29370:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageModule: () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 24987);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 70413);








let LoginPageModule = class LoginPageModule {};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
  declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
})], LoginPageModule);


/***/ }),

/***/ 70413:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPage: () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 8951);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 48267);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 44796);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);







let LoginPage = class LoginPage {
  constructor(_auth, _router, formBuilder) {
    this._auth = _auth;
    this._router = _router;
    this.formBuilder = formBuilder;
    this.errorMsg = "";
    this.validation_messages = {
      'email': [{
        type: 'required',
        message: 'El correo es requerido'
      }, {
        type: 'pattern',
        message: 'Ingresa un correo válido'
      }],
      'password': [{
        type: 'required',
        message: 'La contraseña es requerida.'
      }, {
        type: 'minlength',
        message: 'La contraseña debe de ser mayor a 5 caracteres.'
      }]
    };
  }
  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]))
    });
  }
  logIn(value) {
    try {
      console.log("AUTENTICADO CORRECTAMENTE");
      this._auth.logIn(value).then(res => {
        console.log(res);
        this.errorMsg = "";
        //agregar routeo aqui
        //momentaneo
        location.href = "/tabs";
      }, err => {
        this.errorMsg = err.message;
      }).catch(error => {
        this.errorMsg = 'Error - ' + error.message;
      });
    } catch (error) {
      this.errorMsg = 'Error - ' + error.message;
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
  }];
};
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LoginPage);


/***/ }),

/***/ 48267:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.bg-imagen {
  background-image: url('bg-img4.jpg');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
}

.bg-oscuro {
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
}

.header, .footer {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  align-items: center;
}

.form-fields {
  background-color: rgba(255, 255, 255, 0.7);
  margin: 10px auto;
  border-radius: 5px;
  color: black;
  padding: 5px 20px;
  width: 50%;
}

@media (max-width: 650px) {
  .form-fields {
    width: 95%;
  }
}
@media (max-width: 900px) {
  .form-fields {
    width: 80%;
  }
}
.form-header {
  text-align: center;
}

.form-header p, .form-header h1 {
  margin: 10px;
  padding: 0;
}

.form-header h1 {
  font-weight: bold;
  font-size: 24px;
}

.form-header p {
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 25px;
}

.form-inputs ion-input {
  border: 1px solid black;
  margin: 8px auto;
  border-radius: 5px;
  font-size: 14px;
}

.forgot-pass {
  font-size: 10px;
  font-weight: lighter;
  margin: 0px;
  padding: 0;
  padding: 0px;
  width: 100%;
}

.form-buttons {
  width: 100%;
  margin: 0;
  margin-top: 25px;
  margin-bottom: 10px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-buttons ion-button {
  width: 18rem;
  margin: 0;
  padding: 0;
  font-size: 12px;
}

#logo {
  height: 75%;
}

.header {
  position: absolute;
  top: 0px;
  height: 275px;
}

.footer {
  height: 30px;
  position: absolute;
  bottom: 0px;
  background-color: rgba(255, 102, 0, 0);
}

.buttons {
  font-size: 12px;
}

ion-button#help {
  --border-radius: 50%;
}

ion-label {
  padding: 0;
}

.hyper {
  color: #ff5100;
  font-weight: bold;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/login/login.page.scss"],"names":[],"mappings":"AAiDA;EACI,oCAAA;EACA,4BAAA;EACA,2BAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;AAhDJ;;AAmDA;EACI,oCAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,iBAAA;AAhDJ;;AAoDA;EACI,WAAA;EACA,aAAA;EACA,uBAAA;EACA,WAAA;EACA,mBAAA;AAjDJ;;AAoDA;EACI,0CAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;EACA,UAAA;AAjDJ;;AAoDA;EACI;IACI,UAAA;EAjDN;AACF;AAoDA;EACI;IACI,UAAA;EAlDN;AACF;AAuDA;EACI,kBAAA;AArDJ;;AAwDA;EACI,YAAA;EACA,UAAA;AArDJ;;AAwDA;EACI,iBAAA;EACA,eAAA;AArDJ;;AAwDA;EACI,mBAAA;EACA,eAAA;EACA,mBAAA;AArDJ;;AAwDA;EACI,uBAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;AArDJ;;AAwDA;EACI,eAAA;EACA,oBAAA;EACA,WAAA;EACA,UAAA;EACA,YAAA;EACA,WAAA;AArDJ;;AAwDA;EACI,WAAA;EACA,SAAA;EACA,gBAAA;EACA,mBAAA;EACA,UAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AArDJ;;AAwDA;EACI,YAAA;EACA,SAAA;EACA,UAAA;EACA,eAAA;AArDJ;;AAwDA;EACI,WAAA;AArDJ;;AAwDA;EACI,kBAAA;EACA,QAAA;EACA,aAAA;AArDJ;;AAwDA;EACI,YAAA;EACA,kBAAA;EACA,WAAA;EACA,sCAAA;AArDJ;;AAwDA;EACI,eAAA;AArDJ;;AAwDA;EACI,oBAAA;AArDJ;;AAwDA;EACI,UAAA;AArDJ;;AAwDA;EACI,cAAA;EACA,iBAAA;AArDJ","sourcesContent":["// .bg{\r\n//     background-image:url(\"https://media.istockphoto.com/photos/the-truck-runs-on-the-highway-with-speed-picture-id1249888857?k=20&m=1249888857&s=612x612&w=0&h=41-mwmzvm81zQbPjL9sSsMzyS6z700gUIbG9PUUXdNI=\");\r\n//     background-repeat: no-repeat;\r\n//     background-position: center;\r\n//     background-size: cover;\r\n//     width: 100%;\r\n//     height: 100%;\r\n//     justify-items: center;\r\n//     position: absolute;\r\n// }\r\n// .elems{\r\n//     background-color: rgba($color: #000000, $alpha: 0.6);\r\n// }\r\n\r\n// .form-fields{\r\n//     background-color: rgba($color: #000000, $alpha: 0.6);\r\n//     width: 100% ;\r\n//     height: 100%;\r\n//     flex:content;\r\n//     display: flex;\r\n//     flex-direction: column;\r\n//     justify-content: center;\r\n//     position: absolute;\r\n//     align-items: center;\r\n//     justify-content: center;\r\n//     text-align: center;\r\n\r\n// }\r\n// .logo{\r\n//     background-color: rgba($color: orange, $alpha: 1);\r\n//     text-align: center;\r\n//     position: absolute;\r\n//     top: 0px\r\n// }\r\n\r\n// .footer {\r\n//     background-color: rgba($color: orange, $alpha: 1);\r\n//     text-align: center;\r\n//     position: absolute;\r\n//     width: 100%;\r\n//     height: 50px;\r\n//     bottom: 0px;\r\n// }\r\n\r\n// .button{\r\n    \r\n   \r\n// }\r\n\r\n.bg-imagen{\r\n    background-image:url(\"../../../assets/bg-img4.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-position: bottom;\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n}\r\n\r\n.bg-oscuro{\r\n    background-color: rgba($color: #000000, $alpha: 0.2);\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n.header, .footer{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 1.5rem;\r\n    align-items: center;\r\n}\r\n\r\n.form-fields{\r\n    background-color: rgba(255, 255, 255, 0.7);\r\n    margin: 10px auto;\r\n    border-radius: 5px;\r\n    color: black;\r\n    padding: 5px 20px;\r\n    width: 50%;\r\n}\r\n\r\n@media (max-width: 650px){\r\n    .form-fields{\r\n        width: 95%;\r\n    }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n    .form-fields{\r\n        width: 80%;\r\n    }\r\n}\r\n\r\n\r\n\r\n.form-header{\r\n    text-align: center;\r\n}\r\n\r\n.form-header p, .form-header h1{\r\n    margin: 10px;\r\n    padding: 0;\r\n}\r\n\r\n.form-header h1{\r\n    font-weight: bold;\r\n    font-size: 24px;\r\n}\r\n\r\n.form-header p{\r\n    font-weight: normal;\r\n    font-size: 16px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.form-inputs ion-input{\r\n    border: 1px solid black;\r\n    margin: 8px auto;\r\n    border-radius: 5px;\r\n    font-size: 14px;\r\n}\r\n\r\n.forgot-pass{\r\n    font-size: 10px;\r\n    font-weight: lighter;\r\n    margin: 0px;\r\n    padding: 0;\r\n    padding: 0px;\r\n    width: 100%;\r\n}\r\n\r\n.form-buttons{\r\n    width: 100%;\r\n    margin: 0;\r\n    margin-top: 25px;\r\n    margin-bottom: 10px;\r\n    padding: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.form-buttons ion-button{\r\n    width: 18rem;\r\n    margin:0;\r\n    padding: 0;\r\n    font-size: 12px;\r\n}\r\n\r\n#logo{\r\n    height: 75%;\r\n}\r\n\r\n.header{\r\n    position: absolute;\r\n    top: 0px;\r\n    height: 275px;\r\n}\r\n\r\n.footer{\r\n    height: 30px;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    background-color: #ff660000;\r\n}\r\n\r\n.buttons{\r\n    font-size: 12px;\r\n}\r\n\r\nion-button#help{\r\n    --border-radius: 50%;\r\n}\r\n\r\nion-label{\r\n    padding: 0;\r\n}\r\n\r\n.hyper{\r\n    color: #ff5100;\r\n    font-weight: bold;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8951:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\r\n<!-- <ion-content scrollY=\"false\">\r\n  \r\n  <div class=\"logo\">\r\n    <img src=\"../../../assets/direcsys.svg\" alt=\"\" srcset=\"\" height=\"100px\">\r\n  </div>\r\n  \r\n  <div class=\"bg\">\r\n    <div class=\"elems\">\r\n      <div class=\"form-fields\">\r\n        <form [formGroup]=\"ngForm\">\r\n          <ion-input placeholder=\"Matricula\" class=\"inputs\" ></ion-input>\r\n          <ion-input placeholder=\"Contraseña\" class=\"inputs\"></ion-input>  \r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"footer\">\r\n    <ion-button class=\"button\" color=\"medium\" (click)=\"login()\">\r\n      <ion-label> Iniciar Sesion</ion-label>\r\n    </ion-button>\r\n  </div>\r\n  \r\n</ion-content> -->\r\n\r\n<ion-content scrollY=\"false\">\r\n  <div class=\"bg-imagen\">\r\n\r\n    <div class=\"header\">\r\n      <img src=\"../../../assets/direcsys.svg\" alt=\"\" srcset=\"\" id=\"logo\">\r\n    </div>\r\n\r\n  \r\n    <div class=\"bg-oscuro\">\r\n      <div class=\"form-fields\">\r\n        <form [formGroup]=\"validations_form\" (ngSubmit)=\"logIn(validations_form.value)\">\r\n          <div class=\"form-header\">\r\n            <h1>¡Bienvenido!</h1>\r\n            <p>Inicia sesión en tu cuenta</p>\r\n          </div>\r\n          <div class=\"form-inputs\">\r\n            <ion-input placeholder=\"Correo\" class=\"inputs\" formControlName=\"email\" required=\"\"></ion-input>\r\n\r\n            <div class=\"validation-errors\">\r\n              <ng-container *ngFor=\"let validation of validation_messages.email\">\r\n                <div class=\"error-message\"\r\n                  *ngIf=\"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\">\r\n                  {{ validation.message }}\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n\r\n            <ion-input placeholder=\"Contraseña\" class=\"inputs\" type=\"password\" formControlName=\"password\" required></ion-input>  \r\n            <div class=\"validation-errors\">\r\n              <ng-container *ngFor=\"let validation of validation_messages.password\">\r\n                <div class=\"error-message\"\r\n                  *ngIf=\"validations_form.get('password').hasError(validation.type) && (validations_form.get('password').dirty || validations_form.get('password').touched)\">\r\n                  {{ validation.message }}\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n        \r\n            <ion-label class=\"forgot-pass\"><a href=\"\" class=\"hyper\">¿Olvidaste tu contraseña?</a></ion-label>\r\n          </div>\r\n\r\n          <div class=\"form-buttons\">\r\n            <ion-button class=\"buttons\"  type=\"submit\" [disabled]=\"!validations_form.valid\">\r\n              <ion-label>Iniciar sesión</ion-label>\r\n            </ion-button>\r\n          </div>\r\n          <label class=\"error-message\">{{errorMsg}}</label>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  \r\n\r\n  \r\n    <div class=\"footer\">\r\n      <!-- <ion-button class=\"buttons\" color=\"light\" (click)=\"login()\">\r\n        <ion-label>Iniciar sesión</ion-label>\r\n      </ion-button>\r\n      <ion-button class=\"buttons\" color=\"light\">\r\n        <ion-label>Registrarme</ion-label>\r\n      </ion-button>\r\n      <ion-button class=\"buttons\" id=\"help\" color=\"warning\">\r\n        <ion-label>?</ion-label>\r\n      </ion-button> -->\r\n      <p class=\"register-text\">No tienes una cuenta <a href=\"/register\" class=\"hyper\">Regístrate</a></p>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map