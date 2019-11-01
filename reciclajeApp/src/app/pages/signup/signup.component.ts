import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  formulario: FormGroup;
  loading: boolean;

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      fechaNacimiento: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      fotoDePerfil: new FormControl(''),
      telefono: new FormControl(911),
    });
  }

  ngOnInit() {
    this.loading = false;
  }

  signup(formulario) {
    if (this.formulario.invalid) {
      return;
    }
    this.loading = true;
    this.userService.signup(formulario.value).subscribe(idUsuario => {
      this.loading = false;
      this.snackBar.open('Usuario creado con éxito', 'Aceptar', { duration: 5000 });
      this.router.navigate(['/login']);
    },
      err => {
        this.snackBar.open(`${err.message}`, 'Aceptar', { duration: 3500 });
      });
  }

}
