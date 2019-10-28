import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  loading: boolean;

  constructor(
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.formulario = new FormGroup({
      email: new FormControl('lucaspacheco@gmail.com', Validators.required),
      password: new FormControl('reciclaje', Validators.required)
    });
  }

  ngOnInit() {
    this.loading = false;
  }

  login(formulario) {
    if (this.formulario.invalid) {
      return;
    }
    this.loading = true;
    this.userService.login(formulario.value)
      .subscribe((idUsuario: number) => {
        this.loading = false;
        this.router.navigate(['/recycle']);
      },
        (err: any) => {
          this.loading = false;
          this.snackBar.open('Credenciales inválidas', 'Aceptar', { duration: 3000 });
        });
  }

}
