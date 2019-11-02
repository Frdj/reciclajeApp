import { Component, OnInit } from '@angular/core';
import { MescelaneasService } from '../../services/mescelaneas.service';

@Component({
  selector: 'app-new-publish',
  templateUrl: './new-publish.component.html',
  styleUrls: ['./new-publish.component.scss']
})
export class NewPublishComponent implements OnInit {

  constructor(private misce: MescelaneasService) {
  }

  continuar() {
    this.misce.redireccionar('dataPublish');
  }

  ngOnInit() { }
}
