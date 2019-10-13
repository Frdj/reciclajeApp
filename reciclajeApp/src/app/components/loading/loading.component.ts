import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  constructor() { 
  } 
    ngOnInit() {
      let dialog = document.getElementById('dialog') as HTMLDialogElement;
      dialog.showModal();
    
   }


}
