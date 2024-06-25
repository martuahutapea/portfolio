import React from "react";
import Header from "../../components/Header";
import { BsInfoCircle } from "react-icons/bs";
import "./styles.scss";

const About = () => {
  return (
    <section id="about" className="about">
      <Header headerText="About Me" icon={<BsInfoCircle size={40} />} />
      <div className="about-container">
        <div className="about-image">
          <img src="path_to_your_image.jpg" alt="About" />
        </div>
        <div className="about-description">
          <h2>About Me</h2>
          <p>
            Hello! I'm John Doe, a passionate web developer with a knack for creating dynamic and responsive web applications. With over 5 years of experience in the industry, I have honed my skills in various web technologies and
            frameworks. I love tackling new challenges and continuously learning to stay updated with the latest trends in web development.
          </p>
          <p>In my free time, I enjoy exploring nature, photography, and working on open-source projects. I'm always eager to collaborate with like-minded individuals and contribute to the tech community.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
