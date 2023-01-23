import React, { useContext } from "react";
import { GameStatusContext } from "../../../../context/gameStatus";

function GameStatus() {
    const { dead, winner } = useContext(GameStatusContext)

    function reload() {
        window.location.reload()
    }

    function resetGame(message: string) {
        setTimeout(() => {
            alert(message)
            reload()
        })
    }

    if (dead) {
        resetGame("Morres-te para Skill Issue :skull: - Queen Elizabeth")
    }

    if (winner){
        resetGame('Parabens Boa mereces um Premio! - Obama')
    }

    return (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          marginTop: 5,
          display: 'flex',
          alignItems: 'center',
        }}>
          <span style={{
            paddingRight: 10,
            borderRight: '2px solid white',
            color: 'white',
            fontSize: 25,
          }}>
          </span>
    
          <button style={{
            color: 'white',
            fontSize: 25,
            marginLeft: 10,
            background: 'transparent',
            border: 'none',
            cursor: 'pointer'
    
          }} onClick={reload}>⟳</button>
        </div>
      )
}

export default React.memo(GameStatus)