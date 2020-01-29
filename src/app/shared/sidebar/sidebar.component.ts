import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  routerHome(){
    this.router.navigate(['/']);
  }

  routerPerfil(){
    this.router.navigate(['/perfil']);
  }

  routerPortafolio(){
    this.router.navigate(['/portafolio']);
  }

}
