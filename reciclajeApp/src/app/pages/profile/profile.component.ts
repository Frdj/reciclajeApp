import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;
  mailPrueba = 'amantedelacomida53@aol.com';

  constructor(private _user: UserService) {
    this._user.getUserDate(this.mailPrueba).subscribe(user => this.usuario = user[0]);
  }

  ngOnInit() {
  }

}
