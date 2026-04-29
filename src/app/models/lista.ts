export class Lista {
    nombre: string; 
    descripcion: string;
    color: string; 
    visible: boolean;
    constructor(nombre: string = "", descripcion: string = "", color: string = "#FFFFFF", visible: boolean = true) {
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.color=color;
        this.visible=visible;
    }
}