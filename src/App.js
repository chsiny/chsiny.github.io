import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AboutSection from "./components/AboutSection"; // About Me section as a component
import ProjectList from "./components/ProjectList"; // Full project list page
import ProjectDetail from "./components/ProjectDetail"; // Individual project detail page
// import Modal from "./components/Modal";
import projectsData from "./data/projects.json"; // Your project data
import Project from "./components/Project"; // Project component for displaying each project
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FadeInSection from "./components/FadeInSection";
import AboutMe from "./components/AboutMe";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const firstFiveProjects = projectsData.slice(0, 5); // Extract the top 5 projects

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="App">
      <ScrollToTop /> {/* Scroll restoration */}
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
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
                <FadeInSection>
                  <AboutSection openModal={openModal} />
                </FadeInSection>
                {/* <Modal show={showModal} handleClose={closeModal} /> */}

                {/* Top 5 Projects Section */}
                <section className="projects-section">
                  <FadeInSection>
                    <h2>Recent Projects</h2>
                    <div className="project-list">
                      {firstFiveProjects.map((project, index) => (
                        <Project
                          key={index}
                          name={project.name}
                          description={project.description}
                          skills={project.skills}
                          image={project.image}
                          link={`#/projects/${project.id}`}
                        />
                      ))}
                    </div>
                    {/* View All Projects link */}
                    <div className="view-all">
                      <Link to="/projects">View More</Link>
                    </div>
                  </FadeInSection>
                </section>
              </>
            }
          />
          <Route path="/about" element={<AboutMe />} />

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
