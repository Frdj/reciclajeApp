import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retirar',
  templateUrl: './retirar.component.html',
  styleUrls: ['./retirar.component.scss']
})
export class RetirarComponent implements OnInit {

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
  }


  ngOnInit() {
  }

  filtrar(event) {
    console.log(event.source._checked);
    /*
    mat-checkbox-1 -> cartón
    mat-checkbox-2 -> papel
    mat-checkbox-3 -> vidrio
    mat-checkbox-4 -> plástico
    */
    if (event.source._checked) {
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
    }
  }

  filtrarPorMaterial(material: number) {
    this.listaRetirar = this.listaRetirar.filter((publicacion: any) => {
      if (publicacion.materiales[material].cantidad > 0) {
        return publicacion;
      }
    })
  }

}
