import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})

export class TestComponent implements OnInit {

  optionSelected:string;
 
  constructor() { }

  ngOnInit() {}

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }  

  recoverAlertValue(event: any) {
  this.optionSelected = event.detail.value;
  console.log(this.optionSelected);
  console.log(event.detail);
  
  }

}






