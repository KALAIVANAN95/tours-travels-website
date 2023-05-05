import React, { useEffect } from "react";
import "./Destination.css";
import AOS from 'aos';

const Destinationdata = ({
  heading,
  text,
  img1,
  img2,
  imagetext1,
  imagetext2,
  newClass
}) => {

  
  useEffect(()=>{
    AOS.init({
      
    });
  },[])
  return (
    <>
      <div className={newClass} data-aos="fade-up">
        <div className="des-text">
          <h2>{heading}</h2>
          <p>{text}</p>
        </div>

        <div className="image">
          <img src={img1} alt={imagetext1} />
          <img src={img2} alt={imagetext2} />
        </div>
      </div>
    </>
  );
};

export default Destinationdata;
