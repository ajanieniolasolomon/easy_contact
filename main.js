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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.module */ "./src/app/main/main.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', loadChildren: function () { return _main_main_module__WEBPACK_IMPORTED_MODULE_2__["MainModule"]; } },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n\n</router-outlet>"

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
        this.title = 'app';
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
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/index.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClarityModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main.pipe.ts":
/*!******************************!*\
  !*** ./src/app/main.pipe.ts ***!
  \******************************/
/*! exports provided: MainPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPipe", function() { return MainPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainPipe = /** @class */ (function () {
    function MainPipe() {
    }
    MainPipe.prototype.transform = function (value) {
        var d = new Date(value);
        var offset = 1;
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        var nd = new Date(utc + (3600000 * offset)).toLocaleString();
        return "" + { nd: nd };
    };
    MainPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'Date'
        })
    ], MainPipe);
    return MainPipe;
}());



/***/ }),

/***/ "./src/app/main/bin/bin.component.css":
/*!********************************************!*\
  !*** ./src/app/main/bin/bin.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/bin/bin.component.html":
/*!*********************************************!*\
  !*** ./src/app/main/bin/bin.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<clr-datagrid>\n    <clr-dg-column>User ID</clr-dg-column>\n    <clr-dg-column [clrDgField]=\"'name'\">Name</clr-dg-column>\n\n    <clr-dg-column [clrDgField]=\"'pokemon.name'\">Date</clr-dg-column>\n\n\n    <clr-dg-row>\n        <clr-dg-cell>user.id</clr-dg-cell>\n        <clr-dg-cell>user.name</clr-dg-cell>\n\n        <clr-dg-cell>user.pokemon.name</clr-dg-cell>\n\n    </clr-dg-row>\n\n    <clr-dg-footer>users.length users</clr-dg-footer>\n</clr-datagrid>"

/***/ }),

/***/ "./src/app/main/bin/bin.component.ts":
/*!*******************************************!*\
  !*** ./src/app/main/bin/bin.component.ts ***!
  \*******************************************/
/*! exports provided: BinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinComponent", function() { return BinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BinComponent = /** @class */ (function () {
    function BinComponent() {
    }
    BinComponent.prototype.ngOnInit = function () {
    };
    BinComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bin',
            template: __webpack_require__(/*! ./bin.component.html */ "./src/app/main/bin/bin.component.html"),
            styles: [__webpack_require__(/*! ./bin.component.css */ "./src/app/main/bin/bin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BinComponent);
    return BinComponent;
}());



/***/ }),

/***/ "./src/app/main/dash/dash.component.css":
/*!**********************************************!*\
  !*** ./src/app/main/dash/dash.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/dash/dash.component.html":
/*!***********************************************!*\
  !*** ./src/app/main/dash/dash.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<clr-main-container>\n\n    <div class=\"alert alert-app-level alert-warning\">\n        <div class=\"alert-items\">\n            <div class=\"alert-item static\">\n                <div class=\"alert-icon-wrapper\">\n                    <clr-icon class=\"alert-icon\" shape=\"download\"></clr-icon>\n                </div>\n                <div class=\"alert-text\">\n                    Version 1.2 coming soon.\n                </div>\n\n            </div>\n        </div>\n    </div>\n    <clr-header class=\"header header-4\">\n        <div class=\"branding\">\n            <a routerLink=\"/\" class=\"nav-link\">\n\n\n                <span class=\"title pl-1\">Easy-contact</span>\n            </a>\n        </div>\n\n\n        <div class=\"header-actions\">\n\n\n            <clr-dropdown>\n                <button class=\"nav-icon\" clrDropdownTrigger>\n                    \n            <clr-icon shape=\"user\"></clr-icon>\n            <clr-icon shape=\"caret down\"></clr-icon>\n        </button>\n                <clr-dropdown-menu *clrIfOpen clrPosition=\"bottom-right\">\n                    <a clrDropdownItem routerLink=\"setting\">Settings</a>\n\n                    <a clrDropdownItem routerLink=\"login\">Logout</a>\n                </clr-dropdown-menu>\n            </clr-dropdown>\n        </div>\n    </clr-header>\n    <div class=\"content-container\">\n        <div class=\"content-area\">\n            <router-outlet></router-outlet>\n        </div>\n\n        <nav class=\"sidenav\" [clr-nav-level]=\"1\">\n            <section class=\"sidenav-content\">\n\n\n                <section class=\"nav-group\">\n\n\n\n\n                    <clr-tree-node class=\"pb-1\">\n                        <button class=\"clr-treenode-link\" routerLink='../dash'>\n                        <clr-icon shape=\"home\"></clr-icon>\n                        Primary </button>\n                    </clr-tree-node>\n                    <clr-tree-node class=\"pb-1\">\n                        <button class=\"clr-treenode-link\" routerLink='history'>\n                                           <clr-icon shape=\"e-check\"></clr-icon>\n                                      History\n                                    </button>\n\n\n                    </clr-tree-node>\n\n                    <clr-tree-node class=\"pb-1\">\n                        <button class=\"clr-treenode-link\" routerLink='bin'>\n                                     \n                                        <clr-icon shape=\"trash\"></clr-icon>\n                                     Bin\n                                            </button>\n\n                    </clr-tree-node>\n                    <clr-tree-node class=\"pb-1\">\n                        <button class=\"clr-treenode-link\">\n                                         \n                                            <clr-icon shape=\"bell\"></clr-icon>\n                                         Subscribition \n                                                </button>\n\n                    </clr-tree-node>\n\n                </section>\n\n            </section>\n        </nav>\n    </div>\n</clr-main-container>"

/***/ }),

