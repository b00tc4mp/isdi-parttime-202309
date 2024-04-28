import { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

import { ContentError, DuplicityError, NotFoundError } from './logic/errors'

function App() {
  console.log('App')

  const [view, setView] = useState('login') // the hook useState() always returns an array with two elements. The first one is the current state (get), which is a value, and the second is a function that allows you to update that value.
  const [type, setType] = useState(null)
  const [message, setMessage] = useState(null)

  function handleRegisterShow() {
    setView('register')
  }

  function handleLoginShow() {
    setView('login')
  }

  function handleHomeShow() {
    setView('home')
  }
  // const loginProps ={
  //     onRegisterClick: handleRegisterShow,
  //     onSuccess: handleHomeShow
  // }

  // centralizamos el error handling:
  // function handleError(error) {
  //   if (
  //     error instanceof TypeError ||
  //     error instanceof RangeError ||
  //     error instanceof ContentError
  //   )
  //     console2.log(error.message, 'warn')
  //   else if (error instanceof DuplicityError || error instanceof NotFoundError)
  //     console2.log(error.message, 'error')
  //   else console2.log(error.message, 'fatal')

  //   alert(error.message)
  // }

  function handleError(error) {
    if (
      error instanceof TypeError ||
      error instanceof RangeError ||
      error instanceof ContentError
    )
      setType('warn')
    else if (error instanceof DuplicityError || error instanceof NotFoundError)
      setType('error')
    else setType('fatal')

    setMessage(error.message)
  }

  function Feedback(props) {
    let color = 'yellowgreen'
    let backgroundColor = 'transparent'

    if (props.type === 'info') color = 'dodgerblue'
    else if (props.type === 'warn') color = 'gold'
    else if (props.type === 'error') color = 'tomato'
    else if (props.type === 'fatal') {
      color = 'white'
      backgroundColor = 'tomato'
    }

    return <p style={{ color, backgroundColor }}>{props.message}</p>
  }

  return (
    <>
      {message && <Feedback type={type} message={message} />}

      {view === 'login' && (
        <Login
          //{...loginProps}
          // EN: here we're assigning properties (onRegisterClick and onSuccess) to the props object that the Login component receives as its argument: / ES: onRegisterClick y onSuccess son propiedades que enviamos en un objeto - el objeto de propiedades - al componente Login. Los envías como si fueran parámetros (son las props)
          onRegisterClick={handleRegisterShow}
          onSuccess={handleHomeShow}
          onError={handleError}
        />
      )}

      {view === 'register' && (
        <Register
          onLoginClick={handleLoginShow}
          onSuccess={handleLoginShow}
          onError={handleError}
        />
      )}

      {view === 'home' && (
        <Home onLogoutClick={handleLoginShow} onError={handleError} />
      )}
    </>
  )
}

export default App
