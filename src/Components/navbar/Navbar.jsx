import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className='sticky mx-auto top-0 transition-all bg-transparent z-50'>
      <div className='bg-black/75 backdrop-blur-sm px-4 fixed w-full z-50 top-0 py-4'>
        <div className='max-w-7xl mx-auto px-5 flex justify-between items-center'>
          
          {/* Logo with SVG Icon */}
          <div className='flex items-center gap-3'>
            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 6L22 26L-2 26Z" fill="#ef4444" opacity="0.9"/>
              <path d="M16 14L28 26L4 26Z" fill="#ef4444"/>
            </svg>
          <Link to="/"> <h1 className='text-2xl font-bold text-white tracking-wider' style={{fontFamily: "'Montserrat', sans-serif"}}>
              YATRA
            </h1></Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-5'>
            <nav className='flex gap-7'>
              <ul className='flex items-center font-semibold text-white text-lg gap-7'>
               <li className='cursor-pointer hover:text-red-500 transition-colors'><Link to="/">Home</Link></li>
                <li className='cursor-pointer hover:text-red-500 transition-colors'><Link to="/tours">Tours</Link></li>
                <li className='cursor-pointer hover:text-red-500 transition-colors'><Link to="/about">About Us</Link></li>
                <li className='cursor-pointer hover:text-red-500 transition-colors'><Link to="/gallery">Gallery</Link></li>
                <li className='cursor-pointer hover:text-red-500 transition-colors'><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
            <HiMenuAlt1 onClick={toggleMenu} className='text-white text-2xl cursor-pointer md:hidden' 
            size = {30} />
            <button className='bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-semibold transition-colors shadow-lg cursor-pointer'>
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className='md:hidden text-white text-2xl cursor-pointer' onClick={()=>setShowMenu(true)}>
            ☰
          </button>
        </div>
        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
    </header>
  )
}

export default Navbar
