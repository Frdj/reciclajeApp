import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../models/Usuario';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(usuario: Usuario, ...args: any[]): any {
    if (usuario.fotoDePerfil) {
      return `data:image/jpg;base64, ${usuario.fotoDePerfil}`;
    } else {
      return 'https://u.o0bc.com/avatars/stock/_no-user-image.gif';
    }
  }

}
