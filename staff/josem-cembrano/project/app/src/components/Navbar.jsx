import React, { useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import * as Icons from 'react-icons/fa6'
import { RiLogoutCircleRLine, RiLockPasswordFill } from 'react-icons/ri'
import { HiMenuAlt3 } from 'react-icons/hi'
import { TbReportAnalytics, TbBabyBottle, TbFence } from 'react-icons/tb'
import { IoMdMale, IoMdFemale, IoMdLogIn } from 'react-icons/io'
import { MdHistoryEdu, MdOutlineAlternateEmail } from 'react-icons/md'
import { FaUserAlt } from 'react-icons/fa';
import { GiArchiveRegister } from 'react-icons/gi';
import { useContext } from '../hooks'
import { Button } from '../library'
import logic from '../logic'

export default function Navbar({ open, setOpen, isUserNavbar, onLogout }) {
  const location = useLocation()
  const context = useContext()

  const [name, setName] = useState('')
  const [showLogoutOptions, setShowLogoutOptions] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      if(logic.isUserLoggedIn()) {
        try {
          const user = await logic.retrieveUser()
          setName(user.name)
        } catch (error) {
          context.handleError(error)
        }
      }
      else {
        setName('')
      }
    }

    fetchData()
  }, [isUserNavbar])

    function handleLogoutClick() {
      logic.logoutUser(error => {
          if (error) {
              context.handleError(error)

              return
          }
      })
      onLogout()
  }

  function handleNameClick() {
    setShowLogoutOptions(!showLogoutOptions)
  }

  const menus = [
    { name: 'Home', link: '/', icon: TbFence, margin: true, color: 'goldenrod' },
    { name: 'History', link: '/history', icon: MdHistoryEdu, color: 'goldenrod' },
    { name: 'Males', link: '/males', icon: IoMdMale, color: 'goldenrod' },
    { name: 'Females', link: '/females', icon: IoMdFemale, color: 'goldenrod' },
    { name: 'Puppies', link: '/puppies', icon: TbBabyBottle, color: 'goldenrod' },
    { name: 'Contact', link: '/contact', icon: TbReportAnalytics, color: 'goldenrod' },
    { name: 'FAQ', link: '/faq', icon: Icons.FaQuestion, color: 'goldenrod' },
    { name: 'Login', link: '/login', icon: IoMdLogIn, margin: true, color: 'goldenrod' },
    { name: 'Register', link: '/register', icon: GiArchiveRegister, color: 'goldenrod' },
  ]

  function renderMenuItems() {
    return menus.map((menu, i) => (
      <Link to={menu.link} key={i} className={`${ menu.margin && 'mt-5' } group flex items-center text-sm gap-3.5 font-medium p-2 rounded-md menu-link ${ location.pathname === menu.link ? 'active' : ''}`} >
        {(menu.name === 'Login' || menu.name === 'Register') && !logic.isUserLoggedIn() ? <div>{React.createElement(menu.icon, { size: '20', style: { color: location.pathname === menu.link && !open ? '#6B7280' : menu.color }, className: 'hover:scale-125 transition-transform duration-300' })}</div> : menu.name !== 'Login' && menu.name !== 'Register' ? <div>{React.createElement(menu.icon, { size: '20', style: { color: location.pathname === menu.link && !open ? '#6B7280' : menu.color }, className: 'hover:scale-125 transition-transform duration-300' })}</div> : ''}
        <h2 className={`whitespace-pre duration-500 ${ !open && 'opacity-0 translate-x-28 overflow-hidden' } ${ location.pathname === menu.link ? 'text-gray-500' : 'text-white'}`}>
          {menu.name === 'Home' && name ? (<><span className='mr-2'>{menu.name}</span><span className='italic text-yellow-700'>({name})</span>
          {logic.isUserLoggedIn() && (
              <div className='inline-block relative top-0.5 ml-2'>
                <div className='rounded-full shadow-md bg-gray-800'>
                  <Button className='shadow-color-custom' onClick={handleLogoutClick}>
                    <RiLogoutCircleRLine className='text-white shadow-md transition-all duration-300 hover:text-red-500 hover:scale-150' size={13} />
                  </Button>
                </div>
              </div>
            )}</>) : (menu.name === 'Login' || menu.name === 'Register') && !logic.isUserLoggedIn() ? <span>{menu.name}</span> : (menu.name !== 'Login' && menu.name !== 'Register') ? <span>{menu.name}</span> : ''
          }
        </h2>
        <h2 className={`${ open && 'hidden' } absolute left-48 bg-gray-800 bg-opacity-50 font-semibold whitespace-pre text-white rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}>{menu.name}</h2>
        <h2 className={`${ open && 'hidden' } absolute left-48 bg-gray-800 bg-opacity-50 font-semibold whitespace-pre text-white rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}>{menu.name}</h2>
      </Link>
    ))
  }

  return (
    <>
      <section className='flex gap-6 nav-position'>
        <div className={`bg-[#000000] bg-opacity-50 min-h-screen ${open ? 'w-60' : 'w-20'} duration-500 text-gray-100 px-4`}>
        <div className='py-3'>
          <HiMenuAlt3 size={26} className='cursor-pointer mb-2 hover:scale-125 transition-transform duration-300 text-yellow-500 hover:text-yellow-700' onClick={() => setOpen(!open)} />
        </div>
          <div className='mt-4 flex flex-col gap-4 relative'>
            {renderMenuItems()}
          </div>
        </div>
        <div className='session-user-container'>
        {
          logic.isUserLoggedIn() && <div className='ml-[-40px]'>
          <div className='user-info' onClick={handleNameClick}>
            <div className='user-info-container shadow-custom hover:scale-110 transition-transform duration-300'>
              <FaUserAlt className='text-gray-600 transition-colors duration-300 ' size={20} />
            </div>
          </div>
          {showLogoutOptions && (
            <div className='flex items-center mr-[50px]'>
              <Link className='cursor-pointer ml-[-15px] flex items-center justify-center bg-gray-600 rounded-full w-5 h-5 shadow-custom hover:scale-125 transition-transform duration-300' to='/profile/email'><MdOutlineAlternateEmail className='text-yellow-500 transition-colors duration-300 text-lg'></MdOutlineAlternateEmail></Link>
              <Link className='cursor-pointer ml-[25px] flex items-center justify-center bg-gray-600 rounded-full w-5 h-5 shadow-custom hover:scale-125 transition-transform duration-300' to='/profile/password'><RiLockPasswordFill className='text-yellow-500 transition-colors duration-300 text-lg'></RiLockPasswordFill></Link>
            </div>
          )}
        </div>
        }
        </div>
      </section>
    </>
  )
  
}