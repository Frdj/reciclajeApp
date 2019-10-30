import { Usuario } from './Usuario';

export class Direccion {
    nuDireccion: number;
    usuario: Usuario;
    provincia: Provincia;
    localidad: Localidad;
    domicilio: string;
    barrio: string;
}
