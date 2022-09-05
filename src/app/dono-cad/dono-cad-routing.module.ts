import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonoCadPage } from './dono-cad.page';

const routes: Routes = [
  {
    path: '',
    component: DonoCadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonoCadPageRoutingModule {}
