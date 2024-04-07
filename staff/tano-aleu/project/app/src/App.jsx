import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

import { Profile } from './components'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Feedback from './components/Feedback'
import Welcome from './pages/Welcome'

import Context from './contexts/Context'

import { errors } from 'com'
const { ContentError, DuplicityError, NotFoundError, TokenError } = errors

import logic from './logic'
import ChangeCredentials from './components/ChangeCredentials'

function App() {
  console.log('App')

  const [level, setLevel] = useState(null)
  const [message, setMessage] = useState(null)

  const navigate = useNavigate()

  const handleRegisterShow = () => {
    navigate('/register')
    setMessage(null)
    setLevel(null)
  }

  const handleLoginShow = () => {
    navigate('/login')
    setMessage(null)
    setLevel(null)
  }

  const handleHomeShow = () => {
    navigate('/')
    setMessage(null)
    setLevel(null)
  }

  const handleError = error => {
    let level = 'fatal'
    let message = error.message

    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
      level = 'warn'
    else if (error instanceof DuplicityError || error instanceof NotFoundError)
      level = 'error'
    else if (error instanceof TokenError) {
      logic.logoutUser(() => navigate('/login'))

      message = 'Session expired'
    }

    //   alert(error.message)
    setLevel(level)
    setMessage(message)

    console2.log(error.message, level)
  }

  const handleSuccess = (message) => {
    setLevel('info'); // Nivel para mensajes de éxito
    setMessage(message);
  }

  const handleFeedbackAccepted = () => {
    setMessage(null)
    setLevel(null)
  }

  const context = { handleError, handleSuccess }

  return <>


    <Context.Provider value={context}>
      {message && <Feedback level={level} message={message} onAccepted={handleFeedbackAccepted} />}

      <Routes>

        <Route path='/' element={logic.isUserLoggedIn() ? <Home /> : <Welcome />} />

        <Route path='/login' element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Login onRegisterClick={handleRegisterShow} onSuccess={handleHomeShow} />} />

        <Route path='/register' element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Register onLoginClick={handleLoginShow} onSuccess={handleLoginShow} />} />

        <Route path='/*' element={logic.isUserLoggedIn() ? <Home onLogoutClick={handleLoginShow} /> : <Navigate to="/login" />} />

        <Route path='/profile' element={<Profile />} />

        <Route path='/change-credentials' element={<ChangeCredentials />} />

      </Routes>

    </Context.Provider>


  </>
}

export default App
