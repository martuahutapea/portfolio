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
            Hello &#128075;, I'm Martua Hutapea, a dedicated software engineer passionate about both front-end and back-end development. I thrive on solving complex problems and turning ideas into reality through code. My journey in tech
            has been driven by curiosity and a desire to create impactful solutions. From the moment I wrote my first line of code, I knew this was the path I wanted to pursue.
          </p>
          <p>
            Coding has been my best friend since 2019, helping me push beyond my limits to create innovative solutions that make a positive impact on the world. Each project I undertake is a new opportunity to learn, grow, and bring fresh
            ideas to life. I believe that technology has the power to transform lives, and I am committed to leveraging my skills to contribute to this transformation.
          </p>
          <p>
            I am excited to put all my skills to use in building new technologies that can reach people worldwide. The endless possibilities of technology inspire me to keep pushing the boundaries of what's possible. Whether it's developing
            a new application or exploring emerging technologies, I am always eager to take on new challenges and create meaningful solutions.
          </p>
          <p>
            Let's connect all the people with technology! Together, we can create a more connected and technologically advanced world. By bridging the gap between people and technology, we can drive innovation and make a lasting impact on
            our society.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
