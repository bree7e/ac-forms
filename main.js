(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-wrapper\">\r\n  <forms-comp></forms-comp>\r\n  <reactive-forms-comp></reactive-forms-comp>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/forms/forms.component.ts");
/* harmony import */ var _reactive_forms_reactive_forms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reactive-forms/reactive-forms.component */ "./src/app/reactive-forms/reactive-forms.component.ts");
/* harmony import */ var _switch_control_switch_control_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./switch-control/switch-control.component */ "./src/app/switch-control/switch-control.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _forms_forms_component__WEBPACK_IMPORTED_MODULE_6__["FormsComponent"],
                _reactive_forms_reactive_forms_component__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsComponent"],
                _switch_control_switch_control_component__WEBPACK_IMPORTED_MODULE_8__["SwitchControlComponent"],
                _forms_forms_component__WEBPACK_IMPORTED_MODULE_6__["PasswordMatcher"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/forms/forms.component.css":
/*!*******************************************!*\
  !*** ./src/app/forms/forms.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL2Zvcm1zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/forms/forms.component.html":
/*!********************************************!*\
  !*** ./src/app/forms/forms.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>FormsModule</h2>\r\n<mat-card>\r\n  <mat-card-title>\r\n    Registration form\r\n  </mat-card-title>\r\n  <form novalidate #f=\"ngForm\">\r\n    <input [ngModel]=\"name.first\" name=\"first\" placeholder=\"First name\">\r\n    <input [ngModel]=\"name.last\" name=\"last\" placeholder=\"Last name\">\r\n    <div ngModelGroup=\"account\" password-matcher #account=\"ngModelGroup\">\r\n      <label>Account</label>\r\n      <input ngModel name=\"username\" placeholder=\"Username\">\r\n      <input ngModel name=\"password\" placeholder=\"Password\" required\r\n      #password=\"ngModel\">\r\n      <input ngModel name=\"confirm\" placeholder=\"Confirm password\" required>\r\n    </div>\r\n    <label>Would you like to receive a newsletter?</label>\r\n    <switch-control name=\"newsletter\" ngModel></switch-control>\r\n    <mat-card-actions align=\"end\">\r\n      <button mat-button>SUBMIT</button>\r\n    </mat-card-actions>\r\n  </form>\r\n</mat-card>\r\n<mat-card>\r\n  <p>Form: {{ f.value | json }}</p>\r\n  <p>Form status: {{ f.control.status }}</p>\r\n  <p>Account errors: {{ account.control?.errors | json  }}</p>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/forms/forms.component.ts":
/*!******************************************!*\
  !*** ./src/app/forms/forms.component.ts ***!
  \******************************************/
/*! exports provided: PasswordMatcher, FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordMatcher", function() { return PasswordMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


function passwordMatcher(c) {
    if (!c.get('password') || !c.get('confirm'))
        return null;
    return c.get('password').value === c.get('confirm').value
        ? null : { 'nomatch': true };
}
var PasswordMatcher = /** @class */ (function () {
    function PasswordMatcher() {
    }
    PasswordMatcher = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[password-matcher]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], multi: true, useValue: passwordMatcher }
            ]
        })
    ], PasswordMatcher);
    return PasswordMatcher;
}());

