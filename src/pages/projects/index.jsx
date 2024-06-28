import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import Header from "../../components/Header";
import "./styles.scss";

const projectsData = [
  {
    image: "path_to_image1.jpg",
    description: "Palm Oil Management System",
    tech: "PHP, Laravel, MongoDB",
    link: "#",
  },
  {
    image: "path_to_image2.jpg",
    description: "E-commerce",
    tech: "HTML, CSS",
    link: "#",
  },
  {
    image: "path_to_image3.jpg",
    description: "Cyber Security",
    tech: "Python",
    link: "#",
  },
];

const presentProjectsData = [
  {
    image: "path_to_image4.jpg",
    description: "Dormitory Management System",
    tech: "PHP, JavaScript, jQuery, Bootstrap, MySQL",
    link: "#",
  },
  {
    image: "path_to_image5.jpg",
    description: "Blog Management System",
    tech: "PHP, JavaScript, MySQL",
    link: "#",
  },
  {
    image: "path_to_image6.jpg",
    description: "Clone Youtube UI",
    tech: "HTML, CSS",
    link: "#",
  },
  {
    image: "path_to_image7.jpg",
    description: "Portfolio",
    tech: "React.js, scss, Javascript",
    link: "#",
  },
  {
    image: "path_to_image8.jpg",
    description: "Wedding Invitation",
    tech: "React.js, scss, Javascript",
    link: "#",
  },
  {
    image: "path_to_image9.jpg",
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
      View Project
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
