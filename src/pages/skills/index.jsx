import React from "react";
import { GiSkills } from "react-icons/gi";
import Header from "../../components/Header";
import "./styles.scss";

const skillsData = {
  languages: ["PHP", "JavaScript", "Go", "NodeJs", "Python", "SQL"],
  frameworkLibraries: ["Laravel", "React.js", "Ionic", "Bootstrap", "Ajax", "jQuery"],
  database: ["MySQL", "MongoDB", "Postgre"],
  networking: ["Firewall", "DHCP", "IP", "Firewall", "Subnet"],
  others: ["Git", "GitHub", "Docker", "AWS", "Azure"],
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
        <SkillsSection title="Languages" skills={skillsData.languages} />
        <SkillsSection title="Framework & Libraries" skills={skillsData.frameworkLibraries} />
        <SkillsSection title="Database" skills={skillsData.database} />
        <SkillsSection title="Networking" skills={skillsData.networking} />
        <SkillsSection title="Others" skills={skillsData.others} />
      </div>
    </section>
  );
};

export default Skills;
