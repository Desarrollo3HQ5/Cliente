"use strict";
(self["webpackChunkcliente"] = self["webpackChunkcliente"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _empleado_empleadocomponent_empleadocomponent_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empleado/empleadocomponent/empleadocomponent.component */ 3128);
/* harmony import */ var _components_biometrico_biometrico_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/biometrico/biometrico.component */ 9609);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: '',
  component: _components_biometrico_biometrico_component__WEBPACK_IMPORTED_MODULE_1__.BiometricoComponent
}, {
  path: 'Empleados',
  component: _empleado_empleadocomponent_empleadocomponent_component__WEBPACK_IMPORTED_MODULE_0__.EmpleadocomponentComponent
}, {
  path: 'Empleado/:titulo',
  component: _empleado_empleadocomponent_empleadocomponent_component__WEBPACK_IMPORTED_MODULE_0__.EmpleadocomponentComponent
}, {
  path: 'Biometrico',
  component: _components_biometrico_biometrico_component__WEBPACK_IMPORTED_MODULE_1__.BiometricoComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);




class AppComponent {
  constructor() {
    this.title = 'cliente';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 4,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-footer");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _empleado_empleado_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empleado/empleado.module */ 2884);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @zxing/ngx-scanner */ 3800);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _components_biometrico_biometrico_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/biometrico/biometrico.component */ 9609);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot([{
    path: '',
    component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent
  }, {
    path: 'Biometrico',
    component: _components_biometrico_biometrico_component__WEBPACK_IMPORTED_MODULE_5__.BiometricoComponent
  }]), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _empleado_empleado_module__WEBPACK_IMPORTED_MODULE_2__.EmpleadoModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_12__.ZXingScannerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _components_biometrico_biometrico_component__WEBPACK_IMPORTED_MODULE_5__.BiometricoComponent, _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _empleado_empleado_module__WEBPACK_IMPORTED_MODULE_2__.EmpleadoModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_12__.ZXingScannerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 9609:
/*!***************************************************************!*\
  !*** ./src/app/components/biometrico/biometrico.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BiometricoComponent": () => (/* binding */ BiometricoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


const _c0 = function () {
  return ["/Empleado", "Ingreso"];
};
const _c1 = function () {
  return ["/Empleado", "Salida"];
};
class BiometricoComponent {
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
BiometricoComponent.ɵfac = function BiometricoComponent_Factory(t) {
  return new (t || BiometricoComponent)();
};
BiometricoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BiometricoComponent,
  selectors: [["app-biometrico"]],
  decls: 20,
  vars: 4,
  consts: [["tabindex", "-1", "role", "dialog", "id", "modalSheet", 1, "modal", "modal-sheet", "position-static", "d-block", "py-5", "container-modal"], ["role", "document", 1, "modal-dialog"], [1, "modal-content", "rounded-4", "shadow", "card-content"], [1, "modal-header"], [1, "modal-title", "fs-4", "title-1"], [1, "content-img"], ["src", "assets/Images/picture_1.svg", "alt", ""], [1, "modal-title", "fs-5", "title-2"], [1, "content-botones"], [1, "modal-body", "py-0"], [3, "routerLink"], [1, "btn", "btn-lg", "botones"]],
  template: function BiometricoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Biometrico");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "por favor seleccione alguna de las siguientes opciones:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "a", 10)(14, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Ingreso");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9)(17, "a", 10)(18, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Salida");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: [".title-1[_ngcontent-%COMP%]{\n    width: 100%;\n    text-align: center;\n    align-items: center;\n    align-content: center;\n    font-size: 10px;\n    color: #b81c1c;\n}\n.title-2[_ngcontent-%COMP%]{\n    width: 100%;\n    text-align: center;\n    align-items: center;\n    align-content: center;\n    padding-left: 20px;\n    padding-right: 20px;\n    width: 100%;\n    color: black;\n}\n\n.card-content[_ngcontent-%COMP%]{\n    top: 30px;\n    height: 600px;\n    border-color: #b81c1c;\n    border-style: solid;\n\n}\n.content-img[_ngcontent-%COMP%]{\n    text-align: center;\n    align-items: center;\n    align-content: center;\n    width: 100%;\n}\nimg[_ngcontent-%COMP%]{\n    position: relative;\n    width: auto;\n    height: 300px;\n    z-index: 1000;\n    margin-bottom: 20px;\n}\n.botones[_ngcontent-%COMP%]{\n    margin-top: 20px;\n    background-color: #b81c1c;\n    color: #fff;\n    width: 170px;\n}\n.content-botones[_ngcontent-%COMP%]{\n    text-align: center;\n    display: flex;\n}\n.container-modal[_ngcontent-%COMP%]{\n\n    background-color: #F7CACA;\n\tbackground-image: url(\"/assets/Images/fondo_4.svg\");\n\tbackground-position: bottom;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tbackground-attachment: scroll;\n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9iaW9tZXRyaWNvL2Jpb21ldHJpY28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBQ0E7O0lBRUkseUJBQXlCO0NBQzVCLG1EQUFtRDtDQUNuRCwyQkFBMkI7Q0FDM0IsNEJBQTRCO0NBQzVCLHNCQUFzQjtDQUN0Qiw2QkFBNkI7O0FBRTlCIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLTF7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogI2I4MWMxYztcbn1cbi50aXRsZS0ye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5jYXJkLWNvbnRlbnR7XG4gICAgdG9wOiAzMHB4O1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgYm9yZGVyLWNvbG9yOiAjYjgxYzFjO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG5cbn1cbi5jb250ZW50LWltZ3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5pbWd7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmJvdG9uZXN7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjgxYzFjO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAxNzBweDtcbn1cbi5jb250ZW50LWJvdG9uZXN7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uY29udGFpbmVyLW1vZGFse1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3Q0FDQTtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9JbWFnZXMvZm9uZG9fNC5zdmdcIik7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1999:
/*!*******************************************************!*\
  !*** ./src/app/components/camara/camara.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CamaraComponent": () => (/* binding */ CamaraComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Subject */ 228);
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webcam */ 8986);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);






