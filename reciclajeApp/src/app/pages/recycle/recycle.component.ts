import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-recycle',
  templateUrl: './recycle.component.html',
  styleUrls: ['./recycle.component.scss']
})
export class RecycleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirigir(page: string){
    this.router.navigate([page])
    }

}
