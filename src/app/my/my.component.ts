import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit {

  myInfo = '';
  inputText = '';
  textRepository = '';
  constructor() {
   }
  addMyInfo() {
    this.myInfo = 'Hello';
  }
  onKeyUp(event: Event) {
    console.log((<HTMLInputElement>event.target).value);
    this.inputText = (<HTMLInputElement>event.target).value;
  }
  addTextRepository(value) {
    this.textRepository = value;
  }
  ngOnInit() {
  }

}
