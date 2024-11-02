import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
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
import { YouTubePlayer } from "@angular/youtube-player";
import { Fireworks } from 'fireworks-js';


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
    YouTubePlayer,
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
export class InvitationCardComponent implements OnInit, AfterViewInit {

  fireworks: Fireworks | null = null;
  ngAfterViewInit() {
    const headerElement = document.querySelector('.section');
    headerElement?.classList.add('fade-in');
    
  }

  ngOnInit() {   
   
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

  youtubeReady(e:any) {
    console.log( "e.target.videoTitle=", e.target.videoTitle)
    e.target.playVideo();
  }
 public videoId = "rjwWadSKVxc";
 public start = 10;
  OnStageChange(e:any) {

    console.log( e )
    console.log( "OnStageChange: data=", e.data, e.target.videoTitle )
    switch( e.data ) {
      case -1:
        console.log("code -1")
        break;
      case 0:
        console.log("End of Song")
        this.videoId = "rjwWadSKVxc"
        e.target.playVideo() ;
        break;
      case 1:
        console.log("Code 1")
        break;
      case 3:
        console.log("Code 3")
        break;
      case 5:
        console.log("code 5, start next video: ", e.target.videoTitle)
        e.target.playVideo();
        break;
      default: {
        console.error( "OnStageChange for youtube: unkown data: ", e.data)
        break;
      }
    }
  }

}
