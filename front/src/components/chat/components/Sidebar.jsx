import React from 'react'
import st from '../styles.module.scss'
export const Sidebar = ({user}) => {
    return (
        <div className={st.sidebar}>
            <h1>{user}</h1>
            <h4 className={'header'}>Users</h4>
            <ul className={st.users}>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
        </div>
    )
}

