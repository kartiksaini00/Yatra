import React from 'react'
import TopBanner from '../Components/TopBanner.jsx'
import image6 from '../assets/image6.jpg';
import trip from '../assets/trip.gif';
import time from '../assets/fire-time.gif';
import price from '../assets/best-price.gif';

const About = () => {
  return (
    <div className="pt-16">
      <TopBanner text='About Us' />
      <div className='max-w-7xl mx-auto my-10'>
        <div className='flex flex-col md:flex-row px-4 md:px-0 gap-4'>
          <div className='flex-1'>
            <div className='relative'>
              <img src={image6} alt="" className='rounded-lg' />
              <div className='absolute bottom-[45%] right-0 p-4 bg-red-500 text-white font-bold md:text-4xl rounded-lg'>
                HOW WE ARE BEST <br />FOR TRAVEL!
              </div>
            </div>
            <h1 className='md:text-4xl font-bold mt-6 mb-4 text-3xl'>How We Are Best For Travel</h1>
            <p className='text-gray-500'>At Yatra, we believe travel should be effortless, inspiring, and unforgettable. What makes us the best is our commitment to crafting personalized journeys that match every traveler’s dreams. From expert destination knowledge and handpicked experiences to seamless planning and 24/7 support, we ensure every detail is taken care of with care and precision. Whether you're exploring iconic landmarks or discovering hidden gems, we go above and beyond to deliver comfort, safety, and exceptional value—so you can focus on enjoying the journey, not worrying about the logistics.</p>
          </div>
          <div className='flex-1'>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <div className='flex flex-col md:flex-row items-start mb-4'>
                <img src={trip} alt=""  className='w-20'/>
                <div>
                  <h2 className='ml-2 text-2xl font-semibold mb-1'>50+ Destinations</h2>
                  <p className='text-gray-700 ml-2 lg:mr-28'>We offer the best travel experiences with personalized services and unbeatable prices.</p>
                </div>
              </div>
             
            </div>
             <div className='bg-white p-6 my-4 rounded-lg shadow-md'>
              <div className='flex flex-col md:flex-row items-start mb-4'>
                <img src={price} alt=""  className='w-20'/>
                <div>
                  <h2 className='ml-2 text-2xl font-semibold mb-1'>Best price</h2>
                  <p className='text-gray-700 ml-2 lg:mr-28'>We offer the best travel experiences with personalized services and unbeatable prices.</p>
                </div>
              </div>
             
            </div>
             <div className='bg-white p-6 rounded-lg shadow-md'>
              <div className='flex flex-col md;flex-row items-start mb-4'>
                <img src={time} alt=""  className='w-20'/>
                <div>
                  <h2 className='ml-2 text-2xl font-semibold mb-1'>Super Fast Booking</h2>
                  <p className='text-gray-700 ml-2 lg:mr-28'>We offer the best travel experiences with personalized services and unbeatable prices.</p>
                </div>
              </div>
             
            </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default About
