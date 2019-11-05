import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-retiro-detail',
  templateUrl: './retiro-detail.component.html',
  styleUrls: ['./retiro-detail.component.scss']
})
export class RetiroDetailComponent implements OnInit {

  constructor(
    private _publicacion: PublicationService,
    public dialogRef: MatDialogRef<RetiroDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log(data)
   }

  ngOnInit() {
  }

  reservarPublicacion(){
    this._publicacion.reserve(this.data.id, this.data.publicationId).subscribe(data => {console.log(data), alert('Publicacion reservada!')}, error =>{ alert('Ha ocurrido un error al generar la reserva'); console.error(error)});
  }

}
