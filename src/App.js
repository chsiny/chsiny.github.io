import React, { useState } from "react";
import Project from "./components/Project";
import projectsData from './data/projects.json';
import Modal from "./components/Modal";
import "./App.css";
import { Link } from 'react-router-dom';

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Scroll to next section
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight, // Scroll down one viewport height
      behavior: "smooth", // Smooth scrolling
    });
  };

  const firstFiveProjects = projectsData.slice(0, 5);

  return (
    <div className="App">
      {/* About Me Section */}
      <header className="landing-section">
        <h1 className="animate-text">Hi, I'm Jerry Chen</h1>
        <button className="about-button" onClick={openModal}>
          About Me
        </button>
        <div className="social-icons">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> {/* GitHub icon */}
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i> {/* LinkedIn icon */}
          </a>
        </div>
        {/* Scroll Down Button */}
        <div className="scroll-down" onClick={scrollToNextSection}>
          <span className="double-arrows">
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-chevron-down"></i>
          </span>
        </div>
      </header>

      {/* Modal Component */}
      <Modal show={showModal} handleClose={closeModal} />

      {/* Project Section */}
      <section className="projects-section">
        <h2>Projects</h2>
        <div className="project-list">
          {firstFiveProjects.map((project, index) => (
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
        {/* "View All" Button */}
        <div className="view-all">
          <Link to="/projects">View All Projects</Link> {/* Link to the all projects page */}
        </div>
      </section>
    </div>
  );
}

export default App;
