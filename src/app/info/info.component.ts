import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  template: `
    <section class="section" [style.backgroundImage]="'url(https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'">
      <div class="section-content container">
        <h2>Detalles del Evento</h2>
        <p><strong>Fecha:</strong> 10 de noviembre del 2024</p>
        <p><strong>Hora:</strong> A partir de las 10:30 AM</p>
        <p><strong>Lugar:</strong> Colina Country Club, Km. 223 Carretera a Cantel, Quetzaltenango</p>
      </div>
    </section>
  `,
  styles: [`
    h2 {
      margin-bottom: 20px;
      text-align: center;
    }
    p {
      margin-bottom: 15px;
      text-align: center;
    }
  `]
})
export class InfoComponent {}