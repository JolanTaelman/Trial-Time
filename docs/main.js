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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css\">\r\n\r\n<router-outlet></router-outlet>\r\n<app-trials></app-trials>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'trial-time';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _trials_trials_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trials/trials.component */ "./src/app/trials/trials.component.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _grid_tester_grid_tester_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./grid-tester/grid-tester.component */ "./src/app/grid-tester/grid-tester.component.ts");
/* harmony import */ var _trial_trial_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./trial/trial.component */ "./src/app/trial/trial.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _trials_trials_component__WEBPACK_IMPORTED_MODULE_6__["TrialsComponent"],
                _grid_tester_grid_tester_component__WEBPACK_IMPORTED_MODULE_9__["GridTesterComponent"],
                _trial_trial_component__WEBPACK_IMPORTED_MODULE_10__["TrialComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabaseModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/grid-tester/grid-tester.component.css":
/*!*******************************************************!*\
  !*** ./src/app/grid-tester/grid-tester.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.pad5{\r\n    padding: 5%;\r\n}\r\n\r\n.checkerTable{\r\n    width: 40%;\r\n    height: 40%;\r\n}\r\n\r\n.square{\r\n    height: 100px;\r\n    width: 100px;\r\n    background-color: white;\r\n}\r\n\r\n.checkerSquare{\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-color: lightgray;\r\n    border-radius: 5%;\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JpZC10ZXN0ZXIvZ3JpZC10ZXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9ncmlkLXRlc3Rlci9ncmlkLXRlc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnBhZDV7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuLmNoZWNrZXJUYWJsZXtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxufVxyXG4uc3F1YXJle1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2hlY2tlclNxdWFyZXtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/grid-tester/grid-tester.component.html":
/*!********************************************************!*\
  !*** ./src/app/grid-tester/grid-tester.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui container\">\r\n  <div class=\"center pad5\">\r\n    <button (click)=\"showWip = !showWip\"> show Wip</button>\r\n  </div>\r\n\r\n  <div class=\"center pad5\">\r\n    <div *ngIf=\"showWip\">\r\n      <table>\r\n        <tr *ngFor=\"let item of [0,1,2,3]; let i=index\" class=\"checkerRow\">\r\n          <td *ngFor=\"let item of [0,1,2,3]; let f=index\" class=\"checkerSquare\">\r\n            <div class=\"square\" *ngIf=\"currentAttempt[i][f] === 0\" (click)=\"setGrid(i, f)\"></div>\r\n            <img style=\"height: 96px; width: 100px;\" src=\"haurchey.png\" *ngIf=\"currentAttempt[i][f] === 1\"\r\n              (click)=\"setGrid(i, f)\">\r\n          </td>\r\n        </tr>\r\n      </table>\r\n\r\n      <div class=\"center\">\r\n        <button (click)=\"checkGrid()\"> Check values</button>\r\n      </div>\r\n      <div class=\"center\" *ngIf=\"solved\"> It'll work</div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/grid-tester/grid-tester.component.ts":
/*!******************************************************!*\
  !*** ./src/app/grid-tester/grid-tester.component.ts ***!
  \******************************************************/
/*! exports provided: GridTesterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridTesterComponent", function() { return GridTesterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridTesterComponent = /** @class */ (function () {
    function GridTesterComponent() {
    }
    GridTesterComponent.prototype.ngOnInit = function () {
        this.solved = false;
        this.showWip = false;
        this.currentAttempt = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
        this.solutions =
            [[[1, 1, 1, 1],
                    [0, 1, 0, 1],
                    [0, 0, 1, 1],
                    [0, 0, 0, 1]],
                [[1, 0, 0, 0],
                    [1, 1, 0, 0],
                    [1, 0, 1, 0],
                    [1, 1, 1, 1]],
                [[1, 1, 1, 1],
                    [1, 0, 1, 0],
                    [1, 1, 0, 0],
                    [1, 0, 0, 0]],
                [[0, 0, 0, 1],
                    [0, 0, 1, 1],
                    [0, 1, 0, 1],
                    [1, 1, 1, 1]],
                [[1, 1, 1, 1],
                    [0, 1, 0, 0],
                    [0, 1, 1, 0],
                    [0, 1, 0, 1]],
                [[1, 0, 0, 1],
                    [0, 1, 0, 1],
                    [1, 1, 1, 1],
                    [0, 0, 0, 1]],
                [[1, 0, 1, 0],
                    [0, 1, 1, 0],
                    [0, 0, 1, 0],
                    [1, 1, 1, 1]],
                [[1, 0, 0, 0],
                    [1, 1, 1, 1],
                    [1, 0, 1, 0],
                    [1, 0, 0, 1]],
                [[0, 1, 0, 1],
                    [0, 1, 1, 0],
                    [0, 1, 0, 0],
                    [1, 1, 1, 1]],
                [[1, 0, 0, 1],
                    [1, 1, 1, 1],
                    [1, 1, 0, 0],
                    [1, 0, 0, 0]],
                [[0, 0, 0, 1],
                    [1, 1, 1, 1],
                    [0, 1, 0, 1],
                    [1, 0, 0, 1]],
                [[1, 1, 1, 1],
                    [0, 0, 1, 0],
                    [0, 1, 1, 0],
                    [1, 0, 1, 0]],
                [[1, 1, 1, 1],
                    [0, 1, 1, 0],
                    [0, 0, 1, 0],
                    [0, 0, 1, 1]],
                [[0, 0, 1, 1],
                    [0, 0, 1, 0],
                    [0, 1, 1, 0],
                    [1, 1, 1, 1]],
                [[1, 0, 0, 1],
                    [1, 1, 1, 1],
                    [1, 1, 0, 0],
                    [1, 0, 0, 0]],
                [[1, 1, 1, 1],
                    [0, 1, 1, 0],
                    [0, 1, 0, 0],
                    [1, 1, 0, 0]],
                [[1, 0, 0, 0],
                    [1, 1, 0, 0],
                    [1, 1, 1, 1],
                    [1, 0, 0, 1]],
                [[0, 0, 0, 1],
                    [0, 0, 1, 1],
                    [1, 1, 1, 1],
                    [1, 0, 0, 1]],
                [[1, 0, 0, 1],
                    [1, 1, 1, 1],
                    [0, 0, 1, 1],
                    [0, 0, 0, 1]],
                [[1, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 1, 0],
                    [1, 1, 1, 1]],
                [[1, 0, 1, 0],
                    [1, 1, 1, 1],
                    [0, 0, 1, 0],
                    [0, 0, 1, 1]],
                [[1, 1, 0, 0],
                    [0, 1, 0, 0],
                    [1, 1, 1, 1],
                    [0, 1, 0, 1]],
                [[0, 1, 0, 1],
                    [1, 1, 1, 1],
                    [0, 1, 0, 0],
                    [1, 1, 0, 0]],
                [[0, 0, 1, 1],
                    [0, 0, 1, 0],
                    [1, 1, 1, 1],
                    [1, 0, 1, 0]],
            ];
    };
    GridTesterComponent.prototype.setGrid = function (number, number2) {
        if (this.currentAttempt[number][number2] === 0) {
            this.currentAttempt[number][number2] = 1;
        }
        else {
            this.currentAttempt[number][number2] = 0;
        }
    };
    GridTesterComponent.prototype.checkGrid = function () {
        var _this = this;
        this.solved = false;
        var checkedAttempt = this.currentAttempt;
        var counter = 0;
        checkedAttempt.forEach(function (e) {
            return e.forEach(function (f) {
                if (f === 1) {
                    counter = counter + 1;
                }
            });
        });
        console.log(counter);
        if (counter === 9) {
            console.log(checkedAttempt.toString());
            console.log(this.solutions[0].toString());
            this.solutions.forEach(function (element) {
                if (checkedAttempt.toString() === element.toString()) {
                    _this.solved = true;
                    console.log(_this.solved);
                }
            });
        }
    };
    GridTesterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grid-tester',
            template: __webpack_require__(/*! ./grid-tester.component.html */ "./src/app/grid-tester/grid-tester.component.html"),
            styles: [__webpack_require__(/*! ./grid-tester.component.css */ "./src/app/grid-tester/grid-tester.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GridTesterComponent);
    return GridTesterComponent;
}());



/***/ }),

/***/ "./src/app/trial/trial.component.css":
/*!*******************************************!*\
  !*** ./src/app/trial/trial.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyaWFsL3RyaWFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/trial/trial.component.html":
/*!********************************************!*\
  !*** ./src/app/trial/trial.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  trial works!\n</p>\n"

/***/ }),

