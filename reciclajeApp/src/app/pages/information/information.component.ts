import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InformationService } from '../../services/information.service';
import { MaterialDetailComponent } from './material-detail/material-detail.component';
import { Material } from 'src/app/models/Material';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  @Input() publicar = false;

  loading = true;
  informacion: Material[];
  aux = [];

  constructor(
    private information: InformationService,
    private dialog: MatDialog
  ) {
    this.information.getMateriales().subscribe((res: Material[]) => {
      console.log(res);
      this.informacion = res;
      this.aux = res;
      if (this.publicar) {
        this.aux = res.filter(material => material.esReciclable);
      }
      this.loading = false;
    }, error => this.loading = !this.loading);
  }

  ngOnInit() {
    console.log(this.publicar);
  }

  openModal(material: Material): void {
    if (!this.publicar) {
      this.dialog.open(MaterialDetailComponent, {
        width: '350px',
        data: material
      });
    } else {

    }
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

  cambiarCantidad(cantidad: number, material: Material) {
    if (!material.cantidad) {
      material.cantidad = 0;
    }
    if (material.cantidad < 0 && cantidad < 0) {
      material.cantidad = 0;
      return;
    }
    material.cantidad += cantidad;
  }
}
