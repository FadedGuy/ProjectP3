import { Injectable } from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {Storage} from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  imagenActual: any;
  public fotos: Foto[]=[];
  constructor(private camera: Camera, private storage:Storage) { }
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
      this.storage.set('photos', this.fotos);
    }, (err) => {
      // Error que me pedía que logueara
      console.log("Error: " + err);
    });

    
  }
  guardarFoto()
    {
      this.storage.get('photos').then((photos) => {
        this.fotos = photos || [];
      });
    }
}
class Foto
{
  data:any;
}