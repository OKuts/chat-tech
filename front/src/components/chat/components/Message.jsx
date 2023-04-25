import st from '../styles.module.scss'
import React from 'react'

export const Message = ({msg, myself}) => {
    return (
        <div className="chats">
            <p>{myself ? 'You': msg.name}: </p>
            <div className={myself ? st.messageMy : st.message}>
                <span>{msg.text}</span>
            </div>
        </div>)
}
