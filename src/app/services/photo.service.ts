import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';

export interface Recibo {
  descripcion: string;
  monto: number;
  fecha: string;
  foto: string;
  quienPago: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public recibos: Recibo[] = [];

  async tomarFoto(descripcion: string, monto: number, quienPago: string): Promise<string> {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.Base64,
    source: CameraSource.Camera
  });

  const fecha = new Date().toLocaleDateString();
  const nombreArchivo = `recibo-${Date.now()}`;

  try {
    await Filesystem.writeFile({
      path: `${nombreArchivo}.jpeg`,
      data: image.base64String!,
      directory: Directory.Data
    });

    const detalle = `Descripción: ${descripcion}\nMonto: ${monto}\nPagado por: ${quienPago}\nFecha: ${fecha}`;
    await Filesystem.writeFile({
      path: `${nombreArchivo}.txt`,
      data: detalle,
      directory: Directory.Data
    });
  } catch (error) {
    console.warn('No se pudo guardar en el sistema de archivos:', error);
  }

  const fotoBase64 = `data:image/jpeg;base64,${image.base64String}`;

  const nuevoRecibo = {
    descripcion,
    monto,
    fecha,
    foto: fotoBase64,
    quienPago
  };

  this.recibos.push(nuevoRecibo);
  localStorage.setItem('gastos', JSON.stringify(this.recibos));

  return fotoBase64; 
}
}
