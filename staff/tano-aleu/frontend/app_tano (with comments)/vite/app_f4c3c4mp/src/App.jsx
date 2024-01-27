import React from 'react';
import Login from './views/Login';
import Register from './views/Register';
import Home from './views/Home';

function App() {
  // Estado local para almacenar la vista actual de la aplicación
  const [view, setView] = React.useState('login');

  // Función para cambiar la vista a 'register'
  function handleRegisterShow() {
    setView('register');
  }

  // Función para cambiar la vista a 'login'
  function handleLoginShow() {
    setView('login');
  }

  // Función para cambiar la vista a 'home'
  function handleHomeShow() {
    setView('home');
  }

  // Renderizado condicional de componentes en función del estado 'view'
  return (
    <>
      {/* Si la vista es 'login', renderiza el componente Login */}
      {view === 'login' && (
        <Login onRegisterClick={handleRegisterShow} onSuccess={handleHomeShow} />
      )}

      {/* Si la vista es 'register', renderiza el componente Register */}
      {view === 'register' && (
        <Register onLoginClick={handleLoginShow} onSuccess={handleLoginShow} />
      )}

      {/* Si la vista es 'home', renderiza el componente Home */}
      {view === 'home' && <Home onLogoutClick={handleLoginShow} />}
    </>
  );
}

export default App;
