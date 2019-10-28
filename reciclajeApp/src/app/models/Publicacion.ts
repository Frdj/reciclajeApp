import { Usuario } from './Usuario';
import { TipoResiduo } from './TipoResiduo';
import { Material } from './Material';
import { Direccion } from './Direccion';
import { Estado } from './Estado';

export class Publicacion {
    idPublicacion: number;
    usuarioP: Usuario;
    direccion: Direccion;
    tipoResiduo: TipoResiduo;
    categoriaResiduo: Material;
    cantidad: number;
    medida: string;
    fechaPublicacion: Date;
    estado: Estado;
    diasDisponibles: string;
    horarioDisponible: string;
    usuarioR: Usuario;
    fechaRetiro: Date;
}
