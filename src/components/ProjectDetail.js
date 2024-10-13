import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../data/projects.json'; // Import the same project data

const ProjectDetail = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const project = projectsData.find((proj) => proj.id === id); // Find the project by ID

  if (!project) {
    return <div>Project not found!</div>; // Handle invalid project ID
  }

  return (
    <div className="project-detail">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>{project.description}</p>
      <p><strong>Skills used:</strong> {project.skills}</p>
    </div>
  );
};

export default ProjectDetail;