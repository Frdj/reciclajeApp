import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MescelaneasService } from './mescelaneas.service';
import { BehaviorSubject } from 'rxjs';
import { Publicacion } from '../models/Publicacion';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  publicacion: Publicacion;
  publicacionAnnouncedSource = new BehaviorSubject(this.publicacion);
  publicacionAnnounced$ = this.publicacionAnnouncedSource.asObservable();

  constructor(
    private httpClient: HttpClient,
    private miscelaneas: MescelaneasService
  ) { }

  getPublicaciones() {
    return this.httpClient.get(`${this.miscelaneas.getURL()}/api/publicaciones`);
  }

  announcePublicacion(publicacion: Publicacion) {
    this.publicacionAnnouncedSource.next(publicacion);
  }

  createPublication(publicacion: Publicacion){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      });
    let body = JSON.stringify(publicacion);
    return this.httpClient.post(`${this.miscelaneas.getURL()}/api/publicaciones`, body, {headers})
  }
  
  reserve(idUser: number, idPublic: number){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      });
    let body = {
        idPublicacion: idPublic,
        idUsuario: idUser,
    }
    return this.httpClient.post(`${this.miscelaneas.getURL()}/api/publicaciones/reservar?idPublicacion=${idPublic}&idUsuario=${idUser}`, body, {headers})
  }
}
