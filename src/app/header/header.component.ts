import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  myName = 'Malyna Marian';
  group = 'IF-092.UI';
  constructor() { }

  ngOnInit() {
  }

}
