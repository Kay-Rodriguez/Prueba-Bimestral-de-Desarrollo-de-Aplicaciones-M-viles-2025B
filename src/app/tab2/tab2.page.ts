
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss']
})
export class Tab2Page {
  recibos: any[] = [];

  constructor() {
    const data = localStorage.getItem('gastos');
    this.recibos = data ? JSON.parse(data) : [];
  }
}