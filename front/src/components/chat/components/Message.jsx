import st from '../styles.module.scss'
import React from 'react'

export const Message = ({msg, myself}) => {
    return (
        <div className="chats">
            <p>{myself ? 'You': msg.user}: </p>
            <div className={myself ? st.messageMy : st.message}>
                <p>{msg.message}</p>
            </div>
        </div>)
}
