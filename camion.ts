import { Vehiculo } from "./vehiculo"
export class Camion extends Vehiculo{
    constructor(id:number,marca:string,patente:string,anioLanzamiento:number,color:string){
        super(id,marca,patente,anioLanzamiento,color)
    }
}