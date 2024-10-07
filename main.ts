import { Auto } from "./auto"
import { Moto } from "./moto"
import { Camion } from "./camion"
import { RegistroAutomotor } from "./registroAutomotor"

//AUTOS
const Auto1 = new Auto(1111,"peugeot",'XDE234', 2002,'azul');
const Auto2 = new Auto(1122,"ford",'SDS412', 2005,'rojo');
const Auto3 = new Auto(1133,"chevrolet",'ASD612', 2010,'verde');
//MOTOS
const Moto1 = new Moto(1144,"hyundai",'XWE093', 2020,'blanco');
const Moto2 = new Moto(1155,"honda",'DAS312', 2015,'negro');
const Moto3 = new Moto(1166,"kawasaki",'FGH512', 2010,'azul');
//CAMIONES
const Camion1 = new Camion(2244,"IVECO",'EQS239', 2000,'negro');
const Camion2 = new Camion(2214,"MERCEDES BENZ",'FAS524', 2018,'blanco');
const Camion3 = new Camion(5512,"FIAT",'GAS525', 2006,'rojo');

const Registro = new RegistroAutomotor('Automotor Olavarria');

//AGREGANDO AUTO AL REGISTRO
Registro.agregarAuto(Auto1)
Registro.agregarAuto(Auto2)
Registro.agregarAuto(Auto3)
//AGREANDO MOTOS AL REGISTRO
Registro.agregarMoto(Moto1)
Registro.agregarMoto(Moto2)
Registro.agregarMoto(Moto3)
//AGREGANDO CAMIONES AL REGISTRO
Registro.agregarCamion(Camion1)
Registro.agregarCamion(Camion2)
Registro.agregarCamion(Camion3)

console.log("Autos en el registro:", Registro.obtenerAuto());
console.log("Motos en el registro:", Registro.obtenerMoto());
console.log("Camiones en el registro:", Registro.obtenerCamion());

Registro.quitarAuto('SDS41');
Registro.quitarMoto('DAS312');
Registro.quitarCamion('GAS525');

console.log("Autos en el registro:", Registro.obtenerAuto());
console.log("Motos en el registro:", Registro.obtenerMoto());
console.log("Camiones en el registro:", Registro.obtenerCamion());

Registro.modificarColorMoto('DAS312','rojo')
Registro.modificarColorCamion('GAS525','negro')




