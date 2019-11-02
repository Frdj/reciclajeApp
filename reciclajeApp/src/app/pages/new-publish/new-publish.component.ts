import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../services/information.service';
import { MescelaneasService } from '../../services/mescelaneas.service';
import { Material } from '../../models/Material';

@Component({
  selector: 'app-new-publish',
  templateUrl: './new-publish.component.html',
  styleUrls: ['./new-publish.component.scss']
})
export class NewPublishComponent implements OnInit {

  constructor(private misce: MescelaneasService) {
  }

  continuar(){
    this.misce.redireccionar('dataPublish');
  }

  ngOnInit() { }
}
