export class Pelicula {
    
    id?:number;
    nombre?:string;
    tipo?:string;
    fechaEstreno?:string;
    cantidadDePublico?:number;
    fotoDeLaPeli?:string;

    constructor(id:number, nombre:string, tipo:string, fechaEstreno:string, cantidadPublico:number, fotoPeli:string){
        this.id=id;
        this.nombre=nombre;
        this.tipo=tipo;
        this.fechaEstreno=fechaEstreno;
        this.cantidadDePublico=cantidadPublico;
        this.fotoDeLaPeli=fotoPeli;
    }


}
