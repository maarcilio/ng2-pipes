"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CnpjPipe = (function () {
    // 72006-226
    function CnpjPipe() {
    }
    CnpjPipe.prototype.transform = function (value) {
        if (!value)
            return value;
        var cnpj = value.toString();
        if (cnpj.length === 14) {
            return cnpj.substr(0, 2) + "." + cnpj.substr(2, 3) + "." + cnpj.substr(5, 3) + "/" + cnpj.substr(8, 4) + "." + cnpj.substr(12, 2);
        }
        return cnpj;
    };
    return CnpjPipe;
}());
CnpjPipe = __decorate([
    core_1.Pipe({
        name: 'cnpj'
    })
], CnpjPipe);
exports.CnpjPipe = CnpjPipe;
//# sourceMappingURL=cnpj.pipe.js.map