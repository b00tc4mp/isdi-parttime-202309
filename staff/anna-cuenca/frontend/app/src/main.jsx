import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './data/populate.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Tenemos que hablar de esto, que significa y por que */}
    <App />
  </React.StrictMode>,
)

// Es el punto de entrada de nuestra app, desde donde se construye nuestra app,
// es el primer archivo que se carga