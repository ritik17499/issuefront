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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/sign-in/sign-in.component */ "./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var _description_description_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./description/description.component */ "./src/app/description/description.component.ts");
/* harmony import */ var _err500_err500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./err500/err500.component */ "./src/app/err500/err500.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'sign-in',
        component: _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"]
    },
    {
        path: 'description/:type',
        component: _description_description_component__WEBPACK_IMPORTED_MODULE_4__["DescriptionComponent"]
    },
    {
        path: '500',
        component: _err500_err500_component__WEBPACK_IMPORTED_MODULE_5__["Err500Component"]
    },
    { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div id=\"container\">\n      <app-sidebar id=\"zap\"></app-sidebar>\n\n    <div>\n      <router-outlet ></router-outlet>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'issue-tracking-tool';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/sign-in/sign-in.component */ "./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _description_description_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./description/description.component */ "./src/app/description/description.component.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _err500_err500_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./err500/err500.component */ "./src/app/err500/err500.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_12__["SignInComponent"],
                _description_description_component__WEBPACK_IMPORTED_MODULE_14__["DescriptionComponent"],
                _err500_err500_component__WEBPACK_IMPORTED_MODULE_16__["Err500Component"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_13__["UserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_6__["NgxEditorModule"],
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"],
                _socket_service__WEBPACK_IMPORTED_MODULE_15__["SocketService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        // private url = 'http://api.issue.virtuasha.online';
        // private url ='http://tracking-node.akshaypatil.online';
        this.url = 'http://192.168.29.237:3100';
        //get userinfo from localstoreage
        this.getUserInfoFromLocalstorage = function () {
            return JSON.parse(localStorage.getItem('userInfo'));
        }; // end getUserInfoFromLocalstorage
        //set userInfo in local storage
        this.setUserInfoInLocalStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        };
    }
    // get all countries
    AppService.prototype.getAllCountry = function () {
        var response = this.http.get("https://restcountries.eu/rest/v2/all");
        return response;
    };
    // get country form code
    AppService.prototype.getCountry = function (code) {
        var response = this.http.get("https://restcountries.eu/rest/v2/callingcode/" + code);
        return response;
    };
    //get all users
    AppService.prototype.getAllUsers = function () {
        var response = this.http.get(this.url + "/api/v1/users/view/all?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return response;
    };
    //get users details
    AppService.prototype.getUserInfo = function (id) {
        var response = this.http.get(this.url + "/api/v1/users/" + id + "/details?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return response;
    };
    //signup 
    AppService.prototype.signupFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('type', data.type)
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.url + "/api/v1/users/signup", params);
    }; // end of signupFunction function.
    AppService.prototype.signinFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.url + "/api/v1/users/login", params);
    }; // end of signinFunction function.
    AppService.prototype.forgotPasswordFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('email', data.email);
        return this.http.post(this.url + "/api/v1/users/forgot-password", params);
    }; // end of forgotPasswordFunction function.
    // change password
    AppService.prototype.changePasswordFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('userId', data.userId)
            .set('password', data.password);
        return this.http.put(this.url + "/api/v1/users/change-password", params);
    }; // end of signinFunction function.
    AppService.prototype.logout = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'))
            .set('userId', data);
        return this.http.post(this.url + "/api/v1/users/logout", params);
    }; // end logout function
    //upload Issue
    AppService.prototype.createIssue = function (data) {
        // Creating a user obj for repoter info
        var reporter = [];
        var name = this.getUserInfoFromLocalstorage().firstName + " " + this.getUserInfoFromLocalstorage().lastName;
        var userId = this.getUserInfoFromLocalstorage().userId;
        var reporterObj = {
            name: name,
            userId: userId
        };
        reporter.push(reporterObj);
        // stringify the object for sending
        var reporterArray = JSON.stringify(reporter);
        // stringify the object for sending
        var assigneeArray = JSON.stringify(data.assignee);
        var fd = new FormData();
        fd.append('image', data.screenshot);
        fd.append('title', data.title);
        fd.append('status', data.status);
        fd.append('description', data.description);
        fd.append('assignee', assigneeArray);
        fd.append('reporter', reporterArray);
        return this.http.post(this.url + "/api/v1/issue/create", fd, {
            reportProgress: true,
            observe: 'events'
        });
    };
    //upload Issue
    AppService.prototype.editIssue = function (data) {
        // stringify the object for sending
        var assigneeArray = JSON.stringify(data.assignee);
        var reportArray = JSON.stringify(data.reporter);
        var fd = new FormData();
        fd.append('image', data.screenshot);
        fd.append('title', data.title);
        fd.append('status', data.status);
        fd.append('description', data.description);
        fd.append('assignee', assigneeArray);
        fd.append('reporter', reportArray);
        fd.append('previous', data.previous);
        return this.http.post(this.url + "/api/v1/issue/" + data.id + "/edit", fd, {
            reportProgress: true,
            observe: 'events'
        });
    };
    //get all Issue
    AppService.prototype.getAllIssue = function (pageSize, pageIndex, sort) {
        var response = this.http.get(this.url + "/api/v1/issue/all?pageSize=" + pageSize + "&pageIndex=" + pageIndex + "&sort=" + sort + "&authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return response;
    };
    //end of get all issue
    //search Issue
    AppService.prototype.searchIssue = function (name) {
        var response = this.http.get(this.url + "/api/v1/issue/" + name + "/search?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return response;
    };
    //end of search issue
    //get users details
    AppService.prototype.getIssueInfo = function (id) {
        var response = this.http.get(this.url + "/api/v1/issue/" + id + "/view?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return response;
    };
    AppService.prototype.postComment = function (data) {
        // Creating a user obj for repoter info
        var reporter = [];
        var name = this.getUserInfoFromLocalstorage().firstName + " " + this.getUserInfoFromLocalstorage().lastName;
        var userId = this.getUserInfoFromLocalstorage().userId;
        var reporterObj = {
            name: name,
            userId: userId,
            comment: data.comment
        };
        reporter.push(reporterObj);
        var reportArray = JSON.stringify(reporterObj);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('comment', reportArray)
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return this.http.post(this.url + "/api/v1/issue/" + data.id + "/addComment", params);
    };
    AppService.prototype.addWatchee = function (id) {
        // Creating a user obj for repoter info
        var reporter = [];
        var name = this.getUserInfoFromLocalstorage().firstName + " " + this.getUserInfoFromLocalstorage().lastName;
        var userId = this.getUserInfoFromLocalstorage().userId;
        var reporterObj = {
            name: name,
            userId: userId,
        };
        reporter.push(reporterObj);
        var reportArray = JSON.stringify(reporterObj);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('watching', reportArray)
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return this.http.post(this.url + "/api/v1/issue/" + id + "/addWatchee", params);
    };
    AppService.prototype.addAssignee = function (data) {
        var assigneeArray = JSON.stringify(data.assignee);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('assignee', assigneeArray)
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return this.http.post(this.url + "/api/v1/issue/" + data.id + "/addAssignee", params);
    };
    AppService.prototype.delete = function (id, pervious) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('previous', pervious)
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return this.http.post(this.url + "/api/v1/issue/" + id + "/delete", params);
    };
    //get notification for user
    AppService.prototype.getUserNotification = function (id) {
        var response = this.http.get(this.url + "/api/v1/issue/" + id + "/notification?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return response;
    };
    AppService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        } // end condition *if
        console.error(errorMessage);
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(errorMessage);
    }; // END handleError
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/description/description.component.html":
/*!********************************************************!*\
  !*** ./src/app/description/description.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n    <mat-card class=\"full-card\">\n      <button mat-icon-button color=\"primary\" matTooltip=\"Back\" (click)=\"goBack()\">\n        <i class=\"material-icons\"> arrow_back </i>\n      </button>\n      <button mat-icon-button class=\"float-right\" color=\"primary\" data-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\"\n        aria-expanded=\"false\" aria-controls=\"collapseExample\" matTooltip=\"Delete\">\n        <i class=\"material-icons\" *ngIf=\"editMode && userId == reporterId \"> delete </i>\n      </button>\n      <div class=\"collapse\" id=\"collapseExample\">\n        <div class=\"card card-body\">\n          <span class=\"text-right\">Do you really want delete this Issue? \n            <button mat-raised-button color=\"primary\" (click)=\"delete()\">Yes</button>\n          </span>\n        </div>\n      </div>\n      <br>\n      <h2 class=\"text-center\">Report Issue</h2>\n      <br>\n      <br>\n      <div class=\"row\" *ngIf=\"!editMode || userId == reporterId || assigneeArray.includes(userId)\">\n        <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Title\" [(ngModel)]=\"title\">\n          </mat-form-field>\n        </div>\n\n        <div class=\"col-md-6\">\n          <mat-form-field>\n            <mat-select placeholder=\"Status\" [(ngModel)]=\"status\">\n              <mat-option value=\"backlog\">Backlog</mat-option>\n              <mat-option value=\"in-progress\">In-progress</mat-option>\n              <mat-option value=\"in-test\">In-Test</mat-option>\n              <mat-option value=\"done\">Resolved</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n\n        <br>\n\n        <div class=\"col-md-6\">\n          <h5>Screenshot</h5>\n          <br>\n          <img class=\"mx-auto d-block\" *ngIf=\"imageUrl || selectFile\" [src]=\"imageUrl\" width=\"50%\" alt=\"\">\n          <hr>\n          <div *ngIf=\"warning\" class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n            <strong>Warning!</strong> {{message}}\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n\n          <input style=\"display:none\" type=\"file\" (change)=\" onFileSelected($event)\" #fileInput>\n          <button mat-raised-button class=\"mat-elevation-z1\" color='primary' (click)=\"fileInput.click()\">Image</button>\n        </div>\n        <br>\n\n\n        <div class=\"col-md-6\">\n          <h5>Description</h5>\n          <app-ngx-editor placeholder=\"Issue Description\" [config]=\"editorConfig\" [spellcheck]=\"true\" [(ngModel)]=\"editorContent\"></app-ngx-editor>\n        </div>\n\n        <hr>\n      </div>\n\n      <!-- only seen in edit mode and but not editable -->\n      <div class=\"row\" *ngIf=\"editMode && userId !== reporterId && !assigneeArray.includes(userId)\">\n        <div class=\"col-md-6\">\n          <h3>{{title}}</h3>\n        </div>\n\n        <div class=\"col-md-6\">\n          <span *ngIf=\"status == 'done'\" class=\"status-done\">{{status}} </span>\n          <span *ngIf=\"status == 'in-progress'\" class=\"status-progress\">{{status}} </span>\n          <span *ngIf=\"status == 'backlog'\" class=\"status-backlog\">{{status}} </span>\n          <span *ngIf=\"status == 'in-test'\" class=\"status-testing\">{{status}} </span>\n        </div>\n\n        <br>\n\n        <div class=\"col-md-6\">\n          <h5>Screenshot</h5>\n          <br>\n          <img class=\"mx-auto d-block\" *ngIf=\"imageUrl || selectFile\" [src]=\"imageUrl\" width=\"50%\" alt=\"\">\n\n        </div>\n\n        <br>\n\n\n        <div class=\"col-md-6\">\n          <h5>Description</h5>\n          <p [innerHTML]=\"editorContent\"></p>\n        </div>\n\n        <hr>\n\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <h5>Choose Assignee</h5>\n          <mat-form-field class=\"example-full-width text-capitalize\">\n            <mat-select placeholder=\"Assignee\" [formControl]=\"assignee\" multiple>\n              <mat-option class=\"text-capitalize\" *ngFor=\"let user of users\" [value]=\"user\">\n                <!-- <mat-option class=\"text-capitalize\" *ngFor=\"let user of users\" [value]=\"user\" [disabled]=\"anotherList.includes(user)\"> -->\n                {{user.name}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div class=\"ml-auto d-block p-3\">\n          <button *ngIf=\"!uploadStautus && !warning && assigneeArray.includes(userId) || userId == reporterId  || !editMode\" mat-flat-button color=\"primary\" (click)=\"save()\">Save</button>\n          <button *ngIf=\"editMode && userId !== reporterId && !assigneeArray.includes(userId)\" mat-flat-button color=\"primary\"\n            (click)=\"addAssignee()\">Add\n            Assignee</button>\n          <mat-progress-spinner *ngIf=\"uploadStautus\" class=\"example-margin\" color=\"primary\" mode=\"determinate\"\n            diameter=40 [value]=\"progress\">\n          </mat-progress-spinner>\n        </div>\n        <br>\n      </div>\n    </mat-card>\n\n    <mat-card class=\"full-card1\" *ngIf='editMode'>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <h5>Comments</h5>\n          <hr>\n          <div *ngFor=\"let comments of commentsArray\">\n            <b class=\"text-capitalize\">{{ comments.name }}</b>\n            <p>{{ comments.comment }}</p>\n            <hr>\n          </div>\n          <mat-form-field class=\"example-full-width\">\n            <textarea matInput placeholder=\"Leave a comment\" [(ngModel)]=\"comment\"></textarea>\n          </mat-form-field>\n          <div class=\"float-right\">\n            <button mat-flat-button color=\"warn\" *ngIf=\"userId !== reporterId && !watchee && !assigneeArray.includes(userId)\"\n              (click)=\"addWatchee()\">Watch</button>\n            &nbsp;&nbsp;\n            <button mat-flat-button color=\"primary\" (click)=\"postComment()\">Comment</button>\n          </div>\n        </div>\n\n\n        <div class=\"col-md-12\" *ngIf=\"watchers && watchers.length\">\n          <h5>Watching</h5>\n          <mat-chip-list class=\"inline\" *ngFor=\"let watcher of watchers\">\n            <mat-chip color=\"primary\" selected>{{watcher.name}}</mat-chip>\n          </mat-chip-list>\n        </div>\n      </div>\n\n    </mat-card>\n\n    <br>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/description/description.component.scss":
/*!********************************************************!*\
  !*** ./src/app/description/description.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-card {\n  width: 100%;\n  margin-top: 12%; }\n\n.full-card1 {\n  margin-top: 15px;\n  width: 100%; }\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.example-chip-list {\n  width: 100%; }\n\n.example-margin {\n  margin: 0 10px; }\n\n.status-done {\n  text-transform: uppercase;\n  color: green !important; }\n\n.status-progress {\n  text-transform: uppercase;\n  color: cornflowerblue !important; }\n\n.status-backlog {\n  text-transform: uppercase;\n  color: red !important; }\n\n.status-testing {\n  text-transform: uppercase;\n  color: darkorchid; }\n\n.inline {\n  display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzY3JpcHRpb24vQzpcXFVzZXJzXFxSSVRJSyBWRVJNQVxcRGVza3RvcFxcaXNzdWVmcm9udC9zcmNcXGFwcFxcZGVzY3JpcHRpb25cXGRlc2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLGdCQUFlLEVBRWxCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsWUFBVyxFQUNaOztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUNEO0VBQ0UsZUFBYyxFQUNmOztBQUlIO0VBQ0UsMEJBQXlCO0VBQ3pCLHdCQUF1QixFQUN4Qjs7QUFFRDtFQUNFLDBCQUF5QjtFQUN6QixpQ0FBZ0MsRUFDakM7O0FBRUQ7RUFDRSwwQkFBeUI7RUFDekIsc0JBQXFCLEVBQ3RCOztBQUVEO0VBQ0UsMEJBQXlCO0VBQ3pCLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLHNCQUFxQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtY2FyZHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMiU7XG5cbn1cblxuLmZ1bGwtY2FyZDF7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5leGFtcGxlLWNoaXAtbGlzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmV4YW1wbGUtbWFyZ2luIHtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgfVxuXG5cbiAgXG4uc3RhdHVzLWRvbmV7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xufVxuXG4uc3RhdHVzLXByb2dyZXNze1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogY29ybmZsb3dlcmJsdWUgIWltcG9ydGFudDtcbn1cblxuLnN0YXR1cy1iYWNrbG9ne1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5zdGF0dXMtdGVzdGluZ3tcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IGRhcmtvcmNoaWQ7XG59XG5cbi5pbmxpbmV7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/description/description.component.ts":
/*!******************************************************!*\
  !*** ./src/app/description/description.component.ts ***!
  \******************************************************/
/*! exports provided: DescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionComponent", function() { return DescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../socket.service */ "./src/app/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { COMMA, ENTER } from '@angular/cdk/keycodes';




//import { Observable } from 'rxjs';
//import { map, startWith } from 'rxjs/operators';





var DescriptionComponent = /** @class */ (function () {
    function DescriptionComponent(SocketService, location, appService, snackBar, router, _route) {
        var _this = this;
        this.SocketService = SocketService;
        this.location = location;
        this.appService = appService;
        this.snackBar = snackBar;
        this.router = router;
        this._route = _route;
        this.selectFile = null;
        this.warning = false;
        this.assignee = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.editorConfig = {
            "editable": true,
            "spellcheck": true,
            "height": "auto",
            "minHeight": "0",
            "width": "auto",
            "minWidth": "0",
            "translate": "yes",
            "enableToolbar": true,
            "showToolbar": true,
            "placeholder": "Enter text here...",
            "imageEndPoint": "",
            "toolbar": [
                ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
                ["fontName", "fontSize", "color"],
                ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
                ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
                ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"],
                ["link", "unlink"]
            ]
        };
        this.editMode = true;
        this.users = [];
        this.uploadStautus = false;
        this.watchee = false;
        this.assigneeArray = [];
        // check to for validity
        this.checkStatus = function () {
            if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authtoken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authtoken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authtoken') === null) {
                _this.router.navigate(['/sign-in']);
                return false;
            }
            else {
                return true;
            }
        }; // end checkStatus
        // socket event to verifyUser
        this.verifyUserConfirmation = function () {
            _this.SocketService.verifyUser()
                .subscribe(function () {
                _this.disconnectedSocket = false;
                _this.SocketService.setUser(_this.authToken);
            });
        };
        // socket event to get online user list
        this.getOnlineUserList = function () {
            _this.SocketService.onlineUserList()
                .subscribe(function (userList) {
                _this.userList = [];
                for (var x in userList) {
                    var temp = { 'userId': userList[x].userId, 'name': userList[x].fullName };
                    _this.userList.push(temp);
                }
                console.log('UserList>>', _this.userList);
            }); // end online-user-list
        };
        // get notifications of the user
        this.getNotify = function () {
            _this.SocketService.notify(_this.userId)
                .subscribe(function (data) {
                var message = data;
                _this.snackBar.open("" + message.message, "Dismiss", {
                    duration: 5000,
                });
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }); //end subscribe
        }; // end get message from a user 
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.currentUrl = event.url;
                _this.currentUrl = _this.currentUrl.split('/')[2];
                if (_this.currentUrl == 'add') {
                    _this.editMode = false;
                    _this.clear();
                }
            }
        });
    }
    DescriptionComponent.prototype.ngOnInit = function () {
        this.checkStatus();
        this.getALLUsers();
        this.userId = this.appService.getUserInfoFromLocalstorage().userId;
        this.name = this.appService.getUserInfoFromLocalstorage().firstName + " " + this.appService.getUserInfoFromLocalstorage().lastName;
        if (this.currentUrl != "add") {
            this.getIssueDetails();
        }
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authtoken');
        // Socket intialization
        this.verifyUserConfirmation();
        this.getOnlineUserList();
        //get notifications
        this.getNotify();
    };
    DescriptionComponent.prototype.ngOnDestroy = function () {
        this.SocketService.exitSocket();
    };
    DescriptionComponent.prototype.onFileSelected = function (event) {
        var _this = this;
        this.warning = false;
        this.selectFile = event.target.files[0];
        if (this.selectFile) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.imageUrl = event.target.result;
            };
            reader.readAsDataURL(this.selectFile);
            if (this.selectFile.size > 5000000) {
                this.warning = true;
                this.message = "Please make sure your image is less than 5Mb for ensuring the performance of the app";
            }
            if (this.selectFile.type == "image/png" || this.selectFile.type == "image/jpeg") {
            }
            else {
                this.warning = true;
                this.message = "Please make sure your image format is Jpeg/Png";
            }
        }
    };
    // Get all users
    DescriptionComponent.prototype.getALLUsers = function () {
        var _this = this;
        this.appService.getAllUsers().subscribe(function (data) {
            var userArray = data['data'];
            setTimeout(function () {
                userArray.filter(function (x) {
                    var userObj = {
                        name: x.firstName + " " + x.lastName,
                        userId: x.userId
                    };
                    if (x.userId != _this.appService.getUserInfoFromLocalstorage().userId && x.userId != _this.reporterId) {
                        _this.users.push(userObj);
                    }
                });
            }, 2000);
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    }; //end of get all users.
    /**
     * save
     */
    DescriptionComponent.prototype.save = function () {
        var _this = this;
        if (!this.editMode) {
            if (!this.title) {
                this.snackBar.open("Enter Title Name", "Dismiss", {
                    duration: 5000,
                });
            }
            else if (!this.status) {
                this.snackBar.open("Select Status", "Dismiss", {
                    duration: 5000,
                });
            }
            else if (!this.editorContent) {
                this.snackBar.open("Enter Description", "Dismiss", {
                    duration: 5000,
                });
            }
            else if (!this.selectFile) {
                this.snackBar.open("Select Image", "Dismiss", {
                    duration: 5000,
                });
            }
            else if (!this.assignee.value || this.assignee.value.length == 0) {
                this.snackBar.open("Add atleast one assignee", "Dismiss", {
                    duration: 5000,
                });
            }
            else {
                var data = {
                    title: this.title,
                    status: this.status,
                    description: this.editorContent,
                    assignee: this.assignee.value,
                    screenshot: this.selectFile,
                };
                this.appService.createIssue(data).subscribe(function (event) {
                    if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].UploadProgress) {
                        _this.uploadStautus = true;
                        _this.progress = Math.round(event.loaded / event.total * 100);
                        _this.snackBar.open("Upload Progress : " + Math.round(event.loaded / event.total * 100) + "%", "Dismiss", {
                            duration: 5000,
                        });
                    }
                    else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].Response) {
                        if (event.body['status'] === 200) {
                            _this.snackBar.open(event.body['message'] + ".", "Dismiss", {
                                duration: 5000,
                            });
                            setTimeout(function () {
                                _this.router.navigate(['/home']);
                            }, 1000);
                        }
                        else if (event.body['status'] === 404) {
                            _this.snackBar.open("" + event.body['message'], "Dismiss", {
                                duration: 5000,
                            });
                        }
                        else {
                            _this.snackBar.open("" + event.body['message'], "Dismiss", {
                                duration: 5000,
                            });
                            setTimeout(function () {
                                _this.router.navigate(['/500']);
                            }, 500);
                        }
                    }
                });
            }
        }
        else {
            ////////////////////////////For Editing//////////////////////////
            if (!this.title) {
                this.snackBar.open("Enter Title Name", "Dismiss", {
                    duration: 5000,
                });
            }
            else if (!this.status) {
                this.snackBar.open("Select Status", "Dismiss", {
                    duration: 5000,
                });
            }
            else if (!this.editorContent) {
                this.snackBar.open("Enter Description", "Dismiss", {
                    duration: 5000,
                });
            }
            else if (!this.assignee.value || this.assignee.value.length == 0) {
                this.snackBar.open("Add atleast one assignee", "Dismiss", {
                    duration: 5000,
                });
            }
            else {
                var assigneeArray = this.assignee.value;
                if (this.userId !== this.reporterId) {
                    var obj = {
                        name: this.name,
                        userId: this.userId
                    };
                    assigneeArray.push(obj);
                }
                var data_1 = {
                    title: this.title,
                    status: this.status,
                    description: this.editorContent,
                    assignee: assigneeArray,
                    screenshot: this.selectFile,
                    reporter: this.reporter,
                    previous: this.previous,
                    id: this.currentUrl
                };
                this.appService.editIssue(data_1).subscribe(function (event) {
                    if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].UploadProgress) {
                        _this.progress = Math.round(event.loaded / event.total * 100);
                        _this.snackBar.open("Upload Progress : " + Math.round(event.loaded / event.total * 100) + "%", "Dismiss", {
                            duration: 5000,
                        });
                    }
                    else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].Response) {
                        if (event.body['status'] === 200) {
                            _this.snackBar.open(event.body['message'] + ".", "Dismiss", {
                                duration: 5000,
                            });
                            _this.notify(_this.name + " has Edited " + data_1.title);
                            setTimeout(function () {
                                _this.router.navigate(['/home']);
                            }, 1000);
                        }
                        else if (event.body['status'] === 404) {
                            _this.snackBar.open("" + event.body['message'], "Dismiss", {
                                duration: 5000,
                            });
                        }
                        else {
                            _this.snackBar.open("" + event.body['message'], "Dismiss", {
                                duration: 5000,
                            });
                            setTimeout(function () {
                                _this.router.navigate(['/500']);
                            }, 500);
                        }
                    }
                });
            }
        }
    };
    //getting ISsue details to pre render values
    DescriptionComponent.prototype.getIssueDetails = function () {
        var _this = this;
        this.appService.getIssueInfo(this.currentUrl).subscribe(function (data) {
            if (data['status'] == 200) {
                var response_1 = data['data'];
                _this.imageUrl = "http://192.168.29.237:3100/uploads/" + response_1.screenshot;
                // this.imageUrl = `http://tracking-node.akshaypatil.online/uploads/${response.screenshot}`
                _this.title = response_1.title;
                _this.status = response_1.status;
                _this.editorContent = response_1.description;
                _this.reporterId = response_1.reporter[0].userId;
                _this.reporter = response_1.reporter;
                _this.previous = response_1.screenshot;
                _this.commentsArray = response_1.comments;
                _this.watchers = response_1.watching;
                // To check userId of assignee and give them rights to edit
                response_1.assignee.filter(function (x) { return _this.assigneeArray.push(x.userId); });
                response_1.watching.filter(function (x) {
                    if (x.userId == _this.userId) {
                        _this.watchee = true;
                    }
                });
                setTimeout(function () {
                    _this.anotherList = [];
                    response_1.assignee.filter(function (x) {
                        for (var _i = 0, _a = _this.users; _i < _a.length; _i++) {
                            var y = _a[_i];
                            if (y.userId == x.userId) {
                                // for Default Checking of value
                                _this.anotherList.push(y);
                            }
                        }
                    });
                    _this.assignee.setValue(_this.anotherList);
                }, 3000);
            }
            else {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    };
    /**
     * postComment
     */
    DescriptionComponent.prototype.postComment = function () {
        var _this = this;
        if (this.comment) {
            var data = {
                id: this.currentUrl,
                comment: this.comment
            };
            this.appService.postComment(data).subscribe(function (data) {
                if (data['status'] == 200) {
                    _this.notify(_this.name + " has Commented " + _this.comment + " on " + _this.title);
                    _this.snackBar.open("" + data['message'], "Dismiss", {
                        duration: 5000,
                    });
                    _this.router.navigate(['/home']);
                }
                else {
                    _this.snackBar.open("some error occured", "Dismiss", {
                        duration: 5000,
                    });
                    setTimeout(function () {
                        _this.router.navigate(['/500']);
                    }, 500);
                }
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            });
        }
        else {
            this.snackBar.open("Comment box empty!", "Dismiss", {
                duration: 5000,
            });
        }
    };
    /**
     * Add Assignee
     */
    DescriptionComponent.prototype.addAssignee = function () {
        var _this = this;
        var data = {
            assignee: this.assignee.value,
            id: this.currentUrl
        };
        this.appService.addAssignee(data).subscribe(function (data) {
            if (data['status'] == 200) {
                // this.router.navigate(['/home'])
                _this.notify(_this.name + " has Added Assignee on " + _this.title);
                _this.snackBar.open("" + data['message'], "Dismiss", {
                    duration: 5000,
                });
            }
            else {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    };
    /**
     * Add as WatchIng
     */
    DescriptionComponent.prototype.addWatchee = function () {
        var _this = this;
        this.appService.addWatchee(this.currentUrl).subscribe(function (data) {
            if (data['status'] == 200) {
                _this.watchee = true;
                _this.notify(_this.name + " has Subscribed to " + _this.title);
                _this.snackBar.open("" + data['message'], "Dismiss", {
                    duration: 5000,
                });
            }
            else {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    };
    DescriptionComponent.prototype.delete = function () {
        var _this = this;
        this.appService.delete(this.currentUrl, this.imageUrl).subscribe(function (data) {
            if (data['status'] == 200) {
                _this.snackBar.open("" + data['message'], "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/home']);
                }, 500);
            }
            else {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    };
    /**
     * notify
     */
    DescriptionComponent.prototype.notify = function (message) {
        var _this = this;
        // sending notification to watchers
        this.watchers.filter(function (x) {
            var notifyObj = {
                senderName: _this.name,
                senderId: _this.userId,
                receiverName: x.name,
                receiverId: x.userId,
                issueId: _this.currentUrl,
                message: message,
            };
            _this.SocketService.sendNotify(notifyObj);
        });
        //sending notification to assignee's
        this.users.filter(function (x) {
            var notifyObj = {
                senderName: _this.name,
                senderId: _this.userId,
                receiverName: x.name,
                receiverId: x.userId,
                issueId: _this.currentUrl,
                message: message,
            };
            _this.SocketService.sendNotify(notifyObj);
        });
        //sending notifications to Reporter
        if (this.userId != this.reporterId) {
            var notifyObj = {
                senderName: this.name,
                senderId: this.userId,
                receiverName: this.reporter[0].name,
                receiverId: this.reporterId,
                issueId: this.currentUrl,
                message: message,
            };
            this.SocketService.sendNotify(notifyObj);
        }
    };
    DescriptionComponent.prototype.clear = function () {
        this.title = '';
        this.status = '',
            this.editorContent = "",
            this.imageUrl = '',
            this.assignee.setValue([]);
    };
    DescriptionComponent.prototype.goBack = function () {
        this.location.back();
    };
    DescriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-description',
            template: __webpack_require__(/*! ./description.component.html */ "./src/app/description/description.component.html"),
            styles: [__webpack_require__(/*! ./description.component.scss */ "./src/app/description/description.component.scss")],
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_8__["SocketService"]]
        }),
        __metadata("design:paramtypes", [_socket_service__WEBPACK_IMPORTED_MODULE_8__["SocketService"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DescriptionComponent);
    return DescriptionComponent;
}());



/***/ }),

/***/ "./src/app/err500/err500.component.html":
/*!**********************************************!*\
  !*** ./src/app/err500/err500.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <h1 class=\"head mx-auto\">500!</h1>\n  </div>\n  <hr>\n  <p class=\"text-center\">Internal server error!</p>\n  <p class=\"text-center\">A team of highly trained monkeys has ben dispatched to deal with the sitution.</p>\n  <p class=\"text-center\">If you see them show them this information.</p>\n  <p class=\"text-center\">And don't forget to try again later!</p>\n</div>"

/***/ }),

/***/ "./src/app/err500/err500.component.scss":
/*!**********************************************!*\
  !*** ./src/app/err500/err500.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head {\n  margin-top: 15%;\n  font-size: 5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyNTAwL0M6XFxVc2Vyc1xcUklUSUsgVkVSTUFcXERlc2t0b3BcXGlzc3VlZnJvbnQvc3JjXFxhcHBcXGVycjUwMFxcZXJyNTAwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWU7RUFDZixlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZXJyNTAwL2VycjUwMC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFke1xuICAgIG1hcmdpbi10b3A6IDE1JTtcbiAgICBmb250LXNpemU6IDVlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/err500/err500.component.ts":
/*!********************************************!*\
  !*** ./src/app/err500/err500.component.ts ***!
  \********************************************/
/*! exports provided: Err500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Err500Component", function() { return Err500Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Err500Component = /** @class */ (function () {
    function Err500Component(router, _route) {
        this.router = router;
        this._route = _route;
    }
    Err500Component.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['/sign-in']);
        }, 4000);
    };
    Err500Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-err500',
            template: __webpack_require__(/*! ./err500.component.html */ "./src/app/err500/err500.component.html"),
            styles: [__webpack_require__(/*! ./err500.component.scss */ "./src/app/err500/err500.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], Err500Component);
    return Err500Component;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h1 class=\"main-head text-center\">Issue Tracking Tool</h1>\n      <br>\n    </div>\n\n\n    <div class=\"col-md-12\">\n      <mat-form-field class=\"example-full-width text-center\">\n        <input  matInput placeholder=\"SearchBy Title or Description\" style=\"width:50%\"  (change)=\"search($event)\" [(ngModel)]=\"searchText\" matTooltip=\"Press enter to Search\">\n        <button *ngIf=\"cross\" class=\"float-right\" mat-icon-button color='primary' matTooltip=\"clear\"  (click)=\"ngOnInit()\"><i class=\"material-icons\" style=\"font-size:16px\"> close</i></button>\n      </mat-form-field>\n\n    </div>\n    <br>\n    <mat-spinner class=\"mx-auto\" *ngIf='!issues && !noIssue'></mat-spinner>\n    <mat-card class=\"example-full-width\" *ngIf='noIssue'>\n      <h2 class=\"text-center\" > No Issue Found !</h2>\n      <hr>\n      <p class=\"text-center\" > Click on Report to report an Issue</p>\n    </mat-card>\n    <div *ngIf='issues' class=\"col-md-12\">\n      <mat-accordion>\n        <mat-expansion-panel hideToggle disabled>\n          <mat-expansion-panel-header >\n            <mat-panel-title matTooltip=\"SortBy Title\" class=\"title-expansion\" (click)=\"sortBy('title')\">\n              <b> Issue</b>\n            </mat-panel-title>\n            <mat-panel-title matTooltip=\"SortBy Reporter\" class=\"title-expansion\" (click)=\"sortBy('reporter')\">\n              <b>Patient</b>\n            </mat-panel-title>\n            <mat-panel-description matTooltip=\"SortBy Status\" class=\"title-expansion\" (click)=\"sortBy('status')\">\n              <b color=\"primary\">Status</b>\n            </mat-panel-description>\n            <span class=\"title-expansion\" matTooltip=\"SortBy Status Date\" (click)=\"sortBy('date')\"><b>Date</b></span>&nbsp;&nbsp;\n          </mat-expansion-panel-header>\n        </mat-expansion-panel>\n      </mat-accordion>\n\n      <mat-accordion *ngFor=\"let issue of issues; let i = index\" >\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title class=\"text-capitalize title\">\n              {{issue.title}}\n            </mat-panel-title>\n            <mat-panel-title class=\"text-capitalize title\">\n              {{issue.reporter[0].name}}\n            </mat-panel-title>\n            <mat-panel-description class=\"title capitalize\">\n              <span *ngIf=\"issue.status == 'done'\" class=\"status-done\">treated </span>\n              <span *ngIf=\"issue.status == 'in-progress'\" class=\"status-progress\">under treatment </span>\n              <span *ngIf=\"issue.status == 'backlog'\" class=\"status-backlog\">Not seen </span>\n              <span *ngIf=\"issue.status == 'in-test'\" class=\"status-testing\">Testing </span>\n            </mat-panel-description>\n            <span class=\"title\">{{issue.createdOn | date: \"short\"}}</span>\n\n\n          </mat-expansion-panel-header>\n\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <b>Description</b>\n              <hr>\n              <p [innerHTML]=\"issue.description\"></p>\n            </div>\n            <div class=\"col-md-6\">\n              <b>Image</b>\n              <hr>\n              <ng-container>\n\n                <img src=\"http://192.168.29.237:3100/uploads/{{issue.screenshot}}\" alt=\"Image\" width=\"100%\" height=\"200px\" style=\"object-fit:cover\">\n                <!-- <img src=\"http://tracking-node.akshaypatil.online/uploads/{{issue.screenshot}}\" alt=\"Image\" width=\"100%\" height=\"200px\" style=\"object-fit:cover\"> -->\n\n              </ng-container>\n              <hr>\n              <a mat-icon-button class=\"d-block ml-auto\" color='primary' matTooltip=\"Edit\" routerLink=\"/description/{{issue.issueId}}\"><i\n                  class=\"material-icons\"> edit</i></a>\n\n            </div>\n          </div>\n        </mat-expansion-panel>\n\n      </mat-accordion>\n      <hr>\n      <mat-paginator  class=\"mat-elevation-z5\" [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"[5, 10, 25, 100]\" [pageIndex]=\"pageIndex\"\n        (page)=\"pageEvent = getServerData($event)\">\n      </mat-paginator>\n      <br>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-head {\n  margin: auto;\n  margin-top: 12%; }\n\n@media screen and (max-width: 500px) {\n  .main-head {\n    margin: auto;\n    margin-top: 18%; } }\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\ntable {\n  width: 100%; }\n\n.title {\n  width: 30%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer; }\n\n.gridbtn {\n  width: 30%; }\n\n.title-expansion {\n  width: 30%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  color: black !important; }\n\n.status-done {\n  text-transform: uppercase;\n  color: green !important; }\n\n.status-progress {\n  text-transform: uppercase;\n  color: cornflowerblue !important; }\n\n.status-backlog {\n  text-transform: uppercase;\n  color: red !important; }\n\n.status-testing {\n  text-transform: uppercase;\n  color: darkorchid; }\n\n/*\n.slideout{\n  animation: yourAnimation 0.5s forwards 0s ease;\n}\n\n\n@keyframes yourAnimation{\n  0%{\n      transform: translateX(-100%);\n      }\n  100%{\n      transform: translateX(0%);\n      }\n}\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFJJVElLIFZFUk1BXFxEZXNrdG9wXFxpc3N1ZWZyb250L3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLGdCQUFlLEVBQ2xCOztBQUNEO0VBQ0U7SUFDRSxhQUFZO0lBQ1osZ0JBQWUsRUFDbEIsRUFBQTs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsWUFBVyxFQUNaOztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0UsV0FBVTtFQUNWLG9CQUFtQjtFQUNuQixpQkFBZ0I7RUFDaEIsd0JBQXVCO0VBQ3ZCLGdCQUFlLEVBQ2xCOztBQUNEO0VBQ0ksV0FBVSxFQUNiOztBQUVEO0VBQ0UsV0FBVTtFQUNWLG9CQUFtQjtFQUNuQixpQkFBZ0I7RUFDaEIsd0JBQXVCO0VBQ3ZCLGdCQUFlO0VBQ2Ysd0JBQXVCLEVBQ3hCOztBQUVEO0VBQ0UsMEJBQXlCO0VBQ3pCLHdCQUF1QixFQUN4Qjs7QUFFRDtFQUNFLDBCQUF5QjtFQUN6QixpQ0FBZ0MsRUFDakM7O0FBRUQ7RUFDRSwwQkFBeUI7RUFDekIsc0JBQXFCLEVBQ3RCOztBQUVEO0VBQ0UsMEJBQXlCO0VBQ3pCLGtCQUFpQixFQUNsQjs7QUFDRDs7Ozs7Ozs7Ozs7Ozs7RUFjRSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWhlYWR7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDEyJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcbiAgLm1haW4taGVhZHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMTglO1xufVxufVxuLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC50aXRsZXtcbiAgICB3aWR0aDogMzAlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZ3JpZGJ0bntcbiAgICB3aWR0aDogMzAlO1xufVxuXG4udGl0bGUtZXhwYW5zaW9ue1xuICB3aWR0aDogMzAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuLnN0YXR1cy1kb25le1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogZ3JlZW4gIWltcG9ydGFudDtcbn1cblxuLnN0YXR1cy1wcm9ncmVzc3tcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IGNvcm5mbG93ZXJibHVlICFpbXBvcnRhbnQ7XG59XG5cbi5zdGF0dXMtYmFja2xvZ3tcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG4uc3RhdHVzLXRlc3Rpbmd7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiBkYXJrb3JjaGlkO1xufVxuLypcbi5zbGlkZW91dHtcbiAgYW5pbWF0aW9uOiB5b3VyQW5pbWF0aW9uIDAuNXMgZm9yd2FyZHMgMHMgZWFzZTtcbn1cblxuXG5Aa2V5ZnJhbWVzIHlvdXJBbmltYXRpb257XG4gIDAle1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgIH1cbiAgMTAwJXtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICB9XG59XG4qLyJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../socket.service */ "./src/app/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { filter, pairwise, first } from 'rxjs/operators';




var HomeComponent = /** @class */ (function () {
    function HomeComponent(SocketService, snackBar, router, _route, appService) {
        var _this = this;
        this.SocketService = SocketService;
        this.snackBar = snackBar;
        this.router = router;
        this._route = _route;
        this.appService = appService;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.pageIndex = 0;
        this.sort = "createdOn.-1";
        this.cross = false;
        this.none = false;
        // socketservice varialbes
        this.userList = [];
        // check to for validity
        this.checkStatus = function () {
            if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken') === null) {
                _this.router.navigate(['/sign-in']);
                return false;
            }
            else {
                return true;
            }
        }; // end checkStatus
        // socket event to verifyUser
        this.verifyUserConfirmation = function () {
            _this.SocketService.verifyUser()
                .subscribe(function () {
                _this.disconnectedSocket = false;
                _this.SocketService.setUser(_this.authToken);
            });
        };
        // socket event to get online user list
        this.getOnlineUserList = function () {
            _this.SocketService.onlineUserList()
                .subscribe(function (userList) {
                _this.userList = [];
                for (var x in userList) {
                    var temp = { 'userId': userList[x].userId, 'name': userList[x].fullName };
                    _this.userList.push(temp);
                }
                console.log('UserList =>', _this.userList);
            }); // end online-user-list
        };
        // get notifications of the user
        this.getNotify = function () {
            _this.SocketService.notify(_this.userId)
                .subscribe(function (data) {
                var message = data;
                _this.snackBar.open("" + message.message, "Dismiss", {
                    duration: 5000,
                });
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }); //end subscribe
        }; // end get message from a user 
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.checkStatus();
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken');
        this.userId = this.appService.getUserInfoFromLocalstorage().userId;
        this.searchText = '';
        this.cross = false;
        this.getAllIssue(this.pageSize, this.pageIndex, this.sort);
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken');
        // Socket intialization
        this.verifyUserConfirmation();
        this.getOnlineUserList();
        //get notifications
        this.getNotify();
        // // previous url
        // this.router.events
        //   .pipe(filter((e: any) => e instanceof NavigationEnd),
        //     pairwise(),
        //     first()
        //   ).subscribe((e: any) => {
        //     if (e[0].url === '/sign-in') {
        //       // Socket intialization
        //       console.log(e[0].url);
        //       this.verifyUserConfirmation();
        //       this.getOnlineUserList();
        //     }
        //   });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.SocketService.exitSocket();
    };
    HomeComponent.prototype.getServerData = function (event) {
        this.getAllIssue(event.pageSize, event.pageIndex, this.sort);
        this.pageSize = event.pageSize;
    };
    HomeComponent.prototype.search = function (e) {
        var _this = this;
        this.cross = true;
        this.appService.searchIssue(this.searchText).subscribe(function (data) {
            var response = data['data'];
            _this.length = data['count'];
            if (data['status'] == 200) {
                _this.issues = [];
                _this.issues = response;
            }
            else if (data['status'] == 404) {
                _this.none = true;
                _this.snackBar.open(data['message'] + ".", "Dismiss", {
                    duration: 2000,
                });
                setTimeout(function () {
                    _this.none = false;
                }, 5000);
            }
            else {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function () {
        });
    };
    HomeComponent.prototype.getAllIssue = function (pageSize, pageIndex, sort) {
        var _this = this;
        this.appService.getAllIssue(pageSize, pageIndex, sort).subscribe(function (data) {
            var response = data['data'];
            _this.length = data['count'];
            if (data['status'] == 200) {
                _this.issues = response;
            }
            else if (data['status'] == 404) {
                _this.noIssue = true;
                _this.snackBar.open(data['message'] + ". Please add issues", "Dismiss", {
                    duration: 2000,
                });
            }
            else {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function () {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    };
    // Sorting function
    HomeComponent.prototype.sortBy = function (type) {
        if (type == "title") {
            if (this.sort == "title.1") {
                this.sort = 'title.-1';
            }
            else {
                this.sort = 'title.1';
            }
        }
        else if (type == "reporter") {
            if (this.sort == "reporter.1") {
                this.sort = 'reporter.-1';
            }
            else {
                this.sort = 'reporter.1';
            }
        }
        else if (type == "status") {
            if (this.sort == "status.1") {
                this.sort = 'status.-1';
            }
            else {
                this.sort = 'status.1';
            }
        }
        else {
            if (this.sort == "createdOn.1") {
                this.sort = 'createdOn.-1';
            }
            else {
                this.sort = 'createdOn.1';
            }
        }
        this.getAllIssue(this.pageSize, this.pageIndex, this.sort);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")],
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]]
        }),
        __metadata("design:paramtypes", [_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Notifications</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body p-0\">\n        <div class=\"small-card \" *ngIf=\"noNotify\">\n          Notifications Box empty!\n        </div>\n        <div *ngFor=\"let notify of notifications\" class=\"hover-shadow\">\n          <div class=\"small-card \">\n            <a routerLink=\"description/{{notify.issueId}}\" data-dismiss=\"modal\">\n              {{notify.message}}\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- end of modal -->\n\n<nav class=\"navbar navbar-expand-lg \">\n  <a class=\"brand\" routerLink=\"home\"> Issue tracking Tool</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <i class=\"material-icons\" style=\"color:white;\">menu</i>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav ml-auto\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <li>\n        <a routerLink=\"home\" [class.activated]=\"currentUrl == '/home'\">\n          Home\n        </a>\n      </li>\n      <li>\n        <a *ngIf=\"currentUrl\" routerLink=\"description/add\" [class.activated]=\"currentUrl.split('/')[1] == 'description'\">\n          Report\n        </a>\n      </li>\n\n      <li>\n        <button class=\"icoBtn\" mat-icon-button>\n          <mat-icon [matBadge]=\"count\" matBadgeColor=\"accent\" data-toggle=\"modal\" data-target=\"#exampleModal\" (click)=\"clearNotify()\">notifications_active</mat-icon>\n        </button>\n      </li>\n\n      <li (click)=\"logout()\">\n        <a style=\"cursor: pointer;\">\n          Logout\n        </a>\n      </li>\n    </ul>\n\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background: #3f51b5;\n  position: fixed;\n  width: 100%;\n  z-index: 99; }\n  nav .brand {\n    color: white;\n    font-size: x-large; }\n  nav ul {\n    list-style-type: none;\n    padding: 0;\n    margin: 0; }\n  nav ul li a {\n      color: #fff;\n      padding: 20px;\n      display: block; }\n  nav ul li .activated {\n      background-color: #F2F2F2;\n      color: #2D2E2E; }\n  .icoBtn {\n  width: 70px;\n  height: 70px;\n  color: white; }\n  @-webkit-keyframes yourAnimation {\n  0% {\n    transform: translateX(-70px); }\n  100% {\n    transform: rotate(xx) translateX(0px); } }\n  @keyframes yourAnimation {\n  0% {\n    transform: translateX(-70px); }\n  100% {\n    transform: rotate(xx) translateX(0px); } }\n  .anime {\n  -webkit-animation: yourAnimation 0.5s forwards 0s ease;\n          animation: yourAnimation 0.5s forwards 0s ease; }\n  .small-card {\n  height: 100%;\n  width: 100%;\n  background: white;\n  color: black;\n  margin: 0px 0px 10px 0px;\n  padding: 12px;\n  box-shadow: none; }\n  .hover-shadow :hover {\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.4); }\n  a:hover {\n  box-shadow: none !important;\n  outline: none;\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9DOlxcVXNlcnNcXFJJVElLIFZFUk1BXFxEZXNrdG9wXFxpc3N1ZWZyb250L3NyY1xcYXBwXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW1CO0VBQ25CLGdCQUFlO0VBQ2YsWUFBVztFQUNYLFlBQVcsRUEyQmQ7RUEvQkQ7SUFPSyxhQUFZO0lBQ1osbUJBQWtCLEVBQ2xCO0VBVEw7SUFZUSxzQkFBcUI7SUFDckIsV0FBVTtJQUNWLFVBQVMsRUFlWjtFQTdCTDtNQW1CZ0IsWUFBVztNQUNYLGNBQWE7TUFDYixlQUFjLEVBQ2pCO0VBdEJiO01BeUJnQiwwQkFBeUI7TUFDekIsZUFBYyxFQUNqQjtFQU1iO0VBQ0ksWUFBVztFQUNYLGFBQVk7RUFDWixhQUFZLEVBQ2Y7RUFFRDtFQUNJO0lBQ0ksNkJBQTRCLEVBQUE7RUFFaEM7SUFDSSxzQ0FBcUMsRUFBQSxFQUFBO0VBTDdDO0VBQ0k7SUFDSSw2QkFBNEIsRUFBQTtFQUVoQztJQUNJLHNDQUFxQyxFQUFBLEVBQUE7RUFJN0M7RUFDSSx1REFBOEM7VUFBOUMsK0NBQThDLEVBQ2pEO0VBR0Q7RUFDSSxhQUFZO0VBQ1osWUFBVztFQUNYLGtCQUFnQjtFQUNoQixhQUFZO0VBQ1oseUJBQXdCO0VBQ3hCLGNBQWE7RUFDYixpQkFBZSxFQUNsQjtFQUVEO0VBQ0ksa0hBRStDLEVBQ2xEO0VBRUQ7RUFDSSw0QkFBMkI7RUFDM0IsY0FBYTtFQUNiLHNCQUFxQixFQUN4QiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XG4gICAgYmFja2dyb3VuZDogIzNmNTFiNTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogOTk7XG5cbiAgICAuYnJhbmR7XG4gICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgIH1cblxuICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgbGkge1xuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWN0aXZhdGVkIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMkQyRTJFO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuXG4uaWNvQnRue1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbkBrZXlmcmFtZXMgeW91ckFuaW1hdGlvbntcbiAgICAwJXtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC03MHB4KTtcbiAgICAgICAgfVxuICAgIDEwMCV7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKHh4KSB0cmFuc2xhdGVYKDBweCk7XG4gICAgICAgIH1cbn1cblxuLmFuaW1le1xuICAgIGFuaW1hdGlvbjogeW91ckFuaW1hdGlvbiAwLjVzIGZvcndhcmRzIDBzIGVhc2U7XG59XG5cblxuLnNtYWxsLWNhcmR7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6d2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbjogMHB4IDBweCAxMHB4IDBweDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJveC1zaGFkb3c6bm9uZTtcbn1cblxuLmhvdmVyLXNoYWRvdyA6aG92ZXJ7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgICAgICAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSxcbiAgICAgICAgICAgICAgICAgIDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC40KVxufVxuXG5hOmhvdmVye1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(SocketService, snackBar, router, _route, appService) {
        var _this = this;
        this.SocketService = SocketService;
        this.snackBar = snackBar;
        this.router = router;
        this._route = _route;
        this.appService = appService;
        this.count = null;
        this.noNotify = false;
        // logout Function
        this.logout = function () {
            _this.userId = _this.appService.getUserInfoFromLocalstorage().userId;
            _this.appService.logout(_this.userId)
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.SocketService.exitSocket();
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('authtoken');
                    _this.router.navigate(['/sign-in']);
                }
                else {
                    _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                        duration: 5000,
                    });
                } // end condition
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            });
        }; // end logout
        // get notifications of the user
        this.getNotify = function () {
            _this.userId = _this.appService.getUserInfoFromLocalstorage().userId;
            _this.SocketService.notify(_this.userId)
                .subscribe(function (data) {
                _this.noNotify = false;
                var message = data;
                _this.notifications.unshift(message);
                _this.count++;
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }); //end subscribe
        }; // end get message from a user 
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.currentUrl = event.url;
            }
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        //get notifications
        this.getNotify();
    };
    //code to get last 10 notification
    SidebarComponent.prototype.getNotification = function (id) {
        var _this = this;
        this.notifications = [];
        this.noNotify = false;
        this.appService.getUserNotification(id).subscribe(function (data) {
            if (data["status"] === 200) {
                var response = data['data'];
                _this.notifications = [];
                if (response != null) {
                    response.map(function (x) {
                        _this.notifications.unshift(x);
                    });
                }
            }
            else if (data["status"] === 404) {
                _this.noNotify = true;
            }
            else {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    };
    /**
     * clearNotify
     */
    SidebarComponent.prototype.clearNotify = function () {
        this.userId = this.appService.getUserInfoFromLocalstorage().userId;
        this.count = null;
        this.getNotification(this.userId);
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")],
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]]
        }),
        __metadata("design:paramtypes", [_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SocketService = /** @class */ (function () {
    function SocketService(http, appService) {
        var _this = this;
        this.http = http;
        this.appService = appService;
        //private url = 'http://api.issue.virtuasha.online';
        this.url = 'http://192.168.29.237:3100';
        // events to be listened 
        this.verifyUser = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on('verifyUser', function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end verifyUser
        this.onlineUserList = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on("online-user-list", function (userList) {
                    observer.next(userList);
                }); // end Socket
            }); // end Observable
        }; // end onlineUserList
        this.disconnectedSocket = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on("disconnect", function () {
                    observer.next();
                }); // end Socket
            }); // end Observable
        }; // end disconnectSocket
        // end events to be listened
        // events to be emitted
        this.setUser = function (authToken) {
            _this.socket.emit("set-user", authToken);
        }; // end setUser
        this.sendNotify = function (notifyObject) {
            _this.socket.emit('notify', notifyObject);
        }; // end send notify
        this.notify = function (userId) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on(userId, function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end notify
        // disconnect socket
        this.exitSocket = function () {
            _this.socket.emit('disconnect');
            _this.socket.disconnect();
        }; // end exit socket
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url);
    }
    SocketService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        } // end condition *if
        console.error(errorMessage);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errorMessage);
    }; // END handleError
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/user/change-password/change-password.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/user/change-password/change-password.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"center\">\n<mat-card class=\"signin-card\" >\n  \n  <h1 class=\"text-center\" style=\"margin-top:10%\"> CHANGE PASSWORD</h1>\n  <br>\n  <h6>Enter a new password</h6>\n  <br>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Password\" type=\"text\" [(ngModel)]=\"pass1\">\n  </mat-form-field>\n  <br><br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Password\" type=\"text\" [(ngModel)]=\"pass2\">\n  </mat-form-field>\n  <br>\n  <h6>Don't have account yet? <a [routerLink]=\"['/sign-up']\">SignUp</a> </h6>\n  <br>\n  <button mat-raised-button class=\"singinbtn mat-elevation-z8\" color='primary' (click)=\"changePasswordFunction()\"><i\n      class=\"material-icons\">navigate_next</i></button>\n  <br><br>\n</mat-card>\n</div>"

