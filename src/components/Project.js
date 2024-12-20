import React from "react";
import "./Project.css";

const Project = ({ name, description, skills, image, link, github }) => {
  return (
    <div className="project-card">
      <a href={link}>
        <img src={image} alt={`${name} screenshot`} className="project-image" />
      </a>
      <div className="project-details">
        <h3>
          <a href={link}>{name}</a>
        </h3>
        <p>{description}</p>
        <p className="skills-used">
          <strong>Tech Stack: </strong>
          {skills}
        </p>
      </div>
    </div>
  );
};

export default Project;
