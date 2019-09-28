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
},{
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
},{
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
},{
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
},]
  constructor() { }

  ngOnInit() {
  }

}
