import React, { useState } from 'react'
import { Link } from 'react-scroll'

import { navbarlist } from '../constants'
import { CgMenuRight, CgClose } from "react-icons/cg";
import sethyLogo from '../assets/sethy-blue.png'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('')
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleSetActive = (to) => {
    setActiveNav(to)
  };

  return (
    <nav className='md:px-32 xs:px-10 px-4 fixed w-full flex justify-between items-center py-3 bg-darkOne text-lightTwo drop-shadow-lg z-20'>
      <Link
        activeClass='active'
        to='home'
        spy={true}
        smooth={true}
        offset={-50}
        duration={900}
        onSetActive={handleSetActive}>
        <img src={sethyLogo} alt="" className='md:w-[150px] md:h-[48px] w-[110px] h-[36px] cursor-pointer hover:scale-110 transition-all ease-in-out duration-300' />
      </Link>
      <ul className='xs:flex hidden items-center justify-end flex-1 gap-2'>
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
                <div className='bg-secondary hover:bg-primary hover:scale-110 py-2 px-3 transition ease-in-out duration-300 rounded-md cursor-pointer'>
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
                <div className={`${activeNav === navbar.path ? 'text-primary' : 'text-lightOne'} hover:text-secondary mx-2 transition ease-in-out duration-300 cursor-pointer`}>
                  {navbar.name}
                </div>
              </Link>
            </li>
          )
        ))}
      </ul>

      <div className='xs:hidden flex items-center'>
        <div className='text-[24px] z-10' onClick={() => setToggleMenu(prev => !prev)}>
          {toggleMenu ? <CgClose /> : <CgMenuRight />}
        </div>
        <div className={`bg-secondary bg-opacity-30 h-screen w-full absolute top-0 left-0 ps-40 ${toggleMenu ? '' : 'translate-x-[100%]'} transition-all ease-in-out duration-300`}>
          <div className='bg-darkTwo h-full pt-16 pr-5'>
            <ul className='xs:hidden flex flex-col items-end flex-1 gap-4 text-md'>
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
                      onSetActive={handleSetActive}
                      onClick={() => setToggleMenu(prev => !prev)}>
                      <div className='bg-secondary hover:bg-primary hover:scale-110 py-2 px-3 transition ease-in-out duration-300 rounded-md cursor-pointer'>
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
                      onSetActive={handleSetActive}
                      onClick={() => setToggleMenu(prev => !prev)}>
                      <div className={`${activeNav === navbar.path ? 'text-primary' : 'text-lightOne'} hover:text-secondary mx-2 transition ease-in-out duration-300 cursor-pointer`}>
                        {navbar.name}
                      </div>
                    </Link>
                  </li>
                )
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav >
  )
}

export default Navbar