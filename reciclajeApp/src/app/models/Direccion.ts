import { Usuario } from './Usuario';
import { Provincia } from './Provincia';
import { Localidad } from './Localidad';

export class Direccion {
    nuDireccion: number;
    usuario: Usuario;
    provincia: Provincia;
    localidad: Localidad;
    domicilio: string;
    barrio: string;
}
