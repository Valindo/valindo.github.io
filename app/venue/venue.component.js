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
var venue_service_1 = require('./venue.service');
var router_1 = require('@angular/router');
var VenueComponent = (function () {
    function VenueComponent(elementRef, router, venueService) {
        this.elementRef = elementRef;
        this.router = router;
        this.venueService = venueService;
    }
    VenueComponent.prototype.ngAfterViewInit = function () {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'js/theme.js';
        this.elementRef.nativeElement.appendChild(s);
        var t = document.createElement('script');
        t.type = 'text/javascript';
        t.src = 'js/wow.min.js';
        this.elementRef.nativeElement.appendChild(t);
    };
    VenueComponent.prototype.goToVenue = function (venue) {
        this.router.navigate(['/venue', venue.id]);
    };
    VenueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.venueService.getVenues()
            .subscribe(function (venues) { return _this.venues = venues; }, function (error) { return console.log(error); });
    };
    VenueComponent = __decorate([
        core_1.Component({
            selector: 'venue',
            templateUrl: 'app/venue/venue.component.html',
            providers: [venue_service_1.VenueService]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, router_1.Router, venue_service_1.VenueService])
    ], VenueComponent);
    return VenueComponent;
}());
exports.VenueComponent = VenueComponent;
//# sourceMappingURL=venue.component.js.map