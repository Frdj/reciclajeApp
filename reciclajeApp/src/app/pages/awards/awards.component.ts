import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {
awards = [
  {
      img: 'https://d701vexhkz032.cloudfront.net/bundles/front/media/images/favicons/favicon-512.png',
      puntos: 1500 ,
      marca: 'McDonald\'s',
      titulo: '2 x 1 en papas grandes',
      descripcion: 'Cupón válido para locales ubicados en Capital Federal',
      },
      {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Coca-Cola_bottle_cap.svg/1200px-Coca-Cola_bottle_cap.svg.png',
      puntos: 2000 ,
      marca: 'Coca-Cola',
      titulo: '25% de descuento llevando 3 o mas latas',
      descripcion: 'Cupón válido para locales ubicados en Capital Federal',
      },
      {
      img: 'https://pbs.twimg.com/profile_images/1111241428326334465/XJSCSYjN_400x400.png',
      puntos: 1250 ,
      marca: 'Cinema Hoyts',
      titulo: '10% de descuento en la segunda unidad de cualquier golosina',
      descripcion: 'Cupón válido para locales ubicados en Capital Federal',
      },
      {
      img: 'https://norteenlinea.com/media/k2/items/cache/416ee3395897e1f1c362fca9e73f41b9_XL.jpg',
      puntos: 3000 ,
      marca: 'Banco Galicia',
      titulo: 'Compra de dolares a precio 5% menor al del mercado',
      descripcion: 'Cupón válido para locales ubicados en Capital Federal',
      },
      {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/275px-Emirates_logo.svg.png',
      puntos: 1000 ,
      marca: 'Emirate Airlines',
      titulo: 'Internet gratis en cualquier vuelo',
      descripcion: 'Cupón válido para locales ubicados en Capital Federal',
      },
      {
      img: 'https://pbs.twimg.com/profile_images/684789464531603457/uXNNUJEP_400x400.jpg',
      puntos: 3500 ,
      marca: 'Volkswagen',
      titulo: '15% de descuento en proximo service',
      descripcion: 'Cupón válido para locales ubicados en Capital Federal',
      },
      {
      img: 'http://sansalvadordejujuy.gob.ar/wp-content/uploads/2018/04/Logo-SUBE-01-1.png',
      puntos: 1000 ,
      marca: 'SUBE',
      titulo: '$100 de carga',
      descripcion: 'Cupón válido para locales ubicados en Capital Federal',
      },
      {
      img: 'https://d701vexhkz032.cloudfront.net/bundles/front/media/images/favicons/favicon-512.png',
      puntos: 1500 ,
      marca: 'McDonald\'s',
      titulo: '2 x 1 en papas grandes',
      descripcion: 'Cupón válido para locales ubicados en Capital Federal',
      },
      {
      img: 'https://d701vexhkz032.cloudfront.net/bundles/front/media/images/favicons/favicon-512.png',
      puntos: 1500 ,
      marca: 'McDonald\'s',
      titulo: '2 x 1 en papas grandes',
      descripcion: 'Cupón válido para locales ubicados en Capital Federal',
},
                                                                            
]



  constructor() { }

  ngOnInit() {
  }

}
