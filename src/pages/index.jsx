import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";
import ParticlesBackground from "../utils/ParticleBackground";
import "./landingPage.css";

const LandingPage = ({ onShowNavBar }) => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onShowNavBar(name);
      navigate("/home", { state: { name } });
    } else {
      alert("Please enter your name");
    }
  };

  return (
    <div className="landing-container">
      <ParticlesBackground />
      <h1 className="landing-title">
        <ReactTyped strings={["Hey, I'm Martua Hutapea, a web developer.<br />Let's create something amazing together!"]} typeSpeed={40} backSpeed={30} loop />
      </h1>
      <form onSubmit={handleSubmit} className="landing-form">
        <input type="text" placeholder="Enter your name" value={name} onChange={handleInputChange} className="landing-input" aria-label="Name input" />
        <button type="submit" className="landing-button" aria-label="Enter button">
          Enter
        </button>
      </form>
    </div>
  );
};

export default LandingPage;
