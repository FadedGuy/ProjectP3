import { Component, OnInit, Input } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @Input()isModal: boolean;
  imageManuel: string = "https://i.ibb.co/LRGsxqt/lockIcon.png";

  constructor(private faio: FingerprintAIO, private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

login(){
  //this.router.navigateByUrl('/home');
  
  this.faio.show({
    title: "Ingrese su dato biometrico"
  }).then(() => {
    if (this.isModal) {
      this.modalCtrl.dismiss();
    } else{
      this.router.navigateByUrl('/home');
    }
  })
  .catch((error: any) => {
    console.log('err: ', error);
  });
  }
}
