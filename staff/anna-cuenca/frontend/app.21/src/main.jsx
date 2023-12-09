import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Tenemos que hablar de esto, que significa y por que */}
    <App />
  </React.StrictMode>,
)
