import Initial from './views/Initial'
import Credentials from './views/Credentials'
import Desktop from './views/Desktop'

import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

function App() {

  return <>

    <Routes>
      <Route path="/hiinit" element={<Initial />}></Route>
      <Route path="/credentials" element={<Credentials />}></Route>
    </Routes>
  </>

}

export default App
