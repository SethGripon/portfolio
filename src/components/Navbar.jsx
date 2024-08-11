import React from 'react'
import { NavLink } from 'react-router-dom'

import { navbarlist } from '../constants'

const Navbar = () => {
  return (
    <nav className='fixed w-full bg-darkOne text-lightTwo py-3 drop-shadow-lg z-20'>
      <div className='flex justify-between items-center mx-32'>
        <div>
          {/* logo */}
          <h4 className='text-xl'>Seth Arvin Gripon</h4>
        </div>
        <div>
          <ul className='flex items-center gap-2 text-md'>
            {navbarlist.map((navbar) => (
              navbar.name === 'Contact' ? (
                <li key={navbar.id}>
                  <NavLink to={navbar.path} className='bg-secondary hover:bg-primary hover:scale-110 py-2 px-3 mx-2 transition ease-in-out duration-300 rounded-md cursor-pointer'>
                    {navbar.name}
                  </NavLink>
                </li>
              ) : (
                <li key={navbar.id}>
                  <NavLink to={navbar.path}>
                    {({ isActive }) => (
                      isActive ? (
                        <div className='text-secondary py-1 mx-2 transition ease-in-out duration-300 cursor-pointer'>
                          {navbar.name}
                        </div>
                      ) : (
                        <div className='text-lightOne hover:text-secondary py-1 mx-2 transition ease-in-out duration-300 cursor-pointer'>
                          {navbar.name}
                        </div>
                      )
                    )}
                  </NavLink>
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