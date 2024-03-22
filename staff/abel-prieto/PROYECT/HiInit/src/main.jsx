import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Context from './Context.jsx'
import App from './App.jsx'
import { Credentials, Desktop, Profile, Sudo } from './views'
import { Login, Register, Upload, Download, DeleteUser, RegisterAdmin, CreateGroup, AssignGroup } from './components'
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
          <Route path="/administrator/*" element={<Sudo />} />
          <Route path="/create-admin" element={<RegisterAdmin />} />
          <Route path="/delete-user" element={<DeleteUser />} />
          <Route path="/create-group" element={<CreateGroup />} />
          <Route path="/assign-group" element={<AssignGroup />} />
        </Routes>
      </Context.Provider>
    </Router>
  </React.StrictMode>,
)
