import { Component, HostListener, Input, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { config } from '../../config';
import { ParrotModel } from '../../parrots/parrot.model';


enum SlalomDirection {
  RIGHT = 'RIGHT',
  LEFT = 'LEFT'
}

@Component({
  selector: 'ngx-pp-party-parrots',
  templateUrl: './ngx-party-parrots.component.html',
  styleUrls: ['./ngx-party-parrots.component.css']
})
export class NgxPartyParrotsComponent implements OnInit, OnDestroy {

  @ViewChild('canvas') canvas;
  @Input() parrotsAmount: number;
  @Input() opacity: number;
  @Input() parrotsData: ParrotModel[];
  @Input() speed: { min: number, max: number };
  @Input() skiingMode: string;
  @Input() slalomLength: { min: number, max: number };

  @Input('mode') set mode(mode: string) {
    this.opacity = this.opacity || config.modes[mode].opacity;
    this.parrotsAmount = this.parrotsAmount || config.modes[mode].parrotsAmount;
    this.parrotsData = this.parrotsData || config.modes[mode].parrotsData;
    this.speed = this.speed || config.modes[mode].speed;
    this.skiingMode = this.skiingMode || config.modes[mode].skiingMode;
    this.slalomLength = this.slalomLength || config.modes[mode].slalomLength;
  }

  private canvasWidth: number;
  private canvasHeight: number;
  private context: CanvasRenderingContext2D;
  private windowAnimationFrame: number;
  parrotsSprites = [];

  constructor(public ngZone: NgZone) {
    this.ngZone.runOutsideAngular(() => {
      const loop = () => {
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.parrotsSprites.forEach((parrot) => {
          parrot.update();
          parrot.render();
        });
        this.windowAnimationFrame = requestAnimationFrame(loop);

      };

      this.windowAnimationFrame = requestAnimationFrame(loop);
    });
  }

  ngOnInit() {
    this.prepareCanvas();
    this.parrotsSprites = Array.from({length: this.parrotsAmount})
      .map(() => this.createSprite());
  }

  prepareCanvas(): void {
    this.canvasWidth = window.innerWidth;
    this.canvasHeight = window.innerHeight;

    // resize canvas to match whole window
    this.canvas.nativeElement.width = this.canvasWidth;
    this.canvas.nativeElement.height = this.canvasHeight;

    // save canvas context
    this.context = this.canvas.nativeElement.getContext('2d');
    this.context.globalAlpha = this.opacity;
  }
  createImage(src): HTMLImageElement {
    const parrotImage = new Image();
    parrotImage.src = src;
    return parrotImage;
  }
  createSprite() {
    let randomParrot: number = this.randomNumberFromMinToMax(0, this.parrotsData.length);

    let options = (randomParrot) => {
      return {
        frameIndex: 0,
        tickCount: 0,
        ticksPerFrame: 1,
        positionX: this.randomNumberFromMinToMax(0, this.canvasWidth),
        positionY: this.randomNumberFromMinToMax(this.randomNumberFromMinToMax(-150, -100), 0),
        slalomMovementLength: this.randomNumberFromMinToMax(this.slalomLength.min, this.slalomLength.max),
        slalomMovementDirection: SlalomDirection.RIGHT,
        speed: this.randomNumberFromMinToMax(this.speed.min, this.speed.max),
        scaleFactor: this.getScalingFactorForWidth(this.parrotsData[randomParrot].width),
        context: this.context,
        image: this.createImage(this.parrotsData[randomParrot].imageSrc)
      }

    };

    let sprite: any = {
      ...this.parrotsData[randomParrot],
      ...options(randomParrot)
    };

    sprite.render = () => {
      sprite.context.drawImage(
        sprite.image,
        sprite.frameIndex * sprite.width / sprite.numberOfFrames,
        0,
        sprite.width / sprite.numberOfFrames,
        sprite.height,
        sprite.positionX,
        sprite.positionY,
        sprite.width / sprite.scaleFactor / sprite.numberOfFrames,
        sprite.height / sprite.scaleFactor);
    };

    sprite.updatePosition = () => {
      if (sprite.positionY < this.canvasHeight) {
        sprite.positionY = sprite.positionY + sprite.speed;

        if (this.skiingMode === 'yes') {
          this.setSlalomDirection(sprite);
        }

      } else {
        randomParrot = this.randomNumberFromMinToMax(0, this.parrotsData.length);

        sprite = {
          ...sprite,
          ...this.parrotsData[randomParrot],
          ...options(randomParrot)
        }


        // sprite.positionX = this.randomNumberFromMinToMax(0, this.canvasWidth);
        // sprite.positionY = this.randomNumberFromMinToMax(-200, 0);


      }
    };

    sprite.updateFrames = () => {
      // If the current frame index is in range
      if (sprite.frameIndex < sprite.numberOfFrames - 1) {
        sprite.frameIndex += 1;
      } else {
        sprite.frameIndex = 0;
      }
    };

    sprite.update = () => {

      sprite.tickCount += 1;

      if (sprite.tickCount > sprite.ticksPerFrame) {
        sprite.tickCount = 0;
        sprite.updateFrames();
        sprite.updatePosition();
      }
    };
    return sprite;
  }

  randomNumberFromMinToMax(min: number, max: number): number {
    return Math.floor(Math.random() * max) + min;
  }

  getScalingFactorForWidth(width): number {
    if (width < 1280) {
      return 1;
    } else {
      return Number((Math.random() * (2 - 1) + 2).toFixed(2));
    }
  }
  setSlalomDirection(sprite) {
    // if out of the board from the right
    if (sprite.positionX > this.canvasWidth) {
      sprite.slalomMovementDirection = SlalomDirection.LEFT;
      sprite.slalomMovementLength = this.randomNumberFromMinToMax(this.slalomLength.min, this.slalomLength.max);
    }
    // if out of the board from the left
    if (sprite.positionX < 0) {
      sprite.slalomMovementDirection = SlalomDirection.RIGHT;
      sprite.slalomMovementLength = this.randomNumberFromMinToMax(this.slalomLength.min, this.slalomLength.max);
    }

    if (sprite.slalomMovementDirection === SlalomDirection.LEFT && sprite.slalomMovementLength) {
      sprite.positionX = sprite.positionX - sprite.speed;
      sprite.slalomMovementLength--;
    }

    if (sprite.slalomMovementDirection === SlalomDirection.RIGHT && sprite.slalomMovementLength) {
      sprite.positionX = sprite.positionX + sprite.speed;
      sprite.slalomMovementLength--;
    }

    if (sprite.slalomMovementLength === 0) {
      // change direction
      if (sprite.slalomMovementDirection === SlalomDirection.RIGHT) {
        sprite.slalomMovementDirection = SlalomDirection.LEFT;
      } else {
        sprite.slalomMovementDirection = SlalomDirection.RIGHT;
      }
      sprite.slalomMovementLength = this.randomNumberFromMinToMax(this.slalomLength.min, this.slalomLength.max);
    }
  }
  @HostListener('window:resize')
  onResize(): void {
    this.canvasWidth = window.innerWidth;
    this.canvasHeight = window.innerHeight;

    // update canvas size (possibly window resized)
    this.canvas.nativeElement.width = this.canvasWidth;
    this.canvas.nativeElement.height = this.canvasHeight;
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.windowAnimationFrame);
  }

}
