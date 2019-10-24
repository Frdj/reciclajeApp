import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private userService: UserService
  ) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
  }

  login() {
    if (!this.usuario.email || !this.usuario.password) {
      return;
    }
    console.log(this.usuario);
    this.userService.login(this.usuario).subscribe((idUsuario: number) => {
      console.log(idUsuario);
    });
  }

}
