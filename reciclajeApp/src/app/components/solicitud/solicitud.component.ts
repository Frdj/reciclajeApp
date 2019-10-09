import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent implements OnInit {
@Input('solicitud') solicitud: Solicitud;
@Input('index') i: number;
modal: HTMLDialogElement;
tomado = false;
  constructor() {
  }
  
  ngOnInit() {
    
    let nombre = 'modal'+this.i;
    console.log(nombre)
    this.modal = document.getElementById(nombre) as HTMLDialogElement;
  }

  
openConfirm()
{
  
  let nombre = 'modal'+this.i;
  console.log(nombre);
  this.modal = document.getElementById(nombre) as HTMLDialogElement;
  this.modal.showModal();
}
cerrar(){
  this.modal = document.getElementById('modal'+this.i) as HTMLDialogElement;

  this.modal.close();

}
confirmar(){
  console.log('opeacion realizada');
  this.tomado = true;
  this.modal.close();


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
