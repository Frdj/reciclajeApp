import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
//get y set usuario logueado, no relaciona con la bd.

private email = 'pepe@gmail.com';
  constructor() { }

  getUsuario(){
    
    return JSON.parse(localStorage.getItem('user'));
  }
  setUsuario(user: Usuario){
    localStorage.setItem('usuario', JSON.stringify(user));
  }

  getUserEmail(){
    return this.email;
  }

  setEmail(email: string){
    this.email = email;
  }

}
