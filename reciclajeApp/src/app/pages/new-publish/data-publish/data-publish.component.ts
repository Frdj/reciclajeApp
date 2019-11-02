import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Publicacion } from 'src/app/models/Publicacion';
import { MescelaneasService } from 'src/app/services/mescelaneas.service';
import { UserService } from 'src/app/services/user.service';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-data-publish',
  templateUrl: './data-publish.component.html',
  styleUrls: ['./data-publish.component.scss']
})
export class DataPublishComponent implements OnInit {
  loading = false;
  addresess = [];
  diasDisponible = [];
  franjas = [{ dsd: '10:00', hst: '18:30' }];
  semana = [{ dia: 1, nombre: 'lunes' }, { dia: 2, nombre: 'martes' }, { dia: 3, nombre: 'miercoles' },
  { dia: 4, nombre: 'jueves' }, { dia: 5, nombre: 'viernes' }, { dia: 6, nombre: 'sabado' }, { dia: 7, nombre: 'domingo' }]
  publicacion: Publicacion;
  address = '';
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
  retiro = 1;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private misce: MescelaneasService,
    private _user: UserService,
    private publicacionService: PublicationService
  ) {
    // Se recibe la publicación de la pantalla anterior
    // TRABAJAR SOBRE ESTE OBJETO PUBLICACION, QUE VA SER EL QUE SE VA A ENVIAR AL BACKEND
    this.publicacionService.publicacionAnnounced$.subscribe(publicacion => {
      console.log(publicacion);
    });
  }

  ngOnInit() {
  }

  finalizar() {
    //   this.loading = true;
    this.publicacion = new Publicacion();
    this.publicacion.direccion = 1;
    this.publicacion.idDetalle = this.retiro;
    this.publicacion.horarioDisponible = '';
    this.franjas.forEach(horario => { let horas = horario.dsd + ' - ' + horario.hst + ' | '; this.publicacion.horarioDisponible += horas })
    //this.publicacion.fotos = ['foto','foto','foto','foto','foto',]
    this.publicacion.diasDisponibles = this.diasDisponible;

    console.log(this.publicacion)
  }

  agregaDia(dia: number) {
    let index = this.diasDisponible.findIndex(d => dia == d);
    if (index > 0) {
      this.diasDisponible.splice(index, 1);
    }
    else {
      this.diasDisponible.push(dia);
    }
  }

  backTo(page: string) {
    this.misce.redireccionar(page);
  }

  addFranja() {
    this.franjas.push({ dsd: '10:00', hst: '18:30' });
  }
  removeFranja(index: number) {
    this.franjas.splice(index, 1);
  }


}