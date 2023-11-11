// Portfolio.jsx
import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  return (
    <section style={sectionStyle}>
      <h2>Portfolio</h2>
      <div className="projects-container">
        <Project
          title="Awesome Project"
          imageSrc="path-to-image-1.jpg"
          deployedLink="https://example.com/project1"
          githubLink="https://github.com/yourusername/project1"
        />
        <Project
          title="Amazing Project"
          imageSrc="path-to-image-2.jpg"
          deployedLink="https://example.com/project2"
          githubLink="https://github.com/yourusername/project2"
        />
        {/* Add more projects */}
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: '2rem',
};

export default Portfolio;
