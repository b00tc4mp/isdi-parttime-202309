import { useState }from 'react'
//Routes:Permite conjuntar rutas, Route:Crea cada ruta
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
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
    navigate('/register')
    setMessage(null)
    setLevel(null)
  }

  function handleLoginShow() {
    navigate('/login')
    setMessage(null)
    setLevel(null)
  }

  function handleHomeShow() {
    navigate('/')
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
    else if(error instanceof TokenError) {
      logic.logoutUser(() => navigate('./login'))
    }

    setLevel(level)
    setMessage(error.message)

    console2.log(error.message)

  }

  function handleFeedbackAcepted () {
    setMessage(null)
    setLevel(null)
  }

  const context = { handleError }

  return <>
    <Context.Provider value={context}>
      {message && <Feedback level={level} message={message} onAccepted={handleFeedbackAcepted} />}

      <Routes>
        <Route path='/login' element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Login onRegisterClick={handleRegisterShow} onSuccess={handleHomeShow} />} />
        <Route path='/register' element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Register onLoginClick={handleLoginShow} onSuccess={handleLoginShow} />} />
        <Route path='/*' element={logic.isUserLoggedIn() ? <Home onLogoutClick={handleLoginShow} /> : <Navigate to="/login" />} />
      </Routes>
    </Context.Provider>
  </>
}

export default App