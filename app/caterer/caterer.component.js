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
var caterer_service_1 = require('./caterer.service');
var router_1 = require('@angular/router');
var CatererComponent = (function () {
    function CatererComponent(elementRef, router, catererService) {
        this.elementRef = elementRef;
        this.router = router;
        this.catererService = catererService;
    }
    CatererComponent.prototype.ngAfterViewInit = function () {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'js/theme.js';
        this.elementRef.nativeElement.appendChild(s);
        var t = document.createElement('script');
        t.type = 'text/javascript';
        t.src = 'js/wow.min.js';
        this.elementRef.nativeElement.appendChild(t);
    };
    CatererComponent.prototype.goToCaterer = function (caterer) {
        this.router.navigate(['/caterer', caterer.id]);
    };
    CatererComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.catererService.getCaterers()
            .subscribe(function (caterers) { return _this.caterers = caterers; }, function (error) { return console.log(error); });
    };
    CatererComponent = __decorate([
        core_1.Component({
            selector: 'caterer',
            templateUrl: 'app/caterer/caterer.component.html',
            providers: [caterer_service_1.CatererService]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, router_1.Router, caterer_service_1.CatererService])
    ], CatererComponent);
    return CatererComponent;
}());
exports.CatererComponent = CatererComponent;
//# sourceMappingURL=caterer.component.js.map