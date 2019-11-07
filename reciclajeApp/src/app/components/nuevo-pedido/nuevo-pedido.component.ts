import { Component, OnInit } from '@angular/core';
import { RouterLink, Router, NavigationStart } from '@angular/router';
import { MescelaneasService } from '../../services/mescelaneas.service';

@Component({
  selector: 'app-nuevo-pedido',
  templateUrl: './nuevo-pedido.component.html',
  styleUrls: ['./nuevo-pedido.component.scss']
})
export class NuevoPedidoComponent implements OnInit {
  currentUrl: string;
  constructor(
    private misce: MescelaneasService,
    public router: Router
  ) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.currentUrl = event.url;
      }
    });

  }
  ngOnInit() {
  }
redirigir(page: string){
  this.misce.redireccionar(page);
}


}
