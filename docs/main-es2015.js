(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/backtrack-logic/backtrack-logic.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/backtrack-logic/backtrack-logic.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<gfx-world [world]=\"game.World()\" [solver]=\"solver\"></gfx-world>\r\n<h1 *ngIf=\"solver.IsNoSolutionFound()\">This Maze Has No Available Path to the Goal</h1>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/graphics/mark/mark.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/graphics/mark/mark.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [class]=\"GetCssClass()\" ></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/graphics/maze/maze.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/graphics/maze/maze.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngFor=\"let h of mazeHeight();let y = index\">\r\n  <div class=\"d-flex\">\r\n    <ng-container *ngFor=\"let w of mazeWidth();let x = index\">\r\n      <gfx-tile [tile]=\"GetTileAt(x,y)\" [ngStyle]=\"TileDimensionsStyle()\">\r\n        <gfx-mark [mark]=GetMarkAt(x,y)></gfx-mark>\r\n      </gfx-tile>\r\n    </ng-container>\r\n  </div>\r\n</ng-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/graphics/tile/tile.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/graphics/tile/tile.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [class]=\"GetCssClass()\"\r\n  (blockTile)=\"Block()\"\r\n  (toggleTile)=\"ToggleState()\"\r\n  [draggable]=\"IsDraggable()\"\r\n  (dragstart)=\"Drag($event)\"\r\n  (dragover)=\"SetAllowDrop($event)\"\r\n  (drop)=\"AcceptDrop($event)\">\r\n  <div *ngIf=\"tile.hasWalker\" class=\"walker\"></div>\r\n  <ng-content *ngIf=\"tile.state!='blocked' && !tile.hasWalker\" select=\"gfx-mark\"></ng-content>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/graphics/world/world.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/graphics/world/world.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<gfx-maze [maze]=\"world.Maze()\" [TileMarks]=\"GetIndexedLocations()\"></gfx-maze>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/control-panel/control-panel.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/control-panel/control-panel.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row d-flex\">\r\n  <div class=\"col\">\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Width\" [(ngModel)]=\"width\">\r\n  </div>\r\n  <div class=\"col\">\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Height\" [(ngModel)]=\"height\">\r\n  </div>\r\n  <div class=\"col\">\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"CreateMaze()\">Create</button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/home-page/home-page.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/home-page/home-page.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ui-navbar (resetSimulation)=\"Reset()\" (pauseSimulation)=\"Pause()\" (resumeSimulation)=\"Resume()\"></ui-navbar>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <!-- <div class=\"col-sm\">\r\n    </div> -->\r\n    <div class=\"col-12-sm text-center\" style=\"margin: auto;\">\r\n      <ui-world-generator *ngIf=\"!meta.isSimulationStarted\" class=\"d-flex justify-content-center\" ></ui-world-generator>\r\n      <app-backtrack-logic *ngIf=\"meta.isSimulationStarted\" [pauseSolving]=\"IsSimulationPaused()\" class=\"d-flex justify-content-center\"></app-backtrack-logic>\r\n      <p style=\"text-align: left;\" class=\"mt-5\">\r\n        1- Left click on the map to generate add or remove tiles.\r\n        <br>\r\n        2- drag and drop the goal icon to where you want (must be open tile)\r\n        <br>\r\n        3- start the backtrack algorithm\r\n        <br>\r\n        Note: more options can be found in the header\r\n      </p>\r\n    </div>\r\n    <!-- <div class=\"col-sm\">\r\n    </div> -->\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/maze-construction/maze-construction.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/maze-construction/maze-construction.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"simple-dropdown\">\r\n  <button class=\"simple-btn\">\r\n    Maze ▼\r\n  </button>\r\n\r\n  <div class=\"simple-dropdown-content\">\r\n    <a class=\"simple-dropdown-item\"  (click)=\"meta.ResetMaze()\">Clear</a>\r\n    <a class=\"simple-dropdown-item\"  (click)=\"meta.RandomFillMaze()\">Random Filling</a>\r\n    <a class=\"simple-dropdown-item\" >Recursive Division (coming soon..)</a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/navbar/navbar.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/navbar/navbar.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mb-4\">\r\n  <div class=\"row d-flex\">\r\n    <div class=\"col-2 \">\r\n      <h1 style=\"padding-top: 15px;\">Maze warrior</h1>\r\n    </div>\r\n    <div class=\"col-8 d-flex\">\r\n      <div class=\"simple-dropdown\">\r\n        <button class=\"simple-btn\">\r\n          Algorithims ▼\r\n        </button>\r\n\r\n        <div class=\"simple-dropdown-content\">\r\n          <a class=\"simple-dropdown-item\" href=\"#\">Backtrack</a>\r\n          <a class=\"simple-dropdown-item\" href=\"#\">Greedy (coming soon..)</a>\r\n          <a class=\"simple-dropdown-item\" href=\"#\">Djikstra (coming soon..)</a>\r\n        </div>\r\n      </div>\r\n      <ui-maze-construction></ui-maze-construction>\r\n      <button class=\"simple-btn\" (click)=\"StartSimulation()\"><span class=\"start-button\">Start</span></button>\r\n      <button class=\"simple-btn\" (click)=\"PauseSimulation()\">Pause</button>\r\n      <button class=\"simple-btn\" (click)=\"ResetSimulation()\">Reset</button>\r\n      <a\r\n        title=\"See project in github\"\r\n        href=\"https://github.com/xEyad/maze_warrior\"\r\n        target=\"_blank\"\r\n        class=\"simple-btn\"\r\n        style=\"margin-top: auto;\r\n        margin-bottom: auto;\"\r\n      >\r\n        Github\r\n     </a>\r\n    </div>\r\n    <ui-control-panel class=\"col-2\"></ui-control-panel>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/world-generator/world-generator.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/world-generator/world-generator.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<gfx-maze [maze]=\"meta.maze\"\r\n (mousemove)=\"BlockTile($event)\"\r\n (mousedown)=\"isLeftMouseBtnClicked = true\"\r\n (mouseup)=\"isLeftMouseBtnClicked = false\"\r\n (click)=\"ToggleTileState($event)\"\r\n (dragstart)=\"DraggingMode()\"\r\n ></gfx-maze>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _ui_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/home-page/home-page.component */ "./src/app/ui/home-page/home-page.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: 'home',
        component: _ui_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"],
    },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**',
        redirectTo: '/home',
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Path-finder';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_game_meta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/game-meta.service */ "./src/app/services/game-meta.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _backtrack_logic_backtrack_logic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./backtrack-logic/backtrack-logic.component */ "./src/app/backtrack-logic/backtrack-logic.component.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _graphics_tile_tile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./graphics/tile/tile.component */ "./src/app/graphics/tile/tile.component.ts");
/* harmony import */ var _graphics_mark_mark_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./graphics/mark/mark.component */ "./src/app/graphics/mark/mark.component.ts");
/* harmony import */ var _graphics_world_world_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./graphics/world/world.component */ "./src/app/graphics/world/world.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _ui_control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui/control-panel/control-panel.component */ "./src/app/ui/control-panel/control-panel.component.ts");
/* harmony import */ var _ui_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ui/home-page/home-page.component */ "./src/app/ui/home-page/home-page.component.ts");
/* harmony import */ var _ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ui/navbar/navbar.component */ "./src/app/ui/navbar/navbar.component.ts");
/* harmony import */ var _ui_world_generator_world_generator_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ui/world-generator/world-generator.component */ "./src/app/ui/world-generator/world-generator.component.ts");
/* harmony import */ var _graphics_maze_maze_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./graphics/maze/maze.component */ "./src/app/graphics/maze/maze.component.ts");
/* harmony import */ var _ui_maze_construction_maze_construction_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ui/maze-construction/maze-construction.component */ "./src/app/ui/maze-construction/maze-construction.component.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _backtrack_logic_backtrack_logic_component__WEBPACK_IMPORTED_MODULE_7__["BacktrackLogicComponent"],
            _graphics_tile_tile_component__WEBPACK_IMPORTED_MODULE_9__["TileComponent"],
            _graphics_mark_mark_component__WEBPACK_IMPORTED_MODULE_10__["MarkComponent"],
            _graphics_world_world_component__WEBPACK_IMPORTED_MODULE_11__["WorldComponent"],
            _ui_control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_13__["ControlPanelComponent"],
            _ui_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_14__["HomePageComponent"],
            _ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
            _ui_world_generator_world_generator_component__WEBPACK_IMPORTED_MODULE_16__["WorldGeneratorComponent"],
            _graphics_maze_maze_component__WEBPACK_IMPORTED_MODULE_17__["MazeComponent"],
            _ui_maze_construction_maze_construction_component__WEBPACK_IMPORTED_MODULE_18__["MazeConstructionComponent"]
        ],
        imports: [
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["MDBBootstrapModule"].forRoot(),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        ],
        providers: [_services_game_service__WEBPACK_IMPORTED_MODULE_8__["GameService"], _services_game_meta_service__WEBPACK_IMPORTED_MODULE_4__["GameMetaService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/backtrack-logic/backtrack-logic.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/backtrack-logic/backtrack-logic.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3RyYWNrLWxvZ2ljL0s6XFx3b3Jrc2hvcFxcd2Vic2l0ZXNcXFBhdGgtZmluZGVyL3NyY1xcYXBwXFxiYWNrdHJhY2stbG9naWNcXGJhY2t0cmFjay1sb2dpYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmFja3RyYWNrLWxvZ2ljL2JhY2t0cmFjay1sb2dpYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2JhY2t0cmFjay1sb2dpYy9iYWNrdHJhY2stbG9naWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiIsImgxIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/backtrack-logic/backtrack-logic.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/backtrack-logic/backtrack-logic.component.ts ***!
  \**************************************************************/
/*! exports provided: BacktrackLogicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BacktrackLogicComponent", function() { return BacktrackLogicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_game_meta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/game-meta.service */ "./src/app/services/game-meta.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_solvers_backtrack_solver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/solvers/backtrack-solver */ "./src/app/models/solvers/backtrack-solver.ts");





let BacktrackLogicComponent = class BacktrackLogicComponent {
    constructor(game, meta) {
        this.game = game;
        this.meta = meta;
        this.solver = new _models_solvers_backtrack_solver__WEBPACK_IMPORTED_MODULE_4__["BacktrackSolver"](game, meta.simulationSpeed);
        this.solver.SolveInSteps();
    }
    ngOnInit() {
    }
    ngDoCheck() {
        this.pauseSolving ? this.solver.PauseSolving() : this.solver.ResumeSolving();
    }
    ngOnDestroy() {
        this.solver.StopSolving();
    }
};
BacktrackLogicComponent.ctorParameters = () => [
    { type: _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] },
    { type: _services_game_meta_service__WEBPACK_IMPORTED_MODULE_1__["GameMetaService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
], BacktrackLogicComponent.prototype, "pauseSolving", void 0);
BacktrackLogicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-backtrack-logic',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./backtrack-logic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/backtrack-logic/backtrack-logic.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./backtrack-logic.component.scss */ "./src/app/backtrack-logic/backtrack-logic.component.scss")).default]
    })
], BacktrackLogicComponent);



/***/ }),

