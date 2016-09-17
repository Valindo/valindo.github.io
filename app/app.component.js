"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var navbar_component_1 = require('./navbar/navbar.component');
var bottom_component_1 = require('./bottom/bottom.component');
var angulartics2_1 = require('angulartics2');
var angulartics2_google_analytics_1 = require('angulartics2/src/providers/angulartics2-google-analytics');
var AppComponent = (function () {
    function AppComponent(viewContainerRef, angulartics2, angulartics2GoogleAnalytics) {
        this.viewContainerRef = viewContainerRef;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [navbar_component_1.NavbarComponent, bottom_component_1.BottomComponent],
            template: "\n\t<navbar></navbar>\n\t<router-outlet></router-outlet>\n\t<bottom></bottom>\n\t"
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, angulartics2_1.Angulartics2, angulartics2_google_analytics_1.Angulartics2GoogleAnalytics])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map