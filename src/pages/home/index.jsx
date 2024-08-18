import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdDownload } from "react-icons/io";
import Resume from "../../assets/MartuaHutapea_resume.pdf";
import ProfilePicture from "../../assets/avatar.png";

import "./styles.scss";

const Home = ({ name }) => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Martua-Hutapea-Resume.pdf";
    link.click();
  };

  return (
    <section className="home">
      <div className="home__content">
        <h1 className="home__title">Full-Stack Developer</h1>
        <p className="home__description">
          Welcome, I'm {name}. A passionate Full-Stack Developer based in Indonesia! <br />
          Explore more and let's get cracking!
        </p>
        <div className="home__buttons">
          <button onClick={handleNavigateToContactMePage} className="home__button">
            Hire Me
          </button>
          <button onClick={handleDownloadPDF} className="home__button">
            Resume <IoMdDownload />
          </button>
        </div>
      </div>
      <div className="home__image-container">
        <img src={ProfilePicture} alt="Profile" className="home__image" />
      </div>
    </section>
  );
};

export default Home;
