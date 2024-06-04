import "./App.css";
import { Routes, Route } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particles from "./utils/particles";
import Home from "./containers/home";
import Contact from "./containers/contact";
import About from "./containers/about";
import Projects from "./containers/projects";
import Resume from "./containers/resume";
import NotFound from "./containers/NotFound";
import Navbar from "./components/navbar";

function App() {
  const handleInit = async (main) => {
    await loadFull(main);
  };
  return (
    <div className="App">
      {/* Particles js */}
      <Particles id="particles" options={particles} init={handleInit} />

      {/* Navbar */}
      <Navbar />

      {/* Main page content */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
