import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import Fireworks from "fireworks-js";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent implements OnInit {
  fireworks: Fireworks | null = null;

  ngOnInit(): void {
    const container = document.querySelector(".section");
    this.fireworks = new Fireworks(container!, {
      hue: { min: 0, max: 345 },
      delay: { min: 30, max: 60 },
      // rocketsPoint: 50,
      // speed: 2,
      acceleration: 1.05,
      friction: 0.95,
      gravity: 1.5,
      particles: 100,
      // trace: 3,
      explosion: 5,
      autoresize: true,
      brightness: { min: 50, max: 80 },
      decay: { min: 0.015, max: 0.03 },
      mouse: { click: true, move: false, max: 1 },
      rocketsPoint: { min: 50, max: 100 },
      traceSpeed: 2,
    });
    this.fireworks.start();

    const canvas = document.querySelector("canvas");
    if (canvas) {
      canvas.style.position = "absolute";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.width = "100%";
      canvas.style.height = "100%";
    }
  }
  public backgroundUrl = "assets/images/1.jpg";
}