/***/ "./src/app/graphics/mark/mark.component.scss":
/*!***************************************************!*\
  !*** ./src/app/graphics/mark/mark.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@-webkit-keyframes indexATile {\n  0% {\n    transform: scale(0.3);\n    background-color: #ffa8a8;\n  }\n  50% {\n    transform: scale(1.2);\n    background-color: #ffa8a8;\n  }\n  100% {\n    transform: scale(1);\n    background-color: #ffa8a8;\n  }\n}\n@keyframes indexATile {\n  0% {\n    transform: scale(0.3);\n    background-color: #ffa8a8;\n  }\n  50% {\n    transform: scale(1.2);\n    background-color: #ffa8a8;\n  }\n  100% {\n    transform: scale(1);\n    background-color: #ffa8a8;\n  }\n}\n:host {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-self: center;\n  justify-self: center;\n  height: 100%;\n  width: 100%;\n}\n:host div.startPos {\n  align-self: center;\n  justify-self: center;\n  height: 80%;\n  width: 80%;\n  border-radius: 50%;\n  border-color: cadetblue;\n  background-image: url('start.png');\n  background-size: cover;\n  background-position: center;\n}\n:host div.indexed {\n  transition: 0.2s;\n  align-self: center;\n  justify-self: center;\n  width: 80%;\n  height: 80%;\n  background-color: #ffa8a8;\n  -webkit-animation-name: indexATile;\n          animation-name: indexATile;\n  -webkit-animation-duration: 0.4s;\n          animation-duration: 0.4s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JhcGhpY3MvbWFyay9LOlxcd29ya3Nob3BcXHdlYnNpdGVzXFxQYXRoLWZpbmRlci9zcmNcXGFwcFxcZ3JhcGhpY3NcXG1hcmtcXG1hcmsuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dyYXBoaWNzL21hcmsvbWFyay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFO0lBQ0UscUJBQUE7SUFDQSx5QkFKUztFQ0lYO0VERUE7SUFDRSxxQkFBQTtJQUNBLHlCQVJTO0VDUVg7RURFQTtJQUNFLG1CQUFBO0lBQ0EseUJBWlM7RUNZWDtBQUNGO0FEWkE7RUFDRTtJQUNFLHFCQUFBO0lBQ0EseUJBSlM7RUNJWDtFREVBO0lBQ0UscUJBQUE7SUFDQSx5QkFSUztFQ1FYO0VERUE7SUFDRSxtQkFBQTtJQUNBLHlCQVpTO0VDWVg7QUFDRjtBREdBO0VBRUUsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNGRjtBREdFO0VBRUUsa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ0ZKO0FESUU7RUFFRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQTVDUztFQTZDVCxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvZ3JhcGhpY3MvbWFyay9tYXJrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGluZGV4Q29sb3I6ICNmZmE4YTg7XHJcbkBrZXlmcmFtZXMgaW5kZXhBVGlsZSB7XHJcbiAgMCUgICB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC4zKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRpbmRleENvbG9yO1xyXG4gIH1cclxuICA1MCUgIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRpbmRleENvbG9yO1xyXG4gIH1cclxuICAxMDAlICB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5kZXhDb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0XHJcbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpdi5zdGFydFBvc1xyXG4gIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zdGFydC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGRpdi5pbmRleGVkXHJcbiAge1xyXG4gICAgdHJhbnNpdGlvbjogLjJzO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5kZXhDb2xvcjtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBpbmRleEFUaWxlO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIH1cclxufVxyXG4iLCJAa2V5ZnJhbWVzIGluZGV4QVRpbGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmE4YTg7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYThhODtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmE4YTg7XG4gIH1cbn1cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IGRpdi5zdGFydFBvcyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGhlaWdodDogODAlO1xuICB3aWR0aDogODAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1jb2xvcjogY2FkZXRibHVlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc3RhcnQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG46aG9zdCBkaXYuaW5kZXhlZCB7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhOGE4O1xuICBhbmltYXRpb24tbmFtZTogaW5kZXhBVGlsZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/graphics/mark/mark.component.ts":
/*!*************************************************!*\
  !*** ./src/app/graphics/mark/mark.component.ts ***!
  \*************************************************/
/*! exports provided: MarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkComponent", function() { return MarkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_TileMark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/TileMark */ "./src/app/models/TileMark.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let MarkComponent = class MarkComponent {
    constructor() {
        this.mark = _models_TileMark__WEBPACK_IMPORTED_MODULE_1__["Mark"].none;
    }
    ngOnInit() {
    }
    GetCssClass() {
        if (_models_TileMark__WEBPACK_IMPORTED_MODULE_1__["Mark"].start == this.mark)
            return "startPos";
        if (_models_TileMark__WEBPACK_IMPORTED_MODULE_1__["Mark"].indexed == this.mark)
            return "indexed";
        return "";
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], MarkComponent.prototype, "mark", void 0);
MarkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'gfx-mark',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mark.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/graphics/mark/mark.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mark.component.scss */ "./src/app/graphics/mark/mark.component.scss")).default]
    })
], MarkComponent);



/***/ }),

/***/ "./src/app/graphics/maze/maze.component.scss":
/*!***************************************************!*\
  !*** ./src/app/graphics/maze/maze.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyYXBoaWNzL21hemUvbWF6ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/graphics/maze/maze.component.ts":
/*!*************************************************!*\
  !*** ./src/app/graphics/maze/maze.component.ts ***!
  \*************************************************/
/*! exports provided: MazeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MazeComponent", function() { return MazeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_game_meta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/game-meta.service */ "./src/app/services/game-meta.service.ts");
/* harmony import */ var _models_TileMark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../models/TileMark */ "./src/app/models/TileMark.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let MazeComponent = class MazeComponent {
    constructor(meta) {
        this.meta = meta;
        if (this.TileMarks == undefined)
            this.TileMarks = [];
    }
    ngOnInit() {
        this.widthArr = Array(this.maze.width).fill(0);
        this.heightArr = Array(this.maze.height).fill(0);
    }
    mazeHeight() {
        if (this.heightArr.length == this.maze.height)
            return this.heightArr;
        this.heightArr = Array(this.maze.height).fill(0);
        return this.heightArr;
    }
    mazeWidth() {
        if (this.widthArr.length == this.maze.width)
            return this.widthArr;
        this.widthArr = Array(this.maze.width).fill(0);
        return this.widthArr;
    }
    GetTileAt(x, y) {
        return this.maze.tiles[this.maze.to1D(x, y)];
    }
    GetMarkAt(x, y) {
        if (this.TileMarks.length == 0)
            return _models_TileMark__WEBPACK_IMPORTED_MODULE_2__["Mark"].none;
        for (const tileMark of this.TileMarks) {
            if (tileMark.location.Equals(this.GetTileAt(x, y).coordinate))
                return tileMark.type;
        }
    }
    TileDimensionsStyle() {
        return {
            'width': this.meta.tileSize.toString() + "px",
            'height': this.meta.tileSize.toString() + "px",
        };
    }
};
MazeComponent.ctorParameters = () => [
    { type: _services_game_meta_service__WEBPACK_IMPORTED_MODULE_1__["GameMetaService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
], MazeComponent.prototype, "maze", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
], MazeComponent.prototype, "TileMarks", void 0);
MazeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'gfx-maze',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./maze.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/graphics/maze/maze.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./maze.component.scss */ "./src/app/graphics/maze/maze.component.scss")).default]
    })
], MazeComponent);



/***/ }),

/***/ "./src/app/graphics/tile/tile.component.scss":
/*!***************************************************!*\
  !*** ./src/app/graphics/tile/tile.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@-webkit-keyframes blockTile {\n  0% {\n    transform: scale(0.3);\n    background-color: #0c3547;\n  }\n  50% {\n    transform: scale(1.2);\n    background-color: #0c3547;\n  }\n  100% {\n    transform: scale(1);\n    background-color: #0c3547;\n  }\n}\n@keyframes blockTile {\n  0% {\n    transform: scale(0.3);\n    background-color: #0c3547;\n  }\n  50% {\n    transform: scale(1.2);\n    background-color: #0c3547;\n  }\n  100% {\n    transform: scale(1);\n    background-color: #0c3547;\n  }\n}\n@-webkit-keyframes openTile {\n  0% {\n    transform: scale(1);\n    background-color: #0c3547;\n  }\n  50% {\n    transform: scale(0.5);\n    background-color: #869aa3;\n  }\n  100% {\n    transform: scale(0);\n    background-color: #ffffff;\n  }\n}\n@keyframes openTile {\n  0% {\n    transform: scale(1);\n    background-color: #0c3547;\n  }\n  50% {\n    transform: scale(0.5);\n    background-color: #869aa3;\n  }\n  100% {\n    transform: scale(0);\n    background-color: #ffffff;\n  }\n}\ndiv {\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n.open {\n  border: solid 1px #a9d3f5;\n  -webkit-animation-name: openTile;\n          animation-name: openTile;\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n}\ndiv:hover {\n  opacity: 0.5;\n  color: #34495e94;\n  border: solid 1px #34495e94;\n  background-color: #34495e94;\n}\n.blocked {\n  color: #0c3547;\n  border: solid 1px #0c3547;\n  background-color: #0c3547;\n  -webkit-animation-name: blockTile;\n          animation-name: blockTile;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n.goal {\n  color: #ffa400;\n  border: solid 1px #ffa400;\n  background-image: url('crosshair.png');\n  background-size: cover;\n  background-position: center;\n}\n.walker {\n  height: 80%;\n  width: 80%;\n  background-color: #c20114;\n  align-self: center;\n  justify-self: center;\n  border: solid 1px #c20114;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JhcGhpY3MvdGlsZS9LOlxcd29ya3Nob3BcXHdlYnNpdGVzXFxQYXRoLWZpbmRlci9zcmNcXGFwcFxcZ3JhcGhpY3NcXHRpbGVcXHRpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dyYXBoaWNzL3RpbGUvdGlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFO0lBQ0UscUJBQUE7SUFDQSx5QkFOTztFQ0dUO0VES0E7SUFDRSxxQkFBQTtJQUNBLHlCQVZPO0VDT1Q7RURLQTtJQUNFLG1CQUFBO0lBQ0EseUJBZE87RUNXVDtBQUNGO0FEVEE7RUFDRTtJQUNFLHFCQUFBO0lBQ0EseUJBTk87RUNHVDtFREtBO0lBQ0UscUJBQUE7SUFDQSx5QkFWTztFQ09UO0VES0E7SUFDRSxtQkFBQTtJQUNBLHlCQWRPO0VDV1Q7QUFDRjtBRE1BO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLHlCQXJCTztFQ2lCVDtFRE1BO0lBQ0UscUJBQUE7SUFDQSx5QkFBQTtFQ0pGO0VETUE7SUFDRSxtQkFBQTtJQUNBLHlCQUFBO0VDSkY7QUFDRjtBRFJBO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLHlCQXJCTztFQ2lCVDtFRE1BO0lBQ0UscUJBQUE7SUFDQSx5QkFBQTtFQ0pGO0VETUE7SUFDRSxtQkFBQTtJQUNBLHlCQUFBO0VDSkY7QUFDRjtBRFFBO0VBRUUsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1BGO0FEVUE7RUFFRSx5QkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0FDUkY7QURVQTtFQUdFLFlBQUE7RUFDQSxnQkFGTztFQUdQLDJCQUFBO0VBQ0EsMkJBSk87QUNMVDtBRFdBO0VBRUUsY0EzRFM7RUE0RFQseUJBQUE7RUFDQSx5QkE3RFM7RUE4RFQsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNURjtBRFdBO0VBRUUsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDVEY7QURXQTtFQUVFLFdBQUE7RUFDQSxVQUFBO0VBQ0EseUJBNUVXO0VBNkVYLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQ1RGIiwiZmlsZSI6InNyYy9hcHAvZ3JhcGhpY3MvdGlsZS90aWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJvcmRlcldpZHRoOiAxcHg7XHJcbiRtYWluQ29sb3I6cmdiKDEyLCA1MywgNzEpO1xyXG4kd2Fsa2VyQ29sb3I6I2MyMDExNDtcclxuXHJcbkBrZXlmcmFtZXMgYmxvY2tUaWxlIHtcclxuICAwJSAgIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjMpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW5Db2xvcjtcclxuICB9XHJcbiAgNTAlICB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbkNvbG9yO1xyXG4gIH1cclxuICAxMDAlICB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbkNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBvcGVuVGlsZSB7XHJcbiAgMCUgICB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbkNvbG9yO1xyXG4gIH1cclxuICA1MCUgIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NjlhYTM7XHJcbiAgfVxyXG4gIDEwMCUgIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmRpdlxyXG57XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxufVxyXG4ub3BlblxyXG57XHJcbiAgYm9yZGVyOiBzb2xpZCAkYm9yZGVyV2lkdGggcmdiKDE2OSwgMjExLCAyNDUpO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBvcGVuVGlsZTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuMnM7XHJcbn1cclxuZGl2OmhvdmVyXHJcbntcclxuICAkY29sb3I6IzM0NDk1ZTk0O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBjb2xvcjogJGNvbG9yO1xyXG4gIGJvcmRlcjogc29saWQgJGJvcmRlcldpZHRoICRjb2xvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XHJcbn1cclxuLmJsb2NrZWRcclxue1xyXG4gIGNvbG9yOiAkbWFpbkNvbG9yO1xyXG4gIGJvcmRlcjogc29saWQgJGJvcmRlcldpZHRoICRtYWluQ29sb3I7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW5Db2xvcjtcclxuICBhbmltYXRpb24tbmFtZTogYmxvY2tUaWxlO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbn1cclxuLmdvYWxcclxue1xyXG4gIGNvbG9yOiAjZmZhNDAwO1xyXG4gIGJvcmRlcjogc29saWQgJGJvcmRlcldpZHRoICNmZmE0MDA7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvY3Jvc3NoYWlyLnBuZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcbi53YWxrZXJcclxue1xyXG4gIGhlaWdodDogODAlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdhbGtlckNvbG9yO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICBib3JkZXI6IHNvbGlkICRib3JkZXJXaWR0aCAkd2Fsa2VyQ29sb3I7XHJcbn1cclxuIiwiQGtleWZyYW1lcyBibG9ja1RpbGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYzM1NDc7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBjMzU0NztcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYzM1NDc7XG4gIH1cbn1cbkBrZXlmcmFtZXMgb3BlblRpbGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMzNTQ3O1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NjlhYTM7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB9XG59XG5kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ub3BlbiB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNhOWQzZjU7XG4gIGFuaW1hdGlvbi1uYW1lOiBvcGVuVGlsZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuXG5kaXY6aG92ZXIge1xuICBvcGFjaXR5OiAwLjU7XG4gIGNvbG9yOiAjMzQ0OTVlOTQ7XG4gIGJvcmRlcjogc29saWQgMXB4ICMzNDQ5NWU5NDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0NDk1ZTk0O1xufVxuXG4uYmxvY2tlZCB7XG4gIGNvbG9yOiAjMGMzNTQ3O1xuICBib3JkZXI6IHNvbGlkIDFweCAjMGMzNTQ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMzNTQ3O1xuICBhbmltYXRpb24tbmFtZTogYmxvY2tUaWxlO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xufVxuXG4uZ29hbCB7XG4gIGNvbG9yOiAjZmZhNDAwO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZmZhNDAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvY3Jvc3NoYWlyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4ud2Fsa2VyIHtcbiAgaGVpZ2h0OiA4MCU7XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMjAxMTQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjMjAxMTQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/graphics/tile/tile.component.ts":
/*!*************************************************!*\
  !*** ./src/app/graphics/tile/tile.component.ts ***!
  \*************************************************/
