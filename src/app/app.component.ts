import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'joseApp';

  chatWhatsApp(){
    let url =  "https://api.whatsapp.com/send?phone=51953235885&text=Hola tengo algunas preguntas";
    window.open(url,"_blank");
  }
}
