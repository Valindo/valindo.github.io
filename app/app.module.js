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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var navbar_component_1 = require('./navbar/navbar.component');
var bottom_component_1 = require('./bottom/bottom.component');
var home_component_1 = require('./home/home.component');
var review_component_1 = require('./review/review.component');
var venue_component_1 = require('./venue/venue.component');
var venueview_component_1 = require('./venue/venueview.component');
var caterer_component_1 = require('./caterer/caterer.component');
var catererview_component_1 = require('./caterer/catererview.component');
var planner_component_1 = require('./planner/planner.component');
var plannerview_component_1 = require('./planner/plannerview.component');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var venue_routing_1 = require('./venue/venue.routing');
var caterer_routing_1 = require('./caterer/caterer.routing');
var planner_routing_1 = require('./planner/planner.routing');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var angulartics2_1 = require('angulartics2');
var angulartics2_google_analytics_1 = require('angulartics2/src/providers/angulartics2-google-analytics');
var contactbutton_component_1 = require('./contactbutton/contactbutton.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                app_routing_1.routing,
                venue_routing_1.venuesRouting,
                caterer_routing_1.caterersRouting,
                planner_routing_1.plannersRouting,
                http_1.HttpModule,
                http_1.JsonpModule,
                ng2_bootstrap_1.Ng2BootstrapModule,
                angulartics2_1.Angulartics2Module.forRoot()],
            declarations: [app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                bottom_component_1.BottomComponent,
                home_component_1.HomeComponent,
                review_component_1.ReviewComponent,
                venue_component_1.VenueComponent,
                venueview_component_1.VenueviewComponent,
                caterer_component_1.CatererComponent,
                catererview_component_1.CatererViewComponent,
                planner_component_1.PlannerComponent,
                plannerview_component_1.PlannerViewComponent,
                contactbutton_component_1.ContactButtonComponent],
            providers: [app_routing_1.appRoutingProviders, angulartics2_google_analytics_1.Angulartics2GoogleAnalytics],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map