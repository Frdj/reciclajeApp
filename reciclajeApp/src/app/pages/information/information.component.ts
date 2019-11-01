import { Component, OnInit, Inject } from '@angular/core';
import { InformationService } from '../../services/information.service';
import { MescelaneasService } from '../../services/mescelaneas.service';
import { MatDialog } from '@angular/material/dialog';
import { MaterialDetailComponent } from './material-detail/material-detail.component';
import { Material } from 'src/app/models/Material';
import { Button } from 'protractor';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  loading = true;
  informacion: Material[];
  aux = [];

  constructor(
    private information: InformationService,
    private misce: MescelaneasService,
    private dialog: MatDialog
  ) {
    this.information.getMateriales().subscribe((res: Material[]) => {
      console.log(res);
      this.informacion = res;
      this.aux = res;
      this.loading = false;
    }, error => this.loading = !this.loading);
  }

  ngOnInit() {
  }

  openModal(material: Material): void {
    const dialogRef = this.dialog.open(MaterialDetailComponent, {
      width: '350px',
      data: material
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }


  buscar(valor: string) {
    if (valor.length === 0) {
      this.aux = this.informacion;
    } else {
      this.aux = this.informacion.filter((material: Material) => {
        return material.residuo.toLowerCase().includes(valor.toLowerCase());
      });
    }
  }

  filtrar(event) {
    console.log(event.target.textContent);
  }
}
