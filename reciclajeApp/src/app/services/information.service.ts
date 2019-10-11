import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { MescelaneasService } from './mescelaneas.service';
import { map } from 'rxjs/operators';
import { Tip } from '../models/Tip';


@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private http: HttpClient, private miscelaneas: MescelaneasService) {

   }

   getTip(){
     return this.http.get(`${this.miscelaneas.getURL()}/api/tips/gettiprandom`).pipe(map((res: Tip)=>res.descripcion))
   }

   getMateriales(){
     return this.http.get(`${this.miscelaneas.getURL()}/api/informacion/getMateriales`).pipe(map((res: string[])=>res))
    }
  }

