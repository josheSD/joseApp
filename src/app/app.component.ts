import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'joseApp';

  ngOnInit(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        console.log('latitud => '+position.coords.latitude)
        console.log('longitud => '+position.coords.longitude)
      });
    }else{
      console.log('NO esta soportado la geolocalización');
    }
  }
  
  chatWhatsApp(){
    let url =  "https://api.whatsapp.com/send?phone=51953235885&text=Hola tengo algunas preguntas";
    window.open(url,"_blank");
  }

  
}
