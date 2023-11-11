// Portfolio.jsx
import React from 'react';
import './styles.css';
import Project from '../components/Project';
import ExampleComponent from './ExampleComponent';

const Portfolio = () => {
  return (
    <section id="portfolio">
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
      <ExampleComponent />
    </section>
  );
};

export default Portfolio;
