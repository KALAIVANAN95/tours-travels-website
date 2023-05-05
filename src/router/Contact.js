import React from 'react'
import Hero from '../components/Hero'
import contactImage from '../assets/2.jpg'
import Contactus from '../components/Contactus'

const Contact = () => {
  return (
    <>
    <Hero
    cName="hero-mid"
    heroImage={contactImage}
    title="Contact"
    
    />
    
    <Contactus />
    </>
  )
}

export default Contact