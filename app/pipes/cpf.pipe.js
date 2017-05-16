"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CpfPipe = (function () {
    // 019.642.561-19
    function CpfPipe() {
    }
    CpfPipe.prototype.transform = function (value) {
        if (!value)
            return value;
        var cpf = value.toString();
        if (cpf.length === 11) {
            return cpf.substr(0, 3) + "." + cpf.substr(3, 3) + "." + cpf.substr(6, 3) + "-" + cpf.substr(9, 2);
        }
        return cpf;
    };
    return CpfPipe;
}());
CpfPipe = __decorate([
    core_1.Pipe({
        name: 'cpf'
    })
], CpfPipe);
exports.CpfPipe = CpfPipe;
//# sourceMappingURL=cpf.pipe.js.map