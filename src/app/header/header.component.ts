import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="section" [style.backgroundImage]="'url(https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'">
      <div class="section-content container">
        <h1>Otto Gramajo & Anabella Macario</h1>
        <p class="quote">"Y si alguno prevalece contra uno, dos le resistirán; y cordón de tres dobleces no se rompe pronto."</p>
        <p class="bible-verse">Eclesiastés 4:12</p>
        <p class="invitation">Tenemos el honor de invitarte a compartir nuestra alegría y celebrar el comienzo de nuestra nueva vida juntos.</p>
      </div>
    </header>
  `,
  styles: [`
    header {
      text-align: center;
    }
    h1 {
      margin-bottom: 20px;
    }
    .bible-verse {
      margin-bottom: 20px;
    }
  `]
})
export class HeaderComponent {}