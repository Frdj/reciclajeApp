import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { MescelaneasService } from '../../services/mescelaneas.service';

@Component({
  selector: 'app-nuevo-pedido',
  templateUrl: './nuevo-pedido.component.html',
  styleUrls: ['./nuevo-pedido.component.scss']
})
export class NuevoPedidoComponent implements OnInit {

  constructor(private misce: MescelaneasService) { }

  ngOnInit() {
  }
redirigir(page: string){
  this.misce.redireccionar(page);
}


}