/***/ "./src/app/main/dash/dash.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/dash/dash.component.ts ***!
  \*********************************************/
/*! exports provided: DashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashComponent", function() { return DashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashComponent = /** @class */ (function () {
    function DashComponent() {
    }
    DashComponent.prototype.ngOnInit = function () {
    };
    DashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dash',
            template: __webpack_require__(/*! ./dash.component.html */ "./src/app/main/dash/dash.component.html"),
            styles: [__webpack_require__(/*! ./dash.component.css */ "./src/app/main/dash/dash.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashComponent);
    return DashComponent;
}());



/***/ }),

/***/ "./src/app/main/fs/fs.component.css":
/*!******************************************!*\
  !*** ./src/app/main/fs/fs.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* body,\nhtml {\n    height: 100%;\n    background-repeat: no-repeat;\n    background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));\n}\n\n.card-container.card {\n    max-width: 350px;\n    padding: 40px 40px;\n}\n\n.btn {\n    font-weight: 700;\n    height: 36px;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n        user-select: none;\n    cursor: default;\n}\n\n/*\n * Card component\n */\n\n.card {\n    background-color: #F7F7F7;\n    /* just in case there no content*/\n    padding: 20px 25px 30px;\n    margin: 0 auto 25px;\n    margin-top: 50px;\n    /* shadows and rounded borders */\n    border-radius: 2px;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card {\n    width: 96px;\n    height: 96px;\n    margin: 0 auto 10px;\n    display: block;\n    border-radius: 50%;\n}\n\n/*\n * Form styles\n */\n\n.profile-name-card {\n    font-size: 16px;\n    font-weight: bold;\n    text-align: center;\n    margin: 10px 0 0;\n    min-height: 1em;\n}\n\n.reauth-email {\n    display: block;\n    color: #404040;\n    line-height: 2;\n    margin-bottom: 10px;\n    font-size: 14px;\n    text-align: center;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    box-sizing: border-box;\n}\n\n.form-signin #inputEmail,\n.form-signin #inputPassword {\n    direction: ltr;\n    height: 44px;\n    font-size: 16px;\n}\n\n.form-signin input[type=email],\n.form-signin input[type=password],\n.form-signin input[type=text],\n.form-signin button {\n    width: 100%;\n    display: block;\n    margin-bottom: 10px;\n    z-index: 1;\n    position: relative;\n    box-sizing: border-box;\n}\n\n.form-signin .form-control:focus {\n    border-color: rgb(104, 145, 162);\n    outline: 0;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgb(104, 145, 162);\n}\n\n.btn.btn-signin {\n    /*background-color: #4d90fe; */\n    background-color: #2b9bff;\n    /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n    padding: 0px;\n    font-weight: 700;\n    font-size: 14px;\n    height: 36px;\n    border-radius: 3px;\n    border: none;\n    transition: all 0.218s;\n}\n\n.btn.btn-signin:hover,\n.btn.btn-signin:active,\n.btn.btn-signin:focus {\n    background-color: rgb(12, 97, 33);\n}\n\n.forgot-password {\n    color: rgb(104, 145, 162);\n}\n\n.forgot-password:hover,\n.forgot-password:active,\n.forgot-password:focus {\n    color: rgb(12, 97, 33);\n}\n\n[data-letters]:before {\n    content: attr(data-letters);\n    display: inline-block;\n    font-size: 1em;\n    width: 96px;\n    height: 96px;\n    line-height: 2.5em;\n    text-align: center;\n    border-radius: 50%;\n    background: #2b9bff;\n    vertical-align: middle;\n    margin-right: 1em;\n    color: white;\n    padding-top: 35%;\n}"

/***/ }),

/***/ "./src/app/main/fs/fs.component.html":
/*!*******************************************!*\
  !*** ./src/app/main/fs/fs.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"card card-container\">\n        <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" />\n        <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" /> -->\n        <button routerLink=\"\" class=\"btn btn-primary-outline ml-2\"><clr-icon class=\"test\" shape=\"map-marker\"></clr-icon>\n            <span class=\"title\">Easy-contact</span></button>\n\n        <p id=\"profile-name\" class=\"profile-name-card\">Forget password</p>\n        <form class=\"form-signin\" (ngSubmit)=\"onSubmit(formgroup)\" [formGroup]=\"formgroup\">\n            <span id=\"reauth-email\" class=\"reauth-email\"></span>\n            <input type=\"email\" formControlName=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n\n            <button class=\"btn btn-lg btn-primary btn-block btn-signin\" [disabled]=\"formgroup.invalid\" type=\"submit\">Password reset</button>\n        </form>\n        <!-- /form -->\n        <a routerLink=\"/login\" class=\"forgot-password  m-5\">\n               Home\n            </a>\n\n    </div>\n    <!-- /card-container -->\n</div>\n<!-- /container -->"

/***/ }),

/***/ "./src/app/main/fs/fs.component.ts":
/*!*****************************************!*\
  !*** ./src/app/main/fs/fs.component.ts ***!
  \*****************************************/
