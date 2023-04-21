import st from '../styles.module.scss'
import {useNavigate} from 'react-router-dom'
import {Message} from './Message.jsx'

export const Body = ({username, messages}) => {
    const navigate = useNavigate()
    const handleExit = () => {
        localStorage.removeItem('user')
        navigate('/')
    }

    return (
        <div className={st.bodyWrapper}>
            <header className={st.header}>
                <button className={st.sendButton} onClick={handleExit}>Exit</button>
            </header>
            {messages.map((message, i) =>
                <Message key={i} msg = {message} myself = {message.name === username}/>)}
        </div>
    )
}
