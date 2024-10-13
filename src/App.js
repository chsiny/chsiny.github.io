import React, { useState } from "react";
import Project from "./components/Project";
import projectsData from './data/projects.json';
import Modal from "./components/Modal";
import "./App.css";
import { Routes, Route, Link } from 'react-router-dom';
import ProjectDetail from './components/ProjectDetail';
import ProjectList from './components/ProjectList'; // New component for the full project list

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
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
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
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="https://linkedin.com/in/your-linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
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
                      link={`/projects/${project.id}`} // Link to individual project page
                    />
                  ))}
                </div>
                <div className="view-all">
                  <Link to="/projects">View All Projects</Link> {/* Link to all projects page */}
                </div>
              </section>
            </>
          }
        />

        {/* Project Detail Route */}
        <Route path="/projects/:id" element={<ProjectDetail />} />

        {/* Project List Route */}
        <Route path="/projects" element={<ProjectList />} /> {/* New route for full projects page */}
      </Routes>
    </div>
  );
}

export default App;