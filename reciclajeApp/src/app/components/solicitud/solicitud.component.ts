import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent implements OnInit {
@Input('solicitud') solicitud: Solicitud;
  constructor() { }

  ngOnInit() {
  }

}

class Solicitud{
  nombre: string;
  direccion: string;
  localidad: string;
  materiales: [{
    tipo: string;
    cantidad: number;
  }
]
constructor(){

}
}
