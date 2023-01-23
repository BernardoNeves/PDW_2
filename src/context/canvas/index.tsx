import React, { createContext, PropsWithChildren, useState } from 'react';
import { checkNextMoveIsValid, canvas } from './helpers';
import { ECanvas, ICanvas, ICanvasMoviment, IPosition } from './types';
import Movement from '../../hooks/robotMoviment'

export interface ICanvasContext {
  canvas: ICanvas;
  updateCanvas: (
    currentPosition: IPosition,
  ) => ICanvasMoviment;
}

export const CanvasContext = createContext<ICanvasContext>({
  canvas: [],
  updateCanvas: () => ({ position: { x: 0, y: 0 }, consequences: { valid: true, dead: false, chest: false, door: false } }),
});

function CanvasProvider(props: PropsWithChildren<{}>) {
  const [canvasState, setCanvasState] = useState<ICanvasContext>({
    canvas: canvas,
    updateCanvas: (currentPosition) => {
      const { position: nextPosition, direction} = Movement(currentPosition);
      const nextMove = checkNextMoveIsValid(canvasState.canvas, nextPosition);

      if (nextMove.valid) {
        setCanvasState(prevState => {
          const newCanvas = [...prevState.canvas];
          const currentValue = newCanvas[currentPosition.y][currentPosition.x] as ECanvas;

          newCanvas[currentPosition.y][currentPosition.x] = ECanvas.FLOOR;
          newCanvas[nextPosition.y][nextPosition.x] = currentValue;

          return {
            ...prevState,
            canvas: newCanvas,
          };
        });
      }

      return {
        consequences: nextMove,
        position: nextMove.valid ? nextPosition : currentPosition,
      };
    },
  });

  return <CanvasContext.Provider value={canvasState}>{props.children}</CanvasContext.Provider>;
}

export default CanvasProvider;
