import React from "react";
import Header from "../../components/Header";
import { BsInfoCircle } from "react-icons/bs";

const About = () => {
  return (
    <section id="about" className="about">
      <Header headerText="About Me" icon={<BsInfoCircle size={40} />} />
    </section>
  );
};

export default About;
