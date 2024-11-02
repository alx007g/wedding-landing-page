import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitationCardComponent } from './app/invitation-card/invitation-card.component';

const routes: Routes = [
  { path: '**', component: InvitationCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
