import express from 'express'
import http from 'http'
import socket from './socket'
import path from 'path'

import { PORT } from '../config'

const app = express()
const server = http.createServer(app)
const io = socket(server)

app.use(express.static(__dirname + '/../public'))

import { gameAPI } from './gameAPI/index'

io.on('connection', (socket) => {
  console.log(`socket(${socket.id}) connected!`)
  gameAPI(socket);
})

app.get('/', (_request, response) => {
  response.sendFile(path.join(__dirname, '../public/index.html'));
})

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))