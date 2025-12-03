import React from 'react'
import Hero from '../Components/hero.jsx'
import FeatureDestination from '../Components/FeatureDestination.jsx'
import Features from '../Components/Features.jsx'
import Gallerycomp from '../Components/Gallerycomp.jsx'
import Banner from '../Components/Banner.jsx'
import Contact from '../Components/ContactComp.jsx'

const Home = () => {
  return (
    <div className="pt-16">
      <Hero/>
      <FeatureDestination/>
      <Features/> 
      <Gallerycomp/>
      <Banner/>
      <Contact/>
    </div>
  )
}

export default Home
