import st from '../styles.module.scss'
import {useNavigate} from 'react-router-dom'
import {Message} from './Message.jsx'
import {useEffect, useState} from 'react'

export const Body = ({username, messages, socket}) => {
    const navigate = useNavigate()
    const [typingUsers, setTypingUsers] = useState([])
    const handleExit = () => {
        socket.emit('leaveUser', username)
        localStorage.removeItem('user')
        navigate('/')
    }

    useEffect(() => {
        socket.on('write', (data) => {
            setTypingUsers(data)
            console.log(data)
        })
    }, [])

    console.log(typingUsers)

    return (
        <div className={st.bodyWrapper}>
            <header className={st.header}>
                <button className={st.sendButton} onClick={handleExit}>Exit</button>
            </header>
            <div className={st.write}>
                {typingUsers.length !== 0 && <span>Write: </span>}
                {typingUsers.map(el => el.name).join(', ')}
            </div>
            {messages.map(message =>
                <Message key={message.id} msg = {message} myself = {message.name === username}/>)}
        </div>
    )
}
