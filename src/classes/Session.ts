import Player from './Player'
import { Position, PlayerId, MovingObject } from '../types'
import { moveObject, handleCollisions } from '../utils'


class Session {
    players: Player[]
    movingObjects: MovingObject[]

    constructor() {
        this.players = []
        this.movingObjects = []
    }
    getPlayers(): Player[] { return this.players }
    getPlayerCount(): number { return this.players.length }

    addPlayer(player: Player): void { this.players.push(player) }
    removePlayer(playerId: PlayerId): void {
        this.players.splice(this.players.findIndex((p: Player) => p.getId() === playerId), 1)
    }

    addMovingObject(movingObject: MovingObject): void {
        this.movingObjects.push(movingObject)
    }

    getClientData(): Player[] {
        return this.players
    }

    handleFrame(io: any): void {
        io.emit('state', { players: this.players, movingObjects: this.movingObjects })
        this.handleMovingObjects()
    }

    handleMovingObjects(): void {
        this.movingObjects.forEach(mv => {
            if (mv.type.name === 'bullet') {
                moveObject(mv.currentLocation, mv.positionChange)
            }
        })
        handleCollisions(this.players, this.movingObjects, this)
    }

    removeManyMovingObjects(idArr: number[]): void {
        this.movingObjects = this.movingObjects.filter((_, i) => !idArr.includes(i))
    }

    clearSession(): void {
        this.players = []
        this.movingObjects = []
    }
}

export default Session