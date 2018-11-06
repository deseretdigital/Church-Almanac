webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet class=\"container\"></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_keys_pipe__ = __webpack_require__("./src/app/pipes/keys.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_calling_calling_component__ = __webpack_require__("./src/app/components/calling/calling.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_country_country_component__ = __webpack_require__("./src/app/components/country/country.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_person_person_component__ = __webpack_require__("./src/app/components/person/person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_temple_temple_component__ = __webpack_require__("./src/app/components/temple/temple.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AppModule = /** @class */ (function () {
    function AppModule() {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["initializeApp"]({
            apiKey: 'AIzaSyBws7vxUiKzePxGKxsaN7C1MjMrAuaxioo',
            authDomain: 'church-almanac.firebaseapp.com',
            databaseURL: 'https://church-almanac.firebaseio.com',
            projectId: 'church-almanac',
            storageBucket: '',
            messagingSenderId: '865972213020'
        });
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_calling_calling_component__["a" /* CallingComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_country_country_component__["a" /* CountryComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_person_person_component__["a" /* PersonComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_keys_pipe__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_12__components_temple_temple_component__["a" /* TempleComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot([
                    { path: 'person', component: __WEBPACK_IMPORTED_MODULE_9__components_person_person_component__["a" /* PersonComponent */] },
                    { path: 'country', component: __WEBPACK_IMPORTED_MODULE_8__components_country_country_component__["a" /* CountryComponent */] },
                    { path: 'calling', component: __WEBPACK_IMPORTED_MODULE_7__components_calling_calling_component__["a" /* CallingComponent */] },
                    { path: 'temple', component: __WEBPACK_IMPORTED_MODULE_12__components_temple_temple_component__["a" /* TempleComponent */] },
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */] },
                    { path: '**', component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */] }
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/calling/calling.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h1>Callings</h1>\n    </div>\n    <div class=\"col-5\" *ngIf=\"callings\">\n      <select class=\"form-control\" name=\"birth-countries\" [(ngModel)]=\"selected\" (change)=\"edit()\">\n        <option selected=\"\" value=\"\" disabled>Select Calling</option>\n        <option *ngFor=\"let calling of callings | keys\" value=\"{{ calling.key }}\">{{ calling.value }}</option>\n      </select>\n    </div>\n    <div class=\"col-5\" *ngIf=\"!callings\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"No Callings In Database\" disabled>\n    </div>\n    <div class=\"col-5\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"name\">\n    </div>\n    <div class=\"col-2\">\n      <button class=\"btn btn-primary\" *ngIf=\"!editing\" (click)=\"add()\">Add Calling</button>\n      <button class=\"btn btn-primary\" *ngIf=\"editing\" (click)=\"add()\">Save Calling</button>\n    </div>\n    <div class=\"col-12\">\n      <table class=\"table table-dark\">\n        <thead>\n          <tr>\n            <th scope=\"col\">Calling</th>\n            <th scope=\"col\">Options</th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"callings\">\n          <tr *ngFor=\"let calling of callings | keys; let i = index\">\n            <td>{{ calling.value }}</td>\n            <td>\n              <span (click)=\"edit(calling.key)\" class=\"blue\">Edit</span>\n              <span (click)=\"remove(calling.key)\" class=\"red\">Remove</span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/calling/calling.component.scss":
/***/ (function(module, exports) {

module.exports = "div.row > div {\n  margin-bottom: 25px; }\n"

/***/ }),

/***/ "./src/app/components/calling/calling.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_guid_service__ = __webpack_require__("./src/app/services/guid.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CallingComponent = /** @class */ (function () {
    function CallingComponent() {
        var _this = this;
        this.uid = Object(__WEBPACK_IMPORTED_MODULE_2__services_guid_service__["a" /* guid */])();
        this.editing = false;
        this.name = '';
        this.selected = '';
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('callings/').on('value', function (snapshot) {
            _this.callings = snapshot.val();
        });
    }
    CallingComponent.prototype.reset = function () {
        this.selected = '';
        this.name = '';
        this.editing = false;
        this.uid = Object(__WEBPACK_IMPORTED_MODULE_2__services_guid_service__["a" /* guid */])();
    };
    CallingComponent.prototype.edit = function (key) {
        this.editing = true;
        if (key) {
            this.selected = key;
        }
        this.uid = this.selected;
        this.name = this.callings[this.uid];
    };
    CallingComponent.prototype.remove = function (key) {
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref("callings/" + key).remove();
    };
    CallingComponent.prototype.add = function () {
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref("callings/" + this.uid).set(this.name);
        this.reset();
    };
    CallingComponent.prototype.ngOnInit = function () {
    };
    CallingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-calling',
            template: __webpack_require__("./src/app/components/calling/calling.component.html"),
            styles: [__webpack_require__("./src/app/components/calling/calling.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CallingComponent);
    return CallingComponent;
}());



/***/ }),

/***/ "./src/app/components/country/country.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" *ngIf=\"year\">\n    <div class=\"col-12\">\n      <h1>Countries</h1>\n    </div>\n    <div class=\"col-6\">\n      <span>Country Name</span>\n      <select class=\"form-control\" name=\"birth-countries\" (change)=\"select()\" [(ngModel)]=\"this.uid\">\n        <option selected=\"\" value=\"null\" disabled>Select Country</option>\n        <option *ngFor=\"let country of countries | keys\" value=\"{{ country.key }}\">{{ country.value }}</option>\n      </select>\n    </div>\n    <div class=\"col-3\">\n        <span>Year</span>\n      <input type=\"number\" class=\"form-control\" placeholder=\"yyyy\" [(ngModel)]=\"year.year\" (change)=\"edit()\">\n    </div>\n    <div class=\"col-3\">\n        <span>First Stake</span>\n      <input type=\"date\" class=\"form-control\" placeholder=\"MM/DD/YYYY\" [(ngModel)]=\"year.stake\">\n    </div>\n    <div class=\"col-3\">\n        <span>Population</span>\n      <input type=\"number\" class=\"form-control\" placeholder=\"0\" [(ngModel)]=\"year.population\">\n    </div>\n    <div class=\"col-3\">\n        <span>Membership</span>\n      <input type=\"number\" class=\"form-control\" placeholder=\"0\" [(ngModel)]=\"year.membership\">\n    </div>\n    <div class=\"col-3\">\n        <span>Branches In Wards</span>\n      <input type=\"number\" class=\"form-control\" placeholder=\"0\" [(ngModel)]=\"year.branches.wards\">\n    </div>\n    <div class=\"col-3\">\n        <span>Branches In Missions</span>\n      <input type=\"number\" class=\"form-control\" placeholder=\"0\" [(ngModel)]=\"year.branches.missions\">\n    </div>\n    <div class=\"col-12\">\n        <span>History</span>\n      <textarea placeholder=\"\" class=\"form-control\" [(ngModel)]=\"country.history\"></textarea>\n    </div>\n    <div class=\"col-12\" *ngIf=\"country.years && (country.years | keys).length > 0\">\n      <nav aria-label=\"Page navigation example\">\n        <ul class=\"pagination\">\n          <li class=\"page-item\">\n            <a class=\"page-link\" aria-label=\"Previous\">\n              <span aria-hidden=\"true\">&laquo;</span>\n              <span class=\"sr-only\">Previous</span>\n            </a>\n          </li>\n          <li class=\"page-item\" *ngFor=\"let year of country.years | keys\">\n            <a class=\"page-link\" (click)=\"edit(year.key)\">\n              {{ year.key }}\n            </a>\n          </li>\n          <li class=\"page-item\">\n            <a class=\"page-link\" aria-label=\"Next\">\n              <span aria-hidden=\"true\">&raquo;</span>\n              <span class=\"sr-only\">Next</span>\n            </a>\n          </li>\n        </ul>\n      </nav>\n    </div>\n    <div class=\"col-12\">\n      <div class=\"alert alert-primary\" role=\"alert\" *ngFor=\"let alert of alerts\">{{ alert }}</div>\n    </div>\n    <div class=\"col-12\" *ngIf=\"uid\">\n      <button class=\"btn btn-primary\" (click)=\"save()\">Save Updates</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/country/country.component.scss":
/***/ (function(module, exports) {

module.exports = "div.row > div {\n  margin-bottom: 25px; }\n"

/***/ }),

/***/ "./src/app/components/country/country.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_countries__ = __webpack_require__("./src/environments/countries.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_country_model__ = __webpack_require__("./src/app/models/country.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CountryComponent = /** @class */ (function () {
    function CountryComponent() {
        this.countries = __WEBPACK_IMPORTED_MODULE_1__environments_countries__["a" /* countries */];
        this.uid = null;
        this.country = Object(__WEBPACK_IMPORTED_MODULE_2__models_country_model__["a" /* Country */])();
        this.year = Object(__WEBPACK_IMPORTED_MODULE_2__models_country_model__["b" /* Year */])();
        this.alerts = [];
    }
    CountryComponent.prototype.save = function () {
        var _this = this;
        if (this.year.year && JSON.stringify(Object(__WEBPACK_IMPORTED_MODULE_2__models_country_model__["b" /* Year */])()) !== JSON.stringify(this.year)) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("countries/" + this.uid + "/years/" + this.year.year).set(this.year).then(function () {
                _this.year = Object(__WEBPACK_IMPORTED_MODULE_2__models_country_model__["b" /* Year */])();
                _this.alert('Success, your year data was stored!');
            });
        }
        else if (JSON.stringify(Object(__WEBPACK_IMPORTED_MODULE_2__models_country_model__["b" /* Year */])()) !== JSON.stringify(this.year)) {
            this.alert('Year was not saved because it was empty!');
        }
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("countries/" + this.uid).set(this.country).then(function () {
            _this.alert('All information about this country was saved!');
        });
    };
    CountryComponent.prototype.alert = function (msg, untilSave) {
        var _this = this;
        var index = this.alerts.length;
        if (this.alerts.indexOf(msg) === -1) {
            this.alerts.push(msg);
            if (!untilSave) {
                var interval = setInterval(function () {
                    _this.alerts = _this.alerts.splice(0, index);
                    clearInterval(interval);
                }, 5000);
            }
        }
    };
    CountryComponent.prototype.select = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("countries/" + this.uid).on('value', function (snapshot) {
            _this.country = (snapshot.val()) ? snapshot.val() : Object(__WEBPACK_IMPORTED_MODULE_2__models_country_model__["a" /* Country */])();
            _this.year = Object(__WEBPACK_IMPORTED_MODULE_2__models_country_model__["b" /* Year */])();
        });
    };
    CountryComponent.prototype.edit = function (year) {
        var _this = this;
        year = (!year) ? this.year.year : year;
        var blank = JSON.parse(JSON.stringify((Object(__WEBPACK_IMPORTED_MODULE_2__models_country_model__["b" /* Year */])())));
        blank.year = JSON.stringify(year);
        if (this.year.year && JSON.stringify(Object(__WEBPACK_IMPORTED_MODULE_2__models_country_model__["b" /* Year */])().year = year) !== JSON.stringify(this.year.year = parseInt(year))) {
            var ref_1 = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("countries/" + this.uid + "/years/" + this.year.year);
            ref_1.once('value').then(function (snapshot) {
                if (JSON.stringify(__assign({}, Object(__WEBPACK_IMPORTED_MODULE_2__models_country_model__["b" /* Year */])(), snapshot.val())) !== JSON.stringify(_this.year)) {
                    ref_1.set(_this.year).then(function () {
                        _this.alert('Don\'t forget to press save before you switch years!');
                        _this.year = __assign({}, Object(__WEBPACK_IMPORTED_MODULE_2__models_country_model__["b" /* Year */])(), _this.country.years[year]);
                    });
                }
                else {
                    _this.year = __assign({}, Object(__WEBPACK_IMPORTED_MODULE_2__models_country_model__["b" /* Year */])(), _this.country.years[year]);
                }
            });
        }
        else if (this.country.years && this.country.years[year]) {
            this.year = __assign({}, Object(__WEBPACK_IMPORTED_MODULE_2__models_country_model__["b" /* Year */])(), this.country.years[year]);
        }
    };
    CountryComponent.prototype.reset = function () {
        this.uid = null;
        this.country = Object(__WEBPACK_IMPORTED_MODULE_2__models_country_model__["a" /* Country */])();
        this.year = Object(__WEBPACK_IMPORTED_MODULE_2__models_country_model__["b" /* Year */])();
    };
    CountryComponent.prototype.ngOnInit = function () {
    };
    CountryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-country',
            template: __webpack_require__("./src/app/components/country/country.component.html"),
            styles: [__webpack_require__("./src/app/components/country/country.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CountryComponent);
    return CountryComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>Login</h1>\n  <div class=\"input-group\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"email\" [(ngModel)]=\"email\">\n  </div>\n  <div class=\"input-group\">\n    <input type=\"password\" class=\"form-control\" placeholder=\"password\" [(ngModel)]=\"password\">\n  </div>\n  <span>{{ error }}</span>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"login()\">Login</button>\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"signup()\">Signup</button>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = "div {\n  text-align: center;\n  margin: 25px auto;\n  width: 350px; }\n  div span {\n    color: red;\n    display: block;\n    margin-bottom: 15px; }\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.email = '';
        this.password = '';
        this.error = '';
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signInWithEmailAndPassword(this.email, this.password).catch(function (error) {
            _this.error = error.message;
        });
    };
    LoginComponent.prototype.signup = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().createUserWithEmailAndPassword(this.email, this.password).catch(function (error) {
            _this.error = error.message;
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"auth\" class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\">Church Alamanac</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item {{ (route === '/person') ? 'active' : null }}\">\n        <a class=\"nav-link\" routerLink=\"/person\">People</a>\n      </li>\n      <li class=\"nav-item {{ (route === '/calling') ? 'active' : null }}\">\n        <a class=\"nav-link\" routerLink=\"/calling\">Callings</a>\n      </li>\n      <li class=\"nav-item {{ (route === '/country') ? 'active' : null }}\">\n        <a class=\"nav-link\" routerLink=\"/country\">Countries</a>\n      </li>\n      <li class=\"nav-item {{ (route === '/temple') ? 'active' : null }}\">\n        <a class=\"nav-link\" routerLink=\"/temple\">Temples</a>\n      </li>\n      <li class=\"nav-item {{ (route === '/login') ? 'active' : null }}\">\n        <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports) {

module.exports = "a {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(Router) {
        var _this = this;
        this.Router = Router;
        this.auth = false;
        this.route = null;
        Router.events.subscribe(function (route) {
            _this.route = (route.url) ? route.url : null;
        });
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.auth = true;
                Router.navigateByUrl('/temple');
            }
            else {
                _this.auth = false;
                Router.navigateByUrl('/login');
            }
        });
    }
    NavbarComponent.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signOut();
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/person/person.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h1>New Person</h1>\n    </div>\n    <!-- person form -->\n    <div class=\"col-3\">\n      <span>First Name</span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"John\" [(ngModel)]=\"person.name.first\">\n    </div>\n    <div class=\"col-3\">\n      <span>Last Name</span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Doe\" [(ngModel)]=\"person.name.last\">\n    </div>\n    <div class=\"col-3\">\n      <span>Birth Date</span>\n      <input type=\"date\" class=\"form-control\" placeholder=\"MM/DD/YYYY\" [(ngModel)]=\"person.birth.date\">\n    </div>\n    <div class=\"col-3\">\n      <span>Death Date</span>\n      <input type=\"date\" class=\"form-control\" placeholder=\"MM/DD/YYYY\" [(ngModel)]=\"person.death.date\">\n    </div>\n    <div class=\"col-3\">\n      <span>Birth Street</span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"100 S 100 W\" [(ngModel)]=\"person.birth.location.street\">\n    </div>\n    <div class=\"col-3\">\n      <span>Birth Country</span>\n      <select class=\"form-control\" name=\"birth-countries\" [(ngModel)]=\"person.birth.location.country\">\n        <option selected=\"\" value=\"\" disabled>Select Country</option>\n        <option *ngFor=\"let country of countries | keys\" value=\"{{ country.key }}\">{{ country.value }}</option>\n      </select>\n    </div>\n    <div class=\"col-3\" *ngIf=\"person.birth.location.country && states[person.birth.location.country]\">\n      <span>Birth State</span>\n      <select class=\"form-control\" name=\"birth-state\" [(ngModel)]=\"person.birth.location.state\">\n        <option selected=\"\" value=\"\" disabled>Select State</option>\n        <option *ngFor=\"let state of states[person.birth.location.country]\" value=\"{{ state }}\">{{ state }}</option>\n      </select>\n    </div>\n    <div class=\"col-3\" *ngIf=\"!person.birth.location.country || !states[person.birth.location.country]\">\n      <span>Birth State</span>\n      <input type=\"number\" class=\"form-control\" placeholder=\"Select State\" disabled>\n    </div>\n    <div class=\"col-3\">\n      <span>Birth Zip</span>\n      <input type=\"number\" class=\"form-control\" placeholder=\"84100\" [(ngModel)]=\"person.birth.location.zip\">\n    </div>\n    <div class=\"col-3\">\n      <span>Death Street</span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"100 S 100 E\" [(ngModel)]=\"person.death.location.street\">\n    </div>\n    <div class=\"col-3\">\n      <span>Death Country</span>\n      <select class=\"form-control\" name=\"death-country\" [(ngModel)]=\"person.death.location.country\">\n        <option selected=\"\" value=\"\" disabled>Select Country</option>\n        <option *ngFor=\"let country of countries | keys\" value=\"{{ country.key }}\">{{ country.value }}</option>\n      </select>\n    </div>\n    <div class=\"col-3\" *ngIf=\"person.death.location.country && states[person.death.location.country]\">\n      <span>Death State</span>\n      <select class=\"form-control\" name=\"death-state\" [(ngModel)]=\"person.death.location.state\">\n        <option selected=\"\" value=\"\" disabled>Select State</option>\n        <option *ngFor=\"let state of states[person.death.location.country]\" value=\"{{ state }}\">{{ state }}</option>\n      </select>\n    </div>\n    <div class=\"col-3\" *ngIf=\"!person.death.location.country || !states[person.death.location.country]\">\n      <span>Death State</span>\n      <input type=\"number\" class=\"form-control\" placeholder=\"Select State\" disabled>\n    </div>\n    <div class=\"col-3\">\n      <span>Death Zip</span>\n      <input type=\"number\" class=\"form-control\" placeholder=\"84100\" [(ngModel)]=\"person.death.location.zip\">\n    </div>\n    <div class=\"col-12\">\n      <span>Photo URL</span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"http://www.domain.com/file.jpg\" [(ngModel)]=\"person.name.photo\">\n    </div>\n    <div class=\"col-12\">\n      <span>Short Bio</span>\n      <textarea type=\"text\" class=\"form-control\" [(ngModel)]=\"person.bio\"></textarea>\n    </div>\n    <div class=\"col-12 row\" *ngIf=\"editor.person\">\n      <div class=\"col-2\" *ngIf=\"callings\">\n        <span>Calling Name</span>\n        <select class=\"form-control\" name=\"death-countries\" [(ngModel)]=\"calling.uid\">\n          <option selected=\"\" value=\"\" disabled>Select Calling</option>\n          <option *ngFor=\"let calling of callings | keys\" value=\"{{ calling.key }}\">{{ calling.value }}</option>\n        </select>\n      </div>\n      <div class=\"col-2\" *ngIf=\"!callings\">\n        <span>Callings Name</span>\n        <input type=\"number\" class=\"form-control\" placeholder=\"No Callings In Database\" disabled>\n      </div>\n      <div class=\"col-3\">\n        <span>State Date</span>\n        <input type=\"date\" class=\"form-control\" placeholder=\"Start MM/DD/YYYY\" [(ngModel)]=\"calling.startDate\">\n      </div>\n      <div class=\"col-3\">\n        <span>End Date</span>\n        <input type=\"date\" class=\"form-control\" placeholder=\"End MM/DD/YYYY\" [(ngModel)]=\"calling.endDate\">\n      </div>\n      <div class=\"col-2\" id=\"emeritus\">\n        <div class=\"form-check\">\n          <input class=\"form-check-input\" id=\"emeritus-checkbox\" type=\"checkbox\" value=\"true\" [(ngModel)]=\"calling.emeritus\">\n          <label class=\"form-check-label\" for=\"emeritus-checkbox\">\n            Emeritus\n          </label>\n        </div>\n      </div>\n      <div class=\"col-2\" id=\"emeritus\">\n        <button class=\"btn btn-secondary\" *ngIf=\"!editor.calling\" (click)=\"add()\">Add Calling</button>\n        <button class=\"btn btn-secondary\" *ngIf=\"editor.calling\" (click)=\"add()\">Save Calling</button>\n      </div>\n      <div class=\"col-12\">\n        <table class=\"table table-dark\">\n          <thead>\n            <tr>\n              <th scope=\"col\">Calling</th>\n              <th scope=\"col\">Start</th>\n              <th scope=\"col\">Options</th>\n            </tr>\n          </thead>\n          <tbody *ngIf=\"person.callings\">\n            <tr *ngFor=\"let calling of person.callings; let i = index\">\n              <td *ngIf=\"callings[calling.uid]\">{{ callings[calling.uid] }}</td>\n              <td *ngIf=\"!callings[calling.uid]\">This calling was not found...</td>\n              <td *ngIf=\"calling.startDate\">{{ calling.startDate }}</td>\n              <td *ngIf=\"!calling.startDate\"></td>\n              <td>\n                <span (click)=\"edit(i)\" class=\"blue\">Edit</span>\n                <span (click)=\"remove(i)\" class=\"red\">Remove</span>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <div class=\"col-12\" *ngIf=\"alerts\">\n      <div class=\"alert alert-primary\" role=\"alert\" *ngFor=\"let alert of alerts\">{{ alert }}</div>\n    </div>\n    <div class=\"col-12\">\n      <button class=\"btn btn-primary\" *ngIf=\"!editor.person\" (click)=\"save()\">Add Person</button>\n      <button class=\"btn btn-primary\" *ngIf=\"editor.person\" (click)=\"save()\">Save Person</button>\n    </div>\n    <!-- people -->\n    <div class=\"col-12\">\n      <br />\n      <h1>People List</h1>\n    </div>\n    <div class=\"col-12\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"search\" (keyup)=\"refine()\">\n    </div>\n    <div class=\"col-12\">\n      <table class=\"table table-dark\">\n        <thead>\n          <tr>\n            <th scope=\"col\">First</th>\n            <th scope=\"col\">Last</th>\n            <th scope=\"col\">Options</th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"results\">\n          <tr *ngFor=\"let person of results | keys; let i = index\" id=\"result-{{ i }}\">\n            <td>{{ person.value.name.first }}</td>\n            <td>{{ person.value.name.last }}</td>\n            <td>\n              <span (click)=\"edit(person.key)\" class=\"blue\">Edit</span>\n              <span data-toggle=\"modal\" data-target=\"#warning\" (click)=\"uid = person.key\" class=\"red\">Delete</span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"warning\" id=\"warning\"\n  aria-hidden=\"true\" (click)=\"reset()\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <h1>Are you sure?</h1>\n      <br />\n      <button class=\"btn btn-primary\" (click)=\"delete()\">Delete Person</button>\n      <br />\n      <button class=\"btn btn-secondary\" (click)=\"reset()\">Cancel</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/person/person.component.scss":
/***/ (function(module, exports) {

module.exports = "div.modal > div > div {\n  padding: 25px; }\n\ndiv.row div#emeritus {\n  text-align: center;\n  padding-top: 25px; }\n\ndiv.row div#emeritus * {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/components/person/person.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_person_model__ = __webpack_require__("./src/app/models/person.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_countries__ = __webpack_require__("./src/environments/countries.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_states__ = __webpack_require__("./src/environments/states.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_guid_service__ = __webpack_require__("./src/app/services/guid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_location_model__ = __webpack_require__("./src/app/models/location.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PersonComponent = /** @class */ (function () {
    function PersonComponent() {
        var _this = this;
        this.countries = __WEBPACK_IMPORTED_MODULE_2__environments_countries__["a" /* countries */];
        this.states = __WEBPACK_IMPORTED_MODULE_3__environments_states__["a" /* states */];
        this.uid = null;
        this.search = '';
        this.person = Object(__WEBPACK_IMPORTED_MODULE_1__models_person_model__["b" /* Person */])();
        this.calling = Object(__WEBPACK_IMPORTED_MODULE_1__models_person_model__["a" /* Calling */])();
        this.locations = {
            birth: Object(__WEBPACK_IMPORTED_MODULE_6__models_location_model__["a" /* Location */])(),
            death: Object(__WEBPACK_IMPORTED_MODULE_6__models_location_model__["a" /* Location */])()
        };
        this.alerts = [];
        this.editor = {
            calling: false,
            person: false
        };
        this.uid = Object(__WEBPACK_IMPORTED_MODULE_5__services_guid_service__["a" /* guid */])();
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('people/').on('value', function (snapshot) {
            _this.people = snapshot.val();
            _this.results = _this.people;
        });
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('callings/').on('value', function (snapshot) {
            _this.callings = snapshot.val();
        });
    }
    PersonComponent.prototype.alert = function (msg, untilSave) {
        var _this = this;
        var index = this.alerts.length;
        if (this.alerts.indexOf(msg) === -1) {
            this.alerts.push(msg);
            if (!untilSave) {
                var interval = setInterval(function () {
                    _this.alerts = _this.alerts.splice(0, index);
                    clearInterval(interval);
                }, 5000);
            }
        }
    };
    PersonComponent.prototype.reset = function () {
        this.uid = Object(__WEBPACK_IMPORTED_MODULE_5__services_guid_service__["a" /* guid */])();
        this.alerts = [];
        this.person = Object(__WEBPACK_IMPORTED_MODULE_1__models_person_model__["b" /* Person */])();
        this.calling = Object(__WEBPACK_IMPORTED_MODULE_1__models_person_model__["a" /* Calling */])();
        this.editor.calling = false;
        this.editor.person = false;
        var modal = document.querySelector('div.modal');
        modal.click();
    };
    PersonComponent.prototype.add = function () {
        var _this = this;
        if (this.calling.uid) {
            if (!this.person.callings) {
                this.person.callings = [this.calling];
            }
            else {
                var array_1 = [];
                this.person.callings.forEach(function (calling) {
                    if (calling.uid !== _this.calling.uid) {
                        array_1.push(calling);
                    }
                    else {
                        array_1.push(_this.calling);
                        _this.calling = null;
                    }
                });
                if (this.calling) {
                    array_1.push(this.calling);
                }
                this.person.callings = array_1;
            }
            this.calling = Object(__WEBPACK_IMPORTED_MODULE_1__models_person_model__["a" /* Calling */])();
            this.alert("Don't forget to save your updates!", true);
            this.editor.calling = false;
        }
    };
    PersonComponent.prototype.save = function () {
        var _this = this;
        if (this.person.name.first && this.person.name.last) {
            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("people/" + this.uid).set(this.person).then(function () {
                var editing = _this.editor.person;
                _this.reset();
                if (editing) {
                    _this.alert("Person was successfully saved!");
                }
                else {
                    _this.alert("Person was successfully added!");
                }
            });
        }
        else {
            this.alert("You forgot to fill out a first and last name.");
        }
    };
    PersonComponent.prototype.edit = function (uid) {
        var _this = this;
        if (JSON.stringify(uid).length < 30) {
            // calling
            this.calling = JSON.parse(JSON.stringify(this.person.callings[uid]));
            this.editor.calling = true;
        }
        else {
            // person
            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("people/" + uid).once('value').then(function (snapshot) {
                _this.person = snapshot.val();
                _this.person.birth.location = (snapshot.val().birth.location) ? snapshot.val().birth.location : Object(__WEBPACK_IMPORTED_MODULE_6__models_location_model__["a" /* Location */])();
                _this.person.death.location = (snapshot.val().death.location) ? snapshot.val().death.location : Object(__WEBPACK_IMPORTED_MODULE_6__models_location_model__["a" /* Location */])();
                _this.uid = uid;
                _this.editor.person = true;
            });
        }
    };
    PersonComponent.prototype.refine = function () {
        var _this = this;
        var keys = Object.keys(this.people);
        this.results = {};
        keys = keys.filter(function (key) {
            var person = _this.people[key];
            if ((person.name.first ||
                person.name.last) && (person.name.first.toLowerCase().indexOf(_this.search.toLowerCase()) !== -1 ||
                person.name.last.toLowerCase().indexOf(_this.search.toLowerCase()) !== -1)) {
                return key;
            }
        });
        keys.forEach(function (key) {
            _this.results[key] = _this.people[key];
        });
    };
    PersonComponent.prototype.delete = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("people/" + this.uid).remove().then(function () {
            _this.reset();
            _this.alert('Person was successfully removed!');
        });
    };
    PersonComponent.prototype.remove = function (index) {
        this.person.callings = this.person.callings.splice(0, index);
        this.calling = Object(__WEBPACK_IMPORTED_MODULE_1__models_person_model__["a" /* Calling */])();
        this.alert("Don't forget to save your updates!", true);
    };
    PersonComponent.prototype.ngOnInit = function () {
    };
    PersonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-person',
            template: __webpack_require__("./src/app/components/person/person.component.html"),
            styles: [__webpack_require__("./src/app/components/person/person.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonComponent);
    return PersonComponent;
}());



/***/ }),

/***/ "./src/app/components/temple/temple.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h1>New Temple</h1>\n      <br />\n    </div>\n    <div class=\"col-3\">\n      <span>Temple Name</span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Salt Lake Temple\" [(ngModel)]=\"temple.name\">\n    </div>\n    <div class=\"col-3\">\n      <span>Status</span>\n      <select class=\"form-control\" [(ngModel)]=\"temple.status\">\n        <option value=\"0\">Status 1</option>\n        <option value=\"1\">Status 2</option>\n        <option value=\"2\">Status 3</option>\n        <option value=\"3\">Status 4</option>\n      </select>\n    </div>\n    <div class=\"col-3\">\n      <span>Phone</span>\n      <input type=\"number\" class=\"form-control\" placeholder=\"(555) 555-5555\" [(ngModel)]=\"temple.phone\">\n    </div>\n    <div class=\"col-3\">\n      <span>Email</span>\n      <input type=\"email\" class=\"form-control\" placeholder=\"contact@temple.com\" [(ngModel)]=\"temple.email\">\n    </div>\n    <div class=\"col-12\">\n      <span>Temple Description</span>\n      <textarea type=\"text\" class=\"form-control\" placeholder=\"Dedicated in 1893, it is the sixth temple completed by the church...\"\n        [(ngModel)]=\"temple.description\"></textarea>\n    </div>\n    <div class=\"col-3\">\n      <span>Street Address Line 1</span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"100 S 100 W\" [(ngModel)]=\"temple.street1\">\n    </div>\n    <div class=\"col-3\">\n      <span>Street Address Line 2</span>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"temple.street2\">\n    </div>\n    <div class=\"col-3\">\n      <span>Country</span>\n      <select class=\"form-control\" name=\"birth-countries\" [(ngModel)]=\"temple.country\">\n        <option value=\"\" selected disabled>Country</option>\n        <option *ngFor=\"let country of countries | keys\" value=\"{{ country.key }}\">{{ country.value }}</option>\n      </select>\n    </div>\n    <div class=\"col-3\" *ngIf=\"temple.country && states[temple.country]\">\n      <span>State/Providence</span>\n      <select class=\"form-control\" name=\"birth-state\" [(ngModel)]=\"temple.state\">\n        <option selected=\"\" value=\"\" disabled>Select State</option>\n        <option *ngFor=\"let state of states[temple.country]\" value=\"{{ state }}\">{{ state }}</option>\n      </select>\n    </div>\n    <div class=\"col-3\" *ngIf=\"!temple.country || !states[temple.country]\">\n      <span>State/Providence</span>\n      <input type=\"number\" class=\"form-control\" placeholder=\"Select State\" disabled>\n    </div>\n    <div class=\"col-12\">\n      <span>Location Description</span>\n      <textarea type=\"text\" class=\"form-control\" placeholder=\"The Salt Lake Temple is the centerpiece of the 10-acre Temple Square...\"\n        [(ngModel)]=\"temple.location\"></textarea>\n    </div>\n    <div class=\"col-3\">\n      <span>Date</span>\n      <input type=\"date\" class=\"form-control\" placeholder=\"1/1/18\" [(ngModel)]=\"event.date\">\n    </div>\n    <div class=\"col-3\">\n      <span>Event</span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Dedicated\" [(ngModel)]=\"event.event\">\n    </div>\n    <div class=\"col-3\">\n      <span>Saved Events</span><br />\n      <input type=\"text\" *ngIf=\"!events.length\" class=\"form-control\" placeholder=\"No Events\" disabled>\n      <select class=\"form-control\" id=\"events\" *ngIf=\"events.length\" (change)=\"editEvent($event)\">\n        <option value=\"null\" select disabled>Choose Event</option>\n        <option *ngFor=\"let x of events; let i = index\" value=\"{{ i }}\">{{ x.event }}</option>\n      </select>\n    </div>\n    <div class=\"col-3\">\n      <br />\n      <button class=\"btn btn-primary\" id=\"add-date\" *ngIf=\"editor.event === null\" (click)=\"addEvent()\">Add Date</button>\n      <button class=\"btn btn-primary\" id=\"add-date\" *ngIf=\"editor.event !== null\" (click)=\"addEvent()\">Save Date</button>\n    </div>\n    <div class=\"col-3\">\n      <span>Exterior Finish</span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Brick\" [(ngModel)]=\"temple.architecture.exterior\">\n    </div>\n    <div class=\"col-3\">\n      <span>Temple Design</span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Modern\" [(ngModel)]=\"temple.architecture.design\">\n    </div>\n    <div class=\"col-3\">\n      <span>Rooms</span>\n      <input type=\"number\" class=\"form-control\" placeholder=\"50\" [(ngModel)]=\"temple.architecture.rooms\">\n    </div>\n    <div class=\"col-3\">\n      <span>Floor Area</span>\n      <input type=\"number\" class=\"form-control\" placeholder=\"30000\" [(ngModel)]=\"temple.architecture.area\">\n    </div>\n    <div class=\"col-3\">\n      <span>Dimensions</span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"300 x 300 x 300\" [(ngModel)]=\"temple.architecture.dimensions\">\n    </div>\n    <div class=\"col-3\">\n      <span>Architect</span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"John Smith\" [(ngModel)]=\"temple.architecture.architect\">\n    </div>\n    <div class=\"col-3\">\n      <span>Supervising Architects</span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"John Smith, Jane Doe\" [(ngModel)]=\"temple.architecture.supervisor\">\n    </div>\n    <div class=\"col-3\">\n      <span>Construction Advisor</span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"John Smith\" [(ngModel)]=\"temple.architecture.advisor\">\n    </div>\n    <div class=\"col-3\">\n      <span>Contractor</span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"John Smith\" [(ngModel)]=\"temple.architecture.contractor\">\n    </div>\n    <div class=\"col-3\">\n      <span>Building Committee</span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"John Smith\" [(ngModel)]=\"temple.architecture.buildingCommittee\">\n    </div>\n    <div class=\"col-3\">\n      <span>Master Builder</span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"John Smith\" [(ngModel)]=\"temple.architecture.builder\">\n    </div>\n    <div class=\"col-3\">\n      <span>Temple Building Committee</span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"John Smith\" [(ngModel)]=\"temple.architecture.templeCommittee\">\n    </div>\n    <div class=\"col-3\">\n      <span>Project Manager</span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"John Smith\" [(ngModel)]=\"temple.architecture.project.manager\">\n    </div>\n    <div class=\"col-3\">\n      <span>Project Director</span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"John Smith\" [(ngModel)]=\"temple.architecture.project.director\">\n    </div>\n    <div class=\"col-3\">\n      <span>Project Superintendent</span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"John Smith\" [(ngModel)]=\"temple.architecture.project.superintendent\">\n    </div>\n    <div class=\"col-3\">\n      <span>Dedicator</span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"John Smith\" [(ngModel)]=\"temple.architecture.dedicator\">\n    </div>\n    <div class=\"col-12\">\n      <span>Dedicatory Prayer</span>\n      <textarea type=\"text\" id=\"prayer\" class=\"form-control\" [(ngModel)]=\"temple.architecture.prayer\"></textarea>\n    </div>\n    <div class=\"col-12\">\n      <br />\n      <button class=\"btn btn-primary\" *ngIf=\"!editor.save\" (click)=\"save()\">Add Temple</button>\n      <button class=\"btn btn-primary\" *ngIf=\"editor.save\" (click)=\"save()\">Save Temple</button>\n      <button class=\"btn btn-secondary\" (click)=\"reset()\">Clear</button>\n    </div>\n    <div class=\"col-12\">\n      <br />\n      <h1>Temples List</h1>\n    </div>\n    <div class=\"col-12\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"search\" (keyup)=\"refine()\">\n    </div>\n    <div class=\"col-12\">\n      <table class=\"table table-dark\">\n        <thead>\n          <tr>\n            <th scope=\"col\">Name</th>\n            <th scope=\"col\">State</th>\n            <th scope=\"col\">Options</th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"results\">\n          <tr *ngFor=\"let location of results | keys; let i = index\" id=\"result-{{ i }}\">\n            <td>{{ location.value.name }}</td>\n            <td>{{ location.value.state }}</td>\n            <td>\n              <span (click)=\"edit(location.key)\" class=\"blue\">Edit</span>\n              <span data-toggle=\"modal\" data-target=\"#warning\" (click)=\"editor.uid = location.key\" class=\"red\">Delete</span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"warning\" id=\"warning\"\n  aria-hidden=\"true\" (click)=\"reset()\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <h1>Are you sure?</h1>\n      <br />\n      <button class=\"btn btn-primary\" (click)=\"delete()\" data-dismiss=\"modal\">Delete Temple</button>\n      <br />\n      <button class=\"btn btn-secondary\" (click)=\"reset()\" data-dismiss=\"modal\">Cancel</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/temple/temple.component.scss":
/***/ (function(module, exports) {

module.exports = "textarea#prayer {\n  height: 150px; }\n\nbutton#add-date {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/temple/temple.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TempleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_temple_model__ = __webpack_require__("./src/app/models/temple.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_countries__ = __webpack_require__("./src/environments/countries.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_states__ = __webpack_require__("./src/environments/states.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_guid_service__ = __webpack_require__("./src/app/services/guid.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TempleComponent = /** @class */ (function () {
    function TempleComponent() {
        var _this = this;
        this.countries = __WEBPACK_IMPORTED_MODULE_3__environments_countries__["a" /* countries */];
        this.states = __WEBPACK_IMPORTED_MODULE_4__environments_states__["a" /* states */];
        this.temples = Object;
        this.results = Object;
        this.temple = new __WEBPACK_IMPORTED_MODULE_1__models_temple_model__["a" /* Temple */]({
            name: '',
            architecture: {
                project: {}
            }
        });
        this.event = {
            date: '',
            event: ''
        };
        this.editor = {
            uid: '',
            save: false,
            event: null
        };
        this.reset();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('temples/').on('value', function (snapshot) {
            if (snapshot.val()) {
                _this.temples = _this.results = snapshot.val();
            }
        });
    }
    TempleComponent.prototype.editEvent = function (event) {
        event = parseInt(event.target.value);
        this.editor.event = event;
        this.event = this.events[this.editor.event];
    };
    TempleComponent.prototype.resetEvent = function () {
        var elem = document.querySelector('select#events');
        if (elem) {
            elem.value = null;
        }
        this.editor.event = null;
        this.event.event = '';
        this.event.date = '';
    };
    TempleComponent.prototype.addEvent = function () {
        if (this.editor.event >= 0 && this.editor.event !== null) {
            this.events[this.editor.event] = JSON.parse(JSON.stringify(this.event));
        }
        else {
            this.events.push({
                event: this.event.event,
                date: this.event.date
            });
        }
        this.resetEvent();
    };
    TempleComponent.prototype.reset = function () {
        this.editor.save = false;
        this.resetEvent();
        this.events = [];
        this.editor.uid = Object(__WEBPACK_IMPORTED_MODULE_5__services_guid_service__["a" /* guid */])();
        this.events = [];
        this.event.event = '';
        this.event.date = '';
        this.temple = new __WEBPACK_IMPORTED_MODULE_1__models_temple_model__["a" /* Temple */]({
            name: '',
            architecture: {
                project: {}
            }
        });
    };
    TempleComponent.prototype.edit = function (key) {
        var _this = this;
        this.reset();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("temples/" + key).once('value', function (snapshot) {
            _this.editor.uid = key;
            _this.temple = new __WEBPACK_IMPORTED_MODULE_1__models_temple_model__["a" /* Temple */](snapshot.val());
            if (!_this.temple.architecture) {
                _this.temple.architecture = {};
            }
            if (!_this.temple.architecture.project) {
                _this.temple.architecture.project = {};
            }
            if (_this.temple.dates) {
                _this.events = _this.temple.dates;
            }
            _this.editor.save = true;
            window.scrollTo(0, 0);
        });
    };
    TempleComponent.prototype.save = function () {
        var _this = this;
        if (this.temple.name) {
            this.temple.dates = this.events;
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("temples/" + this.editor.uid).set(this.temple).then(function () {
                _this.reset();
            });
        }
    };
    TempleComponent.prototype.delete = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("temples/" + this.editor.uid).remove().then(function () {
            _this.reset();
        });
    };
    TempleComponent.prototype.ngOnInit = function () {
    };
    TempleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-temple',
            template: __webpack_require__("./src/app/components/temple/temple.component.html"),
            styles: [__webpack_require__("./src/app/components/temple/temple.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TempleComponent);
    return TempleComponent;
}());



/***/ }),

/***/ "./src/app/models/country.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = Year;
/* harmony export (immutable) */ __webpack_exports__["a"] = Country;
function Year() {
    return {
        year: null,
        population: null,
        membership: null,
        branches: {
            wards: null,
            missions: null
        },
        missions: null,
        stake: ''
    };
}
function Country() {
    return {
        history: '',
        years: {}
    };
}


/***/ }),

/***/ "./src/app/models/location.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Location;
function Location() {
    return {
        street: '',
        country: '',
        state: '',
        zip: null
    };
}


/***/ }),

