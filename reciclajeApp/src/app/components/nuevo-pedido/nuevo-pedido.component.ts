import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-pedido',
  templateUrl: './nuevo-pedido.component.html',
  styleUrls: ['./nuevo-pedido.component.scss']
})
export class NuevoPedidoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nuevoPedido(){
    this.router.navigate('[ofrecer]')
  }

}
