export interface ParrotModel {
  name: string;
  width: number;
  height: number;
  imageSrc: string;
  numberOfFrames: number;
}

export interface ParrotSpriteModel extends ParrotModel {
  ticksPerFrame: number;
  context: {};
  image: HTMLImageElement;
  positionX: number;
  positionY: number;
  speed: number;
}
