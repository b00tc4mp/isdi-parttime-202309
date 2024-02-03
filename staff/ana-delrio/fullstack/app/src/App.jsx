// The ".jsx" file extension in React indicates that the file contains JavaScript code with JSX syntax
// JSX allows you to write code that resembles the structure of the user interface you want to represent
// This JSX code is then compiled into regular JavaScript function calls, which are executed in the browser

// Import React Dependencies and Components
import { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

import { ContentError, DuplicityError, NotFoundError } from './logic/errors'


// Define the App Component
// The App component imports three other components: Login, Register, and Home

function App() {
  console.log('App')

  // State Management with React.useState
  // It manages the state using React.useState to determine which view to display 
  const [view, setView] = useState('login')
  const [type, setType] = useState(null)
  const [message, setMessage] = useState(null)

  // Event Handling Functions
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

  // Render JSX Based on State
  return <>
    {message && <Feedback type={type} message={message} />}
    {view === 'login' && <Login onRegisterClick={handleRegisterShow} onSuccess={handleHomeShow} onError={handleError} />}
    {view === 'register' && <Register onLoginClick={handleLoginShow} onSuccess={handleLoginShow} onError={handleError} />}
    {view === 'home' && <Home onLogoutClick={handleLoginShow} onError={handleError} />}
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

// these component work together in the larger application, 
// where the App component manages the overall state and renders different views, 
// and the Register, Login and Home component handles user registration with interactions triggered from within the differents forms