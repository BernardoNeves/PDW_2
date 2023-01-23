import React from 'react'
import { TILE_SIZE } from '../../../settings/constants'

interface IProps {
  position: { x: number; y: number }
}

const Spike = (props: IProps) =>{
    return (
      <div
        style={{
            position: 'absolute',
            width: TILE_SIZE,
            height: TILE_SIZE,
            backgroundImage: "url(./assets/spike.png)",
            backgroundRepeat: "no-repeat",
            top: TILE_SIZE * props.position.y,
            left: TILE_SIZE * props.position.x,
        }}
      />
    )
}

export default Spike