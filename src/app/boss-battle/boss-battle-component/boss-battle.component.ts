import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-boss-battle',
  templateUrl: './boss-battle.component.html',
  styleUrls: ['./boss-battle.component.css']
})
export class BossBattleComponent implements OnInit {

  playArea = {
    width: 640,
    height: 480,
  };

  @ViewChild('gameCanvas') gameCanvas: ElementRef;
  gl: WebGLRenderingContext;

  constructor() { }

  ngOnInit() {
    this.gl = this.gameCanvas.nativeElement.getContext('webgl');
    if (!this.gl) {
      throw new Error('Web GL not supported or not working');
    }

    // Set clear color to black, fully opaque
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
  }

}
