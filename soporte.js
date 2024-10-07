"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Soporte = void 0;
var Soporte = /** @class */ (function () {
    function Soporte(ListaDeMoto, ListaDeCamion) {
        if (ListaDeMoto != undefined) {
            this.moto = ListaDeMoto;
        }
        else {
            this.moto = [];
        }
        if (ListaDeCamion != undefined) {
            this.camion = ListaDeCamion;
        }
        else {
            this.camion = [];
        }
    }
    Soporte.prototype.agregarMoto = function (moto) {
        this.moto.push(moto);
    };
    Soporte.prototype.agregarCamion = function (camion) {
        this.camion.push(camion);
    };
    Soporte.prototype.obtenerMoto = function () {
        return this.moto;
    };
    Soporte.prototype.obtenerCamion = function () {
        return this.camion;
    };
    Soporte.prototype.quitarMoto = function (patente) {
        this.moto = this.moto.filter(function (moto) { return moto.getPatente() !== patente; });
    };
    Soporte.prototype.quitarCamion = function (patente) {
        this.camion = this.camion.filter(function (camion) { return camion.getPatente() !== patente; });
    };
    Soporte.prototype.modificarColorMoto = function (patente, nuevoColor) {
        var moto = this.moto.find(function (moto) { return moto.getPatente() === patente; });
        if (moto) {
            moto.setColor(nuevoColor);
        }
        else {
            console.log("Moto no encontrada");
        }
    };
    Soporte.prototype.modificarColorCamion = function (patente, nuevoColor) {
        var camion = this.camion.find(function (camion) { return camion.getPatente() === patente; });
        if (camion) {
            camion.setColor(nuevoColor);
        }
        else {
            console.log("Camion no encontrado");
        }
    };
    return Soporte;
}());
exports.Soporte = Soporte;
