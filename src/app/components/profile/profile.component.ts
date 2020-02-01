import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if(navigator.mediaDevices){
      console.log('SOPORTAR CAMARA');

      let video:any = document.getElementById('video');
      navigator.mediaDevices.getUserMedia({
        audio:false,
        video: true
      })
      .then((stream) => {
        video.srcObject = stream;
      })
      .catch(()=> console.error('error'))
      
    }else{
      console.log('no soporta camara seguro es web');
    }
  }

}
