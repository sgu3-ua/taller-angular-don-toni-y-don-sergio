export class Tarea {
    identificador: number;
    titulo: string;
    completada: boolean;
    fechaCreacion: Date;

    constructor(titulo: string = '', completada: boolean = false) {
        this.titulo = titulo;
        this.completada = completada;
        this.fechaCreacion = new Date();
        this.identificador = Math.floor(Math.random() * 1000000);
    }
}