/*! exports provided: TileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileComponent", function() { return TileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_game_meta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/game-meta.service */ "./src/app/services/game-meta.service.ts");
/* harmony import */ var _models_tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../models/tile */ "./src/app/models/tile.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let TileComponent = class TileComponent {
    constructor(meta) {
        this.meta = meta;
    }
    ngOnInit() {
    }
    Drag(event) {
        let type;
        if (this.tile.isGoal)
            type = "goal";
        else if (this.tile.coordinate.Equals(this.meta.startPos))
            type = "start";
        else {
            event.preventDefault();
            return;
        }
        event.dataTransfer.setData("tileType", type);
    }
    GetCssClass() {
        if (this.tile.isGoal)
            return "goal";
        else
            return this.tile.state;
    }
    AcceptDrop(event) {
        event.preventDefault();
        let type = event.dataTransfer.getData("tileType");
        switch (type) {
            case 'goal':
                this.meta.goalPos = this.tile.coordinate;
                break;
            case 'start':
                this.meta.startPos = this.tile.coordinate;
                break;
            default:
                break;
        }
    }
    SetAllowDrop(event) {
        if (this.tile.state != _models_tile__WEBPACK_IMPORTED_MODULE_2__["State"].blocked && !(this.tile.isGoal || this.tile.coordinate.Equals(this.meta.startPos)))
            event.preventDefault();
    }
    IsDraggable() {
        return this.tile.isGoal || this.tile.coordinate.Equals(this.meta.startPos);
    }
    ToggleState() {
        if (this.tile.state == _models_tile__WEBPACK_IMPORTED_MODULE_2__["State"].open)
            this.Block();
        else
            this.Open();
    }
    Open() {
        this.tile.state = _models_tile__WEBPACK_IMPORTED_MODULE_2__["State"].open;
    }
    Block() {
        if (!this.tile.isGoal && !this.meta.startPos.Equals(this.tile.coordinate))
            this.tile.state = _models_tile__WEBPACK_IMPORTED_MODULE_2__["State"].blocked;
    }
};
TileComponent.ctorParameters = () => [
    { type: _services_game_meta_service__WEBPACK_IMPORTED_MODULE_1__["GameMetaService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
], TileComponent.prototype, "tile", void 0);
TileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'gfx-tile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/graphics/tile/tile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tile.component.scss */ "./src/app/graphics/tile/tile.component.scss")).default]
    })
], TileComponent);



/***/ }),

/***/ "./src/app/graphics/world/world.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/graphics/world/world.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("gfx-tile {\n  width: 20px;\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JhcGhpY3Mvd29ybGQvSzpcXHdvcmtzaG9wXFx3ZWJzaXRlc1xcUGF0aC1maW5kZXIvc3JjXFxhcHBcXGdyYXBoaWNzXFx3b3JsZFxcd29ybGQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dyYXBoaWNzL3dvcmxkL3dvcmxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2dyYXBoaWNzL3dvcmxkL3dvcmxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmdmeC10aWxle1xyXG4gIHdpZHRoOjIwcHg7XHJcbiAgaGVpZ2h0OjIwcHg7XHJcbn1cclxuIiwiZ2Z4LXRpbGUge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/graphics/world/world.component.ts":
/*!***************************************************!*\
  !*** ./src/app/graphics/world/world.component.ts ***!
  \***************************************************/
/*! exports provided: WorldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldComponent", function() { return WorldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_TileMark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/TileMark */ "./src/app/models/TileMark.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let WorldComponent = class WorldComponent {
    constructor() { }
    ngOnInit() {
    }
    GetIndexedLocations() {
        let marksArray = [];
        for (const loc of this.solver.GetIndexedLocations()) {
            marksArray.push(_models_TileMark__WEBPACK_IMPORTED_MODULE_1__["TileMark"].indexed(loc));
        }
        return marksArray;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], WorldComponent.prototype, "world", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], WorldComponent.prototype, "solver", void 0);
WorldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'gfx-world',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./world.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/graphics/world/world.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./world.component.scss */ "./src/app/graphics/world/world.component.scss")).default]
    })
], WorldComponent);



/***/ }),

/***/ "./src/app/models/TileMark.ts":
/*!************************************!*\
  !*** ./src/app/models/TileMark.ts ***!
  \************************************/
/*! exports provided: TileMark, Mark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileMark", function() { return TileMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mark", function() { return Mark; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class TileMark {
    constructor(type, location) {
        this.type = type;
        this.location = location;
    }
    static indexed(location) {
        return new TileMark(Mark.indexed, location);
    }
    static none(location) {
        return new TileMark(Mark.none, location);
    }
}
var Mark;
(function (Mark) {
    Mark[Mark["indexed"] = 0] = "indexed";
    Mark[Mark["start"] = 1] = "start";
    Mark[Mark["none"] = 2] = "none";
})(Mark || (Mark = {}));


/***/ }),

/***/ "./src/app/models/maze filler/recursive-filler.ts":
/*!********************************************************!*\
  !*** ./src/app/models/maze filler/recursive-filler.ts ***!
  \********************************************************/
/*! exports provided: RecursiveFiller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursiveFiller", function() { return RecursiveFiller; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utility_eMath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utility/eMath */ "./src/app/models/utility/eMath.ts");
/* harmony import */ var _utility_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utility/point */ "./src/app/models/utility/point.ts");
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../tile */ "./src/app/models/tile.ts");




class RecursiveFiller {
    constructor(maze) {
        this.minWidth = 3;
        this.minLength = 3;
        this.maze = maze;
        this.doors = [];
        this.chambers = [];
        const topLeft = this.maze.tiles[0].coordinate;
        const botRight = this.maze.tiles[this.maze.tiles.length - 1].coordinate;
        const pair = new ChamberPair(topLeft, botRight);
        this.chambers.push(pair);
    }
    ConstructInSteps(game) {
        const fps = 10;
        const loopRef = setInterval(() => {
            game.DoGameStep();
            this.DoConstructionStep();
            if (this.chambers.length == 0)
                clearInterval(loopRef);
        }, fps / 1000);
    }
    Construct() {
        while (this.chambers.length > 0) {
            this.DoConstructionStep();
        }
    }
    DoConstructionStep() {
        const pair = this.chambers.pop();
        this.GenerateDivisionPoints(pair.topLeft, pair.botRight);
        this.CreateWalls();
        this.AddChambers();
    }
    AddChambers() {
        this.AddTopLeftWall();
        this.AddTopRighttWall();
        this.AddBotLeftWall();
        this.AddBotRightWall();
    }
    AddTopLeftWall() {
        const topLeft = new _utility_point__WEBPACK_IMPORTED_MODULE_2__["Point"](this.divisionPoint3.x, this.divisionPoint1.y);
        const botRight = this.IntersectionPoint();
        if (!this.IsChamberDimensionValid(topLeft, botRight))
            return;
        const pair = new ChamberPair(topLeft, botRight);
        this.chambers.push(pair);
    }
    AddTopRighttWall() {
        const topLeft = this.divisionPoint1;
        const botRight = this.divisionPoint4;
        if (!this.IsChamberDimensionValid(topLeft, botRight))
            return;
        const pair = new ChamberPair(topLeft, botRight);
        this.chambers.push(pair);
    }
    AddBotLeftWall() {
        const topLeft = this.divisionPoint3;
        const botRight = this.divisionPoint2;
        if (!this.IsChamberDimensionValid(topLeft, botRight))
            return;
        const pair = new ChamberPair(topLeft, botRight);
        this.chambers.push(pair);
    }
    AddBotRightWall() {
        const topLeft = this.IntersectionPoint();
        const botRight = new _utility_point__WEBPACK_IMPORTED_MODULE_2__["Point"](this.divisionPoint4.x, this.divisionPoint2.y);
        if (!this.IsChamberDimensionValid(topLeft, botRight))
            return;
        const pair = new ChamberPair(topLeft, botRight);
        this.chambers.push(pair);
    }
    IntersectionPoint() {
        return new _utility_point__WEBPACK_IMPORTED_MODULE_2__["Point"](this.divisionPoint1.x, this.divisionPoint3.y);
    }
    CreateWalls() {
        this.CreateVeritcalWall();
        this.CreateHorizontalWall();
    }
    CreateVeritcalWall() {
        let foundNonEmptyTile = false;
        for (let y = this.divisionPoint1.y; y <= this.divisionPoint2.y; y++) {
            const coordinate = new _utility_point__WEBPACK_IMPORTED_MODULE_2__["Point"](this.divisionPoint1.x, y);
            if (this.IsTileEmpty(coordinate))
                this.maze.SetTileState(coordinate, _tile__WEBPACK_IMPORTED_MODULE_3__["State"].blocked);
            else {
                foundNonEmptyTile = true;
                this.CreateDoorAt(coordinate);
            }
        }
        if (!foundNonEmptyTile) {
            let coordinate;
            do {
                const y = _utility_eMath__WEBPACK_IMPORTED_MODULE_1__["Emath"].GetRandomInt(this.divisionPoint1.y, this.divisionPoint2.y + 1);
                coordinate = new _utility_point__WEBPACK_IMPORTED_MODULE_2__["Point"](this.divisionPoint1.x, y);
            } while (coordinate.Equals(this.IntersectionPoint()));
            this.CreateDoorAt(coordinate);
        }
    }
    CreateHorizontalWall() {
        let foundNonEmptyTile = false;
        for (let x = this.divisionPoint3.x; x <= this.divisionPoint4.x; x++) {
            const coordinate = new _utility_point__WEBPACK_IMPORTED_MODULE_2__["Point"](x, this.divisionPoint3.y);
            if (this.IsTileEmpty(coordinate))
                this.maze.SetTileState(coordinate, _tile__WEBPACK_IMPORTED_MODULE_3__["State"].blocked);
            else {
                foundNonEmptyTile = true;
                this.CreateDoorAt(coordinate);
            }
        }
        if (!foundNonEmptyTile) {
            let coordinate;
            do {
                const x = _utility_eMath__WEBPACK_IMPORTED_MODULE_1__["Emath"].GetRandomInt(this.divisionPoint3.x, this.divisionPoint4.x + 1);
                coordinate = new _utility_point__WEBPACK_IMPORTED_MODULE_2__["Point"](x, this.divisionPoint3.y);
            } while (coordinate.Equals(this.IntersectionPoint()));
            this.CreateDoorAt(coordinate);
        }
    }
    GenerateDivisionPoints(start, end) {
        do {
            this.divisionPoint1 = this.RandomPointOnXBetween(start, end);
            this.divisionPoint2 = new _utility_point__WEBPACK_IMPORTED_MODULE_2__["Point"](this.divisionPoint1.x, end.y);
        } while (this.IsInDoors(this.divisionPoint2) &&
            this.IsInDoors(this.divisionPoint1));
        do {
            this.divisionPoint3 = this.RandomPointOnYBetween(start, end);
            this.divisionPoint4 = new _utility_point__WEBPACK_IMPORTED_MODULE_2__["Point"](end.x, this.divisionPoint3.y);
        } while (this.IsInDoors(this.divisionPoint3) &&
            this.IsInDoors(this.divisionPoint4));
    }
    IsInDoors(p) {
        for (const point of this.doors) {
            if (point.Equals(p))
                return true;
        }
        return false;
    }
    RandomPointOnXBetween(start, end) {
        let x = _utility_eMath__WEBPACK_IMPORTED_MODULE_1__["Emath"].GetRandomInt(start.x, end.x + 1);
        return new _utility_point__WEBPACK_IMPORTED_MODULE_2__["Point"](x, start.y);
    }
    RandomPointOnYBetween(start, end) {
        let y = _utility_eMath__WEBPACK_IMPORTED_MODULE_1__["Emath"].GetRandomInt(start.y, end.y + 1);
        return new _utility_point__WEBPACK_IMPORTED_MODULE_2__["Point"](start.x, y);
    }
    IsTileEmpty(coordinate) {
        return (!this.maze.startTile.coordinate.Equals(coordinate) && !this.maze.goalTile.coordinate.Equals(coordinate));
    }
    IsChamberDimensionValid(topLeft, botRight) {
        const width = Math.abs(topLeft.x - botRight.x) - 1;
        const length = Math.abs(topLeft.y - botRight.y) - 1;
        return (width > this.minWidth && length > this.minLength);
    }
    CreateDoorAt(coordinate) {
        this.maze.SetTileState(coordinate, _tile__WEBPACK_IMPORTED_MODULE_3__["State"].open);
        this.doors.push(coordinate);
    }
}
class ChamberPair {
    constructor(topLeft, botRight) {
        this.topLeft = topLeft;
        this.botRight = botRight;
    }
}


