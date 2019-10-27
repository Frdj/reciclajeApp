import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MescelaneasService } from './mescelaneas.service';
import { Usuario } from '../models/Usuario';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private miscelaneas: MescelaneasService) { }

  login(usuario: Usuario) {
    const credenciales = {
      email: usuario.email,
      password: usuario.password
    };
    return this.http.post(`${this.miscelaneas.getURL()}/api/login`, credenciales)
      .pipe(map((id: number) => {
        localStorage.setItem('idUsuario', id.toString());
        return id;
      }));
  }

  signup(usuario: Usuario) {
    return this.http.post(`${this.miscelaneas.getURL()}/api/signup`, usuario).pipe(map(id => id));
  }

  logout() {
    localStorage.removeItem('idUsuario');
  }

  estaLogueado(): boolean {
    return localStorage.getItem('idUsuario') ? true : false;
  }

  getPerfil(id: number) {
    return this.http.get(`${this.miscelaneas.getURL()}/api/perfil/${id}`).pipe(map(res => res));
  }
}
