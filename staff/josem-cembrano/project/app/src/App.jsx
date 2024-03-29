import {React, useState} from 'react'
import { Routes, Route, useNavigate, Navigate, Link } from 'react-router-dom'
import { Home, Males, Females, Puppies, History, Contact, FAQ, News, Opinions, Login, Register} from './pages/index'
import Feedback from './components/Feedback'
import Context from './Context'
import { errors } from 'com'
const { ContentError, DuplicityError, NotFoundError, TokenError } = errors
import logic from './logic'
import {Navbar} from './components/index'

export default function App() {
  console.log('App')

  const navigate = useNavigate()

  const [open, setOpen] = useState(true)
  const [level, setLevel] = useState(null)
  const [message, setMessage] = useState(null)

  function handleHomeShow() {
    navigate('/')
    setLevel(null)
    setMessage(null)
  }

  function handleError(error) {
    let level = 'fatal'
    let message = setMessage(error.message)

    if(error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) {
      level = 'warn'
    }else if(error instanceof DuplicityError || error instanceof NotFoundError) {
      level = 'error'
    }
    else if(error instanceof TokenError) {
      logic.logoutUser(() => navigate('./login'))

      message = 'session expired'
    }

    setLevel(level)
    setMessage(error.message)

    console2.log(message)
  }

  function handleFeedbackAcepted () {
    setMessage(null)
    setLevel(null)
  }

  const context = { handleError }

  function onSuccess() {
    navigate('/')
    setLevel(null)
    setMessage(null)
  }

  return (
    <>
    <Context.Provider value={context}>
    {message && <Feedback level={level} message={message} onAccepted={handleFeedbackAcepted} />}
    <div className='container-Navbar'>
    <Navbar open={open} setOpen={setOpen}/>
      <Routes>
        <Route path='/' element={logic.isUserLoggedIn() ? <Home onLogoutClick={handleHomeShow} /> : <Navigate to='/' />} />
        <Route path='/history' element={<History />} />
        <Route path='/males' element={<Males />} />
        <Route path='/females' element={<Females />} />
        <Route path='/puppies' element={<Puppies />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/news' element={<News />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/opinions' element={<Opinions />} />
        <Route path='/login' element={<Login onSuccess={onSuccess}/>} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
    </Context.Provider>
  </>
  )
}