function CamaraComponent_webcam_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "webcam", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCapture", function CamaraComponent_webcam_2_Template_webcam_imageCapture_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.handleImage($event));
    })("cameraSwitched", function CamaraComponent_webcam_2_Template_webcam_cameraSwitched_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.cameraWasSwitched($event));
    })("initError", function CamaraComponent_webcam_2_Template_webcam_initError_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.handleInitError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 250)("width", 250)("trigger", ctx_r0.triggerObservable)("allowCameraSwitch", ctx_r0.allowCameraSwitch)("switchCamera", ctx_r0.nextWebcamObservable)("videoOptions", ctx_r0.videoOptions);
  }
}
function CamaraComponent_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Messages:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function CamaraComponent_ul_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul")(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const error_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, error_r7));
  }
}
class CamaraComponent {
  constructor() {
    this.pictureTaken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    // toggle webcam on/off
    this.showWebcam = true;
    this.allowCameraSwitch = true;
    this.multipleWebcamsAvailable = false;
    this.videoOptions = {
      // width: {ideal: 1024},
      // height: {ideal: 576}
    };
    this.errors = [];
    // webcam snapshot trigger
    this.trigger = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__.Subject();
    // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
    this.nextWebcam = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }
  ngOnInit() {
    ngx_webcam__WEBPACK_IMPORTED_MODULE_2__.WebcamUtil.getAvailableVideoInputs().then(mediaDevices => {
      this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
    });
  }
  triggerSnapshot() {
    this.trigger.next();
  }
  toggleWebcam() {
    this.showWebcam = !this.showWebcam;
  }
  handleInitError(error) {
    this.errors.push(error);
  }
  showNextWebcam(directionOrDeviceId) {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }
  handleImage(webcamImage) {
    console.info('received webcam image', webcamImage);
    this.pictureTaken.emit(webcamImage);
  }
  cameraWasSwitched(deviceId) {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }
  get triggerObservable() {
    return this.trigger.asObservable();
  }
  get nextWebcamObservable() {
    return this.nextWebcam.asObservable();
  }
}
CamaraComponent.ɵfac = function CamaraComponent_Factory(t) {
  return new (t || CamaraComponent)();
};
CamaraComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CamaraComponent,
  selectors: [["app-camara"]],
  outputs: {
    pictureTaken: "pictureTaken"
  },
  decls: 10,
  vars: 3,
  consts: [[2, "text-align", "center"], [3, "height", "width", "trigger", "allowCameraSwitch", "switchCamera", "videoOptions", "imageCapture", "cameraSwitched", "initError", 4, "ngIf"], ["title", "Take Picture", 1, "actionBtn", 3, "click"], ["title", "Switch Camera", 1, "actionBtn", 3, "click"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "height", "width", "trigger", "allowCameraSwitch", "switchCamera", "videoOptions", "imageCapture", "cameraSwitched", "initError"]],
  template: function CamaraComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CamaraComponent_webcam_2_Template, 1, 6, "webcam", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CamaraComponent_Template_div_click_4_listener() {
        return ctx.triggerSnapshot();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\uD83D\uDCF8");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CamaraComponent_Template_div_click_6_listener() {
        return ctx.showNextWebcam(true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\uD83D\uDD01");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CamaraComponent_h4_8_Template, 2, 0, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CamaraComponent_ul_9_Template, 4, 3, "ul", 5);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showWebcam);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.errors);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ngx_webcam__WEBPACK_IMPORTED_MODULE_2__.WebcamComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jYW1hcmEvY2FtYXJhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUMsaUJBQWlCO0tBQ2Isb0JBQW9CO0tBQ3BCLHFCQUFxQjtHQUN2QixNQUFNOztHQUVOLGdCQUFnQjtLQUNkLHdCQUF3QjtLQUN4QixVQUFVO09BQ1Isc0JBQXNCO09BQ3RCLHVCQUF1QjtLQUN6QixNQUFNO0dBQ1IsTUFBTTs7R0FFTixlQUFlO0tBQ2IsMEJBQTBCO0dBQzVCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIgLyogLmFjdGlvbkJ0biB7ICovXG4gICAgIC8qIGZvbnQtc2l6ZTogNGVtOyAqL1xuICAgICAvKiBjdXJzb3I6IHBvaW50ZXI7ICovXG4gICAvKiB9ICovXG4gIFxuICAgLyogLnNuYXBzaG90IHsgKi9cbiAgICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xuICAgICAvKiBpbWcgeyAqL1xuICAgICAgIC8qIG1heC13aWR0aDogODAwcHg7ICovXG4gICAgICAgLyogbWF4LWhlaWdodDogODAwcHg7ICovXG4gICAgIC8qIH0gKi9cbiAgIC8qIH0gKi9cbiAgXG4gICAvKiB1bC5saW5rcyB7ICovXG4gICAgIC8qIHBhZGRpbmctYm90dG9tOiAyMHB4OyAqL1xuICAgLyogfSAqL1xuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _empleado_services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../empleado/services/data.service */ 5308);


const _c0 = "[_nghost-%COMP%]{\n    \n    --color-inicial-footer-d: #000000;\n    --color-final-footer-d: #2c2c2c;\n    \n    --color-text-dark: #ffffff;\n    --color-text-dark-t: #bbbbbb;\n    --color-text-dark-t-h: #ffffff;\n    \n    --color-line-bottom-dark: #b81c1c;\n    \n    --background-icon-dark: rgba(255,255,255,0.2);\n    --color-icon-dark: #ffffff;\n    \n    --color-social-dark: #24262b;\n    --background-social-dark: #ffffff;\n    \n    --color-contact-dark: #bbbbbb;\n    \n    --background-line-dark: rgb(110, 108, 108);\n    \n    --color-copy-dark: #ffffff;\n    \n    --color-inicial-footer-l: #888888;\n    --color-final-footer-l: #777777;\n    \n    --color-text-light: #000000;\n    --color-text-light-t: #000000;\n    --color-text-light-t-h: #b81c1c;\n    \n    --color-line-bottom-light: #b81c1c;\n    \n    --background-icon-light: rgba(0, 0, 0, 0.2);\n    --color-icon-light: #ffffff;\n    \n    --color-social-light: #ffffff;\n    --background-social-light: #000000;\n    \n    --color-contact-light: #000000;\n    \n    --background-line-light: rgb(255, 255, 255);\n    \n    --color-copy-light: #000000;\n}\n\n.footer[_ngcontent-%COMP%]{\n    margin-top: auto;\n    background-image: linear-gradient(var(--color-inicial-footer-d) 0%, var(--color-final-footer-d) 100%);\n    padding: 25px 0;\n    transition: 0.5s ease all;\n}\ndiv.mode[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{\n    margin-top: auto;\n    background-image: linear-gradient(var(--color-inicial-footer-l) 0%, var(--color-final-footer-l) 100%);\n    padding: 25px 0;\n    transition: 0.5s ease all;\n}\n.container-fluid[_ngcontent-%COMP%]{\n    width: 100%;\n    min-height: 10vh;\n}\n.row[_ngcontent-%COMP%]{\n    display: flex;\n    flex-wrap: wrap;\n    padding: 100;\n}\n.footer-col[_ngcontent-%COMP%]{\n    width: 25%;\n    padding: 0 15px;\n}\n.footer-col[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\n    font-size: 18px;\n    color: var(--color-text-dark);\n    text-transform: capitalize;\n    margin-bottom: 35px;\n    font-weight: 500;\n    position: relative;\n}\ndiv.mode[_ngcontent-%COMP%]   .footer-col[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\n    font-size: 18px;\n    color: var(--color-text-light);\n    text-transform: capitalize;\n    margin-bottom: 35px;\n    font-weight: 500;\n    position: relative;\n}\n.footer-col[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::before{\n    content: '';\n    position: absolute;\n    left:0;\n    bottom: -10px;\n    background-color: var(--color-line-bottom-dark);\n    height: 3px;\n    box-sizing: border-box;\n    width: 100px;\n}\ndiv.mode[_ngcontent-%COMP%]   .footer-col[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::before{\n    content: '';\n    position: absolute;\n    left:0;\n    bottom: -10px;\n    background-color: var(--color-line-bottom-light);\n    height: 3px;\n    box-sizing: border-box;\n    width: 100px;\n}\n.footer-col[_ngcontent-%COMP%]   .ul[_ngcontent-%COMP%]   .li[_ngcontent-%COMP%]:not(:last-child){\n    margin-bottom: 10px;\n}\n.footer-col[_ngcontent-%COMP%]   .ul[_ngcontent-%COMP%]   .li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    font-size: 14px;\n    text-transform: capitalize;\n    text-decoration: none;\n    font-weight: 500;\n    color: var(--color-text-dark-t);\n    display: block;\n    transition: all 0.3s ease;\n}\ndiv.mode[_ngcontent-%COMP%]   .footer-col[_ngcontent-%COMP%]   .ul[_ngcontent-%COMP%]   .li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    font-size: 14px;\n    text-transform: capitalize;\n    text-decoration: none;\n    font-weight: 500;\n    color: var(--color-text-light-t);\n    display: block;\n    transition: all 0.3s ease;\n}\n.footer-col[_ngcontent-%COMP%]   .ul[_ngcontent-%COMP%]   .li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\n    color: var(--color-text-dark-t-h);\n    padding-left: 10px;\n}\ndiv.mode[_ngcontent-%COMP%]   .footer-col[_ngcontent-%COMP%]   .ul[_ngcontent-%COMP%]   .li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\n    color: var(--color-text-light-t-h);\n    padding-left: 10px;\n}\n.footer-col[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    display: inline-block;\n    height: 40px;\n    width: 40px;\n    background-color: var(--background-icon-dark);\n    margin:0 10px 10px 0;\n    text-align: center;\n    line-height: 40px;\n    border-radius: 50%;                                         \n    color: var(--color-icon-dark);\n    transition: all 0.5s ease;\n    font-size: 20px;\n}\ndiv.mode[_ngcontent-%COMP%]   .footer-col[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    display: inline-block;\n    height: 40px;\n    width: 40px;\n    background-color: var(--background-icon-light);\n    margin:0 10px 10px 0;\n    text-align: center;\n    line-height: 40px;\n    border-radius: 50%;                                         \n    color: var(--color-icon-light);\n    transition: all 0.5s ease;\n    font-size: 20px;\n}\n.footer-col[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\n    color: var(--color-social-dark);\n    background-color: var(--background-social-dark);\n}\ndiv.mode[_ngcontent-%COMP%]   .footer-col[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\n    color: var(--color-social-light);\n    background-color: var(--background-social-light);\n}\n.contact[_ngcontent-%COMP%]{\n    font-size: 14px;\n    text-transform: capitalize;\n    text-decoration: none;\n    font-weight: 500;\n    color: var(--color-contact-dark);\n}\ndiv.mode[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]{\n    font-size: 14px;\n    text-transform: capitalize;\n    text-decoration: none;\n    font-weight: 500;\n    color: var(--color-contact-light);\n}\n.linea_divisora[_ngcontent-%COMP%]{\n    margin-top: 10px;\n    height: 2px;\n    background-color: var(--background-line-dark);\n    opacity: 20%;\n}\ndiv.mode[_ngcontent-%COMP%]   .linea_divisora[_ngcontent-%COMP%]{\n    margin-top: 10px;\n    height: 2px;\n    background-color: var(--background-line-light);\n    opacity: 20%;\n}\n.copyright[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: var(--color-copy-dark);\n    height: 50px;\n    font-size: 14px;\n}\ndiv.mode[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: var(--color-copy-light);\n    height: 50px;\n    font-size: 14px;\n}\n@media(max-width: 767px){\n    .footer-col[_ngcontent-%COMP%]{\n    width: 50%;\n    margin-bottom: 30px;\n    }\n}\n@media(max-width: 574px){\n    .footer-col[_ngcontent-%COMP%]{\n    width: 100%;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsNkNBQTZDO0lBQzdDLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsMkNBQTJDO0lBQzNDLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0MseUJBQXlCO0lBQ3pCLDJCQUEyQjtBQUMvQjtBQUNBOzs7O0dBSUc7QUFDSDtJQUNJLGdCQUFnQjtJQUNoQixxR0FBcUc7SUFDckcsZUFBZTtJQUNmLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFHQUFxRztJQUNyRyxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLGFBQWE7SUFDYiwrQ0FBK0M7SUFDL0MsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixhQUFhO0lBQ2IsZ0RBQWdEO0lBQ2hELFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksaUNBQWlDO0lBQ2pDLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0lBQ1gsNkNBQTZDO0lBQzdDLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztJQUNYLDhDQUE4QztJQUM5QyxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsK0NBQStDO0FBQ25EO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsZ0RBQWdEO0FBQ3BEO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLDZDQUE2QztJQUM3QyxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLDhDQUE4QztJQUM5QyxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0k7SUFDQSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CO0FBQ0o7QUFDQTtJQUNJO0lBQ0EsV0FBVztJQUNYO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgICAvKiBHcmFkaWVudCBGb290ZXIgRGFyayovXG4gICAgLS1jb2xvci1pbmljaWFsLWZvb3Rlci1kOiAjMDAwMDAwO1xuICAgIC0tY29sb3ItZmluYWwtZm9vdGVyLWQ6ICMyYzJjMmM7XG4gICAgLyogVGV4dCBGb290ZXIgRGFyayAqL1xuICAgIC0tY29sb3ItdGV4dC1kYXJrOiAjZmZmZmZmO1xuICAgIC0tY29sb3ItdGV4dC1kYXJrLXQ6ICNiYmJiYmI7XG4gICAgLS1jb2xvci10ZXh0LWRhcmstdC1oOiAjZmZmZmZmO1xuICAgIC8qIExpbmUgYm90dG9tIGNvbHVtbnMgRGFyayAqL1xuICAgIC0tY29sb3ItbGluZS1ib3R0b20tZGFyazogI2I4MWMxYztcbiAgICAvKiBJY29ub3MgRGFyayAqL1xuICAgIC0tYmFja2dyb3VuZC1pY29uLWRhcms6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcbiAgICAtLWNvbG9yLWljb24tZGFyazogI2ZmZmZmZjtcbiAgICAvKiBMb2dvcyBzb2NpYWwgRGFyayAqL1xuICAgIC0tY29sb3Itc29jaWFsLWRhcms6ICMyNDI2MmI7XG4gICAgLS1iYWNrZ3JvdW5kLXNvY2lhbC1kYXJrOiAjZmZmZmZmO1xuICAgIC8qIFRleHQgQ29udGFjdCBEYXJrICovXG4gICAgLS1jb2xvci1jb250YWN0LWRhcms6ICNiYmJiYmI7XG4gICAgLyogTGluZSBEaXYgRGFyayAqL1xuICAgIC0tYmFja2dyb3VuZC1saW5lLWRhcms6IHJnYigxMTAsIDEwOCwgMTA4KTtcbiAgICAvKiBUZXh0IENvcHlyaWdodCBEYXJrKi9cbiAgICAtLWNvbG9yLWNvcHktZGFyazogI2ZmZmZmZjtcbiAgICAvKiBHcmFkaWVudCBOYXZiYXIgTGlnaHQqL1xuICAgIC0tY29sb3ItaW5pY2lhbC1mb290ZXItbDogIzg4ODg4ODtcbiAgICAtLWNvbG9yLWZpbmFsLWZvb3Rlci1sOiAjNzc3Nzc3O1xuICAgIC8qIFRleHQgRm9vdGVyIExpZ2h0ICovXG4gICAgLS1jb2xvci10ZXh0LWxpZ2h0OiAjMDAwMDAwO1xuICAgIC0tY29sb3ItdGV4dC1saWdodC10OiAjMDAwMDAwO1xuICAgIC0tY29sb3ItdGV4dC1saWdodC10LWg6ICNiODFjMWM7XG4gICAgLyogTGluZSBib3R0b20gY29sdW1ucyBMaWdodCAqL1xuICAgIC0tY29sb3ItbGluZS1ib3R0b20tbGlnaHQ6ICNiODFjMWM7XG4gICAgLyogSWNvbm9zIExpZ2h0ICovXG4gICAgLS1iYWNrZ3JvdW5kLWljb24tbGlnaHQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAtLWNvbG9yLWljb24tbGlnaHQ6ICNmZmZmZmY7XG4gICAgLyogTG9nb3Mgc29jaWFsIExpZ2h0ICovXG4gICAgLS1jb2xvci1zb2NpYWwtbGlnaHQ6ICNmZmZmZmY7XG4gICAgLS1iYWNrZ3JvdW5kLXNvY2lhbC1saWdodDogIzAwMDAwMDtcbiAgICAvKiBUZXh0IENvbnRhY3QgTGlnaHQgKi9cbiAgICAtLWNvbG9yLWNvbnRhY3QtbGlnaHQ6ICMwMDAwMDA7XG4gICAgLyogTGluZSBEaXYgTGlnaHQgKi9cbiAgICAtLWJhY2tncm91bmQtbGluZS1saWdodDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIC8qIFRleHQgQ29weXJpZ2h0IExpZ2h0ICovXG4gICAgLS1jb2xvci1jb3B5LWxpZ2h0OiAjMDAwMDAwO1xufVxuLyogLmNvbnRlbmVkb3J7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbn0gKi9cbi5mb290ZXJ7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tY29sb3ItaW5pY2lhbC1mb290ZXItZCkgMCUsIHZhcigtLWNvbG9yLWZpbmFsLWZvb3Rlci1kKSAxMDAlKTtcbiAgICBwYWRkaW5nOiAyNXB4IDA7XG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlIGFsbDtcbn1cbmRpdi5tb2RlIC5mb290ZXJ7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tY29sb3ItaW5pY2lhbC1mb290ZXItbCkgMCUsIHZhcigtLWNvbG9yLWZpbmFsLWZvb3Rlci1sKSAxMDAlKTtcbiAgICBwYWRkaW5nOiAyNXB4IDA7XG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlIGFsbDtcbn1cbi5jb250YWluZXItZmx1aWR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTB2aDtcbn1cbi5yb3d7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZzogMTAwO1xufVxuLmZvb3Rlci1jb2x7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG59XG4uZm9vdGVyLWNvbCBoNHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtZGFyayk7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmRpdi5tb2RlIC5mb290ZXItY29sIGg0e1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1saWdodCk7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb290ZXItY29sIGg0OjpiZWZvcmV7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6MDtcbiAgICBib3R0b206IC0xMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpbmUtYm90dG9tLWRhcmspO1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuZGl2Lm1vZGUgLmZvb3Rlci1jb2wgaDQ6OmJlZm9yZXtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDowO1xuICAgIGJvdHRvbTogLTEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGluZS1ib3R0b20tbGlnaHQpO1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuLmZvb3Rlci1jb2wgLnVsIC5saTpub3QoOmxhc3QtY2hpbGQpe1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uZm9vdGVyLWNvbCAudWwgLmxpIGF7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LWRhcmstdCk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbmRpdi5tb2RlIC5mb290ZXItY29sIC51bCAubGkgYXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbGlnaHQtdCk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5mb290ZXItY29sIC51bCAubGkgYTpob3ZlcntcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1kYXJrLXQtaCk7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuZGl2Lm1vZGUgLmZvb3Rlci1jb2wgLnVsIC5saSBhOmhvdmVye1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LWxpZ2h0LXQtaCk7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmZvb3Rlci1jb2wgLnNvY2lhbC1saW5rcyBhe1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1pY29uLWRhcmspO1xuICAgIG1hcmdpbjowIDEwcHggMTBweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItaWNvbi1kYXJrKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbmRpdi5tb2RlIC5mb290ZXItY29sIC5zb2NpYWwtbGlua3MgYXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtaWNvbi1saWdodCk7XG4gICAgbWFyZ2luOjAgMTBweCAxMHB4IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1pY29uLWxpZ2h0KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5mb290ZXItY29sIC5zb2NpYWwtbGlua3MgYTpob3ZlcntcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc29jaWFsLWRhcmspO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc29jaWFsLWRhcmspO1xufVxuZGl2Lm1vZGUgLmZvb3Rlci1jb2wgLnNvY2lhbC1saW5rcyBhOmhvdmVye1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zb2NpYWwtbGlnaHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc29jaWFsLWxpZ2h0KTtcbn1cbi5jb250YWN0e1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItY29udGFjdC1kYXJrKTtcbn1cbmRpdi5tb2RlIC5jb250YWN0e1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItY29udGFjdC1saWdodCk7XG59XG4ubGluZWFfZGl2aXNvcmF7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpbmUtZGFyayk7XG4gICAgb3BhY2l0eTogMjAlO1xufVxuZGl2Lm1vZGUgLmxpbmVhX2Rpdmlzb3Jhe1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saW5lLWxpZ2h0KTtcbiAgICBvcGFjaXR5OiAyMCU7XG59XG4uY29weXJpZ2h0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItY29weS1kYXJrKTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuZGl2Lm1vZGUgLmNvcHlyaWdodHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWNvcHktbGlnaHQpO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5AbWVkaWEobWF4LXdpZHRoOiA3NjdweCl7XG4gICAgLmZvb3Rlci1jb2x7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cbn1cbkBtZWRpYShtYXgtd2lkdGg6IDU3NHB4KXtcbiAgICAuZm9vdGVyLWNvbHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */";
class FooterComponent {
  constructor(dataservices) {
    this.dataservices = dataservices;
    this.Modo = "";
  }
  ngOnInit() {
    this.dataservices.DisparadorModo.subscribe(data => {
      this.Modo = data.data;
      if (this.Modo == 'light') {
        const mode = document.getElementById("Footer");
        mode?.classList.toggle('mode');
      }
      if (this.Modo == 'dark') {
        const mode = document.getElementById("Footer");
        mode?.classList.toggle('mode');
      }
    });
  }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_empleado_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService));
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 64,
  vars: 0,
  consts: [["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css", "rel", "stylesheet", "integrity", "sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"], ["id", "Footer"], [1, "contenedor"], [1, "footer"], [1, "container"], [1, "row"], [1, "footer-col"], [1, "ul"], [1, "li"], ["href", "https://hq5.com.co/", "target", "_blank"], ["href", "https://hq5.com.co/oferta-laboral/", "target", "_blank"], ["href", "https://hq5.com.co/politica-integral-de-gestion/", "target", "_blank"], ["href", "https://hq5.com.co/politica-de-privacidad-y-tratamiento-de-datos-personales-hq5-s-a-s/", "target", "_blank"], [1, "social-links"], ["href", "https://www.facebook.com/hq5sas/", "target", "_blank"], [1, "bi", "bi-facebook"], ["href", "https://twitter.com/HQ5SAS1", "target", "_blank"], [1, "bi", "bi-twitter"], ["href", "https://www.instagram.com/hq5_sas/", "target", "_blank"], [1, "bi", "bi-instagram"], ["href", "https://www.linkedin.com/company/hq5-sas/", "target", "_blank"], [1, "bi", "bi-linkedin"], ["href", "https://www.tiktok.com/@hq5_sas", "target", "_blank"], [1, "bi", "bi-tiktok"], ["href", "https://web.whatsapp.com/send?phone=573009120781", "target", "_blank"], [1, "bi", "bi-whatsapp"], [1, "contact"], [1, "linea_divisora"], [1, "copyright"], [1, "texrt_copyright"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "link", 0)(1, "link", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "footer", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "company");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Acerca de nosotros ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9)(15, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Oferta laboral ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7)(18, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "help");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8)(21, "div", 9)(22, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " pol\u00EDtica integral de gesti\u00F3n ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 9)(25, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " pol\u00EDtica de privacidad y ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " tratamiento de datos ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " personales ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 7)(32, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "follow us");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 14)(35, "div")(36, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div")(43, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 7)(50, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Sede Principal: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Calle 52 A # 18 73, Bogot\u00E1 (Colombia) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " PBX: 601 241 5085 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " info@hq5.com.co ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 29)(62, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Todos los derechos reservados | 2023");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    }
  },
  styles: [_c0, _c0]
});

