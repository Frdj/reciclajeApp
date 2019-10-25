import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../services/information.service';
import { MescelaneasService } from '../../services/mescelaneas.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  loading = true;
  informacion = [

  ]
  aux = []
  constructor(private _information: InformationService, private misce: MescelaneasService) {
    this._information.getMateriales('*').subscribe((res: any[]) => {
      console.log(res);
      this.loading = false;
    }, error => this.loading = !this.loading);
  }

  ngOnInit() {
  }

  filtrar(valor: string) {
    console.log(valor)
    if (valor === '') {
      this.aux = this.informacion.slice();
    } else {
      this.aux = this.aux.filter(tip => tip.material.toLocaleLowerCase().includes(valor.toLocaleLowerCase()));
    }
  }
}
