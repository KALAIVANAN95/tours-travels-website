import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import AOS from 'aos';
const Navbar = () => {
  const [bars, setBars] = useState(true);
  const onClicksetBars = () => {
    if (bars === true) {
      setBars(false);
    } else {
      setBars(true);
    }
  };

  useEffect(()=>{
    AOS.init({
      
    });
  },[])
  return (
    <>
    
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Tours</h1>

        <div className="menu-icons" onClick={onClicksetBars}>
          <i className={bars ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={bars ? "nav-menu active":"nav-menu"}>
          {MenuItems.map((menuitem, index) => {
            let { title, url, cName, icon } = menuitem;
            return (
              <li key={index}>
                <Link to={url} className={cName}>
                  {" "}
                  <i className={icon}></i>
                  {title}
                </Link>
              </li>
            );
          })}

          <button className="sign-up">Sign Up</button>
        </ul>
      </nav>
   
    </>
  );
};

export default Navbar;
