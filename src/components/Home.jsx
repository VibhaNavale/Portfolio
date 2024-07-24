import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import NavHeader from "./NavHeader";
import VibhaNavale from "../assets/images/VibhaNavale.jpeg";

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
        <img src={VibhaNavale} alt="Vibha" className="my-pic" />
        <div className="home-text intro-text">
          <Typewriter
            options={{
              delay: 110,
              cursor: '_'
            }}
            onInit={(typewriter)=> {
              typewriter
              .typeString(`I am <b>VIBHA NAVALE,</b><br/>
                an MS in Computer Science student at the University of Illinois Chicago (UIC) <br/>
                with 2.5 years of experience as a Full-stack Software Engineer.`)
              .start();
            }}
          />
        </div>
      </div>
    </div>
  );
}
