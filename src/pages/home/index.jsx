import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { IoMdDownload } from "react-icons/io";
import Resume from "../../assets/Martua-Hutapea-resume.pdf";

import "./styles.scss";

const Home = ({ name }) => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  const handleDownloadPDF = () => {
    // This function should handle the download logic
    const link = document.createElement("a");
    link.href = Resume; // Update with the actual path to your PDF file
    link.download = "martuaresume.pdf";
    link.click();
  };

  return (
    <section id="home" className="home">
      <div className="home_text-wrapper">
        <h1>Welcome to my portfolio</h1>
      </div>

      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(55px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
          <button onClick={handleDownloadPDF} className="download-button">
            Resume <IoMdDownload />
          </button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
