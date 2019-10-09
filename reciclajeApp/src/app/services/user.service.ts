import { Injectable } from '@angular/core';
<<<<<<< HEAD
=======
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MescelaneasService } from './mescelaneas.service';

>>>>>>> 4dee2bf06459a6d2787d4077238671274d23bd65

@Injectable({
  providedIn: 'root'
})
export class UserService {
<<<<<<< HEAD

  constructor() { }
=======
  constructor(private http: HttpClient, private miscelaneas: MescelaneasService) {

  }

  getUserDate(id: string) {
    let body = JSON.stringify(id);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = {
      headers: headers,
      body: body,
    };
    return this.http.get(`${this.miscelaneas.getURL()}/api/perfil/getperfil`).pipe(map(res => res));
  }
>>>>>>> 4dee2bf06459a6d2787d4077238671274d23bd65
}
