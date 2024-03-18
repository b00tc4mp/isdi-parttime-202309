import { Routes, Route, NavLink } from 'react-router-dom'

// pages
import Profile from './pages/Profile'
import Home from './pages/Home'
import Resource from './pages/Resource'
import Login from './pages/Login'
import Topic from './pages/Topic'
import Register from './pages/Register'

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
        <Route path="profile" element={<Profile />} />
        <Route path="topic" element={<Topic />} />
        <Route path="resource" element={<Resource />} />
      </Routes>
    </>
  )
}

export default App

//   <div>
// <a href="https://vitejs.dev" target="_blank">
//     <img src={viteLogo} className="logo" alt="Vite logo" />
//   </a>
//   <a href="https://react.dev" target="_blank">
//     <img src={reactLogo} className="logo react" alt="React logo" />
//   </a>
// </div>
// <h1>Vite + React</h1>
// <div className="card">
//   <button onClick={() => setCount((count) => count + 1)}>
//     count is {count}
//   </button>
//   <p>
//     Edit <code>src/App.jsx</code> and save to test HMR
//   </p>
// </div>
// <p className="read-the-docs">
//   Click on the Vite and React logos to learn more
// </p>
