import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MescelaneasService {

  private URL = 'https://localhost:5001';
  showNewPub = true;
  constructor(private router: Router) { }

  getURL() {
    return this.URL;
  }

  errorAlert(error: any) {
    alert('Hubo un error en la conexión, no se pudieron cargar los datos');
  }
  redireccionar(path: string) {
    this.router.navigate([path]);
    if (path === 'ofrecer') {
      console.log('no mostrar')
      this.showNewPub = false;
    } else {
      this.showNewPub = true;
    }
  }

}
