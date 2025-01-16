import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    { title: "Project One", description: "Description of project one." },
    { title: "Project Two", description: "Description of project two." },
    { title: "Project Three", description: "Description of project three." },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
