import React from 'react';

const Project = ({ title, imageSrc, deployedLink, githubLink }) => {
  return (
    <div className="card project mb-4">
      <img src={imageSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">
            View Deployed
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            GitHub Repository
          </a>
        </p>
      </div>
    </div>
  );
};

export default Project;
