import React, { useState, useEffect } from 'react'

import Home from './pages/Home'

export default function App() {

  const [view, setView] = useState("home")



  return (
    <>
      {view === "home" && <Home />}
    </>
  )
}