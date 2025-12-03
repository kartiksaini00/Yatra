import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import './App.css'
import Tours from './Pages/Tours.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Gallery from './Pages/Gallery.jsx'
import Contact from './Pages/Contact.jsx' 
import Footer from './Components/Footer.jsx';
import ScrollToTop from 'react-scroll-to-top';

const router = createBrowserRouter([
  { path: '/',
    element: <><Navbar/><Home/><Footer/></>,
  },
   { path: '/tours',
    element: <><Navbar/><Tours/><Footer/></>,
  },
   
  { path: '/about',
    element: <><Navbar/><About/><Footer/></>,
  },
   { path: '/gallery',
    element: <><Navbar/><Gallery/><Footer/></>,
  },
   { path: '/contact',
    element: <><Navbar/><Contact/><Footer/></>,
  },
])

const App = () => {
  return (
    <>
    <RouterProvider router={router} />
    <ScrollToTop smooth color="white" style={{backgroundColor:"#EF4444" , display:'flex', alignItems:'center', justifyContent:'center'}} />
    </>
  )
}

export default App
