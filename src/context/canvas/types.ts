export type ICanvas = ECanvas[][];

export interface ICanvasMap {
  [x: string]: { tile: ECanvas, position: IPosition }
};

export interface IPosition {
  x: number;
  y: number;
}

export interface IConsequences {
  valid: boolean;
  dead: boolean;
  door: boolean;
}

export interface ICanvasMoviment {
  position: IPosition;
  consequences: IConsequences;
}

export interface ICanvasContext {
  canvas: ICanvas;
  updateCanvas: (
    currentPosition: IPosition,
  ) => ICanvasMoviment;
}

export enum ECanvas {
  FLOOR = 0, 
  WALL = 1, 
  DOOR = 2, 
  SPIKE = 3, 
  KEYCARD = 4, 
  ROBOT = 5, 
}
