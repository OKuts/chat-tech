import React, {useState} from 'react'
import st from '../styles.module.scss'

export const GetMessage = ({username, socket}) => {
    const [message, setMessage] = useState('')

    const handleSend = (e) => {
        e.preventDefault()
        if (message.trim() && username) {
            socket.emit('message', {
                id: `${socket.id}`,
                name: username,
                text: message,
                socketID: socket.id
            })
        }
    }

    return (
        <form className={st.messageBlock} onSubmit={handleSend}>
            <textarea
                className={st.sendInput}
                value={message}
                onChange={(e)=> setMessage(e.target.value)}
            />
            <button
                className={st.sendButton}
                disabled={!message}
            >Send</button>
        </form>
    )
}
