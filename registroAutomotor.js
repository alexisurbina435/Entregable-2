"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var soporte_1 = require("./soporte");
var RegistroAutomotor = /** @class */ (function (_super) {
    __extends(RegistroAutomotor, _super);
    function RegistroAutomotor(nombre, ListaDeAuto, ListaDeMoto, ListaDeCamion) {
        var _this = _super.call(this, ListaDeMoto, ListaDeCamion) || this;
        _this.nombre = nombre;
        if (ListaDeAuto != undefined) {
            _this.auto = ListaDeAuto;
        }
        else {
            _this.auto = [];
        }
        return _this;
    }
    RegistroAutomotor.prototype.getNombre = function () {
        return this.nombre;
    };
    RegistroAutomotor.prototype.agregarAuto = function (auto) {
        this.auto.push(auto);
    };
    RegistroAutomotor.prototype.obtenerAuto = function () {
        return this.auto;
    };
    RegistroAutomotor.prototype.quitarAuto = function (patente) {
        this.auto = this.auto.filter(function (auto) { return auto.getPatente() !== patente; });
    };
    return RegistroAutomotor;
}(soporte_1.Soporte));
exports.RegistroAutomotor = RegistroAutomotor;
