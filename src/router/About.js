import React from 'react'
import Hero from '../components/Hero'
import aboutImage from '../assets/night.jpg'
import Aboutus from '../components/Aboutus'

const About = () => {
  return (
    <>
  
    <Hero 
    cName="hero-mid"
    heroImage={aboutImage}
    title="About"
    
    />
    
    <Aboutus />
    </>
  )
}

export default About