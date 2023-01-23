import React, { createContext, PropsWithChildren, useState} from 'react'
import { IGameStatusContext } from './types'

export const GameStatusContext = createContext<IGameStatusContext>({
    dead: false,
    updateIsDead: () => null,

    winner: false,
    updateIsWinner: () => null,
})