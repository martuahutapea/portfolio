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
            Full Stack Developer
            <br />
            Martua Ibrahim Hutapea
          </p>
        </div>
        <div className="about-description">
          <h2>About Me</h2>

          <p>
            Hi there! &#128075; I'm Martua Hutapea, a Full Stack Developer from Indonesia with a love for technology. I thrive on building efficient and user-friendly web applications. My studies at Asia Pacific International University in
            Thailand have given me a solid grounding in front-end and back-end development, software engineering, and database management, allowing me to tackle complex challenges with innovative solutions. I'm also passionate about staying
            ahead of tech trends to continually refine and expand my skill set.
          </p>
          <p>
            Since 2019, I’ve been immersed in coding, driven by the belief that technology can transform lives and simplify everyday tasks. What started as a curiosity about how things work has grown into a deep passion for development.
            Through continuous learning and hands-on projects, I stay updated with the latest industry trends and best practices. I enjoy collaborating on projects that push the boundaries of what’s possible and create real-world impact.
          </p>
          <p>
            I’m eager to connect people with technology through creative and impactful software solutions. Whether it’s developing cutting-edge web applications or optimizing existing systems, my goal is to make technology accessible and
            beneficial. I'm excited about new opportunities and challenges that drive innovation and collaboration. Let's build something amazing together and make a difference through technology. magicUI
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
