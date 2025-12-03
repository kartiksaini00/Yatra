import { X } from 'lucide-react'; 
import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ResponsiveMenu = ({showMenu, setShowMenu}) => {
  return (
    <div className={`${showMenu ? 'right-0' :"-right-full"} fixed bottom-0 top-0 x-20 flex h-screen w-[75%] flex-col
    justify-between bg-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}>
    <div>
        <button className ='border border-black rounded-lg absolute top-4 right-9' onClick={()=> setShowMenu(false)}><X/></button>
        <div className='flex items-center justify-start gap-3'></div>
        <FaUserCircle size ={50}/>
        <div>
            <h1>Hello User</h1>
            <h1 className='text-sm text-slate-500'>Premium User</h1>
        </div>
    </div>
    <div> 
        <nav className='mt-12'>
            <ul className='space-y-4 text-xl text-black flex flex-col '>
               <li onClick = {()=> setShowMenu(false)} className='cursor-pointer hover:text-red-500 transition-color'><Link to="/">Home</Link></li>
                <li onClick = {()=> setShowMenu(false)} className='cursor-pointer hover:text-red-500 transitioncolors'><Link to="/tours"></Link></li>
                <li onClick = {()=> setShowMenu(false)} className='cursor-pointer hover:text-red-500 transitioncolors'><Link to="/about">About Us</Link></li>
                <li onClick = {()=> setShowMenu(false)} className='cursor-pointer hover:text-red-500 transitioncolors'><Link to="/gallery">Gallery</Link></li>
                <li onClick = {()=> setShowMenu(false)} className='cursor-pointer hover:text-red-500 transitioncolors'><Link to="/contact">Contact</Link></li> 
                <Link to="#"><button onClick={()=> setShowMenu(false)} className='bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-semibold transition-colors shadow-lg cursor-pointer'>
                Book Now
            </button></Link>
            </ul>

        </nav>
    </div>
    <div>
      <h1>Made with ❤️ by Kartik</h1>
    </div>
    </div>
  )
}

export default ResponsiveMenu
