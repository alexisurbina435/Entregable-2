"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auto_1 = require("./auto");
var moto_1 = require("./moto");
var camion_1 = require("./camion");
var registroAutomotor_1 = require("./registroAutomotor");
//AUTOS
var Auto1 = new auto_1.Auto(1111, "peugeot", 'XDE234', 2002, 'azul');
var Auto2 = new auto_1.Auto(1122, "ford", 'SDS412', 2005, 'rojo');
var Auto3 = new auto_1.Auto(1133, "chevrolet", 'ASD612', 2010, 'verde');
//MOTOS
var Moto1 = new moto_1.Moto(1144, "hyundai", 'XWE093', 2020, 'blanco');
var Moto2 = new moto_1.Moto(1155, "honda", 'DAS312', 2015, 'negro');
var Moto3 = new moto_1.Moto(1166, "kawasaki", 'FGH512', 2010, 'azul');
//CAMIONES
var Camion1 = new camion_1.Camion(2244, "IVECO", 'EQS239', 2000, 'negro');
var Camion2 = new camion_1.Camion(2214, "MERCEDES BENZ", 'FAS524', 2018, 'blanco');
var Camion3 = new camion_1.Camion(5512, "FIAT", 'GAS525', 2006, 'rojo');
var Registro = new registroAutomotor_1.RegistroAutomotor('Automotor Olavarria');
//AGREGANDO AUTO AL REGISTRO
Registro.agregarAuto(Auto1);
Registro.agregarAuto(Auto2);
Registro.agregarAuto(Auto3);
//AGREANDO MOTOS AL REGISTRO
Registro.agregarMoto(Moto1);
Registro.agregarMoto(Moto2);
Registro.agregarMoto(Moto3);
//AGREGANDO CAMIONES AL REGISTRO
Registro.agregarCamion(Camion1);
Registro.agregarCamion(Camion2);
Registro.agregarCamion(Camion3);
console.log("Autos en el registro:", Registro.obtenerAuto());
console.log("Motos en el registro:", Registro.obtenerMoto());
console.log("Camiones en el registro:", Registro.obtenerCamion());
Registro.quitarAuto('SDS41');
Registro.quitarMoto('DAS312');
Registro.quitarCamion('GAS525');
console.log("Autos en el registro:", Registro.obtenerAuto());
console.log("Motos en el registro:", Registro.obtenerMoto());
console.log("Camiones en el registro:", Registro.obtenerCamion());
Registro.modificarColorMoto('DAS312', 'rojo');
Registro.modificarColorCamion('GAS525', 'negro');
