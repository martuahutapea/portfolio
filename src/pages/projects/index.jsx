import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import Header from "../../components/Header";
import "./styles.scss";

const projectsData = [
  {
    image: "path_to_image1.jpg",
    description: "Project 1 Description",
    link: "#",
  },
  {
    image: "path_to_image2.jpg",
    description: "Project 2 Description",
    link: "#",
  },
  {
    image: "path_to_image3.jpg",
    description: "Project 3 Description",
    link: "#",
  },
];

const presentProjectsData = [
  {
    image: "path_to_image4.jpg",
    description: "Present Project 1 Description",
    link: "#",
  },
  {
    image: "path_to_image5.jpg",
    description: "Present Project 2 Description",
    link: "#",
  },
  {
    image: "path_to_image6.jpg",
    description: "Present Project 3 Description",
    link: "#",
  },
];

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <img src={project.image} alt="Project" />
    <p>{project.description}</p>
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
          <h2>Past Projects</h2>
          <div className="projects-cards">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
        <section className="projects-section">
          <h2>Present Projects</h2>
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
