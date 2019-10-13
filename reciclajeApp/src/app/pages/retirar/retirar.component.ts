import { Component, OnInit } from '@angular/core';
import { logging } from 'protractor';

@Component({
  selector: 'app-retirar',
  templateUrl: './retirar.component.html',
  styleUrls: ['./retirar.component.scss']
})
export class RetirarComponent implements OnInit {
loading = true;
  aux = [];

  listaRetirar = [{
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
    this.listaRetirar = this.listaRetirar.sort((a, b) => (a.localidad > b.localidad) ? 1 : -1);
    this.aux = this.listaRetirar;
    this.loading = false;
  }


  ngOnInit() {
  }

  filtrar(event) {
    this.loading = true;
    console.log(event.source._checked);
    const checked: boolean = event.source._checked;
    /*
    mat-checkbox-1 -> cartón
    mat-checkbox-2 -> papel
    mat-checkbox-3 -> vidrio
    mat-checkbox-4 -> plástico
    */
    if (checked) {
      switch (event.source.id) {
        case 'mat-checkbox-1':
          this.filtrarPorMaterial(0);
          break;
        case 'mat-checkbox-2':
          this.filtrarPorMaterial(1);
          break;
        case 'mat-checkbox-3':
          this.filtrarPorMaterial(2);
          break;
        case 'mat-checkbox-4':
          this.filtrarPorMaterial(3);
          break;
        default:
          break;
      }
    } else {
      switch (event.source.id) {
        case 'mat-checkbox-1':
          this.agregarPorMaterial(0);
          break;
        case 'mat-checkbox-2':
          this.agregarPorMaterial(1);
          break;
        case 'mat-checkbox-3':
          this.agregarPorMaterial(2);
          break;
        case 'mat-checkbox-4':
          this.agregarPorMaterial(3);
          break;
        default:
          break;
      }
    }
    this.loading = false
  }

  filtrarPorMaterial(material: number) {
    this.aux = this.listaRetirar.filter((publicacion: any) => {
      if (publicacion.materiales[material].cantidad > 0) {
        return publicacion;
      }
    })
  }

  agregarPorMaterial(material: number) {
    this.aux = this.listaRetirar.filter((publicacion: any) => {
      if (publicacion.materiales[material].cantidad >= 0) {
        return publicacion;
      }
    })
  }

}
