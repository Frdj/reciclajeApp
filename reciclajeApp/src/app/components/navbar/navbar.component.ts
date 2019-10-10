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

  constructor(
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

  redirigir(path: string){
    this.misce.redireccionar(path);
  }
}
