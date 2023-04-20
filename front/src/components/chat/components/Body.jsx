import React from 'react'
import st from '../styles.module.scss'

export const Body = () => {
  return (
    <div className={st.bodyWrapper}>
      <header className={st.header}>
        <button className={st.sendButton}>Exit</button>
      </header>
      <div className="chats">
        <p>You: </p>
        <div className={st.message}>
          <p>Hello</p>
        </div>
      </div>
      <div className={st.container}>
        <div className="chats">
          <p>You: </p>
          <div className={st.messageMy}>
            <p>Hello</p>
          </div>
        </div>
        <div className="chats">
          <p>You: </p>
          <div className={st.message}>
            <p>Hello</p>
          </div>
        </div>
      </div>

    </div>
  )
}
