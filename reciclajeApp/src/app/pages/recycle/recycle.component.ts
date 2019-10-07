import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-recycle',
  templateUrl: './recycle.component.html',
  styleUrls: ['./recycle.component.scss']
})
export class RecycleComponent implements OnInit {
  tips = ['Recordá que lo que separes tiene que estar limpio y seco a la hora de reciclarlo. warning',
    'Hay otras formas de ayudar al planeta, como por ejemplo, cerrando la canilla cuando te lavás los dientes. smile'];
    tip: string;
  constructor(private router: Router) { 
    this.tip = this.getTip();
  }

  ngOnInit() {
  }

  redirigir(page: string){
    this.router.navigate([page])
    }
    getTip(){
      let max = 2;
      let min = 0;
      let random = Math.floor(Math.random() * (+max - +min) + +min); 
      console.log(random)
      return this.tips[random];
    }

}
