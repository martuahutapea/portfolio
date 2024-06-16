import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import Skills from "./pages/skills";
import NavBar from "./components/NavBar";
import NotFound from "./pages/notFound.jsx";
import LandingPage from "./pages/index.jsx";
import Footer from "./components/Footer/index.jsx";

function App() {
  const [showNavBar, setShowNavBar] = useState(localStorage.getItem("showNavBar") === "true");
  const [userName, setUserName] = useState(localStorage.getItem("userName") || "");
  const [showFooter, setShowFooter] = useState(localStorage.getItem("showFooter") === "true");

  const navigate = useNavigate();
  const location = useLocation();

  const handleShowNavBar = (name) => {
    setShowNavBar(true);
    setUserName(name);
    setShowFooter(true);
    localStorage.setItem("showNavBar", "true");
    localStorage.setItem("userName", name);
    localStorage.setItem("showFooter", "true");
    navigate("/home", { state: { name } });
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setShowNavBar(false);
      setUserName("");
      setShowFooter(false);
      localStorage.removeItem("showNavBar");
      localStorage.removeItem("userName");
      localStorage.removeItem("showFooter");
    }
  }, [location.pathname]);

  return (
    <div className="App">
      {/* Particles Js */}

      {/* Navbar */}
      {showNavBar && <NavBar />}

      {/* Main Page */}
      <Routes>
        <Route index path="/" element={<LandingPage onShowNavBar={handleShowNavBar} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer */}
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
