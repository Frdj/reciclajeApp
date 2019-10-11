import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InformationService } from '../../services/information.service';
import { MescelaneasService } from '../../services/mescelaneas.service';

@Component({
  selector: 'app-recycle',
  templateUrl: './recycle.component.html',
  styleUrls: ['./recycle.component.scss']
})
export class RecycleComponent implements OnInit {
  tips = ['Recordá que lo que separes tiene que estar limpio y seco a la hora de reciclarlo. warning',
    'Hay otras formas de ayudar al planeta, como por ejemplo, cerrando la canilla cuando te lavás los dientes. smile'];
    tip: string;
  constructor(private router: Router,private misce: MescelaneasService, private _informacion: InformationService) { 
    this.getTip();
    //this._informacion.getTip().subscribe(tip =>  this.tip = tip as string);
    this.startIntervalo();
  }

  ngOnInit() { }

  startIntervalo() {
    setInterval(() =>
      this.getTip() //delete this line when API is ready  
      //{this._informacion.getTip().subscribe(tip => this.tip = tip as string), console.log('renueva tip')}
      , 15000);
  }
    redirigir(page: string){
    this.misce.redireccionar(page);
      }
    getTip(){
    this._informacion.getTip().subscribe((tip: string) => this.tip = tip)
    }

}
