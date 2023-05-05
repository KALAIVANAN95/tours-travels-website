import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'

const Hero = ({cName,title,text,heroImage,url,btnClass,buttonText}) => {
  return (
    <>
    <div className={cName}>
    <img src={heroImage} alt='heroimage' className='hero-img'/>


    <div className="hero-text">
        <h1>{title}</h1>
        <p>{text}</p>
        <Link to={url} className={btnClass}>{buttonText}</Link>
    </div>
    </div>


    </>
  )
}

export default Hero