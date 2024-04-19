import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Connect from "./components/Connect";
import Aws from "./components/Aws";
import Footer from "./components/Footer";
import NewContact from "./components/NewContact";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-neutral-950">
      <Navbar />
      <Home />
      {/* <Connect /> */}
      <About />
      <Skills />
      <Aws />
      {/* <Work /> */}
      <Projects />
      <Resume />
      {/* <Contact /> */}
      <NewContact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
