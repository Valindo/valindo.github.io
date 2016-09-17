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
var caterer_service_1 = require('./caterer.service');
var CatererViewComponent = (function () {
    function CatererViewComponent(elementRef, router, route, catererService) {
        this.elementRef = elementRef;
        this.router = router;
        this.route = route;
        this.catererService = catererService;
    }
    CatererViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.catererService.getCaterer(id)
                .subscribe(function (caterer) { return _this.caterer = caterer; }, function (error) { return console.log(error); });
        });
    };
    CatererViewComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CatererViewComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'js/theme.js';
        this.elementRef.nativeElement.appendChild(s);
        var t = document.createElement('script');
        t.type = 'text/javascript';
        t.src = 'js/wow.min.js';
        this.elementRef.nativeElement.appendChild(t);
        setTimeout(function () {
            var t = document.createElement('script');
            t.type = 'text/javascript';
            t.src = 'js/img-carousel-fix.js';
            _this.elementRef.nativeElement.appendChild(t);
        }, 100);
    };
    CatererViewComponent.prototype.typeColor = function (dish_type) {
        if (dish_type == "Veg") {
            return "text-success";
        }
        else {
            return "text-danger";
        }
    };
    CatererViewComponent = __decorate([
        core_1.Component({
            selector: 'caterer-view',
            templateUrl: 'app/caterer/catererview.component.html',
            providers: [caterer_service_1.CatererService]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, router_1.Router, router_1.ActivatedRoute, caterer_service_1.CatererService])
    ], CatererViewComponent);
    return CatererViewComponent;
}());
exports.CatererViewComponent = CatererViewComponent;
//# sourceMappingURL=catererview.component.js.map