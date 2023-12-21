import React from 'react'
import Login from './views/Login'
import Register from './views/Register'
import Home from './views/Home'

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

  return <>
    {view === 'login' && <Login onRegisterClick={handleRegisterShow} onSuccess={handleHomeShow} />}
    {/* renderiza el componente login si el estado es login. Y le pasa dos propiedades "onRegisterLink"
       y "onSuccess" */}
    {view === 'register' && <Register onLoginClick={handleLoginShow} onSuccess={handleLoginShow} />}
    {view === 'home' && <Home onLogoutClick={handleLoginShow} />}
  </>
}

export default App
