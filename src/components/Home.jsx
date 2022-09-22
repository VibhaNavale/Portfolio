import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import NavHeader from "./NavHeader";
import VibhaNavale from "../assets/images/VibhaNavale.jpg";

export default function Home() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = require("../assets/js/fluid-simulation.js");
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <NavHeader />
      <canvas className="fluid-canvas"></canvas>
      <div>
        <h1 className="home-text welcome-text">Welcome to my portfolio!</h1><br/>
        <img src={VibhaNavale} alt="logo" className="my-pic" />
        <div className="home-text intro-text">
          <Typewriter
            options={{
              delay: 110,
              cursor: '_'
            }}
            onInit={(typewriter)=> {
              typewriter
              .typeString(`I am <b>VIBHA SUNEEL NAVALE,</b><br/>
                a Software Developer. <br/>
                I write code during the day... And at night? I fix the 10,000 bugs that I encounter during the day 😆`)
              .start();
            }}
          />
        </div>
      </div>
    </div>
  );
}
