import { Session, Player } from '../classes'
import { PlayerMovement, TargetLocation } from '../types'
import socket from '../socket'
import { SESSION_FPS } from './constants/sessionConstants'

export const session = new Session()
const io = socket()

export const gameAPI = (socket: SocketIO.Socket) => {
    const player = new Player(socket.id)
    session.addPlayer(player)
    console.log(`new player inda HOUUUUUSE | TOTAL(${session.getPlayerCount()})`)

    socket.on('playerMovement', (playerMovement: PlayerMovement) => { player.move(playerMovement) })
    socket.on('playerMainAction', (targetLocation: TargetLocation) => { player.mainAction(targetLocation, session) })
    socket.on('sessionReset', () => { session.clearSession() })

    socket.on('disconnect', () => {
        console.log(`socket(${socket.id}) disconnected!`)
        session.removePlayer(socket.id)
    })
}

setInterval(() => {
    session.handleFrame(io)
}, 1000 / SESSION_FPS)

export default gameAPI