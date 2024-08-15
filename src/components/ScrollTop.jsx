import React from 'react'
import { RiArrowUpDoubleFill } from "react-icons/ri";
import { Link } from 'react-scroll';

import { motion, useScroll, useAnimation, useMotionValueEvent } from 'framer-motion';

const ScrollTop = () => {
  const controls = useAnimation()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    latest > 150 ? controls.start({ y: 0 }) : controls.start({ opacity: 1, y: 100 })
  })

  return (
    <>
      <motion.div
        className='fixed bottom-3 right-8 text-lightOne bg-darkOne cursor-pointer'
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        <Link
          activeClass='active'
          to='home'
          spy={true}
          smooth={true}
          offset={0}
          duration={900}>
          <RiArrowUpDoubleFill className='text-[40px]' />
        </Link>
      </motion.div>
    </>
  )
}

export default ScrollTop