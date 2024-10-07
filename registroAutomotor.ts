import { Moto } from "./moto";
import { Auto } from "./auto";
import { Camion } from "./camion";
import { Soporte } from "./soporte";

export class RegistroAutomotor extends Soporte{
    private nombre: string;
    private auto : Auto[];
   

    constructor(nombre: string, ListaDeAuto?: Auto[],ListaDeMoto?: Moto[], ListaDeCamion?: Camion[]){
        super(ListaDeMoto, ListaDeCamion)
        this.nombre = nombre;
        if(ListaDeAuto != undefined){
            this.auto = ListaDeAuto;
        }else{
            this.auto = [];
        }

    }

    getNombre(): string{
        return this.nombre;
    }

    agregarAuto(auto: Auto):void{
        this.auto.push(auto);
    }
   
    obtenerAuto(): Auto[]{
        return this.auto;
    }

    quitarAuto(patente:string):void{
        this.auto = this.auto.filter(auto => auto.getPatente() !== patente);
    }
}