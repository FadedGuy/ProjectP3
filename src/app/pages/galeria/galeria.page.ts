import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  return(){
    this.router.navigateByUrl("/home");
  }
}
