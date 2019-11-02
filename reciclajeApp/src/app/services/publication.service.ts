import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
