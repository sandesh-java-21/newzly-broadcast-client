import React, { useState } from "react";
import "./navbar.css";

import Typewriter from "typewriter-effect";

import newzlyLogo from "./newzia-best.jpg";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img
            src={
              "https://szabist.edu.pk/wp-content/uploads/2022/09/Logos-for-web-01-300x98-1.png"
            }
            alt=""
          />
        </div>
        <div className="newzly-text">
          {/* <h2>N E W Z L Y</h2> */}
          <Typewriter
            options={{
              strings: ["N E W Z L Y"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="navbar-right">
          <img src={"https://zabefest.com/target001.png"} alt="Right Logo" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
