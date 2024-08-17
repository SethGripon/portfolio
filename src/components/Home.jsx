import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaMessage, FaHeart, FaDownload, FaAnglesDown } from "react-icons/fa6";

import { mediaLinks } from '../constants';
import sethGradPic from '../assets/grad-pic.png'
import bigPaint from '../assets/first-paint.png'

const Home = () => {
  const [count, setCount] = useState(0)
  const [y, setY] = useState(0)
  const [x, setX] = useState(0)
  const invertal = useRef()

  const handleCount = () => {
    invertal.current = setInterval(() => {
      setCount(prev => prev + 1)
    }, 100)
  }

  const stopCount = () => {
    clearInterval(invertal.current)
  }

  useEffect(() => {
    window.onmousemove = (event) => {
      setX((event.clientX - 400) / 650)
      setY((event.clientY - 350) / 650)
      card.style.transform = `rotate(3deg) translate(${x}rem, ${y}rem)`
    }
  }, [count])

  return (
    <section name='home' className='text-lightTwo h-screen'>
      <div className='md:grid-cols-2 md:px-32 md:mx-0 xs:mx-10 mx-4 md:gap-5 grid pt-20 h-full overflow-hidden'>
        <div className='relative h-full w-full flex justify-center'>
          <div id='card' onMouseEnter={handleCount} onMouseLeave={stopCount} className='lg:left-20 md:absolute md:p-[40px] p-[25px] pb-0 glassmorphism group rotate-3 top-[40px] -left-5 transition ease-in-out duration-100 z-10'>
            <div className='md:h-[350px] md:w-[300px] xs:h-[260px] xs:w-[245px] w-[220px] overflow-hidden rounded-xl border border-gray-600'>
              <img className='h-full w-full' src={sethGradPic} alt="" />
            </div>
            <div className='flex justify-between text-2xl mt-4'>
              <div className='flex items-center gap-2'>
                <FaHeart className='text-red-600 cursor-pointer group-hover:animate-fade-heart ' />
                <p className='text-sm font-bold group-hover:animate-pulse-size ps-1'>{count}</p>
              </div>
              <FaMessage className='text-lightTwo opacity-50 cursor-pointer' />
            </div>
          </div>
          <img className="md:top-20 md:-left-3 lg:left-20 md:w-[350px] md:rotate-0 h-[400px] -top-10 absolute rotate-[45deg] md:scale-125 z-0" src={bigPaint} alt="" />
        </div>
        <div className='md:ms-6 md:justify-center xs:pt-0 flex flex-col pt-2'>
          <h1 className='lg:text-[52px] xs:text-[32px] text-[24px] font-semibold'>Seth Arvin Gripon</h1>
          <p className='lg:text-[20px] xs:text-[16px] text-[10px]'>I am an aspiring Frontend Developer and Python Developer, aiming to become a Software Engineer</p>
          <div className='flex justify-between md:my-4 my-2'>
            <button className='xs:text-[12px] text-[8px] flex gap-2 items-center bg-secondary py-2 px-4 rounded-md hover:bg-primary transition ease-in-out duration-200'>
              Download CV
              <FaDownload />
            </button>
            <button className='xs:text-[12px] text-[8px] flex gap-2 items-center py-2 px-4 rounded-md hover:bg-darkTwo transition ease-in-out'>See more about me
              <FaAnglesDown className='animate-pulse' />
            </button>
          </div>
          <ul className='xs:gap-4 xs:my-2 flex gap-2'>
            {mediaLinks.map((media) => (
              <li key={media.id}>
                <Link to={media.URL}>
                  <media.icon className='text-lightTwo opacity-50 xs:text-[26px] text-[18px] hover:opacity-100 hover:scale-125 transition-all ease-in-out duration-300' />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Home