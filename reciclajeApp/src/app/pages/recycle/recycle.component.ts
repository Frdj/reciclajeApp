import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-recycle',
  templateUrl: './recycle.component.html',
  styleUrls: ['./recycle.component.scss']
})
export class RecycleComponent implements OnInit {
  tips = ['Recordá que lo que separes tiene que estar limpio y seco a la hora de reciclarlo. warning',
    'Hay otras formas de ayudar al planeta, como por ejemplo, cerrando la canilla cuando te lavás los dientes. smile'];
    tip: string;
  constructor(private router: Router, private _informacion: InformationService) { 
    this.tip = this.getTip();
   //this._informacion.getTip().subscribe(tip =>  this.tip = tip as string);
   this.startIntervalo();
  }

  ngOnInit() {
  }

  startIntervalo(){
    setInterval(() => 
    this.getTip() //delete this line when API is ready  
    //{this._informacion.getTip().subscribe(tip => this.tip = tip as string), console.log('renueva tip')}
    ,15000);
  }
  redirigir(page: string){
    this.router.navigate([page])
    }
    getTip(){
      let max = 2;
      let min = 0;
      let random = Math.floor(Math.random() * (+max - +min) + +min); 
      return this.tips[random];
    }

}
