export class Lista {
    identificador: number;
    nombre: string; 
    descripcion: string;
    color: string; 
    visible: boolean;
    fechaCreacion: Date;
    constructor(nombre: string = "", descripcion: string = "", color: string = "#FFFFFF", visible: boolean = true) {
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.color=color;
        this.visible=visible;
        this.fechaCreacion = new Date();
        this.identificador = Math.floor(Math.random() * 1000000); // Genera un identificador único aleatorio
    }
}