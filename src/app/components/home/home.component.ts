import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public html: string[] = ["<html>","</html>","<head>","</head>","<body>","</body>","<h1>","</h1>"];

  constructor() { }

  ngOnInit() {
  }

}
