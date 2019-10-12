import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/models/Material';
import { InformationComponent } from '../information/information.component';
import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-new-publish',
  templateUrl: './new-publish.component.html',
  styleUrls: ['./new-publish.component.scss']
})
export class NewPublishComponent implements OnInit {

  tipoMateriales = [
    ]
materiales: Material[] = [];

  constructor(private _informacion: InformationService) {
    this._informacion.getMateriales('descripcion').subscribe((mats: any[]) =>{ mats.forEach(mat => {this.tipoMateriales.push(mat.descripcion)})
      this.AddElement();
    })
  }
  
  AddElement(){
    this.materiales.push(new Material(this.tipoMateriales[0],1));
    console.log(this.materiales)
   }

   
crearPublicacion(){
  
}


  ngOnInit() {
  }

}
