import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { HeaderComponent } from "./app/header/header.component";
import { InfoComponent } from "./app/info/info.component";
import { FamilyComponent } from "./app/family/family.component";
import { ConfirmationComponent } from "./app/confirmation/attendance-confirmation.component";
import { InvitationComponent } from "./app/invitation/invitation.component";
import { LocationComponent } from "./app/location/location.component";
import { InvitationCardComponent } from "./app/invitation-card/invitation-card.component";
import { RouterModule, RouterOutlet, provideRouter } from "@angular/router";
import {  routes } from "./app.routes";
import { provideHttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    HeaderComponent,
    InfoComponent,
    FamilyComponent,
    ConfirmationComponent,
    InvitationComponent,
    LocationComponent,
    InvitationCardComponent,
    RouterOutlet
  ],
  template: `
    <div class="wedding-page">
      <router-outlet></router-outlet>
      <!-- <app-invitation-card></app-invitation-card> -->
      <!-- <app-header></app-header>
      <app-invitation></app-invitation>
      <app-info></app-info>
      <app-family></app-family>
      <app-confirmation></app-confirmation>
      <app-location></app-location> -->
    </div>
  `,
  styles: [
    `
      .wedding-page {
        background-color: #f8f8f8;
      }
    `,
  ],
})
export class App {}

bootstrapApplication(App,{
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
});