/***/ }),

/***/ "./src/app/user/change-password/change-password.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/user/change-password/change-password.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signin-card {\n  width: 50%;\n  margin: auto; }\n\n.center {\n  margin-top: 6%; }\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jaGFuZ2UtcGFzc3dvcmQvQzpcXFVzZXJzXFxSSVRJSyBWRVJNQVxcRGVza3RvcFxcaXNzdWVmcm9udC9zcmNcXGFwcFxcdXNlclxcY2hhbmdlLXBhc3N3b3JkXFxjaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFVO0VBQ1YsYUFBWSxFQUNmOztBQUNEO0VBQ0ksZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsWUFBVyxFQUNaOztBQUVEO0VBQ0UsWUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvdXNlci9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ25pbi1jYXJke1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmNlbnRlcntcbiAgICBtYXJnaW4tdG9wOiA2JTtcbn1cblxuLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/user/change-password/change-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/change-password/change-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(appService, router, _route, snackBar) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this._route = _route;
        this.snackBar = snackBar;
        this.validation = function () {
            if (_this.pass1 === _this.pass2) {
                return true;
            }
            else {
                _this.snackBar.open("Please make sure you have enter same password in both feilds", "Dismiss", {
                    duration: 5000,
                });
            }
        };
        this.changePasswordFunction = function () {
            if (_this.validation()) {
                var captureId = _this._route.snapshot.paramMap.get("userId");
                var data = {
                    userId: captureId,
                    password: _this.pass1
                };
                _this.appService.changePasswordFunction(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                            duration: 5000,
                        });
                        setTimeout(function () {
                            _this.router.navigate(['/sign-in']);
                        }, 2000);
                    }
                    else {
                        _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                            duration: 5000,
                        });
                    }
                }, function (err) {
                    _this.snackBar.open("some error occured", "Dismiss", {
                        duration: 5000,
                    });
                    setTimeout(function () {
                        _this.router.navigate(['/500']);
                    }, 500);
                });
            }
        };
        this.statusBar = document.getElementById('zap');
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.statusBar.style.display = 'none';
    };
    ChangePasswordComponent.prototype.ngOnDestroy = function () {
        this.statusBar.style.display = 'block';
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/user/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.scss */ "./src/app/user/change-password/change-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br><br><br>\n\n  <mat-card class=\"signin-card\">\n\n    <h1 class=\"text-center\" > FORGOT PASSWORD</h1>\n    <br>\n    <h6>Please enter your Email to get a password recovery mail.</h6>\n    <br>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\" [(ngModel)]=\"email\">\n      <!-- <mat-hint>Email seems to be Ok!</mat-hint> -->\n      <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n        Please enter a valid email address\n      </mat-error>\n      <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n        Email is <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n\n    <br>\n    <h6 style=\"color:#3f51b5\" [routerLink]=\"['/sign-in']\">Sign-in.</h6>\n    <br>\n    <button mat-raised-button class=\"singinbtn mat-elevation-z8\" color='primary' (click)=\"submit()\"><i class=\"material-icons\">navigate_next</i></button>\n    <br><br>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signin-card {\n  width: 100%;\n  margin: auto; }\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9mb3Jnb3QtcGFzc3dvcmQvQzpcXFVzZXJzXFxSSVRJSyBWRVJNQVxcRGVza3RvcFxcaXNzdWVmcm9udC9zcmNcXGFwcFxcdXNlclxcZm9yZ290LXBhc3N3b3JkXFxmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsYUFBWSxFQUNmOztBQUNEO0VBQ0ksaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC91c2VyL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbmluLWNhcmR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: MyErrorStateMatcher, ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(snackBar, appService, router) {
        var _this = this;
        this.snackBar = snackBar;
        this.appService = appService;
        this.router = router;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.submit = function () {
            if (!_this.email) {
                _this.snackBar.open("Please enter email", "Dismiss", {
                    duration: 5000,
                });
            }
            else {
                var data = {
                    email: _this.email
                };
                _this.appService.forgotPasswordFunction(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                            duration: 5000,
                        });
                        setTimeout(function () {
                            _this.router.navigate(['/sign-in']);
                        }, 2000);
                    }
                    else {
                        _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                            duration: 5000,
                        });
                    }
                }, function (err) {
                    _this.snackBar.open("some error occured", "Dismiss", {
                        duration: 5000,
                    });
                    setTimeout(function () {
                        _this.router.navigate(['/500']);
                    }, 500);
                });
            }
        };
        this.statusBar = document.getElementById('zap');
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.statusBar.style.display = 'none';
    };
    ForgotPasswordComponent.prototype.ngOnDestroy = function () {
        this.statusBar.style.display = 'block';
    };
    //Validations
    ForgotPasswordComponent.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/user/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/user/forgot-password/forgot-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div  class=\"container\">\n    <br>\n    <mat-card class=\"signin-card\" id='card'>\n        <h1 class=\"text-center\">Issue Tracking Tool</h1>\n      <hr>\n      <div *ngIf=\"!signupForm\">\n        <p class=\"subtitle\">Sign-in</p>\n        \n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\" [(ngModel)]=\"email\">\n          <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required') \">\n            Please enter a valid email address\n          </mat-error>\n  \n          <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n            Email is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n        <br>\n  \n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Password\" type=\"password\" [(ngModel)]=\"password\">\n        </mat-form-field>\n  \n  \n        <button mat-raised-button color=\"primary\" style=\"display: block;margin-left:auto\" (click)=\"signIn()\"><i\n            class=\"material-icons\">\n            keyboard_arrow_right\n          </i></button>\n      </div>\n  \n  \n      <div *ngIf=\"signupForm\">\n  \n          <span  class=\"subtitle\">Sign-up</span>\n  \n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"First name\" type=\"text\" [(ngModel)]=\"firstName\">\n        </mat-form-field>\n  \n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Last name\" type=\"text\" [(ngModel)]=\"lastName\">\n        </mat-form-field>\n  \n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\" [(ngModel)]=\"email\">\n          <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required') \">\n            Please enter a valid email address\n          </mat-error>\n          <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n            Email is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n        <br>\n  \n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Password\" type=\"password\" [(ngModel)]=\"password\">\n        </mat-form-field>\n  \n  \n        <button mat-raised-button color=\"primary\" style=\"display: block;margin-left:auto\" (click)=\"submit()\"><i\n            class=\"material-icons\">\n            keyboard_arrow_right\n          </i></button>\n      </div>\n      <hr>\n  \n     \n  \n      \n      <div (click)=\"signupForm = !signupForm\" class=\"preferred-login google-login\" data-ga=\"[&quot;sign up&quot;,&quot;Sign Up Started - Google&quot;,&quot;New Post&quot;,null,null]\">\n        <span *ngIf=\"!signupForm\"> Sign up</span> <span *ngIf=\"signupForm\"> Sign in</span> using Email and Password.\n      </div>\n  \n      <a routerLink=\"/forgot-password\">Forgot Password?</a>\n    </mat-card>\n  </div>"

