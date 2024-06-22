import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import Header from "../../components/Header";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <Header headerText="My Projects" icon={<BsInfoCircle size={40} />} />
    </section>
  );
};

export default Projects;
