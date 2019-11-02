import { Usuario } from './Usuario';
import { TipoResiduo } from './TipoResiduo';
import { Material } from './Material';
import { Direccion } from './Direccion';
import { Estado } from './Estado';

export class Publicacion {
    idPublicacion: number;
    usuarioP: Usuario;
    direccion: number;// va un id de direccion, las direcciones ya van a estar cargadas previamente en la bd Direccion;
    tipoResiduo: TipoResiduo; // no va
    categoriaResiduo: Material;
    medida: string;
    idDetalle: number; // modos de entrega (caminando, en auto, etc)
    fechaPublicacion: Date;
    estado: Estado;
    diasDisponibles: number[];
    horarioDisponible: string;
    usuarioR: Usuario;
    fechaRetiro: Date;
}
