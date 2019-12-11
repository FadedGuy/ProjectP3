import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDirectorioPageRoutingModule } from './add-directorio-routing.module';

import { AddDirectorioPage } from './add-directorio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDirectorioPageRoutingModule
  ],
  declarations: [AddDirectorioPage]
})
export class AddDirectorioPageModule {}