/***/ "./src/app/trial/trial.component.ts":
/*!******************************************!*\
  !*** ./src/app/trial/trial.component.ts ***!
  \******************************************/
/*! exports provided: TrialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrialComponent", function() { return TrialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TrialComponent = /** @class */ (function () {
    function TrialComponent() {
    }
    TrialComponent.prototype.ngOnInit = function () {
    };
    TrialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trial',
            template: __webpack_require__(/*! ./trial.component.html */ "./src/app/trial/trial.component.html"),
            styles: [__webpack_require__(/*! ./trial.component.css */ "./src/app/trial/trial.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TrialComponent);
    return TrialComponent;
}());



/***/ }),

/***/ "./src/app/trials/trials.component.css":
/*!*********************************************!*\
  !*** ./src/app/trials/trials.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding{\r\n    padding-top: 2%;\r\n}\r\n\r\n.txt:hover{\r\n    text-decoration: underline;\r\n    background-color:lightgrey;\r\n}\r\n\r\n.errbox{\r\n    padding-left: 2%;\r\n   color: red; \r\n   text-align: center;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n}\r\n\r\n.clearbutton{\r\n    margin-left:auto;\r\n    margin-right:0;\r\n    margin-top: 10pt;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpYWxzL3RyaWFscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxnQkFBZ0I7R0FDakIsVUFBVTtHQUNWLGtCQUFrQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIiLCJmaWxlIjoic3JjL2FwcC90cmlhbHMvdHJpYWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkZGluZ3tcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxufVxyXG5cclxuLnR4dDpob3ZlcntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZXk7XHJcbn1cclxuXHJcbi5lcnJib3h7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICBjb2xvcjogcmVkOyBcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuXHJcblxyXG4uY2xlYXJidXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjA7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB0O1xyXG4gICAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/trials/trials.component.html":
/*!**********************************************!*\
  !*** ./src/app/trials/trials.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui container padding\">\r\n  <div class=\"ui one column relaxed grid\">\r\n    <div class=\"column\">\r\n      <h1>Input Trial</h1>\r\n      <div class=\"ui grid\">\r\n        <div class=\"three wide column\">\r\n\r\n          <!--div class=\"ui fluid search selection dropdown\">\r\n            <input type=\"hidden\" name=\"country\">\r\n            <div class=\"default text\">Input primal</div>\r\n            <i class=\"dropdown icon\"></i>\r\n            <div class=\"menu\">\r\n              <div class=\"item\" *ngFor=\"let item of alltrials\" data-value=\"af\">{{item.title}}</div>\r\n            </div>\r\n          </div-->\r\n\r\n          <div class=\"ui input\">\r\n            <input type=\"text\" #box (keyup.enter)=\"voegToe(box.value); box.value=''\">\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div class=\"errbox\">\r\n          <p *ngIf=\"error\" (click)=\"error = false;\" style=\"cursor: pointer; margin: auto;\">Already exists in the list\r\n          </p>\r\n        </div>\r\n        <div class=\"clearbutton\">\r\n          <button class=\"ui negative basic button\" (click)=\"verwijderAlles()\">Clear</button>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"column\">\r\n      <table class=\"ui right aligned table\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"left aligned\">#</th>\r\n            <th>Name</th>\r\n          </tr>\r\n        </thead>\r\n        <tr class=\"txt\" *ngFor=\"let item of items | async; let i = index\" style=\"cursor: pointer;\"\r\n          (click)=\"verwijderTrial(item.key, item.payload.val())\">\r\n          <td class=\"left aligned\">{{i+1}}</td>\r\n          <td>\r\n            <p> {{item.payload.val()}}</p>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <div class=\"ui segment\">\r\n    <div class=\"ui menu\" id=\"classtabs\">\r\n      <a id=\"ARR\" class=\"active item\" (click)=\"setMenu($event)\">\r\n        ARR Primals\r\n      </a>\r\n      <a id=\"HW\" class=\"item\" (click)=\"setMenu($event)\">\r\n        HW Primals\r\n      </a>\r\n      <a id=\"SB\" class=\"item\" (click)=\"setMenu($event)\">\r\n        SB Primals\r\n      </a>\r\n      <!--div class=\"right menu\">\r\n              <div class=\"item\">\r\n                <div class=\"ui icon input\">\r\n                  <input type=\"text\" placeholder=\"Search...\">\r\n                  <i class=\"search link icon\"></i>\r\n                </div>\r\n              </div>\r\n            </div-->\r\n    </div>\r\n    <div class=\"ui left cards\">\r\n      <div class=\"fluid card\" (click)=\"addcard(trial.title)\" *ngFor=\"let trial of trials\">\r\n        <div class=\"image\">\r\n          <img src={{trial.image}}>\r\n        </div>\r\n        <div class=\"extra content\">\r\n          <div>\r\n            <span class=\"right\">\r\n              {{trial.title}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/trials/trials.component.ts":
/*!********************************************!*\
  !*** ./src/app/trials/trials.component.ts ***!
  \********************************************/
