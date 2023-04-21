import express from 'express';
const app = express();
import * as env from 'dotenv';
import {applyRoutes} from './rest/index.js';
import {createServer} from 'http';
import {Server} from 'socket.io';
env.config();

const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:5173'
    }
});

io.on('connection', socket => {
    console.log(`${socket.id} connected`);

    socket.on('message', (data)=> {
        console.log(data);
        io.emit('response', data);
    });

    socket.on('disconnect', ()=> {
        console.log(`${socket.id} disconnected`);
    });
});


applyRoutes(app);

httpServer.listen(process.env.PORT,  () => {
    console.log(`Server started on port: ${process.env.PORT}`);
});
