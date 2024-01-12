import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"

import { useState } from "react"  // Import method useState 

// APP

function App() {

  const [view, setView] = useState('login')

  function handleRegisterShow() {
    setView('register')
    // Cambiamos la vista a 'REGISTER'
  }

  function handleLoginShow() {
    setView('login')
    // Cambiamos la vista a 'LOGIN'
  }

  function handleHomeShow() {
    setView('home')
    // Cambiamos la vista a 'HOME'
  }

  return <>
    {view === 'login' && <Login onRegisterClick={handleRegisterShow} onSuccess={handleHomeShow} />}
    {view === 'register' && <Register onLoginClick={handleLoginShow} onSuccess={handleLoginShow} />}
    {view === 'home' && <Home onLogoutClick={handleLoginShow} />}
  </>
}

export default App