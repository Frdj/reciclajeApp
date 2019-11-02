import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Publicacion } from 'src/app/models/Publicacion';

@Component({
  selector: 'app-data-publish',
  templateUrl: './data-publish.component.html',
  styleUrls: ['./data-publish.component.scss']
})
export class DataPublishComponent implements OnInit {
  loading = false;
  diasDisponible = [];
  semana = [{dia: 1, nombre: 'lunes'},{dia: 2, nombre: 'martes'},{dia: 3, nombre: 'miercoles'},
  {dia: 4, nombre: 'jueves'},{dia: 5, nombre: 'viernes'},{dia: 6, nombre: 'sabado'}, {dia: 7, nombre: 'domingo'}]
  publicacion: Publicacion;
  address = '';
  dsd: any;
  hst: any;
  retiros = [{
    id: 1, value: 'Una mochila alcanza'
  },
  {
    id: 2, value: 'Se necesitaría un auto'
  },
  {
    id: 3, value: 'Una persona alcanza'
  },
  {
    id: 4, value: 'Con elementos especiales'
  },];
  retiro: number;
  firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

  }

  finalizar(){
    this.loading = true;
    this.publicacion = new Publicacion();
    this.publicacion.direccion = 1;
    this.publicacion.idDetalle = this.retiro;
    this.publicacion.horarioDisponible = this.dsd;
    //this.publicacion.fotos = ['foto','foto','foto','foto','foto',]
    this.publicacion.diasDisponibles = this.diasDisponible;
    console.log(this.publicacion)
  }

  agregaDia(dia: number){
    let index = this.diasDisponible.findIndex(d => dia == d );
    if(index > 0){
      this.diasDisponible.splice(index,1);
    }
    else{
      this.diasDisponible.push(dia);
    }

  }


}