import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import NavHeader from "./NavHeader";
import VibhaNavale from "../assets/images/VibhaNavale.jpeg";

export default function Home() {
  useEffect(() => {
    // Check if we just reloaded
    const hasReloaded = sessionStorage.getItem('homePageReloaded');
    
    if (!hasReloaded) {
      // Set flag and reload
      sessionStorage.setItem('homePageReloaded', 'true');
      window.location.reload();
    } else {
      // Clear flag after a short delay so next visit will reload
      const timer = setTimeout(() => {
        sessionStorage.removeItem('homePageReloaded');
      }, 1000);

      // Load fluid simulation
      const loadTimer = setTimeout(() => {
        const canvas = document.querySelector('.fluid-canvas');
        if (canvas && canvas.offsetWidth > 0) {
          import("../assets/js/fluid-simulation.js")
            .catch(err => console.error('Error loading fluid simulation:', err));
        }
      }, 100);

      return () => {
        clearTimeout(timer);
        clearTimeout(loadTimer);
      };
    }
  }, []);

  return (
    <div className="home-page">
      <NavHeader />
      <canvas className="fluid-canvas"></canvas>
      <div className="home-content">
        <h1 className="home-text welcome-text"><span>Welcome to my portfolio!</span></h1>
        <img src={VibhaNavale} alt="Vibha" className="my-pic" />
        <div className="home-text intro-text">
          <Typewriter
            options={{
              delay: 80,
              cursor: '|'
            }}
            onInit={(typewriter)=> {
              typewriter
              .typeString(`Hi! I am <b>VIBHA NAVALE</b>,<br/>
                a recent M.S. in Computer Science graduate from the University of Illinois Chicago (UIC),
                and a full-stack software engineer with over two years of experience.`)
              .start();
            }}
          />
        </div>
      </div>
    </div>
  );
}
