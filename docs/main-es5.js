function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/backtrack-logic/backtrack-logic.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/backtrack-logic/backtrack-logic.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBacktrackLogicBacktrackLogicComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<gfx-world [world]=\"game.World()\" [solver]=\"solver\"></gfx-world>\r\n<h1 *ngIf=\"solver.IsNoSolutionFound()\">This Maze Has No Available Path to the Goal</h1>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/graphics/mark/mark.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/graphics/mark/mark.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGraphicsMarkMarkComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [class]=\"GetCssClass()\" ></div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/graphics/maze/maze.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/graphics/maze/maze.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGraphicsMazeMazeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngFor=\"let h of mazeHeight();let y = index\">\r\n  <div class=\"d-flex\">\r\n    <ng-container *ngFor=\"let w of mazeWidth();let x = index\">\r\n      <gfx-tile [tile]=\"GetTileAt(x,y)\" [ngStyle]=\"TileDimensionsStyle()\">\r\n        <gfx-mark [mark]=GetMarkAt(x,y)></gfx-mark>\r\n      </gfx-tile>\r\n    </ng-container>\r\n  </div>\r\n</ng-container>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/graphics/tile/tile.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/graphics/tile/tile.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGraphicsTileTileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\r\n  [class]=\"GetCssClass()\"\r\n  (blockTile)=\"Block()\"\r\n  (toggleTile)=\"ToggleState()\"\r\n  [draggable]=\"IsDraggable()\"\r\n  (dragstart)=\"Drag($event)\"\r\n  (dragover)=\"SetAllowDrop($event)\"\r\n  (drop)=\"AcceptDrop($event)\">\r\n  <div *ngIf=\"tile.hasWalker\" class=\"walker\"></div>\r\n  <ng-content *ngIf=\"tile.state!='blocked' && !tile.hasWalker\" select=\"gfx-mark\"></ng-content>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/graphics/world/world.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/graphics/world/world.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGraphicsWorldWorldComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<gfx-maze [maze]=\"world.Maze()\" [TileMarks]=\"GetIndexedLocations()\"></gfx-maze>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/control-panel/control-panel.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/control-panel/control-panel.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiControlPanelControlPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row d-flex\">\r\n  <div class=\"col\">\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Width\" [(ngModel)]=\"width\">\r\n  </div>\r\n  <div class=\"col\">\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Height\" [(ngModel)]=\"height\">\r\n  </div>\r\n  <div class=\"col\">\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"CreateMaze()\">Create</button>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/home-page/home-page.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/home-page/home-page.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiHomePageHomePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ui-navbar (resetSimulation)=\"Reset()\" (pauseSimulation)=\"Pause()\" (resumeSimulation)=\"Resume()\"></ui-navbar>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <!-- <div class=\"col-sm\">\r\n    </div> -->\r\n    <div class=\"col-12-sm text-center\" style=\"margin: auto;\">\r\n      <ui-world-generator *ngIf=\"!meta.isSimulationStarted\" class=\"d-flex justify-content-center\" ></ui-world-generator>\r\n      <app-backtrack-logic *ngIf=\"meta.isSimulationStarted\" [pauseSolving]=\"IsSimulationPaused()\" class=\"d-flex justify-content-center\"></app-backtrack-logic>\r\n      <p style=\"text-align: left;\" class=\"mt-5\">\r\n        1- Left click on the map to generate add or remove tiles.\r\n        <br>\r\n        2- drag and drop the goal icon to where you want (must be open tile)\r\n        <br>\r\n        3- start the backtrack algorithm\r\n        <br>\r\n        Note: more options can be found in the header\r\n      </p>\r\n    </div>\r\n    <!-- <div class=\"col-sm\">\r\n    </div> -->\r\n  </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/maze-construction/maze-construction.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/maze-construction/maze-construction.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiMazeConstructionMazeConstructionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"simple-dropdown\">\r\n  <button class=\"simple-btn\">\r\n    Maze ▼\r\n  </button>\r\n\r\n  <div class=\"simple-dropdown-content\">\r\n    <a class=\"simple-dropdown-item\"  (click)=\"meta.ResetMaze()\">Clear</a>\r\n    <a class=\"simple-dropdown-item\"  (click)=\"meta.RandomFillMaze()\">Random Filling</a>\r\n    <a class=\"simple-dropdown-item\" >Recursive Division (coming soon..)</a>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/navbar/navbar.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/navbar/navbar.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid mb-4\">\r\n  <div class=\"row d-flex\">\r\n    <div class=\"col-2 \">\r\n      <h1 style=\"padding-top: 15px;\">Maze warrior</h1>\r\n    </div>\r\n    <div class=\"col-8 d-flex\">\r\n      <div class=\"simple-dropdown\">\r\n        <button class=\"simple-btn\">\r\n          Algorithims ▼\r\n        </button>\r\n\r\n        <div class=\"simple-dropdown-content\">\r\n          <a class=\"simple-dropdown-item\" href=\"#\">Backtrack</a>\r\n          <a class=\"simple-dropdown-item\" href=\"#\">Greedy (coming soon..)</a>\r\n          <a class=\"simple-dropdown-item\" href=\"#\">Djikstra (coming soon..)</a>\r\n        </div>\r\n      </div>\r\n      <ui-maze-construction></ui-maze-construction>\r\n      <button class=\"simple-btn\" (click)=\"StartSimulation()\"><span class=\"start-button\">Start</span></button>\r\n      <button class=\"simple-btn\" (click)=\"PauseSimulation()\">Pause</button>\r\n      <button class=\"simple-btn\" (click)=\"ResetSimulation()\">Reset</button>\r\n      <a\r\n        title=\"See project in github\"\r\n        href=\"https://github.com/xEyad/maze_warrior\"\r\n        target=\"_blank\"\r\n        class=\"simple-btn\"\r\n        style=\"margin-top: auto;\r\n        margin-bottom: auto;\"\r\n      >\r\n        Source code\r\n     </a>\r\n    </div>\r\n    <ui-control-panel class=\"col-2\"></ui-control-panel>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/world-generator/world-generator.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/world-generator/world-generator.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiWorldGeneratorWorldGeneratorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<gfx-maze [maze]=\"meta.maze\"\r\n (mousemove)=\"BlockTile($event)\"\r\n (mousedown)=\"isLeftMouseBtnClicked = true\"\r\n (mouseup)=\"isLeftMouseBtnClicked = false\"\r\n (click)=\"ToggleTileState($event)\"\r\n (dragstart)=\"DraggingMode()\"\r\n ></gfx-maze>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ui_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ui/home-page/home-page.component */
    "./src/app/ui/home-page/home-page.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: 'home',
      component: _ui_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"]
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: '/home'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Path-finder';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_game_meta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/game-meta.service */
    "./src/app/services/game-meta.service.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _backtrack_logic_backtrack_logic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./backtrack-logic/backtrack-logic.component */
    "./src/app/backtrack-logic/backtrack-logic.component.ts");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/game.service */
    "./src/app/services/game.service.ts");
    /* harmony import */


    var _graphics_tile_tile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./graphics/tile/tile.component */
    "./src/app/graphics/tile/tile.component.ts");
    /* harmony import */


    var _graphics_mark_mark_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./graphics/mark/mark.component */
    "./src/app/graphics/mark/mark.component.ts");
    /* harmony import */


    var _graphics_world_world_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./graphics/world/world.component */
    "./src/app/graphics/world/world.component.ts");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _ui_control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./ui/control-panel/control-panel.component */
    "./src/app/ui/control-panel/control-panel.component.ts");
    /* harmony import */


    var _ui_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./ui/home-page/home-page.component */
    "./src/app/ui/home-page/home-page.component.ts");
    /* harmony import */


    var _ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./ui/navbar/navbar.component */
    "./src/app/ui/navbar/navbar.component.ts");
    /* harmony import */


    var _ui_world_generator_world_generator_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./ui/world-generator/world-generator.component */
    "./src/app/ui/world-generator/world-generator.component.ts");
    /* harmony import */


    var _graphics_maze_maze_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./graphics/maze/maze.component */
    "./src/app/graphics/maze/maze.component.ts");
    /* harmony import */


    var _ui_maze_construction_maze_construction_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./ui/maze-construction/maze-construction.component */
    "./src/app/ui/maze-construction/maze-construction.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _backtrack_logic_backtrack_logic_component__WEBPACK_IMPORTED_MODULE_7__["BacktrackLogicComponent"], _graphics_tile_tile_component__WEBPACK_IMPORTED_MODULE_9__["TileComponent"], _graphics_mark_mark_component__WEBPACK_IMPORTED_MODULE_10__["MarkComponent"], _graphics_world_world_component__WEBPACK_IMPORTED_MODULE_11__["WorldComponent"], _ui_control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_13__["ControlPanelComponent"], _ui_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_14__["HomePageComponent"], _ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"], _ui_world_generator_world_generator_component__WEBPACK_IMPORTED_MODULE_16__["WorldGeneratorComponent"], _graphics_maze_maze_component__WEBPACK_IMPORTED_MODULE_17__["MazeComponent"], _ui_maze_construction_maze_construction_component__WEBPACK_IMPORTED_MODULE_18__["MazeConstructionComponent"]],
      imports: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["MDBBootstrapModule"].forRoot(), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      providers: [_services_game_service__WEBPACK_IMPORTED_MODULE_8__["GameService"], _services_game_meta_service__WEBPACK_IMPORTED_MODULE_4__["GameMetaService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/backtrack-logic/backtrack-logic.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/backtrack-logic/backtrack-logic.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBacktrackLogicBacktrackLogicComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3RyYWNrLWxvZ2ljL006XFx3ZWJzaXRlc1xcUGF0aC1maW5kZXIvc3JjXFxhcHBcXGJhY2t0cmFjay1sb2dpY1xcYmFja3RyYWNrLWxvZ2ljLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9iYWNrdHJhY2stbG9naWMvYmFja3RyYWNrLWxvZ2ljLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYmFja3RyYWNrLWxvZ2ljL2JhY2t0cmFjay1sb2dpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIiwiaDEge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/backtrack-logic/backtrack-logic.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/backtrack-logic/backtrack-logic.component.ts ***!
    \**************************************************************/

  /*! exports provided: BacktrackLogicComponent */

  /***/
  function srcAppBacktrackLogicBacktrackLogicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BacktrackLogicComponent", function () {
      return BacktrackLogicComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_game_meta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/game-meta.service */
    "./src/app/services/game-meta.service.ts");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/game.service */
    "./src/app/services/game.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_solvers_backtrack_solver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/solvers/backtrack-solver */
    "./src/app/models/solvers/backtrack-solver.ts");

    var BacktrackLogicComponent =
    /*#__PURE__*/
    function () {
      function BacktrackLogicComponent(game, meta) {
        _classCallCheck(this, BacktrackLogicComponent);

        this.game = game;
        this.meta = meta;
        this.solver = new _models_solvers_backtrack_solver__WEBPACK_IMPORTED_MODULE_4__["BacktrackSolver"](game, meta.simulationSpeed);
        this.solver.SolveInSteps();
      }

      _createClass(BacktrackLogicComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          this.pauseSolving ? this.solver.PauseSolving() : this.solver.ResumeSolving();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.solver.StopSolving();
        }
      }]);

      return BacktrackLogicComponent;
    }();

    BacktrackLogicComponent.ctorParameters = function () {
      return [{
        type: _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]
      }, {
        type: _services_game_meta_service__WEBPACK_IMPORTED_MODULE_1__["GameMetaService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], BacktrackLogicComponent.prototype, "pauseSolving", void 0);
    BacktrackLogicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-backtrack-logic',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./backtrack-logic.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/backtrack-logic/backtrack-logic.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./backtrack-logic.component.scss */
      "./src/app/backtrack-logic/backtrack-logic.component.scss")).default]
    })], BacktrackLogicComponent);
    /***/
  },

  /***/
  "./src/app/graphics/mark/mark.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/graphics/mark/mark.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGraphicsMarkMarkComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@-webkit-keyframes indexATile {\n  0% {\n    transform: scale(0.3);\n    background-color: #ffa8a8;\n  }\n  50% {\n    transform: scale(1.2);\n    background-color: #ffa8a8;\n  }\n  100% {\n    transform: scale(1);\n    background-color: #ffa8a8;\n  }\n}\n@keyframes indexATile {\n  0% {\n    transform: scale(0.3);\n    background-color: #ffa8a8;\n  }\n  50% {\n    transform: scale(1.2);\n    background-color: #ffa8a8;\n  }\n  100% {\n    transform: scale(1);\n    background-color: #ffa8a8;\n  }\n}\n:host {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-self: center;\n  justify-self: center;\n  height: 100%;\n  width: 100%;\n}\n:host div.startPos {\n  align-self: center;\n  justify-self: center;\n  height: 80%;\n  width: 80%;\n  border-radius: 50%;\n  border-color: cadetblue;\n  background-image: url('start.png');\n  background-size: cover;\n  background-position: center;\n}\n:host div.indexed {\n  transition: 0.2s;\n  align-self: center;\n  justify-self: center;\n  width: 80%;\n  height: 80%;\n  background-color: #ffa8a8;\n  -webkit-animation-name: indexATile;\n          animation-name: indexATile;\n  -webkit-animation-duration: 0.4s;\n          animation-duration: 0.4s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JhcGhpY3MvbWFyay9NOlxcd2Vic2l0ZXNcXFBhdGgtZmluZGVyL3NyY1xcYXBwXFxncmFwaGljc1xcbWFya1xcbWFyay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ3JhcGhpY3MvbWFyay9tYXJrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0U7SUFDRSxxQkFBQTtJQUNBLHlCQUpTO0VDSVg7RURFQTtJQUNFLHFCQUFBO0lBQ0EseUJBUlM7RUNRWDtFREVBO0lBQ0UsbUJBQUE7SUFDQSx5QkFaUztFQ1lYO0FBQ0Y7QURaQTtFQUNFO0lBQ0UscUJBQUE7SUFDQSx5QkFKUztFQ0lYO0VERUE7SUFDRSxxQkFBQTtJQUNBLHlCQVJTO0VDUVg7RURFQTtJQUNFLG1CQUFBO0lBQ0EseUJBWlM7RUNZWDtBQUNGO0FER0E7RUFFRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0ZGO0FER0U7RUFFRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDRko7QURJRTtFQUVFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBNUNTO0VBNkNULGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9ncmFwaGljcy9tYXJrL21hcmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkaW5kZXhDb2xvcjogI2ZmYThhODtcclxuQGtleWZyYW1lcyBpbmRleEFUaWxlIHtcclxuICAwJSAgIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjMpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGluZGV4Q29sb3I7XHJcbiAgfVxyXG4gIDUwJSAge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGluZGV4Q29sb3I7XHJcbiAgfVxyXG4gIDEwMCUgIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRpbmRleENvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3Rcclxue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGl2LnN0YXJ0UG9zXHJcbiAge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3N0YXJ0LnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB9XHJcbiAgZGl2LmluZGV4ZWRcclxuICB7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRpbmRleENvbG9yO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGluZGV4QVRpbGU7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgfVxyXG59XHJcbiIsIkBrZXlmcmFtZXMgaW5kZXhBVGlsZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYThhODtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhOGE4O1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYThhODtcbiAgfVxufVxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgZGl2LnN0YXJ0UG9zIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgaGVpZ2h0OiA4MCU7XG4gIHdpZHRoOiA4MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLWNvbG9yOiBjYWRldGJsdWU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zdGFydC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbjpob3N0IGRpdi5pbmRleGVkIHtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmE4YTg7XG4gIGFuaW1hdGlvbi1uYW1lOiBpbmRleEFUaWxlO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/graphics/mark/mark.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/graphics/mark/mark.component.ts ***!
    \*************************************************/

  /*! exports provided: MarkComponent */

  /***/
  function srcAppGraphicsMarkMarkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkComponent", function () {
      return MarkComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _models_TileMark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../models/TileMark */
    "./src/app/models/TileMark.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MarkComponent =
    /*#__PURE__*/
    function () {
      function MarkComponent() {
        _classCallCheck(this, MarkComponent);

        this.mark = _models_TileMark__WEBPACK_IMPORTED_MODULE_1__["Mark"].none;
      }

      _createClass(MarkComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "GetCssClass",
        value: function GetCssClass() {
          if (_models_TileMark__WEBPACK_IMPORTED_MODULE_1__["Mark"].start == this.mark) return "startPos";
          if (_models_TileMark__WEBPACK_IMPORTED_MODULE_1__["Mark"].indexed == this.mark) return "indexed";
          return "";
        }
      }]);

      return MarkComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], MarkComponent.prototype, "mark", void 0);
    MarkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'gfx-mark',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mark.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/graphics/mark/mark.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mark.component.scss */
      "./src/app/graphics/mark/mark.component.scss")).default]
    })], MarkComponent);
    /***/
  },

  /***/
  "./src/app/graphics/maze/maze.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/graphics/maze/maze.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGraphicsMazeMazeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyYXBoaWNzL21hemUvbWF6ZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/graphics/maze/maze.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/graphics/maze/maze.component.ts ***!
    \*************************************************/

  /*! exports provided: MazeComponent */

  /***/
  function srcAppGraphicsMazeMazeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MazeComponent", function () {
      return MazeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_game_meta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/game-meta.service */
    "./src/app/services/game-meta.service.ts");
    /* harmony import */


    var _models_TileMark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../models/TileMark */
    "./src/app/models/TileMark.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MazeComponent =
    /*#__PURE__*/
    function () {
      function MazeComponent(meta) {
        _classCallCheck(this, MazeComponent);

        this.meta = meta;
        if (this.TileMarks == undefined) this.TileMarks = [];
      }

      _createClass(MazeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.widthArr = Array(this.maze.width).fill(0);
          this.heightArr = Array(this.maze.height).fill(0);
        }
      }, {
        key: "mazeHeight",
        value: function mazeHeight() {
          if (this.heightArr.length == this.maze.height) return this.heightArr;
          this.heightArr = Array(this.maze.height).fill(0);
          return this.heightArr;
        }
      }, {
        key: "mazeWidth",
        value: function mazeWidth() {
          if (this.widthArr.length == this.maze.width) return this.widthArr;
          this.widthArr = Array(this.maze.width).fill(0);
          return this.widthArr;
        }
      }, {
        key: "GetTileAt",
        value: function GetTileAt(x, y) {
          return this.maze.tiles[this.maze.to1D(x, y)];
        }
      }, {
        key: "GetMarkAt",
        value: function GetMarkAt(x, y) {
          if (this.TileMarks.length == 0) return _models_TileMark__WEBPACK_IMPORTED_MODULE_2__["Mark"].none;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.TileMarks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var tileMark = _step.value;
              if (tileMark.location.Equals(this.GetTileAt(x, y).coordinate)) return tileMark.type;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }, {
        key: "TileDimensionsStyle",
        value: function TileDimensionsStyle() {
          return {
            'width': this.meta.tileSize.toString() + "px",
            'height': this.meta.tileSize.toString() + "px"
          };
        }
      }]);

      return MazeComponent;
    }();

    MazeComponent.ctorParameters = function () {
      return [{
        type: _services_game_meta_service__WEBPACK_IMPORTED_MODULE_1__["GameMetaService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], MazeComponent.prototype, "maze", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], MazeComponent.prototype, "TileMarks", void 0);
    MazeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'gfx-maze',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./maze.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/graphics/maze/maze.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./maze.component.scss */
      "./src/app/graphics/maze/maze.component.scss")).default]
    })], MazeComponent);
    /***/
  },

  /***/
  "./src/app/graphics/tile/tile.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/graphics/tile/tile.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGraphicsTileTileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@-webkit-keyframes blockTile {\n  0% {\n    transform: scale(0.3);\n    background-color: #0c3547;\n  }\n  50% {\n    transform: scale(1.2);\n    background-color: #0c3547;\n  }\n  100% {\n    transform: scale(1);\n    background-color: #0c3547;\n  }\n}\n@keyframes blockTile {\n  0% {\n    transform: scale(0.3);\n    background-color: #0c3547;\n  }\n  50% {\n    transform: scale(1.2);\n    background-color: #0c3547;\n  }\n  100% {\n    transform: scale(1);\n    background-color: #0c3547;\n  }\n}\n@-webkit-keyframes openTile {\n  0% {\n    transform: scale(1);\n    background-color: #0c3547;\n  }\n  50% {\n    transform: scale(0.5);\n    background-color: #869aa3;\n  }\n  100% {\n    transform: scale(0);\n    background-color: #ffffff;\n  }\n}\n@keyframes openTile {\n  0% {\n    transform: scale(1);\n    background-color: #0c3547;\n  }\n  50% {\n    transform: scale(0.5);\n    background-color: #869aa3;\n  }\n  100% {\n    transform: scale(0);\n    background-color: #ffffff;\n  }\n}\ndiv {\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n.open {\n  border: solid 1px #a9d3f5;\n  -webkit-animation-name: openTile;\n          animation-name: openTile;\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n}\ndiv:hover {\n  opacity: 0.5;\n  color: #34495e94;\n  border: solid 1px #34495e94;\n  background-color: #34495e94;\n}\n.blocked {\n  color: #0c3547;\n  border: solid 1px #0c3547;\n  background-color: #0c3547;\n  -webkit-animation-name: blockTile;\n          animation-name: blockTile;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n.goal {\n  color: #ffa400;\n  border: solid 1px #ffa400;\n  background-image: url('crosshair.png');\n  background-size: cover;\n  background-position: center;\n}\n.walker {\n  height: 80%;\n  width: 80%;\n  background-color: #c20114;\n  align-self: center;\n  justify-self: center;\n  border: solid 1px #c20114;\n}\n.startPos {\n  align-self: center;\n  justify-self: center;\n  border: solid 1px #ffa400;\n  background-image: url('start.png');\n  background-size: 80%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JhcGhpY3MvdGlsZS9NOlxcd2Vic2l0ZXNcXFBhdGgtZmluZGVyL3NyY1xcYXBwXFxncmFwaGljc1xcdGlsZVxcdGlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ3JhcGhpY3MvdGlsZS90aWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0U7SUFDRSxxQkFBQTtJQUNBLHlCQU5PO0VDR1Q7RURLQTtJQUNFLHFCQUFBO0lBQ0EseUJBVk87RUNPVDtFREtBO0lBQ0UsbUJBQUE7SUFDQSx5QkFkTztFQ1dUO0FBQ0Y7QURUQTtFQUNFO0lBQ0UscUJBQUE7SUFDQSx5QkFOTztFQ0dUO0VES0E7SUFDRSxxQkFBQTtJQUNBLHlCQVZPO0VDT1Q7RURLQTtJQUNFLG1CQUFBO0lBQ0EseUJBZE87RUNXVDtBQUNGO0FETUE7RUFDRTtJQUNFLG1CQUFBO0lBQ0EseUJBckJPO0VDaUJUO0VETUE7SUFDRSxxQkFBQTtJQUNBLHlCQUFBO0VDSkY7RURNQTtJQUNFLG1CQUFBO0lBQ0EseUJBQUE7RUNKRjtBQUNGO0FEUkE7RUFDRTtJQUNFLG1CQUFBO0lBQ0EseUJBckJPO0VDaUJUO0VETUE7SUFDRSxxQkFBQTtJQUNBLHlCQUFBO0VDSkY7RURNQTtJQUNFLG1CQUFBO0lBQ0EseUJBQUE7RUNKRjtBQUNGO0FEUUE7RUFFRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDUEY7QURVQTtFQUVFLHlCQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7QUNSRjtBRFVBO0VBR0UsWUFBQTtFQUNBLGdCQUZPO0VBR1AsMkJBQUE7RUFDQSwyQkFKTztBQ0xUO0FEV0E7RUFFRSxjQTNEUztFQTREVCx5QkFBQTtFQUNBLHlCQTdEUztFQThEVCxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBQ1RGO0FEV0E7RUFFRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNURjtBRFdBO0VBRUUsV0FBQTtFQUNBLFVBQUE7RUFDQSx5QkE1RVc7RUE2RVgsa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDVEY7QURZQTtFQUVJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDVkoiLCJmaWxlIjoic3JjL2FwcC9ncmFwaGljcy90aWxlL3RpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYm9yZGVyV2lkdGg6IDFweDtcclxuJG1haW5Db2xvcjpyZ2IoMTIsIDUzLCA3MSk7XHJcbiR3YWxrZXJDb2xvcjojYzIwMTE0O1xyXG5cclxuQGtleWZyYW1lcyBibG9ja1RpbGUge1xyXG4gIDAlICAge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguMyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbkNvbG9yO1xyXG4gIH1cclxuICA1MCUgIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluQ29sb3I7XHJcbiAgfVxyXG4gIDEwMCUgIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluQ29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG9wZW5UaWxlIHtcclxuICAwJSAgIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluQ29sb3I7XHJcbiAgfVxyXG4gIDUwJSAge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg2OWFhMztcclxuICB9XHJcbiAgMTAwJSAge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZGl2XHJcbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG59XHJcbi5vcGVuXHJcbntcclxuICBib3JkZXI6IHNvbGlkICRib3JkZXJXaWR0aCByZ2IoMTY5LCAyMTEsIDI0NSk7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IG9wZW5UaWxlO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4ycztcclxufVxyXG5kaXY6aG92ZXJcclxue1xyXG4gICRjb2xvcjojMzQ0OTVlOTQ7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGNvbG9yOiAkY29sb3I7XHJcbiAgYm9yZGVyOiBzb2xpZCAkYm9yZGVyV2lkdGggJGNvbG9yO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxufVxyXG4uYmxvY2tlZFxyXG57XHJcbiAgY29sb3I6ICRtYWluQ29sb3I7XHJcbiAgYm9yZGVyOiBzb2xpZCAkYm9yZGVyV2lkdGggJG1haW5Db2xvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbkNvbG9yO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBibG9ja1RpbGU7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxufVxyXG4uZ29hbFxyXG57XHJcbiAgY29sb3I6ICNmZmE0MDA7XHJcbiAgYm9yZGVyOiBzb2xpZCAkYm9yZGVyV2lkdGggI2ZmYTQwMDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9jcm9zc2hhaXIucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuLndhbGtlclxyXG57XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2Fsa2VyQ29sb3I7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIGJvcmRlcjogc29saWQgJGJvcmRlcldpZHRoICR3YWxrZXJDb2xvcjtcclxufVxyXG5cclxuLnN0YXJ0UG9zXHJcbiAge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IHNvbGlkICRib3JkZXJXaWR0aCAjZmZhNDAwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvc3RhcnQucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgfVxyXG4iLCJAa2V5ZnJhbWVzIGJsb2NrVGlsZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBjMzU0NztcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMzNTQ3O1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBjMzU0NztcbiAgfVxufVxuQGtleWZyYW1lcyBvcGVuVGlsZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYzM1NDc7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg2OWFhMztcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIH1cbn1cbmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5vcGVuIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2E5ZDNmNTtcbiAgYW5pbWF0aW9uLW5hbWU6IG9wZW5UaWxlO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuMnM7XG59XG5cbmRpdjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY29sb3I6ICMzNDQ5NWU5NDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzM0NDk1ZTk0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0OTVlOTQ7XG59XG5cbi5ibG9ja2VkIHtcbiAgY29sb3I6ICMwYzM1NDc7XG4gIGJvcmRlcjogc29saWQgMXB4ICMwYzM1NDc7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzM1NDc7XG4gIGFuaW1hdGlvbi1uYW1lOiBibG9ja1RpbGU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG59XG5cbi5nb2FsIHtcbiAgY29sb3I6ICNmZmE0MDA7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmZmE0MDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9jcm9zc2hhaXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi53YWxrZXIge1xuICBoZWlnaHQ6IDgwJTtcbiAgd2lkdGg6IDgwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyMDExNDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2MyMDExNDtcbn1cblxuLnN0YXJ0UG9zIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmYTQwMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3N0YXJ0LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiA4MCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/graphics/tile/tile.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/graphics/tile/tile.component.ts ***!
    \*************************************************/

  /*! exports provided: TileComponent */

  /***/
  function srcAppGraphicsTileTileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TileComponent", function () {
      return TileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_game_meta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/game-meta.service */
    "./src/app/services/game-meta.service.ts");
    /* harmony import */


    var _models_tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../models/tile */
    "./src/app/models/tile.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TileComponent =
    /*#__PURE__*/
    function () {
      function TileComponent(meta) {
        _classCallCheck(this, TileComponent);

        this.meta = meta;
      }

      _createClass(TileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "Drag",
        value: function Drag(event) {
          var type;
          if (this.tile.isGoal) type = "goal";else if (this.tile.coordinate.Equals(this.meta.startPos)) type = "start";else {
            event.preventDefault();
            return;
          }
          event.dataTransfer.setData("tileType", type);
        }
      }, {
        key: "GetCssClass",
        value: function GetCssClass() {
          if (this.tile.isGoal) return "goal";else if (this.meta.startPos.Equals(this.tile.coordinate)) return "startPos";else return this.tile.state;
        }
      }, {
        key: "AcceptDrop",
        value: function AcceptDrop(event) {
          event.preventDefault();
          var type = event.dataTransfer.getData("tileType");

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
      }, {
        key: "SetAllowDrop",
        value: function SetAllowDrop(event) {
          if (this.tile.state != _models_tile__WEBPACK_IMPORTED_MODULE_2__["State"].blocked && !(this.tile.isGoal || this.tile.coordinate.Equals(this.meta.startPos))) event.preventDefault();
        }
      }, {
        key: "IsDraggable",
        value: function IsDraggable() {
          return this.tile.isGoal || this.tile.coordinate.Equals(this.meta.startPos);
        }
      }, {
        key: "ToggleState",
        value: function ToggleState() {
          if (this.tile.state == _models_tile__WEBPACK_IMPORTED_MODULE_2__["State"].open) this.Block();else this.Open();
        }
      }, {
        key: "Open",
        value: function Open() {
          this.tile.state = _models_tile__WEBPACK_IMPORTED_MODULE_2__["State"].open;
        }
      }, {
        key: "Block",
        value: function Block() {
          if (!this.tile.isGoal && !this.meta.startPos.Equals(this.tile.coordinate)) this.tile.state = _models_tile__WEBPACK_IMPORTED_MODULE_2__["State"].blocked;
        }
      }]);

      return TileComponent;
    }();

    TileComponent.ctorParameters = function () {
      return [{
        type: _services_game_meta_service__WEBPACK_IMPORTED_MODULE_1__["GameMetaService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], TileComponent.prototype, "tile", void 0);
    TileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'gfx-tile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/graphics/tile/tile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tile.component.scss */
      "./src/app/graphics/tile/tile.component.scss")).default]
    })], TileComponent);
    /***/
  },

  /***/
  "./src/app/graphics/world/world.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/graphics/world/world.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGraphicsWorldWorldComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "gfx-tile {\n  width: 20px;\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JhcGhpY3Mvd29ybGQvTTpcXHdlYnNpdGVzXFxQYXRoLWZpbmRlci9zcmNcXGFwcFxcZ3JhcGhpY3NcXHdvcmxkXFx3b3JsZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ3JhcGhpY3Mvd29ybGQvd29ybGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvZ3JhcGhpY3Mvd29ybGQvd29ybGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZ2Z4LXRpbGV7XHJcbiAgd2lkdGg6MjBweDtcclxuICBoZWlnaHQ6MjBweDtcclxufVxyXG4iLCJnZngtdGlsZSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/graphics/world/world.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/graphics/world/world.component.ts ***!
    \***************************************************/

  /*! exports provided: WorldComponent */

  /***/
  function srcAppGraphicsWorldWorldComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorldComponent", function () {
      return WorldComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _models_TileMark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../models/TileMark */
    "./src/app/models/TileMark.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WorldComponent =
    /*#__PURE__*/
    function () {
      function WorldComponent() {
        _classCallCheck(this, WorldComponent);
      }

      _createClass(WorldComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "GetIndexedLocations",
        value: function GetIndexedLocations() {
          var marksArray = [];
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this.solver.GetIndexedLocations()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var loc = _step2.value;
              marksArray.push(_models_TileMark__WEBPACK_IMPORTED_MODULE_1__["TileMark"].indexed(loc));
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          return marksArray;
        }
      }]);

      return WorldComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], WorldComponent.prototype, "world", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], WorldComponent.prototype, "solver", void 0);
    WorldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'gfx-world',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./world.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/graphics/world/world.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./world.component.scss */
      "./src/app/graphics/world/world.component.scss")).default]
    })], WorldComponent);
    /***/
  },

  /***/
  "./src/app/models/TileMark.ts":
  /*!************************************!*\
    !*** ./src/app/models/TileMark.ts ***!
    \************************************/

  /*! exports provided: TileMark, Mark */

  /***/
  function srcAppModelsTileMarkTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TileMark", function () {
      return TileMark;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Mark", function () {
      return Mark;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var TileMark =
    /*#__PURE__*/
    function () {
      function TileMark(type, location) {
        _classCallCheck(this, TileMark);

        this.type = type;
        this.location = location;
      }

      _createClass(TileMark, null, [{
        key: "indexed",
        value: function indexed(location) {
          return new TileMark(Mark.indexed, location);
        }
      }, {
        key: "none",
        value: function none(location) {
          return new TileMark(Mark.none, location);
        }
      }]);

      return TileMark;
    }();

    var Mark;

    (function (Mark) {
      Mark[Mark["indexed"] = 0] = "indexed";
      Mark[Mark["start"] = 1] = "start";
      Mark[Mark["none"] = 2] = "none";
    })(Mark || (Mark = {}));
    /***/

  },

  /***/
  "./src/app/models/maze filler/recursive-filler.ts":
  /*!********************************************************!*\
    !*** ./src/app/models/maze filler/recursive-filler.ts ***!
    \********************************************************/

  /*! exports provided: RecursiveFiller */

  /***/
  function srcAppModelsMazeFillerRecursiveFillerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecursiveFiller", function () {
      return RecursiveFiller;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _utility_eMath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../utility/eMath */
    "./src/app/models/utility/eMath.ts");
    /* harmony import */


    var _utility_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../utility/point */
    "./src/app/models/utility/point.ts");
    /* harmony import */


    var _tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../tile */
    "./src/app/models/tile.ts");

    var RecursiveFiller =
    /*#__PURE__*/
    function () {
      function RecursiveFiller(maze) {
        _classCallCheck(this, RecursiveFiller);

        this.minWidth = 3;
        this.minLength = 3;
        this.maze = maze;
        this.doors = [];
        this.chambers = [];
        var topLeft = this.maze.tiles[0].coordinate;
        var botRight = this.maze.tiles[this.maze.tiles.length - 1].coordinate;
        var pair = new ChamberPair(topLeft, botRight);
        this.chambers.push(pair);
      }

      _createClass(RecursiveFiller, [{
        key: "ConstructInSteps",
        value: function ConstructInSteps(game) {
          var _this = this;

          var fps = 10;
          var loopRef = setInterval(function () {
            game.DoGameStep();

            _this.DoConstructionStep();

            if (_this.chambers.length == 0) clearInterval(loopRef);
          }, fps / 1000);
        }
      }, {
        key: "Construct",
        value: function Construct() {
          while (this.chambers.length > 0) {
            this.DoConstructionStep();
          }
        }
      }, {
        key: "DoConstructionStep",
        value: function DoConstructionStep() {
          var pair = this.chambers.pop();
          this.GenerateDivisionPoints(pair.topLeft, pair.botRight);
          this.CreateWalls();
          this.AddChambers();
        }
      }, {
        key: "AddChambers",
        value: function AddChambers() {
          this.AddTopLeftWall();
          this.AddTopRighttWall();
          this.AddBotLeftWall();
          this.AddBotRightWall();
        }
      }, {
        key: "AddTopLeftWall",
        value: function AddTopLeftWall() {
          var topLeft = new _utility_point__WEBPACK_IMPORTED_MODULE_2__["Point"](this.divisionPoint3.x, this.divisionPoint1.y);
          var botRight = this.IntersectionPoint();
          if (!this.IsChamberDimensionValid(topLeft, botRight)) return;
          var pair = new ChamberPair(topLeft, botRight);
          this.chambers.push(pair);
        }
      }, {
        key: "AddTopRighttWall",
        value: function AddTopRighttWall() {
          var topLeft = this.divisionPoint1;
          var botRight = this.divisionPoint4;
          if (!this.IsChamberDimensionValid(topLeft, botRight)) return;
          var pair = new ChamberPair(topLeft, botRight);
          this.chambers.push(pair);
        }
      }, {
        key: "AddBotLeftWall",
        value: function AddBotLeftWall() {
          var topLeft = this.divisionPoint3;
          var botRight = this.divisionPoint2;
          if (!this.IsChamberDimensionValid(topLeft, botRight)) return;
          var pair = new ChamberPair(topLeft, botRight);
          this.chambers.push(pair);
        }
      }, {
        key: "AddBotRightWall",
        value: function AddBotRightWall() {
          var topLeft = this.IntersectionPoint();
          var botRight = new _utility_point__WEBPACK_IMPORTED_MODULE_2__["Point"](this.divisionPoint4.x, this.divisionPoint2.y);
          if (!this.IsChamberDimensionValid(topLeft, botRight)) return;
          var pair = new ChamberPair(topLeft, botRight);
          this.chambers.push(pair);
        }
      }, {
        key: "IntersectionPoint",
        value: function IntersectionPoint() {
          return new _utility_point__WEBPACK_IMPORTED_MODULE_2__["Point"](this.divisionPoint1.x, this.divisionPoint3.y);
        }
      }, {
        key: "CreateWalls",
        value: function CreateWalls() {
          this.CreateVeritcalWall();
          this.CreateHorizontalWall();
        }
      }, {
        key: "CreateVeritcalWall",
        value: function CreateVeritcalWall() {
          var foundNonEmptyTile = false;

          for (var y = this.divisionPoint1.y; y <= this.divisionPoint2.y; y++) {
            var coordinate = new _utility_point__WEBPACK_IMPORTED_MODULE_2__["Point"](this.divisionPoint1.x, y);
            if (this.IsTileEmpty(coordinate)) this.maze.SetTileState(coordinate, _tile__WEBPACK_IMPORTED_MODULE_3__["State"].blocked);else {
              foundNonEmptyTile = true;
              this.CreateDoorAt(coordinate);
            }
          }

          if (!foundNonEmptyTile) {
            var _coordinate;

            do {
              var _y = _utility_eMath__WEBPACK_IMPORTED_MODULE_1__["Emath"].GetRandomInt(this.divisionPoint1.y, this.divisionPoint2.y + 1);

              _coordinate = new _utility_point__WEBPACK_IMPORTED_MODULE_2__["Point"](this.divisionPoint1.x, _y);
            } while (_coordinate.Equals(this.IntersectionPoint()));

            this.CreateDoorAt(_coordinate);
          }
        }
      }, {
        key: "CreateHorizontalWall",
        value: function CreateHorizontalWall() {
          var foundNonEmptyTile = false;

          for (var x = this.divisionPoint3.x; x <= this.divisionPoint4.x; x++) {
            var coordinate = new _utility_point__WEBPACK_IMPORTED_MODULE_2__["Point"](x, this.divisionPoint3.y);
            if (this.IsTileEmpty(coordinate)) this.maze.SetTileState(coordinate, _tile__WEBPACK_IMPORTED_MODULE_3__["State"].blocked);else {
              foundNonEmptyTile = true;
              this.CreateDoorAt(coordinate);
            }
          }

          if (!foundNonEmptyTile) {
            var _coordinate2;

            do {
              var _x = _utility_eMath__WEBPACK_IMPORTED_MODULE_1__["Emath"].GetRandomInt(this.divisionPoint3.x, this.divisionPoint4.x + 1);

              _coordinate2 = new _utility_point__WEBPACK_IMPORTED_MODULE_2__["Point"](_x, this.divisionPoint3.y);
            } while (_coordinate2.Equals(this.IntersectionPoint()));

            this.CreateDoorAt(_coordinate2);
          }
        }
      }, {
        key: "GenerateDivisionPoints",
        value: function GenerateDivisionPoints(start, end) {
          do {
            this.divisionPoint1 = this.RandomPointOnXBetween(start, end);
            this.divisionPoint2 = new _utility_point__WEBPACK_IMPORTED_MODULE_2__["Point"](this.divisionPoint1.x, end.y);
          } while (this.IsInDoors(this.divisionPoint2) && this.IsInDoors(this.divisionPoint1));

          do {
            this.divisionPoint3 = this.RandomPointOnYBetween(start, end);
            this.divisionPoint4 = new _utility_point__WEBPACK_IMPORTED_MODULE_2__["Point"](end.x, this.divisionPoint3.y);
          } while (this.IsInDoors(this.divisionPoint3) && this.IsInDoors(this.divisionPoint4));
        }
      }, {
        key: "IsInDoors",
        value: function IsInDoors(p) {
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = this.doors[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var point = _step3.value;
              if (point.Equals(p)) return true;
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          return false;
        }
      }, {
        key: "RandomPointOnXBetween",
        value: function RandomPointOnXBetween(start, end) {
          var x = _utility_eMath__WEBPACK_IMPORTED_MODULE_1__["Emath"].GetRandomInt(start.x, end.x + 1);

          return new _utility_point__WEBPACK_IMPORTED_MODULE_2__["Point"](x, start.y);
        }
      }, {
        key: "RandomPointOnYBetween",
        value: function RandomPointOnYBetween(start, end) {
          var y = _utility_eMath__WEBPACK_IMPORTED_MODULE_1__["Emath"].GetRandomInt(start.y, end.y + 1);

          return new _utility_point__WEBPACK_IMPORTED_MODULE_2__["Point"](start.x, y);
        }
      }, {
        key: "IsTileEmpty",
        value: function IsTileEmpty(coordinate) {
          return !this.maze.startTile.coordinate.Equals(coordinate) && !this.maze.goalTile.coordinate.Equals(coordinate);
        }
      }, {
        key: "IsChamberDimensionValid",
        value: function IsChamberDimensionValid(topLeft, botRight) {
          var width = Math.abs(topLeft.x - botRight.x) - 1;
          var length = Math.abs(topLeft.y - botRight.y) - 1;
          return width > this.minWidth && length > this.minLength;
        }
      }, {
        key: "CreateDoorAt",
        value: function CreateDoorAt(coordinate) {
          this.maze.SetTileState(coordinate, _tile__WEBPACK_IMPORTED_MODULE_3__["State"].open);
          this.doors.push(coordinate);
        }
      }]);

      return RecursiveFiller;
    }();

    var ChamberPair = function ChamberPair(topLeft, botRight) {
      _classCallCheck(this, ChamberPair);

      this.topLeft = topLeft;
      this.botRight = botRight;
    };
    /***/

  },

  /***/
  "./src/app/models/maze.ts":
  /*!********************************!*\
    !*** ./src/app/models/maze.ts ***!
    \********************************/

  /*! exports provided: Maze */

  /***/
  function srcAppModelsMazeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Maze", function () {
      return Maze;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tile */
    "./src/app/models/tile.ts");
    /* harmony import */


    var _utility_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./utility/point */
    "./src/app/models/utility/point.ts");

    var Maze =
    /*#__PURE__*/
    function () {
      function Maze(width, height) {
        _classCallCheck(this, Maze);

        this.maze = [];
        this.width = width;
        this.height = height;

        for (var y = 0; y < this.height; y++) {
          for (var x = 0; x < this.width; x++) {
            this.maze.push(new _tile__WEBPACK_IMPORTED_MODULE_1__["Tile"](_tile__WEBPACK_IMPORTED_MODULE_1__["State"].open, new _utility_point__WEBPACK_IMPORTED_MODULE_2__["Point"](x, y)));
          }
        }
      }

      _createClass(Maze, [{
        key: "ClearBlocks",
        value: function ClearBlocks() {
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = this.maze[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var tile = _step4.value;
              tile.state = _tile__WEBPACK_IMPORTED_MODULE_1__["State"].open;
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
        }
      }, {
        key: "Talk",
        value: function Talk() {
          var mazeTxt = '';

          for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
              var index = this.to1D(x, y);
              var tile = this.maze[index];
              if (tile.hasWalker) mazeTxt += 'W';else if (tile == this.start) mazeTxt += 'S';else if (tile.isGoal) mazeTxt += 'G';else if (tile.state == _tile__WEBPACK_IMPORTED_MODULE_1__["State"].open) mazeTxt += ' ';else if (tile.state == _tile__WEBPACK_IMPORTED_MODULE_1__["State"].blocked) mazeTxt += 'x';
            }

            mazeTxt += '\n';
          }

          return "".concat(mazeTxt, "\nwalker at: ").concat(this.walker.coordinate, "\ngoal at: ").concat(this.goal.coordinate, "\nstart at: ").concat(this.start.coordinate);
        }
      }, {
        key: "ChangeStartPos",
        value: function ChangeStartPos(pos) {
          if (!pos.Equals(this.goal.coordinate)) this.start = this.TileAt(pos);
        }
      }, {
        key: "ChangeGoalPos",
        value: function ChangeGoalPos(pos) {
          if (pos.Equals(this.start.coordinate)) return;
          this.goal.isGoal = false;
          this.goal = this.TileAt(pos);
        }
      }, {
        key: "PutWalkerAt",
        value: function PutWalkerAt(point) {
          this.walker.hasWalker = false;
          var newWalkerTile = this.TileAt(point);
          newWalkerTile.hasWalker = true;
          this.walker = newWalkerTile;
        }
      }, {
        key: "SetTileState",
        value: function SetTileState(tileLocation, newState) {
          this.TileAt(tileLocation).state = newState;
        }
      }, {
        key: "GetTileState",
        value: function GetTileState(tileLocation) {
          return this.TileAt(tileLocation).state;
        }
      }, {
        key: "Draw",
        value: function Draw() {
          var mazeTxt = '';

          for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
              var index = this.to1D(x, y);
              var tile = this.maze[index];
              if (tile.hasWalker) mazeTxt += 'W';else if (tile == this.start) mazeTxt += 'S';else if (tile.isGoal) mazeTxt += 'G';else if (tile.state == _tile__WEBPACK_IMPORTED_MODULE_1__["State"].open) mazeTxt += '-';else if (tile.state == _tile__WEBPACK_IMPORTED_MODULE_1__["State"].blocked) mazeTxt += 'x';
            }

            mazeTxt += '\n';
          }

          console.log(mazeTxt);
        }
      }, {
        key: "isInsideMaze",
        value: function isInsideMaze(point) {
          return this.pointTo1D(point) < this.size;
        }
      }, {
        key: "pointTo1D",
        value: function pointTo1D(point) {
          return this.to1D(point.x, point.y);
        }
      }, {
        key: "to1D",
        value: function to1D(x, y) {
          return y * this.width + x;
        }
      }, {
        key: "TileAt",
        value: function TileAt(point) {
          if (!this.isInsideMaze(point)) throw "point ".concat(point, " is outside of the maze!");
          var index = this.to1D(point.x, point.y);
          return this.maze[index];
        }
      }, {
        key: "goalTile",
        get: function get() {
          return this._goal;
        }
      }, {
        key: "startTile",
        get: function get() {
          return this.start;
        }
      }, {
        key: "walkerTile",
        get: function get() {
          return this.walker;
        }
      }, {
        key: "size",
        get: function get() {
          return this.width * this.height;
        }
      }, {
        key: "tiles",
        get: function get() {
          return this.maze;
        }
      }, {
        key: "goal",
        set: function set(tile) {
          this._goal = tile;
          this._goal.isGoal = true;
        },
        get: function get() {
          return this._goal;
        }
      }, {
        key: "start",
        set: function set(tile) {
          this._start = tile;
          this.walker = this._start;
        },
        get: function get() {
          return this._start;
        }
      }], [{
        key: "MazeFromString",
        value: function MazeFromString(map) {
          var height = 1;
          var width = 0;

          for (var i = 0; i < map.length; i++) {
            if (map[i] == '\n') {
              width = i;
              break;
            }
          }

          for (var _i = 0; _i < map.length; _i++) {
            if (map[_i] == '\n') height++;
          }

          var maze = new Maze(width, height);
          var tileIndex = 0;

          for (var _i2 = 0; _i2 < map.length; _i2++) {
            var char = map[_i2];
            var x = tileIndex % maze.width;
            var y = Math.floor(tileIndex / maze.width);
            var loc = new _utility_point__WEBPACK_IMPORTED_MODULE_2__["Point"](x, y);

            if (char == 'S' || char == 's') {
              maze.start = maze.TileAt(loc);
              tileIndex++;
            } else if (char == '+' || char == '-' || char == '|') {
              maze.SetTileState(loc, _tile__WEBPACK_IMPORTED_MODULE_1__["State"].blocked);
              tileIndex++;
            } else if (char == 'G' || char == 'g') {
              maze.goal = maze.TileAt(loc);
              tileIndex++;
            } else if (char == ' ') tileIndex++;
          }

          return maze;
        }
      }, {
        key: "CompleteMaze",
        value: function CompleteMaze(width, height, startPos, goalPos) {
          var maze = new Maze(width, height);
          maze.start = maze.TileAt(startPos);
          maze.goal = maze.TileAt(goalPos);
          return maze;
        }
      }]);

      return Maze;
    }();
    /***/

  },

  /***/
  "./src/app/models/solvers/backtrack-solver.ts":
  /*!****************************************************!*\
    !*** ./src/app/models/solvers/backtrack-solver.ts ***!
    \****************************************************/

  /*! exports provided: BacktrackSolver */

  /***/
  function srcAppModelsSolversBacktrackSolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BacktrackSolver", function () {
      return BacktrackSolver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _utility_eMath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../utility/eMath */
    "./src/app/models/utility/eMath.ts");
    /* harmony import */


    var _tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../tile */
    "./src/app/models/tile.ts");
    /* harmony import */


    var _utility_point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../utility/point */
    "./src/app/models/utility/point.ts");

    var BacktrackSolver =
    /*#__PURE__*/
    function () {
      function BacktrackSolver(game, simulationSpeed) {
        _classCallCheck(this, BacktrackSolver);

        this.game = game;
        this.walker = this.game.walker;
        this.solvingSpeed = simulationSpeed;
        this.noMoreTracks = false;
        this.branchingPointsIndicies = [];
        this.intervalRefrence = null;
      }

      _createClass(BacktrackSolver, [{
        key: "IsNoSolutionFound",
        value: function IsNoSolutionFound() {
          return this.noMoreTracks;
        }
      }, {
        key: "Talk",
        value: function Talk() {
          return this.GetAvailableTilesAround(this.walker.CurPos());
        }
      }, {
        key: "SolveGame",
        value: function SolveGame() {
          while (!(this.game.World().walkerPos.Equals(this.game.World().goalPos) || this.noMoreTracks)) {
            this.SolveAStep();
          }
        }
      }, {
        key: "SolveInSteps",
        value: function SolveInSteps() {
          var _this2 = this;

          if (this.intervalRefrence != null) return;
          this.intervalRefrence = setInterval(function () {
            if (!_this2.isPaused) {
              _this2.game.DoGameStep();

              _this2.SolveAStep();
            }

            if (_this2.game.IsGameFinished() || _this2.noMoreTracks) {
              clearInterval(_this2.intervalRefrence);
            }
          }, 1000 / this.solvingSpeed);
        }
      }, {
        key: "SolveAStep",
        value: function SolveAStep() {
          if (this.game.IsGameFinished() || this.noMoreTracks) return;
          var availableTiles = this.GetAvailableTilesAround(this.walker.CurPos());

          if (availableTiles.length > 0) {
            if (availableTiles.length > 1) this.branchingPointsIndicies.push(this.walker.MoveStack().length - 1); //the index of the branching point

            var loc = availableTiles[_utility_eMath__WEBPACK_IMPORTED_MODULE_1__["Emath"].GetRandomInt(0, availableTiles.length)];

            this.game.MoveWalker(this.walker.DirFromPoint(loc));
          } else if (!this.game.IsGameFinished()) this.BacktrackToBranchingPoint();
        }
      }, {
        key: "StopSolving",
        value: function StopSolving() {
          clearInterval(this.intervalRefrence);
        }
      }, {
        key: "GetIndexedLocations",
        value: function GetIndexedLocations() {
          var indexedLocations = [];
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = this.branchingPointsIndicies[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var index = _step5.value;
              indexedLocations.push(this.walker.MoveStack()[index]);
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }

          return indexedLocations;
        }
      }, {
        key: "PauseSolving",
        value: function PauseSolving() {
          this.isPaused = true;
        }
      }, {
        key: "ResumeSolving",
        value: function ResumeSolving() {
          this.isPaused = false;
        }
      }, {
        key: "BacktrackToBranchingPoint",
        value: function BacktrackToBranchingPoint() {
          if (this.branchingPointsIndicies.length == 0) {
            this.noMoreTracks = true;
            return;
          }

          var branchingIndex = this.branchingPointsIndicies[this.branchingPointsIndicies.length - 1];
          var moveStack = this.walker.MoveStack();
          var branchingPos = moveStack[branchingIndex]; //make sure that the current branching point still have branches otherwise remove it

          if (this.GetAvailableTilesAround(branchingPos).length <= 1) this.branchingPointsIndicies.pop();
          this.game.PutWalkerAt(branchingPos);
        }
      }, {
        key: "GetAvailableTilesAround",
        value: function GetAvailableTilesAround(curPos) {
          var left = new _utility_point__WEBPACK_IMPORTED_MODULE_3__["Point"](curPos.x - 1, curPos.y);
          var right = new _utility_point__WEBPACK_IMPORTED_MODULE_3__["Point"](curPos.x + 1, curPos.y);
          var up = new _utility_point__WEBPACK_IMPORTED_MODULE_3__["Point"](curPos.x, curPos.y - 1);
          var down = new _utility_point__WEBPACK_IMPORTED_MODULE_3__["Point"](curPos.x, curPos.y + 1);
          var availableTiles = [];
          if (this.IsAvailable(left)) availableTiles.push(left);
          if (this.IsAvailable(right)) availableTiles.push(right);
          if (this.IsAvailable(up)) availableTiles.push(up);
          if (this.IsAvailable(down)) availableTiles.push(down);
          return availableTiles;
        }
      }, {
        key: "IsAvailable",
        value: function IsAvailable(loc) {
          return this.game.IsInsideWorld(loc) && this.game.TileState(loc) == _tile__WEBPACK_IMPORTED_MODULE_2__["State"].open && !this.walker.IsVisitedBefore(loc);
        }
      }]);

      return BacktrackSolver;
    }();
    /***/

  },

  /***/
  "./src/app/models/tile.ts":
  /*!********************************!*\
    !*** ./src/app/models/tile.ts ***!
    \********************************/

  /*! exports provided: Tile, State */

  /***/
  function srcAppModelsTileTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tile", function () {
      return Tile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "State", function () {
      return State;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Tile =
    /*#__PURE__*/
    function () {
      function Tile(state, coordinate) {
        _classCallCheck(this, Tile);

        this.state = state;
        this._coordinate = coordinate;
        this.hasWalker = false;
        this.isGoal = false;
      }

      _createClass(Tile, [{
        key: "isGoal",
        set: function set(val) {
          if (val == true && this.state == State.blocked) throw "Can't set tile at ".concat(this.coordinate, " to goal because it's blocked");
          this._isGoal = val;
        },
        get: function get() {
          return this._isGoal;
        }
      }, {
        key: "state",
        set: function set(state) {
          if (this._isGoal && state == State.blocked) throw "Can't set state of tile ".concat(this.coordinate, " to ").concat(State, " because it has goal");
          this._state = state;
        },
        get: function get() {
          return this._state;
        }
      }, {
        key: "hasWalker",
        set: function set(val) {
          if (val == true && this.state == State.blocked) throw "Can't Put walker at tile ".concat(this.coordinate, " because it's blocked");
          this._hasWalker = val;
        },
        get: function get() {
          return this._hasWalker;
        }
      }, {
        key: "coordinate",
        get: function get() {
          return this._coordinate;
        }
      }]);

      return Tile;
    }();

    var State;

    (function (State) {
      State["open"] = "open";
      State["blocked"] = "blocked";
    })(State || (State = {}));
    /***/

  },

  /***/
  "./src/app/models/utility/eMath.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/utility/eMath.ts ***!
    \*****************************************/

  /*! exports provided: Emath */

  /***/
  function srcAppModelsUtilityEMathTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Emath", function () {
      return Emath;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Emath =
    /*#__PURE__*/
    function () {
      function Emath() {
        _classCallCheck(this, Emath);
      }

      _createClass(Emath, null, [{
        key: "GetRandomInt",
        ///The maximum is exclusive and the minimum is inclusive
        value: function GetRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min;
        }
      }]);

      return Emath;
    }();
    /***/

  },

  /***/
  "./src/app/models/utility/point.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/utility/point.ts ***!
    \*****************************************/

  /*! exports provided: Point */

  /***/
  function srcAppModelsUtilityPointTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Point", function () {
      return Point;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Point =
    /*#__PURE__*/
    function () {
      function Point(x, y) {
        _classCallCheck(this, Point);

        this.x = x;
        this.y = y;
      }

      _createClass(Point, [{
        key: "toString",
        value: function toString() {
          return "(".concat(this.x, ",").concat(this.y, ")");
        }
      }, {
        key: "Equals",
        value: function Equals(p) {
          return p.x == this.x && p.y == this.y;
        }
      }], [{
        key: "TotalDifference",
        value: function TotalDifference(p1, p2) {
          return Math.abs(p1.x + p1.y - (p2.x + p2.y));
        }
      }]);

      return Point;
    }();
    /***/

  },

  /***/
  "./src/app/models/walker.ts":
  /*!**********************************!*\
    !*** ./src/app/models/walker.ts ***!
    \**********************************/

  /*! exports provided: Walker, Dir */

  /***/
  function srcAppModelsWalkerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Walker", function () {
      return Walker;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Dir", function () {
      return Dir;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _utility_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./utility/point */
    "./src/app/models/utility/point.ts");

    var Walker =
    /*#__PURE__*/
    function () {
      function Walker(start) {
        _classCallCheck(this, Walker);

        this.visited = [];
        this.moveStack = [];
        this.curPos = start;
        this.visited.push(start);
        this.moveStack.push(start);
      }

      _createClass(Walker, [{
        key: "CurPos",
        value: function CurPos() {
          return this.curPos;
        }
      }, {
        key: "MoveStack",
        value: function MoveStack() {
          // return  this.moveStack;
          return this.moveStack;
        }
      }, {
        key: "IsVisitedBefore",
        value: function IsVisitedBefore(loc) {
          for (var index = 0; index < this.VisitedLocations().length; index++) {
            var p = this.VisitedLocations()[index];
            if (p.Equals(loc)) return true;
          }

          return false;
        }
      }, {
        key: "VisitedLocations",
        value: function VisitedLocations() {
          return this.visited;
        }
      }, {
        key: "Move",
        value: function Move(dir) {
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
      }, {
        key: "DirFromPoint",
        value: function DirFromPoint(point) {
          if (point.x > this.CurPos().x) return Dir.right;else if (point.x < this.CurPos().x) return Dir.left;else if (point.y > this.CurPos().y) return Dir.down;else if (point.y < this.CurPos().y) return Dir.up;else throw "can't determine direction of point ".concat(point, " relative to the walker");
        }
      }, {
        key: "MoveTo",
        value: function MoveTo(loc) {
          this.AddToVisited(loc);
          this.moveStack.push(loc);
          this.curPos = loc;
        }
      }, {
        key: "MoveXBy",
        value: function MoveXBy(d) {
          var p = new _utility_point__WEBPACK_IMPORTED_MODULE_1__["Point"](this.curPos.x + d, this.curPos.y);
          this.MoveTo(p);
        }
      }, {
        key: "MoveYBy",
        value: function MoveYBy(d) {
          var p = new _utility_point__WEBPACK_IMPORTED_MODULE_1__["Point"](this.curPos.x, this.curPos.y + d);
          this.MoveTo(p);
        }
      }, {
        key: "AddToVisited",
        value: function AddToVisited(point) {
          if (!this.visited.includes(point)) this.visited.push(point);
        }
      }]);

      return Walker;
    }();

    var Dir;

    (function (Dir) {
      Dir[Dir["right"] = 0] = "right";
      Dir[Dir["left"] = 1] = "left";
      Dir[Dir["up"] = 2] = "up";
      Dir[Dir["down"] = 3] = "down";
    })(Dir || (Dir = {}));
    /***/

  },

  /***/
  "./src/app/models/world.ts":
  /*!*********************************!*\
    !*** ./src/app/models/world.ts ***!
    \*********************************/

  /*! exports provided: World */

  /***/
  function srcAppModelsWorldTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "World", function () {
      return World;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _walker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./walker */
    "./src/app/models/walker.ts");
    /* harmony import */


    var _tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tile */
    "./src/app/models/tile.ts");
    /* harmony import */


    var _utility_point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./utility/point */
    "./src/app/models/utility/point.ts"); ///only 1 per program
    ///responsible for keeping walker and maze always in SYNC


    var World =
    /*#__PURE__*/
    function () {
      function World(maze) {
        _classCallCheck(this, World);

        this.maze = maze;
        this.walker = new _walker__WEBPACK_IMPORTED_MODULE_1__["Walker"](this.maze.startTile.coordinate);
      }

      _createClass(World, [{
        key: "Talk",
        value: function Talk() {
          return this.maze.Talk();
        }
      }, {
        key: "Draw",
        value: function Draw() {
          this.maze.Draw();
        }
      }, {
        key: "MoveWalker",
        value: function MoveWalker(dir) {
          var newPos = this.getPosForDir(dir);

          if (this.isNewPosValid(newPos) && _utility_point__WEBPACK_IMPORTED_MODULE_3__["Point"].TotalDifference(this.walkerPos, newPos) == 1) {
            this.walker.Move(dir);
            this.maze.PutWalkerAt(this.walkerPos);
          }
        }
      }, {
        key: "PutWalkerAt",
        value: function PutWalkerAt(loc) {
          if (this.isNewPosValid(loc)) {
            this.maze.PutWalkerAt(loc);
            this.walker.MoveTo(loc);
          }
        }
      }, {
        key: "TileState",
        value: function TileState(location) {
          return this.maze.GetTileState(location);
        }
      }, {
        key: "Maze",
        value: function Maze() {
          return this.maze;
        }
      }, {
        key: "isNewPosValid",
        value: function isNewPosValid(newPos) {
          return newPos.x >= 0 && newPos.x < this.maze.width && newPos.y >= 0 && newPos.y < this.maze.height && this.maze.GetTileState(newPos) != _tile__WEBPACK_IMPORTED_MODULE_2__["State"].blocked;
        }
      }, {
        key: "getPosForDir",
        value: function getPosForDir(dir) {
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
      }, {
        key: "goalPos",
        get: function get() {
          return this.maze.goalTile.coordinate;
        }
      }, {
        key: "startPos",
        get: function get() {
          return this.maze.startTile.coordinate;
        }
      }, {
        key: "walkerPos",
        get: function get() {
          return this.walker.CurPos();
        }
      }, {
        key: "width",
        get: function get() {
          return this.maze.width;
        }
      }, {
        key: "height",
        get: function get() {
          return this.maze.height;
        }
      }]);

      return World;
    }();
    /***/

  },

  /***/
  "./src/app/services/game-meta.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/game-meta.service.ts ***!
    \***********************************************/

  /*! exports provided: GameMetaService */

  /***/
  function srcAppServicesGameMetaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameMetaService", function () {
      return GameMetaService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _models_tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../models/tile */
    "./src/app/models/tile.ts");
    /* harmony import */


    var _models_maze__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../models/maze */
    "./src/app/models/maze.ts");
    /* harmony import */


    var _models_utility_point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../models/utility/point */
    "./src/app/models/utility/point.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GameMetaService =
    /*#__PURE__*/
    ///responsible for graphics configurations and game initialization data
    function () {
      function GameMetaService() {
        _classCallCheck(this, GameMetaService);

        this._tileSize = 20;
        this._simulationSpeed = 10;
        this._mazeWidth = 25;
        this._mazeHeight = 25;
        this._startPos = new _models_utility_point__WEBPACK_IMPORTED_MODULE_3__["Point"](0, 0);
        this._goalPos = new _models_utility_point__WEBPACK_IMPORTED_MODULE_3__["Point"](20, 20);
        this._isSimulationRunning = false;
        this._isSimulationStopped = false;
        this._isSimulationStarted = false;
        this._maze = _models_maze__WEBPACK_IMPORTED_MODULE_2__["Maze"].CompleteMaze(this.mazeWidth, this.mazeHeight, this.startPos, this.goalPos);
      }

      _createClass(GameMetaService, [{
        key: "StartSimulation",
        value: function StartSimulation() {
          this._isSimulationRunning = true;
          this._isSimulationStarted = true;
        }
      }, {
        key: "ResumeSimulation",
        value: function ResumeSimulation() {
          this._isSimulationRunning = true;
        }
      }, {
        key: "PauseSimulation",
        value: function PauseSimulation() {
          this._isSimulationRunning = false;
        }
      }, {
        key: "StopSimulation",
        value: function StopSimulation() {
          this._isSimulationStopped = true;
        }
      }, {
        key: "Reset",
        value: function Reset() {
          this._isSimulationRunning = false;
          this._isSimulationStopped = false;
          this._isSimulationStarted = false;
          this._maze = _models_maze__WEBPACK_IMPORTED_MODULE_2__["Maze"].CompleteMaze(this.mazeWidth, this.mazeHeight, this.startPos, this.goalPos);
        }
      }, {
        key: "ResetMaze",
        value: function ResetMaze() {
          if (!this._isSimulationRunning) this._maze.ClearBlocks();
        }
      }, {
        key: "RandomFillMaze",
        value: function RandomFillMaze() {
          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = this._maze.tiles[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var tile = _step6.value;
              if (tile.coordinate.Equals(this.startPos) || tile.coordinate.Equals(this.goalPos)) continue;
              var rnd = Math.random();
              if (rnd > 0.5) this.maze.SetTileState(tile.coordinate, _models_tile__WEBPACK_IMPORTED_MODULE_1__["State"].blocked);else this.maze.SetTileState(tile.coordinate, _models_tile__WEBPACK_IMPORTED_MODULE_1__["State"].open);
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                _iterator6.return();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }
        }
      }, {
        key: "SetMazeDimensions",
        value: function SetMazeDimensions(width, height) {
          this._mazeWidth = width;
          this._mazeHeight = height;
          this.UpdateMaze();
        }
      }, {
        key: "UpdateMaze",
        value: function UpdateMaze() {
          if (this.maze.width != this.mazeWidth || this.maze.height != this.mazeHeight) this._maze = _models_maze__WEBPACK_IMPORTED_MODULE_2__["Maze"].CompleteMaze(this.mazeWidth, this.mazeHeight, this.startPos, this.goalPos);
        }
      }, {
        key: "tileSize",
        get: function get() {
          return this._tileSize;
        },
        set: function set(val) {
          this._tileSize = val;
        }
      }, {
        key: "simulationSpeed",
        get: function get() {
          return this._simulationSpeed;
        },
        set: function set(val) {
          this._simulationSpeed = val;
        }
      }, {
        key: "mazeWidth",
        get: function get() {
          return this._mazeWidth;
        },
        set: function set(val) {
          this._mazeWidth = val;
          this.UpdateMaze();
        }
      }, {
        key: "mazeHeight",
        get: function get() {
          return this._mazeHeight;
        },
        set: function set(val) {
          this._mazeHeight = val;
          this.UpdateMaze();
        }
      }, {
        key: "startPos",
        get: function get() {
          return this._startPos;
        },
        set: function set(val) {
          if (this.startPos.Equals(this.goalPos)) return;
          this._startPos = val;

          this._maze.ChangeStartPos(val);
        }
      }, {
        key: "goalPos",
        get: function get() {
          return this._goalPos;
        },
        set: function set(val) {
          if (this.startPos.Equals(this.goalPos)) return;
          this._goalPos = val;

          this._maze.ChangeGoalPos(val);
        }
      }, {
        key: "isSimulationRunning",
        get: function get() {
          return this._isSimulationRunning;
        }
      }, {
        key: "isSimulationStopped",
        get: function get() {
          return this._isSimulationStopped;
        }
      }, {
        key: "isSimulationStarted",
        get: function get() {
          return this._isSimulationStarted;
        }
      }, {
        key: "maze",
        get: function get() {
          return this._maze;
        }
      }]);

      return GameMetaService;
    }();

    GameMetaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
      providedIn: 'root'
    }) ///responsible for graphics configurations and game initialization data
    ], GameMetaService);
    /***/
  },

  /***/
  "./src/app/services/game.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/game.service.ts ***!
    \******************************************/

  /*! exports provided: GameService */

  /***/
  function srcAppServicesGameServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameService", function () {
      return GameService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _models_walker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../models/walker */
    "./src/app/models/walker.ts");
    /* harmony import */


    var _models_maze__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../models/maze */
    "./src/app/models/maze.ts");
    /* harmony import */


    var _models_world__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../models/world */
    "./src/app/models/world.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GameService =
    /*#__PURE__*/
    ///serves as the MAIN entry point of game models and sets the game rules
    function () {
      function GameService() {
        _classCallCheck(this, GameService);

        this.map3 = "+--+--+--+--+--+--+--+--+--+--+\n      |              |     |  |\n+--+  +  +--+--+--+  +  +  +  +\n|     |     |     |  |  |  |  |\n+  +--+  +--+  +  +  +--+  +  +\n|     |  |     |  |  |     |  |\n+--+  +  +  +--+  +  +  +--+  +\n|     |     |     |     |     |\n+  +--+--+--+--+  +--+--+--+  +\n|           |                 |\n+--+--+--+  +  +  +--+--+--+  +\n|     |  |     |  |     |     |\n+--+  +  +--+--+  +  +  +--+  +\n|     |      s    |  |        |\n+  +--+--+  +--+--+  +--+--+--+\n|           |        |  |     |\n+--+--+--+--+  +--+--+  +  +  +\n|           |     |        |  |\n+  +--+--+  +  +  +--+  +--+  +\n|        |     |        |    |G\n+--+--+--+--+--+--+--+--+--+--+";
        this.map = "+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+\nS   |     |                 |     |  |              |       |\n+  +--+  +  +  +--+--+--+  +  +  +  +  +  +--+--+  +  +--+  +\n|  |     |  |        |        |     |  |  |     |  |     |  |\n+  +  +--+--+--+--+  +  +--+--+--+--+  +--+  +  +  +--+  +  +\n|     |     |        |  |              |     |  |  |     |  |\n+  +--+  +  +  +--+--+  +  +--+--+--+--+  +--+  +  +  +--+  +\n|  |     |     |        |     |     |     |     |     |     |\n+  +  +--+--+--+  +--+--+--+  +  +  +  +--+--+  +  +--+  +--+\n|     |           |        |     |  |  |  |     |  |     |  |\n+--+--+  +--+--+  +--+--+  +--+--+  +  +  +  +--+  +  +--+  +\n|     |     |  |  |     |  |        |     |        |  |     |\n+  +--+  +  +  +  +  +  +  +  +--+--+  +--+--+--+--+  +  +--+\n|        |     |     |  |  |        |     |     |  |     |  |\n+  +--+--+--+--+--+--+  +  +--+--+  +  +  +--+  +  +--+--+  +\n|  |     |     |        |     |     |  |        |  |        |\n+  +  +--+  +  +--+  +  +--+  +  +--+  +--+--+--+  +  +--+  +\n|  |        |        |        |     |     |        |     |  |\n+  +--+--+--+  +--+--+--+--+--+--+  +  +  +  +--+--+--+  +  +\n|      |        |     |     |       |  |     |        |  |  |\n+--+  +--+--+--+  +  +  +  +--+--+--+--+  +--+  +  +  +  +  +\n|     |        |  |     |                       |  |     |  |\n+  +--+  +--+  +--+  +--+--+--+--+--+--+  +--+--+--+--+--+  +\n|     |     |     |  |     |        |     |  |              |\n+  +--+--+  +--+  +  +  +--+  +  +  +  +--+  +  +--+--+--+--+\n|        |     |  |  |        |  |  |  |                    |\n+--+--+  +--+  +  +  +--+--+--+  +--+  +--+--+--+--+--+--+  +\n|     |  |     |  |     |     |     |  |              |     |\n+--+  +  +  +--+  +  +  +  +--+--+  +  +  +--+  +--+  +  +--+\n|     |  |     |     |  |        |     |     |     |  |  |  |\n+  +--+  +--+  +--+--+  +--+--+  +--+--+  +  +--+  +  +  +  +\n|     |        |  |     |     |  |     |  |  |     |     |  |\n+--+  +--+  +--+  +  +--+  +  +  +  +  +  +  +  +--+--+--+  +\n|  |        |     |        |     |  |  |  |  |     |        |\n+  +--+  +--+  +  +--+--+--+  +--+  +  +--+  +--+--+  +--+--+\n|        |     |  |           |     |  |     |     |  |     |\n+--+--+--+--+--+  +  +  +--+--+  +--+  +  +--+  +  +  +  +--+\n|              |  |  |  |        |  |     |     |     |     |\n+  +  +--+--+  +  +--+  +  +--+--+  +--+--+  +  +--+--+  +  +\n|  |        |           |                    |           |  G\n+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+";
        this.map1 = "+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+\ns     |     |     |                       |  |           |        |        |           |     |              |              |           |  |     |     |\n+--+  +  +  +  +  +--+  +--+--+  +--+--+  +  +  +--+  +  +--+  +  +  +  +  +  +--+--+  +  +--+  +--+--+--+  +  +--+--+--+  +--+--+--+  +  +  +  +  +  +\n|     |  |     |  |     |     |        |        |     |     |  |     |  |  |     |     |  |     |           |     |        |        |  |     |     |  |\n+  +--+--+--+--+  +  +--+--+  +--+  +--+--+--+--+--+--+  +  +  +--+--+  +  +--+--+  +--+  +  +--+  +--+--+--+--+  +  +  +--+  +--+  +  +--+--+  +  +--+\n|     |        |     |     |     |        |     |     |  |        |     |           |     |     |  |        |     |  |        |     |     |     |     |\n+--+  +  +--+  +  +--+  +  +  +  +--+--+  +  +  +  +  +--+--+--+  +--+--+--+--+--+--+  +  +--+  +  +  +--+  +  +--+  +--+--+--+  +--+--+  +  +--+--+  +\n|     |     |        |  |  |  |     |     |  |  |  |  |     |     |     |     |  |     |     |  |     |     |  |     |        |  |     |  |  |        |\n+  +--+--+  +--+--+  +  +  +--+--+  +  +  +--+  +  +  +  +  +--+--+  +  +  +  +  +  +--+--+  +  +--+--+--+--+  +--+--+--+--+  +  +  +  +  +  +  +--+--+\n|  |        |     |     |  |     |     |     |     |  |  |  |        |     |  |  |  |     |     |           |     |  |     |     |  |     |  |  |     |\n+  +--+  +--+--+  +--+--+  +  +  +--+--+--+  +--+  +  +  +  +  +--+--+--+--+  +  +  +  +  +--+  +  +--+  +  +--+  +  +  +  +--+  +  +--+--+  +  +  +  +\n|     |        |  |     |     |     |     |        |  |  |  |  |           |     |     |  |     |  |     |     |  |     |        |           |  |  |  |\n+--+  +  +--+  +  +  +  +--+--+--+  +  +  +--+--+--+  +  +  +  +--+--+--+  +  +--+--+--+--+  +--+  +  +--+--+  +  +--+--+--+--+--+--+--+  +--+  +  +  +\n|  |     |     |  |  |        |     |  |     |        |  |     |                          |  |     |        |  |  |     |  |                 |     |  |\n+  +--+  +  +--+  +  +--+--+  +  +--+--+--+  +  +--+--+  +--+--+  +--+--+--+  +--+--+--+  +  +  +--+--+--+  +--+  +  +  +  +  +--+--+--+--+--+--+--+  +\n|  |     |  |     |     |  |  |           |  |           |        |                    |     |           |  |     |  |        |              |     |  |\n+  +--+--+  +  +--+--+  +  +  +--+--+--+  +  +--+--+--+  +  +--+--+  +--+--+--+--+  +  +--+--+--+--+--+--+  +  +--+  +--+--+--+  +--+--+--+  +  +  +  +\n|        |     |     |  |     |     |     |           |  |  |        |        |     |     |     |     |        |     |     |  |        |  |     |     |\n+--+--+  +  +--+  +  +  +--+--+  +--+  +--+--+--+--+  +--+  +  +--+--+--+--+  +--+--+--+  +  +  +  +  +  +  +--+  +--+  +  +  +--+--+  +  +--+--+--+  +\n|     |           |  |  |     |        |           |        |  |           |  |           |  |  |  |     |  |        |  |  |     |     |        |     |\n+  +  +--+  +--+--+--+  +  +  +--+--+--+  +--+--+--+--+--+--+  +  +--+--+  +  +  +--+  +--+--+  +  +--+--+--+  +--+  +  +  +--+  +  +--+  +--+--+  +--+\n|  |     |              |  |        |     |                 |     |        |  |     |  |     |  |           |  |  |     |  |  |     |              |  |\n+  +--+  +--+--+  +--+--+  +--+  +  +  +--+  +--+--+--+--+  +--+--+  +--+--+  +--+  +--+  +  +  +--+--+--+  +  +  +--+--+  +  +--+  +  +--+--+--+--+  +\n|     |  |        |     |     |  |     |     |                    |     |        |        |        |     |     |        |  |        |  |     |        |\n+--+  +  +  +--+--+--+  +--+--+  +--+--+  +--+--+--+--+--+  +--+  +--+  +  +--+--+--+--+  +--+--+  +--+  +--+--+--+--+  +  +--+--+--+  +  +  +  +--+--+\n|  |  |     |                       |  |     |           |     |        |                 |     |     |        |     |  |  |  |     |     |  |  |     |\n+  +  +--+--+  +  +--+--+--+--+  +  +  +--+--+  +--+--+  +--+  +--+--+--+--+--+--+--+--+--+  +  +--+  +--+  +  +  +  +  +  +  +  +  +--+--+  +  +  +--+\n|     |     |  |     |           |     |              |     |        |        |              |     |     |  |     |  |  |  |     |        |     |     |\n+--+--+--+  +--+--+  +  +--+--+--+--+  +  +--+  +--+  +--+  +  +--+  +--+--+  +  +--+--+--+  +--+  +--+  +--+--+--+  +  +  +--+--+  +--+  +  +  +--+  +\n|     |              |     |     |     |  |     |  |     |     |  |     |  |  |           |  |  |                    |  |  |        |  |     |        |\n+  +--+  +--+--+--+--+--+  +  +--+  +--+  +  +--+  +--+  +--+--+  +--+  +  +  +--+--+--+  +  +  +  +--+--+--+  +  +  +  +  +  +--+--+  +--+--+--+--+--+\n|        |                 |              |     |        |     |        |                 |  |  |  |     |     |  |     |  |        |  |           |  |\n+--+--+--+  +--+--+--+--+--+--+--+  +--+--+--+  +--+--+--+  +--+--+--+--+--+--+--+--+--+--+  +  +  +  +  +--+--+  +--+--+  +--+--+  +  +--+--+--+  +  +\n|  |        |              |        |           |        |     |     |     |              |  |  |  |  |  |     |  |        |     |  |  |        |     |\n+  +  +--+--+  +--+--+  +  +  +--+--+  +  +--+--+  +--+  +--+  +  +  +  +  +  +--+--+--+  +  +  +--+  +  +  +  +--+  +--+--+  +--+  +  +  +  +  +  +  +\n|     |     |        |  |     |        |        |     |     |     |  |  |  |  |        |     |  |     |     |  |     |     |           |  |  |  |  |  |\n+--+--+  +  +--+--+  +  +--+--+  +--+--+--+--+--+--+  +--+  +--+--+  +  +--+  +  +  +  +--+  +  +  +--+--+--+  +  +  +--+  +--+--+  +--+--+  +  +--+  +\n|  |     |           |     |     |                 |     |  |     |  |  |     |  |  |     |  |     |        |     |     |  |           |     |  |     |\n+  +  +--+--+--+--+--+--+--+  +--+--+--+--+--+--+  +--+--+  +  +--+  +  +  +--+  +  +--+  +  +  +--+  +--+  +--+  +  +  +  +  +--+  +  +  +--+--+  +--+\n|        |              |     |        |     |     |        |     |  |     |     |     |  |     |        |        |  |     |  |     |  |  |     |     |\n+--+--+--+  +--+--+--+  +  +--+  +  +  +  +  +--+  +  +--+  +  +  +  +--+--+  +--+--+  +  +--+--+--+--+--+--+--+--+  +--+--+  +  +--+--+  +  +  +--+  +\n|     |     |     |     |        |  |  |  |        |  |     |  |        |        |     |                    |     |  |        |           |  |  |     |\n+  +  +  +--+  +  +  +--+  +--+--+  +--+  +--+--+--+  +--+--+  +--+--+  +  +--+--+  +--+--+--+--+--+--+--+  +--+  +  +--+--+--+--+--+--+--+  +  +  +--+\n|  |     |     |  |  |     |  |        |              |        |     |  |  |     |        |              |     |  |  |     |  |     |     |  |  |     |\n+  +--+--+  +--+  +  +  +--+  +  +--+  +--+--+  +  +--+  +--+--+  +--+  +  +  +  +--+--+  +  +--+--+--+  +--+  +  +  +  +  +  +  +--+  +--+  +  +  +--+\n|     |     |     |  |  |     |     |     |     |  |     |     |        |     |        |  |           |        |  |  |  |  |  |     |        |  |     |\n+--+  +  +--+  +--+  +  +  +--+--+  +--+  +  +--+  +  +  +  +--+--+--+--+--+--+--+--+--+  +--+  +--+--+--+--+--+  +  +--+  +  +--+  +--+--+  +  +--+  +\n|  |     |  |  |  |     |           |  |     |  |  |  |  |     |        |     |  |        |  |           |     |  |        |     |     |     |  |     |\n+  +--+--+  +  +  +--+  +--+--+--+--+  +--+--+  +  +  +  +  +  +--+--+  +  +  +  +  +--+--+  +  +  +--+  +  +  +  +--+--+--+  +  +--+  +--+--+  +  +--+\n|  |              |     |           |              |  |  |  |     |     |  |  |  |        |  |  |     |  |  |  |        |     |  |        |     |     |\n+  +  +--+--+--+--+--+--+  +  +--+  +--+--+--+  +--+--+  +--+--+  +  +--+  +  +  +--+--+  +  +--+--+  +  +  +--+--+--+  +  +--+  +--+--+  +  +--+  +--+\n|     |        |        |  |     |           |     |     |        |     |  |              |     |     |  |              |     |  |        |     |     |\n+--+  +  +--+  +  +--+  +  +--+--+--+--+--+  +  +--+  +  +  +--+--+  +  +  +--+--+--+--+  +--+  +  +--+  +--+  +--+  +--+--+  +  +  +--+  +--+  +--+  +\n|  |  |  |  |     |     |  |     |        |  |  |     |  |  |     |  |  |        |     |  |  |  |     |  |     |     |        |        |     |  |     |\n+  +  +  +  +--+--+  +--+--+  +  +  +--+  +  +--+  +--+  +  +--+  +  +  +  +--+  +--+  +  +  +  +--+--+  +  +--+  +--+--+--+--+--+  +--+--+  +  +  +--+\n|     |  |                    |  |  |  |  |        |     |     |     |  |     |        |     |           |  |     |     |        |        |     |     |\n+  +--+  +--+--+--+--+--+--+--+  +  +  +  +--+--+  +  +--+--+  +--+--+  +--+  +--+--+--+--+--+--+--+--+--+--+  +--+  +  +--+--+  +--+--+  +--+  +--+  +\n|        |                       |  |     |        |           |     |  |  |     |              |     |     |     |  |  |        |        |     |     |\n+--+--+--+  +--+--+  +--+--+--+--+  +--+--+--+  +--+--+--+--+--+  +  +  +  +--+  +  +--+--+--+  +  +  +--+  +--+  +  +  +  +  +--+--+--+--+--+  +--+  +\n|           |     |        |     |     |        |           |     |     |        |     |     |     |     |  |        |     |  |              |     |  |\n+  +--+--+--+  +  +--+--+  +--+  +--+  +  +--+  +  +--+--+  +  +--+--+--+  +--+--+--+  +  +--+--+  +--+  +  +  +--+--+--+--+  +  +--+--+--+  +--+  +  +\n|        |     |              |  |     |  |     |     |  |  |           |     |     |  |     |  |     |     |  |        |  |  |  |        |        |  |\n+--+--+  +  +--+--+--+--+--+  +  +  +  +  +  +--+--+  +  +  +--+  +  +  +  +--+  +  +  +--+  +  +  +--+--+--+  +  +--+  +  +  +  +  +--+  +  +--+--+  +\n|        |     |           |     |  |  |  |  |     |  |  |  |     |  |  |     |  |     |        |     |     |        |  |     |  |  |     |  |        |\n+  +--+--+--+  +  +--+  +  +--+--+--+  +  +  +  +  +  +  +  +--+--+--+  +--+  +  +--+--+  +--+--+--+  +  +--+--+  +--+  +  +--+--+  +  +--+  +  +--+--+\n|  |     |     |     |  |     |     |  |  |     |     |  |  |        |  |  |  |        |     |     |  |     |     |     |  |        |  |     |        |\n+  +  +  +  +--+--+  +--+--+  +  +  +  +  +--+--+--+--+  +  +  +--+  +  +  +  +--+  +--+--+  +  +--+  +--+  +  +--+  +--+  +  +--+  +  +  +--+  +--+  +\n|  |  |  |        |  |     |  |  |     |     |  |     |     |  |           |  |  |  |        |  |     |        |     |     |     |  |     |  |     |  |\n+  +  +  +--+--+  +  +  +  +  +  +--+--+--+  +  +  +--+--+--+  +--+--+--+  +  +  +  +  +--+--+  +  +--+  +--+--+  +--+  +--+--+--+  +--+--+  +  +  +  +\n|     |  |           |  |  |  |  |           |           |     |     |     |     |     |     |        |        |     |  |     |           |     |  |  |\n+--+--+  +  +--+--+--+  +  +  +  +  +--+--+  +  +--+  +--+  +--+  +  +--+--+--+  +--+--+  +--+--+  +  +--+--+--+--+  +  +  +  +  +--+--+  +--+--+  +--+\n|  |     |     |        |     |     |        |     |     |        |     |     |           |        |           |  |  |     |  |  |        |     |     |\n+  +  +--+--+--+  +--+--+--+--+--+  +  +--+--+--+--+--+  +--+  +--+  +  +  +--+--+  +--+--+  +--+--+  +--+--+  +  +  +--+--+  +  +--+--+--+  +  +--+  +\n|           |     |           |     |        |     |  |     |  |     |        |  |        |     |  |     |  |        |  |     |     |     |  |        |\n+--+--+--+  +  +--+  +--+--+  +  +--+--+--+  +  +  +  +--+  +  +--+--+--+--+  +  +--+  +--+--+  +  +--+  +  +--+  +--+  +  +--+--+  +--+  +  +--+  +--+\n|        |  |  |        |  |     |           |  |  |        |  |        |     |     |     |     |        |     |     |  |  |        |     |     |     |\n+  +--+  +--+  +--+--+  +  +--+--+  +--+--+--+  +  +  +--+--+  +  +--+  +  +--+--+  +--+  +  +--+--+--+  +--+  +  +  +  +  +  +--+--+  +--+--+  +--+  +\n|  |  |     |           |  |     |              |  |  |     |  |     |  |     |     |     |  |        |     |  |  |  |     |           |     |     |  |\n+  +  +--+  +--+  +  +--+  +  +--+--+  +--+--+--+  +  +  +  +  +--+  +  +  +  +  +  +  +  +  +  +--+  +--+--+  +--+  +--+--+  +--+  +--+  +  +--+  +--+\n|  |     |  |     |        |     |     |        |     |  |  |  |  |  |  |  |     |  |  |  |  |     |  |        |     |     |  |     |     |  |  |     |\n+  +  +  +  +  +--+--+--+  +--+  +  +--+  +  +--+--+--+--+  +  +  +  +  +  +--+--+  +  +  +  +--+--+  +  +--+--+  +--+  +  +  +--+--+  +  +  +  +--+  +\n|  |  |  |     |     |     |     |        |        |     |  |  |     |  |  |     |     |              |  |     |        |           |  |  |        |  |\n+  +--+  +--+--+--+  +  +--+  +--+--+--+--+--+--+  +--+  +  +  +  +--+  +  +  +--+--+--+  +--+--+--+--+  +--+  +--+--+--+--+  +--+  +  +--+--+  +--+  +\n|  |           |     |  |     |     |     |     |     |  |  |  |     |  |           |  |  |     |     |     |                 |     |        |        |\n+  +  +  +--+  +  +--+  +  +--+  +  +  +  +--+  +--+  +  +  +  +--+  +--+  +  +--+  +  +  +--+  +--+  +--+  +--+  +--+--+--+--+  +--+--+--+  +--+--+--+\n|  |  |     |     |  |  |        |     |        |           |        |     |     |     |        |        |  |  |     |     |     |        |        |  |\n+  +  +--+  +--+--+  +  +  +--+--+  +--+--+--+--+--+--+  +--+--+--+--+  +--+--+--+--+  +--+--+--+  +--+  +  +  +--+  +  +  +  +--+--+--+  +--+--+  +  +\n|     |     |     |  |     |        |                    |     |        |                 |     |  |     |  |        |  |  |  |        |        |  |  |\n+--+--+  +--+--+  +  +  +--+  +--+--+  +--+--+--+--+--+--+  +  +  +--+--+  +--+--+  +--+--+  +  +  +  +--+  +--+  +  +  +  +  +  +  +  +--+--+  +  +  +\n|        |        |  |  |  |        |                 |     |     |        |        |     |  |     |  |  |        |     |  |     |  |           |  |  |\n+  +--+--+  +--+--+  +  +  +--+--+  +--+--+--+--+--+  +  +  +  +--+  +--+--+--+  +--+--+  +  +--+--+  +  +--+--+--+--+--+  +--+--+  +--+--+--+  +  +  +\n|     |     |     |  |  |        |     |           |  |  |  |     |  |        |  |           |        |        |        |  |     |  |  |        |  |  |\n+--+  +  +--+  +--+  +  +--+  +  +--+  +  +  +--+  +  +  +--+--+  +  +  +--+  +--+  +  +--+--+  +--+--+--+--+  +  +--+  +  +--+  +  +  +  +--+--+  +  +\n|     |     |  |     |        |  |     |  |  |     |  |  |        |        |        |     |     |        |     |     |     |     |  |  |        |     |\n+  +--+  +  +  +  +--+--+--+--+  +  +  +--+  +  +--+  +  +  +--+--+  +--+--+--+--+--+--+  +  +--+  +--+  +  +--+--+  +--+--+  +  +  +  +--+  +  +  +--+\n|     |  |  |     |              |  |        |  |     |  |  |        |                    |  |     |  |  |     |     |  |     |  |     |     |  |     |\n+--+  +  +--+--+  +--+--+--+--+--+  +--+--+--+  +  +--+  +  +  +--+--+  +--+--+--+--+--+--+  +  +--+  +  +  +  +  +--+  +  +--+--+--+--+  +--+  +--+  +\n|     |     |  |        |           |           |     |  |  |     |  |        |           |  |        |     |  |     |           |        |  |        |\n+  +--+--+  +  +--+--+  +--+  +--+--+  +--+  +--+--+  +--+  +--+  +  +--+  +  +  +--+--+  +  +--+--+  +--+--+--+--+  +--+  +--+  +  +--+--+  +--+  +--+\n|                    |        |        |           |        |     |        |     |        |           |                    |     |              |     g\n+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+";
        this.Intialize();
      }

      _createClass(GameService, [{
        key: "Intialize",
        value: function Intialize() {
          //to be deleted
          this.world = new _models_world__WEBPACK_IMPORTED_MODULE_3__["World"](_models_maze__WEBPACK_IMPORTED_MODULE_2__["Maze"].MazeFromString(this.map));
        }
      }, {
        key: "SetMaze",
        value: function SetMaze(maze) {
          this.world = new _models_world__WEBPACK_IMPORTED_MODULE_3__["World"](maze);
        }
      }, {
        key: "Reset",
        value: function Reset(newMaze) {
          this.world = new _models_world__WEBPACK_IMPORTED_MODULE_3__["World"](newMaze);
          this.reachedGoal = false;
        }
      }, {
        key: "Talk",
        value: function Talk() {
          return this.world.Talk();
        }
      }, {
        key: "IsInsideWorld",
        value: function IsInsideWorld(loc) {
          return loc.x >= 0 && loc.x < this.mazeWidth && loc.y >= 0 && loc.y < this.mazeHeight;
        }
      }, {
        key: "TileState",
        value: function TileState(location) {
          return this.world.TileState(location);
        }
      }, {
        key: "IsGameFinished",
        value: function IsGameFinished() {
          return this.reachedGoal;
        } ///only responds to arrowKeys

      }, {
        key: "MoveWalkerByKbd",
        value: function MoveWalkerByKbd(event) {
          if (this.IsGameFinished()) return;
          if (event.key === 'ArrowUp') this.world.MoveWalker(_models_walker__WEBPACK_IMPORTED_MODULE_1__["Dir"].up);else if (event.key === 'ArrowDown') this.world.MoveWalker(_models_walker__WEBPACK_IMPORTED_MODULE_1__["Dir"].down);else if (event.key === 'ArrowLeft') this.world.MoveWalker(_models_walker__WEBPACK_IMPORTED_MODULE_1__["Dir"].left);else if (event.key === 'ArrowRight') this.world.MoveWalker(_models_walker__WEBPACK_IMPORTED_MODULE_1__["Dir"].right);
        }
      }, {
        key: "MoveWalker",
        value: function MoveWalker(dir) {
          if (!this.IsGameFinished()) this.world.MoveWalker(dir);
        }
      }, {
        key: "PutWalkerAt",
        value: function PutWalkerAt(loc) {
          if (!this.IsGameFinished()) this.world.PutWalkerAt(loc);
        }
      }, {
        key: "DoGameStep",
        value: function DoGameStep() {
          this.UpdateModel();
          this.Draw();
        }
      }, {
        key: "World",
        value: function World() {
          return this.world;
        }
      }, {
        key: "UpdateModel",
        value: function UpdateModel() {
          if (this.world.walkerPos.Equals(this.world.goalPos)) this.reachedGoal = true;
        } //draw on 'something' and expose it to the hosting component to render it

      }, {
        key: "Draw",
        value: function Draw() {
          console.clear();
          this.world.Draw();
          if (this.IsGameFinished()) console.log('you have reached your goal');
        }
      }, {
        key: "MsFromFPS",
        value: function MsFromFPS(fps) {
          return 1000 / fps;
        }
      }, {
        key: "mazeWidth",
        get: function get() {
          return this.world.width;
        }
      }, {
        key: "mazeHeight",
        get: function get() {
          return this.world.height;
        }
      }, {
        key: "walker",
        get: function get() {
          return this.world.walker;
        }
      }]);

      return GameService;
    }();

    GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
      providedIn: 'root'
    }) ///serves as the MAIN entry point of game models and sets the game rules
    ], GameService);
    /***/
  },

  /***/
  "./src/app/ui/control-panel/control-panel.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/ui/control-panel/control-panel.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiControlPanelControlPanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvY29udHJvbC1wYW5lbC9NOlxcd2Vic2l0ZXNcXFBhdGgtZmluZGVyL3NyY1xcYXBwXFx1aVxcY29udHJvbC1wYW5lbFxcY29udHJvbC1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvY29udHJvbC1wYW5lbC9jb250cm9sLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3VpL2NvbnRyb2wtcGFuZWwvY29udHJvbC1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ui/control-panel/control-panel.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/ui/control-panel/control-panel.component.ts ***!
    \*************************************************************/

  /*! exports provided: ControlPanelComponent */

  /***/
  function srcAppUiControlPanelControlPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlPanelComponent", function () {
      return ControlPanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_game_meta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/game-meta.service */
    "./src/app/services/game-meta.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ControlPanelComponent =
    /*#__PURE__*/
    ///responsible for setting graphical options of the world
    function () {
      function ControlPanelComponent(meta) {
        _classCallCheck(this, ControlPanelComponent);

        this.meta = meta;
        this.width = meta.mazeWidth;
        this.height = meta.mazeHeight;
      }

      _createClass(ControlPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "CreateMaze",
        value: function CreateMaze() {
          this.meta.SetMazeDimensions(parseInt(this.width), parseInt(this.height));
        }
      }]);

      return ControlPanelComponent;
    }();

    ControlPanelComponent.ctorParameters = function () {
      return [{
        type: _services_game_meta_service__WEBPACK_IMPORTED_MODULE_1__["GameMetaService"]
      }];
    };

    ControlPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'ui-control-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./control-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/control-panel/control-panel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./control-panel.component.scss */
      "./src/app/ui/control-panel/control-panel.component.scss")).default]
    }) ///responsible for setting graphical options of the world
    ], ControlPanelComponent);
    /***/
  },

  /***/
  "./src/app/ui/home-page/home-page.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/ui/home-page/home-page.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiHomePageHomePageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ui/home-page/home-page.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/ui/home-page/home-page.component.ts ***!
    \*****************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppUiHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _models_maze_filler_recursive_filler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../models/maze filler/recursive-filler */
    "./src/app/models/maze filler/recursive-filler.ts");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/game.service */
    "./src/app/services/game.service.ts");
    /* harmony import */


    var _services_game_meta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/game-meta.service */
    "./src/app/services/game-meta.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomePageComponent =
    /*#__PURE__*/
    function () {
      function HomePageComponent(meta, game) {
        _classCallCheck(this, HomePageComponent);

        this.meta = meta;
        this.game = game;
        this.isSimulationPaused = false;
      }

      _createClass(HomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var r = new _models_maze_filler_recursive_filler__WEBPACK_IMPORTED_MODULE_1__["RecursiveFiller"](this.meta.maze);
          r.ConstructInSteps(this.game);
        }
      }, {
        key: "Reset",
        value: function Reset() {
          this.game.Reset(this.meta.maze);
        }
      }, {
        key: "IsSimulationPaused",
        value: function IsSimulationPaused() {
          return this.isSimulationPaused;
        }
      }, {
        key: "Pause",
        value: function Pause() {
          this.isSimulationPaused = true;
        }
      }, {
        key: "Resume",
        value: function Resume() {
          this.isSimulationPaused = false;
        }
      }]);

      return HomePageComponent;
    }();

    HomePageComponent.ctorParameters = function () {
      return [{
        type: _services_game_meta_service__WEBPACK_IMPORTED_MODULE_3__["GameMetaService"]
      }, {
        type: _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]
      }];
    };

    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-home-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/home-page/home-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-page.component.scss */
      "./src/app/ui/home-page/home-page.component.scss")).default]
    })], HomePageComponent);
    /***/
  },

  /***/
  "./src/app/ui/maze-construction/maze-construction.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/ui/maze-construction/maze-construction.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiMazeConstructionMazeConstructionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  padding: 15px 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvbWF6ZS1jb25zdHJ1Y3Rpb24vTTpcXHdlYnNpdGVzXFxQYXRoLWZpbmRlci9zcmNcXGFwcFxcdWlcXG1hemUtY29uc3RydWN0aW9uXFxtYXplLWNvbnN0cnVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvbWF6ZS1jb25zdHJ1Y3Rpb24vbWF6ZS1jb25zdHJ1Y3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdWkvbWF6ZS1jb25zdHJ1Y3Rpb24vbWF6ZS1jb25zdHJ1Y3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICBwYWRkaW5nOiAxNXB4IDIxcHg7XHJcbn1cclxuXHJcbiIsIjpob3N0IHtcbiAgcGFkZGluZzogMTVweCAyMXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ui/maze-construction/maze-construction.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/ui/maze-construction/maze-construction.component.ts ***!
    \*********************************************************************/

  /*! exports provided: MazeConstructionComponent */

  /***/
  function srcAppUiMazeConstructionMazeConstructionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MazeConstructionComponent", function () {
      return MazeConstructionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_game_meta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/game-meta.service */
    "./src/app/services/game-meta.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MazeConstructionComponent =
    /*#__PURE__*/
    function () {
      function MazeConstructionComponent(meta) {
        _classCallCheck(this, MazeConstructionComponent);

        this.meta = meta;
      }

      _createClass(MazeConstructionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MazeConstructionComponent;
    }();

    MazeConstructionComponent.ctorParameters = function () {
      return [{
        type: _services_game_meta_service__WEBPACK_IMPORTED_MODULE_1__["GameMetaService"]
      }];
    };

    MazeConstructionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'ui-maze-construction',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./maze-construction.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/maze-construction/maze-construction.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./maze-construction.component.scss */
      "./src/app/ui/maze-construction/maze-construction.component.scss")).default]
    })], MazeConstructionComponent);
    /***/
  },

  /***/
  "./src/app/ui/navbar/navbar.component.scss":
  /*!*************************************************!*\
    !*** ./src/app/ui/navbar/navbar.component.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiNavbarNavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container-fluid {\n  background-color: #34495e;\n}\n.container-fluid .btn-group {\n  padding: 0.3rem 1.2rem;\n}\n.start-button {\n  transition: 0.5s;\n  padding: 10px 23px;\n  color: #ffffff;\n  background-color: #48c9b0;\n  border-color: #48c9b0;\n  border-radius: 5px;\n  font-weight: 400;\n}\n.start-button:hover {\n  background-color: #6dd4c0;\n}\nh1 {\n  padding-top: 2%;\n  color: #fefafb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvbmF2YmFyL006XFx3ZWJzaXRlc1xcUGF0aC1maW5kZXIvc3JjXFxhcHBcXHVpXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVFLHlCQUFBO0FDREY7QURHRTtFQUNFLHNCQUFBO0FDREo7QURLQTtFQUVFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNIRjtBRElFO0VBQ0UseUJBQUE7QUNGSjtBREtBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3VpL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRhaW5lci1mbHVpZFxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0NDk1ZTtcclxuXHJcbiAgLmJ0bi1ncm91cHtcclxuICAgIHBhZGRpbmc6IC4zcmVtIDEuMnJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5zdGFydC1idXR0b25cclxue1xyXG4gIHRyYW5zaXRpb246IC41cztcclxuICBwYWRkaW5nOiAxMHB4IDIzcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4YzliMDtcclxuICBib3JkZXItY29sb3I6ICM0OGM5YjA7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgJjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZGQ0YzA7XHJcbiAgfVxyXG59XHJcbmgxe1xyXG4gIHBhZGRpbmctdG9wOiAyJTtcclxuICBjb2xvcjogI2ZlZmFmYjtcclxufVxyXG4iLCIuY29udGFpbmVyLWZsdWlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0NDk1ZTtcbn1cbi5jb250YWluZXItZmx1aWQgLmJ0bi1ncm91cCB7XG4gIHBhZGRpbmc6IDAuM3JlbSAxLjJyZW07XG59XG5cbi5zdGFydC1idXR0b24ge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBwYWRkaW5nOiAxMHB4IDIzcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDhjOWIwO1xuICBib3JkZXItY29sb3I6ICM0OGM5YjA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5zdGFydC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmRkNGMwO1xufVxuXG5oMSB7XG4gIHBhZGRpbmctdG9wOiAyJTtcbiAgY29sb3I6ICNmZWZhZmI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ui/navbar/navbar.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/ui/navbar/navbar.component.ts ***!
    \***********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppUiNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_game_meta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/game-meta.service */
    "./src/app/services/game-meta.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(meta) {
        _classCallCheck(this, NavbarComponent);

        this.meta = meta;
        this.resetSimulation = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.pauseSimulation = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.resumeSimulation = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ResetSimulation",
        value: function ResetSimulation() {
          this.resetSimulation.emit();
          this.meta.Reset();
        }
      }, {
        key: "PauseSimulation",
        value: function PauseSimulation() {
          this.pauseSimulation.emit();
          this.meta.PauseSimulation();
        }
      }, {
        key: "StartSimulation",
        value: function StartSimulation() {
          this.meta.StartSimulation();
          this.resumeSimulation.emit();
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _services_game_meta_service__WEBPACK_IMPORTED_MODULE_1__["GameMetaService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], NavbarComponent.prototype, "resetSimulation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], NavbarComponent.prototype, "pauseSimulation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], NavbarComponent.prototype, "resumeSimulation", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'ui-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.scss */
      "./src/app/ui/navbar/navbar.component.scss")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/ui/world-generator/world-generator.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/ui/world-generator/world-generator.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiWorldGeneratorWorldGeneratorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL3dvcmxkLWdlbmVyYXRvci93b3JsZC1nZW5lcmF0b3IuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ui/world-generator/world-generator.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/ui/world-generator/world-generator.component.ts ***!
    \*****************************************************************/

  /*! exports provided: WorldGeneratorComponent */

  /***/
  function srcAppUiWorldGeneratorWorldGeneratorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorldGeneratorComponent", function () {
      return WorldGeneratorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/game.service */
    "./src/app/services/game.service.ts");
    /* harmony import */


    var _services_game_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/game-meta.service */
    "./src/app/services/game-meta.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WorldGeneratorComponent =
    /*#__PURE__*/
    function () {
      function WorldGeneratorComponent(meta, game) {
        _classCallCheck(this, WorldGeneratorComponent);

        this.meta = meta;
        this.game = game;
        this.isLeftMouseBtnClicked = false;
      }

      _createClass(WorldGeneratorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "DraggingMode",
        value: function DraggingMode() {
          this.isLeftMouseBtnClicked = false;
        }
      }, {
        key: "ToggleTileState",
        value: function ToggleTileState(event) {
          event.target.dispatchEvent(new Event('toggleTile', {
            bubbles: true
          }));
        }
      }, {
        key: "BlockTile",
        value: function BlockTile(event) {
          if (this.isLeftMouseBtnClicked) event.target.dispatchEvent(new Event('blockTile', {
            bubbles: true
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.game.SetMaze(this.meta.maze);
        }
      }]);

      return WorldGeneratorComponent;
    }();

    WorldGeneratorComponent.ctorParameters = function () {
      return [{
        type: _services_game_meta_service__WEBPACK_IMPORTED_MODULE_2__["GameMetaService"]
      }, {
        type: _services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]
      }];
    };

    WorldGeneratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'ui-world-generator',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./world-generator.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/world-generator/world-generator.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./world-generator.component.scss */
      "./src/app/ui/world-generator/world-generator.component.scss")).default]
    })], WorldGeneratorComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! M:\websites\Path-finder\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map