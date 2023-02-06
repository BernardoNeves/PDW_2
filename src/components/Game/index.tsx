import React, { useContext } from 'react'
import { CanvasContext } from '../../context/canvas'
import Background from './Background'
import Debugger from './Debugger'

function Game() {
    const { canvas } = useContext(CanvasContext)

    return (
        // <Debugger canvas = {canvas}>
            <Background canvas = {canvas}/>
        // </Debugger>
    )
}

export default Game