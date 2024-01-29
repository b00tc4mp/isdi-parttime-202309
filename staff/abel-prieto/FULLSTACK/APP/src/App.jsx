import "./utils/console2"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"

import { useState } from "react"  // Import method useState 
import errors from "./logic/errors"

// APP

function App() {

  const [view, setView] = useState('login')
  const [message, setMessage] = useState(null)
  const [type, setType] = useState(null)

  function handleRegisterShow() {
    setView('register')
    setMessage(null)
    setType(null)
    // Cambiamos la vista a 'REGISTER'
  }

  function handleLoginShow() {
    setView('login')
    setMessage(null)
    setType(null)
    // Cambiamos la vista a 'LOGIN'
  }

  function handleHomeShow() {
    setView('home')
    setMessage(null)
    setType(null)
    // Cambiamos la vista a 'HOME'
  }

  // Manejo general errores & alerts
  function handleError(error) {
      if (error instanceof TypeError || error instanceof RangeError || error instanceof errors.ContentError) {
        setType('warn')
      } else if (error instanceof errors.DuplicityError || error instanceof errors.NotFoundError) {
        setType('error')
      } else {
        setType('fatal')
      }

      setMessage(error.message)
  }

  return <>
    {message && <Feedback type={type} message={message} />}
    {view === 'login' && <Login onRegisterClick={handleRegisterShow} onSuccess={handleHomeShow} onError={handleError}/>}
    {view === 'register' && <Register onLoginClick={handleLoginShow} onSuccess={handleLoginShow} onError={handleError}/>}
    {view === 'home' && <Home onLogoutClick={handleLoginShow} onError={handleError}/>}
  </>
}

export default App

function Feedback(props) {
  let color = 'yellowgreen'
  let backgroundColor = 'transparent'

  if (props.type === 'info')
    color = 'dodgerblue'
  else if (props.type === 'warn')
    color = 'gold'
  else if (props.type === 'error')
    color = 'tomato'
  else if (props.type === 'fatal') {
    color = 'white'
    backgroundColor = 'tomato'
  }

  return <p style={{ color, backgroundColor }}>{props.message}</p>
}