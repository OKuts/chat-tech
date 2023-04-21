import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Body, GetMessage, Sidebar} from './components'
import st from './styles.module.scss'

export const Chat = () => {
    // const socket = useContext(SocketContext)
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [messages, setMessages] = useState([
        {user: 'Bob', message: 'Hello'},
        {user: 'Alex', message: 'Hello Bob'},
        {user: 'Bob', message: 'How are you'},
    ])

    useEffect(() => {
        const storageUser = localStorage.getItem('user')
        if (!storageUser) navigate('/')
        setUser(storageUser)
        console.log(user)
    }, [])

    return (
        <div className={st.chat}>
            <Sidebar/>
            <main className={st.main}>
                <Body username = {user} messages = {messages}/>
                <GetMessage  messages = {messages} setMessages = { setMessages }/>
            </main>
        </div>
    )
}
