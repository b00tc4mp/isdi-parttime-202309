import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import * as Icons from 'react-icons/fa6'
import { HiMenuAlt3 } from 'react-icons/hi'
import { TbReportAnalytics, TbBabyBottle, TbFence } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoMdMale, IoMdFemale, IoMdLogIn } from 'react-icons/io'
import { MdNotificationsNone, MdHistoryEdu } from 'react-icons/md'

export default function Navbar({ open, setOpen }) {
  const location = useLocation()

  const menus = [
    { name: 'Home', link: '/', icon: TbFence, margin: true, color: 'goldenrod' },
    { name: 'History', link: '/history', icon: MdHistoryEdu, color: 'goldenrod' },
    { name: 'Males', link: '/males', icon: IoMdMale, color: 'goldenrod' },
    { name: 'Females', link: '/females', icon: IoMdFemale, color: 'goldenrod' },
    { name: 'Puppies', link: '/puppies', icon: TbBabyBottle, color: 'goldenrod' },
    { name: 'Contact', link: '/contact', icon: TbReportAnalytics, color: 'goldenrod' },
    { name: 'News', link: '/news', icon: MdNotificationsNone, color: 'goldenrod' },
    { name: 'FAQ', link: '/faq', icon: Icons.FaQuestion, margin: true, color: 'goldenrod' },
    { name: 'Opinions', link: '/opinions', icon: AiOutlineHeart, color: 'goldenrod' },
    { name: 'Login', link: '/login', icon: IoMdLogIn, color: 'goldenrod' },
    { name: 'Register', link: '/register', icon: IoMdLogIn, color: 'goldenrod' },
  ]

  const renderMenuItems = () => {
    return menus.map((menu, i) => (
      <Link to={menu.link} key={i} className={`${ menu.margin && 'mt-5' } group flex items-center text-sm gap-3.5 font-medium p-2 rounded-md menu-link ${ location.pathname === menu.link ? 'active' : ''}`} >
        <div>{React.createElement(menu.icon, { size: '20', style: { color: location.pathname === menu.link && !open ? '#6B7280' : menu.color } })}</div>
        <h2 className={`whitespace-pre duration-500 ${ !open && 'opacity-0 translate-x-28 overflow-hidden' } ${ location.pathname === menu.link ? 'text-gray-500' : 'text-white'}`}>{menu.name}</h2>
        <h2 className={`${ open && 'hidden' } absolute left-48 bg-gray-800 bg-opacity-50 font-semibold whitespace-pre text-white rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}>{menu.name}</h2>
      </Link>
    ))
  }

  return (
    <>
      <section className="flex gap-6 nav-position">
        <div className={`bg-[#000000] bg-opacity-50 min-h-screen ${open ? 'w-60' : 'w-16'} duration-500 text-gray-100 px-4`}>
          <div className="py-3">
            <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />
          </div>
          <div className="mt-4 flex flex-col gap-4 relative">
            {renderMenuItems()}
          </div>
        </div>
        <div className="m-3 text-xl text-gray-900 font-semibold"></div>
      </section>
    </>
  )
}