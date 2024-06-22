import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import Header from "../../components/Header";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <Header headerText="Skills & Tech" icon={<BsInfoCircle size={40} />} />
    </section>
  );
};

export default Skills;