/***/ }),

/***/ "./src/app/models/maze.ts":
/*!********************************!*\
  !*** ./src/app/models/maze.ts ***!
  \********************************/
/*! exports provided: Maze */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Maze", function() { return Maze; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tile */ "./src/app/models/tile.ts");
/* harmony import */ var _utility_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility/point */ "./src/app/models/utility/point.ts");



class Maze {
    constructor(width, height) {
        this.maze = [];
        this.width = width;
        this.height = height;
        for (let y = 0; y < this.height; y++)
            for (let x = 0; x < this.width; x++)
                this.maze.push(new _tile__WEBPACK_IMPORTED_MODULE_1__["Tile"](_tile__WEBPACK_IMPORTED_MODULE_1__["State"].open, new _utility_point__WEBPACK_IMPORTED_MODULE_2__["Point"](x, y)));
    }
    static MazeFromString(map) {
        let height = 1;
        let width = 0;
        for (let i = 0; i < map.length; i++) {
            if (map[i] == '\n') {
                width = i;
                break;
            }
        }
        for (let i = 0; i < map.length; i++) {
            if (map[i] == '\n')
                height++;
        }
        let maze = new Maze(width, height);
        let tileIndex = 0;
        for (let i = 0; i < map.length; i++) {
            const char = map[i];
            let x = tileIndex % (maze.width);
            let y = Math.floor(tileIndex / (maze.width));
            let loc = new _utility_point__WEBPACK_IMPORTED_MODULE_2__["Point"](x, y);
            if (char == 'S' || char == 's') {
                maze.start = maze.TileAt(loc);
                tileIndex++;
            }
            else if (char == '+' || char == '-' || char == '|') {
                maze.SetTileState(loc, _tile__WEBPACK_IMPORTED_MODULE_1__["State"].blocked);
                tileIndex++;
            }
            else if (char == 'G' || char == 'g') {
                maze.goal = maze.TileAt(loc);
                tileIndex++;
            }
            else if (char == ' ')
                tileIndex++;
        }
        return maze;
    }
    static CompleteMaze(width, height, startPos, goalPos) {
        let maze = new Maze(width, height);
        maze.start = maze.TileAt(startPos);
        maze.goal = maze.TileAt(goalPos);
        return maze;
    }
    get goalTile() {
        return this._goal;
    }
    get startTile() {
        return this.start;
    }
    get walkerTile() {
        return this.walker;
    }
    get size() {
        return this.width * this.height;
    }
    get tiles() {
        return this.maze;
    }
    ClearBlocks() {
        for (const tile of this.maze) {
            tile.state = _tile__WEBPACK_IMPORTED_MODULE_1__["State"].open;
        }
    }
    Talk() {
        let mazeTxt = '';
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                let index = this.to1D(x, y);
                let tile = this.maze[index];
                if (tile.hasWalker)
                    mazeTxt += 'W';
                else if (tile == this.start)
                    mazeTxt += 'S';
                else if (tile.isGoal)
                    mazeTxt += 'G';
                else if (tile.state == _tile__WEBPACK_IMPORTED_MODULE_1__["State"].open)
                    mazeTxt += ' ';
                else if (tile.state == _tile__WEBPACK_IMPORTED_MODULE_1__["State"].blocked)
                    mazeTxt += 'x';
            }
            mazeTxt += '\n';
        }
        return `${mazeTxt}\nwalker at: ${this.walker.coordinate}\ngoal at: ${this.goal.coordinate}\nstart at: ${this.start.coordinate}`;
    }
    ChangeStartPos(pos) {
        if (!pos.Equals(this.goal.coordinate))
            this.start = this.TileAt(pos);
    }
    ChangeGoalPos(pos) {
        if (pos.Equals(this.start.coordinate))
            return;
        this.goal.isGoal = false;
        this.goal = this.TileAt(pos);
    }
    PutWalkerAt(point) {
        this.walker.hasWalker = false;
        let newWalkerTile = this.TileAt(point);
        newWalkerTile.hasWalker = true;
        this.walker = newWalkerTile;
    }
    SetTileState(tileLocation, newState) {
        this.TileAt(tileLocation).state = newState;
    }
    GetTileState(tileLocation) {
        return this.TileAt(tileLocation).state;
    }
    Draw() {
        let mazeTxt = '';
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                let index = this.to1D(x, y);
                let tile = this.maze[index];
                if (tile.hasWalker)
                    mazeTxt += 'W';
                else if (tile == this.start)
                    mazeTxt += 'S';
                else if (tile.isGoal)
                    mazeTxt += 'G';
                else if (tile.state == _tile__WEBPACK_IMPORTED_MODULE_1__["State"].open)
                    mazeTxt += '-';
                else if (tile.state == _tile__WEBPACK_IMPORTED_MODULE_1__["State"].blocked)
                    mazeTxt += 'x';
            }
            mazeTxt += '\n';
        }
        console.log(mazeTxt);
    }
    isInsideMaze(point) {
        return this.pointTo1D(point) < this.size;
    }
    pointTo1D(point) {
        return this.to1D(point.x, point.y);
    }
    to1D(x, y) {
        return y * this.width + x;
    }
    set goal(tile) {
        this._goal = tile;
        this._goal.isGoal = true;
    }
    set start(tile) {
        this._start = tile;
        this.walker = this._start;
    }
    get goal() {
        return this._goal;
    }
    get start() {
        return this._start;
    }
    TileAt(point) {
        if (!this.isInsideMaze(point))
            throw `point ${point} is outside of the maze!`;
        let index = this.to1D(point.x, point.y);
        return this.maze[index];
    }
}


/***/ }),

/***/ "./src/app/models/solvers/backtrack-solver.ts":
/*!****************************************************!*\
  !*** ./src/app/models/solvers/backtrack-solver.ts ***!
  \****************************************************/
/*! exports provided: BacktrackSolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BacktrackSolver", function() { return BacktrackSolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utility_eMath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utility/eMath */ "./src/app/models/utility/eMath.ts");
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tile */ "./src/app/models/tile.ts");
/* harmony import */ var _utility_point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility/point */ "./src/app/models/utility/point.ts");




class BacktrackSolver {
    constructor(game, simulationSpeed) {
        this.game = game;
        this.walker = this.game.walker;
        this.solvingSpeed = simulationSpeed;
        this.noMoreTracks = false;
        this.branchingPointsIndicies = [];
        this.intervalRefrence = null;
    }
    IsNoSolutionFound() {
        return this.noMoreTracks;
    }
    Talk() {
        return this.GetAvailableTilesAround(this.walker.CurPos());
    }
    SolveGame() {
        while (!(this.game.World().walkerPos.Equals(this.game.World().goalPos) || this.noMoreTracks))
            this.SolveAStep();
    }
    SolveInSteps() {
        if (this.intervalRefrence != null)
            return;
        this.intervalRefrence = setInterval(() => {
            if (!this.isPaused) {
                this.game.DoGameStep();
                this.SolveAStep();
            }
            if (this.game.IsGameFinished() || this.noMoreTracks) {
                clearInterval(this.intervalRefrence);
            }
        }, 1000 / this.solvingSpeed);
    }
    SolveAStep() {
        if (this.game.IsGameFinished() || this.noMoreTracks)
            return;
        const availableTiles = this.GetAvailableTilesAround(this.walker.CurPos());
        if (availableTiles.length > 0) {
            if (availableTiles.length > 1)
                this.branchingPointsIndicies.push(this.walker.MoveStack().length - 1); //the index of the branching point
            const loc = availableTiles[_utility_eMath__WEBPACK_IMPORTED_MODULE_1__["Emath"].GetRandomInt(0, availableTiles.length)];
            this.game.MoveWalker(this.walker.DirFromPoint(loc));
        }
        else if (!this.game.IsGameFinished())
            this.BacktrackToBranchingPoint();
    }
    StopSolving() {
        clearInterval(this.intervalRefrence);
    }
    GetIndexedLocations() {
        let indexedLocations = [];
        for (const index of this.branchingPointsIndicies)
            indexedLocations.push(this.walker.MoveStack()[index]);
        return indexedLocations;
    }
    PauseSolving() {
        this.isPaused = true;
    }
    ResumeSolving() {
        this.isPaused = false;
    }
    BacktrackToBranchingPoint() {
        if (this.branchingPointsIndicies.length == 0) {
            this.noMoreTracks = true;
            return;
        }
        let branchingIndex = this.branchingPointsIndicies[this.branchingPointsIndicies.length - 1];
        let moveStack = this.walker.MoveStack();
        let branchingPos = moveStack[branchingIndex];
        //make sure that the current branching point still have branches otherwise remove it
        if (this.GetAvailableTilesAround(branchingPos).length <= 1)
            this.branchingPointsIndicies.pop();
        this.game.PutWalkerAt(branchingPos);
    }
    GetAvailableTilesAround(curPos) {
        let left = new _utility_point__WEBPACK_IMPORTED_MODULE_3__["Point"](curPos.x - 1, curPos.y);
        let right = new _utility_point__WEBPACK_IMPORTED_MODULE_3__["Point"](curPos.x + 1, curPos.y);
        let up = new _utility_point__WEBPACK_IMPORTED_MODULE_3__["Point"](curPos.x, curPos.y - 1);
        let down = new _utility_point__WEBPACK_IMPORTED_MODULE_3__["Point"](curPos.x, curPos.y + 1);
        let availableTiles = [];
        if (this.IsAvailable(left))
            availableTiles.push(left);
        if (this.IsAvailable(right))
            availableTiles.push(right);
        if (this.IsAvailable(up))
            availableTiles.push(up);
        if (this.IsAvailable(down))
            availableTiles.push(down);
        return availableTiles;
    }
    IsAvailable(loc) {
        return (this.game.IsInsideWorld(loc) &&
            this.game.TileState(loc) == _tile__WEBPACK_IMPORTED_MODULE_2__["State"].open &&
            !this.walker.IsVisitedBefore(loc));
    }
}