/*! exports provided: TrialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrialsComponent", function() { return TrialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _trials_trials_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../trials/trials.json */ "./src/app/trials/trials.json");
var _trials_trials_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../trials/trials.json */ "./src/app/trials/trials.json", 1);




var TrialsComponent = /** @class */ (function () {
    function TrialsComponent(db) {
        var _this = this;
        this.error = false;
        this.namen = [];
        this.itemRef = db.list('items', function (ref) { return ref.orderByValue(); });
        this.items = this.itemRef.snapshotChanges();
        this.valls = this.itemRef.valueChanges();
        this.trials = _trials_trials_json__WEBPACK_IMPORTED_MODULE_3__.ARR;
        this.alltrials = [];
        _trials_trials_json__WEBPACK_IMPORTED_MODULE_3__.ARR.map(function (a) {
            _this.alltrials.push(a);
        });
        _trials_trials_json__WEBPACK_IMPORTED_MODULE_3__.HW.map(function (a) {
            _this.alltrials.push(a);
        });
        _trials_trials_json__WEBPACK_IMPORTED_MODULE_3__.SB.map(function (a) {
            _this.alltrials.push(a);
        });
    }
    TrialsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.valls.subscribe(function (x) { return x.forEach(function (e) {
            if (!_this.namen.includes(e)) {
                _this.namen.push(e);
            }
        }); });
        $('.ui.dropdown').dropdown({
            clearable: true
        });
    };
    TrialsComponent.prototype.addcard = function (card) {
        this.voegToe(card);
    };
    TrialsComponent.prototype.setMenu = function (event) {
        console.log(event.srcElement.className);
        if (!event.srcElement.classList.contains('active')) {
            console.log(this.alltrials);
            $('#classtabs').children('.active')[0].className = 'item';
            event.srcElement.className = 'active item';
            var id = event.srcElement.id;
            this.trials = _trials_trials_json__WEBPACK_IMPORTED_MODULE_3__[id];
        }
    };
    TrialsComponent.prototype.verwijderTrial = function (trial, value) {
        this.namen.splice(this.namen.indexOf(value), 1);
        this.itemRef.remove(trial);
    };
    TrialsComponent.prototype.verwijderAlles = function () {
        this.namen.splice(0, this.namen.length);
        this.itemRef.remove();
    };
    TrialsComponent.prototype.voegToe = function (value) {
        var trimcap = value.trim().replace(value.charAt(0), value.charAt(0).toLocaleUpperCase());
        if (value === '') {
            return;
        }
        else if (!this.namen.includes(trimcap)) {
            this.itemRef.push(trimcap);
            this.error = false;
        }
        else {
            this.error = true;
        }
    };
    TrialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trials',
            template: __webpack_require__(/*! ./trials.component.html */ "./src/app/trials/trials.component.html"),
            styles: [__webpack_require__(/*! ./trials.component.css */ "./src/app/trials/trials.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], TrialsComponent);
    return TrialsComponent;
}());



/***/ }),

