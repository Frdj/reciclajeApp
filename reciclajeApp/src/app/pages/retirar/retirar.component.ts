import { Component, OnInit } from '@angular/core';
import { logging } from 'protractor';

@Component({
  selector: 'app-retirar',
  templateUrl: './retirar.component.html',
  styleUrls: ['./retirar.component.scss']
})
export class RetirarComponent implements OnInit {
  loading = true;
  indexConfirm = -1;
  modal: HTMLDialogElement;
  aux = [];
  cartonChecked = false;
  vidrioChecked = false;
  plasticoChecked = false;
  papelChecked = false;

  publicaciones = [{
    id: 9,
    nombre: 'Rodrigo Bueno',
    direccion: 'Lima 1003',
    localidad: 'Ciudad Autonoma de Buenos aires',
    materiales: [{
      tipo: 'Cartón',
      cantidad: 0,
    },
    {
      tipo: 'Vidrio',
      cantidad: 3,
    },
    {
      tipo: 'Plastico',
      cantidad: 2,
    },
    {
      tipo: 'Papel',
      cantidad: 0,
    },
    ]
  }, {
    id: 10,
    nombre: 'Rodrigo Bueno',
    direccion: 'Lima 1003',
    localidad: 'CABA',
    materiales: [{
      tipo: 'Cartón',
      cantidad: 0,
    },
    {
      tipo: 'Vidrio',
      cantidad: 3,
    },
    {
      tipo: 'Plastico',
      cantidad: 2,
    },
    {
      tipo: 'Papel',
      cantidad: 1,
    },
    ]
  }, {
    id: 8,
    nombre: 'Rodrigo Bueno',
    direccion: 'Lima 1003',
    localidad: 'CABA',
    materiales: [{
      tipo: 'Cartón',
      cantidad: 1,
    },
    {
      tipo: 'Vidrio',
      cantidad: 3,
    },
    {
      tipo: 'Plastico',
      cantidad: 2,
    },
    {
      tipo: 'Papel',
      cantidad: 1,
    },
    ]
  }, {
    id: 7,
    nombre: 'Rodrigo Bueno',
    direccion: 'Lima 1003',
    localidad: 'CABA',
    materiales: [{
      tipo: 'Cartón',
      cantidad: 1,
    },
    {
      tipo: 'Vidrio',
      cantidad: 3,
    },
    {
      tipo: 'Plastico',
      cantidad: 2,
    },
    {
      tipo: 'Papel',
      cantidad: 1,
    },
    ]
  }, {
    id: 6,
    nombre: 'Rodrigo Bueno',
    direccion: 'Lima 1003',
    localidad: 'CABA',
    materiales: [{
      tipo: 'Cartón',
      cantidad: 1,
    },
    {
      tipo: 'Vidrio',
      cantidad: 3,
    },
    {
      tipo: 'Plastico',
      cantidad: 2,
    },
    {
      tipo: 'Papel',
      cantidad: 1,
    },
    ]
  }, {
    id: 5,
    nombre: 'Rodrigo Bueno',
    direccion: 'Lima 1003',
    localidad: 'CABA',
    materiales: [{
      tipo: 'Cartón',
      cantidad: 0,
    },
    {
      tipo: 'Vidrio',
      cantidad: 3,
    },
    {
      tipo: 'Plastico',
      cantidad: 2,
    },
    {
      tipo: 'Papel',
      cantidad: 1,
    },
    ]
  }, {
    id: 4,
    nombre: 'Rodrigo Bueno',
    direccion: 'Lima 1003',
    localidad: 'CABA',
    materiales: [{
      tipo: 'Cartón',
      cantidad: 0,
    },
    {
      tipo: 'Vidrio',
      cantidad: 3,
    },
    {
      tipo: 'Plastico',
      cantidad: 2,
    },
    {
      tipo: 'Papel',
      cantidad: 1,
    },
    ]
  }, {
    id: 3,
    nombre: 'Rodrigo Bueno',
    direccion: 'Lima 1003',
    localidad: 'CABA',
    materiales: [{
      tipo: 'Cartón',
      cantidad: 0,
    },
    {
      tipo: 'Vidrio',
      cantidad: 3,
    },
    {
      tipo: 'Plastico',
      cantidad: 2,
    },
    {
      tipo: 'Papel',
      cantidad: 0,
    },
    ]
  },]
  constructor() {
    //ordena x localidad.
    this.publicaciones = this.publicaciones.sort((a, b) => (a.localidad > b.localidad) ? 1 : -1);
    this.aux = this.publicaciones;
    this.loading = false;
  }


  ngOnInit() {
  }

  filtrar(event) {
    this.loading = true;
    switch (event.source.id) {
      case 'mat-checkbox-1':
        this.cartonChecked = !this.cartonChecked;
        break;
      case 'mat-checkbox-2':
        this.vidrioChecked = !this.vidrioChecked;
        break;
      case 'mat-checkbox-3':
        this.plasticoChecked = !this.plasticoChecked;
        break;
      case 'mat-checkbox-4':
        this.papelChecked = !this.papelChecked;
        break;
      default:
        break;
    }
    this.aux = this.publicaciones;
    if (this.cartonChecked) {
      this.filtrarPorMaterial(0);
    }
    if (this.vidrioChecked) {
      this.filtrarPorMaterial(1);
    }
    if (this.plasticoChecked) {
      this.filtrarPorMaterial(2);
    }
    if (this.papelChecked) {
      this.filtrarPorMaterial(3);
    }
    this.loading = false;
  }

  filtrarPorMaterial(material: number) {
    this.aux = this.aux.filter((publicacion: any) => {
      if (publicacion.materiales[material].cantidad > 0) {
        return publicacion;
      }
    });
  }

  openConfirm(index: number) {
    this.indexConfirm = index;
    let nombre = 'modal';
    this.modal = document.getElementById(nombre) as HTMLDialogElement;
    this.modal.showModal();
  }

  cerrar() {
    this.modal = document.getElementById('modal') as HTMLDialogElement;
    this.modal.close();
    this.indexConfirm = -1;
  }

  confirmar() {
    this.modal.close();
    this.publicaciones.splice(this.indexConfirm, 1);
    this.aux = this.publicaciones;
    this.indexConfirm = -1;

  }
}
