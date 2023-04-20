import {useContext, useEffect, useState} from 'react'
import {SocketContext} from '../../main.jsx'
import {useNavigate} from 'react-router-dom'
import {Body, Message, Sidebar} from './components'
import st from './styles.module.scss'

export const Chat = () => {
  const socket = useContext(SocketContext)
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
        <Body/>
        <Message/>
      </main>
    </div>
  )
}
