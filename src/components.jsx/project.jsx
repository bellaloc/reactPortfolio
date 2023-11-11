// Project.jsx
import React from 'react';

const Project = ({ title, imageSrc, deployedLink, githubLink }) => {
  return (
    <div className="project">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <p>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          View Deployed
        </a>{' '}
        |{' '}
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </p>
    </div>
  );
};

export default Project;
