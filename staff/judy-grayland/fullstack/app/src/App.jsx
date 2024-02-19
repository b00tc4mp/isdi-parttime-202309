import { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Feedback from './components/Feedback'

import Context from './Context'

import { ContentError, DuplicityError, NotFoundError } from './logic/errors'

function App() {
  console.log('App')

  const [view, setView] = useState('login') // the hook useState() always returns an array with two elements. The first one is the current state (get), which is a value, and the second is a function that allows you to update that value.
  const [level, setLevel] = useState(null)
  const [message, setMessage] = useState(null)

  const handleRegisterShow = () => {
    setView('register')
  }

  const handleLoginShow = () => {
    setView('login')
  }

  const handleHomeShow = () => {
    setView('home')
  }
  // const loginProps ={
  //     onRegisterClick: handleRegisterShow,
  //     onSuccess: handleHomeShow
  // }

  const handleError = (error) => {
    let level = 'fatal'

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
    }
    // Si queremos desactivar nuestros errores customizados podemos borrar estas dos líneas y uncomment el alert
    // alert(error.message)
    setLevel(level)
    setMessage(error.message)

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

        {view === 'login' && (
          <Login
            //{...loginProps}
            // EN: here we're assigning properties (onRegisterClick and onSuccess) to the props object that the Login component receives as its argument: / ES: onRegisterClick y onSuccess son propiedades que enviamos en un objeto - el objeto de propiedades - al componente Login. Los envías como si fueran parámetros (son las props)
            onRegisterClick={handleRegisterShow}
            onSuccess={handleHomeShow}
          />
        )}

        {view === 'register' && (
          <Register
            onLoginClick={handleLoginShow}
            onSuccess={handleLoginShow}
          />
        )}

        {view === 'home' && <Home onLogoutClick={handleLoginShow} />}
      </Context.Provider>
    </>
  )
}

export default App