/*! exports provided: FsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FsComponent", function() { return FsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FsComponent = /** @class */ (function () {
    function FsComponent(formbuilder, router) {
        this.formbuilder = formbuilder;
        this.router = router;
        this.formgroup = formbuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
        });
        this.email = this.formgroup.controls['email'];
    }
    FsComponent.prototype.ngOnInit = function () {
    };
    FsComponent.prototype.onSubmit = function (formgroup) {
        console.log(formgroup);
    };
    FsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fs',
            template: __webpack_require__(/*! ./fs.component.html */ "./src/app/main/fs/fs.component.html"),
            styles: [__webpack_require__(/*! ./fs.component.css */ "./src/app/main/fs/fs.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FsComponent);
    return FsComponent;
}());



/***/ }),

/***/ "./src/app/main/history/history.component.css":
/*!****************************************************!*\
  !*** ./src/app/main/history/history.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/history/history.component.html":
/*!*****************************************************!*\
  !*** ./src/app/main/history/history.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<clr-datagrid>\n    <clr-dg-column>Email</clr-dg-column>\n\n    <clr-dg-column [clrDgField]=\"'creation'\">Date Deleted</clr-dg-column>\n\n    <clr-dg-column [clrDgField]=\"'color'\">Favorite color</clr-dg-column>\n\n    <clr-dg-row>\n        <clr-dg-cell>user.id</clr-dg-cell>\n\n        <clr-dg-cell>user.creation | date</clr-dg-cell>\n\n        <clr-dg-cell>\n            <span class=\"color-square\">red</span>\n        </clr-dg-cell>\n    </clr-dg-row>\n\n    <clr-dg-footer>users.length users</clr-dg-footer>\n</clr-datagrid>"

/***/ }),

/***/ "./src/app/main/history/history.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/history/history.component.ts ***!
  \***************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HistoryComponent = /** @class */ (function () {
    function HistoryComponent() {
    }
    HistoryComponent.prototype.ngOnInit = function () {
    };
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/main/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.css */ "./src/app/main/history/history.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/main/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/main/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    .content {\n        position: relative;\n        top: 10%;\n        padding: 3% 3% 3% 10%;\n    }\n    \n    .content .btn {\n        color: #111;\n    }\n    \n    /*.back{\n\tbackground: url('../img/1.jpeg');\n\tbackground-position: top center;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n}*/\n    \n    .back .content {\n        padding: 0\n    }\n    \n    .back .content img {\n        width: 100%\n    }\n    \n    p {\n        padding-top: 0px;\n        margin-top: 0px;\n        text-align: center;\n    }\n    \n    .img {\n        position: relative;\n        left: 0%;\n        padding-left: 0;\n    }\n    \n    h2 {\n        text-align: center;\n        margin-top: 2px;\n    }\n    \n    .us {\n        position: relative;\n        left: 30%;\n        color: #00B7D6;\n    }\n    \n    .header-6 {\n        background-color: #00B7D6 !important;\n    }\n    \n    .btn-color {\n        border: 1px solid #00B7D6;\n    }\n    \n    pre {\n        background: #111;\n        color: wheat;\n    }\n    \n    .des {\n        color: #00B7D6;\n    }\n    \n    h3 {\n        font-weight: 800;\n    }\n    \n    .fol {\n        background-color: azure;\n    }\n    \n    .center-div {\n        margin: 0 auto;\n        width: 300px;\n    }\n    \n    .center {\n        text-align: center;\n    }\n    \n    .btns {\n        background-color: #111;\n        border-color: aliceblue;\n    }"

/***/ }),

