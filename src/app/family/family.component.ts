import { Component } from '@angular/core';

@Component({
  selector: 'app-family',
  standalone: true,
  template: `
    <section class="section" [style.backgroundImage]="'url(https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'">
      <div class="section-content container">
        <h2>Nuestras Familias</h2>
        <h3>Nuestros Padres</h3>
        <div class="family-columns">
          <div class="family-column">
            <p>Otto Asdrúbal Gramajo Calderón y Olga Leticia De León Macario</p>
          </div>
          <div class="family-column">
            <p>Israel Macario y Martha Lidia García Reyes</p>
          </div>
        </div>
        <h3>Nuestros Padrinos</h3>
        <div class="family-columns">
          <div class="family-column">
            <p><strong>Civiles:</strong> Josué Macario García y Rebeca</p>
          </div>
          <div class="family-column">
            <p><strong>Religiosos:</strong> Héctor Mesala Escobar Rodríguez y Erika Victoria Gramajo De León</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    h2, h3 {
      text-align: center;
      margin-bottom: 30px;
    }
    .family-column {
      text-align: center;
    }
    p {
      margin-bottom: 10px;
    }
  `]
})
export class FamilyComponent {}