import express from 'express'
import http from 'http'
import socket from './socket'

import { PORT } from '../config'

const app = express()
const server = http.createServer(app)
const io = socket(server)

import { gameAPI } from './gameAPI/index'

io.on('connection', (socket) => {
  console.log(`socket(${socket.id}) connected!`)
  gameAPI(socket);
})

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))