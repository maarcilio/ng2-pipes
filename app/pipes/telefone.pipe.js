"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var TelefonePipe = (function () {
    // (31)9609-8689 ou (31)99609-8689
    function TelefonePipe() {
    }
    TelefonePipe.prototype.transform = function (value) {
        if (!value)
            return value;
        var telefone = value.toString();
        if (telefone.length === 9) {
            return telefone.substr(0, 5) + "-" + telefone.substr(5, 4);
        }
        else if (telefone.length === 8) {
            return telefone.substr(0, 4) + "-" + telefone.substr(4, 4);
        }
        else if (telefone.length === 10) {
            return "(" + telefone.substr(0, 2) + ") " + telefone.substr(2, 4) + "-" + telefone.substr(6, 4);
        }
        else if (telefone.length === 11) {
            return "(" + telefone.substr(0, 2) + ") " + telefone.substr(2, 5) + "-" + telefone.substr(7, 4);
        }
        else {
            return telefone;
        }
    };
    return TelefonePipe;
}());
TelefonePipe = __decorate([
    core_1.Pipe({
        name: 'telefone'
    })
], TelefonePipe);
exports.TelefonePipe = TelefonePipe;
//# sourceMappingURL=telefone.pipe.js.map