// The ".jsx" file extension in React indicates that the file contains JavaScript code with JSX syntax
// JSX allows you to write code that resembles the structure of the user interface you want to represent
// This JSX code is then compiled into regular JavaScript function calls, which are executed in the browser

// Import React Dependencies and Components
import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Feedback from './components/Feedback'

import Context from './Context'

import { errors } from 'com'
const { ContentError, DuplicityError, NotFoundError, TokenError } = errors

import logic from './logic'


// Define the App Component
// The App component imports three other components: Login, Register, and Home

function App() {
  console.log('App')

  // State Management with React.useState
  // It manages the state using React.useState to determine which view to display 
  const [level, setLevel] = useState(null)
  const [message, setMessage] = useState(null)

  const navigate = useNavigate()

  // Event Handling Functions

  const handleRegisterShow = () => {
    navigate('/register')
    setMessage(null)
    setLevel(null)
  }

  const handleLoginShow = () => {
    navigate('/login')
    setMessage(null)
    setLevel(null)
  }

  const handleHomeShow = () => {
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

      message = 'Session expired 🥶'
    }

    //   alert(error.message)
    setLevel(level)
    setMessage(message)

    console2.log(error.message, level)
  }

  const handleFeedbackAccepted = () => {
    setMessage(null)
    setLevel(null)
  }

  const context = { handleError }

  // Render JSX Based on State
  return <>
    <Context.Provider value={context}>
      {message && <Feedback level={level} message={message} onAccepted={handleFeedbackAccepted} />}

      <Routes>
        <Route path='/login' element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Login onRegisterClick={handleRegisterShow} onSuccess={handleHomeShow} />} />
        <Route path='/register' element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Register onLoginClick={handleLoginShow} onSuccess={handleLoginShow} />} />
        <Route path='/*' element={logic.isUserLoggedIn() ? <Home onLogoutClick={handleLoginShow} /> : <Navigate to="/login" />} />
      </Routes>

    </Context.Provider >
  </>
}

export default App

// these component work together in the larger application, 
// where the App component manages the overall state and renders different views, 
// and the Register, Login and Home component handles user registration with interactions triggered from within the differents forms]