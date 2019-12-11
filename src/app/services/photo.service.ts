import { Injectable } from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {Storage} from '@ionic/storage';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  imagenActual: any;
  public fotos: Foto[]=[];
  constructor(private camera: Camera, private storage3:Storage, private router: Router) { }
  tomarFoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      //Añadir
      this.fotos.unshift({
        data: 'data:image/jpeg;base64,' + imageData
      });
    
      //Guardar
      this.storage3.set('photos', this.fotos);
      alert("Se ha guardado al foto");
    }, (err) => {
      // Error que me pedía que logueara
      console.log("Error de camara: " + err);
      alert("Oh no! Ha ocurrido un error" + err);
    });
  }
  cargarFoto()
    {
      this.storage3.get('photos').then((photos) => {
        this.fotos = photos || [];
      });
      //alert(this.fotos.length);
      //return this.fotos;
    }

    updateData(indicee){
      let auxFoto: Foto[] = [];
      for(let i = 0; i < this.fotos.length; i++){
        if(i != indicee){
          auxFoto.push(this.fotos[i]);
        }
      }
      this.fotos = auxFoto;
      this.storage3.set('photos', this.fotos);
    }
}
class Foto
{
  data:any;
}
