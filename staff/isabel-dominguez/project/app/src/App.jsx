import React, { useState, useEffect } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

export default function App() {
  // Utiliza el estado de React para controlar la vista actual
  const [view, setView] = useState("home")

  // useEffect se ejecuta cuando el componente se monta por primera vez
  useEffect(() => {
    // Cambia la vista a "home" cuando el componente se monta
    setView("home")
  }, [])

  return (
    <>
      {view === "home" && <Home />}
    </>
  )
}