/***/ "./src/app/main/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/main/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-app-level alert-warning\">\n    <div class=\"alert-items\">\n        <div class=\"alert-item static\">\n            <div class=\"alert-icon-wrapper\">\n                <clr-icon class=\"alert-icon\" shape=\"warning-standard\"></clr-icon>\n            </div>\n            <div class=\"alert-text\">\n                Still in demo version release date 2018-july.\n            </div>\n            <div class=\"alert-actions\">\n                <button class=\"btn alert-action\">find us</button>\n            </div>\n        </div>\n    </div>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\">\n            <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\n        </button>\n</div>\n\n\n<header class=\"header-6\">\n    <div class=\"branding\">\n        <a class=\"nav-link\">\n            <clr-icon class=\"test\" shape=\"map-marker\"></clr-icon>\n            <span class=\"title\">Easy-contact</span>\n        </a>\n    </div>\n\n\n</header>\n<div class=\"row\">\n    <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n        <div class=\"content\">\n            <h1>A powerful way to manage your customers</h1>\n            <div class=\"col-sm-12 col-md-12 col-xs-12\">\n                <button routerLink=\"reg\" class=\"btn btn-outline  btn-color\">Get Started</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n        <div class=\"content\">\n            <div class=\"card-img\">\n                <img src=\"../../../assets/contact1.png\" alt=\"contact.svg\">\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row mt-1\">\n    <div class=\"col-lg-4 col-md-4 col-sm-3 col-xs-12 \">\n        <div class=\"content\">\n            <clr-icon class=\"us\" shape=\"cog\" size=\"72\"></clr-icon>\n            <h2>Easy to intergrate</h2>\n            <p>\n                With just two line of code Easy-contact is up and running\n            </p>\n        </div>\n    </div>\n    <div class=\"col-lg-4 col-md-4 col-sm-3 col-xs-12\">\n        <div class=\"content\">\n\n            <clr-icon class=\"us\" shape=\"envelope\" size=\"72\"></clr-icon>\n            <h2>Realtime message</h2>\n            <p>\n                Provide realtime notification to clientn at any time and any place\n            </p>\n        </div>\n    </div>\n    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\n        <div class=\"content\">\n            <clr-icon class=\"us\" shape=\"bell\" size=\"72\"></clr-icon>\n            <h2>Web Notification</h2>\n            <p>\n                Send real-time web notification to client when ever message is sent\n            </p>\n        </div>\n    </div>\n</div>\n\n<div class=\"row fol mt-3\">\n\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 m-1\">\n        <h2>Getting Started\n            <clr-icon class=\"des\" size=\"36\" shape=\"book\"></clr-icon>\n        </h2>\n        <div class=\"center-div pl-3\">\n            <h3 class=\"m-2\">\n                Step One</h3>\n\n            <div class=\" btn-group btn-primary\">\n                <button class=\"btn btns\" routerLink=\"reg\">Register</button>\n                <button class=\"btn btns\" routerLink=\"login\">Sign-Up</button>\n\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 m-1\">\n        <h3 class=\" center m-1\">\n            Step Two</h3>\n\n        <pre>\n       \n    <code clr-code-highlight=\"language-css\">\n       \n           &#60;app-contact&#62;loading&#60;/app-contact&#62;\n           &#60;script type&#61;\"text/javascript\" src&#61;\"url\"&#62;&#60;/script&#62;\n        \n        \n    </code>\n</pre>\n\n    </div>\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 m-1\">\n        <h4>@Swidatech</h4>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/main/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/main/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/main/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/main/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"card card-container\">\n        <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" />\n        <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" /> -->\n        <button routerLink=\"\" class=\"btn btn-primary-outline ml-2\"><clr-icon class=\"test\" shape=\"map-marker\"></clr-icon>\n            <span class=\"title\">Easy-contact</span></button>\n\n        <form class=\"form-signin\" (ngSubmit)=\"onLogin(formgroup)\" [formGroup]=\"formgroup\">\n            <span id=\"reauth-email\" class=\"reauth-email\"></span>\n            <input type=\"email\" formControlName=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n            <input type=\"password\" formControlName=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n\n            <button [clrLoading]=\"validateLoading\" type=\"button\" class=\"btn btn-lg btn-primary btn-block btn-signin\" [disabled]=\"formgroup.invalid\" type=\"submit\">Sign in</button>\n        </form>\n        <!-- /form -->\n        <a routerLink=\"/forget-password\" class=\"forgot-password  m-5\">\n                Forgot the password?\n            </a>\n        <a routerLink=\"/reg\" class=\"forgot-password\">\n               Sign Up\n            </a>\n    </div>\n    <div class=\"alert alert-danger\" *ngIf=\"err\">\n        <div class=\"alert-items\">\n            <div class=\"alert-item static\">\n                <div class=\"alert-icon-wrapper\">\n                    <clr-icon class=\"alert-icon\" shape=\"exclamation-circle\"></clr-icon>\n                </div>\n                <span class=\"alert-text\">\n                               {{err}}\n                            </span>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /container -->"

/***/ }),

/***/ "./src/app/main/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/main/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* body,\nhtml {\n  height: 100%;\n  background-repeat: no-repeat;\n  background-image: linear-gradient(#6891a2, #0c6121); }\n\n.card-container.card {\n  max-width: 350px;\n  padding: 40px 40px; }\n\n.btn {\n  font-weight: 700;\n  height: 36px;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  cursor: default; }\n\n/*\n * Card component\n */\n\n.card {\n  background-color: #F7F7F7;\n  /* just in case there no content*/\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  /* shadows and rounded borders */\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3); }\n\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%; }\n\n/*\n * Form styles\n */\n\n.profile-name-card {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  margin: 10px 0 0;\n  min-height: 1em; }\n\n.reauth-email {\n  display: block;\n  color: #404040;\n  line-height: 2;\n  margin-bottom: 10px;\n  font-size: 14px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  box-sizing: border-box; }\n\n.form-signin #inputEmail,\n.form-signin #inputPassword {\n  direction: ltr;\n  height: 44px;\n  font-size: 16px; }\n\n.form-signin input[type=email],\n.form-signin input[type=password],\n.form-signin input[type=text],\n.form-signin button {\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  z-index: 1;\n  position: relative;\n  box-sizing: border-box; }\n\n.form-signin .form-control:focus {\n  border-color: #6891a2;\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #6891a2; }\n\n.btn.btn-signin {\n  /*background-color: #4d90fe; */\n  background-color: #2b9bff;\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n  padding: 0px;\n  font-weight: 700;\n  font-size: 14px;\n  height: 36px;\n  border-radius: 3px;\n  border: none;\n  transition: all 0.218s; }\n\n.btn.btn-signin:hover,\n.btn.btn-signin:active,\n.btn.btn-signin:focus {\n  background-color: orangered; }\n\n.forgot-password {\n  color: #6891a2;\n  margin-left: 22px; }\n\n.forgot-password:hover,\n.forgot-password:active,\n.forgot-password:focus {\n  color: #0c6121; }\n\n[data-letters]:before {\n  content: attr(data-letters);\n  display: inline-block;\n  font-size: 1em;\n  width: 96px;\n  height: 96px;\n  line-height: 2.5em;\n  text-align: center;\n  border-radius: 50%;\n  background: #2b9bff;\n  vertical-align: middle;\n  margin-right: 1em;\n  color: white;\n  padding-top: 35%; }\n"

/***/ }),