/***/ }),

/***/ 8263:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HomeComponent {}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 4,
  vars: 0,
  consts: [[1, "container"], ["src", "assets/Images/access.svg", "alt", ""]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Bienvenidos");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: [".container[_ngcontent-%COMP%]{\n    align-items: center;\n    position: relative;\n    margin-top: 70px;\n    padding: 40px;\n    background-color:beige ;\n    width: 100%;\n    height: 730px;\n    align-items: center;\n    align-content: center;\n    text-align: center;\n}\nimg[_ngcontent-%COMP%]{\n    position: relative;\n    width: auto;\n    height: 400px;\n    z-index: 1000;\n}\np[_ngcontent-%COMP%]{\n    width: auto;\n    font-size: 10vw;\n    color: #b81c1c;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpiZWlnZSA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MzBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pbWd7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgei1pbmRleDogMTAwMDtcbn1cbnB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgZm9udC1zaXplOiAxMHZ3O1xuICAgIGNvbG9yOiAjYjgxYzFjO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3252:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _empleado_services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../empleado/services/data.service */ 5308);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class NavbarComponent {
  constructor(dataservice) {
    this.dataservice = dataservice;
    this.Mode = "dark";
    this.Mode_2 = "light";
  }
  Modelight() {
    const mode = document.getElementById("Navbar");
    const Light = document.getElementById('Icon_Mode');
    const Dark = document.getElementById('Icon_Mode_2');
    const Logo_2 = document.getElementById('Logo_2');
    const Logo_3 = document.getElementById('Logo_3');
    mode?.classList.toggle('mode');
    if (Light != undefined && Logo_3 != undefined) {
      Light.style.display = 'none';
      Logo_3.style.display = 'none';
    }
    if (Dark != undefined && Logo_2 != undefined) {
      Dark.style.display = 'block';
      Logo_2.style.display = 'block';
    }
    this.dataservice.DisparadorModo.emit({
      data: this.Mode
    });
  }
  Modedark() {
    const mode = document.getElementById("Navbar");
    const Light = document.getElementById('Icon_Mode');
    const Dark = document.getElementById('Icon_Mode_2');
    const Logo_2 = document.getElementById('Logo_2');
    const Logo_3 = document.getElementById('Logo_3');
    mode?.classList.toggle('mode');
    if (Light != undefined && Logo_3 != undefined) {
      Light.style.display = 'block';
      Logo_3.style.display = 'block';
    }
    if (Dark != undefined && Logo_2 != undefined) {
      Dark.style.display = 'none';
      Logo_2.style.display = 'none';
    }
    this.dataservice.DisparadorModo.emit({
      data: this.Mode_2
    });
  }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_empleado_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService));
};
NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavbarComponent,
  selectors: [["app-navbar"]],
  decls: 29,
  vars: 0,
  consts: [["id", "Navbar"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "bg-custom-1"], [1, "container-fluid"], ["href", "https://hq5.com.co/", "target", "_blank", 1, "navbar-brand", "Color_Logo"], ["src", "assets\\Images\\hq5_logo_3.png", "width", "60", "height", "30", "alt", "HQ5SAS", "id", "Logo_3", 2, "display", "block"], ["src", "assets\\Images\\hq5_logo_2.png", "width", "60", "height", "30", "alt", "HQ5SAS", "id", "Logo_2", 2, "display", "none"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["aria-current", "page", "routerLink", "", 1, "nav-link", "Color_Text_Navbar"], ["aria-current", "page", "routerLink", "/Biometrico", 1, "nav-link", "Color_Text_Navbar"], [1, "navbar-nav", "d-flex", "flex-row", "me-1"], [1, "nav-item", "me-3", "me-lg-0"], ["href", "https://web.whatsapp.com/send?phone=573009120781", "target", "_blank", 1, "nav-link", "bg-icon-custom"], [1, "bi", "bi-whatsapp"], ["href", "https://hq5.com.co/oferta-laboral/", "target", "_blank", 1, "nav-link", "bg-icon-custom"], [1, "bi", "bi-person-circle"], ["id", "Icon_Mode", 1, "nav-item", "me-3", "me-lg-0", 2, "display", "block"], [1, "nav-link", "bg-icon-custom", 3, "click"], [1, "bi", "bi-sun-fill"], ["id", "Icon_Mode_2", 1, "nav-item", "me-3", "me-lg-0", 2, "display", "none"], [1, "bi", "bi-moon-stars-fill"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4)(5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8)(9, "ul", 9)(10, "li", 10)(11, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Inicio");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 10)(14, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Biometrico");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul", 13)(17, "li", 14)(18, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li", 14)(21, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 19)(24, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_24_listener() {
        return ctx.Modelight();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li", 22)(27, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_27_listener() {
        return ctx.Modedark();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["[_nghost-%COMP%]{\n    \n    --color-inicial-nav: #000000;\n    --color-final-nav: #4d4d4d;\n    \n    --color-text-dark: #ffffff;\n    --color-text-dark-h: rgb(131, 131, 131);\n    \n    --color-drop-dark: #ffffff;\n    --color-back-drop-dark: #4d4d4d;\n    --color-drop-dark-h: #000000;\n    --color-back-drop-dark-h: rgb(131, 131, 131);\n    \n    --color-back-drop-g: #4d4d4d;\n    \n    --color-icon-dark: #ffffff;\n    --color-icon-dark-h: #e22626;\n    \n    --color-inicial-nav-l: #797979;\n    --color-final-nav-l: #9e9e9e;\n    \n    --color-text-light: #000000;\n    --color-text-light-h: #e41414;\n    \n    --color-drop-light: #000000;\n    --color-back-drop-light: rgb(172, 172, 172);\n    --color-drop-light-h: #000000;\n    --color-back-drop-light-h: #d3d3d3;\n    \n    --color-back-drop-g-l: rgb(172, 172, 172);;\n    \n    --color-icon-light: #000000;\n    --color-icon-light-h: #e41414;\n}\n.bg-custom-1[_ngcontent-%COMP%]{\n    background-image: linear-gradient(var(--color-inicial-nav) 0%, var(--color-final-nav) 100%);\n    transition: 0.5s ease all;\n}\ndiv.mode[_ngcontent-%COMP%]   .bg-custom-1[_ngcontent-%COMP%]{\n    background-image: linear-gradient(var(--color-inicial-nav-l) 50%, var(--color-final-nav-l) 100%);\n    transition: 0.5s ease all;\n}\n.Color_Logo[_ngcontent-%COMP%]{\n    filter: brightness(100%);\n}\ndiv.mode[_ngcontent-%COMP%]   .Color_Logo[_ngcontent-%COMP%]{\n    filter: brightness(0%);\n}\n.Color_Text_Navbar[_ngcontent-%COMP%]{\n    color: var(--color-text-dark);\n}\n.Color_Text_Navbar[_ngcontent-%COMP%]:hover{\n    color: var(--color-text-dark-h);\n}\ndiv.mode[_ngcontent-%COMP%]   .Color_Text_Navbar[_ngcontent-%COMP%]{\n    color: var(--color-text-light);\n}\ndiv.mode[_ngcontent-%COMP%]   .Color_Text_Navbar[_ngcontent-%COMP%]:hover{\n    color: var(--color-text-light-h);\n}\n.Color_Text_Navbar_Drop[_ngcontent-%COMP%]{\n    color: var(--color-drop-dark);\n    background-color: var(--color-back-drop-dark);\n}\n.Color_Text_Navbar_Drop[_ngcontent-%COMP%]:hover{\n    color: var(--color-drop-dark-h);\n    background-color: var(--color-back-drop-dark-h);\n}\ndiv.mode[_ngcontent-%COMP%]   .Color_Text_Navbar_Drop[_ngcontent-%COMP%]{\n    color: var(--color-drop-light);\n    background-color: var(--color-back-drop-light);\n}\ndiv.mode[_ngcontent-%COMP%]   .Color_Text_Navbar_Drop[_ngcontent-%COMP%]:hover{\n    color: var(--color-drop-light-h);\n    background-color: var(--color-back-drop-light-h);\n}\n.bg-dark-custom[_ngcontent-%COMP%]{\n    background-color: var(--color-back-drop-g);\n}\ndiv.mode[_ngcontent-%COMP%]   .bg-dark-custom[_ngcontent-%COMP%]{\n    background-color: var(--color-back-drop-g-l);\n}\n.bg-icon-custom[_ngcontent-%COMP%]{\n    color: var(--color-icon-dark);\n}\n.bg-icon-custom[_ngcontent-%COMP%]:hover{\n    color: var(--color-icon-dark-h);\n}\ndiv.mode[_ngcontent-%COMP%]   .bg-icon-custom[_ngcontent-%COMP%]{\n    color: var(--color-icon-light);\n}\ndiv.mode[_ngcontent-%COMP%]   .bg-icon-custom[_ngcontent-%COMP%]:hover{\n    color: var(--color-icon-light-h);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLHVDQUF1QztJQUN2Qyx1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLCtCQUErQjtJQUMvQiw0QkFBNEI7SUFDNUIsNENBQTRDO0lBQzVDLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQiwyQ0FBMkM7SUFDM0MsNkJBQTZCO0lBQzdCLGtDQUFrQztJQUNsQyx3QkFBd0I7SUFDeEIseUNBQXlDO0lBQ3pDLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwyRkFBMkY7SUFDM0YseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnR0FBZ0c7SUFDaEcseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsNkNBQTZDO0FBQ2pEO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsK0NBQStDO0FBQ25EO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsOENBQThDO0FBQ2xEO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsZ0RBQWdEO0FBQ3BEO0FBQ0E7SUFDSSwwQ0FBMEM7QUFDOUM7QUFDQTtJQUNJLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gICAgLyogR3JhZGllbnQgTmF2YmFyIERhcmsqL1xuICAgIC0tY29sb3ItaW5pY2lhbC1uYXY6ICMwMDAwMDA7XG4gICAgLS1jb2xvci1maW5hbC1uYXY6ICM0ZDRkNGQ7XG4gICAgLyogVGV4dCBOYXZiYXIgRGFyayAqL1xuICAgIC0tY29sb3ItdGV4dC1kYXJrOiAjZmZmZmZmO1xuICAgIC0tY29sb3ItdGV4dC1kYXJrLWg6IHJnYigxMzEsIDEzMSwgMTMxKTtcbiAgICAvKiBUZXh0IERyb3Bkb3duIERhcmsgKi9cbiAgICAtLWNvbG9yLWRyb3AtZGFyazogI2ZmZmZmZjtcbiAgICAtLWNvbG9yLWJhY2stZHJvcC1kYXJrOiAjNGQ0ZDRkO1xuICAgIC0tY29sb3ItZHJvcC1kYXJrLWg6ICMwMDAwMDA7XG4gICAgLS1jb2xvci1iYWNrLWRyb3AtZGFyay1oOiByZ2IoMTMxLCAxMzEsIDEzMSk7XG4gICAgLyogQmFjayBEcm9wZG93biBEYXJrKi9cbiAgICAtLWNvbG9yLWJhY2stZHJvcC1nOiAjNGQ0ZDRkO1xuICAgIC8qIEljb25vcyBEYXJrICovXG4gICAgLS1jb2xvci1pY29uLWRhcms6ICNmZmZmZmY7XG4gICAgLS1jb2xvci1pY29uLWRhcmstaDogI2UyMjYyNjtcbiAgICAvKiBHcmFkaWVudCBOYXZiYXIgTGlndGggKi9cbiAgICAtLWNvbG9yLWluaWNpYWwtbmF2LWw6ICM3OTc5Nzk7XG4gICAgLS1jb2xvci1maW5hbC1uYXYtbDogIzllOWU5ZTtcbiAgICAvKiBUZXh0IE5hdmJhciBMaWdodCAqL1xuICAgIC0tY29sb3ItdGV4dC1saWdodDogIzAwMDAwMDtcbiAgICAtLWNvbG9yLXRleHQtbGlnaHQtaDogI2U0MTQxNDtcbiAgICAvKiBUZXh0IERyb3Bkb3duIExpZ2h0ICovXG4gICAgLS1jb2xvci1kcm9wLWxpZ2h0OiAjMDAwMDAwO1xuICAgIC0tY29sb3ItYmFjay1kcm9wLWxpZ2h0OiByZ2IoMTcyLCAxNzIsIDE3Mik7XG4gICAgLS1jb2xvci1kcm9wLWxpZ2h0LWg6ICMwMDAwMDA7XG4gICAgLS1jb2xvci1iYWNrLWRyb3AtbGlnaHQtaDogI2QzZDNkMztcbiAgICAvKiBCYWNrIERyb3Bkb3duIExpZ2h0ICovXG4gICAgLS1jb2xvci1iYWNrLWRyb3AtZy1sOiByZ2IoMTcyLCAxNzIsIDE3Mik7O1xuICAgIC8qIEljb25vcyBMaWdodCAqL1xuICAgIC0tY29sb3ItaWNvbi1saWdodDogIzAwMDAwMDtcbiAgICAtLWNvbG9yLWljb24tbGlnaHQtaDogI2U0MTQxNDtcbn1cbi5iZy1jdXN0b20tMXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tY29sb3ItaW5pY2lhbC1uYXYpIDAlLCB2YXIoLS1jb2xvci1maW5hbC1uYXYpIDEwMCUpO1xuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZSBhbGw7XG59XG5kaXYubW9kZSAuYmctY3VzdG9tLTF7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLWNvbG9yLWluaWNpYWwtbmF2LWwpIDUwJSwgdmFyKC0tY29sb3ItZmluYWwtbmF2LWwpIDEwMCUpO1xuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZSBhbGw7XG59XG4uQ29sb3JfTG9nb3tcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XG59XG5kaXYubW9kZSAuQ29sb3JfTG9nb3tcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCUpO1xufVxuLkNvbG9yX1RleHRfTmF2YmFye1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LWRhcmspO1xufVxuLkNvbG9yX1RleHRfTmF2YmFyOmhvdmVye1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LWRhcmstaCk7XG59XG5kaXYubW9kZSAuQ29sb3JfVGV4dF9OYXZiYXJ7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbGlnaHQpO1xufVxuZGl2Lm1vZGUgLkNvbG9yX1RleHRfTmF2YmFyOmhvdmVye1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LWxpZ2h0LWgpO1xufVxuLkNvbG9yX1RleHRfTmF2YmFyX0Ryb3B7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRyb3AtZGFyayk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFjay1kcm9wLWRhcmspO1xufVxuLkNvbG9yX1RleHRfTmF2YmFyX0Ryb3A6aG92ZXJ7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRyb3AtZGFyay1oKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrLWRyb3AtZGFyay1oKTtcbn1cbmRpdi5tb2RlIC5Db2xvcl9UZXh0X05hdmJhcl9Ecm9we1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kcm9wLWxpZ2h0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrLWRyb3AtbGlnaHQpO1xufVxuZGl2Lm1vZGUgLkNvbG9yX1RleHRfTmF2YmFyX0Ryb3A6aG92ZXJ7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRyb3AtbGlnaHQtaCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFjay1kcm9wLWxpZ2h0LWgpO1xufVxuLmJnLWRhcmstY3VzdG9te1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJhY2stZHJvcC1nKTtcbn1cbmRpdi5tb2RlIC5iZy1kYXJrLWN1c3RvbXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrLWRyb3AtZy1sKTtcbn1cbi5iZy1pY29uLWN1c3RvbXtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItaWNvbi1kYXJrKTtcbn1cbi5iZy1pY29uLWN1c3RvbTpob3ZlcntcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItaWNvbi1kYXJrLWgpO1xufVxuZGl2Lm1vZGUgLmJnLWljb24tY3VzdG9te1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1pY29uLWxpZ2h0KTtcbn1cbmRpdi5tb2RlIC5iZy1pY29uLWN1c3RvbTpob3ZlcntcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItaWNvbi1saWdodC1oKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 2884:
/*!*********************************************!*\
  !*** ./src/app/empleado/empleado.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpleadoModule": () => (/* binding */ EmpleadoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _empleadocomponent_empleadocomponent_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empleadocomponent/empleadocomponent.component */ 3128);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @zxing/ngx-scanner */ 3800);
/* harmony import */ var _components_camara_camara_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/camara/camara.component */ 1999);
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-webcam */ 8986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



//Camara





class EmpleadoModule {}
EmpleadoModule.ɵfac = function EmpleadoModule_Factory(t) {
  return new (t || EmpleadoModule)();
};
EmpleadoModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: EmpleadoModule
});
EmpleadoModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_5__.ZXingScannerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, ngx_webcam__WEBPACK_IMPORTED_MODULE_6__.WebcamModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EmpleadoModule, {
    declarations: [_empleadocomponent_empleadocomponent_component__WEBPACK_IMPORTED_MODULE_0__.EmpleadocomponentComponent, _components_camara_camara_component__WEBPACK_IMPORTED_MODULE_1__.CamaraComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_5__.ZXingScannerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, ngx_webcam__WEBPACK_IMPORTED_MODULE_6__.WebcamModule],
    exports: [_empleadocomponent_empleadocomponent_component__WEBPACK_IMPORTED_MODULE_0__.EmpleadocomponentComponent]
  });
})();

