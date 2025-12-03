import React from 'react'
import footer from '../assets/footer-pattern.jpg';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-gray-800 text-white py-10'
            style={{
                backgroundImage: `url(${footer})`,
                backgroundPosition: 'bottom',
                backgroundSize: 'cover'
            }}>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='grid grid-col-2 md:grid-cols-4 gap-8'>
                    <div>
                        <h1 className='font-bold text-4xl mb-4'>YATRA</h1>
                        <p>We're dedicated to making your travel dreams come true with expertly curated tours and unforgettable experiences.</p>
                    </div>
                    <div className='flex flex-col lg:items-center'>
                        <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
                        <ul>
                            <li><a href="#" className='hover:underline'>Home</a></li>
                            <li><a href="#" className='hover:underline'>Destinations</a></li>
                            <li><a href="#" className='hover:underline'>Tours</a></li>
                            <li><a href="#" className='hover:underline'>About Us</a></li>
                            <li><a href="#" className='hover:underline'>Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
                        <ul className='space-y-2 text-sm'>
                            <li>Email: contact@yatra.com</li>
                            <li>Phone: +123 456 7890</li>
                            <li>Address: 123 Travel St, Adventure City</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>Follow us</h3>
                        <div className='flex space-x-4 text-2xl hover:text-red-500'>
                            <FaFacebook  className='hover:text-red-500'/>
                            <FaInstagram className='hover:text-red-500' />
                            <FaTwitter className='hover:text-red-500' />
                        </div>
                    </div>

                </div>
                <div className='mt-8 pt-8 border-t border-gray-700 text-center justify-end text-sm'>
                    <p>&copy; {new Date().getFullYear()} YATRA. All rights reserved.</p>
                </div>
            </div>

        </footer>

    )
}

export default Footer
