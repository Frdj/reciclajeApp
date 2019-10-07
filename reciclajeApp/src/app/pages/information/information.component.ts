import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

informacion = [
  {info: 'aaaaa ', material: 'Plástico', reciclable: false},
  {info: 'bbbbb', material: 'Vidrio', reciclable: true},
  {info: 'cccc', material: 'Cartón', reciclable: true},
  {info: 'ddd', material: 'Papel', reciclable: true},
  {info: 'fff', material: 'Tela', reciclable: false},
  {info: 'wwww', material: 'Goma', reciclable: true},
  {info: 'adad', material: 'Metal', reciclable: true},
  {info: 'aaaaat', material: 'Cuero', reciclable: false},
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
    this.aux = this.aux.filter(tip => tip.material.toLocaleLowerCase().includes(valor.toLocaleLowerCase()));
  }
  }
}
