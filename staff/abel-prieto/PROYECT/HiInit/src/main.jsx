import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Context from './Context.jsx'
import App from './App.jsx'
import { Credentials, Desktop, Profile } from './views'
import { Login, Register, Upload, Download } from './components'
import handleError from './utils/handleError.js'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename='/hiinit'>
      <Context.Provider value={{ handleError }}>
        <Routes>
          <Route path="/*" element={<App />} />
          <Route path="/credentials/*" element={<Credentials />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/desktop" element={<Desktop />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/download" element={<Download />} />
          <Route path="/profile/*" element={<Profile />} />
        </Routes>
      </Context.Provider>
    </Router>
  </React.StrictMode>,
)
