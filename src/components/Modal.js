// src/components/Modal.js
import React from "react";
import "./Modal.css"; // Create this file to style the modal

const Modal = ({ show, handleClose }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  // Function to handle clicks on the background (close modal)
  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("modal")) {
      handleClose(); // Only close if clicking on the background
    }
  };

  return (
    <div className={showHideClassName} onClick={handleBackgroundClick}>
      <div className="modal-content">
        <iframe
          title="hi"
          src="https://giphy.com/embed/7Zl86oBr2SH2dTsViU"
          width="200"
          height="200"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <div className="intro-text">
          <p>
            🎓  Graduated from{" "}
            <a
              href="https://www.uq.edu.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              UQ↗
            </a>
          </p>
          <p>💡  Passionate about creating impactful tech solutions.</p>
          <p>✏️  Quick learner who embraces new challenges.</p>
          <p>🌟  Proud to exceed mentors' expectations.</p>
          <p>👓  Dedicated to delivering quality work efficiently.</p>
          <p>🤖  Motivated to make a positive impact through technology.</p>
          <p>
            ✉️  <span className="highlight">Contact Me </span>on{" "}
            <a
              href="https://www.linkedin.com/in/jerryhychen"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn↗
            </a>{" "}
            or <a href="mailto:jerryhychen@gmail.com">Email↗</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
