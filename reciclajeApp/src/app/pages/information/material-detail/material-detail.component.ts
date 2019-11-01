import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Material } from 'src/app/models/Material';

@Component({
  selector: 'app-material-detail',
  templateUrl: './material-detail.component.html',
  styleUrls: ['./material-detail.component.scss']
})
export class MaterialDetailComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MaterialDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Material
  ) { }

  ngOnInit() {
  }

}
