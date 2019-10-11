import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/models/Material';

@Component({
  selector: 'app-new-publish',
  templateUrl: './new-publish.component.html',
  styleUrls: ['./new-publish.component.scss']
})
export class NewPublishComponent implements OnInit {

  tipoMateriales = [
    'Plástico','Vidrio','Papel','Metal','Madera','Silicio','Pilas','Cartón'
]
materiales: Material[] = [];

  constructor() {
    this.AddElement()
  }
  
  AddElement(){
    this.materiales.push(new Material('Plástico',1));
    console.log(this.materiales)
   }


  ngOnInit() {
  }

}
