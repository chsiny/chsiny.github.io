// export default ProjectDetail;
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import projectsData from "../data/projects.json";
import "./ProjectDetail.css"; // Import custom styles for this page

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((proj) => proj.id === id);

  // State to handle modal visibility and the current image
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // Function to open the modal with the selected image
  const openModal = (imgSrc) => {
    setCurrentImage(imgSrc);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setCurrentImage(null);
    setIsModalOpen(false);
  };

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div className="project-detail">
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <p>
        <strong>Tech Stack: </strong>
        {project.skills}
      </p>
      {project.github ? (
        <p>
          <strong>Repository: </strong>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </p>
      ) : null}

      {/* Image Gallery Section */}
      <section className="image-gallery">
        <div className="images-container">
          {project.images && project.images.length > 0 ? (
            project.images.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`${project.name} ${index + 1}`}
                className="thumbnail"
                onClick={() => openModal(imgSrc)} // Click to open modal
              />
            ))
          ) : (
            <p>No images available for this project.</p>
          )}
        </div>
      </section>

      {/* Modal for Full-Sized Image */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-img" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img
              src={currentImage}
              alt="Full Size"
              className="full-size-image"
            />
          </div>
        </div>
      )}

      {/* Detailed Description Section */}
      <section className="detailed-description">
        {project.detailedDescription &&
        project.detailedDescription.length > 0 ? (
          project.detailedDescription.map((section, index) => {
            if (section.type === "title2") {
              return (
                <h2 className="detail-title" key={index}>
                  {section.content}
                </h2>
              );
            } else if (section.type === "title3") {
              return (
                <h3 className="detail-title" key={index}>
                  {section.content}
                </h3>
              );
            } else if (section.type === "paragraph") {
              return (
                <p className="detail-text" key={index}>
                  {section.content}
                </p>
              );
            } else if (section.type === "bold") {
              return (
                <b className="detail-text" key={index}>
                  {section.content}
                </b>
              );
            } else if (section.type === "list") {
              return (
                <ul className="detail-list" key={index}>
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              );
            } else if (section.type === "link") {
              return (
                <p key={index}>
                  <a
                    href={section.content}
                    className="detail-text"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {section.title}
                  </a>
                </p>
              );
            } else if (section.type === "image") {
              return (
                <div className="detail-image-container" key={index}>
                  <img
                    src={section.src}
                    alt={section.alt || "Description Image"}
                    className="detail-image"
                  />
                  {section.caption && (
                    <p className="image-caption">{section.caption}</p>
                  )}
                </div>
              );
            }
            return null;
          })
        ) : (
          <p>
            <i>Description coming soon. Stay tuned for updates!</i>
          </p>
        )}
      </section>
    </div>
  );
};

export default ProjectDetail;
