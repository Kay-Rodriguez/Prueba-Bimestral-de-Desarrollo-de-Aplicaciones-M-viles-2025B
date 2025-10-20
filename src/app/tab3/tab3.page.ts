import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss']
})
export class Tab3Page {
  totalMensual: number = 0;
  promedioDiario: number = 0;
  comida: number = 0;
  supermercado: number = 0;
  transporte: number = 0;
  fechaInicio: string = '';
  fechaFin: string = '';

  constructor() {
    const gastos: any[] = JSON.parse(localStorage.getItem('gastos') || '[]');

    this.totalMensual = gastos.reduce((acc: number, g: any) => acc + g.monto, 0);
    this.promedioDiario = gastos.length ? parseFloat((this.totalMensual / gastos.length).toFixed(2)) : 0;

   
    this.comida = gastos.filter(g => g.descripcion.toLowerCase().includes('cena')).reduce((acc, g) => acc + g.monto, 0);
    this.supermercado = gastos.filter(g => g.descripcion.toLowerCase().includes('supermercado')).reduce((acc, g) => acc + g.monto, 0);
    this.transporte = gastos.filter(g => g.descripcion.toLowerCase().includes('uber')).reduce((acc, g) => acc + g.monto, 0);

    if (gastos.length > 0) {
      this.fechaInicio = gastos[0].fecha;
      this.fechaFin = gastos[gastos.length - 1].fecha;
    }
  }
}