/***/ "./src/app/models/person.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Calling;
/* harmony export (immutable) */ __webpack_exports__["b"] = Person;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__location_model__ = __webpack_require__("./src/app/models/location.model.ts");

function Calling() {
    return {
        uid: '',
        stateDate: '',
        endDate: '',
        emeritus: false
    };
}
function Person() {
    return {
        name: {
            first: '',
            last: ''
        },
        death: {
            date: '',
            location: Object(__WEBPACK_IMPORTED_MODULE_0__location_model__["a" /* Location */])()
        },
        birth: {
            date: '',
            location: Object(__WEBPACK_IMPORTED_MODULE_0__location_model__["a" /* Location */])()
        },
        photo: '',
        bio: '',
        callings: []
    };
}


/***/ }),

/***/ "./src/app/models/temple.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Temple; });
var Temple = /** @class */ (function () {
    function Temple(config) {
        return config;
    }
    return Temple;
}());



/***/ }),

/***/ "./src/app/pipes/keys.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (obj, args) {
        if (args === void 0) { args = null; }
        var array = [];
        Object.keys(obj).forEach(function (key) {
            array.push({
                value: obj[key],
                key: key
            });
        });
        return array;
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'keys' })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "./src/app/services/guid.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = guid;
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}


/***/ }),

