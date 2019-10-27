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

  tip: string;
  showTip = false;

  constructor(private router: Router, private misce: MescelaneasService, private _informacion: InformationService) {
    this.getTip();
  }

  ngOnInit() {

  }

  redirigir(page: string) {
    this.misce.redireccionar(page);
  }

  getTip() {
    this._informacion.getTip().subscribe(
      (tip: string) => {
        this.tip = tip;
        this.showTip = true;
      },
      error => this.misce.errorAlert(error));
  }
}
