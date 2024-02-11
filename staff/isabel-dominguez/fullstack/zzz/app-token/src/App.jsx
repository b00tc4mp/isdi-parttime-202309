import React from "react"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"

function App() {
  // Utiliza el estado de React para controlar la vista actual
  const viewState = React.useState("login")
  // [<current-state>, <setter-for-next-state>]

  // Extrae el estado actual y el setter del array devuelto por useState
  const view = viewState[0]
  const setView = viewState[1]

  // Función para cambiar la vista a "register"
  function handleRegisterShow() {
    setView("register")
  }

  // Función para cambiar la vista a "login"
  function handleLoginShow() {
    setView("login")
  }

  // Función para cambiar la vista a "home"
  function handleHomeShow() {
    setView("home")
  }

  // Renderiza diferentes componentes según la vista actual
  return <>
    {view === "login" && <Login onRegisterClick={handleRegisterShow} onSuccess={handleHomeShow} />}
    {view === "register" && <Register onLoginClick={handleLoginShow} onSuccess={handleLoginShow} />}
    {view === "home" && <Home onLogoutClick={handleLoginShow} />}
  </>
}

export default App