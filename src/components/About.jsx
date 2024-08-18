import React, { useState } from 'react'

import { skillLogo } from '../constants'
import smallPaint from '../assets/second-paint.png'

const About = () => {
  const [logos, setLogos] = useState(skillLogo)

  const handleHover = (id) => {
    setLogos(logos.map((logo) => (
      logo.id === id ? { ...logo, hover: !logo.hover } : logo
    )))
  }

  return (
    <section name='about' className='text-lightTwo bg-darkTwo h-screen selection-none'>
      <div className='md:mx-0 xs:mx-10 mx-6 flex flex-col items-center justify-center gap-5 h-full overflow-hidden'>
        <div className='relative flex'>
          <h1 className='lg:text-[48px] xs:text-[32px] text-[24px] font-semibold select-none z-10'>About.</h1>
          <img className='absolute -top-4 -rotate-[60deg] w-[135px] opacity-60 z-0' src={smallPaint} alt="" />
        </div>
        <div className='my-2 md:px-[70px]'>
          <p className='md:text-[18px] xs:text-[14px] text-[12px] text-center'>I graduated with a bachelor's degree in <strong className='text-secondary'>Computer Science</strong> from Polytechnic University of the Philippines. My passion lies in creating user-centric experiences through engaging and responsive web design. At the moment, I am mainly working on Frontend Development using <strong className='text-secondary'>ReactJS</strong>, increasing my skills by understanding Full-Stack development such as MERN.</p>
        </div>
        <div className='md:mx-0 xs:mx-10 mx-6 flex flex-col items-center gap-5 xs:mt-10'>
          <div className='relative flex'>
            <h1 className='lg:text-[48px] xs:text-[32px] text-[24px] font-semibold select-none z-10'>Skills.</h1>
            <img className='absolute -top-4 -rotate-[60deg] w-[135px] opacity-60 z-0' src={smallPaint} alt="" />
          </div>
          <div className='flex xs:w-[650px] w-[350px] overflow-hidden skill-fade'>
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