import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDirectorioPage } from './add-directorio.page';

const routes: Routes = [
  {
    path: '',
    component: AddDirectorioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDirectorioPageRoutingModule {}
