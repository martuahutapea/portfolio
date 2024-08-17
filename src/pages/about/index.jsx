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
            Hello &#128075;, I’m Martua Hutapea, a tech enthusiast with a strong passion for front-end and back-end development, software engineering, and database management. I found joy in building efficient, user-friendly web
            applications and working on various projects that enhanced my development skills. My academic background from Asia Pacific International University in Thailand has equipped me with a solid foundation in these areas, enabling me
            to tackle complex challenges with innovative solutions. I thrive on learning new technologies and applying them to real-world problems.
          </p>
          <p>
            I've been deeply connected with coding since 2019, believing that future advancements in technology will significantly improve people's lives and simplify everyday tasks. My journey began with a simple curiosity about how things
            work, which quickly grew into a deep-seated passion for coding and development. Over the years, I've honed my skills through continuous learning and hands-on experience, staying abreast of the latest industry trends and best
            practices. I am committed to leveraging technology to create meaningful and impactful solutions.
          </p>
          <p>
            Let's connect people with technology. I am eager to apply my skills and experience to develop software solutions that enhance efficiency and productivity for everyone. Whether it's through developing cutting-edge web
            applications or optimizing existing systems, my goal is to make technology accessible and beneficial to all. I am excited about the future of technology and look forward to contributing to projects that make a positive
            difference in the world. Collaboration and innovation are at the heart of my approach, and I am always open to new opportunities and challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
