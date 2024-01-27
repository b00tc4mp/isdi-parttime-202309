import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa la función ReactDOM.createRoot
import App from './App.jsx'; // Importa tu componente principal
import './styles/index.css'; // Importa los estilos de la aplicación
import './data/populate.js'; // Importa algún archivo relacionado con la carga de datos

// Utiliza ReactDOM.createRoot para renderizar la aplicación en el elemento con el id 'root'
// createRoot es parte de la API experimental de ReactDOM para habilitar Concurrent Mode
// https://reactjs.org/docs/concurrent-mode-reference.html#createRoot

ReactDOM.createRoot(document.getElementById('root')).render(


  // Utiliza React.StrictMode para activar el modo estricto de React
  // StrictMode activa ciertas advertencias y comprobaciones adicionales en el desarrollo


  <React.StrictMode>

    {/* Renderiza tu componente principal, App */}
    <App />
    
  </React.StrictMode>
);