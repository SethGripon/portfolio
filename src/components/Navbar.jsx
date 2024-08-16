import React, { useState } from 'react'
import { Link } from 'react-scroll'

import { navbarlist } from '../constants'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('')

  const handleSetActive = (to) => {
    setActiveNav(to)
  };

  return (
    <nav className='fixed w-full bg-darkOne text-lightTwo py-3 drop-shadow-lg z-20'>
      <div className='flex justify-between items-center mx-32'>
        <Link
          activeClass='active'
          to='home'
          spy={true}
          smooth={true}
          offset={-50}
          duration={900}
          onSetActive={handleSetActive}>
          <div className='w-[150px] cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'>
            <img classname='w-full object-cover object-center' src={`src/assets/sethy-blue.png`} alt="" />
          </div>
        </Link>
        <div>
          <ul className='flex items-center gap-2 text-md'>
            {navbarlist.map((navbar) => (
              navbar.name === 'Contact' ? (
                <li key={navbar.id}>
                  <Link
                    activeClass='active'
                    to={navbar.path}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={900}
                    onSetActive={handleSetActive}>
                    <div className='bg-secondary hover:bg-primary hover:scale-110 py-2 px-3 mx-2 transition ease-in-out duration-300 rounded-md cursor-pointer'>
                      {navbar.name}
                    </div>
                  </Link>
                </li>
              ) : (
                <li key={navbar.id}>
                  <Link
                    activeClass='active'
                    to={navbar.path}
                    spy={true}
                    smooth={true}
                    offset={navbar.offset}
                    duration={900}
                    onSetActive={handleSetActive}>
                    <div className={`${ activeNav === navbar.path ? 'text-primary' : 'text-lightOne'} hover:text-secondary py-1 mx-2 transition ease-in-out duration-300 cursor-pointer`}>
                      {navbar.name}
                    </div>
                  </Link>
                </li>
              )
            ))}
          </ul>
        </div>
      </div>
    </nav >
  )
}

export default Navbar