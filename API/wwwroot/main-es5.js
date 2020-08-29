function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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


    __webpack_exports__["default"] = "<ngx-spinner>\n  <h3>Loading...</h3>\n</ngx-spinner>\n\n<app-nav-bar></app-nav-bar>\n<app-section-header></app-section-header>\n\n<div>\n  <router-outlet></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/nav-bar/nav-bar.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/nav-bar/nav-bar.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreNavBarNavBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex flex-column flex-md-row align-items-center justify-content-between p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm fixed-top\">\n  <img src=\"/assets/images/logo.png\" style=\"max-height: 70px;\" alt=\"logo\" class=\"logo\" routerLink=\"/\">\n  <nav class=\"my-2 my-md-0 mr-md-3 text-uppercase\" style=\"font-size: larger;\">\n    <a class=\"p-2\" [routerLink]=\"['/']\" routerLinkActive=\"active\"\n       [routerLinkActiveOptions]=\"{exact: true}\" >Home</a>\n    <a class=\"p-2\" routerLink=\"/shop\" routerLinkActive=\"active\">Shop</a>\n    <a class=\"p-2\" routerLink=\"/test-error\" routerLinkActive=\"active\">Errors</a>\n  </nav>\n  <div class=\"d-flex align-items-center\">\n    <a routerLink=\"/basket\" class=\"position-relative\">\n      <i class=\"fa fa-shopping-cart fa-2x mr-5 text-dark\"></i>\n      <div *ngIf=\"(basket$ | async)\" class=\"cart-no\">{{(basket$ | async).items.length}}</div>\n    </a>\n    <ng-container *ngIf=\"(currentUser$ | async) === null\">\n      <a routerLink=\"/account/login\" class=\"btn btn-outline-secondary mr-2\">Login</a>\n      <a routerLink=\"/account/register\" class=\"btn btn-outline-secondary mr-3\">Sign up</a>\n    </ng-container>\n\n    <ng-container *ngIf=\"currentUser$ | async\">\n      <div class=\"dropdown ml-3 mr-5\" dropdown>\n        <a class=\"dropdown-toggle\" style=\"cursor: pointer\" dropdownToggle>\n          <strong>Welcome {{(currentUser$ | async).displayName}}</strong>\n        </a>\n        <div class=\"dropdown-menu dropdown-menu-right\" style=\"cursor: pointer;\" *dropdownMenu>\n          <a routerLink=\"/basket\" class=\"dropdown-item d-flex align-items-center py-2\">\n            <i class=\"fa fa-shopping-cart mr-3\"></i> View Basket\n          </a>\n          <a routerLink=\"/orders\" class=\"dropdown-item d-flex align-items-center py-2\">\n            <i class=\"fa fa-history mr-3\"></i> View Orders\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a (click)=\"logout()\" class=\"dropdown-item d-flex align-items-center py-2\">\n            <i class=\"fa fa-sign-out mr-3\"></i> Logout\n          </a>\n        </div>\n      </div>\n\n    </ng-container>\n\n  </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/not-found/not-found.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/not-found/not-found.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreNotFoundNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container mt-5\">\n  <h1>Not Found</h1>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/section-header/section-header.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/section-header/section-header.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreSectionHeaderSectionHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"(breadcrumb$ | async) as breadcrumbs\">\n<section *ngIf=\"breadcrumbs.length > 0 && breadcrumbs[breadcrumbs.length-1].label !== 'Home'\" class=\"py-5\" style=\"margin-top: 105px; background-color: #f5f5f5;\">\n  <div class=\"container\">\n    <div class=\"row d-flex align-items-center\">\n      <div class=\"col-9\">\n        <h1>{{breadcrumbs.length > 0 && breadcrumbs[breadcrumbs.length-1].label | titlecase}}</h1>\n      </div>\n      <div class=\"col-3\">\n        <xng-breadcrumb></xng-breadcrumb>\n      </div>\n    </div>\n  </div>\n</section>\n</ng-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/server-error/server-error.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/server-error/server-error.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreServerErrorServerErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container mt-5\">\n  <h4>Internal Server Error- refreshing the page will make the exception disappear</h4>\n  <ng-container *ngIf=\"error\"> <h5 class=\"text-danger\">Error: {{error.message}}</h5>\n    <p class=\"font-weight-bold\">Note: if you are seeing then Angular is probably not responsible</p>\n    <p>What to do next?</p>\n    <ol>\n      <li>Open chrome dev tools</li>\n      <li>Inspect the network tab</li>\n      <li>Check the failing request</li>\n      <li>Examine the request Url- Make sure this is correct</li>\n      <li>Reproduce the error in postman - if we see the same response in Postman, then the issue is Not with Angular</li>\n    </ol>\n    <p>Following the stack trace - this is where your investigation should start!</p>\n    <code class=\"mt-5\" style=\"background-color: whitesmoke;\">{{error.details}}</code></ng-container>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/test-error/test-error.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/test-error/test-error.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreTestErrorTestErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container mt-5\">\n  <button (click)=\"get500Error()\" class=\"btn btn-outline-primary mr-3\">Test 500 Error</button>\n  <button (click)=\"get404Error()\" class=\"btn btn-outline-primary mr-3\">Test 404 Error</button>\n  <button (click)=\"get400Error()\" class=\"btn btn-outline-primary mr-3\">Test 400 Error</button>\n  <button (click)=\"get400ValidationError()\" class=\"btn btn-outline-primary mr-3\">Test 400 Validation Error</button>\n  <div class=\"row mt-5\" *ngIf=\"validationErrors\">\n    <ul class=\"text-danger\">\n      <li *ngFor=\"let error of validationErrors\">{{error}}</li>\n    </ul>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<carousel>\n  <slide>\n    <img src=\"assets/images/hero1.jpg\" alt=\"first slide\" style=\"display: block; width: 100%;\">\n  </slide>\n  <slide>\n    <img src=\"assets/images/hero2.jpg\" alt=\"first slide\" style=\"display: block; width: 100%;\">\n  </slide>\n  <slide>\n    <img src=\"assets/images/hero3.jpg\" alt=\"first slide\" style=\"display: block; width: 100%;\">\n  </slide>\n</carousel>\n<section class=\"featured\">\n  <div class=\"d-flex justify-content-center pt-4\">\n    <h1>Welcome to the Shop!</h1>\n  </div>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/basket-summary/basket-summary.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/basket-summary/basket-summary.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsBasketSummaryBasketSummaryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"items.length > 0\">\n  <div class=\"table-responsive\">\n    <table class=\"table table-borderless\">\n      <thead [class.thead-light]=\"isBasket || isOrder\" class=\"border-0 py-2\">\n      <tr>\n        <th scope=\"col\">\n          <div class=\"p-2 px-3 text-uppercase\">Product</div>\n        </th>\n        <th scope=\"col\">\n          <div class=\"py-2 text-uppercase\">Price</div>\n        </th>\n        <th scope=\"col\">\n          <div class=\"py-2 text-uppercase\">Quantity</div>\n        </th>\n        <th scope=\"col\">\n          <div class=\"py-2 text-uppercase\">Total</div>\n        </th>\n        <th *ngIf=\"isBasket\" scope=\"col\" class=\"border-0\">\n          <div class=\"py-2 text-uppercase\">Remove</div>\n        </th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let item of items\" class=\"border-0\">\n        <th scope=\"row\">\n          <div class=\"p-0\">\n            <img src=\"{{item.pictureUrl}}\" alt=\"{{item.productName}}\"\n                 class=\"img-fluid\" style=\"max-height: 50px;\">\n            <div class=\"ml-3 d-inline-block align-middle\">\n              <h5 class=\"mb-0\">\n                <a routerLink=\"/shop/{{item.id || item.productId}}\"\n                   class=\"text-dark\">{{item.productName}}</a>\n              </h5>\n              <span\n                *ngIf=\"item.type\"\n                class=\"text-muted font-weight-normal font-italic d-block\">\n                                    Type: {{item.type}}\n                                </span>\n            </div>\n\n          </div>\n        </th>\n        <td class=\"align-middle\"><strong>{{item.price | currency}}</strong></td>\n        <td class=\"align-middle\">\n          <div class=\"d-flex align-items-center\"\n               [class.justify-content-center]=\"!isBasket\">\n            <i *ngIf=\"isBasket\" (click)=\"decrementItemQuantity(item)\" class=\"fa fa-minus-circle text-warning mr-2\"\n               style=\"cursor: pointer; font-size: 2em;\"></i>\n            <span class=\"font-weight-bold\" style=\"font-size: 1.5em;\">\n                                {{item.quantity}}\n                            </span>\n            <i *ngIf=\"isBasket\" (click)=\"incrementItemQuantity(item)\" class=\"fa fa-plus-circle text-warning mx-2\"\n               style=\"cursor: pointer; font-size: 2em;\"></i>\n          </div>\n        </td>\n        <td class=\"align-middle\">\n          <strong>{{item.price * item.quantity | currency}}</strong></td>\n        <td class=\"align-middle text-center\">\n          <a class=\"text-danger\">\n            <i *ngIf=\"isBasket\"  (click)=\"removeBasketItem(item)\" class=\"fa fa-trash\" style=\"font-size: 2em; cursor: pointer;\"></i>\n          </a>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</ng-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/order-totals/order-totals.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/order-totals/order-totals.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsOrderTotalsOrderTotalsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"bg-light px-4 text-uppercase font-weight-bold\" style=\"padding: 1.20em;\">\n  Order Summary\n</div>\n<div class=\"p-4\">\n  <p class=\"font-italic mb-4\">Shipping costs will be added depending on choices made during checkout</p>\n  <ul class=\"list-unstyled mb-4\">\n    <li class=\"d-flex justify-content-between py-3 border-bottom\">\n      <strong class=\"text-muted\">Order subtotal</strong>\n      <strong>{{subtotal | currency}}</strong>\n    </li>\n    <li class=\"d-flex justify-content-between py-3 border-bottom\">\n      <strong class=\"text-muted\">Shipping and handling</strong>\n      <strong>{{shippingPrice | currency}}</strong>\n    </li>\n    <li class=\"d-flex justify-content-between py-3 border-bottom\">\n      <strong class=\"text-muted\">Total</strong>\n      <strong>{{total | currency}}</strong>\n    </li>\n  </ul>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/pager/pager.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/pager/pager.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsPagerPagerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<pagination [boundaryLinks]=\"true\" \n            [totalItems]=\"totalCount\" \n            (pageChanged)=\"onPagerChange($event)\"\n            [ngModel]=\"pageNumber\"\n            [itemsPerPage]=\"pageSize\"\n            previousText=\"&lsaquo;\" \n            nextText=\"&rsaquo;\" \n            firstText=\"&laquo;\" \n            lastText=\"&raquo;\">\n\n</pagination>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/paging-header/paging-header.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/paging-header/paging-header.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsPagingHeaderPagingHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\n          <span *ngIf=\"totalCount && totalCount > 0\">Showing <strong>{{(pageNumber -1) * pageSize + 1}}\n            - {{pageNumber * pageSize > this.totalCount ? this.totalCount : pageNumber * pageSize}} </strong>\n            of <strong>{{this.totalCount}}</strong> Results</span>\n  <span *ngIf=\"totalCount ===0\">There are <strong>0</strong> results for this filter</span>\n</header>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/stepper/stepper.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/stepper/stepper.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsStepperStepperComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <ul class=\"nav nav-pills nav-justified\">\n    <li class=\"nav-item\" *ngFor=\"let step of steps; let i = index\">\n      <button\n        (click)=\"onClick(i)\"\n        [disabled]=\"true\"\n        [class.active]=\"selectedIndex === i\"\n        class=\"nav-link text-uppercase font-weight-bold btn-block\" style=\"padding: 1.20em;\">\n        {{step.label}}\n      </button>\n    </li>\n  </ul>\n  <div>\n    <ng-container [ngTemplateOutlet]=\"selected.content\"></ng-container>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/text-input/text-input.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/text-input/text-input.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsTextInputTextInputComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form-label-group\">\n  <input\n    [ngClass]=\"(controlDir && controlDir.control && controlDir.control.touched) ? !controlDir.control.valid ? 'is-invalid' : 'is-valid' : null\"\n    [type]=\"type\"\n    (input)=\"onChange($event.target.value)\"\n    (blur)=\"onTouched()\"\n    id=\"{{label}}\"\n    #input\n    class=\"form-control\"\n    placeholder=\"{{label}}\"\n  >\n  <div *ngIf=\"controlDir && controlDir.control && controlDir.control.status === 'PENDING'\" class=\"fa fa-spinner fa-spin loader\"></div>\n  <label for=\"{{label}}\">{{label}}</label>\n  <div class=\"invalid-feedback\" *ngIf=\"(controlDir && controlDir.control && !controlDir.control.valid && controlDir.control.touched)\">\n    <span *ngIf=\"controlDir.control.errors?.required\">{{label}} is required</span>\n    <span *ngIf=\"controlDir.control.errors?.pattern\">Invalid email address</span>\n\n  </div>\n\n  <div class=\"invalid-feedback d-block\" *ngIf=\"(controlDir && controlDir.control && !controlDir.control.valid && controlDir.control.dirty)\">\n    <span *ngIf=\"controlDir.control.errors?.emailExists\">Email address is in use</span>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/account/account.service.ts":
  /*!********************************************!*\
    !*** ./src/app/account/account.service.ts ***!
    \********************************************/

  /*! exports provided: AccountService */

  /***/
  function srcAppAccountAccountServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountService", function () {
      return AccountService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AccountService = /*#__PURE__*/function () {
      function AccountService(http, router) {
        _classCallCheck(this, AccountService);

        this.http = http;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.currentUserSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
        this.currentUser$ = this.currentUserSource.asObservable();
      } // tslint:disable-next-line: typedef


      _createClass(AccountService, [{
        key: "loadCurrentUser",
        value: function loadCurrentUser(token) {
          var _this = this;

          if (token === null) {
            this.currentUserSource.next(null);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
          }

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
          headers = headers.set('Authorization', "Bearer ".concat(token));
          return this.http.get(this.baseUrl + 'account', {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
            if (user) {
              localStorage.setItem('token', user.token);

              _this.currentUserSource.next(user);
            }
          }));
        }
      }, {
        key: "login",
        value: function login(values) {
          var _this2 = this;

          return this.http.post(this.baseUrl + 'account/login', values).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
            if (user) {
              localStorage.setItem('token', user.token);

              _this2.currentUserSource.next(user);
            }
          }));
        }
      }, {
        key: "register",
        value: function register(values) {
          var _this3 = this;

          return this.http.post(this.baseUrl + 'account/register', values).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
            if (user) {
              localStorage.setItem('token', user.token);

              _this3.currentUserSource.next(user);
            }
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('token');
          this.currentUserSource.next(null);
          this.router.navigateByUrl('/');
        }
      }, {
        key: "checkEmailExists",
        value: function checkEmailExists(email) {
          return this.http.get(this.baseUrl + 'account/emailexists?email=' + email);
        }
      }, {
        key: "getUserAddress",
        value: function getUserAddress() {
          return this.http.get(this.baseUrl + 'account/address');
        }
      }, {
        key: "updateUserAddress",
        value: function updateUserAddress(address) {
          return this.http.put(this.baseUrl + 'account/address', address);
        }
      }]);

      return AccountService;
    }();

    AccountService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    AccountService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AccountService);
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _core_test_error_test_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./core/test-error/test-error.component */
    "./src/app/core/test-error/test-error.component.ts");
    /* harmony import */


    var _core_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./core/server-error/server-error.component */
    "./src/app/core/server-error/server-error.component.ts");
    /* harmony import */


    var _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./core/not-found/not-found.component */
    "./src/app/core/not-found/not-found.component.ts");
    /* harmony import */


    var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./core/guards/auth.guard */
    "./src/app/core/guards/auth.guard.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
      data: {
        breadcrumb: 'Home'
      }
    }, {
      path: 'test-error',
      component: _core_test_error_test_error_component__WEBPACK_IMPORTED_MODULE_4__["TestErrorComponent"],
      data: {
        breadcrumb: 'Test Errors'
      }
    }, {
      path: 'server-error',
      component: _core_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_5__["ServerErrorComponent"],
      data: {
        breadcrumb: 'Server Error'
      }
    }, {
      path: 'not-found',
      component: _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"],
      data: {
        breadcrumb: 'Not Found'
      }
    }, {
      path: 'shop',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | shop-shop-module */
        "shop-shop-module").then(__webpack_require__.bind(null,
        /*! ./shop/shop.module */
        "./src/app/shop/shop.module.ts")).then(function (mod) {
          return mod.ShopModule;
        });
      },
      data: {
        breadcrumb: 'Shop'
      }
    }, {
      path: 'basket',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | basket-basket-module */
        "basket-basket-module").then(__webpack_require__.bind(null,
        /*! ./basket/basket.module */
        "./src/app/basket/basket.module.ts")).then(function (mod) {
          return mod.BasketModule;
        });
      },
      data: {
        breadcrumb: 'Basket'
      }
    }, {
      path: 'checkout',
      canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | checkout-checkout-module */
        "checkout-checkout-module").then(__webpack_require__.bind(null,
        /*! ./checkout/checkout.module */
        "./src/app/checkout/checkout.module.ts")).then(function (mod) {
          return mod.CheckoutModule;
        });
      },
      data: {
        breadcrumb: 'Checkout'
      }
    }, {
      path: 'orders',
      canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | orders-orders-module */
        "orders-orders-module").then(__webpack_require__.bind(null,
        /*! ./orders/orders.module */
        "./src/app/orders/orders.module.ts")).then(function (mod) {
          return mod.OrdersModule;
        });
      },
      data: {
        breadcrumb: 'Orders'
      }
    }, {
      path: 'account',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | account-account-module */
        "account-account-module").then(__webpack_require__.bind(null,
        /*! ./account/account.module */
        "./src/app/account/account.module.ts")).then(function (mod) {
          return mod.AccountModule;
        });
      },
      data: {
        breadcrumb: {
          skip: true
        }
      }
    }, {
      path: '**',
      redirectTo: 'not-found',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _basket_basket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basket/basket.service */
    "./src/app/basket/basket.service.ts");
    /* harmony import */


    var _account_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./account/account.service */
    "./src/app/account/account.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(basketService, accountService) {
        _classCallCheck(this, AppComponent);

        this.basketService = basketService;
        this.accountService = accountService;
        this.title = 'Skinet';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadBasket();
          this.loadCurrentUser();
        }
      }, {
        key: "loadCurrentUser",
        value: function loadCurrentUser() {
          var token = localStorage.getItem('token');
          this.accountService.loadCurrentUser(token).subscribe(function () {
            console.log('loaded user');
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "loadBasket",
        value: function loadBasket() {
          var basketId = localStorage.getItem('basket_id');

          if (basketId) {
            this.basketService.getBasket(basketId).subscribe(function () {
              console.log('initialised basket');
            }, function (error) {
              console.log(error);
            });
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _basket_basket_service__WEBPACK_IMPORTED_MODULE_2__["BasketService"]
      }, {
        type: _account_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
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
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _home_home_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/home.module */
    "./src/app/home/home.module.ts");
    /* harmony import */


    var _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./core/interceptors/error.interceptor */
    "./src/app/core/interceptors/error.interceptor.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _core_interceptors_loading_interceptors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./core/interceptors/loading.interceptors */
    "./src/app/core/interceptors/loading.interceptors.ts");
    /* harmony import */


    var _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./core/interceptors/jwt.interceptor */
    "./src/app/core/interceptors/jwt.interceptor.ts"); // @ts-ignore


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomeModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_9__["ErrorInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _core_interceptors_loading_interceptors__WEBPACK_IMPORTED_MODULE_11__["LoadingInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__["JwtInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/basket/basket.service.ts":
  /*!******************************************!*\
    !*** ./src/app/basket/basket.service.ts ***!
    \******************************************/

  /*! exports provided: BasketService */

  /***/
  function srcAppBasketBasketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasketService", function () {
      return BasketService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_models_basket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/models/basket */
    "./src/app/shared/models/basket.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var BasketService = /*#__PURE__*/function () {
      function BasketService(http) {
        _classCallCheck(this, BasketService);

        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.basketSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.basket$ = this.basketSource.asObservable();
        this.basketTotalSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.basketTotal$ = this.basketTotalSource.asObservable();
        this.shipping = 0;
      }

      _createClass(BasketService, [{
        key: "createPaymentIntent",
        value: function createPaymentIntent() {
          var _this4 = this;

          return this.http.post(this.baseUrl + 'payments/' + this.getCurrentBasketValue().id, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (basket) {
            _this4.basketSource.next(basket);
          }));
        }
      }, {
        key: "setShippingPrice",
        value: function setShippingPrice(deliveryMethod) {
          this.shipping = deliveryMethod.price;
          var basket = this.getCurrentBasketValue();
          basket.deliveryMethodId = deliveryMethod.id;
          basket.shippingPrice = deliveryMethod.price;
          this.calculateTotals();
          this.setBasket(basket);
        }
      }, {
        key: "getBasket",
        value: function getBasket(id) {
          var _this5 = this;

          return this.http.get(this.baseUrl + 'basket?id=' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (basket) {
            _this5.basketSource.next(basket);

            _this5.shipping = basket.shippingPrice;

            _this5.calculateTotals();
          }));
        }
      }, {
        key: "setBasket",
        value: function setBasket(basket) {
          var _this6 = this;

          return this.http.post(this.baseUrl + 'basket', basket).subscribe(function (response) {
            _this6.basketSource.next(response);

            _this6.calculateTotals();
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getCurrentBasketValue",
        value: function getCurrentBasketValue() {
          return this.basketSource.value;
        }
      }, {
        key: "addItemToBasket",
        value: function addItemToBasket(item) {
          var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          var itemToAdd = this.mapProductItemToBasketItem(item, quantity);
          var basket = this.getCurrentBasketValue();

          if (basket === null) {
            basket = this.createBasket();
          }

          basket.items = this.addOrUpdateItem(basket.items, itemToAdd, quantity);
          this.setBasket(basket);
        }
      }, {
        key: "incrementItemQuantity",
        value: function incrementItemQuantity(item) {
          var basket = this.getCurrentBasketValue();
          var foundItemIndex = basket.items.findIndex(function (x) {
            return x.id === item.id;
          });
          basket.items[foundItemIndex].quantity++;
          this.setBasket(basket);
        }
      }, {
        key: "decrementItemQuantity",
        value: function decrementItemQuantity(item) {
          var basket = this.getCurrentBasketValue();
          var foundItemIndex = basket.items.findIndex(function (x) {
            return x.id === item.id;
          });

          if (basket.items[foundItemIndex].quantity > 1) {
            basket.items[foundItemIndex].quantity--;
            this.setBasket(basket);
          } else {
            this.removeItemFromBasket(item);
          }
        }
      }, {
        key: "removeItemFromBasket",
        value: function removeItemFromBasket(item) {
          var basket = this.getCurrentBasketValue();

          if (basket.items.some(function (x) {
            return x.id === item.id;
          })) {
            basket.items = basket.items.filter(function (i) {
              return i.id !== item.id;
            });

            if (basket.items.length > 0) {
              this.setBasket(basket);
            } else {
              this.deleteBasket(basket);
            }
          }
        }
      }, {
        key: "deleteLocalBasket",
        value: function deleteLocalBasket(id) {
          this.basketSource.next(null);
          this.basketTotalSource.next(null);
          localStorage.removeItem('basket_id');
        }
      }, {
        key: "deleteBasket",
        value: function deleteBasket(basket) {
          var _this7 = this;

          return this.http["delete"](this.baseUrl + 'basket?id=' + basket.id).subscribe(function () {
            _this7.basketSource.next(null);

            _this7.basketTotalSource.next(null);

            localStorage.removeItem('basket_id');
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "calculateTotals",
        value: function calculateTotals() {
          var basket = this.getCurrentBasketValue();
          var shipping = this.shipping;
          var subtotal = basket.items.reduce(function (a, b) {
            return b.price * b.quantity + a;
          }, 0);
          var total = subtotal + shipping;
          this.basketTotalSource.next({
            shipping: shipping,
            total: total,
            subtotal: subtotal
          });
        }
      }, {
        key: "addOrUpdateItem",
        value: function addOrUpdateItem(items, itemToAdd, quantity) {
          var index = items.findIndex(function (i) {
            return i.id === itemToAdd.id;
          });

          if (index === -1) {
            itemToAdd.quantity = quantity;
            items.push(itemToAdd);
          } else {
            items[index].quantity += quantity;
          }

          return items;
        }
      }, {
        key: "createBasket",
        value: function createBasket() {
          var basket = new _shared_models_basket__WEBPACK_IMPORTED_MODULE_5__["Basket"]();
          localStorage.setItem('basket_id', basket.id);
          return basket;
        }
      }, {
        key: "mapProductItemToBasketItem",
        value: function mapProductItemToBasketItem(item, quantity) {
          return {
            id: item.id,
            productName: item.name,
            price: item.price,
            pictureUrl: item.pictureUrl,
            quantity: quantity,
            brand: item.productBrand,
            type: item.productType
          };
        }
      }]);

      return BasketService;
    }();

    BasketService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    BasketService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BasketService);
    /***/
  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./nav-bar/nav-bar.component */
    "./src/app/core/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _test_error_test_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./test-error/test-error.component */
    "./src/app/core/test-error/test-error.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/core/not-found/not-found.component.ts");
    /* harmony import */


    var _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./server-error/server-error.component */
    "./src/app/core/server-error/server-error.component.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./section-header/section-header.component */
    "./src/app/core/section-header/section-header.component.ts");
    /* harmony import */


    var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! xng-breadcrumb */
    "./node_modules/xng-breadcrumb/__ivy_ngcc__/fesm2015/xng-breadcrumb.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"], _test_error_test_error_component__WEBPACK_IMPORTED_MODULE_5__["TestErrorComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"], _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_7__["ServerErrorComponent"], _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_9__["SectionHeaderComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], xng_breadcrumb__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot({
        positionClass: 'toast-bottom-right',
        preventDuplicates: true
      })],
      exports: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"], _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_9__["SectionHeaderComponent"]]
    })], CoreModule);
    /***/
  },

  /***/
  "./src/app/core/guards/auth.guard.ts":
  /*!*******************************************!*\
    !*** ./src/app/core/guards/auth.guard.ts ***!
    \*******************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppCoreGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_account_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/account/account.service */
    "./src/app/account/account.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(accountService, router) {
        _classCallCheck(this, AuthGuard);

        this.accountService = accountService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this8 = this;

          return this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (auth) {
            if (auth) {
              return true;
            }

            _this8.router.navigate(['account/login'], {
              queryParams: {
                returnUrl: state.url
              }
            });
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: src_app_account_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/core/interceptors/error.interceptor.ts":
  /*!********************************************************!*\
    !*** ./src/app/core/interceptors/error.interceptor.ts ***!
    \********************************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcAppCoreInterceptorsErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var ErrorInterceptor = /*#__PURE__*/function () {
      function ErrorInterceptor(router, toastr) {
        _classCallCheck(this, ErrorInterceptor);

        this.router = router;
        this.toastr = toastr;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this9 = this;

          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            if (error) {
              if (error.status === 400) {
                if (error.error.errors) {
                  throw error.error;
                } else {
                  _this9.toastr.error(error.error.message, error.error.statusCode);
                }
              }

              if (error.status === 401) {
                _this9.toastr.error(error.error.message, error.error.statusCode);
              }

              if (error.status === 404) {
                _this9.router.navigateByUrl('/not-found');
              }

              if (error.status === 500) {
                var navigationExtras = {
                  state: {
                    error: error.error
                  }
                };

                _this9.router.navigateByUrl('/server-error', navigationExtras);
              }
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }];
    };

    ErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()], ErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/core/interceptors/jwt.interceptor.ts":
  /*!******************************************************!*\
    !*** ./src/app/core/interceptors/jwt.interceptor.ts ***!
    \******************************************************/

  /*! exports provided: JwtInterceptor */

  /***/
  function srcAppCoreInterceptorsJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return JwtInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var JwtInterceptor = /*#__PURE__*/function () {
      function JwtInterceptor() {
        _classCallCheck(this, JwtInterceptor);
      }

      _createClass(JwtInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var token = localStorage.getItem('token');

          if (token) {
            req = req.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(token)
              }
            });
          }

          return next.handle(req);
        }
      }]);

      return JwtInterceptor;
    }();

    JwtInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], JwtInterceptor);
    /***/
  },

  /***/
  "./src/app/core/interceptors/loading.interceptors.ts":
  /*!***********************************************************!*\
    !*** ./src/app/core/interceptors/loading.interceptors.ts ***!
    \***********************************************************/

  /*! exports provided: LoadingInterceptor */

  /***/
  function srcAppCoreInterceptorsLoadingInterceptorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingInterceptor", function () {
      return LoadingInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_busy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/busy.service */
    "./src/app/core/services/busy.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var LoadingInterceptor = /*#__PURE__*/function () {
      function LoadingInterceptor(busyService) {
        _classCallCheck(this, LoadingInterceptor);

        this.busyService = busyService;
      }

      _createClass(LoadingInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this10 = this;

          if (req.method === 'POST' && req.url.includes('orders')) {
            return next.handle(req);
          }

          if (req.method === 'DELETE') {
            return next.handle(req);
          }

          if (req.url.includes('emailexists')) {
            return next.handle(req);
          }

          this.busyService.busy();
          return next.handle(req).pipe( //delay(1000),
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            _this10.busyService.idle();
          }));
        }
      }]);

      return LoadingInterceptor;
    }();

    LoadingInterceptor.ctorParameters = function () {
      return [{
        type: _services_busy_service__WEBPACK_IMPORTED_MODULE_1__["BusyService"]
      }];
    };

    LoadingInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], LoadingInterceptor);
    /***/
  },

  /***/
  "./src/app/core/nav-bar/nav-bar.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/core/nav-bar/nav-bar.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreNavBarNavBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cart-no {\n  position: absolute;\n  min-height: 25px;\n  min-width: 25px;\n  border-radius: 50%;\n  font-size: 1em;\n  background: blue;\n  color: white;\n  text-align: center;\n  top: -12px;\n  right: 32px;\n}\n\na {\n  text-decoration: none;\n  color: #343a40;\n}\n\na.active {\n  color: orange;\n}\n\n.logo {\n  cursor: pointer;\n}\n\n.logo:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vd25lci9EZXNrdG9wL015LXByb2plY3QvOC1DcmVhdGUgRS1jb21tZXJjZSB3aXRoIC5uZXQgYW5kIEFuZ3VsYXIvRGVtb24gc3BhcmUvc2tpbmV0L2NsaWVudC9zcmMvYXBwL2NvcmUvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxhQUFBO0FDQ0o7O0FER0E7RUFDRSxlQUFBO0FDQUY7O0FEQ0U7RUFDRSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb3JlL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0LW5vIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWluLWhlaWdodDogMjVweDtcbiAgICBtaW4td2lkdGg6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGJhY2tncm91bmQ6IGJsdWU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0b3A6IC0xMnB4O1xuICAgIHJpZ2h0OiAzMnB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzM0M2E0MDtcblxuICAmLmFjdGl2ZSB7XG4gICAgY29sb3I6IG9yYW5nZTtcbiAgfVxufVxuXG4ubG9nbyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxufVxuIiwiLmNhcnQtbm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1pbi1oZWlnaHQ6IDI1cHg7XG4gIG1pbi13aWR0aDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDFlbTtcbiAgYmFja2dyb3VuZDogYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogLTEycHg7XG4gIHJpZ2h0OiAzMnB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzM0M2E0MDtcbn1cbmEuYWN0aXZlIHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmxvZ28ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubG9nbzpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/core/nav-bar/nav-bar.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/core/nav-bar/nav-bar.component.ts ***!
    \***************************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppCoreNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/basket/basket.service */
    "./src/app/basket/basket.service.ts");
    /* harmony import */


    var _account_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../account/account.service */
    "./src/app/account/account.service.ts");

    var NavBarComponent = /*#__PURE__*/function () {
      function NavBarComponent(basketService, accountService) {
        _classCallCheck(this, NavBarComponent);

        this.basketService = basketService;
        this.accountService = accountService;
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.basket$ = this.basketService.basket$;
          this.currentUser$ = this.accountService.currentUser$;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.accountService.logout();
        }
      }]);

      return NavBarComponent;
    }();

    NavBarComponent.ctorParameters = function () {
      return [{
        type: src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_2__["BasketService"]
      }, {
        type: _account_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
      }];
    };

    NavBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-bar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./nav-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/nav-bar/nav-bar.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./nav-bar.component.scss */
      "./src/app/core/nav-bar/nav-bar.component.scss"))["default"]]
    })], NavBarComponent);
    /***/
  },

  /***/
  "./src/app/core/not-found/not-found.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/core/not-found/not-found.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreNotFoundNotFoundComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/core/not-found/not-found.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/core/not-found/not-found.component.ts ***!
    \*******************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppCoreNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-not-found',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/not-found/not-found.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./not-found.component.scss */
      "./src/app/core/not-found/not-found.component.scss"))["default"]]
    })], NotFoundComponent);
    /***/
  },

  /***/
  "./src/app/core/section-header/section-header.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/core/section-header/section-header.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreSectionHeaderSectionHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2VjdGlvbi1oZWFkZXIvc2VjdGlvbi1oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/core/section-header/section-header.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/core/section-header/section-header.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SectionHeaderComponent */

  /***/
  function srcAppCoreSectionHeaderSectionHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionHeaderComponent", function () {
      return SectionHeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! xng-breadcrumb */
    "./node_modules/xng-breadcrumb/__ivy_ngcc__/fesm2015/xng-breadcrumb.js");

    var SectionHeaderComponent = /*#__PURE__*/function () {
      function SectionHeaderComponent(bsService) {
        _classCallCheck(this, SectionHeaderComponent);

        this.bsService = bsService;
      }

      _createClass(SectionHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.breadcrumb$ = this.bsService.breadcrumbs$;
        }
      }]);

      return SectionHeaderComponent;
    }();

    SectionHeaderComponent.ctorParameters = function () {
      return [{
        type: xng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbService"]
      }];
    };

    SectionHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-section-header',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./section-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/section-header/section-header.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./section-header.component.scss */
      "./src/app/core/section-header/section-header.component.scss"))["default"]]
    })], SectionHeaderComponent);
    /***/
  },

  /***/
  "./src/app/core/server-error/server-error.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/core/server-error/server-error.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreServerErrorServerErrorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2VydmVyLWVycm9yL3NlcnZlci1lcnJvci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/core/server-error/server-error.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/core/server-error/server-error.component.ts ***!
    \*************************************************************/

  /*! exports provided: ServerErrorComponent */

  /***/
  function srcAppCoreServerErrorServerErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function () {
      return ServerErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ServerErrorComponent = /*#__PURE__*/function () {
      function ServerErrorComponent(router) {
        _classCallCheck(this, ServerErrorComponent);

        this.router = router;
        var navigation = this.router.getCurrentNavigation();
        this.error = navigation && navigation.extras && navigation.extras.state && navigation.extras.state.error;
      }

      _createClass(ServerErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServerErrorComponent;
    }();

    ServerErrorComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ServerErrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-server-error',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./server-error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/server-error/server-error.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./server-error.component.scss */
      "./src/app/core/server-error/server-error.component.scss"))["default"]]
    })], ServerErrorComponent);
    /***/
  },

  /***/
  "./src/app/core/services/busy.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/core/services/busy.service.ts ***!
    \***********************************************/

  /*! exports provided: BusyService */

  /***/
  function srcAppCoreServicesBusyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BusyService", function () {
      return BusyService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");

    var BusyService = /*#__PURE__*/function () {
      function BusyService(spinnerService) {
        _classCallCheck(this, BusyService);

        this.spinnerService = spinnerService;
        this.busyRequestCount = 0;
      }

      _createClass(BusyService, [{
        key: "busy",
        value: function busy() {
          this.busyRequestCount++;
          this.spinnerService.show(undefined, {
            type: 'timer',
            bdColor: 'rgba(255, 255, 255, 0.7)',
            color: '#333333'
          });
        }
      }, {
        key: "idle",
        value: function idle() {
          this.busyRequestCount--;

          if (this.busyRequestCount <= 0) {
            this.busyRequestCount = 0;
            this.spinnerService.hide();
          }
        }
      }]);

      return BusyService;
    }();

    BusyService.ctorParameters = function () {
      return [{
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]
      }];
    };

    BusyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BusyService);
    /***/
  },

  /***/
  "./src/app/core/test-error/test-error.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/core/test-error/test-error.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreTestErrorTestErrorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdGVzdC1lcnJvci90ZXN0LWVycm9yLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/core/test-error/test-error.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/core/test-error/test-error.component.ts ***!
    \*********************************************************/

  /*! exports provided: TestErrorComponent */

  /***/
  function srcAppCoreTestErrorTestErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestErrorComponent", function () {
      return TestErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var TestErrorComponent = /*#__PURE__*/function () {
      function TestErrorComponent(http) {
        _classCallCheck(this, TestErrorComponent);

        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
      }

      _createClass(TestErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "get404Error",
        value: function get404Error() {
          this.http.get(this.baseUrl + 'products/42').subscribe(function (response) {
            console.log(response);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "get500Error",
        value: function get500Error() {
          this.http.get(this.baseUrl + 'buggy/servererror').subscribe(function (response) {
            console.log(response);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "get400Error",
        value: function get400Error() {
          this.http.get(this.baseUrl + 'buggy/badrequest').subscribe(function (response) {
            console.log(response);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "get400ValidationError",
        value: function get400ValidationError() {
          var _this11 = this;

          this.http.get(this.baseUrl + 'products/fortytwo').subscribe(function (response) {
            console.log(response);
          }, function (error) {
            console.log(error);
            _this11.validationErrors = error.errors;
          });
        }
      }]);

      return TestErrorComponent;
    }();

    TestErrorComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    TestErrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-test-error',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./test-error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/test-error/test-error.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./test-error.component.scss */
      "./src/app/core/test-error/test-error.component.scss"))["default"]]
    })], TestErrorComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".featured {\n  height: 250px;\n}\n\nimg {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 600px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vd25lci9EZXNrdG9wL015LXByb2plY3QvOC1DcmVhdGUgRS1jb21tZXJjZSB3aXRoIC5uZXQgYW5kIEFuZ3VsYXIvRGVtb24gc3BhcmUvc2tpbmV0L2NsaWVudC9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVhdHVyZWQge1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuXG5pbWcge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4iLCIuZmVhdHVyZWQge1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuXG5pbWcge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
      exports: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
    })], HomeModule);
    /***/
  },

  /***/
  "./src/app/shared/components/basket-summary/basket-summary.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/shared/components/basket-summary/basket-summary.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsBasketSummaryBasketSummaryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Jhc2tldC1zdW1tYXJ5L2Jhc2tldC1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shared/components/basket-summary/basket-summary.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/components/basket-summary/basket-summary.component.ts ***!
    \******************************************************************************/

  /*! exports provided: BasketSummaryComponent */

  /***/
  function srcAppSharedComponentsBasketSummaryBasketSummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasketSummaryComponent", function () {
      return BasketSummaryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BasketSummaryComponent = /*#__PURE__*/function () {
      function BasketSummaryComponent() {
        _classCallCheck(this, BasketSummaryComponent);

        this.decrement = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.increment = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isBasket = true;
        this.items = [];
        this.isOrder = false;
      }

      _createClass(BasketSummaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "decrementItemQuantity",
        value: function decrementItemQuantity(item) {
          this.decrement.emit(item);
        }
      }, {
        key: "incrementItemQuantity",
        value: function incrementItemQuantity(item) {
          this.increment.emit(item);
        }
      }, {
        key: "removeBasketItem",
        value: function removeBasketItem(item) {
          this.remove.emit(item);
        }
      }]);

      return BasketSummaryComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], BasketSummaryComponent.prototype, "decrement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], BasketSummaryComponent.prototype, "increment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], BasketSummaryComponent.prototype, "remove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BasketSummaryComponent.prototype, "isBasket", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BasketSummaryComponent.prototype, "items", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BasketSummaryComponent.prototype, "isOrder", void 0);
    BasketSummaryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-basket-summary',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./basket-summary.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/basket-summary/basket-summary.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./basket-summary.component.scss */
      "./src/app/shared/components/basket-summary/basket-summary.component.scss"))["default"]]
    })], BasketSummaryComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/order-totals/order-totals.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/components/order-totals/order-totals.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsOrderTotalsOrderTotalsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL29yZGVyLXRvdGFscy9vcmRlci10b3RhbHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/order-totals/order-totals.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/components/order-totals/order-totals.component.ts ***!
    \**************************************************************************/

  /*! exports provided: OrderTotalsComponent */

  /***/
  function srcAppSharedComponentsOrderTotalsOrderTotalsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderTotalsComponent", function () {
      return OrderTotalsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OrderTotalsComponent = /*#__PURE__*/function () {
      function OrderTotalsComponent() {
        _classCallCheck(this, OrderTotalsComponent);
      }

      _createClass(OrderTotalsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OrderTotalsComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OrderTotalsComponent.prototype, "shippingPrice", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OrderTotalsComponent.prototype, "subtotal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OrderTotalsComponent.prototype, "total", void 0);
    OrderTotalsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order-totals',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./order-totals.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/order-totals/order-totals.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./order-totals.component.scss */
      "./src/app/shared/components/order-totals/order-totals.component.scss"))["default"]]
    })], OrderTotalsComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/pager/pager.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/pager/pager.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsPagerPagerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhZ2VyL3BhZ2VyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shared/components/pager/pager.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/components/pager/pager.component.ts ***!
    \************************************************************/

  /*! exports provided: PagerComponent */

  /***/
  function srcAppSharedComponentsPagerPagerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagerComponent", function () {
      return PagerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PagerComponent = /*#__PURE__*/function () {
      function PagerComponent() {
        _classCallCheck(this, PagerComponent);

        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(PagerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onPagerChange",
        value: function onPagerChange(event) {
          this.pageChanged.emit(event.page);
        }
      }]);

      return PagerComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PagerComponent.prototype, "totalCount", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PagerComponent.prototype, "pageSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PagerComponent.prototype, "pageNumber", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], PagerComponent.prototype, "pageChanged", void 0);
    PagerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pager',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pager.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/pager/pager.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pager.component.scss */
      "./src/app/shared/components/pager/pager.component.scss"))["default"]]
    })], PagerComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/paging-header/paging-header.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/components/paging-header/paging-header.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsPagingHeaderPagingHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhZ2luZy1oZWFkZXIvcGFnaW5nLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/shared/components/paging-header/paging-header.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/components/paging-header/paging-header.component.ts ***!
    \****************************************************************************/

  /*! exports provided: PagingHeaderComponent */

  /***/
  function srcAppSharedComponentsPagingHeaderPagingHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagingHeaderComponent", function () {
      return PagingHeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PagingHeaderComponent = /*#__PURE__*/function () {
      function PagingHeaderComponent() {
        _classCallCheck(this, PagingHeaderComponent);
      }

      _createClass(PagingHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PagingHeaderComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PagingHeaderComponent.prototype, "pageNumber", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PagingHeaderComponent.prototype, "pageSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PagingHeaderComponent.prototype, "totalCount", void 0);
    PagingHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-paging-header',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./paging-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/paging-header/paging-header.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./paging-header.component.scss */
      "./src/app/shared/components/paging-header/paging-header.component.scss"))["default"]]
    })], PagingHeaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/stepper/stepper.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/shared/components/stepper/stepper.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsStepperStepperComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button.nav-link {\n  background: #e9ecef;\n  border-radius: 0;\n  border: none;\n}\nbutton.nav-link:focus {\n  outline: none;\n}\nbutton.nav-link.active:hover {\n  color: white;\n}\nbutton.nav-link :active {\n  outline: none;\n}\nbutton.nav-link.active:focus {\n  outline: none;\n}\nbutton.nav-link:disabled:not(.active) {\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vd25lci9EZXNrdG9wL015LXByb2plY3QvOC1DcmVhdGUgRS1jb21tZXJjZSB3aXRoIC5uZXQgYW5kIEFuZ3VsYXIvRGVtb24gc3BhcmUvc2tpbmV0L2NsaWVudC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3N0ZXBwZXIvc3RlcHBlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3RlcHBlci9zdGVwcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtBQ0NKO0FEQ0U7RUFDRSxZQUFBO0FDQ0o7QURDRTtFQUNFLGFBQUE7QUNDSjtBRENFO0VBQ0UsYUFBQTtBQ0NKO0FEQ0U7RUFDRSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zdGVwcGVyL3N0ZXBwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ubmF2LWxpbmsge1xuICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IG5vbmU7XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICAmLmFjdGl2ZTpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gICYgOmFjdGl2ZSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICAmLmFjdGl2ZTpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICAmOmRpc2FibGVkOm5vdCguYWN0aXZlKSB7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cbn1cbiIsImJ1dHRvbi5uYXYtbGluayB7XG4gIGJhY2tncm91bmQ6ICNlOWVjZWY7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogbm9uZTtcbn1cbmJ1dHRvbi5uYXYtbGluazpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5idXR0b24ubmF2LWxpbmsuYWN0aXZlOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuYnV0dG9uLm5hdi1saW5rIDphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xufVxuYnV0dG9uLm5hdi1saW5rLmFjdGl2ZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5idXR0b24ubmF2LWxpbms6ZGlzYWJsZWQ6bm90KC5hY3RpdmUpIHtcbiAgY29sb3I6ICMzMzM7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/components/stepper/stepper.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/stepper/stepper.component.ts ***!
    \****************************************************************/

  /*! exports provided: StepperComponent */

  /***/
  function srcAppSharedComponentsStepperStepperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StepperComponent", function () {
      return StepperComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");

    var StepperComponent_1;

    var StepperComponent = StepperComponent_1 = /*#__PURE__*/function (_angular_cdk_stepper_) {
      _inherits(StepperComponent, _angular_cdk_stepper_);

      var _super = _createSuper(StepperComponent);

      function StepperComponent() {
        _classCallCheck(this, StepperComponent);

        return _super.apply(this, arguments);
      }

      _createClass(StepperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.linear = this.linearModeSelected;
        }
      }, {
        key: "onClick",
        value: function onClick(index) {
          this.selectedIndex = index;
        }
      }]);

      return StepperComponent;
    }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepper"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StepperComponent.prototype, "linearModeSelected", void 0);
    StepperComponent = StepperComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-stepper',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./stepper.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/stepper/stepper.component.html"))["default"],
      providers: [{
        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepper"],
        useExisting: StepperComponent_1
      }],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./stepper.component.scss */
      "./src/app/shared/components/stepper/stepper.component.scss"))["default"]]
    })], StepperComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/text-input/text-input.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/text-input/text-input.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsTextInputTextInputComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-label-group {\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.form-label-group > input,\n.form-label-group > label {\n  height: 3.125rem;\n  padding: 0.75rem;\n}\n\n.form-label-group > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n  /* Override default `<label>` margin */\n  line-height: 1.5;\n  color: #495057;\n  pointer-events: none;\n  cursor: text;\n  /* Match the input under the label */\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  transition: all 0.1s ease-in-out;\n}\n\n.form-label-group input::-ms-input-placeholder {\n  color: transparent;\n}\n\n.form-label-group input::-moz-placeholder {\n  color: transparent;\n}\n\n.form-label-group input::placeholder {\n  color: transparent;\n}\n\n.form-label-group input:not(:placeholder-shown) {\n  padding-top: 1.25rem;\n  padding-bottom: 0.25rem;\n}\n\n.form-label-group input:not(:placeholder-shown) ~ label {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  font-size: 12px;\n  color: #777;\n}\n\n/* Fallback for Edge\n-------------------------------------------------- */\n\n@supports (-ms-ime-align: auto) {\n  .form-label-group > label {\n    display: none;\n  }\n\n  .form-label-group input::-ms-input-placeholder {\n    color: #777;\n  }\n}\n\n/* Fallback for IE\n-------------------------------------------------- */\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .form-label-group > label {\n    display: none;\n  }\n\n  .form-label-group input:-ms-input-placeholder {\n    color: #777;\n  }\n}\n\n.loader {\n  position: absolute;\n  width: auto;\n  top: 15px;\n  right: 10px;\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vd25lci9EZXNrdG9wL015LXByb2plY3QvOC1DcmVhdGUgRS1jb21tZXJjZSB3aXRoIC5uZXQgYW5kIEFuZ3VsYXIvRGVtb24gc3BhcmUvc2tpbmV0L2NsaWVudC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RleHQtaW5wdXQvdGV4dC1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGV4dC1pbnB1dC90ZXh0LWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBOztFQUVFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQWtCLHNDQUFBO0VBQ2xCLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUFjLG9DQUFBO0VBQ2QsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FDR0Y7O0FEUUE7RUFDRSxrQkFBQTtBQ0dGOztBREFBO0VBQ0Usa0JBQUE7QUNHRjs7QURBQTtFQUNFLGtCQUFBO0FDR0Y7O0FEQUE7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0FDR0Y7O0FEQUE7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNHRjs7QURBQTtvREFBQTs7QUFFQTtFQUNFO0lBQ0UsYUFBQTtFQ0dGOztFRERBO0lBQ0UsV0FBQTtFQ0lGO0FBQ0Y7O0FEREE7b0RBQUE7O0FBRUE7RUFDRTtJQUNFLGFBQUE7RUNHRjs7RUREQTtJQUNFLFdBQUE7RUNJRjtBQUNGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90ZXh0LWlucHV0L3RleHQtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1sYWJlbC1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgPiBpbnB1dCxcbi5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xuICBoZWlnaHQ6IDMuMTI1cmVtO1xuICBwYWRkaW5nOiAuNzVyZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAwOyAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IHRleHQ7IC8qIE1hdGNoIHRoZSBpbnB1dCB1bmRlciB0aGUgbGFiZWwgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xuICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IC4yNXJlbTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgfiBsYWJlbCB7XG4gIHBhZGRpbmctdG9wOiAuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3Nzc7XG59XG5cbi8qIEZhbGxiYWNrIGZvciBFZGdlXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XG4gIC5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM3Nzc7XG4gIH1cbn1cblxuLyogRmFsbGJhY2sgZm9yIElFXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjNzc3O1xuICB9XG59XG5cbi5sb2FkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiBhdXRvO1xuICB0b3A6IDE1cHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuIiwiLmZvcm0tbGFiZWwtZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwID4gaW5wdXQsXG4uZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcbiAgaGVpZ2h0OiAzLjEyNXJlbTtcbiAgcGFkZGluZzogMC43NXJlbTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIC8qIE92ZXJyaWRlIGRlZmF1bHQgYDxsYWJlbD5gIG1hcmdpbiAqL1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGN1cnNvcjogdGV4dDtcbiAgLyogTWF0Y2ggdGhlIGlucHV0IHVuZGVyIHRoZSBsYWJlbCAqL1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcbiAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB+IGxhYmVsIHtcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNzc3O1xufVxuXG4vKiBGYWxsYmFjayBmb3IgRWRnZVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbkBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xuICAuZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM3Nzc7XG4gIH1cbn1cbi8qIEZhbGxiYWNrIGZvciBJRVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gIC5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjNzc3O1xuICB9XG59XG4ubG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogYXV0bztcbiAgdG9wOiAxNXB4O1xuICByaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/components/text-input/text-input.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/components/text-input/text-input.component.ts ***!
    \**********************************************************************/

  /*! exports provided: TextInputComponent */

  /***/
  function srcAppSharedComponentsTextInputTextInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextInputComponent", function () {
      return TextInputComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var TextInputComponent = /*#__PURE__*/function () {
      function TextInputComponent(controlDir) {
        _classCallCheck(this, TextInputComponent);

        this.controlDir = controlDir;
        this.type = 'text';
        this.controlDir.valueAccessor = this;
      }

      _createClass(TextInputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var control = this.controlDir.control;
          var validators = control.validator ? [control.validator] : [];
          var asyncValidator = control.asyncValidator ? [control.asyncValidator] : [];
          control.setValidators(validators);
          control.setAsyncValidators(asyncValidator);
          control.updateValueAndValidity();
        }
      }, {
        key: "onChange",
        value: function onChange(event) {}
      }, {
        key: "onTouched",
        value: function onTouched() {}
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
      }, {
        key: "writeValue",
        value: function writeValue(obj) {
          this.input.nativeElement.value = obj || '';
        }
      }]);

      return TextInputComponent;
    }();

    TextInputComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', {
      "static": true
    })], TextInputComponent.prototype, "input", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TextInputComponent.prototype, "type", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TextInputComponent.prototype, "label", void 0);
    TextInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-text-input',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./text-input.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/text-input/text-input.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./text-input.component.scss */
      "./src/app/shared/components/text-input/text-input.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])())], TextInputComponent);
    /***/
  },

  /***/
  "./src/app/shared/models/basket.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/models/basket.ts ***!
    \*****************************************/

  /*! exports provided: Basket */

  /***/
  function srcAppSharedModelsBasketTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Basket", function () {
      return Basket;
    });
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/dist/esm-browser/index.js");

    var Basket = function Basket() {
      _classCallCheck(this, Basket);

      this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
      this.items = [];
    };
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/carousel */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
    /* harmony import */


    var _components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/paging-header/paging-header.component */
    "./src/app/shared/components/paging-header/paging-header.component.ts");
    /* harmony import */


    var _components_pager_pager_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/pager/pager.component */
    "./src/app/shared/components/pager/pager.component.ts");
    /* harmony import */


    var _components_order_totals_order_totals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/order-totals/order-totals.component */
    "./src/app/shared/components/order-totals/order-totals.component.ts");
    /* harmony import */


    var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-bootstrap/pagination */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var _components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/text-input/text-input.component */
    "./src/app/shared/components/text-input/text-input.component.ts");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/stepper/stepper.component */
    "./src/app/shared/components/stepper/stepper.component.ts");
    /* harmony import */


    var _components_basket_summary_basket_summary_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/basket-summary/basket-summary.component */
    "./src/app/shared/components/basket-summary/basket-summary.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_4__["PagingHeaderComponent"], _components_pager_pager_component__WEBPACK_IMPORTED_MODULE_5__["PagerComponent"], _components_order_totals_order_totals_component__WEBPACK_IMPORTED_MODULE_6__["OrderTotalsComponent"], _components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_10__["TextInputComponent"], _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_12__["StepperComponent"], _components_basket_summary_basket_summary_component__WEBPACK_IMPORTED_MODULE_13__["BasketSummaryComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(), ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"].forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__["CdkStepperModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]],
      exports: [ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"], _components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_4__["PagingHeaderComponent"], _components_pager_pager_component__WEBPACK_IMPORTED_MODULE_5__["PagerComponent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"], _components_order_totals_order_totals_component__WEBPACK_IMPORTED_MODULE_6__["OrderTotalsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"], _components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_10__["TextInputComponent"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__["CdkStepperModule"], _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_12__["StepperComponent"], _components_basket_summary_basket_summary_component__WEBPACK_IMPORTED_MODULE_13__["BasketSummaryComponent"]]
    })], SharedModule);
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'https://localhost:5001/api/'
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! /Users/owner/Desktop/My-project/8-Create E-commerce with .net and Angular/Demon spare/skinet/client/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map