import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Context from './Context.jsx'
import { Credentials, Desktop, Profile, Sudo, Initial } from './views'
import { Login, Register, Upload, Download, DeleteUser, RegisterAdmin, CreateGroup, AssignGroup } from './components'
import handleError from './utils/handleError.js'
import session from './logic/session.js'

function App() {

  return <>
    <Router basename='/hiinit'>
      <Context.Provider value={{ handleError }}>
        <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/credentials/*" element={<Credentials />} />

          <Route path="/desktop" element={<Desktop />} />

          <Route path="/upload" element={<Upload />} />
          <Route path="/download" element={<Download />} />
          <Route path="/profile/*" element={<Profile />} />

          <Route path="/administrator/*" element={session.role === 'admin' ? <Sudo /> : <Initial />} />
          <Route path="/create-admin" element={<RegisterAdmin />} />
          <Route path="/delete-user" element={<DeleteUser />} />
          <Route path="/create-group" element={<CreateGroup />} />
          <Route path="/assign-group" element={<AssignGroup />} />

          {/*session.role === 'admin' && (
            <>
            </>
          )*/}

          {/*!session.token && (
            <Route path="/*" element={<Initial />} />
          )*/}

        </Routes>
      </Context.Provider>
    </Router>
  </>

}

export default App
