import React from "react"
import Login from "./views/Login"
import Register from "./views/Register"
import Home from "./views/Home"

function App() {
  console.log('App')

  const viewState = React.useState('login') // the hook useState() always returns an array with two elements. The first one is the current state (get), which is a value, and the second is a function that allows you to update that value.

  const view = viewState[0] 
  const setView = viewState[1]


  function handleRegisterShow() {
      setView('register')
  }

  function handleLoginShow() {
      setView('login')
  }

  function handleHomeShow() {
      setView('home')
  }
  // const loginProps ={
  //     onRegisterClick: handleRegisterShow, 
  //     onSuccess: handleHomeShow
  // }
  return <>
      {/* {view === 'login' && 
      Login(loginProps)} */}

      {view === 'login' && 
      <Login  
      //{...loginProps}
      // EN: here we're assigning properties (onRegisterClick and onSuccess) to the props object that the Login component receives as its argument: / ES: onRegisterClick y onSuccess son propiedades que enviamos en un objeto - el objeto de propiedades - al componente Login. Los envías como si fueran parámetros (son las props)
          onRegisterClick = {handleRegisterShow} 
          onSuccess={handleHomeShow} 
      />}

      {view === 'register' && 
      <Register 
          onLoginClick = {handleLoginShow} 
          onSuccess = {handleLoginShow}
      />}

      {view === 'home' && 
      <Home 
          onLogoutClick = {handleLoginShow}
      />}
  </>
}

export default App