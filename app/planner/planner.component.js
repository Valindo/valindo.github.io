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
var PlannerComponent = (function () {
    function PlannerComponent(elementRef, router, plannerService) {
        this.elementRef = elementRef;
        this.router = router;
        this.plannerService = plannerService;
    }
    PlannerComponent.prototype.ngAfterViewInit = function () {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'js/theme.js';
        this.elementRef.nativeElement.appendChild(s);
        var t = document.createElement('script');
        t.type = 'text/javascript';
        t.src = 'js/wow.min.js';
        this.elementRef.nativeElement.appendChild(t);
    };
    PlannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.plannerService.getPlanners()
            .subscribe(function (planners) { return _this.planners = planners; }, function (error) { return console.log(error); });
    };
    PlannerComponent.prototype.gotoPlanner = function (planner) {
        this.router.navigate(['/planner', planner.id]);
    };
    PlannerComponent = __decorate([
        core_1.Component({
            selector: 'planner',
            templateUrl: 'app/planner/planner.component.html',
            providers: [planner_service_1.PlannerService]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, router_1.Router, planner_service_1.PlannerService])
    ], PlannerComponent);
    return PlannerComponent;
}());
exports.PlannerComponent = PlannerComponent;
//# sourceMappingURL=planner.component.js.map