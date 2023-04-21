import {Route, Routes} from 'react-router-dom'
import {Home} from './components/home/index.jsx'
import {Chat} from './components/chat/index.jsx'


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/chat'} element={<Chat/>}/>
            </Routes>
        </div>
    )
}

export default App
