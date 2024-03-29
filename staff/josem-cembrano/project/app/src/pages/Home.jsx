import React, { useEffect, useState } from 'react'
import { useContext } from '../hooks'
import { Button } from '../library'
import logic from '../logic'
import { RiAdminLine, RiLogoutCircleRLine} from "react-icons/ri"
import { useNavigate } from 'react-router-dom'



export default function Home(props) {
  console.log('HOME')

  const context = useContext()

  const [name, setName] = useState('')
  const [showLogoutOptions, setShowLogoutOptions] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await logic.retrieveUser()
        setName(user.name)
      } catch (error) {
        context.handleError(error)
      }
    }

    fetchData()
  }, [])

  function handleLogoutClick() {
    logic.logoutUser(error => {
        if (error) {
            context.handleError(error)

            return
        }
    })

    props.onLogoutClick()
}

  function handleNameClick() {
    setShowLogoutOptions(!showLogoutOptions)
  }

  const handleEmailChangeClick = () => {
    const navigate = useNavigate();
    navigate('/changeEmail');
  }
  
  const handlePasswordChangeClick = () => {
    const navigate = useNavigate();
    navigate('/changePassword');
  }

  return (
    <div className='session-user-container'>
      <div className='session-user'>
        <div className='user-info' onClick={handleNameClick}>
          <div className='user-info-container'>
            <RiAdminLine className='icon-session' size={20} />
            <h2 className='text-yellow-600 text-xl font-bold cursor-pointer'>{name}</h2>
          </div>
        </div>
        {showLogoutOptions && (
          <div className='logout-options'>
            <Button className='button-user' onClick={handleLogoutClick}>
              <RiLogoutCircleRLine className='close-session-icon' size={20} />
            </Button>
            <h2 className='cursor-pointer' onClick={handleEmailChangeClick}>Change Email</h2>
            <h2 className='cursor-pointer' onClick={handlePasswordChangeClick}>Change Password</h2>
          </div>
        )}
      </div>
    </div>
  )
  
}