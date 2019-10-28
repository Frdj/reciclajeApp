import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MescelaneasService } from './mescelaneas.service';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(
    private httpClient: HttpClient,
    private miscelaneas: MescelaneasService
  ) { }

  getPublicaciones() {
    return this.httpClient.get(`${this.miscelaneas.getURL()}/api/publicaciones`);
  }
}
