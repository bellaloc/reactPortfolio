import React from 'react';

const Project = ({ title, imageSrc, deployedLink, githubLink }) => {
  return (
    <div className="project">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <p>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">
          View Deployed
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          GitHub Repository
        </a>
      </p>
    </div>
  );
};

export default Project;