/***/ }),

/***/ 3128:
/*!***************************************************************************!*\
  !*** ./src/app/empleado/empleadocomponent/empleadocomponent.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpleadocomponentComponent": () => (/* binding */ EmpleadocomponentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webcam */ 8986);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/Subject */ 228);
/* harmony import */ var _empleado_services_empleados_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../empleado/services/empleados-service.service */ 7054);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);










const _c0 = ["N_mero_de_Identificaci_nI"];
const _c1 = ["N_mero_de_Identificaci_nS"];
function EmpleadocomponentComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function EmpleadocomponentComponent_ng_template_11_webcam_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "webcam", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("imageCapture", function EmpleadocomponentComponent_ng_template_11_webcam_2_Template_webcam_imageCapture_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.handleImage($event));
    })("cameraSwitched", function EmpleadocomponentComponent_ng_template_11_webcam_2_Template_webcam_cameraSwitched_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.cameraWasSwitched($event));
    })("initError", function EmpleadocomponentComponent_ng_template_11_webcam_2_Template_webcam_initError_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.handleInitError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", 370)("width", 370)("trigger", ctx_r7.triggerObservable)("allowCameraSwitch", ctx_r7.allowCameraSwitch)("switchCamera", ctx_r7.nextWebcamObservable)("videoOptions", ctx_r7.videoOptions);
  }
}
function EmpleadocomponentComponent_ng_template_11_h4_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Messages:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function EmpleadocomponentComponent_ng_template_11_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul")(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const error_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, error_r16));
  }
}
function EmpleadocomponentComponent_ng_template_11_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Numero de identificacion es obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function EmpleadocomponentComponent_ng_template_11_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ingrese un n\u00FAmero de identificaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EmpleadocomponentComponent_ng_template_11_div_11_div_2_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.N_mero_de_Identificaci_n.errors == null ? null : ctx_r11.N_mero_de_Identificaci_n.errors["required"]);
  }
}
function EmpleadocomponentComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EmpleadocomponentComponent_ng_template_11_webcam_2_Template, 1, 6, "webcam", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EmpleadocomponentComponent_ng_template_11_h4_4_Template, 2, 0, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, EmpleadocomponentComponent_ng_template_11_ul_5_Template, 4, 3, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Por favor ingresa tu n\u00FAmero de documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div")(9, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function EmpleadocomponentComponent_ng_template_11_Template_input_keydown_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.ingreso($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, EmpleadocomponentComponent_ng_template_11_div_11_Template, 3, 1, "div", 18);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.showWebcam);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.errors.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.N_mero_de_Identificaci_n.invalid && (ctx_r3.N_mero_de_Identificaci_n.dirty || ctx_r3.N_mero_de_Identificaci_n.touched));
  }
}
function EmpleadocomponentComponent_ng_template_13_webcam_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "webcam", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("imageCapture", function EmpleadocomponentComponent_ng_template_13_webcam_2_Template_webcam_imageCapture_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r23.handleImage($event));
    })("cameraSwitched", function EmpleadocomponentComponent_ng_template_13_webcam_2_Template_webcam_cameraSwitched_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r25.cameraWasSwitched($event));
    })("initError", function EmpleadocomponentComponent_ng_template_13_webcam_2_Template_webcam_initError_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r26.handleInitError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", 370)("width", 370)("trigger", ctx_r20.triggerObservable)("allowCameraSwitch", ctx_r20.allowCameraSwitch)("switchCamera", ctx_r20.nextWebcamObservable)("videoOptions", ctx_r20.videoOptions);
  }
}
function EmpleadocomponentComponent_ng_template_13_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Numero de identificacion es obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function EmpleadocomponentComponent_ng_template_13_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ingrese un n\u00FAmero de identificaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EmpleadocomponentComponent_ng_template_13_div_7_div_2_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r22.N_mero_de_Identificaci_n.errors == null ? null : ctx_r22.N_mero_de_Identificaci_n.errors["required"]);
  }
}
function EmpleadocomponentComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EmpleadocomponentComponent_ng_template_13_webcam_2_Template, 1, 6, "webcam", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function EmpleadocomponentComponent_ng_template_13_Template_input_keydown_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r28.salida($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, EmpleadocomponentComponent_ng_template_13_div_7_Template, 3, 1, "div", 18);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.showWebcam);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.N_mero_de_Identificaci_n.invalid && (ctx_r5.N_mero_de_Identificaci_n.dirty || ctx_r5.N_mero_de_Identificaci_n.touched));
  }
}
function EmpleadocomponentComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "section", 25)(2, "div", 26)(3, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.mesaggeTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r6.mesaggeImg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.mesaggeNote);
  }
}
class EmpleadocomponentComponent {
  constructor(empleadosServiceService, route, formBuilder) {
    this.empleadosServiceService = empleadosServiceService;
    this.route = route;
    this.formBuilder = formBuilder;
    this.formParent = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({}); //Creamos el formulario padre y lo inicializamos
    this.results = [];
    this.Cliente = {
      display_value: "",
      ID: ""
    };
    this.empleados = {
      Nombre_compleo: "",
      Celular: "",
      N_mero_de_contrato: "",
      Contrato_Activo: "",
      ID: "",
      N_mero_de_Identificaci_n: "",
      Correo_electronico: "",
      CLIENTE1: this.Cliente,
      Empresa_usuaria: ""
    };
    //Biometrico
    this.BiometricoModelo = {
      Nombre: "",
      Empresa: "",
      N_mero_de_Identificaci_n: "",
      IDempelado: "",
      Fecha_ingreso: "",
      Fecha_salida: "",
      Hora_salida: "",
      Hora_ingreso: "",
      ID: ""
    };
    this.newBiometricoModelo = {
      Nombre: "",
      Empresa: "",
      N_mero_de_Identificaci_n: "",
      IDempelado: "",
      Fecha_ingreso: "",
      Fecha_salida: "",
      Hora_salida: "",
      Hora_ingreso: "",
      ID: ""
    };
    this.fileModelo = {
      File: ""
    };
    this.tituloo = '';
    this.parrafo = '';
    this.pictureTaken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    // toggle webcam on/off
    this.showWebcam = true;
    this.allowCameraSwitch = true;
    this.multipleWebcamsAvailable = false;
    this.videoOptions = {
      // width: {ideal: 1024},
      // height: {ideal: 576}
    };
    this.errors = [];
    // webcam snapshot trigger
    this.trigger = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__.Subject();
    // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
    this.nextWebcam = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__.Subject();
    // latest snapshot
    this.webcamImage = null;
    //Funciones que reciben del input de numero de identifiacion luego de leer el qr
    this.values = '';
  }
  ngAfterViewInit() {
    if (this.route.snapshot.paramMap.get('titulo') == "Ingreso") {
      this.myInputField.nativeElement.focus();
    } else {
      this.myInputField2.nativeElement.focus();
    }
  }
  handleImage(webcamImage) {
    this.webcamImage = webcamImage;
  }
  ngOnInit() {
    // this.initFormParent();
    this.N_mero_de_Identificaci_n = "";
    this.titulo = this.route.snapshot.paramMap.get('titulo');
    ngx_webcam__WEBPACK_IMPORTED_MODULE_4__.WebcamUtil.getAvailableVideoInputs().then(mediaDevices => {
      this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
    });
  }
  //Alertas
  mesaggeAlertOpen() {
    this.mesagge = true;
  }
  mesaggeAlertClose() {
    this.mesagge = false;
  }
  triggerSnapshot() {
    this.trigger.next();
  }
  toggleWebcam() {
    this.showWebcam = !this.showWebcam;
  }
  handleInitError(error) {
    this.errors.push(error);
  }
  showNextWebcam(directionOrDeviceId) {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }
  cameraWasSwitched(deviceId) {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }
  get triggerObservable() {
    return this.trigger.asObservable();
  }
  get nextWebcamObservable() {
    return this.nextWebcam.asObservable();
  }
  //Validar empleado
  ValidarEmpleado(Num_Identifiacion, Estado) {
    this.empleadosServiceService.getEmpleado(Num_Identifiacion).subscribe(res => {
      if (res.N_mero_de_Identificaci_n != null) {
        this.ValidarBiometrico(Num_Identifiacion, Estado, res);
        setTimeout(() => {
          this.empleados.N_mero_de_Identificaci_n = '';
        }, 3000);
      } else {
        //NOTIFICACION DE NO EXISTE EL EMPLEADO ACTIVO EN EL SISTEMA
        this.mesaggeTitle = "¡Ha ocurrido un error!";
        this.mesaggeNote = "El empleado no se encuentra activo en el sistema comuniquese con el supervisor";
        this.mesaggeImg = "assets/Images/error.svg";
        this.mesaggeAlertOpen();
        setTimeout(() => {
          this.mesaggeAlertClose();
        }, 3000);
        //  console.log("NO existe") //NOTIFICACIONES
      }
    });
  }

