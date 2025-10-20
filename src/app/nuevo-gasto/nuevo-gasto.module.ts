// src/app/nuevo-gasto/nuevo-gasto.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NuevoGastoPageRoutingModule } from './nuevo-gasto-routing.module';
import { NuevoGastoPage } from './nuevo-gasto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoGastoPageRoutingModule,
    NuevoGastoPage
  ]
})
export class NuevoGastoPageModule {}
