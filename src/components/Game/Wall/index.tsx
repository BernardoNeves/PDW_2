import React from 'react'
import { TILE_SIZE } from '../../../settings/constants'
import { IPosition } from '../../../context/canvas/types'

interface IProps {
  position: IPosition
}

const Wall = (props: IProps) =>{
    return (
      <div
        style={{
            width: TILE_SIZE,
            height: 48,
            backgroundImage: "url(./assets/tile.png)",
            backgroundRepeat: "no-repeat",
            position: 'absolute',
            top: props.position.y * TILE_SIZE,
            left: props.position.x * TILE_SIZE,
            
        }}
      />
    )
}

export default Wall