import { Material } from './Material';
import { Estado } from './Estado';

export class Publicacion {
    idPublicacion: number;
    idUsuarioP: number; // id del usuario que publica
    NuDireccion: number; // va un id de direccion, las direcciones ya van a estar cargadas previamente en la bd Direccion;
    residuos: Material[];
    medida: string;
    idDetalle: number; // modos de entrega (caminando, en auto, etc)
    fechaPublicacion: Date;
    estado: Estado;
    DiasDisponibles: string;// number[];
    horarioDisponible: string;
    usuarioR: number; // id del usuario que recibe
    fechaRetiro: Date;
}
