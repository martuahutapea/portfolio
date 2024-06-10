import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import Skills from "./pages/skills";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      {/* Particles Js */}

      {/* Navbar */}
      <NavBar />

      {/* Main Page */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
