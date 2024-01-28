import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import { ContentError, DuplicityError, NotFoundError } from './logic/errors'

function App() {
  console.log('App')
  // useState es un hook de React. Un hook es un función especial que permite usar el estado
  // y otras características de React en componentes de función
  //const viewState = React.useState('login')
  // [<current-state>, <setter-for-next-state>]
  // devuelve dos estados, el actual y una función que permite actualizar ese estado
  // el valor inicial del estado es login

  const [view, setView] = React.useState('login')
  // setView('register')
  // setView('login')

  function handleRegisterShow() {
    setView('register')
  }

  function handleLoginShow() {
    setView('login')
  }

  function handleHomeShow() {
    setView('home')
  }

  function handleError(error) {
    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
      console2.log(error.message, 'warn')
    else if (error instanceof DuplicityError || error instanceof NotFoundError)
      console2.log(error.message, 'error')
    else
      console2.log(error.message, 'fatal')

    alert(error.message)
  }

  return <>
    {view === 'login' && <Login onRegisterClick={handleRegisterShow} onSuccess={handleHomeShow} onError={handleError} />}
    {/* renderiza el componente login si el estado es login. Y le pasa dos propiedades "onRegisterLink"
       y "onSuccess" */}
    {view === 'register' && <Register onLoginClick={handleLoginShow} onSuccess={handleLoginShow} onError={handleError} />}
    {view === 'home' && <Home onLogoutClick={handleLoginShow} onError={handleError} />}
  </>
}

export default App

