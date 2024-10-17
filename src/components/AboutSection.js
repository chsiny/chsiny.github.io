import React from "react";

const AboutSection = ({ openModal }) => {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <header className="landing-section">
      <div class="sun"></div>
      <div class="sunburst"></div>
      <div class="moon"></div>
      <h1 className="animate-text">Hi, I'm Jerry Chen</h1>
      <h3 className="animate-text">
        <span className="highlight">Software Engineer</span> with a passion for
        AI and Cloud Technology
      </h3>
      <button className="about-button" onClick={openModal}>
        About Me
      </button>
      <div className="scroll-down" onClick={scrollToNextSection}>
        <span className="double-arrows">
          <i className="fas fa-chevron-down"></i>
          <i className="fas fa-chevron-down"></i>
        </span>
      </div>
    </header>
  );
};

export default AboutSection;
