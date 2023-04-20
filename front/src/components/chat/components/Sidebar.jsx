import React from 'react'
import st from '../styles.module.scss'
export const Sidebar = () => {
  return (
    <div className={st.sidebar}>
      <h4 className={'header'}>Users</h4>
      <ul className={st.users}>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
  )
}

