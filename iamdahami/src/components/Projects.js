import React from 'react';

const projects = [
  {
    title: "E-Learning Platform for Verilog Code Beginners",
    description: "Designed an intuitive platform for Verilog beginners.",
    technologies: "MERN, JavaScript, HTML, CSS",
    link: "#",
  },
  {
    title: "E-news Portal Website",
    description: "Developed a dynamic news portal with real-time updates.",
    technologies: "MERN, JavaScript, HTML, CSS",
    link: "#",
  },
  {
    title: "Carpooling Application",
    description: "Implemented a carpooling app with CRUD and tracking functionalities.",
    technologies: "C++, Code::Blocks",
    link: "#",
  },
];

const Projects = () => {
    return (
      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };
export default Projects;