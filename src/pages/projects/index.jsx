import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import Header from "../../components/Header";
import { FaGithub } from "react-icons/fa";
import "./styles.scss";
import PalmOil from "../../assets/palm_oil.jpg";
import Ecommerce from "../../assets/e-commerce.jpg";
import CyberSecurity from "../../assets/cyber_security.jpg";
import Dms from "../../assets/dms.jpg";
import Bms from "../../assets/blog.jpg";
import Youtube from "../../assets/youtubeUI.jpg";
import Portfolio from "../../assets/portfolio.jpg";
import Wedding from "../../assets/wedding.jpg";
import Weather from "../../assets/weather.jpg";

const projectsData = [
  {
    image: PalmOil,
    description: "Palm Oil Management System",
    tech: "PHP, Laravel, MongoDB",
    link: "#",
  },
  {
    image: Ecommerce,
    description: "E-commerce",
    tech: "Node.js, React.js, Firebase",
    link: "#",
  },
  {
    image: CyberSecurity,
    description: "Cyber Security",
    tech: "Python",
    link: "#",
  },
];

const presentProjectsData = [
  {
    image: Dms,
    description: "Dormitory Management System",
    tech: "PHP, JavaScript, jQuery, Bootstrap, MySQL",
    link: "#",
  },
  {
    image: Bms,
    description: "Blog Management System",
    tech: "PHP, JavaScript, MySQL",
    link: "#",
  },
  {
    image: Youtube,
    description: "Clone Youtube UI",
    tech: "HTML, CSS",
    link: "#",
  },
  {
    image: Portfolio,
    description: "Portfolio",
    tech: "React.js, scss, Javascript",
    link: "#",
  },
  {
    image: Wedding,
    description: "Wedding Invitation",
    tech: "React.js, scss, Javascript",
    link: "#",
  },
  {
    image: Weather,
    description: "Wheather Mobile App",
    tech: "Ionic, jQuery, Firebase",
    link: "#",
  },
];

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <img src={project.image} alt="Project" />
    <p>{project.description}</p>
    <p>{project.tech}</p>
    <a href={project.link} className="project-button">
      View <FaGithub />
    </a>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <Header headerText="My Projects" icon={<FaProjectDiagram size={40} />} />

      <div className="projects-container">
        <section className="projects-section">
          <h2>Present Projects</h2>
          <div className="projects-cards">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
        <section className="projects-section">
          <h2>Past Projects</h2>
          <div className="projects-cards">
            {presentProjectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Projects;
