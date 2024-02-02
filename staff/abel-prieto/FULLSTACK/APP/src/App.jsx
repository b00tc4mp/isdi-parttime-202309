import './utils/console2'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

import Context from './Context'
import logic from './logic'
import { Feedback } from './components'
import { errors } from 'com'

import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

const { ContentError, DuplicityError, NotFoundError } = errors

// APP

function App() {

  const [view, setView] = useState('login')
  const [message, setMessage] = useState(null)
  const [level, setLevel] = useState(null)

  const navigate = useNavigate()

  // Cambiamos la vista a 'REGISTER'
  const handleRegisterShow = () => {
    navigate('/register')
    setMessage(null)
    setLevel(null)
  }

  // Cambiamos la vista a 'LOGIN'
  const handleLoginShow = () => {
    navigate('/login')
    setMessage(null)
    setLevel(null)
  }

  // Cambiamos la vista a 'HOME'
  const handleHomeShow = () => {
    navigate('/')
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

      <Routes>
        <Route path="/login" element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Login onRegisterClick={handleRegisterShow} onSuccess={handleHomeShow} />}></Route>
        <Route path="/register" element={logic.isUserLoggedIn() ? <Navigate to="/login" /> : <Register onLoginClick={handleLoginShow} onSuccess={handleLoginShow} />}></Route>
        <Route path="/" element={logic.isUserLoggedIn() ? <Home onLogoutClick={handleLoginShow} /> : <Navigate to="login" />}></Route>
      </Routes>
    </Context.Provider>
  </>
}

export default App