webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Server-Base-Path/server-path.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerBasePath; });
var ServerBasePath = (function () {
    function ServerBasePath() {
    }
    ServerBasePath.serverPath = 'http://localhost:8000';
    return ServerBasePath;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_auth_login_login_component__ = __webpack_require__("../../../../../src/app/components/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_sale_sale_component__ = __webpack_require__("../../../../../src/app/components/sale/sale.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_auth_login_login_component__["a" /* LoginComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__components_dashboard_dashboard_component__["a" /* DashboardComponent */], children: [
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__components_sale_sale_component__["a" /* SaleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] }
        ] },
    { path: '**', redirectTo: 'login' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ng2-toasty [position]=\"'top-right'\"></ng2-toasty>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export httpFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_http_service__ = __webpack_require__("../../../../../src/app/auth/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_auth_login_login_component__ = __webpack_require__("../../../../../src/app/components/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_dashboard_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/dashboard/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_sale_sale_component__ = __webpack_require__("../../../../../src/app/components/sale/sale.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















function httpFactory(backend, defaultOptions) {
    return new __WEBPACK_IMPORTED_MODULE_12__auth_http_service__["a" /* HttpService */](backend, defaultOptions);
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_auth_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_dashboard_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_sale_sale_component__["a" /* SaleComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_7_ng2_toasty__["b" /* ToastyModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["k" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["m" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["n" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["h" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["i" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["j" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["l" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["g" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng2_validation__["CustomFormsModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_13__auth_auth_guard_service__["a" /* AuthGuard */], {
                    provide: __WEBPACK_IMPORTED_MODULE_12__auth_http_service__["a" /* HttpService */],
                    useFactory: httpFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["XHRBackend"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]]
                }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.authService.checkLogged()) {
            this.authService.logout();
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Server_Base_Path_server_path__ = __webpack_require__("../../../../../src/app/Server-Base-Path/server-path.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_service__ = __webpack_require__("../../../../../src/app/auth/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
        this.serverPath = __WEBPACK_IMPORTED_MODULE_2__Server_Base_Path_server_path__["a" /* ServerBasePath */].serverPath;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["JwtHelper"]();
    }
    AuthService.prototype.contentHeaders = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        return header;
    };
    /* Method for token request from server
    * @Parameter AuthData means Username & password
    * @Return Boolean
    */
    AuthService.prototype.login = function (authData) {
        // const body = 'username=' + data.username + '&password=' + data.password + '&grant_type=password';
        var body = {
            grant_type: 'password',
            username: authData.username,
            password: authData.password
        };
        return this.http.post(this.serverPath + '/token', body, { headers: this.contentHeaders() }).map(function (res) {
            var loginData = res.json();
            localStorage.setItem('accessToken', loginData.access_token);
            return true;
        });
    };
    /* Method for logout and remove token
    * @Parameter No parameter
    * @Return Boolean
    */
    AuthService.prototype.logout = function () {
        localStorage.removeItem('accessToken');
        return true;
    };
    /* Method for registration in the system
    * @Parameter No parameter
    * @Return Boolean
    */
    AuthService.prototype.registration = function (data) {
        return this.http.post(this.serverPath + '/api/account/registration', data);
    };
    /* Method for change password
    * @Parameter newPassword, confirmPassword
    * @Return Response message from serve
    */
    AuthService.prototype.changePassword = function (changePasswordData) {
        return this.authHttp.post(this.serverPath + '', changePasswordData).map(function (response) { return response.json(); });
    };
    /* Method for request reset password when forgot password
    * @Parameter user email
    * @Return Response string
    */
    AuthService.prototype.forgotPassword = function (data) {
        return this.http.post(this.serverPath + '', data).map(function (response) { return response.json(); });
    };
    /* Method for Reset password
    * @Parameter email, new password, confirm password
    * @Return Response string
    */
    AuthService.prototype.resetPassword = function (data) {
        return this.http.post(this.serverPath + '', data).map(function (response) { return response.json(); });
    };
    /* Method for Checked that claimed user is authenticate or not ?
    * @Parameter No parameter
    * @Return Boolean
    */
    AuthService.prototype.checkLogged = function () {
        if (localStorage.getItem('accessToken')) {
            var token = localStorage.getItem('accessToken');
            return !this.jwtHelper.isTokenExpired(token);
        }
        else {
            return false;
        }
    };
    /* Method for get the logged user name
    * @Parameter No parameter
    * @Return string
    */
    AuthService.prototype.getLoggedUsername = function () {
        if (localStorage.getItem('accessToken')) {
            var token = localStorage.getItem('accessToken');
            var tokenDecode = this.jwtHelper.decodeToken(token);
            return tokenDecode['unique_name'];
        }
        return null;
    };
    AuthService.prototype.getLoggedEmail = function () {
        if (localStorage.getItem('accessToken')) {
            var token = localStorage.getItem('accessToken');
            var tokenDecode = this.jwtHelper.decodeToken(token);
            return tokenDecode['email'];
        }
        return null;
    };
    AuthService.prototype.setToken = function () {
        var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1laWQiOiJlNGQxMTMwNC04YzVjLTRjMTItYjg4Ni03MDBmYTBiN2M0MWUiLCJ1bmlxdWVfbmFtZSI6Ik5haGlkIEhhc2FuIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS9hY2Nlc3Njb250cm9sc2VydmljZS8yMDEwLzA3L2NsYWltcy9pZGVudGl0eXByb3ZpZGVyIjoiQVNQLk5FVCBJZGVudGl0eSIsIkFzcE5ldC5JZGVudGl0eS5TZWN1cml0eVN0YW1wIjoiNzRlNzBhNDMtNGFmMC00ZDc0LWJlOWEtOGFiNmY3YmE2ZWMyIiwicm9sZSI6WyJBZG1pbiIsIkRpcmVjdG9yIl0sImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTE0NTIiLCJhdWQiOiIwOTkxNTNjMjYyNTE0OWJjOGVjYjNlODVlMDNmMDAyMiIsImV4cCI6MTUxMzAxMzY5MjU0LCJuYmYiOjE1MTI5MjcyOTI1NH0.gvHH4CGDqcUYI7V6ykt3GGi_fHjYjnxotfGx-uK5V4Q';
        localStorage.setItem('accessToken', token);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_4__http_service__["a" /* HttpService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HttpService = (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, options) {
        var _this = this;
        var token = localStorage.getItem('accessToken'); // your custom token getter function here
        options.headers.set('Authorization', "Bearer " + token);
        _this = _super.call(this, backend, options) || this;
        return _this;
    }
    HttpService.prototype.request = function (url, options) {
        var token = localStorage.getItem('accessToken');
        if (typeof url === 'string') {
            if (!options) {
                // let's make option object
                options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]() };
            }
            options.headers.set('Authorization', "Bearer " + token);
            options.headers.set('Content-Type', 'application/json');
            options.headers.set('Accept', 'application/json');
        }
        else {
            // we have to add the token to the url object
            url.headers.set('Authorization', "Bearer " + token);
            url.headers.set('Content-Type', 'application/json');
            url.headers.set('Accept', 'application/json');
        }
        return _super.prototype.request.call(this, url, options).catch(this.catchAuthError(this));
    };
    /* Method for Catch Error when a request response error
    * @Parameter HttpService
    * @Return Error Response
    */
    HttpService.prototype.catchAuthError = function (self) {
        var _this = this;
        // we have to pass HttpService's own instance here as `self`
        console.log();
        return function (res) {
            if (res.status === 401) {
                _this.route.navigate(['/login']);
            }
            else if (res.status === 403) {
                _this.route.navigate(['/about']);
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(res);
        };
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["XHRBackend"], __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]])
    ], HttpService);
    return HttpService;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]));



