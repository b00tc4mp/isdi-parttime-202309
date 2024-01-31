import './utils/console2'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

import Context from './Context'
import { Feedback } from './components'
import { errors } from 'com'

import { useState } from 'react'

const { ContentError, DuplicityError, NotFoundError } = errors

// APP

function App() {

  const [view, setView] = useState('login')
  const [message, setMessage] = useState(null)
  const [level, setLevel] = useState(null)

  // Cambiamos la vista a 'REGISTER'
  const handleRegisterShow = () => {
    setView('register')
    setMessage(null)
    setLevel(null)
  }

  // Cambiamos la vista a 'LOGIN'
  const handleLoginShow = () => {
    setView('login')
    setMessage(null)
    setLevel(null)
  }

  // Cambiamos la vista a 'HOME'
  const handleHomeShow = () => {
    setView('home')
    setMessage(null)
    setLevel(null)
  }

  // Manejo general errores & alerts
  const handleError = (error) => {
    let level = 'fatal'

    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
      level = 'warn'
    else if (error instanceof DuplicityError || error instanceof NotFoundError)
      level = 'error'

    setLevel(level)
    console2.log(error.message, level)

    setMessage(error.message)
  }

  return <>
    <Context.Provider value={{ handleError }}>
      {message && <Feedback level={level} message={message} />}

      {view === 'login' && <Login onRegisterClick={handleRegisterShow} onSuccess={handleHomeShow} />}
      {view === 'register' && <Register onLoginClick={handleLoginShow} onSuccess={handleLoginShow} />}
      {view === 'home' && <Home onLogoutClick={handleLoginShow} />}
    </Context.Provider>
  </>
}

export default App