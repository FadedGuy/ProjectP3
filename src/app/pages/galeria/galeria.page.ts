import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {PhotoService} from '../../services/photo.service';
@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit{
  
  fotish: any[] = [];

  constructor(private router: Router, public photoService: PhotoService) { 
    this.photoService.cargarFoto();
  }

  ngOnInit(){
    //this.fotish = this.photoService.cargarFoto();
    this.photoService.cargarFoto();
  }
  
  holas(){
    alert(this.fotish.length);
  }

  return(){
    this.router.navigateByUrl("/home");
  }
}