import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import {BrowserRouter} from 'react-router-dom'
import socketIO from 'socket.io-client'
export const SocketContext = createContext(null)

ReactDOM.createRoot(document.getElementById('root')).render(
    <SocketContext.Provider value={socketIO.connect('http://localhost:5000')}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </SocketContext.Provider>,
)
