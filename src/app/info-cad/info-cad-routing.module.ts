import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoCadPage } from './info-cad.page';

const routes: Routes = [
  {
    path: '',
    component: InfoCadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoCadPageRoutingModule {}
