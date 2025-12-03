import React from 'react'
import contactImg from '../assets/contactimg.jpg'

const ContactComp = () => {
  return (
    <div className='flex flex-col max-w-7xl mx-auto md:flex-row lg:h-screen items-center'>
        <div className='flex-1 bg-gray-100 flex justify-center items-cneter'>
            <img src={contactImg} alt="Contact Us" className='w-full h-full max-w-md md:max-w-full object-cover' />
        </div>
      <div className='flex-1 bg-white w-full flex flex-col justify-center px-8 py-12'>
        <h2 className='text-3xl font-bold text-gray-800 mb-6'>Get in Touch</h2>
        <form className='space-y-8'>
            <div>
                <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
                <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder='Enter your name'
                className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm p-2'
                required 
                />
            </div>
            <div>
                <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
                <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder='Enter your email'
                className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm p-2'
                required 
                />
            </div>
            <div>
                <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Message</label>
                <textarea
                id="message" 
                name="message" 
                rows='5'
                placeholder='Enter your message'
                className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm p-2'
                required 
                />
            </div>
            <button type="submit" className='bg-red-500 w-full text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer focus:ring-offset-2'>Send Message</button>
        </form>
      </div>
    </div>

  )
}

export default Contact
