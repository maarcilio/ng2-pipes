"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CepPipe = (function () {
    // 72006-226
    function CepPipe() {
    }
    CepPipe.prototype.transform = function (value) {
        if (!value)
            return value;
        var cep = value.toString();
        if (cep.length === 8) {
            return cep.substr(0, 5) + "-" + cep.substr(5, 3);
        }
        return cep;
    };
    return CepPipe;
}());
CepPipe = __decorate([
    core_1.Pipe({
        name: 'cep'
    })
], CepPipe);
exports.CepPipe = CepPipe;
//# sourceMappingURL=cep.pipe.js.map