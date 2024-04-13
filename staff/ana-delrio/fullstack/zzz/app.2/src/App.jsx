// The ".jsx" file extension in React indicates that the file contains JavaScript code with JSX syntax
// JSX allows you to write code that resembles the structure of the user interface you want to represent
// This JSX code is then compiled into regular JavaScript function calls, which are executed in the browser

// Import React Dependencies and Components
import React from 'react'
import Login from './views/Login'
import Register from './views/Register'
import Home from './views/Home'


// Define the App Component
// The App component imports three other components: Login, Register, and Home

function App() {
  console.log('App')

  // State Management with React.useState
  // It manages the state using React.useState to determine which view to display 
  const [view, setView] = React.useState('login')

  // Event Handling Functions
  function handleRegisterShow() {
    setView('register')
  }

  function handleLoginShow() {
    setView('login')
  }

  function handleHomeShow() {
    setView('home')
  }

  // Render JSX Based on State
  return <>
    {view === 'login' && <Login onRegisterClick={handleRegisterShow} onSuccess={handleHomeShow} />}
    {view === 'register' && <Register onLoginClick={handleLoginShow} onSuccess={handleLoginShow} />}
    {view === 'home' && <Home onLogoutClick={handleLoginShow} />}
  </>
}

export default App

// these component work together in the larger application, 
// where the App component manages the overall state and renders different views, 
// and the Register, Login and Home component handles user registration with interactions triggered from within the differents forms