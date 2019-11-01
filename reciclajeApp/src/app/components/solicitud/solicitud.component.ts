import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent implements OnInit {
  @Input('solicitud') solicitud: Solicitud;
  @Input('index') i: number;
  @Output() publicacion: EventEmitter<any> = new EventEmitter<any>();
  tomado = false;
  constructor() {
  }

  ngOnInit() {
  }

  abrirConfirmacion() {
    this.publicacion.emit(this.solicitud);
  }
}

class Solicitud {
  nombre: string;
  direccion: string;
  localidad: string;
  materiales: [{
    tipo: string;
    cantidad: number;
  }
  ]
  constructor() {

  }
}
