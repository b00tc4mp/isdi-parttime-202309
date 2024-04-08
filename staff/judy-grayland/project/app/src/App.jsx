import { Routes, Route, NavLink, Navigate, Outlet } from 'react-router-dom'

import { Button } from './components'

import context from './logic/context'
import logic from './logic'

// pages
import Profile from './pages/Profile'
import Home from './pages/Home'
import Resources from './pages/Resources'
import Login from './pages/Login'
import Topic from './pages/Topic'
import Register from './pages/Register'
import { useNavigate } from 'react-router-dom'

function ProtectedRoute() {
  // check if user is logged in
  const userLoggedIn = !!context.token
  // if user not logged in, navigate to login
  if (!userLoggedIn) {
    return <Navigate to="login" />
  }
  // if user logged in, navigate to the path
  return <Outlet />
}

function App() {
  const navigate = useNavigate()

  function handleLogout() {
    logic.logoutUser()
    navigate('/')
  }
  return (
    <>
      <header>
        <nav>
          <NavLink to="profile">Profile</NavLink>
          <NavLink to="/">Home</NavLink>
          <Button onClick={handleLogout}>Log out</Button>
        </nav>
      </header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="topic" element={<Topic />} />
        <Route path="resources" element={<Resources />} />
      </Routes>
    </>
  )
}

export default App