/***/ "./src/app/main/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/main/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main.service */ "./src/app/main/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(formbuilder, router, service) {
        this.formbuilder = formbuilder;
        this.router = router;
        this.service = service;
        this.validateLoading = false;
        this.formgroup = formbuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.email = this.formgroup.controls['email'];
        this.password = this.formgroup.controls['password'];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function (formgroup) {
        var _this = this;
        this.validateLoading = true;
        // console.log(formgroup );
        this.service.login(formgroup).then(function (res) {
            // console.log(res.user.uid);
            localStorage.setItem('contact_id', res.user.uid);
            _this.router.navigateByUrl('dash');
        })
            .catch(function (err) {
            console.log(err);
            _this.validateLoading = false;
            _this.err = err;
            setTimeout(function () {
                _this.err = null;
            }, 1000);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/main/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/main/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/main-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/main/home/home.component.ts");
/* harmony import */ var _dash_dash_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dash/dash.component */ "./src/app/main/dash/dash.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/main/login/login.component.ts");
/* harmony import */ var _primary_primary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./primary/primary.component */ "./src/app/main/primary/primary.component.ts");
/* harmony import */ var _primarys_primarys_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./primarys/primarys.component */ "./src/app/main/primarys/primarys.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./history/history.component */ "./src/app/main/history/history.component.ts");
/* harmony import */ var _bin_bin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bin/bin.component */ "./src/app/main/bin/bin.component.ts");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./setting/setting.component */ "./src/app/main/setting/setting.component.ts");
/* harmony import */ var _reg_reg_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reg/reg.component */ "./src/app/main/reg/reg.component.ts");
/* harmony import */ var _fs_fs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fs/fs.component */ "./src/app/main/fs/fs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'dash', component: _dash_dash_component__WEBPACK_IMPORTED_MODULE_3__["DashComponent"], children: [
            { path: '', component: _primary_primary_component__WEBPACK_IMPORTED_MODULE_5__["PrimaryComponent"] },
            { path: 'more/:id', component: _primarys_primarys_component__WEBPACK_IMPORTED_MODULE_6__["PrimarysComponent"] },
            { path: 'history', component: _history_history_component__WEBPACK_IMPORTED_MODULE_7__["HistoryComponent"] },
            { path: 'bin', component: _bin_bin_component__WEBPACK_IMPORTED_MODULE_8__["BinComponent"] },
            { path: 'setting', component: _setting_setting_component__WEBPACK_IMPORTED_MODULE_9__["SettingComponent"] },
        ] },
    { path: 'reg', component: _reg_reg_component__WEBPACK_IMPORTED_MODULE_10__["RegComponent"] },
    { path: 'forget-password', component: _fs_fs_component__WEBPACK_IMPORTED_MODULE_11__["FsComponent"] },
];
var MainRoutingModule = /** @class */ (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MainRoutingModule);
    return MainRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/main/main-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/main/home/home.component.ts");
/* harmony import */ var _dash_dash_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dash/dash.component */ "./src/app/main/dash/dash.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/main/login/login.component.ts");
/* harmony import */ var _primary_primary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./primary/primary.component */ "./src/app/main/primary/primary.component.ts");
/* harmony import */ var _primarys_primarys_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./primarys/primarys.component */ "./src/app/main/primarys/primarys.component.ts");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./setting/setting.component */ "./src/app/main/setting/setting.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./history/history.component */ "./src/app/main/history/history.component.ts");
/* harmony import */ var _bin_bin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bin/bin.component */ "./src/app/main/bin/bin.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _reg_reg_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reg/reg.component */ "./src/app/main/reg/reg.component.ts");
/* harmony import */ var _fs_fs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fs/fs.component */ "./src/app/main/fs/fs.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./main.service */ "./src/app/main/main.service.ts");
/* harmony import */ var _main_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../main.pipe */ "./src/app/main.pipe.ts");
/* harmony import */ var _main_resolver__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./main.resolver */ "./src/app/main/main.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var config = {
    apiKey: 'AIzaSyBPHmbQYvjrqeX24SncmxAEWEXPzOvNXZc',
    authDomain: 'icontact-33034.firebaseapp.com',
    databaseURL: 'https://icontact-33034.firebaseio.com',
    projectId: 'icontact-33034',
    storageBucket: 'icontact-33034.appspot.com',
    messagingSenderId: '561594539296'
};
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(config),
            ],
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _dash_dash_component__WEBPACK_IMPORTED_MODULE_4__["DashComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _primary_primary_component__WEBPACK_IMPORTED_MODULE_7__["PrimaryComponent"], _primarys_primarys_component__WEBPACK_IMPORTED_MODULE_8__["PrimarysComponent"],
                _setting_setting_component__WEBPACK_IMPORTED_MODULE_9__["SettingComponent"], _history_history_component__WEBPACK_IMPORTED_MODULE_10__["HistoryComponent"], _bin_bin_component__WEBPACK_IMPORTED_MODULE_11__["BinComponent"],
                _reg_reg_component__WEBPACK_IMPORTED_MODULE_13__["RegComponent"], _fs_fs_component__WEBPACK_IMPORTED_MODULE_14__["FsComponent"], _main_pipe__WEBPACK_IMPORTED_MODULE_19__["MainPipe"]
            ],
            providers: [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestore"], _main_service__WEBPACK_IMPORTED_MODULE_18__["MainService"], _main_resolver__WEBPACK_IMPORTED_MODULE_20__["MainResolver"]]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/main/main.resolver.ts":
/*!***************************************!*\
  !*** ./src/app/main/main.resolver.ts ***!
  \***************************************/
/*! exports provided: MainResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainResolver", function() { return MainResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.service */ "./src/app/main/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainResolver = /** @class */ (function () {
    function MainResolver(service) {
        this.service = service;
    }
    MainResolver.prototype.resolve = function (route) {
        var id = route.paramMap.get('id');
        console.log(id);
        // console.log(this.service.getMessageByid(+id).valueChanges())
        return this.service.getMessageByid(id);
    };
    MainResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], MainResolver);
    return MainResolver;
}());



