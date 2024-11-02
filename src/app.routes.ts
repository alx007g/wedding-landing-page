import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'wedding/:guestId',
    loadComponent: () => 
      import('./app/invitation-card/invitation-card.component').then(m => m.InvitationCardComponent)
  },
  {
    path: '**',
    redirectTo: 'wedding'
  }
];