/***/ }),

/***/ "./src/app/models/tile.ts":
/*!********************************!*\
  !*** ./src/app/models/tile.ts ***!
  \********************************/
/*! exports provided: Tile, State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return Tile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Tile {
    constructor(state, coordinate) {
        this.state = state;
        this._coordinate = coordinate;
        this.hasWalker = false;
        this.isGoal = false;
    }
    set isGoal(val) {
        if (val == true && this.state == State.blocked)
            throw `Can't set tile at ${this.coordinate} to goal because it's blocked`;
        this._isGoal = val;
    }
    get isGoal() {
        return this._isGoal;
    }
    set state(state) {
        if (this._isGoal && state == State.blocked)
            throw `Can't set state of tile ${this.coordinate} to ${State} because it has goal`;
        this._state = state;
    }
    get state() {
        return this._state;
    }
    set hasWalker(val) {
        if (val == true && this.state == State.blocked)
            throw `Can't Put walker at tile ${this.coordinate} because it's blocked`;
        this._hasWalker = val;
    }
    get hasWalker() {
        return this._hasWalker;
    }
    get coordinate() {
        return this._coordinate;
    }
}
var State;
(function (State) {
    State["open"] = "open";
    State["blocked"] = "blocked";
})(State || (State = {}));


/***/ }),

/***/ "./src/app/models/utility/eMath.ts":
/*!*****************************************!*\
  !*** ./src/app/models/utility/eMath.ts ***!
  \*****************************************/
/*! exports provided: Emath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Emath", function() { return Emath; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Emath {
    ///The maximum is exclusive and the minimum is inclusive
    static GetRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}


/***/ }),

/***/ "./src/app/models/utility/point.ts":
/*!*****************************************!*\
  !*** ./src/app/models/utility/point.ts ***!
  \*****************************************/
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `(${this.x},${this.y})`;
    }
    Equals(p) {
        return p.x == this.x && p.y == this.y;
    }
    static TotalDifference(p1, p2) {
        return Math.abs((p1.x + p1.y) - (p2.x + p2.y));
    }
}


/***/ }),

/***/ "./src/app/models/walker.ts":
/*!**********************************!*\
  !*** ./src/app/models/walker.ts ***!
  \**********************************/
/*! exports provided: Walker, Dir */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Walker", function() { return Walker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dir", function() { return Dir; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utility_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility/point */ "./src/app/models/utility/point.ts");


class Walker {
    constructor(start) {
        this.visited = [];
        this.moveStack = [];
        this.curPos = start;
        this.visited.push(start);
        this.moveStack.push(start);
    }
    CurPos() {
        return this.curPos;
    }
    MoveStack() {
        // return  this.moveStack;
        return this.moveStack;
    }
    IsVisitedBefore(loc) {
        for (let index = 0; index < this.VisitedLocations().length; index++) {
            const p = this.VisitedLocations()[index];
            if (p.Equals(loc))
                return true;
        }
        return false;
    }
    VisitedLocations() {
        return this.visited;
    }
    Move(dir) {
        switch (dir) {
            case Dir.right:
                this.MoveXBy(1);
                break;
            case Dir.left:
                this.MoveXBy(-1);
                break;
            case Dir.down:
                this.MoveYBy(1);
                break;
            case Dir.up:
                this.MoveYBy(-1);
                break;
            default:
                break;
        }
    }
    DirFromPoint(point) {
        if (point.x > this.CurPos().x)
            return Dir.right;
        else if (point.x < this.CurPos().x)
            return Dir.left;
        else if (point.y > this.CurPos().y)
            return Dir.down;
        else if (point.y < this.CurPos().y)
            return Dir.up;
        else
            throw `can't determine direction of point ${point} relative to the walker`;
    }
    MoveTo(loc) {
        this.AddToVisited(loc);
        this.moveStack.push(loc);
        this.curPos = loc;
    }
    MoveXBy(d) {
        let p = new _utility_point__WEBPACK_IMPORTED_MODULE_1__["Point"](this.curPos.x + d, this.curPos.y);
        this.MoveTo(p);
    }
    MoveYBy(d) {
        let p = new _utility_point__WEBPACK_IMPORTED_MODULE_1__["Point"](this.curPos.x, this.curPos.y + d);
        this.MoveTo(p);
    }
    AddToVisited(point) {
        if (!this.visited.includes(point))
            this.visited.push(point);
    }
}
var Dir;
(function (Dir) {
    Dir[Dir["right"] = 0] = "right";
    Dir[Dir["left"] = 1] = "left";
    Dir[Dir["up"] = 2] = "up";
    Dir[Dir["down"] = 3] = "down";
})(Dir || (Dir = {}));


/***/ }),

/***/ "./src/app/models/world.ts":
/*!*********************************!*\
  !*** ./src/app/models/world.ts ***!
  \*********************************/
/*! exports provided: World */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "World", function() { return World; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _walker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./walker */ "./src/app/models/walker.ts");
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tile */ "./src/app/models/tile.ts");
/* harmony import */ var _utility_point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility/point */ "./src/app/models/utility/point.ts");




///only 1 per program
///responsible for keeping walker and maze always in SYNC
class World {
    constructor(maze) {
        this.maze = maze;
        this.walker = new _walker__WEBPACK_IMPORTED_MODULE_1__["Walker"](this.maze.startTile.coordinate);
    }
    Talk() {
        return this.maze.Talk();
    }
    Draw() {
        this.maze.Draw();
    }
    MoveWalker(dir) {
        let newPos = this.getPosForDir(dir);
        if (this.isNewPosValid(newPos) && _utility_point__WEBPACK_IMPORTED_MODULE_3__["Point"].TotalDifference(this.walkerPos, newPos) == 1) {
            this.walker.Move(dir);
            this.maze.PutWalkerAt(this.walkerPos);
        }
    }
    PutWalkerAt(loc) {
        if (this.isNewPosValid(loc)) {
            this.maze.PutWalkerAt(loc);
            this.walker.MoveTo(loc);
        }
    }
    TileState(location) {
        return this.maze.GetTileState(location);
    }
    get goalPos() {
        return this.maze.goalTile.coordinate;
    }
    get startPos() {
        return this.maze.startTile.coordinate;
    }
    get walkerPos() {
        return this.walker.CurPos();
    }
    get width() {
        return this.maze.width;
    }
    get height() {
        return this.maze.height;
    }
    Maze() {
        return this.maze;
    }
    isNewPosValid(newPos) {
        return ((newPos.x >= 0 && newPos.x < this.maze.width) &&
            (newPos.y >= 0 && newPos.y < this.maze.height) &&
            this.maze.GetTileState(newPos) != _tile__WEBPACK_IMPORTED_MODULE_2__["State"].blocked);
    }
    getPosForDir(dir) {
        switch (dir) {
            case _walker__WEBPACK_IMPORTED_MODULE_1__["Dir"].right:
                return new _utility_point__WEBPACK_IMPORTED_MODULE_3__["Point"](this.walkerPos.x + 1, this.walkerPos.y);
            case _walker__WEBPACK_IMPORTED_MODULE_1__["Dir"].left:
                return new _utility_point__WEBPACK_IMPORTED_MODULE_3__["Point"](this.walkerPos.x - 1, this.walkerPos.y);
            case _walker__WEBPACK_IMPORTED_MODULE_1__["Dir"].down:
                return new _utility_point__WEBPACK_IMPORTED_MODULE_3__["Point"](this.walkerPos.x, this.walkerPos.y + 1);
            case _walker__WEBPACK_IMPORTED_MODULE_1__["Dir"].up:
                return new _utility_point__WEBPACK_IMPORTED_MODULE_3__["Point"](this.walkerPos.x, this.walkerPos.y - 1);
            default:
                break;
        }
    }
}


/***/ }),

/***/ "./src/app/services/game-meta.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/game-meta.service.ts ***!
  \***********************************************/
/*! exports provided: GameMetaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameMetaService", function() { return GameMetaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/tile */ "./src/app/models/tile.ts");
/* harmony import */ var _models_maze__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../models/maze */ "./src/app/models/maze.ts");
/* harmony import */ var _models_utility_point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../models/utility/point */ "./src/app/models/utility/point.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





let GameMetaService = 
///responsible for graphics configurations and game initialization data
class GameMetaService {
    constructor() {
        this._tileSize = 20;
        this._simulationSpeed = 10;
        this._mazeWidth = 25;
        this._mazeHeight = 25;
        this._startPos = new _models_utility_point__WEBPACK_IMPORTED_MODULE_3__["Point"](0, 0);
        this._goalPos = new _models_utility_point__WEBPACK_IMPORTED_MODULE_3__["Point"](1, 1);
        this._isSimulationRunning = false;
        this._isSimulationStopped = false;
        this._isSimulationStarted = false;
        this._maze = _models_maze__WEBPACK_IMPORTED_MODULE_2__["Maze"].CompleteMaze(this.mazeWidth, this.mazeHeight, this.startPos, this.goalPos);
    }
    StartSimulation() {
        this._isSimulationRunning = true;
        this._isSimulationStarted = true;
    }
    ResumeSimulation() {
        this._isSimulationRunning = true;
    }
    PauseSimulation() {
        this._isSimulationRunning = false;
    }
    StopSimulation() {
        this._isSimulationStopped = true;
    }
    Reset() {
        this._isSimulationRunning = false;
        this._isSimulationStopped = false;
        this._isSimulationStarted = false;
        this._maze = _models_maze__WEBPACK_IMPORTED_MODULE_2__["Maze"].CompleteMaze(this.mazeWidth, this.mazeHeight, this.startPos, this.goalPos);
    }
    ResetMaze() {
        if (!this._isSimulationRunning)
            this._maze.ClearBlocks();
    }
    RandomFillMaze() {
        for (const tile of this._maze.tiles) {
            if (tile.coordinate.Equals(this.startPos) || tile.coordinate.Equals(this.goalPos))
                continue;
            const rnd = Math.random();
            if (rnd > 0.5)
                this.maze.SetTileState(tile.coordinate, _models_tile__WEBPACK_IMPORTED_MODULE_1__["State"].blocked);
            else
                this.maze.SetTileState(tile.coordinate, _models_tile__WEBPACK_IMPORTED_MODULE_1__["State"].open);
        }
    }
    SetMazeDimensions(width, height) {
        this._mazeWidth = width;
        this._mazeHeight = height;
        this.UpdateMaze();
    }
    UpdateMaze() {
        if (this.maze.width != this.mazeWidth ||
            this.maze.height != this.mazeHeight)
            this._maze = _models_maze__WEBPACK_IMPORTED_MODULE_2__["Maze"].CompleteMaze(this.mazeWidth, this.mazeHeight, this.startPos, this.goalPos);
    }
    get tileSize() { return this._tileSize; }
    get simulationSpeed() { return this._simulationSpeed; }
    get mazeWidth() { return this._mazeWidth; }
    get mazeHeight() { return this._mazeHeight; }
    get startPos() { return this._startPos; }
    get goalPos() { return this._goalPos; }
    get isSimulationRunning() { return this._isSimulationRunning; }
    get isSimulationStopped() { return this._isSimulationStopped; }
    get isSimulationStarted() { return this._isSimulationStarted; }
    get maze() { return this._maze; }
    set tileSize(val) { this._tileSize = val; }
    set simulationSpeed(val) { this._simulationSpeed = val; }
    set mazeWidth(val) {
        this._mazeWidth = val;
        this.UpdateMaze();
    }
    set mazeHeight(val) {
        this._mazeHeight = val;
        this.UpdateMaze();
    }
    set startPos(val) {
        if (this.startPos.Equals(this.goalPos))
            return;
        this._startPos = val;
        this._maze.ChangeStartPos(val);
    }
    set goalPos(val) {
        if (this.startPos.Equals(this.goalPos))
            return;
        this._goalPos = val;
        this._maze.ChangeGoalPos(val);
    }
};
GameMetaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: 'root'
    })
    ///responsible for graphics configurations and game initialization data
], GameMetaService);



