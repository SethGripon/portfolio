import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaMessage, FaHeart, FaDownload, FaAnglesDown } from "react-icons/fa6";

import { mediaLinks } from '../constants';

const Home = () => {
  const [count, setCount] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [y, setY] = useState(0)
  const invertal = useRef()

  const handleCount = () => {
    invertal.current = setInterval(() => {
      setCount(prev => prev + 1)
    }, 100)

    setIsHovering(true)
  }

  const stopCount = () => {
    clearInterval(invertal.current)
    setIsHovering(false)
  }

  return (
    <section className='text-lightTwo h-screen'>
      <div className='grid grid-cols-2 gap-5 mx-32 pt-20 h-full'>
        <div className='relative h-full w-full'>
          <div id='card' onMouseEnter={handleCount} onMouseLeave={stopCount} className='absolute glassmorphism group p-[40px] rotate-3 top-[40px] left-20 transition ease-in-out duration-100 z-10'>
            <div className='h-[350px] w-[300px] overflow-hidden rounded-xl border border-gray-600'>
              <img className='object-cover h-[375px] w-full' src="src/assets/grad-pic.png" alt="" />
            </div>
            <div className='flex justify-between text-2xl mt-4'>
              <div className='flex items-center gap-2'>
                <FaHeart className='text-red-600 cursor-pointer group-hover:animate-fade-heart '/>
                <p className='text-sm font-bold group-hover:animate-pulse-size ps-1'>{count}</p>
              </div>
              <FaMessage className='text-lightTwo opacity-50 cursor-pointer' />
            </div>
          </div>
          <img className="absolute top-9 right-7 h-[500px] w-[500px] rotate-[24deg] transform scale-125 z-0" src="src/assets/first-paint.png" alt="" />
        </div>
        <div className='flex flex-col justify-center ms-6'>
          <h1 className='text-[52px] font-semibold'>Seth Arvin Gripon</h1>
          <p className='text-[20px]'>I am an aspiring Frontend Developer and Python Developer, aiming to become a Software Engineer</p>
          <div className='flex justify-between my-4'>
            <button className='flex gap-2 items-center bg-secondary py-2 px-4 rounded-md text-[10px] hover:bg-primary transition ease-in-out duration-200'>
              Download CV
              <FaDownload />
            </button>
            <button className='flex gap-2 items-center py-2 px-4 rounded-md text-[12px] hover:bg-darkTwo transition ease-in-out'>See more about me
              <FaAnglesDown className='animate-pulse'/>
            </button>
          </div>
          <ul className='my-2 flex gap-4'>
            {mediaLinks.map((media) => (
              <li key={media.id}>
                <Link to={media.URL} target="_blank">
                  <media.icon className='text-lightTwo opacity-50 text-[26px] hover:opacity-100 hover:scale-125 transition-all ease-in-out duration-300'/>
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