import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  appName: String = 'splitter';
  appDescription: String = 'Split bills with your friends easily with ' + this.appName;

  constructor() { }

  ngOnInit() {
  }
  
}