/***/ }),

/***/ "./src/app/services/game.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/game.service.ts ***!
  \******************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_walker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/walker */ "./src/app/models/walker.ts");
/* harmony import */ var _models_maze__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../models/maze */ "./src/app/models/maze.ts");
/* harmony import */ var _models_world__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../models/world */ "./src/app/models/world.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





let GameService = 
///serves as the MAIN entry point of game models and sets the game rules
class GameService {
    constructor() {
        this.map3 = `+--+--+--+--+--+--+--+--+--+--+
      |              |     |  |
+--+  +  +--+--+--+  +  +  +  +
|     |     |     |  |  |  |  |
+  +--+  +--+  +  +  +--+  +  +
|     |  |     |  |  |     |  |
+--+  +  +  +--+  +  +  +--+  +
|     |     |     |     |     |
+  +--+--+--+--+  +--+--+--+  +
|           |                 |
+--+--+--+  +  +  +--+--+--+  +
|     |  |     |  |     |     |
+--+  +  +--+--+  +  +  +--+  +
|     |      s    |  |        |
+  +--+--+  +--+--+  +--+--+--+
|           |        |  |     |
+--+--+--+--+  +--+--+  +  +  +
|           |     |        |  |
+  +--+--+  +  +  +--+  +--+  +
|        |     |        |    |G
+--+--+--+--+--+--+--+--+--+--+`;
        this.map = `+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
S   |     |                 |     |  |              |       |
+  +--+  +  +  +--+--+--+  +  +  +  +  +  +--+--+  +  +--+  +
|  |     |  |        |        |     |  |  |     |  |     |  |
+  +  +--+--+--+--+  +  +--+--+--+--+  +--+  +  +  +--+  +  +
|     |     |        |  |              |     |  |  |     |  |
+  +--+  +  +  +--+--+  +  +--+--+--+--+  +--+  +  +  +--+  +
|  |     |     |        |     |     |     |     |     |     |
+  +  +--+--+--+  +--+--+--+  +  +  +  +--+--+  +  +--+  +--+
|     |           |        |     |  |  |  |     |  |     |  |
+--+--+  +--+--+  +--+--+  +--+--+  +  +  +  +--+  +  +--+  +
|     |     |  |  |     |  |        |     |        |  |     |
+  +--+  +  +  +  +  +  +  +  +--+--+  +--+--+--+--+  +  +--+
|        |     |     |  |  |        |     |     |  |     |  |
+  +--+--+--+--+--+--+  +  +--+--+  +  +  +--+  +  +--+--+  +
|  |     |     |        |     |     |  |        |  |        |
+  +  +--+  +  +--+  +  +--+  +  +--+  +--+--+--+  +  +--+  +
|  |        |        |        |     |     |        |     |  |
+  +--+--+--+  +--+--+--+--+--+--+  +  +  +  +--+--+--+  +  +
|      |        |     |     |       |  |     |        |  |  |
+--+  +--+--+--+  +  +  +  +--+--+--+--+  +--+  +  +  +  +  +
|     |        |  |     |                       |  |     |  |
+  +--+  +--+  +--+  +--+--+--+--+--+--+  +--+--+--+--+--+  +
|     |     |     |  |     |        |     |  |              |
+  +--+--+  +--+  +  +  +--+  +  +  +  +--+  +  +--+--+--+--+
|        |     |  |  |        |  |  |  |                    |
+--+--+  +--+  +  +  +--+--+--+  +--+  +--+--+--+--+--+--+  +
|     |  |     |  |     |     |     |  |              |     |
+--+  +  +  +--+  +  +  +  +--+--+  +  +  +--+  +--+  +  +--+
|     |  |     |     |  |        |     |     |     |  |  |  |
+  +--+  +--+  +--+--+  +--+--+  +--+--+  +  +--+  +  +  +  +
|     |        |  |     |     |  |     |  |  |     |     |  |
+--+  +--+  +--+  +  +--+  +  +  +  +  +  +  +  +--+--+--+  +
|  |        |     |        |     |  |  |  |  |     |        |
+  +--+  +--+  +  +--+--+--+  +--+  +  +--+  +--+--+  +--+--+
|        |     |  |           |     |  |     |     |  |     |
+--+--+--+--+--+  +  +  +--+--+  +--+  +  +--+  +  +  +  +--+
|              |  |  |  |        |  |     |     |     |     |
+  +  +--+--+  +  +--+  +  +--+--+  +--+--+  +  +--+--+  +  +
|  |        |           |                    |           |  G
+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+`;
        this.map1 = `+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
s     |     |     |                       |  |           |        |        |           |     |              |              |           |  |     |     |
+--+  +  +  +  +  +--+  +--+--+  +--+--+  +  +  +--+  +  +--+  +  +  +  +  +  +--+--+  +  +--+  +--+--+--+  +  +--+--+--+  +--+--+--+  +  +  +  +  +  +
|     |  |     |  |     |     |        |        |     |     |  |     |  |  |     |     |  |     |           |     |        |        |  |     |     |  |
+  +--+--+--+--+  +  +--+--+  +--+  +--+--+--+--+--+--+  +  +  +--+--+  +  +--+--+  +--+  +  +--+  +--+--+--+--+  +  +  +--+  +--+  +  +--+--+  +  +--+
|     |        |     |     |     |        |     |     |  |        |     |           |     |     |  |        |     |  |        |     |     |     |     |
+--+  +  +--+  +  +--+  +  +  +  +--+--+  +  +  +  +  +--+--+--+  +--+--+--+--+--+--+  +  +--+  +  +  +--+  +  +--+  +--+--+--+  +--+--+  +  +--+--+  +
|     |     |        |  |  |  |     |     |  |  |  |  |     |     |     |     |  |     |     |  |     |     |  |     |        |  |     |  |  |        |
+  +--+--+  +--+--+  +  +  +--+--+  +  +  +--+  +  +  +  +  +--+--+  +  +  +  +  +  +--+--+  +  +--+--+--+--+  +--+--+--+--+  +  +  +  +  +  +  +--+--+
|  |        |     |     |  |     |     |     |     |  |  |  |        |     |  |  |  |     |     |           |     |  |     |     |  |     |  |  |     |
+  +--+  +--+--+  +--+--+  +  +  +--+--+--+  +--+  +  +  +  +  +--+--+--+--+  +  +  +  +  +--+  +  +--+  +  +--+  +  +  +  +--+  +  +--+--+  +  +  +  +
|     |        |  |     |     |     |     |        |  |  |  |  |           |     |     |  |     |  |     |     |  |     |        |           |  |  |  |
+--+  +  +--+  +  +  +  +--+--+--+  +  +  +--+--+--+  +  +  +  +--+--+--+  +  +--+--+--+--+  +--+  +  +--+--+  +  +--+--+--+--+--+--+--+  +--+  +  +  +
|  |     |     |  |  |        |     |  |     |        |  |     |                          |  |     |        |  |  |     |  |                 |     |  |
+  +--+  +  +--+  +  +--+--+  +  +--+--+--+  +  +--+--+  +--+--+  +--+--+--+  +--+--+--+  +  +  +--+--+--+  +--+  +  +  +  +  +--+--+--+--+--+--+--+  +
|  |     |  |     |     |  |  |           |  |           |        |                    |     |           |  |     |  |        |              |     |  |
+  +--+--+  +  +--+--+  +  +  +--+--+--+  +  +--+--+--+  +  +--+--+  +--+--+--+--+  +  +--+--+--+--+--+--+  +  +--+  +--+--+--+  +--+--+--+  +  +  +  +
|        |     |     |  |     |     |     |           |  |  |        |        |     |     |     |     |        |     |     |  |        |  |     |     |
+--+--+  +  +--+  +  +  +--+--+  +--+  +--+--+--+--+  +--+  +  +--+--+--+--+  +--+--+--+  +  +  +  +  +  +  +--+  +--+  +  +  +--+--+  +  +--+--+--+  +
|     |           |  |  |     |        |           |        |  |           |  |           |  |  |  |     |  |        |  |  |     |     |        |     |
+  +  +--+  +--+--+--+  +  +  +--+--+--+  +--+--+--+--+--+--+  +  +--+--+  +  +  +--+  +--+--+  +  +--+--+--+  +--+  +  +  +--+  +  +--+  +--+--+  +--+
|  |     |              |  |        |     |                 |     |        |  |     |  |     |  |           |  |  |     |  |  |     |              |  |
+  +--+  +--+--+  +--+--+  +--+  +  +  +--+  +--+--+--+--+  +--+--+  +--+--+  +--+  +--+  +  +  +--+--+--+  +  +  +--+--+  +  +--+  +  +--+--+--+--+  +
|     |  |        |     |     |  |     |     |                    |     |        |        |        |     |     |        |  |        |  |     |        |
+--+  +  +  +--+--+--+  +--+--+  +--+--+  +--+--+--+--+--+  +--+  +--+  +  +--+--+--+--+  +--+--+  +--+  +--+--+--+--+  +  +--+--+--+  +  +  +  +--+--+
|  |  |     |                       |  |     |           |     |        |                 |     |     |        |     |  |  |  |     |     |  |  |     |
+  +  +--+--+  +  +--+--+--+--+  +  +  +--+--+  +--+--+  +--+  +--+--+--+--+--+--+--+--+--+  +  +--+  +--+  +  +  +  +  +  +  +  +  +--+--+  +  +  +--+
|     |     |  |     |           |     |              |     |        |        |              |     |     |  |     |  |  |  |     |        |     |     |
+--+--+--+  +--+--+  +  +--+--+--+--+  +  +--+  +--+  +--+  +  +--+  +--+--+  +  +--+--+--+  +--+  +--+  +--+--+--+  +  +  +--+--+  +--+  +  +  +--+  +
|     |              |     |     |     |  |     |  |     |     |  |     |  |  |           |  |  |                    |  |  |        |  |     |        |
+  +--+  +--+--+--+--+--+  +  +--+  +--+  +  +--+  +--+  +--+--+  +--+  +  +  +--+--+--+  +  +  +  +--+--+--+  +  +  +  +  +  +--+--+  +--+--+--+--+--+
|        |                 |              |     |        |     |        |                 |  |  |  |     |     |  |     |  |        |  |           |  |
+--+--+--+  +--+--+--+--+--+--+--+  +--+--+--+  +--+--+--+  +--+--+--+--+--+--+--+--+--+--+  +  +  +  +  +--+--+  +--+--+  +--+--+  +  +--+--+--+  +  +
|  |        |              |        |           |        |     |     |     |              |  |  |  |  |  |     |  |        |     |  |  |        |     |
+  +  +--+--+  +--+--+  +  +  +--+--+  +  +--+--+  +--+  +--+  +  +  +  +  +  +--+--+--+  +  +  +--+  +  +  +  +--+  +--+--+  +--+  +  +  +  +  +  +  +
|     |     |        |  |     |        |        |     |     |     |  |  |  |  |        |     |  |     |     |  |     |     |           |  |  |  |  |  |
+--+--+  +  +--+--+  +  +--+--+  +--+--+--+--+--+--+  +--+  +--+--+  +  +--+  +  +  +  +--+  +  +  +--+--+--+  +  +  +--+  +--+--+  +--+--+  +  +--+  +
|  |     |           |     |     |                 |     |  |     |  |  |     |  |  |     |  |     |        |     |     |  |           |     |  |     |
+  +  +--+--+--+--+--+--+--+  +--+--+--+--+--+--+  +--+--+  +  +--+  +  +  +--+  +  +--+  +  +  +--+  +--+  +--+  +  +  +  +  +--+  +  +  +--+--+  +--+
|        |              |     |        |     |     |        |     |  |     |     |     |  |     |        |        |  |     |  |     |  |  |     |     |
+--+--+--+  +--+--+--+  +  +--+  +  +  +  +  +--+  +  +--+  +  +  +  +--+--+  +--+--+  +  +--+--+--+--+--+--+--+--+  +--+--+  +  +--+--+  +  +  +--+  +
|     |     |     |     |        |  |  |  |        |  |     |  |        |        |     |                    |     |  |        |           |  |  |     |
+  +  +  +--+  +  +  +--+  +--+--+  +--+  +--+--+--+  +--+--+  +--+--+  +  +--+--+  +--+--+--+--+--+--+--+  +--+  +  +--+--+--+--+--+--+--+  +  +  +--+
|  |     |     |  |  |     |  |        |              |        |     |  |  |     |        |              |     |  |  |     |  |     |     |  |  |     |
+  +--+--+  +--+  +  +  +--+  +  +--+  +--+--+  +  +--+  +--+--+  +--+  +  +  +  +--+--+  +  +--+--+--+  +--+  +  +  +  +  +  +  +--+  +--+  +  +  +--+
|     |     |     |  |  |     |     |     |     |  |     |     |        |     |        |  |           |        |  |  |  |  |  |     |        |  |     |
+--+  +  +--+  +--+  +  +  +--+--+  +--+  +  +--+  +  +  +  +--+--+--+--+--+--+--+--+--+  +--+  +--+--+--+--+--+  +  +--+  +  +--+  +--+--+  +  +--+  +
|  |     |  |  |  |     |           |  |     |  |  |  |  |     |        |     |  |        |  |           |     |  |        |     |     |     |  |     |
+  +--+--+  +  +  +--+  +--+--+--+--+  +--+--+  +  +  +  +  +  +--+--+  +  +  +  +  +--+--+  +  +  +--+  +  +  +  +--+--+--+  +  +--+  +--+--+  +  +--+
|  |              |     |           |              |  |  |  |     |     |  |  |  |        |  |  |     |  |  |  |        |     |  |        |     |     |
+  +  +--+--+--+--+--+--+  +  +--+  +--+--+--+  +--+--+  +--+--+  +  +--+  +  +  +--+--+  +  +--+--+  +  +  +--+--+--+  +  +--+  +--+--+  +  +--+  +--+
|     |        |        |  |     |           |     |     |        |     |  |              |     |     |  |              |     |  |        |     |     |
+--+  +  +--+  +  +--+  +  +--+--+--+--+--+  +  +--+  +  +  +--+--+  +  +  +--+--+--+--+  +--+  +  +--+  +--+  +--+  +--+--+  +  +  +--+  +--+  +--+  +
|  |  |  |  |     |     |  |     |        |  |  |     |  |  |     |  |  |        |     |  |  |  |     |  |     |     |        |        |     |  |     |
+  +  +  +  +--+--+  +--+--+  +  +  +--+  +  +--+  +--+  +  +--+  +  +  +  +--+  +--+  +  +  +  +--+--+  +  +--+  +--+--+--+--+--+  +--+--+  +  +  +--+
|     |  |                    |  |  |  |  |        |     |     |     |  |     |        |     |           |  |     |     |        |        |     |     |
+  +--+  +--+--+--+--+--+--+--+  +  +  +  +--+--+  +  +--+--+  +--+--+  +--+  +--+--+--+--+--+--+--+--+--+--+  +--+  +  +--+--+  +--+--+  +--+  +--+  +
|        |                       |  |     |        |           |     |  |  |     |              |     |     |     |  |  |        |        |     |     |
+--+--+--+  +--+--+  +--+--+--+--+  +--+--+--+  +--+--+--+--+--+  +  +  +  +--+  +  +--+--+--+  +  +  +--+  +--+  +  +  +  +  +--+--+--+--+--+  +--+  +
|           |     |        |     |     |        |           |     |     |        |     |     |     |     |  |        |     |  |              |     |  |
+  +--+--+--+  +  +--+--+  +--+  +--+  +  +--+  +  +--+--+  +  +--+--+--+  +--+--+--+  +  +--+--+  +--+  +  +  +--+--+--+--+  +  +--+--+--+  +--+  +  +
|        |     |              |  |     |  |     |     |  |  |           |     |     |  |     |  |     |     |  |        |  |  |  |        |        |  |
+--+--+  +  +--+--+--+--+--+  +  +  +  +  +  +--+--+  +  +  +--+  +  +  +  +--+  +  +  +--+  +  +  +--+--+--+  +  +--+  +  +  +  +  +--+  +  +--+--+  +
|        |     |           |     |  |  |  |  |     |  |  |  |     |  |  |     |  |     |        |     |     |        |  |     |  |  |     |  |        |
+  +--+--+--+  +  +--+  +  +--+--+--+  +  +  +  +  +  +  +  +--+--+--+  +--+  +  +--+--+  +--+--+--+  +  +--+--+  +--+  +  +--+--+  +  +--+  +  +--+--+
|  |     |     |     |  |     |     |  |  |     |     |  |  |        |  |  |  |        |     |     |  |     |     |     |  |        |  |     |        |
+  +  +  +  +--+--+  +--+--+  +  +  +  +  +--+--+--+--+  +  +  +--+  +  +  +  +--+  +--+--+  +  +--+  +--+  +  +--+  +--+  +  +--+  +  +  +--+  +--+  +
|  |  |  |        |  |     |  |  |     |     |  |     |     |  |           |  |  |  |        |  |     |        |     |     |     |  |     |  |     |  |
+  +  +  +--+--+  +  +  +  +  +  +--+--+--+  +  +  +--+--+--+  +--+--+--+  +  +  +  +  +--+--+  +  +--+  +--+--+  +--+  +--+--+--+  +--+--+  +  +  +  +
|     |  |           |  |  |  |  |           |           |     |     |     |     |     |     |        |        |     |  |     |           |     |  |  |
+--+--+  +  +--+--+--+  +  +  +  +  +--+--+  +  +--+  +--+  +--+  +  +--+--+--+  +--+--+  +--+--+  +  +--+--+--+--+  +  +  +  +  +--+--+  +--+--+  +--+
|  |     |     |        |     |     |        |     |     |        |     |     |           |        |           |  |  |     |  |  |        |     |     |
+  +  +--+--+--+  +--+--+--+--+--+  +  +--+--+--+--+--+  +--+  +--+  +  +  +--+--+  +--+--+  +--+--+  +--+--+  +  +  +--+--+  +  +--+--+--+  +  +--+  +
|           |     |           |     |        |     |  |     |  |     |        |  |        |     |  |     |  |        |  |     |     |     |  |        |
+--+--+--+  +  +--+  +--+--+  +  +--+--+--+  +  +  +  +--+  +  +--+--+--+--+  +  +--+  +--+--+  +  +--+  +  +--+  +--+  +  +--+--+  +--+  +  +--+  +--+
|        |  |  |        |  |     |           |  |  |        |  |        |     |     |     |     |        |     |     |  |  |        |     |     |     |
+  +--+  +--+  +--+--+  +  +--+--+  +--+--+--+  +  +  +--+--+  +  +--+  +  +--+--+  +--+  +  +--+--+--+  +--+  +  +  +  +  +  +--+--+  +--+--+  +--+  +
|  |  |     |           |  |     |              |  |  |     |  |     |  |     |     |     |  |        |     |  |  |  |     |           |     |     |  |
+  +  +--+  +--+  +  +--+  +  +--+--+  +--+--+--+  +  +  +  +  +--+  +  +  +  +  +  +  +  +  +  +--+  +--+--+  +--+  +--+--+  +--+  +--+  +  +--+  +--+
|  |     |  |     |        |     |     |        |     |  |  |  |  |  |  |  |     |  |  |  |  |     |  |        |     |     |  |     |     |  |  |     |
+  +  +  +  +  +--+--+--+  +--+  +  +--+  +  +--+--+--+--+  +  +  +  +  +  +--+--+  +  +  +  +--+--+  +  +--+--+  +--+  +  +  +--+--+  +  +  +  +--+  +
|  |  |  |     |     |     |     |        |        |     |  |  |     |  |  |     |     |              |  |     |        |           |  |  |        |  |
+  +--+  +--+--+--+  +  +--+  +--+--+--+--+--+--+  +--+  +  +  +  +--+  +  +  +--+--+--+  +--+--+--+--+  +--+  +--+--+--+--+  +--+  +  +--+--+  +--+  +
|  |           |     |  |     |     |     |     |     |  |  |  |     |  |           |  |  |     |     |     |                 |     |        |        |
+  +  +  +--+  +  +--+  +  +--+  +  +  +  +--+  +--+  +  +  +  +--+  +--+  +  +--+  +  +  +--+  +--+  +--+  +--+  +--+--+--+--+  +--+--+--+  +--+--+--+
|  |  |     |     |  |  |        |     |        |           |        |     |     |     |        |        |  |  |     |     |     |        |        |  |
+  +  +--+  +--+--+  +  +  +--+--+  +--+--+--+--+--+--+  +--+--+--+--+  +--+--+--+--+  +--+--+--+  +--+  +  +  +--+  +  +  +  +--+--+--+  +--+--+  +  +
|     |     |     |  |     |        |                    |     |        |                 |     |  |     |  |        |  |  |  |        |        |  |  |
+--+--+  +--+--+  +  +  +--+  +--+--+  +--+--+--+--+--+--+  +  +  +--+--+  +--+--+  +--+--+  +  +  +  +--+  +--+  +  +  +  +  +  +  +  +--+--+  +  +  +
|        |        |  |  |  |        |                 |     |     |        |        |     |  |     |  |  |        |     |  |     |  |           |  |  |
+  +--+--+  +--+--+  +  +  +--+--+  +--+--+--+--+--+  +  +  +  +--+  +--+--+--+  +--+--+  +  +--+--+  +  +--+--+--+--+--+  +--+--+  +--+--+--+  +  +  +
|     |     |     |  |  |        |     |           |  |  |  |     |  |        |  |           |        |        |        |  |     |  |  |        |  |  |
+--+  +  +--+  +--+  +  +--+  +  +--+  +  +  +--+  +  +  +--+--+  +  +  +--+  +--+  +  +--+--+  +--+--+--+--+  +  +--+  +  +--+  +  +  +  +--+--+  +  +
|     |     |  |     |        |  |     |  |  |     |  |  |        |        |        |     |     |        |     |     |     |     |  |  |        |     |
+  +--+  +  +  +  +--+--+--+--+  +  +  +--+  +  +--+  +  +  +--+--+  +--+--+--+--+--+--+  +  +--+  +--+  +  +--+--+  +--+--+  +  +  +  +--+  +  +  +--+
|     |  |  |     |              |  |        |  |     |  |  |        |                    |  |     |  |  |     |     |  |     |  |     |     |  |     |
+--+  +  +--+--+  +--+--+--+--+--+  +--+--+--+  +  +--+  +  +  +--+--+  +--+--+--+--+--+--+  +  +--+  +  +  +  +  +--+  +  +--+--+--+--+  +--+  +--+  +
|     |     |  |        |           |           |     |  |  |     |  |        |           |  |        |     |  |     |           |        |  |        |
+  +--+--+  +  +--+--+  +--+  +--+--+  +--+  +--+--+  +--+  +--+  +  +--+  +  +  +--+--+  +  +--+--+  +--+--+--+--+  +--+  +--+  +  +--+--+  +--+  +--+
|                    |        |        |           |        |     |        |     |        |           |                    |     |              |     g
+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+`;
        this.Intialize();
    }
    Intialize() {
        //to be deleted
        this.world = new _models_world__WEBPACK_IMPORTED_MODULE_3__["World"](_models_maze__WEBPACK_IMPORTED_MODULE_2__["Maze"].MazeFromString(this.map));
    }
    SetMaze(maze) {
        this.world = new _models_world__WEBPACK_IMPORTED_MODULE_3__["World"](maze);
    }
    Reset(newMaze) {
        this.world = new _models_world__WEBPACK_IMPORTED_MODULE_3__["World"](newMaze);
        this.reachedGoal = false;
    }
    Talk() {
        return this.world.Talk();
    }
    IsInsideWorld(loc) {
        return loc.x >= 0 && loc.x < this.mazeWidth &&
            loc.y >= 0 && loc.y < this.mazeHeight;
    }
    TileState(location) {
        return this.world.TileState(location);
    }
    IsGameFinished() {
        return this.reachedGoal;
    }
    ///only responds to arrowKeys
    MoveWalkerByKbd(event) {
        if (this.IsGameFinished())
            return;
        if (event.key === 'ArrowUp')
            this.world.MoveWalker(_models_walker__WEBPACK_IMPORTED_MODULE_1__["Dir"].up);
        else if (event.key === 'ArrowDown')
            this.world.MoveWalker(_models_walker__WEBPACK_IMPORTED_MODULE_1__["Dir"].down);
        else if (event.key === 'ArrowLeft')
            this.world.MoveWalker(_models_walker__WEBPACK_IMPORTED_MODULE_1__["Dir"].left);
        else if (event.key === 'ArrowRight')
            this.world.MoveWalker(_models_walker__WEBPACK_IMPORTED_MODULE_1__["Dir"].right);
    }
    MoveWalker(dir) {
        if (!this.IsGameFinished())
            this.world.MoveWalker(dir);
    }
    PutWalkerAt(loc) {
        if (!this.IsGameFinished())
            this.world.PutWalkerAt(loc);
    }
    DoGameStep() {
        this.UpdateModel();
        this.Draw();
    }
    World() {
        return this.world;
    }
    get mazeWidth() {
        return this.world.width;
    }
    ;
    get mazeHeight() {
        return this.world.height;
    }
    ;
    get walker() {
        return this.world.walker;
    }
    UpdateModel() {
        if (this.world.walkerPos.Equals(this.world.goalPos))
            this.reachedGoal = true;
    }
    //draw on 'something' and expose it to the hosting component to render it
    Draw() {
        console.clear();
        this.world.Draw();
        if (this.IsGameFinished())
            console.log('you have reached your goal');
    }
    MsFromFPS(fps) {
        return 1000 / fps;
    }
};
GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: 'root'
    })
    ///serves as the MAIN entry point of game models and sets the game rules
], GameService);



