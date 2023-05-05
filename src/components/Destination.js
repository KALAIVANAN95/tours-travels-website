import React from "react";
import "./Destination.css";
import Destinationdata from "./Destinationdata";

import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Popular Desitination</h1>
        <p>Tours give you the opportunity to see the world</p>

        <Destinationdata
          newClass="first-des"
          heading="Local Chennai trip"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
        inventore hic, fugiat animi facere in optio pariatur illo odio
        molestias expedita magni aspernatur libero, sit, ducimus atque
        voluptatibus aut doloribus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
        inventore hic, fugiat animi facere in optio pariatur illo odio
        molestias expedita magni aspernatur libero, sit, ducimus atque
        voluptatibus aut doloribus!"
          img1={Mountain1}
          img2={Mountain2}
          imagetext1={"mountain1"}
          imagetext2={"mountain2"}
        />

        <Destinationdata
          newClass="first-des-reverse"
          heading="Merina Chennai trip"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
        inventore hic, fugiat animi facere in optio pariatur illo odio
        molestias expedita magni aspernatur libero, sit, ducimus atque
        voluptatibus aut doloribus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
        inventore hic, fugiat animi facere in optio pariatur illo odio
        molestias expedita magni aspernatur libero, sit, ducimus atque
        voluptatibus aut doloribus!"
          img1={Mountain3}
          img2={Mountain4}
          imagetext1={"mountain3"}
          imagetext2={"mountain4"}
        />
      </div>
    </>
  );
};

export default Destination;
