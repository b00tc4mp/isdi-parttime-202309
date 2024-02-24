import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import { Credentials, Desktop } from './views'
import { Login, Register } from './components'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename='/hiinit'>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/credentials/*" element={<Credentials />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/desktop" element={<Desktop />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
