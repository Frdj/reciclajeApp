import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

informacion = [

]
aux = []
  constructor(private _information: InformationService) {
    this._information.getMateriales('*').subscribe((res: any[]) =>{console.log(res); this.informacion = res;     this.aux = this.informacion.slice();
    })
   }

  ngOnInit() {
  }

  filtrar(valor: string){
  console.log(valor)
  if(valor === ''){
    this.aux = this.informacion.slice();
  }else{
    this.aux = this.aux.filter(tip => tip.material.toLocaleLowerCase().includes(valor.toLocaleLowerCase()));
  }
  }
}
