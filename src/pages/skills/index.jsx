import React from "react";
import { GiSkills } from "react-icons/gi";
import Header from "../../components/Header";
import "./styles.scss";

const skillsData = {
  frontEnd: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Ajax", "jQuery"],
  backEnd: ["PHP", "Laravel", "Python"],
  database: ["MySQL", "MongoDB"],
  others: ["Git", "GitHub", "Docker"],
};

const SkillsSection = ({ title, skills }) => (
  <section className="skills-section">
    <h2>{title}</h2>
    <ul className="skills-list">
      {skills.map((skill, index) => (
        <li key={index} className="skill-item">
          {skill}
        </li>
      ))}
    </ul>
  </section>
);

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <Header headerText="Skills & Tech" icon={<GiSkills size={40} />} />

      <div className="skills-container">
        <SkillsSection title="Front-End" skills={skillsData.frontEnd} />
        <SkillsSection title="Back-End" skills={skillsData.backEnd} />
        <SkillsSection title="Database" skills={skillsData.database} />
        <SkillsSection title="Others" skills={skillsData.others} />
      </div>
    </section>
  );
};

export default Skills;
