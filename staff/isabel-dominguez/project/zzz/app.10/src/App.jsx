import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { UserProvider } from './hooks/UserContext.jsx'

import Home from './pages/Home'
import Login from './components/Login'

export default function App() {

  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route component={<Login />} />
        </Routes>
      </UserProvider>
    </>
  )
}