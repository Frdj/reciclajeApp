import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Usuario } from 'src/app/models/Usuario';
import { MescelaneasService } from '../../services/mescelaneas.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  loading = true;
  usuario: Usuario = new Usuario();

  constructor(private _user: UserService, private misce: MescelaneasService) {
    this._user.getPerfil('francoarmani@uade.com').subscribe((usuario: Usuario) => { this.usuario = usuario; console.log(this.usuario); this.loading = false; }
      , error => { misce.errorAlert(error), console.error('error'); this.loading = false; });
  }

  ngOnInit() {
  }

}
