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
            Here’s more about me... <br></br><br></br>
            🏀 Basketball Enthusiast<br></br>
            🍜 Foodie at Heart<br></br>
            🌿 Nature lover<br></br>
            💡 Quick Learner<br></br>
            🏆 Team Player<br></br>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
