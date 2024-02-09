import React from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'


import logic from './logic'

import { Button, Form, Field } from './library'
import Feedback from './components/Feedback'

import Context from './Context'
import { errors } from 'com'

const { ContentError, DuplicityError, NotFoundError, TokenError } = errors






function App() {
  console.log('App')
  // useState es un hook de React. Un hook es un función especial que permite usar el estado
  // y otras características de React en componentes de función
  //const viewState = React.useState('login')
  // [<current-state>, <setter-for-next-state>]
  // devuelve dos estados, el actual y una función que permite actualizar ese estado
  // el valor inicial del estado es login

  //const [view, setView] = React.useState('login')
  const [level, setLevel] = React.useState(null)
  const [message, setMessage] = React.useState(null)


  const navigate = useNavigate()

  const handleRegisterShow = () => {
    //setView('register')
    navigate('/register')
    setMessage(null)
    setLevel(null)
  }

  const handleLoginShow = () => {
    //setView('login')
    navigate('/login')
    setMessage(null)
    setLevel(null)
  }

  const handleHomeShow = () => {
    //setView('home')
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



    setLevel(level)
    setMessage(message)
    console2.log(error.message, level)

  }

  const handleFeedbackAccepted = () => {
    setMessage(null)
    setLevel(null)
  }

  const context = { handleError }
  // todos los compos que estan en context.provider pueden acceder al objeto, a lo que esté dentro de {{}}
  return <>
    <Context.Provider value={context}>
      {message && <Feedback level={level} message={message} onAccepted={handleFeedbackAccepted} />}
      {/* {view === 'login' && <Login onRegisterClick={handleRegisterShow} onSuccess={handleHomeShow} />} */}
      {/* error es una copia de la referencia handleError */}
      {/* renderiza el componente login si el estado es login. Y le pasa dos propiedades "onRegisterLink"
       y "onSuccess" */}
      {/* {view === 'register' && <Register onLoginClick={handleLoginShow} onSuccess={handleLoginShow} />} */}
      {/* {view === 'home' && <Home onLogoutClick={handleLoginShow} />} */}

      <Routes>
        <Route path='/login' element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Login onRegisterClick={handleRegisterShow} onSuccess={handleHomeShow} />} />
        <Route path='/register' element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Register onLoginClick={handleLoginShow} onSuccess={handleLoginShow} />} />
        <Route path='/*' element={logic.isUserLoggedIn() ? <Home onLogoutClick={handleLoginShow} /> : <Navigate to="/login" />} />
      </Routes>
    </Context.Provider>
  </>
}

export default App

