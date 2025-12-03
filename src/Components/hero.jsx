import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Search } from 'lucide-react';
import banner1 from '../assets/image12.jpg';
import banner2 from '../assets/image1.jpg';
import banner3 from '../assets/image7.jpg';
import banner4 from '../assets/image8.jpg';
import banner5 from '../assets/image2.jpg';
import banner6 from '../assets/image9.jpg';

const hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    
  };
  return (
    <div className='slider-container overflow-hidden relative'>
      <Slider {...settings}>
      <div className=''>
        <div className='h-[600px] lg:h-[800px] relative ' 
        style={{backgroundImage: `url(${banner1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
       }}>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='relative max-w-7xl mx-auto'>
          <div className='flex h-[650px] justify-center items-center lg:pt-0 pt-20'>
            <div className='flex flex-col space-y-8 justify-center items-center text-center px-5 md:px-0'>
              <h1 className='text-white font-bold text-4xl lg:text-6xl'>Discover Your Next Adventure</h1>
              <p className='text-white lg:text-lg lg:w-[700px]'>Explore breathtaking destination, create unforgettable memories and embark on the journey of a lifetime.</p>
              <button className='bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-6 py-3 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-red-500/25 hover:scale-95 transition-all duration-300 transform cursor-pointer'>
                    Start Exploring → 
                  </button>
            </div>
          </div>
        </div>

        </div>
      </div>
      <div>
         <div className=''>
        <div className='h-[600px] lg:h-[800px] relative ' 
        style={{backgroundImage: `url(${banner2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
       }}>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='relative max-w-7xl mx-auto'>
          <div className='flex h-[650px] justify-center items-center lg:pt-0 pt-20'>
            <div className='flex flex-col space-y-8 justify-center items-center text-center px-5 md:px-0'>
              <h1 className='text-white font-bold text-4xl lg:text-6xl'>Discover Your Next Adventure</h1>
              <p className='text-white lg:text-lg lg:w-[700px]'>Explore breathtaking destination, create unforgettable memories and embark on the journey of a lifetime.</p>
             <button className='bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-6 py-3 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-red-500/25 hover:scale-95 transition-all duration-300 transform cursor-pointer'>
                    Start Exploring → 
                  </button>
            </div>
          </div>
        </div>

        </div>
      </div>
      </div>
      <div>
         <div className=''>
        <div className='h-[600px] lg:h-[800px] relative ' 
        style={{backgroundImage: `url(${banner3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
       }}>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='relative max-w-7xl mx-auto'>
          <div className='flex h-[650px] justify-center items-center lg:pt-0 pt-20'>
            <div className='flex flex-col space-y-8 justify-center items-center text-center px-5 md:px-0'>
              <h1 className='text-white font-bold text-4xl lg:text-6xl'>Discover Your Next Adventure</h1>
              <p className='text-white lg:text-lg lg:w-[700px]'>Explore breathtaking destination, create unforgettable memories and embark on the journey of a lifetime.</p>
              <button className='bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-6 py-3 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-red-500/25 hover:scale-95 transition-all duration-300 transform cursor-pointer'>
                    Start Exploring → 
                  </button>
            </div>
          </div>
        </div>

        </div>
      </div>
      </div>
      <div>
         <div className=''>
        <div className='h-[600px] lg:h-[800px] relative ' 
        style={{backgroundImage: `url(${banner4})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
       }}>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='relative max-w-7xl mx-auto'>
          <div className='flex h-[650px] justify-center items-center lg:pt-0 pt-20'>
            <div className='flex flex-col space-y-8 justify-center items-center text-center px-5 md:px-0'>
              <h1 className='text-white font-bold text-4xl lg:text-6xl'>Discover Your Next Adventure</h1>
              <p className='text-white lg:text-lg lg:w-[700px]'>Explore breathtaking destination, create unforgettable memories and embark on the journey of a lifetime.</p>
              <button className='bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-6 py-3 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-red-500/25 hover:scale-95 transition-all duration-300 transform cursor-pointer'>
                    Start Exploring → 
                  </button>
            </div>
          </div>
        </div>

        </div>
      </div>
      </div>
      <div>
        <div className=''>
        <div className='h-[600px] lg:h-[800px] relative ' 
        style={{backgroundImage: `url(${banner5})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
       }}>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='relative max-w-7xl mx-auto'>
          <div className='flex h-[650px] justify-center items-center lg:pt-0 pt-20'>
            <div className='flex flex-col space-y-8 justify-center items-center text-center px-5 md:px-0'>
              <h1 className='text-white font-bold text-4xl lg:text-6xl'>Discover Your Next Adventure</h1>
              <p className='text-white lg:text-lg lg:w-[700px]'>Explore breathtaking destination, create unforgettable memories and embark on the journey of a lifetime.</p>
             <button className='bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-6 py-3 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-red-500/25 hover:scale-95 transition-all duration-300 transform cursor-pointer'>
                    Start Exploring → 
                  </button>
            </div>
          </div>
        </div>

        </div>
      </div>
      </div>
      <div>
        <div className=''>
        <div className='h-[600px] lg:h-[800px] relative ' 
        style={{backgroundImage: `url(${banner6})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
       }}>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='relative max-w-7xl mx-auto'>
          <div className='flex h-[650px] justify-center items-center lg:pt-0 pt-20'>
            <div className='flex flex-col space-y-8 justify-center items-center text-center px-5 md:px-0'>
              <h1 className='text-white font-bold text-4xl lg:text-6xl'>Discover Your Next Adventure</h1>
              <p className='text-white lg:text-lg lg:w-[700px]'>Explore breathtaking destination, create unforgettable memories and embark on the journey of a lifetime.</p>
              <button className='bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-6 py-3 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-red-500/25 hover:scale-95 transition-all duration-300 transform cursor-pointer'>
                    Start Exploring → 
                  </button>
            </div>
          </div>
        </div>

        </div>
      </div>
      </div>
    </Slider>
    <div className='absolute bottom-6 left-1/2 -translate-x-1/2 lg:bottom-8 z-20 w-full max-w-4xl px-4 lg:px-0' >
      <div className='bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-6 lg:p-8'>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6 items-end'>
          <div className='flex flex-col gap-2'>
            
             <label className='flex items-center gap-2 font-semibold text-gray-700 mb-2 text-sm'>
                <Search className='h-4 w-4' /> Location
              </label>
            <select name="" id="" className='border border-gray-300 rounded-sm p-1'>
              <option value="">Select Options</option>
              <option value="">Mumbai</option>
              <option value="">Goa</option>
              <option value="">Ladakh</option>
              <option value="">Kashmir</option>
              <option value="">Agra</option>
              <option value="">Ayodhya</option>
              <option value="">Jaipur</option>
              <option value="">Darjeling</option>
              <option value="">Shimla</option>
              <option value="">Delhi</option>
              <option value="">Kurukshetra</option>
            </select>
          </div>
          <div className='flex flex-col gap-2'>
             <label className='block font-semibold text-gray-700 mb-2 text-sm'>Check In</label>
            <input type="date" className='border p-1 border-gray-300 rounded-sm'/>
          </div>
          <div className='flex flex-col gap-2'>
           <label className='block font-semibold text-gray-700 mb-2 text-sm'>Check Out</label>
            <input type="date" className='border p-1 border-gray-300 rounded-sm'/>
          </div>
          <div className='flex flex-col gap-2'>
           <label className='block font-semibold text-gray-700 mb-2 text-sm'>Guests</label>
           <select name="" id="" className='border border-gray-300 rounded-sm p-1'>
              <option value="">Select Options</option>
              <option value="">2 guests, 1 children</option>
              <option value="">2 guests, 2 children</option>
              <option value="">2 guests, 0 children</option>
              <option value="">others</option>
             
              </select>
          </div>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="" className='text-white'>Transmission</label>
          <button className=' cursor-pointer lg:w-auto bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-red-500/50 hover:scale-105 transition-all duration-300 h-full'>
                Book Now
              </button>

        </div>
      </div>
    </div>
    </div>
  )
}

export default hero
