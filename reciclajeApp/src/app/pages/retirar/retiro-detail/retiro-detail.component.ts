import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-retiro-detail',
  templateUrl: './retiro-detail.component.html',
  styleUrls: ['./retiro-detail.component.scss']
})
export class RetiroDetailComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RetiroDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

}
