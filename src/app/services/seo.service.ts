import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, ActivatedRoute,ActivationEnd} from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    public meta: Meta,
    public title: Title,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  generateTags(){

    this.router.events.pipe(
        filter(event => event instanceof ActivationEnd),
        filter((evento: ActivationEnd) => evento.snapshot.firstChild === null ),
        map( (evento: ActivationEnd) => evento.snapshot.data )
      ).subscribe((data:any) => {
        let titulo:string;
        if(data.titulo == ''){
          titulo = `José`
        }else{
          titulo = `${data.titulo} | José`
        }

        this.title.setTitle(titulo);

        this.meta.updateTag({name:'description',content:data.description});
        this.meta.updateTag({name:'title',content:data.title});

        this.meta.updateTag({name:'robots',content:'INDEX,FOLLOW'});
        this.meta.updateTag({name:'keywords',content:data.keywords});

        this.meta.updateTag({name:'twitter:card', content:'summary'});
        this.meta.updateTag({name:'twitter:site', content:'@ni-ng'});
        this.meta.updateTag({name:'twitter:title', content:data.titulo});
        this.meta.updateTag({name:'twitter:description', content:data.description});

        this.meta.updateTag({property:'og:type', content:'article'});
        this.meta.updateTag({property:'og:site_name', content:'mi-ng'});
        this.meta.updateTag({property:'og:title', content:data.titulo});
        this.meta.updateTag({property:'og:description', content:data.description});

      });

  }
  
}
