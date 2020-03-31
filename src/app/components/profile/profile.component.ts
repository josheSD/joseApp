import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  
  public html: string[] = ["<html>","</html>","<head>","</head>","<body>","</body>","<h1>","</h1>"];

  constructor() { }

  ngOnInit() {
    
  }

}
