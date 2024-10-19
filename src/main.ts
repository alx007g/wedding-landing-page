import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/header/header.component';
import { InfoComponent } from './app/info/info.component';
import { FamilyComponent } from './app/family/family.component';
import { ConfirmationComponent } from './app/confirmation/confirmation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, InfoComponent, FamilyComponent, ConfirmationComponent],
  template: `
    <div class="wedding-page">
      <app-header></app-header>
      <app-info></app-info>
      <app-family></app-family>
      <app-confirmation></app-confirmation>
    </div>
  `,
  styles: [`
    .wedding-page {
      background-color: #f8f8f8;
    }
  `]
})
export class App {}

bootstrapApplication(App);