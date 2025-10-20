import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-gasto',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './nuevo-gasto.page.html',
  styleUrls: ['./nuevo-gasto.page.scss']
})
export class NuevoGastoPage {
  descripcion: string = '';
  monto: number = 0;
  quienPago: string = '';
  foto: string = '';

  constructor(private photoService: PhotoService, private router: Router) {}

  async tomarFoto() {
    this.foto = await this.photoService.tomarFoto(this.descripcion, this.monto, this.quienPago);
  }

  guardarGasto() {
    const nuevo = {
      descripcion: this.descripcion,
      monto: this.monto,
      quienPago: this.quienPago,
      fecha: new Date().toLocaleDateString(),
      foto: this.foto
    };

    const gastos = JSON.parse(localStorage.getItem('gastos') || '[]');
    gastos.push(nuevo);
    localStorage.setItem('gastos', JSON.stringify(gastos));

    this.router.navigate(['/tabs/tab2']);
  }
}
