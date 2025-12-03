import React from 'react'
import Contactcomp from '../Components/Contact.jsx'
import TopBanner from '../Components/TopBanner'

const Contact = () => {
  return (
    <div className='pt-16'>
      <TopBanner text='Contact Us' />
     <Contactcomp/>
    </div>
  )
}

export default Contact