/***/ "./src/app/trials/trials.json":
/*!************************************!*\
  !*** ./src/app/trials/trials.json ***!
  \************************************/
/*! exports provided: ARR, HW, SB, default */
/***/ (function(module) {

module.exports = {"ARR":[{"title":"The Navel (Extreme)","image":"https://ffxiv.consolegameswiki.com/mediawiki/images/c/cb/The_navel_extreme_banner1.png","lv":50,"type":"Trial"},{"title":"The Bowl of Embers (Extreme)","image":"https://ffxiv.consolegameswiki.com/mediawiki/images/1/17/The_bowl_of_embers_extreme_banner1.png","lv":50,"type":"Trial"},{"title":"The Howling Eye (Extreme)","image":"https://ffxiv.consolegameswiki.com/mediawiki/images/7/79/The_howling_eye_extreme_banner1.png","lv":50,"type":"Trial"},{"title":"Thornmarch (Extreme)","image":"https://ffxiv.consolegameswiki.com/mediawiki/images/c/cf/Thornmarch_extreme_banner1.png","lv":50,"type":"Trial"},{"title":"The Minstrel's Ballad: Ultima's Bane","image":"https://ffxiv.consolegameswiki.com/mediawiki/images/9/91/The_minstrels_ballad_ultimas_bane_banner1.png","lv":50,"type":"Trial"},{"title":"The Striking Tree (Extreme)","image":"https://ffxiv.consolegameswiki.com/mediawiki/images/9/96/The_striking_tree_extreme_banner1.png","lv":50,"type":"Trial"},{"title":"Akh Afah Amphitheatre (Extreme)","image":"https://ffxiv.consolegameswiki.com/mediawiki/images/8/87/Akh_afah_ampitheatre_extreme_banner1.png","lv":50,"type":"Trial"},{"title":"Urth's Fount","image":"https://ffxiv.consolegameswiki.com/mediawiki/images/e/ef/Urths_fount_banner1.png","lv":50,"type":"Trial"}],"HW":[{"title":"Thok ast Thok (Extreme)","image":"https://ffxiv.gamerescape.com/w/images/e/ee/Thok_ast_Thok_%28Hard%29.png","lv":60,"type":"Trial"},{"title":"The Limitless Blue (Extreme)","image":"https://ffxiv.gamerescape.com/w/images/0/0e/The_Limitless_Blue_%28Hard%29.png","lv":60,"type":"Trial"},{"title":"The Minstrel's Ballad: Thordan's Reign","image":"https://ffxiv.gamerescape.com/w/images/3/33/The_Minstrel%27s_Ballad%3A_Thordan%27s_Reign.png","lv":60,"type":"Trial"},{"title":"Containment Bay S1T7 (Extreme)","image":"https://ffxiv.gamerescape.com/w/images/9/94/Containment_Bay_S1T7_%28Extreme%29.png","lv":60,"type":"Trial"},{"title":"The Minstrel's Ballad: Nidhogg's Rage","image":"https://ffxiv.gamerescape.com/w/images/a/af/The_Minstrel%27s_Ballad%3A_Nidhogg%27s_Rage.png","lv":60,"type":"Trial"},{"title":"Containment Bay P1T6 (Extreme)","image":"https://ffxiv.gamerescape.com/w/images/d/d1/Containment_Bay_P1T6_%28Extreme%29.png","lv":60,"type":"Trial"},{"title":"Containment Bay Z1T9 (Extreme)","image":"https://ffxiv.gamerescape.com/w/images/f/f2/Containment_Bay_Z1T9_%28Extreme%29.png","lv":60,"type":"Trial"}],"SB":[{"title":"The Pool of Tribute (Extreme)","image":"https://ffxiv.gamerescape.com/w/images/7/78/The_Pool_of_Tribute_%28Extreme%29.png","lv":70,"type":"Trial"},{"title":"Emanation (Extreme)","image":"https://ffxiv.gamerescape.com/w/images/5/58/Emanation_%28Extreme%29.png","lv":70,"type":"Trial"},{"title":"The Minstrel's Ballad: Shinryu's Domain","image":"https://ffxiv.gamerescape.com/w/images/4/41/The_Minstrel%27s_Ballad%3A_Shinryu%27s_Domain.png","lv":70,"type":"Trial"},{"title":"The Jade Stoa (Extreme)","image":"https://ffxiv.gamerescape.com/w/images/0/05/The_Jade_Stoa_%28Extreme%29.png","lv":70,"type":"Trial"},{"title":"The Minstrel's Ballad: Tsukuyomi's Pain","image":"https://ffxiv.gamerescape.com/w/images/8/88/The_Minstrel%27s_Ballad%3A_Tsukuyomi%27s_Pain.png","lv":70,"type":"Trial"},{"title":"The Great Hunt (Extreme)","image":"https://ffxiv.gamerescape.com/w/images/3/3c/The_Great_Hunt_%28Extreme%29.png","lv":70,"type":"Trial"},{"title":"Hells' Kier (Extreme)","image":"https://ffxiv.gamerescape.com/w/images/8/8e/Hells%27_Kier_%28Extreme%29.png","lv":70,"type":"Trial"},{"title":"The Wreath of Snakes (Extreme)","image":"https://ffxiv.gamerescape.com/w/images/b/b0/The_Wreath_of_Snakes_%28Extreme%29.png","lv":70,"type":"Trial"}]};

/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    firebase: {
        apiKey: 'AIzaSyBpMdHIUavARfJFglFmNAhJ3PIlbPTlFEY',
        authDomain: 'trialtracker-73833.firebaseapp.com',
        databaseURL: 'https://trialtracker-73833.firebaseio.com',
        projectId: 'trialtracker-73833',
        storageBucket: 'trialtracker-73833.appspot.com',
        messagingSenderId: '881842329719'
    }
};


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

module.exports = __webpack_require__(/*! c:\Users\Jolan\Desktop\trialTime\trial-time\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map