import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attendance-confirmation.component.html',
  styleUrl: './attendance-confirmation.component.css'
})
export class ConfirmationComponent {
  @Input() public guestNumber = 1;
}