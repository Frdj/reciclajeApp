import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MescelaneasService } from './mescelaneas.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private miscelaneas: MescelaneasService) {

  }

  getPerfil(email: string) {
    return this.http.get(`${this.miscelaneas.getURL()}/api/perfil/getperfil/${email}`).pipe(map(res => res));
  }
}
