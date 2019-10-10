import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MescelaneasService {

  private URL = 'http://localhost:8080';
  showNewPub = true;
  constructor(private router: Router) { }

  getURL() {
    return this.URL;
  }

  redireccionar(path:string){
    this.router.navigate([path]);
    console.log(path)
    if(path === 'ofrecer'){
      console.log('no mostrar')
      this.showNewPub = false;
    }else{
      this.showNewPub = true;
    }
  }

}
