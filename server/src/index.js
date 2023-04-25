import express from 'express'
const app = express()
import * as env from 'dotenv'
import {applyRoutes} from './rest/index.js'
import {createServer} from 'http'
import {Server} from 'socket.io'
env.config()

const httpServer = createServer(app)

const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:5173'
    }
})

const users = []
const typingUsers = {}
io.on('connection', socket => {
    io.emit('moveUser', users)

    socket.on('message', (data)=> {
        io.emit('response', data)
    })

    socket.on('leaveUser', (data)=> {
        users.splice(users.findIndex(el => el.user === data), 1)
        io.emit('moveUser', users)
    })

    socket.on('newUser', (data)=> {
        users.push(data)
        io.emit('moveUser', users)
    })

    socket.on('typing', (data)=> {
        if (!typingUsers[data.socketID]) {
            typingUsers[data.socketID] = data
            io.emit('write', Object.values(typingUsers))
        }
    })

    socket.on('disconnect', ()=> {
        users.splice(users.findIndex(el => el.socketID === socket.id), 1)
        io.emit('moveUser', users)
    })
})


applyRoutes(app)

httpServer.listen(process.env.PORT,  () => {
    console.log(`Server started on port: ${process.env.PORT}`)
})
