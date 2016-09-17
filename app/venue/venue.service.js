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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
var VenueService = (function () {
    function VenueService(http) {
        this.http = http;
        this._baseUrl = "http://205.147.100.109";
        this.venues_req = "/venues";
    }
    VenueService.prototype.getVenues = function () {
        return this.http.get(this._baseUrl + this.venues_req + ".json")
            .map(this.extractVenuesData)
            .catch(this.handleError);
    };
    VenueService.prototype.getVenue = function (id) {
        return this.http.get(this._baseUrl + this.venues_req + "/" + id + ".json")
            .map(this.extractVenueData)
            .catch(this.handleError);
    };
    VenueService.prototype.extractVenuesData = function (res) {
        var body = res.json();
        return body['venues'];
    };
    VenueService.prototype.extractVenueData = function (res) {
        var body = res.json();
        return body;
    };
    VenueService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    VenueService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], VenueService);
    return VenueService;
}());
exports.VenueService = VenueService;
//# sourceMappingURL=venue.service.js.map