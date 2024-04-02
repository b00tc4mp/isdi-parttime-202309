import { Routes, Route, NavLink, Navigate, Outlet } from 'react-router-dom'

import context from './logic/context'

// pages
import Profile from './pages/Profile'
import Home from './pages/Home'
import Resources from './pages/Resources'
import Login from './pages/Login'
import Topic from './pages/Topic'
import Register from './pages/Register'

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
  return (
    <>
      <header>
        <nav>
          <NavLink to="profile">Profile</NavLink>
          <NavLink to="/">Home</NavLink>
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
