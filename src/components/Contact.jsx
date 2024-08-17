import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

import { contactLinks } from '../constants';
import smallPaint from '../assets/second-paint.png'

export const contactList = [
  {
    id: 1,
    name: 'name',
    text: 'First Name',
  },
  {
    id: 2,
    name: 'email',
    text: 'Email Address'
  },
  {
    id: 3,
    name: 'subject',
    text: 'Subject'
  },
  {
    id: 4,
    name: 'message',
    text: 'Message'
  },
]

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_i2c9636', 'template_m49ndif', form.current, {
        publicKey: 'KonYw1XTEozAM3T3Q',
      })
      .then(
        () => {
          alert('Your message has been sent, thanks for sending it and please wait patiently 😊')
        },
        (error) => {
          alert('FAILED...', error.text)
        },
      )
    
    e.target.reset()
  }

  return (
    <section name='contact' className='md:h-screen text-lightTwo bg-darkTwo h-full'>
      <div className='md:grid-cols-2 md:mx-32 xs:mx-10 mx-4 grid pt-10 h-full'>
        <div className='md:items-start flex flex-col justify-center items-center'>
          <div className='relative flex'>
            <h1 className='lg:text-[48px] xs:text-[32px] text-[24px] font-semibold select-none z-10'>Contact Me.</h1>
            <img className='absolute lg:-top-4 -top-12 left-10 -rotate-[60deg] w-[150px] opacity-60 z-0' src={smallPaint} alt="" />
          </div>
          <p className='md:text-start md:me-10 md:text-[18px] xs:text-[14px] text-[12px] text-center my-5 '>Let's work togerther! I'll send replies as soon as I get it. Open to any job opportunities and collaborations.</p>
          <div>
            <p className='text-[12px] md:mt-3'>You may also message me on these platforms.</p>
            <ul className='md:justify-start justify-center my-4 flex gap-4'>
              {contactLinks.map((contact) => (
                <li key={contact.id}>
                  <Link to={contact.URL} target="_blank">
                    <contact.icon className='text-lightTwo opacity-50 xs:text-[26px] text-[20px] hover:opacity-100 hover:scale-125 transition-all ease-in-out duration-300' />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col justify-center items-start'>
          <h1 className='sm:text-[20px] text-[14px] font-semibold py-2'>Send me a message. 👋</h1>
          <div className='grid grid-cols-2 gap-4 w-full'>
            {contactList.map((contact) => (
              <div key={contact.id} className={`relative ${contact.name === 'subject' ? 'col-span-2' : (contact.name === 'message' ? 'col-span-2 h-[200px]' : 'max-xs:col-span-2')}`}>
                {contact.name === 'message' ? (
                  <textarea
                    type="text"
                    name={contact.name}
                    className='w-full h-full peer bg-transparent border-4 border-darkOne px-3 py-4 outline-none focus:border-primary resize-none'
                    required />
                ) : (
                  <input
                    type="text"
                    name={contact.name}
                    className='w-full h-full peer bg-transparent border-4 border-darkOne px-3 py-4 outline-none focus:border-primary'
                    required />
                )}
                <label
                  className='sm:text-[16px] text-[12px] absolute top-5 left-3 peer-focus:-translate-y-7 peer-focus:text-primary peer-valid:-translate-y-7 text-slate-400 bg-darkTwo px-3 transition ease-in-out duration-300'>{contact.text}
                </label>
              </div>
            ))}
          </div>
          <button type="submit" value="Send" className='sm:text-[16px] text-[12px] flex items-center gap-2 py-2 px-4 bg-secondary my-4 rounded-lg hover:bg-primary transition ease-in-out duration-300 cursor-pointer'>
            Shoot
            <FaArrowRightLong />
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact