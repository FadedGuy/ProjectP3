import { Component, OnInit, Input } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @Input()isModal: boolean;

  constructor(private faio: FingerprintAIO, private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log('Hola Modal: ', this.isModal)
  }

login() {
  this.router.navigateByUrl('/home');
  /*
  this.faio.show({

  }).then(() => {
    alert("hola");
    if (this.isModal) {
      this.modalCtrl.dismiss();
    } else {
      this.router.navigateByUrl('/home');
    }
  })
  .catch((error: any) => {
    console.log('err: ', error);
  });*/
}
}
