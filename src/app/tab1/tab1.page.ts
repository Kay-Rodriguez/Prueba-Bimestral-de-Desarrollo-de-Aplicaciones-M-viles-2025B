// src/app/tab1/tab1.page.ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss']
})
export class Tab1Page {
  fechaActual: string = new Date().toLocaleDateString();
  total: number = 0;
  gastos = [
    { descripcion: 'Cena Restaurante', monto: 150, fecha: '12/10/2025' },
    { descripcion: 'Supermercado', monto: 280, fecha: '13/10/2025' },
    { descripcion: 'Uber', monto: 45, fecha: '14/10/2025' }
  ];

  irANuevoGasto() {
    this.router.navigate(['/nuevo-gasto']);
  }

  constructor(private router: Router) {
    this.calcularTotal();
  } 
   calcularTotal() {
    this.total = this.gastos.reduce((acc, gasto) => acc + gasto.monto, 0);
  }
}

