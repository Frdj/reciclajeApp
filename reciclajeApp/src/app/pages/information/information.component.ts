import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InformationService } from '../../services/information.service';
import { MaterialDetailComponent } from './material-detail/material-detail.component';
import { Material } from 'src/app/models/Material';
import { Publicacion } from 'src/app/models/Publicacion';
import { PublicationService } from 'src/app/services/publication.service';
import { MescelaneasService } from 'src/app/services/mescelaneas.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  @Input() publicar = false;

  loading = true;
  habilitarContinuar = false;
  informacion: Material[];
  residuos: Material[]; // array de los residuos que se van a publicar
  aux = [];
  publicacion: Publicacion = new Publicacion(); // esta va ser la publicación que se va enviar a la siguiente pantalla

  constructor(
    private information: InformationService,
    private dialog: MatDialog,
    private publicacionService: PublicationService,
    private misce: MescelaneasService
  ) {
    this.information.getMateriales().subscribe((res: Material[]) => {
      console.log(res);
      this.informacion = res;
      this.aux = res;
      if (this.publicar) {
        this.aux = res.filter(material => material.esReciclable);
        this.publicacion.residuos = [];
      }
      this.loading = false;
    }, error => this.loading = !this.loading);
  }

  ngOnInit() {
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
    if (material.cantidad > 0) {
      this.habilitarContinuar = true;
      // Se construye la clase Publicación con algunas propiedades, el resto de las propiedades
      // se van a agregar en la pantalla data-publish
      this.publicacion.residuos.push(material);
      this.publicacion.usuarioP = parseInt(localStorage.getItem('idUsuario'), 10);
      this.publicacion.fechaPublicacion = new Date();
    }
  }

  continuar() {
    // se envía la publicación a data-publish
    this.publicacionService.announcePublicacion(this.publicacion);
    this.misce.redireccionar('dataPublish');
  }
}
