import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Aws from "./components/Aws";
import Footer from "./components/Footer";
import NewContact from "./components/NewContact";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-neutral-950">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Aws />
      <Projects />
      <Resume />
      <NewContact />
      <Footer />
    </div>
  );
}

export default App;
