import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

informacion = [
  {info: 'aaaaa ', material: 'plastico', reciclable: true, noReciclable: false},
  {info: 'bbbbb', material: 'Vidrio', reciclable: true, noReciclable: false},
  {info: 'cccc', material: 'Carton', reciclable: true, noReciclable: false},
  {info: 'ddd', material: 'Papel', reciclable: true, noReciclable: false},
  {info: 'fff', material: 'Tela', reciclable: true, noReciclable: false},
  {info: 'wwww', material: 'Goma', reciclable: true, noReciclable: false},
  {info: 'adad', material: 'Metal', reciclable: true, noReciclable: false},
  {info: 'aaaaat', material: 'Cuero', reciclable: true, noReciclable: false},
]
aux = []
  constructor() {
    this.aux = this.informacion.slice();
   }

  ngOnInit() {
  }

  filtrar(valor: string){
  console.log(valor)
  if(valor === ''){
    this.aux = this.informacion.slice();
  }else{
    this.aux = this.aux.filter(material => valor);
  }
  }
}
