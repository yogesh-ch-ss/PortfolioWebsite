import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Connect from "./components/Connect";

function App() {
  return (
    <div className="bg-neutral-950">
      <Navbar />
      <Home />
      <Connect />
      <About />
      <Skills />
      <Work />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
