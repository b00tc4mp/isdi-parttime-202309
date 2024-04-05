import {React, useState} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Home, Males, Females, Puppies, History, Contact, FAQ, Login, Register, Profile} from './pages/index'
import Feedback from './components/Feedback'
import Context from './Context'
import { errors } from 'com'
const { ContentError, DuplicityError, NotFoundError, TokenError } = errors
import logic from './logic'
import {Navbar} from './components/index'

export default function App() {
  console.log('App')

  const navigate = useNavigate()


  const [isUserNavbar, setIsUserNavbar] = useState(false)
  const [open, setOpen] = useState(true)
  const [level, setLevel] = useState(null)
  const [message, setMessage] = useState(null)

  function handleLogoutClick(){
    setIsUserNavbar(false)
    navigate('/')
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
    setIsUserNavbar(true)
  }

  return (
    <>
    <Context.Provider value={context}>
    {message && <Feedback level={level} message={message} onAccepted={handleFeedbackAcepted} />}
    <div className='container-Navbar'>
    <Navbar open={open} setOpen={setOpen} isUserNavbar={isUserNavbar} onLogout={handleLogoutClick} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/history' element={<History />} />
        <Route path='/males' element={<Males />} />
        <Route path='/females' element={<Females />} />
        <Route path='/puppies' element={<Puppies />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/login' element={<Login onSuccess={onSuccess}/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile/:form' element={<Profile onSuccess={onSuccess}/>} />
      </Routes>
    </div>
    </Context.Provider>
  </>
  )
}
