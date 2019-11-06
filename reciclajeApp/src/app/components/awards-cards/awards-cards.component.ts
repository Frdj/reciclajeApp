import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-awards-cards',
  templateUrl: './awards-cards.component.html',
  styleUrls: ['./awards-cards.component.scss']
})
export class AwardsCardsComponent implements OnInit {
@Input('award') award: any
  constructor() { }

  ngOnInit() {
  }


  /* img: 'https://d701vexhkz032.cloudfront.net/bundles/front/media/images/favicons/favicon-512.png',
      puntos: 1500 ,
      marca: 'McDonald\'s',
      titulo: '2 x 1 en papas grandes',
      descripcion: 'Cupón válido para locales ubicados en Capital Federal',*/

}
