import React, { useEffect } from "react";
import "./Trip.css";
import Tripdata from "./Tripdata";
import TripImage1 from "../assets/5.jpg";
import TripImage2 from "../assets/6.jpg";
import TripImage3 from "../assets/8.jpg";
import AOS from 'aos';

const Trip = () => {
  useEffect(()=>{
    AOS.init({
      
    });
  },[])
  return (
    <>
      <div className="trip" data-aos="fade-up">
        <h1>Recent Trips</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          architecto.
        </p>

        <div className="tripcard">
          <Tripdata
            image={TripImage1}
            heading={"Trip in Merina"}
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione deserunt quos accusantium voluptate, quae hic quas magnam temporibus aspernatur perspiciatis?"
            data-aos="fade-up"
         />
          <Tripdata
            image={TripImage2}
            heading={"Trip in Panakal Park"}
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione deserunt quos accusantium voluptate, quae hic quas magnam temporibus aspernatur perspiciatis?"
            data-aos="fade-up"
        />
          <Tripdata
            image={TripImage3}
            heading={"Trip in Guindy"}
        
            data-aos="fade-up"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione deserunt quos accusantium voluptate, quae hic quas magnam temporibus aspernatur perspiciatis?"
          />
        </div>
      </div>
    </>
  );
};

export default Trip;
