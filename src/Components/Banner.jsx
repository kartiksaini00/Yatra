import React from 'react'
import banner from '../assets/banner.jpg';

const Banner = () => {
  return (
    <div className='h-[500px] relative flex items-center' style ={{backgroundImage: `url(${banner})`,backgroundSize:'cover', 
    backgroundPosition:'center', backgroundAttachment:'fixed' }}>
    <div className='bg-black inset-0 opacity-65 absolute'></div>  
    <div className='text-white flex-col flex items-center justify-center px-4 lg:px-0 text-center max-w-7xl mx-auto z-20'>
    <h2 className='lg:text-6xl text-4xl font-bold mb-6'>Ready to Start Your Adventure</h2>
    <p className='text-xl mb-8'>Book your dream vacation today and create unforgettable memories</p>
    <button className='bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-6 py-3 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-red-500/25 hover:scale-95 transition-all duration-300 transform cursor-pointer'>
                    Start Planing
                  </button>
    </div>
    </div>
  )
}

export default Banner
