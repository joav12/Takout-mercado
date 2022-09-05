import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoCadPageRoutingModule } from './info-cad-routing.module';

import { InfoCadPage } from './info-cad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoCadPageRoutingModule
  ],
  declarations: [InfoCadPage]
})
export class InfoCadPageModule {}
