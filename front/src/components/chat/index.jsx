import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Body, GetMessage, Sidebar} from './components'
import st from './styles.module.scss'

export const Chat = () => {
    // const socket = useContext(SocketContext)
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    useEffect(() => {
        const storageUser = localStorage.getItem('user')
        if (!storageUser) navigate('/')
        setUser(storageUser)
        console.log(user)
    }, [])

    return (
        <div className={st.chat}>
            <Sidebar/>
            <main className={st.main}>
                <Body username = {user}/>
                <GetMessage/>
            </main>
        </div>
    )
}
