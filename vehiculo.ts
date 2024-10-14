export class Vehiculo{
    protected id: number;
    protected marca: string;
    protected patente:string;
    protected anioLanzamiento:number;
    protected color: string;

    constructor(id:number,marca:string,patente:string,anioLanzamiento:number,color:string){
        this.id = id;
        this.marca = marca;
        this.patente = patente;
        this.anioLanzamiento = anioLanzamiento;
        this.color = color;
    }

    getId():number{
        return this.id
    }

    setId(id:number):void{
        this.id= id
    }

    getMarca():string{
        return this.marca
    }

    setMarca(marca:string):void{
        this.marca= marca
    }

    getPatente():string{
        return this.patente
    }

    setPatente(patente:string):void{
        this.patente= patente
    }

    getAnioLanzamiento():number{
        return this.anioLanzamiento
    }

    setAnioLanzamiento(anioLanzamiento:number):void{
        this.anioLanzamiento= anioLanzamiento
    }

    getColor():string{
        return this.color
    }

    setColor(color:string):void{
        this.color=color
    }
}