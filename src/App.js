import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/home";
import Contact from "./containers/contact";
import About from "./containers/about";
import Projects from "./containers/projects";
import Resume from "./containers/resume";
import NotFound from "./containers/NotFound";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      {/* Particles js */}

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
