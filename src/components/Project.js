import React from "react";
import './Project.css';

const Project = ({ name, description, skills, image, link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={`${name} screenshot`} className="project-image" />
      <div className="project-details">
        <h3>
          <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>
        </h3>
        <p>{description}</p>
        <p className="skills-used"> {skills}</p>
      </div>
    </div>
  );
};

export default Project;
