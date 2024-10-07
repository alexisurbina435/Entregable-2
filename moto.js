"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Moto = /** @class */ (function () {
    function Moto(id, marca, patente, anioLanzamiento, color) {
        this.id = id;
        this.marca = marca;
        this.patente = patente;
        this.anioLanzamiento = anioLanzamiento;
        this.color = color;
    }
    Moto.prototype.getId = function () {
        return this.id;
    };
    Moto.prototype.setId = function (id) {
        this.id = id;
    };
    Moto.prototype.getMarca = function () {
        return this.marca;
    };
    Moto.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Moto.prototype.getPatente = function () {
        return this.patente;
    };
    Moto.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    Moto.prototype.getAnioLanzamiento = function () {
        return this.anioLanzamiento;
    };
    Moto.prototype.setAnioLanzamiento = function (anioLanzamiento) {
        this.anioLanzamiento = anioLanzamiento;
    };
    Moto.prototype.getColor = function () {
        return this.color;
    };
    Moto.prototype.setColor = function (color) {
        this.color = color;
    };
    return Moto;
}());
exports.Moto = Moto;
