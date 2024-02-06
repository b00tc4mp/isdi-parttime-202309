import './utils/console2.js'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
//Trabajar con import/export te permite renombrar los imports por tuyos propios más intuitivos  


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      {/* Tenemos que hablar de esto, que significa y por que */}
      <App />
    </Router>
  </React.StrictMode>,
)

// Es el punto de entrada de nuestra app, desde donde se construye nuestra app,
// es el primer archivo que se carga