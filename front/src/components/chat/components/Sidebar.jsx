import React, {useEffect, useState} from 'react'
import st from '../styles.module.scss'

export const Sidebar = ({user, socket}) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        socket.on('moveUser', data => {
            setUsers(data)
        })
    }, [socket])

    const filteredList = users.filter(el=>
        el.socketID !== socket.id && el.user !== user
    )

    return (
        <div className={st.sidebar}>
            <h1>{user}</h1>
            <h3>Users</h3>
            <ul className={st.users}>
                {filteredList.map(el => <li key={el.socketID}>{el.user}</li>)}
            </ul>
        </div>
    )
}

