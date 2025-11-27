import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function NavHeader() {

  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <nav className="navbar navbar-light navbar-expand-md fixed-top">
      <div className="navbar-header">
        <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="nav shift navbar-collapse collapse justify-content-between align-items-center w-100" id="collapsingNavbar" style={{zIndex: 1, backgroundColor: "white"}}>
        <ul className="navbar-nav mx-auto text-center">
          <li className="nav-item"><Link to="/" className={"nav-link" + (url === "/" ? " active" : "")}>Home</Link></li>
          <li className="nav-item"><Link to="/aboutme" className={"nav-link" + (url === "/aboutme" ? " active" : "")}>About Me</Link></li>
          <li className="nav-item"><Link to="/projects" className={"nav-link" + (url === "/projects" ? " active" : "")}>Projects</Link></li>
          <li className="nav-item resume"><Link to="/resume" className={"nav-link" + (url === "/resume" ? " active" : "")}>Resume</Link></li>
          <li className="nav-item"><Link to="/contact" className={"nav-link" + (url === "/contact" ? " active" : "")}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
