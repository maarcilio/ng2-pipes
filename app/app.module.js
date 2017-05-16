"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
//Pipes
var cep_pipe_1 = require("./pipes/cep.pipe");
var cnpj_pipe_1 = require("./pipes/cnpj.pipe");
var cpf_pipe_1 = require("./pipes/cpf.pipe");
var decimal_pipe_1 = require("./pipes/decimal.pipe");
var telefone_pipe_1 = require("./pipes/telefone.pipe");
var data_pipe_1 = require("./pipes/data.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [
            app_component_1.AppComponent,
            cep_pipe_1.CepPipe,
            cnpj_pipe_1.CnpjPipe,
            cpf_pipe_1.CpfPipe,
            decimal_pipe_1.DecimalBrPipe,
            telefone_pipe_1.TelefonePipe,
            data_pipe_1.DataPipe
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map