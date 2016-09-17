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
var modal_component_1 = require('ng2-bootstrap/components/modal/modal.component');
var ContactButtonComponent = (function () {
    function ContactButtonComponent() {
    }
    ContactButtonComponent.prototype.showChildModal = function () {
        this.childModal.show();
    };
    ContactButtonComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    __decorate([
        core_1.ViewChild('childModal'), 
        __metadata('design:type', modal_component_1.ModalDirective)
    ], ContactButtonComponent.prototype, "childModal", void 0);
    ContactButtonComponent = __decorate([
        core_1.Component({
            selector: 'contact-button',
            templateUrl: 'app/contactbutton/contactbutton.component.html',
            inputs: ['object', 'object_type']
        }), 
        __metadata('design:paramtypes', [])
    ], ContactButtonComponent);
    return ContactButtonComponent;
}());
exports.ContactButtonComponent = ContactButtonComponent;
//# sourceMappingURL=contactbutton.component.js.map