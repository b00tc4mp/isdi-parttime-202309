import './utils/console2.js'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'

// our main.jsx connects our React code to our HTML (specifically the render function. it accepts our React code as an argument). It then transforms the React code into plain JS. We need this because browsers do not understand React.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
