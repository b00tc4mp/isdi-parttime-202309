import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import { ContentError, DuplicityError, NotFoundError } from './logic/errors'
import { Button, Form, Field } from './library'
import Feedback from './components/Feedback'





function App() {
  console.log('App')
  // useState es un hook de React. Un hook es un función especial que permite usar el estado
  // y otras características de React en componentes de función
  //const viewState = React.useState('login')
  // [<current-state>, <setter-for-next-state>]
  // devuelve dos estados, el actual y una función que permite actualizar ese estado
  // el valor inicial del estado es login

  const [view, setView] = React.useState('login')
  const [level, setLevel] = React.useState(null)
  const [message, setMessage] = React.useState(null)
  // setView('register')
  // setView('login')

  const handleRegisterShow = () => {
    setView('register')
    setMessage(null)
    setLevel(null)
  }

  const handleLoginShow = () => {
    setView('login')
    setMessage(null)
    setLevel(null)
  }

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


    setLevel(level)
    setMessage(error.message)
    console2.log(error.message, level)

  }

  const handleFeedbackAccepted = () => {
    setMessage(null)
    setLevel(null)
  }

  return <>
    {message && <Feedback level={level} message={message} onAccepted={handleFeedbackAccepted} />}
    {view === 'login' && <Login onRegisterClick={handleRegisterShow} onSuccess={handleHomeShow} onError={handleError} />}
    {/* error es una copia de la referencia handleError */}
    {/* renderiza el componente login si el estado es login. Y le pasa dos propiedades "onRegisterLink"
       y "onSuccess" */}
    {view === 'register' && <Register onLoginClick={handleLoginShow} onSuccess={handleLoginShow} onError={handleError} />}
    {view === 'home' && <Home onLogoutClick={handleLoginShow} onError={handleError} />}
  </>
}

export default App

