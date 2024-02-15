import { useState }from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Feedback from './components/Feedback'
import { errors } from 'com'

import Context from './Context'

const { ContentError, DuplicityError, NotFoundError } = errors

function App() {
  console.log('App')

  const [view, setView] = useState('login')
  const [level, setLevel] = useState(null)
  const [message, setMessage] = useState(null)

  function handleRegisterShow() {
    setView('register')
    setMessage(null)
    setLevel(null)
  }

  function handleLoginShow() {
    setView('login')
    setMessage(null)
    setLevel(null)
  }

  function handleHomeShow() {
    setView('home')
    setMessage(null)
    setLevel(null)
  }

  function handleError(error) {
    let level = 'fatal'

    if(error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) {
      level = 'warn'
    }else if(error instanceof DuplicityError || error instanceof NotFoundError) {
      level = 'error'
    }

    setLevel(level)
    setMessage(error.message)

    console2.log(error.message)

  }

  const handleFeedbackAcepted = () => {
    setMessage(null)
    setLevel(null)
  }

  return<>
    <Context.Provider value={{ handleError }}>
    {message && <Feedback level={level} message={message} onAccepted={handleFeedbackAcepted}/>}

    {view === 'login' && <Login onRegisterClick={handleRegisterShow} onSuccess={handleHomeShow} />}
    {view === 'register' && <Register onLoginClick={handleLoginShow} onSuccess={handleLoginShow} />}
    {view === 'home' && <Home onLogoutClick={handleLoginShow} />}
    </Context.Provider>
  </>
}

export default App