import React from "react";
import Header from "../../components/Header";
import profileImage from "../../assets/profile.jpg";
import { BsInfoCircle } from "react-icons/bs";
import "./styles.scss";

const About = () => {
  return (
    <section id="about" className="about">
      <Header headerText="About Me" icon={<BsInfoCircle size={40} />} />
      <div className="about-container">
        <div className="about-image">
          <img src={profileImage} alt="About" />
          <p className="imageCaption">
            Web Developer || Front-end Developer
            <br />
            Martua Ibrahim Hutapea
          </p>
        </div>
        <div className="about-description">
          <h2>About Me</h2>
          <p>
            I am a recent IT graduate from Asia Pacific International University in Thailand, with a strong focus on front-end and back-end development, software engineering, and database management. Throughout my academic journey, I have
            developed a robust skill set in creating efficient and user-friendly web applications. My experience includes working on various projects that have honed my ability to deliver high-quality solutions within stipulated timelines.
          </p>
          <p>
            I am highly motivated and results-oriented, driven by a passion for technology and innovation. My commitment to continuous learning and skill improvement ensures that I stay updated with the latest industry trends and
            advancements. I thrive in collaborative environments and am eager to contribute to team success with my technical expertise.
          </p>
          <p>
            Currently, I am seeking a software engineer position where I can leverage my technical skills, creativity, and enthusiasm for technology to make a meaningful impact. I am excited about the opportunity to work with a dynamic team
            and contribute to the development of cutting-edge solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
