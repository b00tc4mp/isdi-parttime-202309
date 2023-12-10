import Login from "./views/Login"
import Register from "./views/Register"
import Home2 from "./views/Home2"

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
    {view === 'home' && <Home2 onLogoutClick={handleLoginShow} />}
  </>
}

export default App