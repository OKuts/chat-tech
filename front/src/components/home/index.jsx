import {useNavigate} from 'react-router-dom'
import {useContext, useEffect, useState} from 'react'
import st from './styles.module.scss'
import {SocketContext} from '../../main.jsx'

export const Home = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState('')
    const socket = useContext(SocketContext)
    const submitHandler = (e) => {
        e.preventDefault()
        localStorage.setItem('user', user)
        socket.emit('newUser', {user, socketID: socket.id})
        navigate('/chat')
    }

    useEffect(() => {
        const name = localStorage.getItem('user')
        if (name) navigate('/chat')
    }, [])


    return (
        <form onSubmit={submitHandler} className={st.container}>
            <h2 className={'header'}>Enter to chat</h2>
            <label htmlFor="user"></label>
            <input
                type="text"
                id={'user'}
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />
            <button className={'btn'}>Submit</button>
        </form>
    )
}
