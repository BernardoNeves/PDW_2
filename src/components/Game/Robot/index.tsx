import React from 'react';
import useEventListener from '@use-it/event-listener';

import { TILE_SIZE } from '../../../settings/constants';
import { IPosition } from '../../../context/canvas/types'
import robotMoviment from '../../../hooks/robotMoviment'
import { EDirections } from '../../../settings/constants';

interface IProps {
  initialPosition: { x: number; y: number }
  hasKey: boolean
}

const Robot = (props: IProps) => {

  const { position, direction} = robotMoviment(props.initialPosition)

  return (
    <div
      style={{
        width: TILE_SIZE,
        height: 48,
        backgroundImage: "url(./assets/player.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: '0px -${TILE_SIZE}PX',
        position: 'absolute',
        top: TILE_SIZE * position.y,
        left: TILE_SIZE * position.x,
        transform: `scalex(${direction === EDirections.RIGHT ? 1: -1})`,  
        zIndex: 1
      }}
    />
  )
}

export default Robot