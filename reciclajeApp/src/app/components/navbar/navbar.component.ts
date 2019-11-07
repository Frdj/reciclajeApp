import { Component, OnInit } from '@angular/core';
import { MescelaneasService } from '../../services/mescelaneas.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUrl: string;
  estaPermitida: boolean;

  constructor(
    private misce: MescelaneasService,
    public router: Router
  ) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.currentUrl = event.url;
        this.estaPermitida = this.rutaPermitida();
      }
    });

  }
  ngOnInit() {
  }

 

  rutaPermitida(): boolean {
    return this.currentUrl.includes('/recycle') || this.currentUrl.includes('/retirar') || this.currentUrl.includes('/ofrecer') || this.currentUrl.includes('/dataPublish');
  }
}