/***/ }),

/***/ "./src/app/main/main.service.ts":
/*!**************************************!*\
  !*** ./src/app/main/main.service.ts ***!
  \**************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainService = /** @class */ (function () {
    function MainService(firebaseAuth, afs) {
        this.firebaseAuth = firebaseAuth;
        this.afs = afs;
        this.user = firebaseAuth.authState;
        this.UserCollectionRef = this.afs.collection('user');
        this.User$ = this.UserCollectionRef.valueChanges();
        this.MessageCollectionRef = this.afs.collection('message');
        // this.Message$ = this.MessageCollectionRef.valueChanges();
    }
    MainService.prototype.login = function (d) {
        return this.firebaseAuth
            .auth
            .signInAndRetrieveDataWithEmailAndPassword(d.value.email, d.value.password);
    };
    MainService.prototype.Register = function (data) {
        var _this = this;
        return this.firebaseAuth.auth.createUserWithEmailAndPassword(data.email, data.password)
            .then(function (dat) {
            // this.Saveinfor(dat, data);
            console.log(dat.user.uid);
            _this.Saveinfor(dat, data);
        });
    };
    MainService.prototype.Saveinfor = function (dat, data) {
        return this.UserCollectionRef.add({ uid: dat.user.uid, email: data.email, status: 'online', company_name: data.companyname });
    };
    MainService.prototype.Message = function () {
        return this.afs.collection('message', function (ref) { return ref.where('id', '==', localStorage.getItem('contact_id')).orderBy('date', 'desc'); })
            .snapshotChanges()
            .map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return { id: id, data: data };
            });
        });
    };
    MainService.prototype.getMessageByid = function (id) {
        return this.afs.doc('message/' + id).valueChanges();
    };
    MainService.prototype.replyRespond = function (data, email, id) {
        return this.afs.collection('reply').add({ email: email, ticket: id, reply: data,
            date: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.serverTimestamp() });
    };
    MainService.prototype.viewRespond = function (id) {
        return this.afs.collection('reply', function (ref) { return ref.where('ticket', '==', id).orderBy('date', 'desc'); }).valueChanges();
    };
    MainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/app/main/primary/primary.component.css":
/*!****************************************************!*\
  !*** ./src/app/main/primary/primary.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[data-letters]:before {\n    content: attr(data-letters);\n    display: inline-block;\n    font-size: 1em;\n    width: 2.5em;\n    height: 2.5em;\n    line-height: 2.5em;\n    text-align: center;\n    border-radius: 50%;\n    background: plum;\n    vertical-align: middle;\n    margin-right: 1em;\n    color: white;\n}"

/***/ }),

/***/ "./src/app/main/primary/primary.component.html":
/*!*****************************************************!*\
  !*** ./src/app/main/primary/primary.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"...\" class=\"label label-light-blue clickable\">\n               Messages\n                \n            </a>\n<div class=\"row\">\n    <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"card-block\" *ngFor=\"let post of posts | async\">\n            <div class=\"card-media-block\" routerLink=\"more/{{post.id}}\">\n\n                <div data-letters=\"EC\">{{post.data.email}}\n\n                    <span class=\"ml-3 badge\">{{post.data.date.seconds * 1000 |  date }}</span>\n\n                </div>\n\n            </div>\n\n        </div>\n\n\n\n    </div>\n</div>\n\n<!--<ul *ngFor=\"let post of posts | async\">\n    <li>\n        {{post.id}}\n    </li>\n    <li>\n        {{post.data.email}}\n    </li>\n    <li>\n        {{post.data.date}}\n    </li>\n\n</ul>-->"

/***/ }),

/***/ "./src/app/main/primary/primary.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/primary/primary.component.ts ***!
  \***************************************************/
/*! exports provided: PrimaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryComponent", function() { return PrimaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ "./src/app/main/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrimaryComponent = /** @class */ (function () {
    function PrimaryComponent(service) {
        this.service = service;
        this.SimpleDateFormat = new Date().getTime();
    }
    PrimaryComponent.prototype.ngOnInit = function () {
        this.posts = this.service.Message();
    };
    PrimaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-primary',
            template: __webpack_require__(/*! ./primary.component.html */ "./src/app/main/primary/primary.component.html"),
            styles: [__webpack_require__(/*! ./primary.component.css */ "./src/app/main/primary/primary.component.css")]
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], PrimaryComponent);
    return PrimaryComponent;
}());



/***/ }),

/***/ "./src/app/main/primarys/primarys.component.css":
/*!******************************************************!*\
  !*** ./src/app/main/primarys/primarys.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n    color: white;\n    background-color: gray;\n    display: inline;\n}"

/***/ }),

/***/ "./src/app/main/primarys/primarys.component.html":
/*!*******************************************************!*\
  !*** ./src/app/main/primarys/primarys.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"contact\" (ngSubmit)=\"onSubmit(formgroup)\" [formGroup]=\"formgroup\">\n    <section class=\"form-block\">\n        <a href=\"...\" class=\"label label-light-blue clickable\">\n        port\n            <span class=\"badge\">{{super}}</span>\n        </a>\n        <p class=\"p3\">{{message}}</p>\n\n\n\n\n        <textarea id=\"aForm_3\" rows=\"5\" formControlName=\"reply\"></textarea>\n\n        <button type=\"submit\" [disabled]=\"formgroup.invalid\" class=\"btn btn-primary\">Reply</button>\n    </section>\n</form>\n<h4>Reply</h4>\n<div *ngIf=\"message2 ;else other_content\">\n\n    <ul class=\"list\" *ngFor=\"let post of message2 \">\n\n\n        <li>{{post.reply }} <span class=\"ml-3 badge\">{{post.date.seconds * 1000 |  date  }}</span></li>\n\n    </ul>\n</div>\n<br />\n<ng-template #other_content><span class=\"spinner spinner-sm\">\n        Loading...\n    </span><span>\n           Searching for reply...\n        </span></ng-template>"

/***/ }),

