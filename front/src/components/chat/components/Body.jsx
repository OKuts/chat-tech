import React, {useEffect} from 'react'
import st from '../styles.module.scss'
import {useNavigate} from 'react-router-dom'
import {Message} from './Message.jsx'

const messages = [
    {user: 'Bob', message: 'Hello'},
    {user: 'Alex', message: 'Hello Bob'},
    {user: 'Bob', message: 'How are you'},
]
export const Body = ({username}) => {
    const navigate = useNavigate()
    const handleExit = () => {
        localStorage.removeItem('user')
        navigate('/')
    }
    console.log(username)

    return (
        <div className={st.bodyWrapper}>
            <header className={st.header}>
                <button className={st.sendButton} onClick={handleExit}>Exit</button>
            </header>
            {messages.map((message, i) =>
                <Message key={i} msg = {message} myself = {message.user === username}/>)}
        </div>
    )
}
