import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MescelaneasService } from './mescelaneas.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private http: HttpClient, private miscelaneas: MescelaneasService) {

   }

   getTip(){
     return this.http.get(`${this.miscelaneas.getURL()}/api/informacion/gettip`).pipe(map(res=>res))
   }
  }

