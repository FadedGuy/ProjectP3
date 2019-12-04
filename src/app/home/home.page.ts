import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
// this.lockApp();
/*async lockApp(){
  const modal = await this.modalCtrl.create({
    component: LoginPage,
    backdropDismiss: false,
    cssClass: 'login-modal',
    componentProps: {
      isModal: true
    }
});
modal.present();
}*/
  constructor(private modalCtrl: ModalController, private router: Router) {
  }
  
  gotoDir(){
    this.router.navigateByUrl('/directorio');
  }
  
  gotoGale(){
    this.router.navigateByUrl('/galeria');
  }

  gotoNotes(){
    this.router.navigateByUrl('/notas');
  }

  lockPhone(){
    this.router.navigateByUrl('/login');
  }

  }