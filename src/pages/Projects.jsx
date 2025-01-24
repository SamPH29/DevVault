/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import dailyDrip from "../assets/Daily-drip.jpg"; // Daily Drip project image
import vehicleOdyssey from "../assets/Vehical-Odyssey.jpg"; // Vehicle Odyssey project image
import readMeBuilder from "../assets/ReadMe.jpg"; // README Builder project image

const Projects = () => {
  const projects = [
   
    {
      image: dailyDrip,
      title: "The Daily Drip",
      description: "A project that automates daily drip content delivery.",
      link: "https://github.com/Gavin-Scot-Stockwell/The-Daily-Drip",
    },
    {
      image: vehicleOdyssey,
      title: "Vehicle Odyssey",
      description:
        "A dynamic project showcasing vehicles built with a React framework.",
      link: "https://github.com/SamPH29/Vehicle-Odyssey",
    },
    {
      image: readMeBuilder,
      title: "Dynamic README Builder",
      description:
        "A tool for generating professional and interactive README files.",
      link: "https://github.com/SamPH29/dynamic-readme-builder",
    },
  ];

  return (
    <div className="projects-page">
      <h2>My Projects</h2>
      <p>
        Explore some of the projects I've worked on. Each project showcases my
        skills and expertise in developing real-world applications.
      </p>

      {/* Project Gallery */}
      <div className="project-gallery">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            {/* Make the image a clickable link */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-cover"
              />
            </a>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
