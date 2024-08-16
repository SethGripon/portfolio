import React, { useState } from 'react'

import { skillLogo } from '../constants'

const About = () => {
  const [logos, setLogos] = useState(skillLogo)

  const handleHover = (id) => {
    setLogos(logos.map((logo) => (
      logo.id === id ? { ...logo, hover: !logo.hover } : logo
    )))
  }

  return (
    <section name='about' className='text-lightTwo bg-darkTwo h-screen selection-none'>
      <div className='flex flex-col items-center gap-5 mx-32 pt-20 h-full overflow-hidden'>
        <div className='relative flex'>
          <h1 className='text-[48px] font-semibold select-none z-10'>About.</h1>
          <img className='absolute -top-4 -rotate-[60deg] w-[135px] opacity-60 z-0' src={`src/assets/second-paint.png`} alt="" />
        </div>
        <div className='my-2 px-[70px]'>
          <p className='text-[18px] text-center'>I graduated with a bachelor's degree in <strong className='text-secondary'>Computer Science</strong> from Polytechnic University of the Philippines. My passion lies in creating user-centric experiences through engaging and responsive web design. At the moment, I am mainly working on Frontend Development using <strong className='text-secondary'>ReactJS</strong>, increasing my skills by understanding Full-Stack development such as MERN.</p>
        </div>
        <div className='flex flex-col items-center gap-5 mx-32 mt-10'>
          <div className='relative flex'>
            <h1 className='text-[48px] font-semibold select-none z-10'>Skills.</h1>
            <img className='absolute -top-4 -rotate-[60deg] w-[135px] opacity-60 z-0' src={`src/assets/second-paint.png`} alt="" />
          </div>
          <div className='flex w-[650px] overflow-hidden skill-fade'>
            <ul className='flex gap-10 ps-5 animate-loop-scroll'>
              {logos.map((logo) => (
                <li
                  key={logo.id}
                  className='flex flex-col items-center mt-4 cursor-pointer'
                  onMouseEnter={() => handleHover(logo.id)}
                  onMouseLeave={() => handleHover(logo.id)}>
                  <logo.icon className={`text-[48px] ${logo.hover && 'scale-110 text-secondary'} transition-all ease-in-out duration-300`} />
                  <p className={`text-[12px] py-2 opacity-0 ${logo.hover && 'opacity-100'} transition-all ease-in-out duration-300`}>{logo.name}</p>
                </li>
              ))}
            </ul>
            <ul className='flex gap-10 ps-10 animate-loop-scroll' aria-hidden='true'>
              {logos.map((logo) => (
                <li
                  key={logo.id}
                  className='flex flex-col items-center mt-4 cursor-pointer'
                  onMouseEnter={() => handleHover(logo.id)}
                  onMouseLeave={() => handleHover(logo.id)}>
                  <logo.icon className={`text-[48px] ${logo.hover && 'scale-110 text-secondary'} transition-all ease-in-out duration-300`} />
                  <p className={`text-[12px] py-2 opacity-0 ${logo.hover && 'opacity-100'} transition-all ease-in-out duration-300`}>{logo.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About