/***/ }),

/***/ "../../../../../src/app/components/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background-image\">\n\n</div>\n<div style=\"height: 100%\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <div class=\"col-lg-2\">\n    <div *ngIf=\"page == 'signin'\">\n      <div>\n        <mat-card class=\"user-login-top\">\n          <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <span class=\"title\">Sign In </span>\n          </div>\n        </mat-card>\n        <div class=\"login-form\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <br>\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"UserLogin(loginForm.value,loginForm.valid)\">\n              <div class=\"input-groups\">\n                <span class=\"input-groups-addon\">\n                  <i class=\"material-icons\">email</i>\n                </span>\n                <mat-form-field>\n                    <input formControlName=\"Email\" matInput placeholder=\"Email\">\n                    <mat-error *ngIf=\"loginForm.controls['Email'].errors?.required\">\n                      <strong>Email</strong> is required\n                    </mat-error>\n                    <mat-error *ngIf=\"loginForm.controls['Email'].errors?.pattern\">\n                      <strong>Email</strong> is not valid\n                    </mat-error>\n                </mat-form-field>\n              </div>\n              <div class=\"input-groups\">\n                <span class=\"input-groups-addon\">\n                  <i class=\"material-icons\">lock_outline</i>\n                </span>\n                <mat-form-field>\n                    <input formControlName=\"Password\" type=\"password\" matInput placeholder=\"Password\">\n                    <mat-error *ngIf=\"loginForm.controls['Password'].errors?.required\">\n                      <strong>Password</strong> is required\n                    </mat-error>\n                </mat-form-field>\n              </div>\n              <div style=\"margin-top: 15px\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                  <button type=\"submit\" mat-raised-button color=\"warn\"><mat-icon>input</mat-icon> Sign In</button>\n              </div>\n            </form>\n            <br>\n            <a class=\"hyperLink\" (click)=\"pageChange('forgotPassword')\">Forgot your password?</a>\n            <div>\n              <h4 class=\"titleText\">Don't have an account yet?</h4>\n            </div>\n            <div>\n                <button (click)=\"pageChange('signup')\" mat-raised-button>\n                    Sign Up\n                </button>\n            </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"page == 'signup'\">\n        <div>\n          <mat-card class=\"user-login-top\">\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n              <span class=\"title\">Sign Up </span>\n            </div>\n          </mat-card>\n          <form [formGroup]=\"registrationForm\" (ngSubmit)=\"UserRegistration(registrationForm.value,registrationForm.valid)\">\n            <div class=\"login-form\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n              <br>\n              <div class=\"input-groups\">\n                  <span class=\"input-groups-addon\">\n                      <i class=\"fa fa-user\"></i>\n                  </span>\n                  <mat-form-field>\n                      <input formControlName=\"Name\" matInput placeholder=\"Name\">\n                      <mat-error *ngIf=\"registrationForm.controls['Name'].errors?.required\">\n                        <strong>Name</strong> is required\n                      </mat-error>\n                  </mat-form-field>\n              </div>\n              <div class=\"input-groups\">\n                  <span class=\"input-groups-addon\">\n                      <i class=\"fa fa-envelope\"></i>\n                  </span>\n                  <mat-form-field>\n                      <input formControlName=\"Email\" matInput placeholder=\"Email\">\n                      <mat-error *ngIf=\"registrationForm.controls['Email'].errors?.required\">\n                        <strong>Email</strong> is required\n                      </mat-error>\n                      <mat-error *ngIf=\"registrationForm.controls['Email'].errors?.pattern\">\n                        <strong>Email</strong> is not valid\n                      </mat-error>\n                  </mat-form-field>\n              </div>\n              <div class=\"input-groups\">\n                  <span class=\"input-groups-addon\">\n                      <i class=\"fa fa-unlock-alt\"></i>\n                  </span>\n                  <mat-form-field>\n                      <input formControlName=\"Password\" type=\"password\" matInput placeholder=\"Password\">\n                      <mat-error *ngIf=\"registrationForm.controls['Password'].errors?.required\">\n                        <strong>Password</strong> is required\n                      </mat-error>\n                  </mat-form-field>\n              </div>\n              <div class=\"input-groups\">\n                  <span class=\"input-groups-addon\">\n                      <i class=\"fa fa-unlock-alt\"></i>\n                  </span>\n                  <mat-form-field>\n                      <input formControlName=\"ConfirmPassword\" type=\"password\" matInput placeholder=\"Confirm Password\">\n                      <mat-error *ngIf=\"registrationForm.controls['ConfirmPassword'].errors?.required\">\n                        <strong>Confirm Password</strong> is required\n                      </mat-error>\n                      <mat-error *ngIf=\"registrationForm.controls['ConfirmPassword'].errors?.equalTo\">\n                        <strong>Confirm Password</strong> is not match\n                      </mat-error>\n                  </mat-form-field>\n              </div>\n              <div style=\"margin-top: 15px\">\n                  <button type=\"submit\" mat-raised-button color=\"warn\"><mat-icon>input</mat-icon> Sign Up</button>\n              </div>\n              <br>\n              <div>\n                <h4 class=\"titleText\">Already have an account?</h4>\n              </div>\n              <div>\n                  <button type=\"button\" (click)=\"pageChange('signin')\" mat-raised-button>\n                      Sign In\n                  </button>\n              </div>\n            </div>\n          </form>\n        </div>\n    </div>\n    <div *ngIf=\"page == 'forgotPassword'\">\n        <div>\n          <mat-card class=\"user-login-top\">\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n              <span class=\"title\">Forgot Password </span>\n            </div>\n          </mat-card>\n          <form [formGroup]=\"forgotPasswordForm\" (ngSubmit)=\"ForgotPassword(forgotPasswordForm.value,forgotPasswordForm.valid)\">\n            <div class=\"login-form\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n              <br>\n              <div class=\"input-groups\">\n                  <span class=\"input-groups-addon\">\n                      <i class=\"fa fa-envelope\"></i>\n                  </span>\n                  <mat-form-field>\n                    <input formControlName=\"Email\" matInput placeholder=\"Email\">\n                    <mat-error *ngIf=\"forgotPasswordForm.controls['Email'].errors?.required\">\n                      <strong>Email</strong> is required\n                    </mat-error>\n                    <mat-error *ngIf=\"forgotPasswordForm.controls['Email'].errors?.pattern\">\n                      <strong>Email</strong> is not valid\n                    </mat-error>\n                  </mat-form-field>\n              </div>\n              <div style=\"margin-top: 15px\">\n                  <button type=\"submit\" mat-raised-button color=\"warn\"><i class=\"fa fa-key\"></i> Forgot Password</button>\n              </div>\n              <div>\n                  <button type=\"button\" mat-button (click)=\"pageChange('signin')\" color=\"primary\">Back</button>\n              </div>\n              <br>\n              <div>\n                <h4 class=\"titleText\">Don't have an account yet?</h4>\n              </div>\n              <div>\n                  <button type=\"button\" (click)=\"pageChange('signup')\" mat-raised-button>\n                      Sign Up\n                  </button>\n              </div>\n            </div>\n          </form>\n        </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/auth/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".section-padding {\n  padding: 50px 0 20px 0; }\n\n.background-image {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/background.jpg") + ");\n  background-position: center center;\n  background-size: cover;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  -webkit-filter: blur(2px);\n  -moz-filter: blur(2px);\n  -o-filter: blur(2px);\n  -ms-filter: blur(2px);\n  filter: blur(2px);\n  opacity: 0.8; }\n\n.margin-top {\n  margin-top: 0px !important; }\n\n.user-login-top {\n  position: relative;\n  margin-left: 15px !important;\n  margin-right: 15px !important;\n  background: linear-gradient(60deg, #ab47bc, #7b1fa2) !important;\n  box-shadow: 0 16px 50px -12px rgba(0, 0, 0, 0.56), 0 4px 30px 0px rgba(0, 0, 0, 0.12), 0 8px 20px -5px rgba(0, 0, 0, 0.2) !important;\n  border-radius: 5px; }\n\n.login-form {\n  background: #fff;\n  padding: 80px 20px 20px 20px;\n  margin-top: -40px;\n  border: 1px solid #ccc;\n  box-shadow: 0 0 5px #ccc; }\n\n.input-groups {\n  position: relative;\n  display: table;\n  border-collapse: separate; }\n\n.input-groups .input-groups-addon {\n  border: 0;\n  background: transparent;\n  padding-right: 10px; }\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -moz-font-feature-settings: 'liga';\n  -moz-osx-font-smoothing: grayscale; }\n\n.title {\n  font-size: 18px;\n  font-weight: bold;\n  color: white; }\n\n.hyperLink {\n  color: rgba(4, 68, 243, 0.61);\n  font-size: 15px;\n  text-decoration: underline; }\n\n.hyperLink:hover {\n  cursor: pointer; }\n\n.titleText {\n  font-size: 17px;\n  color: rgba(6, 158, 16, 0.699); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(authService, route, toast, toastyConfig) {
        this.authService = authService;
        this.route = route;
        this.toast = toast;
        this.toastyConfig = toastyConfig;
        this.page = 'signin';
        this.toastyConfig.theme = 'default';
        if (authService.checkLogged()) {
            route.navigate(['/home']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.InitialLoginForm();
        this.InitialRegistrationForm();
        this.InitialForgotPasswordForm();
    };
    LoginComponent.prototype.pageChange = function (pageName) {
        this.page = pageName;
    };
    LoginComponent.prototype.InitialLoginForm = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            Email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}')]),
            Password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
        });
    };
    LoginComponent.prototype.InitialRegistrationForm = function () {
        var password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        var confirmPassword = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4_ng2_validation__["CustomValidators"].equalTo(password)]);
        this.registrationForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            Name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            Email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}')]),
            Password: password,
            ConfirmPassword: confirmPassword
        });
    };
    LoginComponent.prototype.InitialForgotPasswordForm = function () {
        this.forgotPasswordForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            Email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}')])
        });
    };
    LoginComponent.prototype.UserLogin = function (formdata, isValid) {
        if (isValid) {
            // this.authService.login(formdata).subscribe(response => {
            //   alert('Login Successfully');
            // }, error => {
            //   console.log('Email or password is incorrect');
            // });
            if (formdata.Email === 'nahidh527@gmail.com' && formdata.Password === '123456') {
                this.toast.success({ timeout: 3000, title: 'Login Successful', msg: 'Welcome to dashboard' });
                this.authService.setToken();
                this.route.navigate(['/home']);
            }
            else {
                this.toast.error({ timeout: 3000, title: 'Login Failed', msg: 'Email or password is incorrect' });
            }
        }
    };
    LoginComponent.prototype.UserRegistration = function (formdata, isValid) {
        if (isValid) {
            this.authService.registration(formdata).subscribe(function (response) {
                alert('Registration Successfully');
            }, function (error) {
                console.log('Email is already used');
            });
        }
    };
    LoginComponent.prototype.ForgotPassword = function (formdata, isValid) {
        if (isValid) {
            this.authService.registration(formdata).subscribe(function (response) {
                alert('Reset password link sent');
            }, function (error) {
                console.log('Email is not exist');
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/auth/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__["c" /* ToastyService */], __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__["a" /* ToastyConfig */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n  \n    <mat-sidenav-container>\n        <mat-toolbar  role=\"toolbar\" color=\"primary\" fxLayout=\"row\" class=\"dashoardToolbar\">\n            <button mat-icon-button (click)=\"sidenav.toggle()\" fxHide=\"false\" fxHide.gt-sm>\n              <mat-icon >menu</mat-icon>\n            </button>\n            <button mat-icon-button (click)=\"sidenav.toggle()\" *ngIf=\"media.isActive('gt-sm')\">\n              <mat-icon matTooltip=\"Close\" *ngIf=\"sidenav.opened ? true : false\">arrow_back</mat-icon>\n              <mat-icon matTooltip=\"Open\" *ngIf=\"sidenav.opened ? false : true\">arrow_forward</mat-icon>\n            </button>\n\n            <div *ngFor=\"let item of MenuList\">\n                <div>\n                    <button *ngIf=\"item.children != null\" [matMenuTriggerFor]=\"subMenu1\" mat-button>\n                      {{item.title}} <i class=\"material-icons\">keyboard_arrow_down</i>\n                    </button>\n                    <button *ngIf=\"item.children == null\" mat-button>\n                      {{item.title}}\n                    </button>\n                </div>\n                <mat-menu #subMenu1=\"matMenu\" [overlapTrigger]=\"false\">\n                  <div *ngFor=\"let child of item.children\">\n                    <button *ngIf=\"child.children != null\" [matMenuTriggerFor]=\"subMenu2\"  mat-menu-item>\n                      <mat-icon>account_circle</mat-icon>\n                      <span>{{child.title}}</span>\n                    </button>\n                    <button *ngIf=\"child.children == null\" mat-menu-item>\n                      <mat-icon>account_circle</mat-icon>\n                      <span>{{child.title}}</span>\n                    </button>\n                    <mat-menu #subMenu2=\"matMenu\" [overlapTrigger]=\"false\">\n                      <div *ngFor=\"let subChild of child.children\">\n                        <button *ngIf=\"subChild.children != null\" [matMenuTriggerFor]=\"subMenu3\" mat-menu-item>\n                          <mat-icon>account_circle</mat-icon>\n                          <span>{{subChild.title}}</span>\n                        </button>\n                        <button *ngIf=\"subChild.children == null\" mat-menu-item>\n                          <mat-icon>account_circle</mat-icon>\n                          <span>{{subChild.title}}</span>\n                        </button>\n                        <mat-menu #subMenu3=\"matMenu\" [overlapTrigger]=\"false\">\n                          <button *ngFor=\"let sub3 of subChild.children\" mat-menu-item>\n                            <mat-icon>account_circle</mat-icon>\n                            <span>{{sub3.title}}</span>\n                          </button>\n                        </mat-menu>\n                      </div>\n                    </mat-menu>\n                  </div>\n                </mat-menu>\n            </div>\n            <span fxFlex></span>\n            <div style=\"margin-right: 10px !important\">\n              <a *ngIf=\"auth.checkLogged()\" class=\"name\" [matMenuTriggerFor]=\"menu\">\n                <img src=\"assets/img/logo.png\" style=\"height: 45px; width:45px\" class=\"img-circle image-border\" alt=\"\">\n              </a>\n  \n              <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\" class=\"my-menu menu\">\n                <!-- <div style=\"color: red !important\" class=\"menu-username\">\n  \n                </div> -->\n                <div color=\"accent\" class=\"menu-username\">\n                  <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\n                    <div class=\"name\">{{auth.getLoggedUsername()}}</div>\n                    <div class=\"userMail\">{{auth.getLoggedEmail()}}</div>\n                  </div>\n                </div>\n                <mat-list>\n                  <mat-divider></mat-divider>\n                </mat-list>\n                <button mat-menu-item>\n                  <mat-icon>account_circle</mat-icon>\n                  <span>Change Profile</span>\n                </button>\n                <button mat-menu-item routerLink=\"/mypage/Change-Password\">\n                  <mat-icon>lock</mat-icon>\n                  <span>Change Password</span>\n                </button>\n                <button mat-menu-item routerLink=\"/productList\">\n                  <mat-icon>build</mat-icon>\n                  <span>Settings</span>\n                </button>\n                <mat-list>\n                  <mat-divider></mat-divider>\n                </mat-list>\n                <button mat-menu-item (click)=\"Logout()\">\n                  <mat-icon>subdirectory_arrow_right</mat-icon>\n                  <span>Sign Out</span>\n                </button>\n              </mat-menu>\n            </div>\n        </mat-toolbar>\n        <mat-sidenav [mode]=\"media.isActive('gt-sm')? 'side': 'over'\" #sidenav [opened]=\"media.isActive('gt-sm')? true: false\">\n            <div>\n              <app-side-bar></app-side-bar>\n            </div>\n        </mat-sidenav>\n        <div class=\"container content\">\n          <router-outlet></router-outlet>\n        </div>\n  </mat-sidenav-container>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar {\n  height: 100%; }\n\n.sidebar mat-sidenav-container {\n  background-color: white;\n  height: 100%; }\n\n.fixed-header {\n  /* top: 0;\r\n    position: fixed;\r\n    z-index: 2;\r\n    width: 80%  !important; */ }\n\n.sidebar mat-sidenav {\n  width: 280px !important;\n  position: fixed;\n  background-color: white;\n  overflow-x: hidden;\n  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.3); }\n\n.content {\n  width: 100%;\n  overflow-x: hidden;\n  background-color: white; }\n\n.name, .name :hover {\n  color: black;\n  text-decoration: none !important;\n  cursor: pointer;\n  font-size: 15px; }\n\n.image-border {\n  border: 2px solid #7c7979; }\n\n.dashoardToolbar {\n  /* position: fixed;\r\n    z-index: 1000; */\n  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.3); }\n\n.menu-username {\n  height: 70px !important;\n  padding: 10px;\n  margin-top: -10px;\n  margin-bottom: -10px; }\n\n.menu-username .name {\n  font-size: 18px;\n  color: black; }\n\n.menu-username .userMail {\n  font-size: 12px;\n  color: gray; }\n\n.menu {\n  margin-top: 25px; }\n\n.logo {\n  padding: 25px 0 20px 0;\n  color: black;\n  font-size: 18px;\n  text-align: center;\n  position: relative; }\n\n.logo img {\n  width: 150px;\n  height: 30px;\n  position: absolute;\n  top: 16px;\n  left: 13px; }\n\n@media only screen and (max-width: 768px) {\n  /* For mobile phones: */\n  .menu {\n    margin-top: 20px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sidebar_side_bar_config__ = __webpack_require__("../../../../../src/app/components/dashboard/sidebar/side-bar.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(media, auth, route) {
        this.media = media;
        this.auth = auth;
        this.route = route;
        this.urls = __WEBPACK_IMPORTED_MODULE_4__sidebar_side_bar_config__["b" /* ROUTES */];
        this.MenuList = __WEBPACK_IMPORTED_MODULE_4__sidebar_side_bar_config__["a" /* MenuItems */];
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.Logout = function () {
        this.auth.logout();
        this.route.navigateByUrl('/login');
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            preserveWhitespaces: false
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["b" /* ObservableMedia */], __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/sidebar/side-bar.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItems; });
var ROUTES = [
    { path: '/mypage/dashboard', title: 'Dashboard', icon: 'dashboard', children: null },
    { path: '#order', id: 'order', title: 'Order Management', icon: 'card_giftcard', children: [
            { path: 's', title: 'Current Order', icon: 'widgets' },
            { path: 's', title: 'Order History', icon: 'history' },
            { path: 's', title: 'Periodic Order', icon: 'schedule' },
            { path: 's', title: 'Causal Order', icon: 'shopping_basket' },
        ] },
    // { path: '#component', id: 'component', title: 'Component', icon: 'apps', children: [
    //     {path: 'sg', title: 'Product Management', icon: 'PT'},
    //     {path: 'sg', title: 'Order Management', icon: 'P'},
    //     {path: 'dsg', title: 'Customer Management', icon: 'W'},
    //   ]},
    { path: 'notification', title: 'Points', icon: 'control_point_duplicate', children: null }
];
var MenuItems = [
    { title: 'Chart of Accounting', children: [
            { title: 'Create Ledger', children: null },
            { title: 'Create Group', children: null },
            { title: 'Create MIS name', children: null },
        ] },
    { title: 'Payment Voucher', children: [
            { title: 'Create Ledger', children: null },
            { title: 'Create Group', children: null },
            { title: 'Report', children: [
                    { title: 'Trial Balance', children: [
                            { title: 'Trial 1', children: null },
                            { title: 'Trial 2', children: null },
                        ] },
                    { title: 'Balance Sheet', children: [
                            { title: 'Balance Sheet 1', children: null },
                            { title: 'Balance Sheet 2', children: null },
                        ] },
                    { title: 'Ledger', children: null },
                ] },
        ] },
];


/***/ }),

/***/ "../../../../../src/app/components/dashboard/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo text-uppercase\" [style.color]=\"normalFontColor\">\n  <img src=\"assets/img/elogo.png\" class=\"logo-img\" alt=\"logo\" />\n</div>\n<div class=\"divider\" [style.background-color]=\"dividerBgColor\"></div>\n<div class=\"sidebar-wrapper\">\n  <div class=\"nav-container\">\n    <!-- <ul class=\"nav\">\n      <li *ngFor=\"let menuItem of menuItems\" routerLinkActive #rla=\"routerLinkActive\" [ngClass]=\"rla.isActive? (menuItem.children === null? 'active' : 'alink') : ''\"\n        [routerLinkActiveOptions]=\"{exact: true}\">\n        <a [style.display]=\"menuItem.children === null? 'flex' : 'none'\" [routerLink]=\"[menuItem.path]\" [style.color]=\"rla.isActive? activeFontColor : normalFontColor\">\n          <i class=\"material-icons\">{{menuItem.icon}}</i>\n          <span>{{menuItem.title}}</span>\n        </a>\n        <div [hidden]=\"menuItem.children === null\" class=\"collapse-container\">\n          <a data-toggle=\"collapse\" [href]=\"[menuItem.path]\" style=\"padding: 0 15px;\" [ngClass]=\"rla.isActive? 'parent-active' : ''\"\n            class=\"collapse-a collapsed\" [style.color]=\"normalFontColor\">\n            <i class=\"material-icons\">{{menuItem.icon}}</i>\n            <span>{{menuItem.title}}</span>\n            <b class=\"caret\" [style.color]=\"normalFontColor\"></b>\n          </a>\n          <div id=\"component\" [ngClass]=\"rla.isActive? 'collapsed' : 'collapse'\" [id]=\"[menuItem.id]\">\n            <ul class=\"nav\">\n              <li *ngFor=\"let subItem of menuItem.children\" routerLinkActive #subrla=\"routerLinkActive\" [ngClass]=\"subrla.isActive? 'active' : ''\">\n                <a [routerLink]=\"[subItem.path]\" [style.background-color]=\"subrla.isActive? color : 'transparent'\" [style.color]=\"subrla.isActive? activeFontColor : normalFontColor\"\n                  style=\"height: 43px;\">\n                  <i style=\"margin-left: 5px; width: 21px;\" class=\"material-icons\">{{subItem.icon}}</i>\n                  <span style=\"color: rgba(241, 9, 125, 0.863) !important\">{{subItem.title}}</span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n    </ul> -->\n\n    <mat-list class=\"menu-item\">\n      <mat-list-item>\n        <mat-icon mat-list-icon>dashboard</mat-icon>\n        <h3 matLine> Dashboard </h3>\n      </mat-list-item>\n      <mat-list-item>\n        <mat-icon mat-list-icon>cached</mat-icon>\n        <h3 matLine> Inventory </h3>\n      </mat-list-item>\n      <mat-list-item>\n        <mat-icon mat-list-icon>account_balance</mat-icon>\n        <h3 matLine> Account </h3>\n      </mat-list-item>\n      <mat-list-item>\n        <mat-icon mat-list-icon>bug_report</mat-icon>\n        <h3 matLine> Production </h3>\n      </mat-list-item>\n    </mat-list>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo {\n  padding: 25px 0 20px 0;\n  color: black;\n  font-size: 18px;\n  text-align: center;\n  position: relative; }\n\n.logo img {\n  width: 150px;\n  height: 30px;\n  position: absolute;\n  top: 16px;\n  left: 13px; }\n\n.divider {\n  content: '';\n  position: relative;\n  height: 1px;\n  left: 15px;\n  width: calc(100% - 30px);\n  background-color: rgba(0, 0, 0, 0.5); }\n\n.sidebar-wrapper {\n  overflow-y: auto;\n  padding-bottom: 30px;\n  width: 100%;\n  position: relative;\n  height: 100%; }\n\n.nav-container {\n  position: relative; }\n\n.nav {\n  padding-top: 15px; }\n\n.nav li {\n  margin-bottom: 9px; }\n\n.nav li a {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: rgba(255, 255, 255, 0.8);\n  margin: 0 15px;\n  border-radius: 3px;\n  transition: all 400ms;\n  height: 50px;\n  text-decoration: none; }\n\n.nav li a:hover, .parent-active {\n  background-color: rgba(255, 255, 255, 0.1); }\n\n.nav li a span {\n  margin-left: 5px;\n  font-size: 12px; }\n\n.active a, .active a:hover {\n  /*color: rgba(0,0,0,.6) !important;*/\n  background-color: rgba(201, 198, 20, 0.863) !important;\n  box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(60, 72, 88, 0.4);\n  transition: all 400ms; }\n\n.parent-active, .parent-active:hover {\n  background-color: rgba(216, 219, 9, 0.199) !important; }\n\n.collapse-a {\n  position: relative; }\n\n.collapse-a .caret {\n  position: absolute;\n  right: 5px;\n  top: 23px;\n  color: #fff;\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n  transition: all 200ms; }\n\n.collapsed .caret {\n  position: absolute;\n  right: 5px;\n  top: 23px;\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg); }\n\nspan {\n  font-size: 14px !important; }\n\n.menu-item > mat-list-item {\n  color: black;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 20px; }\n\n.menu-item > mat-list-item:hover {\n  cursor: pointer;\n  background-color: rgba(82, 57, 223, 0.404);\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__side_bar_config__ = __webpack_require__("../../../../../src/app/components/dashboard/sidebar/side-bar.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent() {
        this.menuItems = __WEBPACK_IMPORTED_MODULE_1__side_bar_config__["b" /* ROUTES */];
        this.activeFontColor = 'rgba(0,0,0,.6)';
        this.normalFontColor = 'rgba(0,0,0,.8)';
        this.dividerBgColor = 'rgba(255, 255, 255, 0.5)';
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__("../../../../../src/app/components/dashboard/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sale/sale.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  sale works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/sale/sale.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sale/sale.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SaleComponent = (function () {
    function SaleComponent() {
    }
    SaleComponent.prototype.ngOnInit = function () {
    };
    SaleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sale',
            template: __webpack_require__("../../../../../src/app/components/sale/sale.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sale/sale.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SaleComponent);
    return SaleComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/images/background.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background.3689e49b38c98ed74669.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map