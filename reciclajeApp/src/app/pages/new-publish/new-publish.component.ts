import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/models/Material';
import { InformationComponent } from '../information/information.component';
import { InformationService } from '../../services/information.service';
import { MescelaneasService } from '../../services/mescelaneas.service';

@Component({
  selector: 'app-new-publish',
  templateUrl: './new-publish.component.html',
  styleUrls: ['./new-publish.component.scss']
})
export class NewPublishComponent implements OnInit {
loading = true;
error = false;
  tipoMateriales = [
    ]
materiales: Material[] = [];

  constructor(private _informacion: InformationService, private misce: MescelaneasService) {
    this._informacion.getMateriales('descripcion').subscribe((mats: any[]) =>{ mats.forEach(mat => {this.tipoMateriales.push(mat.descripcion)
    this.error = false; this.loading = false})
      this.AddElement();
    }, error => {misce.errorAlert(error); this.error = true; this.loading = false; })
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