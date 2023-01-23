export interface IGameStatusContext {
    dead: boolean
    updateIsDead: () => void

    winner: boolean
    updateIsWinner: () => void
}