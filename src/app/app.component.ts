import { SeoService } from './services/seo.service';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, group, query,style, animate } from '@angular/animations';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimation', [
      transition('1 => *, 2 => *, 3 => *, 4 => *, 5 => *', [
        //inicializacion de los componentes
          style({ height: '!' }),
          query(':enter', style(
            { transform: 'translateX(100%)'}
          )),
          query(':enter, :leave', style(
            { position: 'absolute', top: 0, left: 0, right: 0 }
          )),
          group([
              // animacion de salida
              query(':leave', [
                  animate('1s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' })),
              ]),
              // animacion de entrada
              query(':enter', animate('1s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
          ]),
      ]),
    ])
  ]
})

export class AppComponent implements OnInit{
  title = 'joseApp';

  constructor(
    private router: Router,
    private _seoService: SeoService
  ){

  }

  ngOnInit(
  
  ){
    this._seoService.generateTags();
  }

  getDepth(outlet: RouterOutlet){
    return outlet.activatedRouteData['depth'];
  }
  
  chatWhatsApp(){
    let url =  "https://api.whatsapp.com/send?phone=51953235885&text=Buenos días Jose";
    window.open(url,"_blank");
  }

  routerPerfil(){
    this.router.navigate(['/perfil']);
  }

  routerPortafolio(){
    this.router.navigate(['/portafolio']);
  }



  
}
