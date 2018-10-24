import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit {

  defaultDisable = false;
  constructor() {
    setTimeout(() => {
      this.defaultDisable = true;
    }, 2000);
   }

  ngOnInit() {
  }

}
