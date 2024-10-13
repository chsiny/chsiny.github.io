import React from "react";
import Project from "./components/Project";
import projectsData from "./projects.json"; // Import the JSON file

function ProjectsPage() {
  return (
    <div className="projects-page">
      <h2>Projects</h2>
      <div className="project-list">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            description={project.description}
            skills={project.skills}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