/***/ "./src/app/main/primarys/primarys.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/primarys/primarys.component.ts ***!
  \*****************************************************/
/*! exports provided: PrimarysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimarysComponent", function() { return PrimarysComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ "./src/app/main/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrimarysComponent = /** @class */ (function () {
    function PrimarysComponent(service, router, formbuilder) {
        this.service = service;
        this.router = router;
        this.formbuilder = formbuilder;
        this.load = false;
        this.formgroup = formbuilder.group({
            reply: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.reply = this.formgroup.controls['reply'];
    }
    PrimarysComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.router.snapshot.paramMap.get('id');
        // this.Message$ = this.router.snapshot.data['data'].valueChanges();
        this.service.getMessageByid(id).subscribe(function (x) {
            _this.super = _this.router.snapshot.paramMap.get('id');
            _a = [x.id, x.email, x.message], _this.id = _a[0], _this.email = _a[1], _this.message = _a[2];
            var _a;
        });
        this.service.viewRespond(id).subscribe(function (y) {
            _this.message2 = y;
            _this.load = true;
        }, function (err) { return console.log(err); }, function () { _this.com = 'Loading complete'; });
    };
    PrimarysComponent.prototype.onSubmit = function (formgroup) {
        var _this = this;
        console.log(formgroup.value.reply);
        this.service.replyRespond(formgroup.value.reply, this.email, this.router.snapshot.paramMap.get('id'))
            .then(function () {
            _this.sucess = 'Sent';
            setTimeout(function () {
                _this.sucess = null;
            }, 2000);
            _this.formgroup.reset();
        })
            .catch(function (err) {
            console.log(err);
            _this.error = err;
            setTimeout(function () {
                _this.error = null;
            }, 2000);
        });
    };
    PrimarysComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-primarys',
            template: __webpack_require__(/*! ./primarys.component.html */ "./src/app/main/primarys/primarys.component.html"),
            styles: [__webpack_require__(/*! ./primarys.component.css */ "./src/app/main/primarys/primarys.component.css")]
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], PrimarysComponent);
    return PrimarysComponent;
}());



/***/ }),

/***/ "./src/app/main/reg/reg.component.css":
/*!********************************************!*\
  !*** ./src/app/main/reg/reg.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* body,\nhtml {\n    height: 100%;\n    background-repeat: no-repeat;\n    background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));\n}\n\n.card-container.card {\n    max-width: 350px;\n    padding: 40px 40px;\n}\n\n.btn {\n    font-weight: 700;\n    height: 36px;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n        user-select: none;\n    cursor: default;\n}\n\n/*\n * Card component\n */\n\n.card {\n    background-color: #F7F7F7;\n    /* just in case there no content*/\n    padding: 20px 25px 30px;\n    margin: 0 auto 25px;\n    margin-top: 50px;\n    /* shadows and rounded borders */\n    border-radius: 2px;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card {\n    width: 96px;\n    height: 96px;\n    margin: 0 auto 10px;\n    display: block;\n    border-radius: 50%;\n}\n\n/*\n * Form styles\n */\n\n.profile-name-card {\n    font-size: 16px;\n    font-weight: bold;\n    text-align: center;\n    margin: 10px 0 0;\n    min-height: 1em;\n}\n\n.reauth-email {\n    display: block;\n    color: #404040;\n    line-height: 2;\n    margin-bottom: 10px;\n    font-size: 14px;\n    text-align: center;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    box-sizing: border-box;\n}\n\n.form-signin #inputEmail,\n.form-signin #inputPassword {\n    direction: ltr;\n    height: 44px;\n    font-size: 16px;\n}\n\n.form-signin input[type=email],\n.form-signin input[type=password],\n.form-signin input[type=text],\n.form-signin button {\n    width: 100%;\n    display: block;\n    margin-bottom: 10px;\n    z-index: 1;\n    position: relative;\n    box-sizing: border-box;\n}\n\n.form-signin .form-control:focus {\n    border-color: rgb(104, 145, 162);\n    outline: 0;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgb(104, 145, 162);\n}\n\n.btn.btn-signin {\n    /*background-color: #4d90fe; */\n    background-color: #2b9bff;\n    /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n    padding: 0px;\n    font-weight: 700;\n    font-size: 14px;\n    height: 36px;\n    border-radius: 3px;\n    border: none;\n    transition: all 0.218s;\n}\n\n.btn.btn-signin:hover,\n.btn.btn-signin:active,\n.btn.btn-signin:focus {\n    background-color: rgb(12, 97, 33);\n}\n\n.forgot-password {\n    color: rgb(104, 145, 162);\n}\n\n.forgot-password:hover,\n.forgot-password:active,\n.forgot-password:focus {\n    color: rgb(12, 97, 33);\n}\n\n[data-letters]:before {\n    content: attr(data-letters);\n    display: inline-block;\n    font-size: 1em;\n    width: 96px;\n    height: 96px;\n    line-height: 2.5em;\n    text-align: center;\n    border-radius: 50%;\n    background: #2b9bff;\n    vertical-align: middle;\n    margin-right: 1em;\n    color: white;\n    padding-top: 35%;\n}"

/***/ }),

