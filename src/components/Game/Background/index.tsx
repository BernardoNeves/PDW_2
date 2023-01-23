import React from "react"
import Robot from "../Robot"
import { GAME_SIZE } from "../../../settings/constants"
import Spike from "../Spike"
import Door from "../Door"
import Wall from "../Wall"
import { canvas } from "../../../context/canvas/helpers"
import { ECanvas } from "../../../context/canvas/types"


function getCanvasMap() {
  const array: JSX.Element[] = []

  for (let y = 0; y < canvas.length; y++) {
    const canvasY = canvas[y];

    for (let x = 0; x > canvasY.length; x++) {
      const canvasYX = canvasY[x]

      const position = { x: x, y: y}
      const text = canvas[x][y] || canvasYX
      const key = `${x}-${y}`

      if (text === ECanvas.ROBOT) {
        array.push(<Robot key = {key} initialPosition = {position}/>)
      }

      if (text === ECanvas.DOOR) {
        array.push(<Door key = {key} position = {position}/>)
      }

      if (text === ECanvas.SPIKE) {
        array.push(<Spike key = {key} position = {position}/>)
      }
      
    }
  }
  
  return array
}

const elements = getCanvasMap()
const Board = () => {

  return (
    <div>
      {elements}
      <Robot initialPosition={{x: 1, y: 11}}/>
      <Door position={{x:2, y:1}}/>
      <Spike position={{x:1, y:1}}/>
      <Spike position={{x:1, y:2}}/>
      <Spike position={{x:1, y:3}}/>
      <Spike position={{x:1, y:4}}/>
      <Spike position={{x:1, y:5}}/>
      <Spike position={{x:2, y:5}}/>
      <Spike position={{x:3, y:1}}/>
      <Spike position={{x:3, y:2}}/>
      <Spike position={{x:3, y:3}}/>
      <Spike position={{x:3, y:5}}/>
      <Spike position={{x:4, y:3}}/>
      <Spike position={{x:4, y:5}}/>
      <Spike position={{x:5, y:3}}/>
      <Spike position={{x:5, y:5}}/>
      <Spike position={{x:7, y:6}}/>
      <Spike position={{x:7, y:8}}/>
      <Spike position={{x:8, y:6}}/>
      <Spike position={{x:8, y:8}}/>
      <Spike position={{x:9, y:6}}/>
      <Spike position={{x:9, y:8}}/>
      <Spike position={{x:10, y:6}}/>
      <Spike position={{x:10, y:8}}/>
      <Spike position={{x:10, y:9}}/>
      <Spike position={{x:10, y:10}}/>
      <Spike position={{x:10, y:11}}/>
      <Spike position={{x:11, y:6}}/>
      <Spike position={{x:4, y:1}}/>
      <Spike position={{x:5, y:1}}/>
      <Spike position={{x:6, y:1}}/>
      <Spike position={{x:7, y:1}}/>
      <Spike position={{x:9, y:1}}/>
      <Spike position={{x:10, y:1}}/>
      <Spike position={{x:11, y:1}}/>
      <Spike position={{x:7, y:2}}/>
      <Spike position={{x:9, y:2}}/>
      <Spike position={{x:11, y:2}}/>
      <Spike position={{x:11, y:4}}/>
      <Spike position={{x:11, y:3}}/>
      <Spike position={{x:11, y:5}}/>
      <Spike position={{x:10, y:4}}/>
      <Spike position={{x:9, y:4}}/>
      <Spike position={{x:8, y:4}}/>
      <Spike position={{x:7, y:4}}/>
      <Spike position={{x:1, y:10}}/>
      <Spike position={{x:2, y:10}}/>
      <Spike position={{x:3, y:10}}/>
      <Spike position={{x:4, y:10}}/>
      <Spike position={{x:5, y:10}}/>
      <Spike position={{x:6, y:10}}/>
      <Spike position={{x:7, y:10}}/>
      <Spike position={{x:8, y:10}}/>
      <Spike position={{x:6, y:8}}/>
      <Spike position={{x:5, y:8}}/>
      <Spike position={{x:4, y:8}}/>
      <Spike position={{x:3, y:8}}/>
      <Spike position={{x:1, y:8}}/>
      <Spike position={{x:1, y:7}}/>
      <Spike position={{x:1, y:6}}/>
      <Spike position={{x:3, y:7}}/>
      <Spike position={{x:4, y:7}}/>
      <Spike position={{x:5, y:7}}/>

      <Wall position={{x:0, y:0}}/>
      <Wall position={{x:1, y:0}}/>
      <Wall position={{x:2, y:0}}/>
      <Wall position={{x:3, y:0}}/>
      <Wall position={{x:4, y:0}}/>
      <Wall position={{x:5, y:0}}/>
      <Wall position={{x:6, y:0}}/>
      <Wall position={{x:7, y:0}}/>
      <Wall position={{x:8, y:0}}/>
      <Wall position={{x:9, y:0}}/>
      <Wall position={{x:10, y:0}}/>
      <Wall position={{x:11, y:0}}/>
      <Wall position={{x:12, y:0}}/>
      <Wall position={{x:12, y:1}}/>
      <Wall position={{x:12, y:2}}/>
      <Wall position={{x:12, y:3}}/>
      <Wall position={{x:12, y:4}}/>
      <Wall position={{x:12, y:5}}/>
      <Wall position={{x:12, y:6}}/>
      <Wall position={{x:12, y:7}}/>
      <Wall position={{x:12, y:8}}/>
      <Wall position={{x:12, y:9}}/>
      <Wall position={{x:12, y:10}}/>
      <Wall position={{x:12, y:11}}/>
      <Wall position={{x:12, y:12}}/>
      <Wall position={{x:12, y:12}}/>
      <Wall position={{x:11, y:12}}/>
      <Wall position={{x:10, y:12}}/>
      <Wall position={{x:9, y:12}}/>
      <Wall position={{x:8, y:12}}/>
      <Wall position={{x:7, y:12}}/>
      <Wall position={{x:6, y:12}}/>
      <Wall position={{x:5, y:12}}/>
      <Wall position={{x:4, y:12}}/>
      <Wall position={{x:3, y:12}}/>
      <Wall position={{x:2, y:12}}/>
      <Wall position={{x:1, y:12}}/>
      <Wall position={{x:0, y:12}}/>
      <Wall position={{x:0, y:11}}/>
      <Wall position={{x:0, y:10}}/>
      <Wall position={{x:0, y:9}}/>
      <Wall position={{x:0, y:8}}/>
      <Wall position={{x:0, y:7}}/>
      <Wall position={{x:0, y:6}}/>
      <Wall position={{x:0, y:5}}/>
      <Wall position={{x:0, y:4}}/>
      <Wall position={{x:0, y:3}}/>
      <Wall position={{x:0, y:2}}/>
      <Wall position={{x:0, y:1}}/>

      <img src="./assets/night.png" alt="" width={GAME_SIZE} height={GAME_SIZE}/>
    </div>
  );
}

export default Board;
