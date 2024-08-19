import React from "react";
import { GiSkills } from "react-icons/gi";
import { FaPhp, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaAws, FaDatabase } from "react-icons/fa";
import { SiGoland, SiIonic, SiMongodb, SiPostgresql, SiBootstrap, SiJquery, SiAzuredevops, SiLaravel, SiFirebase, SiMysql, SiSqlite } from "react-icons/si";
import Header from "../../components/Header";
import "./styles.scss";

const skillsData = {
  languages: [
    { name: " PHP", icon: <FaPhp /> },
    { name: " JavaScript", icon: <FaJs /> },
    { name: " Go", icon: <SiGoland /> },
    { name: " NodeJs", icon: <FaNodeJs /> },
    { name: " Python", icon: <FaPython /> },
    { name: " SQL", icon: <FaDatabase /> },
  ],
  frameworkLibraries: [
    { name: " Laravel", icon: <SiLaravel /> },
    { name: " React.js", icon: <FaReact /> },
    { name: " Ionic", icon: <SiIonic /> },
    { name: " Bootstrap", icon: <SiBootstrap /> },
    { name: " Ajax", icon: <SiJquery /> },
    { name: " jQuery", icon: <SiJquery /> },
  ],
  database: [
    { name: " MySQL", icon: <SiMysql /> },
    { name: " MongoDB", icon: <SiMongodb /> },
    { name: " Postgre", icon: <SiPostgresql /> },
  ],
  networking: [
    { name: " Firewall", icon: <FaNodeJs /> }, // Replace with appropriate icon
    { name: " DHCP", icon: <FaNodeJs /> }, // Replace with appropriate icon
    { name: " IP", icon: <FaNodeJs /> }, // Replace with appropriate icon
    { name: " Subnet", icon: <FaNodeJs /> }, // Replace with appropriate icon
  ],
  others: [
    { name: " Git", icon: <FaGitAlt /> },
    { name: " GitHub", icon: <FaGitAlt /> },
    { name: " Docker", icon: <FaDocker /> },
    { name: " AWS", icon: <FaAws /> },
    { name: " Azure", icon: <SiAzuredevops /> },
    { name: " Firebase", icon: <SiFirebase /> },
  ],
};

const SkillsSection = ({ title, skills }) => (
  <section className="skills-section">
    <h2>{title}</h2>
    <ul className="skills-list">
      {skills.map((skill, index) => (
        <li key={index} className="skill-item">
          {skill.icon}
          <span>{skill.name}</span>
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
