import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection2 from "../components/HeroSection2";

const About = (props) => {
  return (
    <div>
      <Navbar />
      <HeroSection2
        heading="WHO AM I?"
        text="I am a junior Front-End Developer"
      />
      <Footer />
    </div>
  );
};

export default About;
