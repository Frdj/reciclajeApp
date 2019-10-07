import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
URL = 'localhost/4054';
  constructor(private http: HttpClient) {
  
   }

   getUserDate(id: string){
     let body = JSON.stringify(id);
     let headers = new Headers({ 'Content-Type': 'application/json'});
     var requestOptions ={
      headers: headers,
      body: body,
  };
     return this.http.get(`${this.URL}/api/perfil/getperfil`,).pipe(map(res => res));
   }
}
