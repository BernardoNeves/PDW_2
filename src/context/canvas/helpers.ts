import { EDirections } from '../../settings/constants';
import { ECanvas, ICanvas, ICanvasMap, IConsequences, IPosition} from './types';

// export const INITIAL_CANVAS = getInitialCanvas();
// function getInitialCanvas(): ICanvas {
//   const {
//     FLOOR: FL,
//     WALL: WL,
//     DOOR: DR,
//     SPIKE: SP,
//     KEYCARD: KC,
//     ROBOT: RO,
//   } = ECanvas;

//   return [
//     [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL],
//     [WL, SP, DR, SP, FL, FL, FL, FL, FL, FL, FL, FL, WL],
//     [WL, SP, FL, SP, FL, FL, FL, FL, FL, FL, FL, FL, WL],
//     [WL, SP, FL, SP, SP, SP, FL, FL, FL, FL, FL, FL, WL],
//     [WL, SP, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
//     [WL, SP, SP, SP, SP, SP, FL, FL, FL, FL, FL, FL, WL],
//     [WL, FL, FL, FL, FL, FL, FL, SP, SP, SP, SP, SP, WL],
//     [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
//     [WL, FL, FL, FL, FL, FL, FL, SP, SP, SP, SP, FL, WL],
//     [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, SP, FL, WL],
//     [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, SP, FL, WL],
//     [WL, RO, FL, FL, FL, FL, FL, FL, FL, FL, SP, KC, WL],
//     [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL],
//   ];
// }

const FL = ECanvas.FLOOR
const WL = ECanvas.WALL
const DR = ECanvas.DOOR
const SP = ECanvas.SPIKE
const KC = ECanvas.KEYCARD
const RO = ECanvas.ROBOT

export const canvas = [
[WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL],
[WL, SP, DR, SP, SP, SP, SP, SP, FL, SP, SP, SP, WL],
[WL, SP, FL, SP, FL, FL, FL, SP, FL, SP, FL, SP, WL],
[WL, SP, FL, SP, SP, SP, FL, FL, FL, FL, FL, SP, WL],
[WL, SP, FL, FL, FL, FL, FL, SP, SP, SP, SP, SP, WL],
[WL, SP, SP, SP, SP, SP, FL, FL, FL, FL, FL, SP, WL],
[WL, SP, FL, FL, FL, FL, FL, SP, SP, SP, SP, SP, WL],
[WL, SP, FL, SP, SP, SP, FL, FL, FL, FL, FL, FL, WL],
[WL, SP, FL, SP, SP, SP, SP, SP, SP, SP, SP, FL, WL],
[WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, SP, FL, WL],
[WL, SP, SP, SP, SP, SP, SP, SP, SP, FL, SP, FL, WL],
[WL, RO, FL, FL, FL, FL, FL, FL, FL, FL, SP, FL, WL],
[WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL],]

export const INITIAL_CANVAS_MAP = getCanvasMap(canvas);

export function getCanvasMap(canvas: ICanvas): ICanvasMap {
  const map: ICanvasMap = {}
  for (let y = 0; y < canvas.length; y++) {
    const canvasY = canvas[y];

    for (let x = 0; x < canvasY.length; x++) {
      const canvasYX = canvas[y][x];
      const position = { x: x, y: y };
      const key = `${x}-${y}`;

      map[key] = { tile: canvasYX, position };
    }
  }

  return map;
};

export function handleNextMovement(direction: EDirections, position: IPosition): IPosition {
   switch (direction) {
     case EDirections.UP:
       return { x: position.x, y: position.y - 1 };
 
     case EDirections.RIGHT:
       return { x: position.x + 1, y: position.y };
 
     case EDirections.DOWN:
       return { x: position.x, y: position.y + 1 };
 
     case EDirections.LEFT:
       return { x: position.x - 1, y: position.y };
   }
 }

export function checkNextMoveIsValid(nextPosition) {
  const canvasValue = canvas[nextPosition.y][nextPosition.x]

  const result = getHeroValidMoves(canvasValue)
  return result
}

function getHeroValidMoves(canvasValue) {
  return {
    valid: canvasValue === ECanvas.ROBOT || canvasValue === ECanvas.FLOOR || canvasValue === ECanvas.DOOR,
    dead: canvasValue === ECanvas.SPIKE,
    door: canvasValue === ECanvas.DOOR
  }
}
