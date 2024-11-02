import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { HeaderComponent } from "./app/header/header.component";
import { InfoComponent } from "./app/info/info.component";
import { FamilyComponent } from "./app/family/family.component";
import { ConfirmationComponent } from "./app/confirmation/attendance-confirmation.component";
import { InvitationComponent } from "./app/invitation/invitation.component";
import { LocationComponent } from "./app/location/location.component";
import { InvitationCardComponent } from "./app/invitation-card/invitation-card.component";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";

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
  ],
  template: `
    <div class="wedding-page">
      <app-invitation-card></app-invitation-card>
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

bootstrapApplication(App, { providers: [AppRoutingModule] });