/***/ }),

/***/ "./src/app/ui/control-panel/control-panel.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/ui/control-panel/control-panel.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvY29udHJvbC1wYW5lbC9LOlxcd29ya3Nob3BcXHdlYnNpdGVzXFxQYXRoLWZpbmRlci9zcmNcXGFwcFxcdWlcXGNvbnRyb2wtcGFuZWxcXGNvbnRyb2wtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL2NvbnRyb2wtcGFuZWwvY29udHJvbC1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC91aS9jb250cm9sLXBhbmVsL2NvbnRyb2wtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/ui/control-panel/control-panel.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/ui/control-panel/control-panel.component.ts ***!
  \*************************************************************/
/*! exports provided: ControlPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlPanelComponent", function() { return ControlPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_game_meta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/game-meta.service */ "./src/app/services/game-meta.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ControlPanelComponent = 
///responsible for setting graphical options of the world
class ControlPanelComponent {
    constructor(meta) {
        this.meta = meta;
        this.width = meta.mazeWidth;
        this.height = meta.mazeHeight;
    }
    ngOnInit() {
    }
    CreateMaze() {
        this.meta.SetMazeDimensions(parseInt(this.width), parseInt(this.height));
    }
};
ControlPanelComponent.ctorParameters = () => [
    { type: _services_game_meta_service__WEBPACK_IMPORTED_MODULE_1__["GameMetaService"] }
];
ControlPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ui-control-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./control-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/control-panel/control-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./control-panel.component.scss */ "./src/app/ui/control-panel/control-panel.component.scss")).default]
    })
    ///responsible for setting graphical options of the world
], ControlPanelComponent);



