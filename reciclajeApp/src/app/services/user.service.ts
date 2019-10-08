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

   getUserDate(id: string){
     let body = JSON.stringify(id);
     let headers = new Headers({ 'Content-Type': 'application/json'});
     var requestOptions ={
      headers: headers,
      body: body,
  };
     return this.http.get(`${this.miscelaneas.getURL()}/api/perfil/getperfil`,).pipe(map(res => res));
   }
}
