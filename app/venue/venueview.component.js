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
var router_1 = require('@angular/router');
var venue_service_1 = require('./venue.service');
var VenueviewComponent = (function () {
    function VenueviewComponent(elementRef, router, venueService, route) {
        this.elementRef = elementRef;
        this.router = router;
        this.venueService = venueService;
        this.route = route;
    }
    VenueviewComponent.prototype.ngAfterViewInit = function () {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'js/theme.js';
        this.elementRef.nativeElement.appendChild(s);
        var t = document.createElement('script');
        t.type = 'text/javascript';
        t.src = 'js/wow.min.js';
        this.elementRef.nativeElement.appendChild(t);
    };
    VenueviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            console.log("i reacher here");
            var id = +params['id'];
            _this.venueService.getVenue(id)
                .subscribe(function (venue) { return _this.venue = venue; }, function (error) { return console.log(error); }, function () { return console.log("venue is " + _this.venue); });
        });
    };
    VenueviewComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    VenueviewComponent = __decorate([
        core_1.Component({
            selector: 'venue-view',
            templateUrl: 'app/venue/venueview.component.html'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, router_1.Router, venue_service_1.VenueService, router_1.ActivatedRoute])
    ], VenueviewComponent);
    return VenueviewComponent;
}());
exports.VenueviewComponent = VenueviewComponent;
//# sourceMappingURL=venueview.component.js.map