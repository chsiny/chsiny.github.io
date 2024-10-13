import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AboutSection from "./components/AboutSection"; // About Me section as a component
import ProjectList from "./components/ProjectList"; // Full project list page
import ProjectDetail from "./components/ProjectDetail"; // Individual project detail page
import Modal from "./components/Modal"; // Modal for About Me
import projectsData from "./data/projects.json"; // Your project data
import Project from "./components/Project"; // Project component for displaying each project
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const firstFiveProjects = projectsData.slice(0, 5); // Extract the top 5 projects

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>

      <div className="main-content">
        <Routes>
          {/* Home (Landing Page) */}
          <Route
            path="/"
            element={
              <>
                <AboutSection openModal={openModal} />
                <Modal show={showModal} handleClose={closeModal} />

                {/* Top 5 Projects Section */}
                <section className="projects-section">
                  <h2>Recent Projects</h2>
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
                  {/* View All Projects link */}
                  <div className="view-all">
                    <Link to="/projects">View More</Link>
                  </div>
                </section>
              </>
            }
          />

          {/* Full Project List Page */}
          <Route path="/projects" element={<ProjectList />} />

          {/* Individual Project Detail Page */}
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
