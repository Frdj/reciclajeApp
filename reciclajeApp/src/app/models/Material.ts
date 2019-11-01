    export class Material{
    detalle: string;
    esReciclable: boolean;
    imagen: string;
    material: string;
    residuo: string;
    tipo: string;
    cantidad: number;
    constructor(tipo: string, cantidad: number){
        this.tipo = tipo;
        this.cantidad = cantidad;
    }
}
