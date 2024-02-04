import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from "./pages/Register"
import Home from "./pages/Home"
import Feedback from './components/Feedback'

import Context from './Context'
import { errors } from 'com'

const { ContentError, DuplicityError, NotFoundError, TokenError } = errors
import logic from './logic'


function App() {
  console.log('App')

  const [level, setLevel] = useState(null)
  const [message, setMessage] = useState(null)

  const navigate = useNavigate()

  function handleRegisterShow() {
    //setView('register')
    navigate('/register')
    setMessage(null)
    setLevel(null)
  }

  function handleLoginShow() {
    navigate('/login')
    // setView('login')
    setMessage(null)
    setLevel(null)
  }

  function handleHomeShow() {
    navigate('/')
    //setView('home')
    setMessage(null)
    setLevel(null)
  }

  function handleError(error) {
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

  const handleFeedbackAccepted = () => {
    setMessage(null)
    setLevel(null)
  }

  const contextApp = { handleError }


  return <> <Context.Provider value={contextApp}>
    {message && <Feedback level={level} message={message} onAccepted={handleFeedbackAccepted} />}



    <Routes>
      <Route path='/login' element={logic.isUserLoggedIn() ? <Navigate to='/' /> : <Login onRegisterClick={handleRegisterShow} onSuccess={handleHomeShow} />} />
      <Route path='/register' element={logic.isUserLoggedIn() ? <Navigate to='/' /> : <Register onLoginClick={handleLoginShow} onSuccess={handleLoginShow} />} />
      <Route path='/' element={logic.isUserLoggedIn() ? <Home onLogoutClick={handleLoginShow} /> : <Navigate to='/login' />} />
    </Routes>
  </Context.Provider>
  </>
}

export default App

