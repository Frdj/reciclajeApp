import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MescelaneasService {

  private URL = 'localhost';

  constructor() { }

  getURL(){
    return this.URL;
  }
}
