import "./HeroSectionStyles.css";
import "../index.css";

import React from "react";
import IntroImg from "../assets/img1.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hello, I am a web developer</p>
        <h1>React Developer</h1>
        <div>
          <Link to="/project" className="btn btn-primary">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
