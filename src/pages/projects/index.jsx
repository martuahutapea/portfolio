import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import Header from "../../components/Header";
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import { TbArrowUpRight } from "react-icons/tb";
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
    link: "https://github.com/martuahutapea/palmOil.git",
    // link_deploy: "#",
  },
  {
    image: Ecommerce,
    description: "E-commerce",
    tech: "Node.js, React.js, Firebase",
    link: "https://github.com/martuahutapea/e-commerce.git",
    // link_deploy: "#",
  },
  {
    image: CyberSecurity,
    description: "Web Scrapping",
    tech: "Python, AWS",
    link: "https://github.com/martuahutapea/cyberSecurity.git",
    // link_deploy: "#",
  },
];

const presentProjectsData = [
  {
    image: Dms,
    description: "Dormitory Management System",
    tech: "PHP, JavaScript, Ajax, Bootstrap, MySQL",
    link: "https://github.com/martuahutapea/dms.git",
    link_deploy: "#",
  },
  {
    image: Bms,
    description: "Blog Management System",
    tech: "PHP, JavaScript, MySQL, jQuery",
    link: "https://github.com/martuahutapea/blog.git",
    link_deploy: "#",
  },
  {
    image: Youtube,
    description: "Clone Youtube UI",
    tech: "HTML, CSS",
    link: "https://github.com/martuahutapea/youtube.git",
    link_deploy: "#",
  },
  {
    image: Portfolio,
    description: "Portfolio",
    tech: "React.js, scss, Javascript",
    link: "https://github.com/martuahutapea/portfolio.git",
    link_deploy: "#",
  },
  {
    image: Wedding,
    description: "Wedding Invitation",
    tech: "React.js, scss, Javascript",
    link: "https://github.com/martuahutapea/wedding.git",
    link_deploy: "#",
  },
  {
    image: Weather,
    description: "Wheather Mobile App",
    tech: "Ionic, jQuery, Firebase",
    link: "#",
    link_deploy: "#",
  },
];

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <img src={project.image} alt="Project" />
    <p>{project.description}</p>
    <p>{project.tech}</p>
    {project.link_deploy && (
      <a href={project.link_deploy} className="project-button" target="_blank" rel="noreferrer">
        View
        <MdOpenInNew />
      </a>
    )}
    {project.link && (
      <a href={project.link} className="project-button" target="_blank" rel="noreferrer">
        <FaGithub /> Source
        <TbArrowUpRight />
      </a>
    )}
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <Header headerText="My Projects" icon={<FaProjectDiagram size={40} />} />

      <div className="projects-container">
        <section className="projects-section">
          <h2>Past Projects (Completed) </h2>
          <div className="projects-cards">
            {presentProjectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
        <section className="projects-section">
          <h2>Present Projects (On-going)</h2>
          <div className="projects-cards">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Projects;
