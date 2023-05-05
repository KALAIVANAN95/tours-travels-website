import React from "react";
import Hero from "../components/Hero";
import heroimages from "../assets/12.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";

const Home = () => {
  return (
    <div>
      <Hero
        cName="hero"
        text={"Choose Your Favourite Destination"}
        title={"Your Journey Your Story"}
        heroImage={heroimages}
        url={"/"}
        buttonText={"Travel Plan"}
        btnClass="show"
      />

    <Destination />
    <Trip />
      
    </div>
  );
};

export default Home;
