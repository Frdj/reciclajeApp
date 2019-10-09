import { Injectable } from '@angular/core';
<<<<<<< HEAD
=======
import { HttpClient } from '@angular/common/http';
import { MescelaneasService } from './mescelaneas.service';
import { map } from 'rxjs/operators';
>>>>>>> 4dee2bf06459a6d2787d4077238671274d23bd65

@Injectable({
  providedIn: 'root'
})
export class InformationService {

<<<<<<< HEAD
  constructor() { }
}
=======
  constructor(private http: HttpClient, private miscelaneas: MescelaneasService) {

   }

   getTip(){
     return this.http.get(`${this.miscelaneas.getURL()}/api/informacion/gettip`).pipe(map(res=>res))
   }
  }

>>>>>>> 4dee2bf06459a6d2787d4077238671274d23bd65
