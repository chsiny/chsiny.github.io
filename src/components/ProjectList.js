import React from 'react';
import projectsData from '../data/projects.json'; // Import your project data
import Project from './Project'; // Reuse the Project component for each project card

const ProjectList = () => {
  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="project-list">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            description={project.description}
            skills={project.skills}
            image={project.image}
            link={`#/projects/${project.id}`} // Link to individual project page
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;