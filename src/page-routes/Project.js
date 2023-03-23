import React from "react";
import Work from "../components/Work";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection2 from "../components/HeroSection2";
const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroSection2
        heading="MY PROJECTS"
        text="Explore some of my recent works"
      />
      <Work />
      <Footer />
    </div>
  );
};

export default Project;
