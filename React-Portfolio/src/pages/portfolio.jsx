import React from 'react';
import Project from '../components/Project';
import AnimatedExample from '../components/Animated/AnimatedExample';
import '../styles/styles.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Awesome Project',
      imageSrc: 'path-to-image-1.jpg',
      deployedLink: 'https://example.com/project1',
      githubLink: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Amazing Project',
      imageSrc: 'path-to-image-2.jpg',
      deployedLink: 'https://example.com/project2',
      githubLink: 'https://github.com/yourusername/project2',
    },
    // Add more projects as needed
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project
            key={index} // Make sure to use a unique key for each project
            title={project.title}
            imageSrc={project.imageSrc}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
      <AnimatedExample /> {/* Include the suggested animated component */}
    </section>
  );
};

export default Portfolio;
