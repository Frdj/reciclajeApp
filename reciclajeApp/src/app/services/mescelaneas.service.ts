import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MescelaneasService {

  private URL = 'http://localhost:8080';

  constructor() { }

  getURL() {
    return this.URL;
  }
}
