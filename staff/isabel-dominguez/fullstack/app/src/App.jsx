import { useState } from 'react'
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Feedback from './components/Feedback'

import Context from './Context'

import { errors } from 'com'
const { ContentError, DuplicityError, NotFoundError } = errors

function App() {
  const [view, setView] = useState('login')
  const [level, setLevel] = useState(null)
  const [message, setMessage] = useState(null)

  // Función para cambiar la vista a "register"
  const handleRegisterShow = () => {
    setView('register')
    setMessage(null)
    setLevel(null)
  }

  // Función para cambiar la vista a "login"
  const handleLoginShow = () => {
    setView('login')
    setMessage(null)
    setLevel(null)
  }

  // Función para cambiar la vista a "home"
  const handleHomeShow = () => {
    setView('home')
    setMessage(null)
    setLevel(null)
  }

  const handleError = error => {
    let level = 'fatal'

    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
      level = 'warn'
    else if (error instanceof DuplicityError || error instanceof NotFoundError)
      level = 'error'

    //   alert(error.message)
    setLevel(level)
    setMessage(error.message)

    console2.log(error.message, level)
  }

  const handleFeedbackAccepted = () => {
    setMessage(null)
    setLevel(null)
  }

  // Renderiza diferentes componentes según la vista actual
  return <>
    <Context.Provider value={{ handleError }}>
      {message && <Feedback level={level} message={message} onAccepted={handleFeedbackAccepted} />}

      {view === "login" && <Login onRegisterClick={handleRegisterShow} onSuccess={handleHomeShow} />}
      {view === "register" && <Register onLoginClick={handleLoginShow} onSuccess={handleLoginShow} />}
      {view === "home" && <Home onLogoutClick={handleLoginShow} />}
    </Context.Provider>
  </>
}

export default App;