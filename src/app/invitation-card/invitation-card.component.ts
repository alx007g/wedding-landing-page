import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";
import { CommonModule } from "@angular/common";
import { ConfirmationComponent } from "../confirmation/attendance-confirmation.component";
import { FamilyComponent } from "../family/family.component";
import { HeaderComponent } from "../header/header.component";
import { InfoComponent } from "../info/info.component";
import { InvitationComponent } from "../invitation/invitation.component";
import { LocationComponent } from "../location/location.component";
import { PresentsTableComponent } from "../presents-table/presents-table.component";

@Component({
  selector: "app-invitation-card",
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    InfoComponent,
    FamilyComponent,
    ConfirmationComponent,
    InvitationComponent,
    LocationComponent,
    InvitationCardComponent,
    PresentsTableComponent,
  ],
  templateUrl: "./invitation-card.component.html",
  styleUrl: "./invitation-card.component.css",
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
export class InvitationCardComponent implements OnInit {

  private player: any; // El reproductor de YouTube

  ngOnInit() {
    // Inicializa el reproductor de YouTube cuando se carga la página
    this.loadYouTubePlayer();
  }

  loadYouTubePlayer() {
    // Espera a que se cargue la API de YouTube
    (window as any).onYouTubeIframeAPIReady = () => {
      this.player = new (window as any).YT.Player('youtube-player', {
        height: '110px', // Oculta el video
        width: '110px', // Oculta el video
        videoId: 'OpLpphS7VZY', // Reemplaza con el ID del video que quieres reproducir
        events: {
          onReady: (event: any) => event.target.playVideo(),
        },
        playerVars: {
          autoplay: 1, // Autoplay
          controls: 0, // Sin controles
          showinfo: 0, // Sin información del video
          modestbranding: 1, // Sin marca de YouTube
          loop: 1, // Repetir el video
          playlist: 'OpLpphS7VZY', // Necesario para el loop
          fs: 0, // Sin botón de pantalla completa
          cc_load_policy: 0, // Sin subtítulos
          iv_load_policy: 3, // Sin anotaciones
          disablekb: 1 // Desactivar controles del teclado
        }
      });
    };
  }

  isOpen = false;

  openCard() {
    this.isOpen = true;
    setTimeout(() => {
      const headerElement = document.querySelector("app-header");
      if (headerElement) {
        headerElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 1500);
  }

  @ViewChild("papersheet") papersheet!: ElementRef;
  @ViewChild("triangle") triangle!: ElementRef;
  @ViewChild("eyelet") eyelet!: ElementRef;

  onHover(isHovering: boolean) {
    if (isHovering) {
      this.papersheet.nativeElement.classList.add("hovered");
      this.triangle.nativeElement.classList.add("hovered");
      this.eyelet.nativeElement.classList.add("hovered");
    } else {
      this.papersheet.nativeElement.classList.remove("hovered");
      this.triangle.nativeElement.classList.remove("hovered");
      this.eyelet.nativeElement.classList.remove("hovered");
    }
  }
}
