"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(id, marca, patente, anioLanzamiento, color) {
        this.id = id;
        this.marca = marca;
        this.patente = patente;
        this.anioLanzamiento = anioLanzamiento;
        this.color = color;
    }
    Auto.prototype.getId = function () {
        return this.id;
    };
    Auto.prototype.setId = function (id) {
        this.id = id;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    Auto.prototype.getAnioLanzamiento = function () {
        return this.anioLanzamiento;
    };
    Auto.prototype.setAnioLanzamiento = function (anioLanzamiento) {
        this.anioLanzamiento = anioLanzamiento;
    };
    Auto.prototype.getColor = function () {
        return this.color;
    };
    Auto.prototype.setColor = function (color) {
        this.color = color;
    };
    return Auto;
}());
exports.Auto = Auto;
