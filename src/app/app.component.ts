import { Component } from '@angular/core';

import { Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginPage } from '../app/login/login.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private modalCtrl: ModalController,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      /*this.platform..subscribe(() => {
        if (this.router.url != '/login') {
          this.lockApp();
        }
      });*/
    });
  }

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




}
