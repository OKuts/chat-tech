import React from 'react'
import st from '../styles.module.scss'
export const Message = () => {
  return (
    <form className={st.messageBlock}>
      <textarea className={st.sendInput}/>
      <button className={st.sendButton}>Send</button>
    </form>
  )
}
