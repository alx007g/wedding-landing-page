import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  standalone: true,
  template: `
    <section class="section"
    [style.backgroundImage]="
  'url(https://lh3.googleusercontent.com/p/AF1QipMTHnhQsaZSXow3eVtksEY3-NF1td7WXh6qLoxH=s680-w680-h510)'  
  ">
    
      <div class="section-content" style="margin-bottom: 40px;">
        <h2>Ubicación</h2>
        <p>Colina Country Club, Km. 223 Carretera a Cantel, Quetzaltenango</p>
        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.7137032412984!2d-91.48341168909634!3d14.84131767107766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858ea32ac81775bb%3A0x1f010e01e36c4949!2sHill%20Country%20Club!5e0!3m2!1sen!2sgt!4v1729556035006!5m2!1sen!2sgt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
    iframe {
      margin:4vw;
      width: 80%;
    }
  `]
})
export class LocationComponent {}