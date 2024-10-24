import React, { useState } from "react";
import "./AboutMe.css";

// Updated categories with multiple category support
const categories = [
  "All",
  "Programming Languages",
  "Web Development",
  "Frameworks",
  "Databases",
  "DevOps",
  "Others",
];

// Sample skill data
const skillsData = [
  { name: "Python", categories: ["Programming Languages"] },
  {
    name: "JavaScript",
    categories: ["Programming Languages", "Web Development"],
  },
  { name: "Java", categories: ["Programming Languages"] },
  { name: "PHP", categories: ["Programming Languages"] },
  { name: "HTML", categories: ["Web Development"] },
  { name: "CSS", categories: ["Web Development"] },
  { name: "React", categories: ["Frameworks", "Web Development"] },
  { name: "Node.js", categories: ["Web Development", "Frameworks"] },
  { name: "Express.js", categories: ["Web Development", "Frameworks"] },
  { name: "TensorFlow", categories: ["Frameworks"] },
  { name: "PyTorch", categories: ["Frameworks"] },
  { name: "LlamaIndex", categories: ["Frameworks"] },
  { name: "OpenAI", categories: ["Frameworks"] },
  { name: "GCP", categories: ["DevOps"] },
  { name: "Docker", categories: ["DevOps"] },
  { name: "Kubernetes", categories: ["DevOps"] },
  { name: "MongoDB", categories: ["Databases"] },
  { name: "MySQL", categories: ["Databases"] },
  { name: "Oracle", categories: ["Databases"] },
  { name: "Git", categories: ["Others"] },
  { name: "Linux", categories: ["Others"] },
  { name: "Jira", categories: ["Others"] },
  { name: "OOP", categories: ["Others"] },
  { name: "DSA", categories: ["Others"] },
];

const AboutMe = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter skills based on selected category
  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((skill) =>
          skill.categories.includes(selectedCategory)
        );

  return (
    <div>
      {/* Parallax Banner */}
      <div className="parallax-banner">
        <div className="parallax-content"></div>
      </div>
      <div className="about-me-container">
        {/* Main Content */}
        <section className="intro-section">
          <div className="intro-card">
            <img
              src="/img/jerry.jpg"
              className="intro-card-img"
              alt="Jerry Chen"
            />
            <div className="intro-card-content">
              <h3>Jerry Chen</h3>
              <p>jerryhychen@gmail.com</p>
              <div className="intro-links">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="intro-text">
            <h2>About Me</h2>
            <p>
              Hello! I’m <strong>Jerry</strong>, a Software Engineer based in{" "}
              Brisbane, Australia, who's specializing in AI and Cloud
              Technology. I thrive on facing challenges and relish the sense of
              achievement that comes from solving complex problems. In June
              2024, I graduated from the{" "}
              <a href="https://www.uq.edu.au/" className="uq">
                University of Queensland{" "}
              </a>
              with a Master's degree in Information Technology.
            </p>
            <p>
              My work experience includes developing web applications, creating
              AI solutions, deploying apps on the cloud, and conducting AI
              experiments.
            </p>
            <p>
              I'm passionate about leveraging technology to make a positive
              impact and am always eager to learn and adapt to new advancements
              in the field. I value collaboration and believe that teamwork and
              open communication are key to driving innovation.
            </p>
          </div>
        </section>

        <section className="experience-section">
          <h2>Work Experience</h2>
          <p>
            As a Software Engineer at The University of Queensland, I developed
            a web-based questionnaire application to help parents monitor and
            assess their children's behaviors. I focused on creating engaging
            user interfaces and enhancing user experience through result
            visualization and features like PDF generation.
          </p>
          <p>
            During my time as a Software Engineer Intern at Desygner, I
            integrated AI capabilities into their design platform. By utilising
            OpenAI's function calling feature and LlamaIndex, I enabled users to
            interact with an AI agent to operate platform functionalities
            seamlessly. This experience provided me with practical exposure to
            working with Large Language Models (LLMs) in a production
            environment.
          </p>
        </section>

        {/* Skills Section with Filtering */}
        <section className="skills-section">
          <h2>Skills</h2>

          {/* Skill Category Labels */}
          <div className="skills-categories">
            {categories.map((category, index) => (
              <button
                key={index}
                className={selectedCategory === category ? "active" : ""}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Filtered Skill List */}
          <div className="skills-list">
            {filteredSkills.map((skill, index) => (
              <span key={index} className="skill-item">
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        <section className="more-section">
          <h3>When I'm not coding, you might find me...</h3>
          <p>
            Playing Basketball: I enjoy the teamwork and strategy involed in the
            game.
          </p>
          <p>
            Exploring Culinary Delights: I'm a foodie at heart with a love for
            pasta, ramen, and sashimi.
          </p>
          <p>
            Embracing Nature: Whether it's hiking, surfing, or simply enjoying
            the outdoors, nature is my go-to for relaxation and inspiration.
          </p>
          <p>
            Feel free to reach out if you'd like to connect or discuss potential
            collaborations via{" "}
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight"
            >
              LinkedIn
            </a>{" "}
            or send me an{" "}
            <a href="mailto:your-email@example.com" className="highlight">
              Email
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
