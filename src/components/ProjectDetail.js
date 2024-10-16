// import React from 'react';
// import { useParams } from 'react-router-dom';
// import projectsData from '../data/projects.json'; // Import the same project data
// import './ProjectDetail.css'; // Import custom styles for this page

// const ProjectDetail = () => {
//   const { id } = useParams(); // Get the project ID from the URL
//   const project = projectsData.find((proj) => proj.id === id); // Find the project by ID

//   if (!project) {
//     return <div>Project not found!</div>; // Handle invalid project ID
//   }

//   return (
//     <div className="project-detail">
//       {/* Project Name and Brief Description */}
//       <h1>{project.name}</h1>
//       <p className="brief-description">{project.description}</p>

//       {/* Skills Used */}
//       <p><strong>Tech stack:</strong> {project.skills}</p>

//       {/* Image Gallery Section */}
//       <section className="image-gallery">
//         <div className="images-container">
//           {project.images && project.images.length > 0 ? (
//             project.images.map((imgSrc, index) => (
//               <img key={index} src={imgSrc} alt={`${project.name} ${index + 1}`} className="project-image" />
//             ))
//           ) : (
//             <p>No images available for this project.</p>
//           )}
//         </div>
//       </section>

//       {/* Detailed Description Section */}
//       <section className="detailed-description">
//         <p>{project.detailedDescription || "To be continued"}</p>
//       </section>
//     </div>
//   );
// };

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
        <strong>Tech Stack:</strong> {project.skills}
      </p>

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
            if (section.type === "title") {
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
                <a
                  href={section.content}
                  className="detail-text"
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {section.title}
                </a>
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
