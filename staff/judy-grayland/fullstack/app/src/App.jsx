import { useState } from 'react'
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

  // the hook useState() always returns an array with two elements. The first one is the current state (get), which is a value, and the second is a function that allows you to update that value.
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
  // const loginProps ={
  //     onRegisterClick: handleRegisterShow,
  //     onSuccess: handleHomeShow
  // }

  const handleError = (error) => {
    let level = 'fatal'
    let message = error.message

    if (
      error instanceof TypeError ||
      error instanceof RangeError ||
      error instanceof ContentError
    ) {
      level = 'warn'
    } else if (
      error instanceof DuplicityError ||
      error instanceof NotFoundError
    ) {
      level = 'error'
    } else if (error instanceof TokenError) {
      logic.logout(() => navigate('/login'))

      message = 'Session expired'
    }
    // Si queremos desactivar nuestros errores customizados podemos borrar estas dos líneas y uncomment el alert
    // alert(error.message)
    setLevel(level)
    setMessage(message)

    console2.log(error.message, level)
  }

  const handleFeedbackAccepted = () => {
    setMessage(null)
    setLevel(null)
  }

  const context = { handleError }

  return (
    <>
      <Context.Provider value={context}>
        {message && (
          <Feedback
            level={level}
            message={message}
            onAccepted={handleFeedbackAccepted}
          />
        )}

        {/* We replace this with the Route inside Routes below:
        {view === 'login' && (
          <Login
            //{...loginProps}
            // EN: here we're assigning properties (onRegisterClick and onSuccess) to the props object that the Login component receives as its argument: / ES: onRegisterClick y onSuccess son propiedades que enviamos en un objeto - el objeto de propiedades - al componente Login. Los envías como si fueran parámetros (son las props)
            onRegisterClick={handleRegisterShow}
            onSuccess={handleHomeShow}
          />
        )} */}

        {/* {view === 'register' && (
          <Register
            onLoginClick={handleLoginShow}
            onSuccess={handleLoginShow}
          />
        )} */}

        <Routes>
          <Route
            path="/login"
            element={
              logic.isUserLoggedIn() ? (
                <Navigate to="/" />
              ) : (
                <Login
                  onRegisterClick={handleRegisterShow}
                  onSuccess={handleHomeShow}
                />
              )
            }
          />
          <Route
            path="/register"
            element={
              logic.isUserLoggedIn() ? (
                <Navigate to="/login" />
              ) : (
                <Register
                  onLoginClick={handleLoginShow}
                  onSuccess={handleLoginShow}
                />
              )
            }
          />
          <Route
            path="/*"
            element={
              logic.isUserLoggedIn() ? (
                <Home onLogoutClick={handleLoginShow} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </Context.Provider>
    </>
  )
}

export default App
