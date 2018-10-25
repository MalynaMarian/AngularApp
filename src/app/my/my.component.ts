import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit {
  addFlag = false;
  myInfo = '';
  inputText = '';
  textRepository = '';
  constructor() {
    setTimeout(() => {
      this.addFlag = true;
    }, 3000);
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
