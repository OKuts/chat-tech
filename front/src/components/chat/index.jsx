import {useContext, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Body, GetMessage, Sidebar} from './components'
import st from './styles.module.scss'
import {SocketContext} from '../../main.jsx'

export const Chat = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [messages, setMessages] = useState([])
    const socket = useContext(SocketContext)

    useEffect(() => {
        const storageUser = localStorage.getItem('user')
        if (!storageUser) navigate('/')
        setUser(storageUser)
    }, [])

    useEffect(() => {
        socket.on('response', (data)=> {
            setMessages((prevState)=> [...prevState, data])
        })
    }, [socket])


    console.log(messages)
    return (
        <div className={st.chat}>
            <Sidebar user={user}/>
            <main className={st.main}>
                <Body username = {user} messages = {messages}/>
                <GetMessage username = {user} socket={socket}/>
            </main>
        </div>
    )
}
