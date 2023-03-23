import React from "react";
import "./index.css";
import Home from "./page-routes/Home";
import About from "./page-routes/About";
import Project from "./page-routes/Project";
import Contact from "./page-routes/Contact";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
export default App;
