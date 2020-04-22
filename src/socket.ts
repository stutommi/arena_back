import socketIO from 'socket.io'

let io: socketIO.Server
export default
    (server?: any) => {
        if (!io) io = socketIO(server);
        return io;
    }