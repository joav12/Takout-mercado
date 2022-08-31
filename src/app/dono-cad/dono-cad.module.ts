import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonoCadPageRoutingModule } from './dono-cad-routing.module';

import { DonoCadPage } from './dono-cad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonoCadPageRoutingModule
  ],
  declarations: [DonoCadPage]
})
export class DonoCadPageModule {}