  ValidarBiometrico(Num_Identifiacion, Estado, Empleado_) {
    this.empleadosServiceService.getRegistroBiometrico(Num_Identifiacion, Estado, "1").subscribe(res => {
      // console.log(res)
      if (Estado == "Ingreso") {
        if (res.N_mero_de_Identificaci_n != null) {
          //NOTIFIACION DE QUE YA TIENE UN INGRESO EN EL SISTEMA PARA EL HORARIO
          this.mesaggeTitle = "¡Advertencia!";
          this.mesaggeNote = "La cedula ingresada ya presenta un registro de ingreso";
          this.mesaggeImg = "assets/Images/advertencia.svg";
          this.mesaggeAlertOpen();
          setTimeout(() => {
            this.mesaggeAlertClose();
          }, 3000);
          // console.log("EXISTE")//NOTIFICACIONES
        } else {
          this.newBiometricoModelo.Nombre = Empleado_.Nombre_compleo;
          this.newBiometricoModelo.Empresa = Empleado_.Empresa_usuaria;
          this.newBiometricoModelo.N_mero_de_Identificaci_n = Empleado_.N_mero_de_Identificaci_n;
          this.newBiometricoModelo.IDempelado = Empleado_.ID;
          this.addEmpleado(this.newBiometricoModelo, Estado);
          //NOTIFIACION DE QUE YA TIENE UN INGRESO EN EL SISTEMA PARA EL HORARIO
          this.mesaggeTitle = "Registro exitoso!";
          this.mesaggeNote = "El registro fue exitoso";
          this.mesaggeImg = "assets/Images/ingreso.svg";
          this.mesaggeAlertOpen();
          setTimeout(() => {
            this.mesaggeAlertClose();
          }, 3000);
        }
      } //SALIDA
      else {
        //SI existe entonces ya hizo registro de salida
        if (res.N_mero_de_Identificaci_n != null) {
          //SE DEBE COLCOAR UNA ALERTA
          //NOTIFIACION DE QUE YA TIENE UNA SALIDA EN EL SISTEMA PARA EL HORARIO
          this.mesaggeTitle = "¡Advertencia!";
          this.mesaggeNote = "La cedula ingresada ya presenta un registro de salida";
          this.mesaggeImg = "assets/Images/advertencia.svg";
          this.mesaggeAlertOpen();
          setTimeout(() => {
            this.mesaggeAlertClose();
          }, 3000);
          // console.log("ALERTA Existe un registro de salida ya") //NOTIFICACIONES
        } else {
          //Validar de nuevo
          this.empleadosServiceService.getRegistroBiometrico(Num_Identifiacion, Estado, "2").subscribe(res => {
            if (res.N_mero_de_Identificaci_n != null) {
              this.newBiometricoModelo.Nombre = Empleado_.Nombre_compleo;
              this.newBiometricoModelo.Empresa = Empleado_.Empresa_usuaria;
              this.newBiometricoModelo.N_mero_de_Identificaci_n = Empleado_.N_mero_de_Identificaci_n;
              this.newBiometricoModelo.IDempelado = Empleado_.ID;
              this.newBiometricoModelo.ID = res.ID;
              //Actualizar
              this.updateBiometrico(this.newBiometricoModelo, res.ID);
              //NOTIFIACION DE SI NO REGISTRA ENTRADA
              this.mesaggeTitle = "El registro fue exitoso!";
              this.mesaggeNote = "El registro se realizó exitosamente";
              this.mesaggeImg = "assets/Images/salida.svg";
              this.mesaggeAlertOpen();
              setTimeout(() => {
                this.mesaggeAlertClose();
              }, 3000);
            } else {
              this.newBiometricoModelo.Nombre = Empleado_.Nombre_compleo;
              this.newBiometricoModelo.Empresa = Empleado_.Empresa_usuaria;
              this.newBiometricoModelo.N_mero_de_Identificaci_n = Empleado_.N_mero_de_Identificaci_n;
              this.newBiometricoModelo.IDempelado = Empleado_.ID;
              this.newBiometricoModelo.ID = res.ID;
              this.addEmpleado(this.newBiometricoModelo, Estado);
              // this.getEmpleado(Num_Identifiacion)
              //NOTIFIACION DE SI NO REGISTRA ENTRADA
              this.mesaggeTitle = "¡Advertencia!";
              this.mesaggeNote = "La cedula ingresada no presenta registro de entrada";
              this.mesaggeImg = "assets/Images/salida.svg";
              this.mesaggeAlertOpen();
              setTimeout(() => {
                this.mesaggeAlertClose();
              }, 3000);
            }
          });
        }
      }
    });
  }
  //Obtener empleado
  getEmpleado(id) {
    this.empleadosServiceService.getEmpleado(id).subscribe(empleados => this.empleados = empleados);
  }
  addEmpleado(newBiometrico, Estado) {
    this.empleadosServiceService.createEmpleado(newBiometrico, Estado).subscribe(res => {
      this.triggerSnapshot();
      // console.log("Ingreso")
      // console.log(res.ID)
      // console.log(this.webcamImage.imageAsBase64)
      // let data = this.webcamImage.imageAsBase64;
      // this.fileModelo.File=data.toString()
      // this.empleadosServiceService.uploadFile(res.ID,data)
      // this.uploadFile(res.ID,this.fileModelo)
    });
  }

  uploadFile(_ID, data) {
    console.log(data);
    this.empleadosServiceService.uploadFile(_ID, data).subscribe();
  }
  updateBiometrico(newBiometrico, ID) {
    this.empleadosServiceService.updateEmpleado(ID, newBiometrico).subscribe(res => {
      console.log(res);
    });
  }
  ingreso(event) {
    if (this.timeout != null) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      // if (event.target.value.length > 50) {
      let Entrada_ = event.target.value;
      if (Entrada_.startsWith('h')) {
        Entrada_ = Entrada_.substr(1, 160);
      } else {
        Entrada_ = Entrada_.substr(1, 50);
      }
      console.log("validar");
      console.log(Entrada_);
      // Entrada_ = Entrada_.replace(" ","")
      var regex1 = /\_+(\d+)+[^\/]*\//g;
      var regex = /(\d+)/g;
      if (Entrada_ != null && Entrada_.length > 5) {
        const text_ = Entrada_.match(regex1);
        const Numeros2_ = Entrada_.match(regex);
        console.log(text_);
        if (text_ != null) {
          let Numeros_ = text_[0];
          let Numeros1_ = Numeros_.replace("_", "").replace("/", "");
          // const Numeros_ = text_.match(regex);
          this.ValidarEmpleado(Numeros1_, "Ingreso");
          this.mesaggeEstate = "Ingreso";
          event.target.value = Numeros1_;
          this.regresar_inicio();
          event.target.value = "";
          // this.empleadosServiceService.selectedEmpleado.N_mero_de_Identificaci_n = Numeros1_;
        } else if (Numeros2_ != null) {
          var NumeroExtraido_ = Numeros2_[Numeros2_.length - 1];
          var NumeroFinal_ = NumeroExtraido_.substr(NumeroExtraido_.length - 10, NumeroExtraido_.length);
          if (NumeroFinal_.startsWith('0')) {
            NumeroFinal_ = NumeroFinal_.substr(1, NumeroExtraido_.length);
          }
          if (NumeroFinal_.startsWith('0')) {
            NumeroFinal_ = NumeroFinal_.substr(1, NumeroExtraido_.length);
          }
          console.log(NumeroFinal_);
          this.ValidarEmpleado(NumeroFinal_, "Ingreso");
          this.mesaggeEstate = "Ingreso";
          event.target.value = NumeroFinal_;
          this.regresar_inicio();
          event.target.value = "";
        }
      } else {
        event.target.value = "";
      }
      // }
    }, 1500);
  }
  // if (Entrada_ != null && Entrada_.length > 5) {
  //https://creatorapp.zohopublic.com/hq5colombia/hq5/record-pdf/Candidatos_En_Proceso_Qr/3960020000015496108/Carnet_Hq5_1085267473/mmQZY54
  //   this.ValidarEmpleado(Entrada_,"Ingreso");
  //   event.target.value = "";
  //   this.regresar_inicio();
  // }
  // //Obtener solo los numeros con expresión regular
  // var regex = /(\d+)/g;
  // // var regex = /[^Carnet_]//$/g;
  // const Numeros_ = Entrada_.match(regex)
  // console.log(Numeros_)
  salida(event) {
    if (this.timeout != null) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      // if (event.target.value.length > 50) {
      let Entrada_ = event.target.value;
      if (Entrada_.startsWith('h')) {
        Entrada_ = Entrada_.substr(1, 160);
      } else {
        Entrada_ = Entrada_.substr(1, 50);
      }
      // Entrada_ = Entrada_.replace(" ","")
      console.log(Entrada_);
      var regex1 = /\_+(\d+)+[^\/]*\//g;
      var regex = /(\d+)/g;
      if (Entrada_ != null && Entrada_.length > 5) {
        const text_ = Entrada_.match(regex1);
        const Numeros2_ = Entrada_.match(regex);
        console.log(Numeros2_);
        if (text_ != null) {
          let Numeros_ = text_[0];
          let Numeros1_ = Numeros_.replace("_", "").replace("/", "");
          // const Numeros_ = text_.match(regex);
          this.ValidarEmpleado(Numeros1_, "Salida");
          this.mesaggeEstate = "Salida";
          event.target.value = Numeros1_;
          this.regresar_inicio();
          event.target.value = "";
          // this.empleadosServiceService.selectedEmpleado.N_mero_de_Identificaci_n = Numeros1_;
        } else if (Numeros2_ != null) {
          var NumeroExtraido_ = Numeros2_[Numeros2_.length - 1];
          var NumeroFinal_ = NumeroExtraido_.substr(NumeroExtraido_.length - 10, NumeroExtraido_.length);
          if (NumeroFinal_.startsWith('0')) {
            NumeroFinal_ = NumeroFinal_.substr(1, NumeroExtraido_.length);
          }
          if (NumeroFinal_.startsWith('0')) {
            NumeroFinal_ = NumeroFinal_.substr(1, NumeroExtraido_.length);
          }
          console.log(NumeroFinal_);
          this.ValidarEmpleado(NumeroFinal_, "Salida");
          this.mesaggeEstate = "Salida";
          event.target.value = NumeroFinal_;
          this.regresar_inicio();
          event.target.value = "";
        }
      } else {
        event.target.value = "";
      }
      // }
    }, 1500);
  }
  //Función para regresar al inicio
  regresar_inicio() {
    if (this.timeout != null) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      location.href = location.host + "/Biometrico";
    }, 300000);
  }
}
EmpleadocomponentComponent.ɵfac = function EmpleadocomponentComponent_Factory(t) {
  return new (t || EmpleadocomponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_empleado_services_empleados_service_service__WEBPACK_IMPORTED_MODULE_0__.EmpleadosServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
};
EmpleadocomponentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: EmpleadocomponentComponent,
  selectors: [["app-empleadocomponent"]],
  viewQuery: function EmpleadocomponentComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.myInputField = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.myInputField2 = _t.first);
    }
  },
  outputs: {
    mesagge: "mesagge"
  },
  decls: 18,
  vars: 5,
  consts: [["tabindex", "-1", "role", "dialog", "id", "modalSheet", 1, "modal", "modal-sheet", "position-static", "d-block", "py-5", "container-modal"], ["role", "document", 1, "modal-dialog"], [1, "modal-content", "rounded-4", "card-content"], [1, "modal-header", "border-bottom-0"], [1, "modal-title", "fs-5", "title-1"], [1, "modal-body", "py-0"], ["empleadoForm", "ngForm"], [1, "form-group"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["Ingreso", ""], ["Salida", ""], [1, "modal-footer", "flex-column", "border-top-0"], [4, "ngIf"], [2, "text-align", "center"], [3, "height", "width", "trigger", "allowCameraSwitch", "switchCamera", "videoOptions", "imageCapture", "cameraSwitched", "initError", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["type", "text", "name", "N_mero_de_Identificaci_nI", "placeholder", "Identificacion ingreso", "required", "", "minlength", "6", "max", "50", "value", "", 1, "input-form", 3, "keydown"], ["N_mero_de_Identificaci_nI", ""], ["class", "alert", 4, "ngIf"], [3, "height", "width", "trigger", "allowCameraSwitch", "switchCamera", "videoOptions", "imageCapture", "cameraSwitched", "initError"], [1, "alert"], ["class", "message", 4, "ngIf"], [1, "message"], ["type", "text", "name", "N_mero_de_Identificaci_nS", "placeholder", "Identificacion salida", "required", "", "minlength", "6", "max", "50", "value", "", "autofocus", "", 1, "input-form", 3, "keydown"], ["N_mero_de_Identificaci_nS", ""], [1, "modal-message"], [1, "modal__container"], [1, "modal__title"], ["alt", "", 1, "img-mesagge", 3, "src"], [1, "modal__paragraph"]],
  template: function EmpleadocomponentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "form", null, 6)(9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, EmpleadocomponentComponent_ng_container_10_Template, 1, 0, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, EmpleadocomponentComponent_ng_template_11_Template, 12, 4, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, EmpleadocomponentComponent_ng_template_13_Template, 8, 2, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7)(16, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, EmpleadocomponentComponent_div_17_Template, 8, 3, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.titulo);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.titulo == "Ingreso")("ngIfThen", _r2)("ngIfElse", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mesagge);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, ngx_webcam__WEBPACK_IMPORTED_MODULE_4__.WebcamComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.JsonPipe],
  styles: [".input-form[_ngcontent-%COMP%] {\n    border-style: solid;\n    border-color: #b81c1c;\n    border-width: 3px;\n    display: block;\n    width: 100%;\n    padding: 0.375rem 0.75rem;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    background-color: var(--bs-form-control-bg);\n    background-clip: padding-box;\n    -webkit-appearance: none;\n    appearance: none;\n    border-radius: 0.375rem;\n}\n\n\n.title-1[_ngcontent-%COMP%]{\n    color: #b81c1c;\n    width: 100%;\n    text-align: center;\n    align-items: center;\n    align-content: center;\n    font-size: 2rem;\n    font-weight: 400;\n}\n\n.card-content[_ngcontent-%COMP%]{\n    top: 30px;\n    height: auto;\n    border-color: #b81c1c;\n    border-style: solid;\n\n}\n\n.container-modal[_ngcontent-%COMP%]{\n    background-color: #F7CACA;\n\tbackground-image: url(\"/assets/Images/fondo_4.svg\");\n\tbackground-position: bottom;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tbackground-attachment: scroll;\n\n}\n\np[_ngcontent-%COMP%]{\n    margin-top: 10px;\n    text-align: center;\n    font-size: 25px;\n}\n\n*[_ngcontent-%COMP%]{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%]{\n    font-family: 'Urbanist', sans-serif;\n}\n\n.container[_ngcontent-%COMP%]{\n    width: 90%;\n    max-width: 1200px;\n    margin: 0 auto;\n    overflow: hidden;\n}\n.modal-message[_ngcontent-%COMP%]{\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #111111bd;\n    display: flex;\n    pointer-events: none;\n    transition: opacity .6s .9s;\n    --transform: translateY(-100vh);\n    --transition: transform .8s;\n    opacity: 1;\n\n    pointer-events: unset;\n    transition: opacity .6s;\n    --transform: translateY(0);\n    --transition: transform .8s .8s;\n    z-index: 1000;\n}\n\n.modal-message--show[_ngcontent-%COMP%]{\n    opacity: 0;\n    pointer-events: unset;\n    transition: opacity .6s;\n    --transform: translateY(0);\n    --transition: transform .8s .8s;\n    z-index: 1000;\n} \n\n.modal__container[_ngcontent-%COMP%]{\n    margin: auto;\n    width: 90%;\n    max-width: 600px;\n    max-height: 90%;\n    background-color: #fff;\n    border-radius: 6px;\n    padding: 3em 2.5em;\n    display: grid;\n    gap: 1em;\n    place-items: center;\n    grid-auto-columns: 100%;\n    transform: var(--transform);\n    transition:var(--transition);\n}\n\n.modal__title[_ngcontent-%COMP%]{\n    font-size: 2.5rem;\n}\n\n.modal__paragraph[_ngcontent-%COMP%]{\n    margin-bottom: 10px;\n}\n\n.img-mesagge[_ngcontent-%COMP%]{\n    width: 30vh;\n    width: 90%;\n    max-width: 280px;\n  }\n\n.modal__close[_ngcontent-%COMP%]{\n    text-decoration: none;\n    color: #fff;\n    background-color: #F26250;\n    padding: 1em 3em;\n    border: 1px solid ;\n    border-radius: 6px;\n    display: inline-block;\n    font-weight: 300;\n    transition: background-color .3s;\n}\n\n.modal__close[_ngcontent-%COMP%]:hover{\n    color: #F26250;\n    background-color: #fff;\n}\n\n\n@media (max-width:800px) {\n    .modal__container[_ngcontent-%COMP%]{\n        padding: 2em 1.5em;\n    }\n\n    .modal__title[_ngcontent-%COMP%]{\n        font-size: 2rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZW1wbGVhZG8vZW1wbGVhZG9jb21wb25lbnQvZW1wbGVhZG9jb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDJDQUEyQztJQUMzQyw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBRXhCLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7OztBQUdBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWixxQkFBcUI7SUFDckIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLHlCQUF5QjtDQUM1QixtREFBbUQ7Q0FDbkQsMkJBQTJCO0NBQzNCLDRCQUE0QjtDQUM1QixzQkFBc0I7Q0FDdEIsNkJBQTZCOztBQUU5Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULDJCQUEyQjtJQUMzQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUMzQiwrQkFBK0I7SUFDL0IsMkJBQTJCO0lBQzNCLFVBQVU7O0lBRVYscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsK0JBQStCO0lBQy9CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsK0JBQStCO0lBQy9CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFFBQVE7SUFDUixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGdCQUFnQjtFQUNsQjs7QUFFRjtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1mb3JtIHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogI2I4MWMxYztcbiAgICBib3JkZXItd2lkdGg6IDNweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtZm9ybS1jb250cm9sLWJnKTtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbn1cblxuXG4udGl0bGUtMXtcbiAgICBjb2xvcjogI2I4MWMxYztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5jYXJkLWNvbnRlbnR7XG4gICAgdG9wOiAzMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItY29sb3I6ICNiODFjMWM7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcblxufVxuXG4uY29udGFpbmVyLW1vZGFse1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0NBQ0E7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvSW1hZ2VzL2ZvbmRvXzQuc3ZnXCIpO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xuXG59XG5cbnB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4qe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHl7XG4gICAgZm9udC1mYW1pbHk6ICdVcmJhbmlzdCcsIHNhbnMtc2VyaWY7XG59XG5cbi5jb250YWluZXJ7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1vZGFsLW1lc3NhZ2V7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExYmQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC42cyAuOXM7XG4gICAgLS10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHZoKTtcbiAgICAtLXRyYW5zaXRpb246IHRyYW5zZm9ybSAuOHM7XG4gICAgb3BhY2l0eTogMTtcblxuICAgIHBvaW50ZXItZXZlbnRzOiB1bnNldDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC42cztcbiAgICAtLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAtLXRyYW5zaXRpb246IHRyYW5zZm9ybSAuOHMgLjhzO1xuICAgIHotaW5kZXg6IDEwMDA7XG59XG5cbi5tb2RhbC1tZXNzYWdlLS1zaG93e1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IHVuc2V0O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjZzO1xuICAgIC0tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIC0tdHJhbnNpdGlvbjogdHJhbnNmb3JtIC44cyAuOHM7XG4gICAgei1pbmRleDogMTAwMDtcbn0gXG5cbi5tb2RhbF9fY29udGFpbmVye1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgbWF4LWhlaWdodDogOTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmc6IDNlbSAyLjVlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMWVtO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiB2YXIoLS10cmFuc2Zvcm0pO1xuICAgIHRyYW5zaXRpb246dmFyKC0tdHJhbnNpdGlvbik7XG59XG5cbi5tb2RhbF9fdGl0bGV7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbi5tb2RhbF9fcGFyYWdyYXBoe1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pbWctbWVzYWdnZXtcbiAgICB3aWR0aDogMzB2aDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogMjgwcHg7XG4gIH1cblxuLm1vZGFsX19jbG9zZXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyNjI1MDtcbiAgICBwYWRkaW5nOiAxZW0gM2VtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XG59XG5cbi5tb2RhbF9fY2xvc2U6aG92ZXJ7XG4gICAgY29sb3I6ICNGMjYyNTA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDo4MDBweCkge1xuICAgIC5tb2RhbF9fY29udGFpbmVye1xuICAgICAgICBwYWRkaW5nOiAyZW0gMS41ZW07XG4gICAgfVxuXG4gICAgLm1vZGFsX190aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5308:
/*!***************************************************!*\
  !*** ./src/app/empleado/services/data.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class DataService {
  constructor() {
    this.DisparadorModo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
}
DataService.ɵfac = function DataService_Factory(t) {
  return new (t || DataService)();
};
DataService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: DataService,
  factory: DataService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7054:
/*!****************************************************************!*\
  !*** ./src/app/empleado/services/empleados-service.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpleadosServiceService": () => (/* binding */ EmpleadosServiceService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class EmpleadosServiceService {
  constructor(http) {
    this.http = http;
    this.httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.Cliente = {
      display_value: "",
      ID: ""
    };
    //DOMINIO
    this.dominioURL = "https://backservicios.gestionhq5.com.co/";
    // private dominioURL =  "http://164.92.109.128:7000/"
    // private dominioURL =  "http://localhost:7000/"
    //URLS
    this.GetEmpleadoURL = this.dominioURL + "empleado/";
    //biometricoKm[]
    this.getURLBiometrico = this.dominioURL + "getbiometrico/";
    this.postURlBiometrico = this.dominioURL + "addbiometrico/";
    this.putURlBiometrico = this.dominioURL + "updatebiometrico/";
    this.UpdateURlFoto = this.dominioURL + "uploadfile/";
    this.selectedEmpleado = {
      Nombre_compleo: "",
      Celular: "",
      N_mero_de_contrato: "",
      ID: "",
      N_mero_de_Identificaci_n: "",
      Correo_electronico: "",
      Contrato_Activo: "",
      CLIENTE1: this.Cliente,
      Empresa_usuaria: ""
    };
    this.empleadosModelo = {
      Nombre_compleo: "",
      Celular: "",
      N_mero_de_contrato: "",
      ID: "",
      N_mero_de_Identificaci_n: "",
      Correo_electronico: "",
      Contrato_Activo: "",
      CLIENTE1: this.Cliente,
      Empresa_usuaria: ""
    };
    //Biometrico
    this.BiometricoModelo = {
      Nombre: "",
      Empresa: "",
      N_mero_de_Identificaci_n: "",
      IDempelado: "",
      Fecha_ingreso: "",
      Fecha_salida: "",
      Hora_salida: "",
      Hora_ingreso: "",
      ID: ""
    };
    this.fileModelo = {
      File: ""
    };
  }
  getEmpleado(_id) {
    return this.http.get(this.GetEmpleadoURL + _id);
  }
  //Validar registro biometrico
  getRegistroBiometrico(_id, _estado, validacion) {
    return this.http.get(this.getURLBiometrico + _id + "/" + _estado + "/" + validacion);
  }
  // public createEmpleado(newEmpleado: EmpleadosModelo ):Observable<EmpleadosModelo> {
  //   return this.http.post<EmpleadosModelo>(this.ChuckUrl);
  // }
  //POST
  createEmpleado(newBiometrico, Estado) {
    return this.http.post(this.postURlBiometrico + Estado, newBiometrico, this.httpOptions);
  }
  //PUT
  updateEmpleado(ID, newBiometrico) {
    return this.http.put(this.putURlBiometrico + ID, newBiometrico);
  }
  uploadFile(ID, data) {
    // Foto_ingreso
    return this.http.post(this.UpdateURlFoto + ID, data, this.httpOptions);
  }
}
EmpleadosServiceService.ɵfac = function EmpleadosServiceService_Factory(t) {
  return new (t || EmpleadosServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
};
EmpleadosServiceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: EmpleadosServiceService,
  factory: EmpleadosServiceService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map