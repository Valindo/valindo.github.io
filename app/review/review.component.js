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
var auth_service_1 = require('./auth.service');
var review_service_1 = require('./review.service');
var ReviewComponent = (function () {
    function ReviewComponent(auth, _review) {
        this.auth = auth;
        this._review = _review;
        this.rate = 0;
        this.max = 5;
        this.commentSuccess = false;
    }
    ReviewComponent.prototype.hoveringOver = function (value) {
        this.overStar = value;
        this.percent = 100 * (value / this.max);
    };
    ;
    ReviewComponent.prototype.resetStar = function () {
        this.overStar = void 0;
    };
    ReviewComponent.prototype.postComment = function () {
        this._review.postReview(this.object_type, this.auth.userProfile.picture, this.auth.userProfile.name, this.comment, this.rate, this.object.id);
        this.commentSuccess = true;
    };
    ReviewComponent = __decorate([
        core_1.Component({
            selector: 'review',
            providers: [auth_service_1.Auth, review_service_1.ReviewService],
            templateUrl: 'app/review/review.component.html',
            inputs: ['object_type', 'object', 'comment']
        }), 
        __metadata('design:paramtypes', [auth_service_1.Auth, review_service_1.ReviewService])
    ], ReviewComponent);
    return ReviewComponent;
}());
exports.ReviewComponent = ReviewComponent;
//# sourceMappingURL=review.component.js.map