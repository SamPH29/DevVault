/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ image, title, deployedLink, githubLink }) => {
  return (
    <div className="project-card">
      {/* Ensure a valid alt text for better accessibility */}
      <img src={image} alt={`${title} project screenshot`} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <div className="card-buttons">
        <a
          href={deployedLink}
          target="_blank"
          rel="noopener noreferrer"
          className="button-deployed"
        >
          View Deployed
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="button-github"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

// Define the prop types to validate props
ProjectCard.propTypes = {
  image: PropTypes.string.isRequired, // URL or path to the image
  title: PropTypes.string.isRequired, // Project title
  deployedLink: PropTypes.string.isRequired, // Link to the live application
  githubLink: PropTypes.string.isRequired, // Link to the GitHub repository
};

export default ProjectCard;