/***/ "./src/app/main/reg/reg.component.html":
/*!*********************************************!*\
  !*** ./src/app/main/reg/reg.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"card card-container\">\n        <div class=\"alert alert-success\" *ngIf=\"sucess\">\n            <div class=\"alert-items\">\n                <div class=\"alert-item static\">\n                    <div class=\"alert-icon-wrapper\">\n                        <clr-icon class=\"alert-icon\" shape=\"check-circle\"></clr-icon>\n                    </div>\n                    <span class=\"alert-text\">\n                               {{sucess}}\n                            </span>\n                </div>\n            </div>\n        </div>\n        <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" />\n        <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" /> -->\n        <button routerLink=\"\" class=\"btn btn-primary-outline ml-2\"><clr-icon class=\"test\" shape=\"map-marker\"></clr-icon>\n            <span class=\"title\">Easy-contact</span></button>\n\n\n        <form class=\"form-signin\" (ngSubmit)=\"onSubmit(formgroup)\" [formGroup]=\"formgroup\">\n            <span id=\"reauth-email\" class=\"reauth-email\"></span>\n            <input type=\"email\" formControlName=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n            <input type=\"text\" formControlName=\"companyname\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Company Name\" required>\n            <input type=\"password\" formControlName=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n\n            <button [clrLoading]=\"validateLoading\" class=\"btn btn-lg btn-primary btn-block btn-signin\" [disabled]=\"formgroup.invalid\" type=\"submit\">Sign Up</button>\n        </form>\n        <!-- /form -->\n\n        <a routerLink=\"/login\" class=\"forgot-password\">\n               Sign In\n            </a>\n    </div>\n    <div class=\"alert alert-danger\" *ngIf=\"err\">\n        <div class=\"alert-items\">\n            <div class=\"alert-item static\">\n                <div class=\"alert-icon-wrapper\">\n                    <clr-icon class=\"alert-icon\" shape=\"exclamation-circle\"></clr-icon>\n                </div>\n                <span class=\"alert-text\">\n                                   {{err}}\n                                </span>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /container -->"

/***/ }),

/***/ "./src/app/main/reg/reg.component.ts":
/*!*******************************************!*\
  !*** ./src/app/main/reg/reg.component.ts ***!
  \*******************************************/
/*! exports provided: RegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegComponent", function() { return RegComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main.service */ "./src/app/main/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegComponent = /** @class */ (function () {
    function RegComponent(formbuilder, router, service) {
        this.formbuilder = formbuilder;
        this.router = router;
        this.service = service;
        this.validateLoading = false;
        this.formgroup = formbuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            companyname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.email = this.formgroup.controls['email'];
        this.password = this.formgroup.controls['password'];
        this.companyname = this.formgroup.controls['companyname'];
    }
    RegComponent.prototype.ngOnInit = function () {
    };
    RegComponent.prototype.onSubmit = function (formgroup) {
        var _this = this;
        this.validateLoading = true;
        return this.service.Register(formgroup.value).then(function (data) {
            _this.validateLoading = false;
            _this.sucess = 'You have successfully register';
            setTimeout(function () {
                _this.sucess = null;
            }, 2000);
        })
            .catch(function (err) {
            console.log(err);
            _this.validateLoading = false;
            _this.err = err;
            setTimeout(function () {
                _this.err = null;
            }, 1000);
        });
    };
    RegComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reg',
            template: __webpack_require__(/*! ./reg.component.html */ "./src/app/main/reg/reg.component.html"),
            styles: [__webpack_require__(/*! ./reg.component.css */ "./src/app/main/reg/reg.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]])
    ], RegComponent);
    return RegComponent;
}());



/***/ }),

/***/ "./src/app/main/setting/setting.component.css":
/*!****************************************************!*\
  !*** ./src/app/main/setting/setting.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/setting/setting.component.html":
/*!*****************************************************!*\
  !*** ./src/app/main/setting/setting.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<clr-tabs>\n    <clr-tab>\n        <button clrTabLink id=\"link1\">Angular</button>\n        <clr-tab-content id=\"content1\" *clrIfActive>\n            <h1>Angular</h1>\n            <p> npm installeasymessage --save</p>\n        </clr-tab-content>\n    </clr-tab>\n    <clr-tab>\n        <button clrTabLink>React/Vue.js/Next</button>\n        <clr-tab-content>\n            <p>React/Vue.js/Next</p>\n        </clr-tab-content>\n    </clr-tab>\n    <clr-tab>\n        <button clrTabLink>Php</button>\n        <clr-tab-content>\n            <p>Php</p>\n        </clr-tab-content>\n    </clr-tab>\n</clr-tabs>"

/***/ }),

/***/ "./src/app/main/setting/setting.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/setting/setting.component.ts ***!
  \***************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingComponent = /** @class */ (function () {
    function SettingComponent() {
    }
    SettingComponent.prototype.ngOnInit = function () {
    };
    SettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! ./setting.component.html */ "./src/app/main/setting/setting.component.html"),
            styles: [__webpack_require__(/*! ./setting.component.css */ "./src/app/main/setting/setting.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingComponent);
    return SettingComponent;
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
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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

module.exports = __webpack_require__(/*! /home/ajax/PhpstormProjects/Desktop/project/icontact/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map