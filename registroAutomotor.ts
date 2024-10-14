import { Moto } from "./moto";
import { Auto } from "./auto";
import { Camion } from "./camion";


export class RegistroAutomotor{
    private nombre: string;
    private auto : Auto[];
    private moto : Moto[];
    private camion : Camion[];
   

    constructor(nombre: string,ListaDeAuto?: Auto[],ListaDeMoto?: Moto[], ListaDeCamion?: Camion[]){
        
        this.nombre = nombre;
        if(ListaDeAuto != undefined){
            this.auto = ListaDeAuto;
        }else{
            this.auto = [];
        }
        if(ListaDeMoto != undefined){
            this.moto = ListaDeMoto;
        }else{
            this.moto = [];
        }

        if(ListaDeCamion != undefined){
            this.camion = ListaDeCamion;
        }else{
            this.camion = [];
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

    agregarMoto(moto:Moto):void{
        this.moto.push(moto);
    }
    agregarCamion(camion: Camion):void{
        this.camion.push(camion);
    }

    obtenerMoto(): Moto[]{
        return this.moto;
    }
    obtenerCamion(): Camion[]{
        return this.camion;
    }

    quitarMoto(patente:string):void{
        this.moto = this.moto.filter(moto => moto.getPatente() !== patente);
    }

    quitarCamion(patente:string):void{
        this.camion = this.camion.filter(camion => camion.getPatente() !== patente);
    }
    
    modificarColorMoto(patente: string, nuevoColor: string): void {
        let moto: Moto = this.moto.find(moto => moto.getPatente() === patente);
        if (moto) {
            moto.setColor(nuevoColor);
        } else {
            console.log("Moto no encontrada");
        }
    }

    modificarColorCamion(patente: string, nuevoColor: string): void {
        let camion: Camion = this.camion.find(camion => camion.getPatente() === patente);
        if (camion) {
            camion.setColor(nuevoColor);
        } else {
            console.log("Camion no encontrado");
        }
    }
}