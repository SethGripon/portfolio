import React from 'react'

import { projectList } from '../constants'
import smallPaint from '../assets/second-paint.png'

const Projects = () => {
  return (
    <section name='project' className='text-lightTwo h-full'>
      <div className='md:mx-32 xs:mx-10 mx-4 flex flex-col items-center gap-5 my-10 h-full'>
        <ul className='columns-1 sm:columns-2 pt-2 gap-4'>
          <div className='relative flex justify-center pt-4 pb-6'>
            <h1 className='lg:text-[48px] xs:text-[32px] text-[24px] font-semibold select-none z-10'>Projects.</h1>
            <img className='absolute -top-4 -rotate-[60deg] w-[135px] opacity-60 z-0' src={smallPaint} alt="" />
          </div>
          {projectList.map((project) => (
            <li key={project.id} className='relative group mb-4 break-inside-avoid overflow-hidden cursor-pointer'>
              <img src={project.imgURL} className='w-full object-cover rounded-lg' alt="" />
              <div className='absolute bottom-4 left-5 z-10 translate-y-20 group-hover:translate-y-0 transition-all ease-in-out duration-500'>
                <h1 className='lg:text-[24px] xs:text-[18px] text-[12px] font-semibold'>{project.name}</h1>
                <ul className='flex flex-wrap gap-2'>
                  {project.lngList.map((lng, index) => (
                    <li 
                      key={index}
                      className='lg:text-[10px] xs:text-[8px] text-[6px] bg-secondary py-1 px-2 rounded-lg font-semibold '>
                        {lng}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='absolute inset-0 group-hover:bg-gradient-to-b from-transparent to-darkOne'></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects