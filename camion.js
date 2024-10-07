"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
var Camion = /** @class */ (function () {
    function Camion(id, marca, patente, anioLanzamiento, color) {
        this.id = id;
        this.marca = marca;
        this.patente = patente;
        this.anioLanzamiento = anioLanzamiento;
        this.color = color;
    }
    Camion.prototype.getId = function () {
        return this.id;
    };
    Camion.prototype.setId = function (id) {
        this.id = id;
    };
    Camion.prototype.getMarca = function () {
        return this.marca;
    };
    Camion.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Camion.prototype.getPatente = function () {
        return this.patente;
    };
    Camion.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    Camion.prototype.getAnioLanzamiento = function () {
        return this.anioLanzamiento;
    };
    Camion.prototype.setAnioLanzamiento = function (anioLanzamiento) {
        this.anioLanzamiento = anioLanzamiento;
    };
    Camion.prototype.getColor = function () {
        return this.color;
    };
    Camion.prototype.setColor = function (color) {
        this.color = color;
    };
    return Camion;
}());
exports.Camion = Camion;
