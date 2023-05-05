import React from 'react'
import Hero from '../components/Hero'
import serviceImage from '../assets/1.jpg'
import Trip from '../components/Trip'

const Service = () => {
  return (
    <>
    <Hero
    cName="hero-mid"
    heroImage={serviceImage}
    title="Service"
    
    />
    
    <Trip />
    
    </>
  )
}

export default Service