var FormsComponent = /** @class */ (function () {
    function FormsComponent() {
        this.name = { first: 'Nancy', last: 'Drew' };
    }
    FormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'forms-comp',
            template: __webpack_require__(/*! ./forms.component.html */ "./src/app/forms/forms.component.html"),
            styles: [__webpack_require__(/*! ./forms.component.css */ "./src/app/forms/forms.component.css")]
        })
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/reactive-forms/reactive-forms.component.css":
/*!*************************************************************!*\
  !*** ./src/app/reactive-forms/reactive-forms.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlYWN0aXZlLWZvcm1zL3JlYWN0aXZlLWZvcm1zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/reactive-forms/reactive-forms.component.html":
/*!**************************************************************!*\
  !*** ./src/app/reactive-forms/reactive-forms.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>ReactiveFormsModule</h2>\r\n<mat-card>\r\n  <mat-card-title>\r\n    Registration form\r\n  </mat-card-title>\r\n  <form novalidate [formGroup]=\"form\">\r\n    <input formControlName=\"first\" placeholder=\"First name\">\r\n    <input formControlName=\"last\" placeholder=\"Last name\">\r\n    <div formGroupName=\"account\">\r\n      <label>Account</label>\r\n      <input formControlName=\"username\" placeholder=\"Username\">\r\n      <input formControlName=\"password\" placeholder=\"Password\">\r\n      <input formControlName=\"confirm\" placeholder=\"Confirm password\">\r\n    </div>\r\n    <label>Would you like to receive a newsletter?</label>\r\n    <switch-control formControlName=\"newsletter\"></switch-control>\r\n    <mat-card-actions align=\"end\">\r\n      <button mat-button>SUBMIT</button>\r\n    </mat-card-actions>\r\n  </form>\r\n</mat-card>\r\n<mat-card>\r\n  <p>Form: {{ form.value | json }}</p>\r\n  <p>Form status: {{ form.status }}</p>\r\n  <p>Account status: {{ form.get('account').errors | json }}</p>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/reactive-forms/reactive-forms.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reactive-forms/reactive-forms.component.ts ***!
  \************************************************************/
/*! exports provided: ReactiveFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormsComponent", function() { return ReactiveFormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function passwordMatcher(c) {
    return c.get('password').value === c.get('confirm').value
        ? null : { 'nomatch': true };
}
var ReactiveFormsComponent = /** @class */ (function () {
    function ReactiveFormsComponent(fb) {
        this.fb = fb;
        this.form = this.fb.group({
            first: '',
            last: '',
            account: this.fb.group({
                username: '',
                password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                confirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            }, { validator: passwordMatcher }),
            newsletter: ''
        });
        this.form.patchValue({
            first: 'Nancy',
            last: 'Drew'
        });
    }
    ReactiveFormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'reactive-forms-comp',
            template: __webpack_require__(/*! ./reactive-forms.component.html */ "./src/app/reactive-forms/reactive-forms.component.html"),
            styles: [__webpack_require__(/*! ./reactive-forms.component.css */ "./src/app/reactive-forms/reactive-forms.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ReactiveFormsComponent);
    return ReactiveFormsComponent;
}());



/***/ }),

/***/ "./src/app/switch-control/switch-control.component.css":
/*!*************************************************************!*\
  !*** ./src/app/switch-control/switch-control.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: block;\r\n}\r\n\r\n.selected {\r\n  background: black;\r\n  color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3dpdGNoLWNvbnRyb2wvc3dpdGNoLWNvbnRyb2wuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvc3dpdGNoLWNvbnRyb2wvc3dpdGNoLWNvbnRyb2wuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/switch-control/switch-control.component.html":
/*!**************************************************************!*\
  !*** ./src/app/switch-control/switch-control.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button [class.selected]=\"isOn\" (click)=\"toggle(true)\">YES</button>\r\n<button mat-button [class.selected]=\"!isOn\" (click)=\"toggle(false)\">NO</button>"

/***/ }),

/***/ "./src/app/switch-control/switch-control.component.ts":
/*!************************************************************!*\
  !*** ./src/app/switch-control/switch-control.component.ts ***!
  \************************************************************/
/*! exports provided: SwitchControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchControlComponent", function() { return SwitchControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SwitchControlComponent = /** @class */ (function () {
    function SwitchControlComponent() {
    }
    SwitchControlComponent_1 = SwitchControlComponent;
    SwitchControlComponent.prototype.writeValue = function (value) {
        this.isOn = !!value;
    };
    SwitchControlComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    SwitchControlComponent.prototype.registerOnTouched = function () { };
    SwitchControlComponent.prototype.toggle = function (isOn) {
        this.isOn = isOn;
        this._onChange(isOn);
    };
    var SwitchControlComponent_1;
    SwitchControlComponent = SwitchControlComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'switch-control',
            template: __webpack_require__(/*! ./switch-control.component.html */ "./src/app/switch-control/switch-control.component.html"),
            styles: [__webpack_require__(/*! ./switch-control.component.css */ "./src/app/switch-control/switch-control.component.css")],
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], multi: true, useExisting: SwitchControlComponent_1 }
            ]
        })
    ], SwitchControlComponent);
    return SwitchControlComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\home\angular\ac-forms\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map