/***/ }),

/***/ "./src/app/ui/home-page/home-page.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/ui/home-page/home-page.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ui/home-page/home-page.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui/home-page/home-page.component.ts ***!
  \*****************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_maze_filler_recursive_filler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/maze filler/recursive-filler */ "./src/app/models/maze filler/recursive-filler.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _services_game_meta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/game-meta.service */ "./src/app/services/game-meta.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





let HomePageComponent = class HomePageComponent {
    constructor(meta, game) {
        this.meta = meta;
        this.game = game;
        this.isSimulationPaused = false;
    }
    ngOnInit() {
        var r = new _models_maze_filler_recursive_filler__WEBPACK_IMPORTED_MODULE_1__["RecursiveFiller"](this.meta.maze);
        r.ConstructInSteps(this.game);
    }
    Reset() {
        this.game.Reset(this.meta.maze);
    }
    IsSimulationPaused() {
        return this.isSimulationPaused;
    }
    Pause() {
        this.isSimulationPaused = true;
    }
    Resume() {
        this.isSimulationPaused = false;
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _services_game_meta_service__WEBPACK_IMPORTED_MODULE_3__["GameMetaService"] },
    { type: _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }
];
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-home-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/home-page/home-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page.component.scss */ "./src/app/ui/home-page/home-page.component.scss")).default]
    })
], HomePageComponent);



/***/ }),

/***/ "./src/app/ui/maze-construction/maze-construction.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/ui/maze-construction/maze-construction.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  padding: 15px 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvbWF6ZS1jb25zdHJ1Y3Rpb24vSzpcXHdvcmtzaG9wXFx3ZWJzaXRlc1xcUGF0aC1maW5kZXIvc3JjXFxhcHBcXHVpXFxtYXplLWNvbnN0cnVjdGlvblxcbWF6ZS1jb25zdHJ1Y3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL21hemUtY29uc3RydWN0aW9uL21hemUtY29uc3RydWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3VpL21hemUtY29uc3RydWN0aW9uL21hemUtY29uc3RydWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgcGFkZGluZzogMTVweCAyMXB4O1xyXG59XHJcblxyXG4iLCI6aG9zdCB7XG4gIHBhZGRpbmc6IDE1cHggMjFweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/ui/maze-construction/maze-construction.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ui/maze-construction/maze-construction.component.ts ***!
  \*********************************************************************/
/*! exports provided: MazeConstructionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MazeConstructionComponent", function() { return MazeConstructionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_game_meta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/game-meta.service */ "./src/app/services/game-meta.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let MazeConstructionComponent = class MazeConstructionComponent {
    constructor(meta) {
        this.meta = meta;
    }
    ngOnInit() {
    }
};
MazeConstructionComponent.ctorParameters = () => [
    { type: _services_game_meta_service__WEBPACK_IMPORTED_MODULE_1__["GameMetaService"] }
];
MazeConstructionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ui-maze-construction',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./maze-construction.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/maze-construction/maze-construction.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./maze-construction.component.scss */ "./src/app/ui/maze-construction/maze-construction.component.scss")).default]
    })
], MazeConstructionComponent);



/***/ }),

/***/ "./src/app/ui/navbar/navbar.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/navbar/navbar.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid {\n  background-color: #34495e;\n}\n.container-fluid .btn-group {\n  padding: 0.3rem 1.2rem;\n}\n.start-button {\n  transition: 0.5s;\n  padding: 10px 23px;\n  color: #ffffff;\n  background-color: #48c9b0;\n  border-color: #48c9b0;\n  border-radius: 5px;\n  font-weight: 400;\n}\n.start-button:hover {\n  background-color: #6dd4c0;\n}\nh1 {\n  padding-top: 2%;\n  color: #fefafb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvbmF2YmFyL0s6XFx3b3Jrc2hvcFxcd2Vic2l0ZXNcXFBhdGgtZmluZGVyL3NyY1xcYXBwXFx1aVxcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFRSx5QkFBQTtBQ0RGO0FER0U7RUFDRSxzQkFBQTtBQ0RKO0FES0E7RUFFRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDSEY7QURJRTtFQUNFLHlCQUFBO0FDRko7QURLQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC91aS9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250YWluZXItZmx1aWRcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDQ5NWU7XHJcblxyXG4gIC5idG4tZ3JvdXB7XHJcbiAgICBwYWRkaW5nOiAuM3JlbSAxLjJyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uc3RhcnQtYnV0dG9uXHJcbntcclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgcGFkZGluZzogMTBweCAyM3B4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OGM5YjA7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNDhjOWIwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gICY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmRkNGMwO1xyXG4gIH1cclxufVxyXG5oMXtcclxuICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgY29sb3I6ICNmZWZhZmI7XHJcbn1cclxuIiwiLmNvbnRhaW5lci1mbHVpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDQ5NWU7XG59XG4uY29udGFpbmVyLWZsdWlkIC5idG4tZ3JvdXAge1xuICBwYWRkaW5nOiAwLjNyZW0gMS4ycmVtO1xufVxuXG4uc3RhcnQtYnV0dG9uIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgcGFkZGluZzogMTBweCAyM3B4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4YzliMDtcbiAgYm9yZGVyLWNvbG9yOiAjNDhjOWIwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uc3RhcnQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZkZDRjMDtcbn1cblxuaDEge1xuICBwYWRkaW5nLXRvcDogMiU7XG4gIGNvbG9yOiAjZmVmYWZiO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/ui/navbar/navbar.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/navbar/navbar.component.ts ***!
  \***********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_game_meta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/game-meta.service */ "./src/app/services/game-meta.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let NavbarComponent = class NavbarComponent {
    constructor(meta) {
        this.meta = meta;
        this.resetSimulation = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.pauseSimulation = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.resumeSimulation = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ngOnInit() {
    }
    ResetSimulation() {
        this.resetSimulation.emit();
        this.meta.Reset();
    }
    PauseSimulation() {
        this.pauseSimulation.emit();
        this.meta.PauseSimulation();
    }
    StartSimulation() {
        this.meta.StartSimulation();
        this.resumeSimulation.emit();
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _services_game_meta_service__WEBPACK_IMPORTED_MODULE_1__["GameMetaService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], NavbarComponent.prototype, "resetSimulation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], NavbarComponent.prototype, "pauseSimulation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], NavbarComponent.prototype, "resumeSimulation", void 0);
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ui-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/ui/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/ui/world-generator/world-generator.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/ui/world-generator/world-generator.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL3dvcmxkLWdlbmVyYXRvci93b3JsZC1nZW5lcmF0b3IuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ui/world-generator/world-generator.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ui/world-generator/world-generator.component.ts ***!
  \*****************************************************************/
/*! exports provided: WorldGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldGeneratorComponent", function() { return WorldGeneratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _services_game_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/game-meta.service */ "./src/app/services/game-meta.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let WorldGeneratorComponent = class WorldGeneratorComponent {
    constructor(meta, game) {
        this.meta = meta;
        this.game = game;
        this.isLeftMouseBtnClicked = false;
    }
    ngOnInit() {
    }
    DraggingMode() {
        this.isLeftMouseBtnClicked = false;
    }
    ToggleTileState(event) {
        event.target.dispatchEvent(new Event('toggleTile', { bubbles: true }));
    }
    BlockTile(event) {
        if (this.isLeftMouseBtnClicked)
            event.target.dispatchEvent(new Event('blockTile', { bubbles: true }));
    }
    ngOnDestroy() {
        this.game.SetMaze(this.meta.maze);
    }
};
WorldGeneratorComponent.ctorParameters = () => [
    { type: _services_game_meta_service__WEBPACK_IMPORTED_MODULE_2__["GameMetaService"] },
    { type: _services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }
];
WorldGeneratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ui-world-generator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./world-generator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/world-generator/world-generator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./world-generator.component.scss */ "./src/app/ui/world-generator/world-generator.component.scss")).default]
    })
], WorldGeneratorComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! K:\workshop\websites\Path-finder\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);