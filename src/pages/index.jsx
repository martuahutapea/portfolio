// pages/index.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      navigate("/home");
    }
  };

  return (
    <div className="landing-page">
      <h1>Welcome to the Landing Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" value={name} onChange={handleInputChange} />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default LandingPage;
