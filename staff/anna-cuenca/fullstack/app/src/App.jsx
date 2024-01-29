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
  const [type, setType] = React.useState(null)
  const [message, setMessage] = React.useState(null)
  // setView('register')
  // setView('login')

  function handleRegisterShow() {
    setView('register')
    setMessage(null)
    setType(null)
  }

  function handleLoginShow() {
    setView('login')
    setMessage(null)
    setType(null)
  }

  function handleHomeShow() {
    setView('home')
    setMessage(null)
    setType(null)
  }

  function handleError(error) {
    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
      setType('warn')
    else if (error instanceof DuplicityError || error instanceof NotFoundError)
      setType('error')
    else
      setType('fatal')

    setMessage(error.message)
  }

  return <>
    {message && <Feedback type={type} message={message} />}
    {view === 'login' && <Login onRegisterClick={handleRegisterShow} onSuccess={handleHomeShow} onError={handleError} />}
    {/* renderiza el componente login si el estado es login. Y le pasa dos propiedades "onRegisterLink"
       y "onSuccess" */}
    {view === 'register' && <Register onLoginClick={handleLoginShow} onSuccess={handleLoginShow} onError={handleError} />}
    {view === 'home' && <Home onLogoutClick={handleLoginShow} onError={handleError} />}
  </>
}

export default App

function Feedback(props) {

  const [isVisible, setIsVisible] = React.useState(true)

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

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div style={{ position: 'fixed', top: '20%', left: '20%', right: '20%', padding: '20px', border: '1px solid black', backgroundColor: 'white', zIndex: 1000 }}>
      <p style={{ color, backgroundColor }}>{props.message}</p>
      <button onClick={handleClose}>Aceptar</button>
    </div>
  )
}