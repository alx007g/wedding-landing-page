import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  template: `
    <section class="section" [style.backgroundImage]="'url(https://images.unsplash.com/photo-1492176273113-2d51f47b23b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'">
      <div class="section-content container">
        <h2>Confirmación de Asistencia</h2>
        <p>Nos encantaría contar con tu presencia en nuestro día especial.</p>
        <a href="#" class="btn">Confirmar Asistencia</a>
      </div>
    </section>
  `,
  styles: [`
    .section-content {
      text-align: center;
    }
    h2 {
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 30px;
    }
  `]
})
export class ConfirmationComponent {}