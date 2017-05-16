"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
/*
 * Format date pt-Br
 * How to use:
 *  - DataPipe:
 *      value | data
 *      Example:
 *          {{ Wed Sep 08 1993 00:00:00 GMT-0300 (Hora oficial do Brasil)  | data }}
 *          result: 08/08/1993
 *  - DataPipe:
 *      value | data: 'mascara'
 *      Example:
 *          {{ Wed Sep 08 1993 00:00:00 GMT-0300 (Hora oficial do Brasil)  | data:'dd/MM' }}
 *          result: 08/08
*/
var DataPipe = (function () {
    function DataPipe() {
    }
    DataPipe.prototype.transform = function (value, mascara) {
        if (!value)
            return null;
        return new common_1.DatePipe('pt-Br').transform(value, mascara ? mascara : 'dd/MM/yyyy');
    };
    return DataPipe;
}());
DataPipe = __decorate([
    core_1.Pipe({ name: 'data' })
], DataPipe);
exports.DataPipe = DataPipe;
//# sourceMappingURL=data.pipe.js.map