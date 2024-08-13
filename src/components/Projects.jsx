import React from 'react'

import { projectList } from '../constants'

const Projects = () => {
  return (
    <section className='text-lightTwo h-full'>
      <div className='flex flex-col items-center gap-5 mx-32 my-20 h-full'>
        <ul className='columns-1 sm:columns-2 pt-2 gap-4'>
          <div className='relative flex justify-center py-4'>
            <h1 className='text-[48px] font-semibold select-none z-10'>Projects.</h1>
            <img className='absolute -top-4 -rotate-[60deg] w-[135px] opacity-60 z-0' src="src\assets\second-paint.png" alt="" />
          </div>
          {projectList.map((project) => (
            <li key={project.id} className='relative group mb-4 break-inside-avoid  overflow-hidden'>
              <img src={project.imgURL} className='w-full object-cover rounded-lg' alt="" />
              <div className='absolute bottom-4 left-5 z-10 translate-y-20 group-hover:translate-y-0 transition-all ease-in-out duration-500'>
                <h1 className='font-semibold text-[24px]'>{project.name}</h1>
                <ul className='flex gap-2'>
                  {project.lngList.map((lng, index) => (
                    <li 
                      key={index}
                      className='bg-secondary py-1 px-2 rounded-lg font-semibold text-[10px]'>
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