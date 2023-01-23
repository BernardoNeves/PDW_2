import useEventListener from '@use-it/event-listener';
import React from 'react';
import { useState } from 'react';
import { EDirections } from '../../settings/constants';
import { handleNextMovement, checkNextMoveIsValid } from '../../context/canvas/helpers';
import { IPosition } from '../../context/canvas/types'

export default function robotMoviment(position: IPosition) {
  const [robotPositionState, updatePositionState] = React.useState<IPosition>(position)
  const [direction, updateDirectionState] = useState<EDirections>(EDirections.RIGHT);

  useEventListener('keydown', (event: any) => {
   const nextPosition = handleNextMovement(event.key, robotPositionState)
   const nextMove = checkNextMoveIsValid(nextPosition)
   
   if (nextMove.valid) {
      updatePositionState(nextPosition);
      updateDirectionState(event.key);
   }

   if (nextMove.dead) {
      alert('Moreste skull emoji')
      updatePositionState(position);
      updateDirectionState(event.key);
   }

   if (nextMove.door){
      alert('THE END')
   }
});
   return {position: robotPositionState, direction: direction}
}


