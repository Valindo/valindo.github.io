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
var planner_service_1 = require('./planner.service');
var PlannerViewComponent = (function () {
    function PlannerViewComponent(elementRef, router, route, plannerService) {
        this.elementRef = elementRef;
        this.router = router;
        this.route = route;
        this.plannerService = plannerService;
    }
    PlannerViewComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            var t = document.createElement('script');
            t.type = 'text/javascript';
            t.src = 'js/img-carousel-fix.js';
            _this.elementRef.nativeElement.appendChild(t);
        }, 100);
    };
    PlannerViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.plannerService.getPlanner(id)
                .subscribe(function (planner) { return _this.planner = planner; }, function (error) { return console.log(error); });
        });
    };
    PlannerViewComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PlannerViewComponent = __decorate([
        core_1.Component({
            selector: 'planner-view',
            templateUrl: 'app/planner/plannerview.component.html'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, router_1.Router, router_1.ActivatedRoute, planner_service_1.PlannerService])
    ], PlannerViewComponent);
    return PlannerViewComponent;
}());
exports.PlannerViewComponent = PlannerViewComponent;
//# sourceMappingURL=plannerview.component.js.map