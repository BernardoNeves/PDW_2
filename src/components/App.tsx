import React from 'react'
import CanvasProvider from '../context/canvas';
import { GameStatusContext } from '../context/gameStatus';
import { GAME_SIZE } from '../settings/constants';
import './App.css'
import Game from './Game';

function App() {
  return (
    <div className="App">
      <div style={{ position: "relative", width: GAME_SIZE, height: GAME_SIZE}}>
        <CanvasProvider>
          <Game/>
        </CanvasProvider>
      </div>
    </div>
  )
}

export default App;