/***/ "./src/environments/countries.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return countries; });
var countries = {
    "9e1c5261-ade3-fbe8-06bc-8aa47f4996a2": "United States",
    "030895d4-5d63-4b1c-93b0-04b4bd58a008": "Iceland",
    "05351d79-f01a-af80-7de4-b3858529b8d2": "Israel",
    "0984f76c-d2ba-be9d-c080-0ec38101243e": "Nigeria",
    "0a10dddf-d1f8-ef38-10b7-80f584eb2fb8": "Slovenia",
    "0addfc09-aadb-b99e-19fa-0e65fd56e91b": "Bahrain",
    "0b8200ce-f8dc-f49a-047f-be7ae3e6be76": "Trinidad Tobago",
    "0e7517bf-8a02-8a44-0aee-9438609ad443": "Mexico",
    "0f1c070b-6738-caef-641f-ecdd2e085c17": "Lithuania",
    "0f6166ac-dc7d-f68b-b84d-fce447601e75": "Nicaragua",
    "1030dd50-bf6b-5e53-85db-fb820a4e565a": "Cambodia",
    "12271b3c-a11c-8c64-8183-0057507230fa": "San Marino",
    "13818b85-6d2a-009e-6001-de2205f777dd": "Benin",
    "1562b642-50ac-b4d9-b088-7c5bd4ff6944": "Moldova",
    "15a32929-238a-9b56-1616-32f4a7309878": "Dominica",
    "1756dc49-68f7-a634-ddcf-f69ccacacbd7": "Palestine",
    "18cf406b-bcfe-6a17-b9b8-0744032a3977": "Liberia",
    "193fb5ed-fd0c-4192-cb5d-d23f7c6eee58": "Virgin Islands (US)",
    "1ab1f789-aac4-a806-c659-bb83b805985a": "Jamaica",
    "1ae82cce-cfa5-474c-6152-aeb34f0d68eb": "Guinea Bissau",
    "1b0e05cd-86e3-6df0-f3b8-f685c6d3a5b4": "Cape Verde",
    "1cae548d-7e1d-b916-7c2c-a5f891dfdb3f": "Suriname",
    "1d845e83-c470-daf8-0519-05ee7bc71228": "South Korea",
    "1e966152-62c5-4fb3-00f5-487c5c32ee3f": "Zimbabwe",
    "1e9c26a3-6c55-16ab-f15e-f21521e365ad": "Bermuda",
    "1e9f3360-d22c-143e-2402-483d31c39e5c": "Qatar",
    "232478c2-a6f9-600f-666e-491730a24d94": "Saint Pierre Miquelon",
    "235882d0-468d-7cf3-f4ef-40ee68d64e79": "Aruba",
    "2425b4bd-524b-c15b-3c77-933546f44b29": "Burkina Faso",
    "250c2cec-2d17-1baf-cd51-ed1023c681c7": "Armenia",
    "27769972-68fc-a03c-8594-6fe3b5f1f475": "Maldives",
    "290e9f42-476d-6cd6-8e9f-94c8770e2ae1": "Oman",
    "2962e14e-7855-f819-f126-50a572f6df24": "Uganda",
    "2b3aed4d-b48a-12bc-f465-d20dd6478238": "Colombia",
    "2e28ce84-2a4e-98a6-eb62-e8edd8c7e300": "Seychelles",
    "2e478da8-df5b-e11c-271e-583096a813c4": "Sri Lanka",
    "2e623642-0952-3a78-16aa-542b909af845": "Djibouti",
    "2e777810-d1af-388c-505b-40ab6820b585": "Guam",
    "2eb09d06-b8a9-a48c-a031-7ab3a60abaa1": "Turks Caicos",
    "2eb52f39-7788-e9f1-5241-6507443af11f": "Isle of Man",
    "2ef0d540-ddc4-1ee7-c06a-dee2c51a139b": "Tajikistan",
    "2f75cc41-3278-75f6-5d14-48576b0db5e5": "Spain",
    "312a0550-ebbc-93b7-a6f4-3dcd2e340ec9": "Cyprus",
    "320f7525-6ba4-058d-0b9b-d5c83b197386": "Peru",
    "326ae5d5-67a9-9ba7-6bb0-b0b250ac6840": "Senegal",
    "32c7410d-9a9e-0e9f-e2b1-f39eb8c96bc5": "Algeria",
    "33495d65-7200-aae1-e800-892bf4339f12": "Gabon",
    "33b5afd1-eeb6-96c4-c6d2-9acd3f41b526": "Reunion",
    "341b57d4-94bb-4e70-5bc3-6237c723c342": "Russia",
    "35e9ce8a-682a-c542-6a82-cab49c881038": "Burundi",
    "37efa730-5de3-e447-96c6-dd6e91377ebf": "El Salvador",
    "3d9fc546-727c-d75a-16a5-cebb184012fb": "St Kitts Nevis",
    "3eebb6c7-d161-7a48-90be-c126d9951315": "Portugal",
    "403a7887-4625-eee9-dc16-46e4cbc163a7": "Netherlands Antilles",
    "422dc650-fbf0-774c-ac34-0bf9f370ad10": "Bahamas",
    "425fc5f8-f6be-43a5-b397-5876548dd428": "Georgia",
    "42ae1f55-5e68-20fc-a20d-4f0c5f1011c4": "Taiwan",
    "453faa57-6776-af10-7adb-6ab6f7b8737b": "Hungary",
    "4596e564-405c-678d-8860-0feccb9c82ca": "Belgium",
    "48a0252b-50ad-bec2-78fd-14365062533c": "Tanzania",
    "4970e9d6-c6ba-c931-4fb7-f8cdb9c961c0": "Italy",
    "4a1591e8-ea67-398e-05bd-ac829f85f46d": "Jersey",
    "4a6321b1-d8d2-d214-a4be-1029bcd29706": "Niger",
    "4c2482af-0796-b30f-1436-c9fc2c9ac699": "Brazil",
    "4fc8b3eb-eb0a-fb52-13fc-5f3a6255a93e": "New Caledonia",
    "4fcfabf0-ddfa-084e-43bb-8ad367ef3f70": "Costa Rica",
    "4fff59cc-607f-24a7-b5ed-6864753f3e15": "Honduras",
    "505cf680-4a05-eb17-2240-c54733268ba9": "Belarus",
    "512ba7e9-ed21-e6f2-3540-40364a306925": "Sweden",
    "5258f93e-47ba-fdab-71cf-057a038e6a2f": "Germany",
    "533f468b-01b2-0082-2306-a53960da824a": "St. Lucia",
    "557ba7cc-a0db-729d-dfaf-64497b200b78": "Japan",
    "55cba0a8-a628-bfec-2b60-fe6bdd5eefde": "Liechtenstein",
    "55f1e6f5-4e07-406b-6215-7951f321ed0c": "Timor L'Este",
    "56d6a859-a7e3-368f-e144-fb52f177b130": "India",
    "57e59f47-4e69-e919-3812-457791003c87": "Namibia",
    "58730bff-fb7a-388d-39b0-ad1bbb11c35f": "Czech Republic",
    "5a06bc80-cbce-7780-6446-debcc6127acc": "Egypt",
    "5a5c561d-d94c-b900-b627-9fe2abf9bb05": "French Polynesia",
    "5a7c9e06-98e2-60fd-e81f-31b93ee4c5b6": "Grenada",
    "5bab1dbd-2efa-461b-4aac-c18fdf49dd9f": "Yemen",
    "5cac524d-aff2-6264-2283-bba0769ef5d0": "Saudi Arabia",
    "5caf5917-2660-7d34-de7d-0601364ffcee": "Andorra",
    "5f263aa8-826a-7127-40d3-3ab4a363d750": "New Zealand",
    "5fbababd-4860-769e-92b9-928f22ad9258": "British Virgin Islands",
    "609d5c45-d45f-04b4-4ac6-da62f5ab0ba2": "Bhutan",
    "63f3e289-d090-a3c5-1640-5263a0e67d70": "Ecuador",
    "65fab96b-0b32-3197-299a-6525c05e67a3": "Laos",
    "6684d977-dfcf-481f-f9ae-aa7593899276": "Uruguay",
    "6797f232-b1f9-a988-6e7b-20a0845daf83": "South Africa",
    "67c286ca-8ddb-c8ec-72c6-f19133d98315": "Barbados",
    "67d3ef4a-6d06-b6b3-c90e-119066853e1d": "Madagascar",
    "69f6bed6-2f0b-59b2-38ad-cd6a27e45fa9": "Tunisia",
    "6cb49d11-e12c-b92f-f79c-985792b68dd9": "Monaco",
    "6ee5ab7d-1e8e-0e72-7f8a-37624e8bca9d": "Fiji",
    "6f54261f-e6d4-c05d-a869-0689793c2f60": "Mozambique",
    "7025b977-d662-2491-6619-b36655fd2162": "Uzbekistan",
    "702c1464-74fc-250f-ef53-7fe1a9606dd4": "Kyrgyz Republic",
    "7031587a-8390-057d-cc63-8114e1966db0": "Sierra Leone",
    "70c9c7aa-98f9-47ac-a773-b9e50d5d9523": "Chad",
    "73509252-c15a-02a9-2e00-8bd30b06d6dc": "Rwanda",
    "7597119b-bda4-9280-2bd8-6293842bdff3": "Estonia",
    "768816ca-fa9a-4dde-2a66-80b71303ade7": "Mauritius",
    "76ae71b1-82f6-b3c8-c6a7-8e6dba1d27ab": "Paraguay",
    "7b05d45c-69aa-bfd9-e5e7-1593674d96f2": "Malaysia",
    "825942dd-90dc-b32e-f959-49beeaeb9e98": "Serbia",
    "8270d51c-b44b-61ba-b564-2cd6afed7263": "Tonga",
    "82f77975-cc08-a23e-36fc-07e81a4fcbf3": "Poland",
    "84d363d0-011e-8304-f197-3c2d4f79e1d3": "Papua New Guinea",
    "84ec70fc-00ec-79ee-79d2-0d8069d18f7a": "Denmark",
    "87834d4f-0837-e494-d499-69ec623620d7": "Cruise Ship",
    "890c32ef-7694-cee4-844c-8cbf35cff6c8": "Swaziland",
    "89563935-a53a-547c-586a-b5cf1d8b8939": "United Kingdom",
    "8bb76354-ba95-4def-95c1-90ddd014d615": "Panama",
    "8d533123-41ad-1a94-4ae8-43caff16c3b3": "Romania",
    "8e5140c7-0ad6-b2cb-db14-b92ed4454050": "Austria",
    "90d5b782-1da1-09f2-2a2c-939495e11996": "Mali",
    "90ea58b7-f189-bb9b-a2fa-b71394a8d5a9": "Satellite",
    "92045019-edbd-8a58-23af-8d50fded4559": "Equatorial Guinea",
    "97aa5451-0046-e464-28a4-08640e324b22": "Cote D Ivoire",
    "98a87a00-2392-acd4-e718-2c50f5ec29a0": "Pakistan",
    "98feb4c9-8063-efd4-82f3-1e2b29c2d430": "Greenland",
    "9a706639-69c7-9535-83fa-0dca146a32b4": "Lebanon",
    "9b051dfa-3dc5-d310-4d16-1b3e408b5f76": "Sudan",
    "9d1dfede-7884-21e6-d378-ace0e865a6ea": "Angola",
    "9d3b7f23-a3e3-5ea8-7c16-e69378353444": "Cayman Islands",
    "9d54d6b6-1a30-de99-375e-c6d4112a8bcf": "Kazakhstan",
    "9ea5251d-0afd-3309-e47a-8e1a3c53aa67": "Montenegro",
    "9eac9d40-49a6-29be-4eea-b422c2123258": "Singapore",
    "9f2340da-8f71-4513-a210-f8c505ed4864": "Netherlands",
    "a08202cf-7ff2-5a82-4a38-687fd9ba285c": "Thailand",
    "a1e77fc1-7cee-f7ea-78fd-198536d3b277": "Cuba",
    "a2060524-cc94-9422-f7dd-4575bca33934": "Switzerland",
    "a6119bfd-f809-532d-21c0-50d373f3f414": "Bulgaria",
    "aae0bd44-b094-3927-b767-6a71cf4535df": "Falkland Islands",
    "abe718e3-ac64-21f3-1fb9-b1901a668c1f": "Antigua Barbuda",
    "aff96d1e-2d7b-b2e6-a357-d25e2f467cf4": "Hong Kong",
    "b0ce7323-5780-04c5-b5b1-c0f2cfd22b1d": "China",
    "b19c19e6-834b-1653-038a-bbda25f211af": "Jordan",
    "b1fa4548-64aa-1845-57f7-62378c90ee89": "Macau",
    "b39482a2-eaea-6719-bd38-1b1f5998d8f6": "Mauritania",
    "b40ee387-f345-c641-bf13-b62621361730": "Nepal",
    "b598ee2c-99bd-2cae-0f47-27e15f18c184": "Slovakia",
    "b6fd0b35-8ca9-5c73-c883-7ef2a89d60c1": "Bosnia Herzegovina",
    "b7334704-7b5a-12b0-de3b-e156a2e0f704": "Guinea",
    "ba96475c-2d2e-6ce7-5aae-8188bfcf59b6": "Bolivia",
    "baaa065a-c705-1c53-f556-6227a2e15a89": "Finland",
    "bb8bb012-bd2e-5e26-84e0-74cd829e0297": "Argentina",
    "bcb67270-368a-6083-0061-5569ea930dae": "Montserrat",
    "be7cbdd3-6928-e76e-0433-3abb72763962": "Faroe Islands",
    "be84867a-1382-9614-115d-ea5a439068f8": "Malawi",
    "bebef5f1-ec35-1aa2-173a-3b9a95c58267": "Puerto Rico",
    "c240b206-5710-0c18-ffbe-377117799e70": "Belize",
    "c4d2bd09-71a3-f985-adc3-5eae3f7e71b7": "Guyana",
    "c6772669-30fc-e947-568c-239bcda2ad1f": "Kenya",
    "c6823ed0-1327-4186-d88c-36eeab7dfedb": "Guernsey",
    "c7d4d8ef-05fd-31b1-063f-e9c77dba57ad": "Turkey",
    "c7f2a313-86fe-7a57-da77-2e0294e1eaff": "Libya",
    "c81be018-d014-9a15-a9f9-a1d64c1a5756": "Togo",
    "c898a3b4-912c-77ef-9ea3-a0838ce785b8": "Samoa",
    "c8ef381a-7794-22b1-cae5-b95c5f94f5a7": "Luxembourg",
    "c91db79b-bc85-9cad-3d1d-369e69b5c4e1": "Iran",
    "c95f198a-6245-b364-1a93-34504b0107a6": "Albania",
    "ca326778-50a2-3c2d-12dc-0ae287b1632a": "Philippines",
    "cb5e7a8f-a010-6173-5225-9e32058e19ce": "Greece",
    "ccf9ca63-cc93-8420-8fe1-5516d2babfbb": "Anguilla",
    "cfbfcb8a-7818-a0e6-5cd8-e82e6a11e8d6": "Venezuela",
    "d092e7a9-f317-8fcb-fdda-3955c5ac7d37": "St Lucia",
    "d0f0c810-2bf0-f962-6db3-0887e8742702": "French West Indies",
    "d28a05bd-aff5-6e9a-40b8-7508e875177c": "Zambia",
    "d2b0ad59-d758-7c33-8ecc-21a5ac9d0c28": "Macedonia",
    "d39a242c-3df6-d425-fc71-ee1217ea56eb": "Australia",
    "d4254126-85d5-d9db-34be-c010752175fe": "Botswana",
    "d53d0d37-10fb-2737-7d56-4823e98e72be": "Norway",
    "d81fe514-0eea-240e-86f6-6fd1ea74ac02": "Croatia",
    "d8d51f84-1de0-4a12-6241-416d939260c0": "Latvia",
    "d8ebf770-ae2e-cf2e-aeab-90d5823a0493": "Cameroon",
    "dac5335e-2a76-ff37-e412-4bbc98ede591": "St Vincent",
    "db6aa41d-afdc-b06f-bd69-2776945003bc": "Kuwait",
    "db8f379e-6ffc-7b83-d613-5cb18b38d72d": "Morocco",
    "dd6fa8f7-5ce5-a0a7-4b70-62b9f30327be": "Vietnam",
    "de1e7191-9355-626a-a61a-3125b2f6057a": "Gibraltar",
    "df6fb91e-50c3-df54-8c0c-835631eb4a28": "Gambia",
    "e022a0c5-8ff2-d279-82d6-99115b93689f": "Congo",
    "e06b340d-d2b0-bde0-f4b7-e2a22dfc7565": "Turkmenistan",
    "e34be692-745e-b91b-579d-7b48cb0ebdfd": "Guatemala",
    "e5ed7049-e49e-c7a6-c3ba-e2c945d75345": "Ireland",
    "e6d5f284-35f0-be7e-004f-dc7bd46a128f": "Afghanistan",
    "e6dc140a-1ceb-3f32-3c93-90aacd98c344": "Malta",
    "e7e9550b-282f-cbef-eae8-57d2faa89987": "Dominican Republic",
    "e8f59c40-d69c-e85d-4936-c4f22878c843": "Bangladesh",
    "eacdbd6c-f259-9130-456d-f27334554d9b": "Haiti",
    "eaf92130-1281-8a76-2b8b-3b3ac499b4e8": "France",
    "ebd6d81b-baa0-08d1-8130-a1d35f672e41": "Cook Islands",
    "ed5e8342-c973-4352-3036-84957a1186c3": "Lesotho",
    "ee03fbab-f589-a652-504e-f7e56d6d920c": "Mongolia",
    "ee3c8e89-923a-4103-ed36-9a0ff535257a": "Ethiopia",
    "f045a2ec-66c4-cd42-3334-4b868e501559": "Brunei",
    "f14ddf3a-6bd3-a2b1-3afd-46bd374ca0e0": "Chile",
    "f3bc6c27-a17a-97e5-72d1-9adaad07fd54": "Iraq",
    "f78bcb18-d5b5-3f8f-bd31-c4604f88f77c": "Ghana",
    "f7f485d2-b792-416a-37d6-f5465aaa9675": "Indonesia",
    "f8560ae5-3e68-3ff1-0689-7a7f3f214905": "Azerbaijan",
    "f8944d7e-b5cb-d931-612c-3bd32c4cb113": "Ukraine",
    "f9ea4286-67ba-24cb-8825-91a6aa7e92be": "Syria",
    "fb50d104-2653-1168-c91c-d6bc8ef02ea0": "United Arab Emirates"
};


/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/environments/states.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return states; });
var states = {
    "9e1c5261-ade3-fbe8-06bc-8aa47f4996a2": ["AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "FM", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MH", "MI", "MN", "MO", "MP", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "PW", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"]
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map