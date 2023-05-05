import React, { useEffect } from "react";
import AOS from 'aos';

const Tripdata = ({ image, heading, text, altText }) => {
  useEffect(()=>{
    AOS.init({
      
    });
  },[])
  return (
    <>
      <div className="t-card" data-aos="fade-up">
        <div className="t-image">
          <img src={image} alt={altText} />
        </div>
        <h4>{heading}</h4>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Tripdata;
