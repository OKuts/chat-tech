import React, {useState} from 'react'
import st from '../styles.module.scss'

export const GetMessage = () => {
    const [message, setMessage] = useState('')

    const handleSend = (e) => {
        e.preventDefault()
        console.log({
            user: localStorage.getItem('user'),
            message
        })
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