/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signin-card {\n  width: 100%;\n  margin: auto; }\n\n.full-page {\n  height: -webkit-fill-available;\n  width: 100%; }\n\n.bottom-grid {\n  width: 100%;\n  min-height: 100%;\n  display: block;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat; }\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.preferred-login {\n  padding-top: 8px;\n  padding-bottom: 11px;\n  margin-bottom: 16px;\n  background-color: white;\n  border-radius: 3px;\n  border: 1px solid black;\n  color: black;\n  text-align: center;\n  cursor: pointer; }\n\n/*\n.anime{\n    animation: yourAnimation 0.5s forwards 0s ease;\n}\n\n@keyframes yourAnimation{\n    0%{\n        transform: scale(1) ;\n        opacity: 1;\n        }\n    100%{\n        transform: scale(0.4) ;\n        opacity: 0.4;\n        }\n}\n*/\n\n.subtitle {\n  font-size: 24px; }\n\n.main-title {\n  font-size: 34px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWduLWluL0M6XFxVc2Vyc1xcUklUSUsgVkVSTUFcXERlc2t0b3BcXGlzc3VlZnJvbnQvc3JjXFxhcHBcXHVzZXJcXHNpZ24taW5cXHNpZ24taW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsYUFBWSxFQUNmOztBQUNEO0VBQ0ksK0JBQThCO0VBQzlCLFlBQVcsRUFDZDs7QUFFRDtFQUVJLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsZUFBYztFQUNkLHVCQUFzQjtFQUN0Qiw2QkFBNEI7RUFDNUIsNEJBQTJCO0VBQzNCLDZCQUE0QixFQUMvQjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsWUFBVyxFQUNaOztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLHFCQUFvQjtFQUNwQixvQkFBbUI7RUFDbkIsd0JBQXVCO0VBQ3ZCLG1CQUFrQjtFQUNsQix3QkFBdUI7RUFDdkIsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixnQkFBZSxFQUNsQjs7QUFDQzs7Ozs7Ozs7Ozs7Ozs7O0VBZUE7O0FBQ0Y7RUFDSSxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLGdCQUFlLEVBRWxCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbmluLWNhcmR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmZ1bGwtcGFnZXtcbiAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib3R0b20tZ3JpZCB7XG4gICAgLy9iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iZy5qcGcnKSAxMDBweCAxMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5wcmVmZXJyZWQtbG9naW4ge1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDExcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4gIC8qXG4uYW5pbWV7XG4gICAgYW5pbWF0aW9uOiB5b3VyQW5pbWF0aW9uIDAuNXMgZm9yd2FyZHMgMHMgZWFzZTtcbn1cblxuQGtleWZyYW1lcyB5b3VyQW5pbWF0aW9ue1xuICAgIDAle1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgIDEwMCV7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC40KSA7XG4gICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgICAgfVxufVxuKi9cbi5zdWJ0aXRsZXtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5tYWluLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMzRweDtcblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.ts ***!
  \***************************************************/
/*! exports provided: MyErrorStateMatcher, SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var SignInComponent = /** @class */ (function () {
    function SignInComponent(appService, snackBar, router, _route) {
        this.appService = appService;
        this.snackBar = snackBar;
        this.router = router;
        this._route = _route;
        this.signupForm = false;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.statusBar = document.getElementById('zap');
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.statusBar.style.display = 'none';
    };
    SignInComponent.prototype.ngOnDestroy = function () {
        this.statusBar.style.display = 'block';
    };
    // On submit function
    SignInComponent.prototype.submit = function () {
        var _this = this;
        if (!this.firstName) {
            this.snackBar.open("enter first name", "Dismiss", {
                duration: 5000,
            });
        }
        else if (!this.lastName) {
            this.snackBar.open("enter last name", "Dismiss", {
                duration: 5000,
            });
        }
        else if (!this.email) {
            this.snackBar.open("enter email", "Dismiss", {
                duration: 5000,
            });
        }
        else {
            this.progress = true;
            var data = {
                firstName: this.firstName.toLowerCase(),
                lastName: this.lastName.toLowerCase(),
                type: 'email',
                email: this.email.toLowerCase(),
                password: this.password,
            };
            this.appService.signupFunction(data)
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    var card = document.getElementById('card');
                    card.classList.add('anime');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('authtoken', apiResponse.data.authToken);
                    _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                    setTimeout(function () {
                        _this.router.navigate(['/home']);
                    }, 500);
                }
                else {
                    _this.snackBar.open(apiResponse.message + ".", "Dismiss", {
                        duration: 5000,
                    });
                }
            }, function (err) {
                _this.snackBar.open("some error occured. Please try again later", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            });
        } // end condition
    };
    // Submit function
    SignInComponent.prototype.signIn = function () {
        var _this = this;
        this.progress = true;
        // check for email
        if (this.email) {
            // check for password 
            var data = {
                email: this.email.toLowerCase(),
                password: this.password
            };
            this.appService.signinFunction(data)
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    var card = document.getElementById('card');
                    // card.classList.add('anime')
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('authtoken', apiResponse.data.authToken);
                    _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                    setTimeout(function () {
                        _this.router.navigate(['/home']);
                    }, 500);
                }
                else if (apiResponse.status === 404) {
                    _this.progress = false;
                    _this.snackBar.open("Email or Password wrong", "Dismiss", {
                        duration: 5000,
                    });
                }
                else {
                    _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                        duration: 5000,
                    });
                }
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            });
        }
        else {
            this.snackBar.open("Please enter a valid Email and Password", "Dismiss", {
                duration: 5000,
            });
        } // check for email ends here
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/user/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.scss */ "./src/app/user/sign-in/sign-in.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/user/forgot-password/forgot-password.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/user/change-password/change-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    { path: 'forgot-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"] },
                    { path: 'change-password/:userId', component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordComponent"] }
                ])
            ],
            declarations: [_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordComponent"]]
        })
    ], UserModule);
    return UserModule;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\RITIK VERMA\Desktop\issuefront\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map