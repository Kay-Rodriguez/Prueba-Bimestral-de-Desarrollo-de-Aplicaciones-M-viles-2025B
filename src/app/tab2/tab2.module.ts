// src/app/tab2/tab2.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import { Tab2Page } from './tab2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2PageRoutingModule,
    Tab2Page
  ]
})
export class Tab2PageModule {}
