import { Component, OnInit } from '@angular/core';
import { MescelaneasService } from '../../services/mescelaneas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,private misce: MescelaneasService) { }

  ngOnInit() {
  }

  redirigir(path: string){
    this.misce.redireccionar(path);
  }
}
