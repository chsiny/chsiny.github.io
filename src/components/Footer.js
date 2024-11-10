// components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a
          href="https://github.com/chsiny"
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
      <p>&copy; {new Date().getFullYear()} test2 Designed and coded by Jerry Chen</p>
    </footer>
  );
};

export default Footer;
