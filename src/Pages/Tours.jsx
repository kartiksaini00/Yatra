import React from 'react'
import TopBanner from '../Components/TopBanner.jsx'
import mumbai from '../assets/mumbai.jpg';
import delhi from '../assets/delhi.jpg';
import goa from '../assets/goa.jpg';
import ladakh from '../assets/ladakh.jpg';
import kashmir from '../assets/kashmir.jpg';
import agra from '../assets/agra.jpg';
import ayodhya from '../assets/ayodhya.jpg';
import jaipur from '../assets/jaipur.jpg';
import shimla from '../assets/shimla.jpg';
import kurukshetra from '../assets/kurukshetra.jpg';
import { Clock, Star } from 'lucide-react';

const Tours = () => {
  const destinationJson = [
    { name: "Mumbai", image: mumbai, time: "4 Days - 3 Nights", star: "4.0 (11 reviews)", price: "₹45,000" },
    { name: "Delhi", image: delhi, time: "4 Days - 3 Nights", star: "4.0 (15 reviews)", price: "₹15,000" },
    { name: "Goa", image: goa, time: "4 Days - 3 Nights", star: "4.2 (8 reviews)", price: "₹50,000" },
    { name: "Ladakh", image: ladakh, time: "4 Days - 3 Nights", star: "4.5 (9 reviews)", price: "₹85,000" },
    { name: "Kashmir", image: kashmir, time: "4 Days - 3 Nights", star: "4.0 (20 reviews)", price: "₹45,000" },
    { name: "Agra", image: agra, time: "4 Days - 3 Nights", star: "3.7 (10 reviews)", price: "₹20,000" },
    { name: "Jaipur", image: jaipur, time: "4 Days - 3 Nights", star: "4.1 (20 reviews)", price: "₹30,000" },
    { name: "Shimla", image: shimla, time: "4 Days - 3 Nights", star: "4.4 (15 reviews)", price: "₹40,000" },
    { name: "Kurukshetra", image: kurukshetra, time: "4 Days - 3 Nights", star: "3.9 (11 reviews)", price: "₹15,000" },
    { name: "Ayodhya", image: ayodhya, time: "4 Days - 3 Nights", star: "4.2 (13 reviews)", price: "₹25,000" },
  ];

  return (
    <div className='pt-16'>
      <TopBanner text='Tours' />
      <div className='max-w-7xl mx-auto my-10 px-4 md:px-6'>
        <h1 className='text-3xl lg:text-4xl font-serif mb-3 font-semibold text-center bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'>Top Destinations</h1>
        <hr className='w-[200px] h-1 bg-linear-to-r from-red-500 to-orange-500 mx-auto mb-10 shadow-sm rounded-full' />
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 place-items-center'>
          {destinationJson.map((destination, index) => (
            <div key={destination.name} className="w-full max-w-sm">
              <article
                className="group relative h-full flex flex-col overflow-hidden rounded-3xl 
                          bg-white/80 backdrop-blur-sm border border-white/50 
                          shadow-xl hover:shadow-2xl hover:shadow-red-500/10 
                          hover:-translate-y-2 hover:border-red-200/50
                          transition-all duration-500"
              >
          
                <div className="relative overflow-hidden bg-linear-to-br from-gray-50 to-gray-100">
                  <div className="aspect-4/3 w-full">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      loading="lazy"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
              
                  <span className="absolute top-3 left-3 z-10 bg-linear-to-r from-red-500 to-orange-500 
                                  px-3 py-1.5 text-xs font-bold text-white rounded-full 
                                  shadow-lg backdrop-blur-sm animate-pulse">
                    Popular
                  </span>

          
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 
                                  bg-linear-to-t from-black/80 via-black/30 to-transparent p-4">
                    <p className="text-sm font-bold text-white drop-shadow-lg">
                      From {destination.price}
                    </p>
                  </div>
                </div>

               
                <div className="flex-1 flex flex-col p-5 sm:p-6 gap-3">
                 
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{destination.time}</span>
                  </div>

                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 
                                line-clamp-1 group-hover:text-red-600 transition-colors">
                    {destination.name}
                  </h3>

                  <div className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="flex -space-x-1">
                      <Star className="w-5 h-5 text-amber-400 fill-amber-400 drop-shadow-sm" />
                      <Star className="w-5 h-5 text-amber-400 fill-amber-400 drop-shadow-sm" />
                      <Star className="w-5 h-5 text-amber-400 fill-amber-400 drop-shadow-sm" />
                      <Star className="w-5 h-5 text-amber-400 fill-amber-400 drop-shadow-sm" />
                      <Star className="w-5 h-5 text-gray-300" />
                    </div>
                    <span className="font-semibold text-gray-800">{destination.star}</span>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-2 
                                group-hover:text-gray-700 transition-colors">
                    Experience the beauty and culture of {destination.name}
                  </p>

                  <div className="flex items-center gap-3 pt-2 mt-auto">
                    <button className="flex-1 bg-linear-to-r from-red-500 to-red-600 
                                      px-4 py-2.5 text-sm sm:text-base font-bold text-white 
                                      rounded-2xl shadow-lg hover:shadow-red-500/50 
                                      hover:from-red-600 hover:to-red-700 hover:scale-[1.02]
                                      transition-all duration-300">
                      {destination.price}
                    </button>
                    <button className="flex-1 px-4 py-2.5 text-sm sm:text-base font-semibold 
                                      bg-white/60 backdrop-blur-sm border-2 border-gray-200 
                                      rounded-2xl hover:bg-black hover:text-white 
                                      hover:border-black hover:shadow-2xl
                                      transition-all duration-300">
                      Learn More →
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tours
