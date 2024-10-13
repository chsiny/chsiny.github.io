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
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <p>
          Here’s more about me... I’m a software developer specializing in
          building awesome web applications.
        </p>
      </div>
    </div>
  );
};

export default Modal;
