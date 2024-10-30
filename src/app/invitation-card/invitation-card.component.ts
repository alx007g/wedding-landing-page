import { Component, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ConfirmationComponent } from '../confirmation/attendance-confirmation.component';
import { FamilyComponent } from '../family/family.component';
import { HeaderComponent } from '../header/header.component';
import { InfoComponent } from '../info/info.component';
import { InvitationComponent } from '../invitation/invitation.component';
import { LocationComponent } from '../location/location.component';

@Component({
  selector: 'app-invitation-card',
  standalone: true,
  imports: [CommonModule, HeaderComponent, InfoComponent, FamilyComponent, ConfirmationComponent, InvitationComponent, LocationComponent, InvitationCardComponent],
  templateUrl: './invitation-card.component.html',
  styleUrl: './invitation-card.component.css',
  // animations: [
  //   trigger('fadeOut', [
  //     state('visible', style({ opacity: 1 })),
  //     state('hidden', style({ opacity: 0 })),
  //     transition('visible => hidden', [
  //       animate('1s ease-out')
  //     ])
  //   ])
  // ]
})
export class InvitationCardComponent {
  isOpen = false;

  openCard() {
    this.isOpen = true;
    setTimeout(() => {
      const headerElement = document.querySelector('app-header');
      if (headerElement) {
        headerElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 1500);
  }

  @ViewChild('papersheet') papersheet!: ElementRef;
  @ViewChild('triangle') triangle!: ElementRef;
  @ViewChild('eyelet') eyelet!: ElementRef;

  onHover(isHovering: boolean) {
    if (isHovering) {
      this.papersheet.nativeElement.classList.add('hovered');
      this.triangle.nativeElement.classList.add('hovered');
      this.eyelet.nativeElement.classList.add('hovered');
    } else {
      this.papersheet.nativeElement.classList.remove('hovered');
      this.triangle.nativeElement.classList.remove('hovered');
      this.eyelet.nativeElement.classList.remove('hovered');
    }
  }
}
