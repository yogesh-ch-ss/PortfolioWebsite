import React, { useState, useEffect } from "react";

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
  const [lastCommitDate, setLastCommitDate] = useState("");

  useEffect(() => {
    // Fetch last commit date from the server
    fetch("/lastCommitDate.txt")
      .then((response) => response.text())
      .then((data) => setLastCommitDate(data))
      .catch((error) =>
        console.error("Error fetching last commit date:", error)
      );
  }, []);

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
      <Footer lastCommitDate={lastCommitDate} />
    </div>
  );
}

export default App;
