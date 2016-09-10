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
var facebook_service_1 = require('./facebook.service');
var image_service_1 = require('./image.service');
var HomeComponent = (function () {
    function HomeComponent(elementRef, _ngZone, _facebookService, _img) {
        this.elementRef = elementRef;
        this._ngZone = _ngZone;
        this._facebookService = _facebookService;
        this._img = _img;
        this.name = "";
        this.isUser = false;
    }
    HomeComponent.prototype.ngAfterViewInit = function () {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'js/theme.js';
        this.elementRef.nativeElement.appendChild(s);
        var t = document.createElement('script');
        t.type = 'text/javascript';
        t.src = 'js/wow.min.js';
        this.elementRef.nativeElement.appendChild(t);
    };
    HomeComponent.prototype.ngOnInit = function () {
        // this._facebookService.loadAndInitFBSDK();
        // console.log("I reach here")
        // window.fbAsyncInit = function() {
        // 	FB.init(
        // 	{
        // 		appId      : '153757638403747',
        // 		xfbml      : true,
        // 		version    : 'v2.0'
        // 	}
        // 	);
        // 	FB.ui(
        // 	{
        // 		method: 'share',
        // 		href: 'https://developers.facebook.com/docs/dialogs/'
        // 	},
        // 	function(response) {
        // 		console.log(response);
        // 	}
        // 	);
        // 	// FB.api(
        // 	// 	"/me",
        // 	// 	"POST",
        // 	// 	function (fbResponse){
        // 	// 		console.log(fbResponse);
        // 	// 	}
        // 	// 	);
        // };
    };
    HomeComponent.pictureUrl = "Hello";
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'app/home/home.component.html',
            providers: [facebook_service_1.FacebookService, image_service_1.ImageService]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone, facebook_service_1.FacebookService, image_service_1.ImageService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map