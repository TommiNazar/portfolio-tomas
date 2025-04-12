import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Plataforma completa de comercio electrónico con carrito de compras, autenticación de usuarios y pasarela de pago integrada.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/tomasnazar/ecommerce",
    demo: "https://ecommerce-tomas.vercel.app",
    image: "ecommerce.jpg"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplicación para gestión de tareas con arrastrar y soltar, categorías y recordatorios.",
    technologies: ["React", "Firebase", "Material UI"],
    github: "https://github.com/tomasnazar/task-manager",
    demo: "https://taskmanager-tomas.vercel.app",
    image: "taskmanager.jpg"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Panel de control meteorológico que muestra pronósticos actuales y futuros con datos de API.",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
    github: "https://github.com/tomasnazar/weather-app",
    demo: "https://weather-tomas.vercel.app",
    image: "weather.jpg"
  }
];

const Projects = () => {
  return (
    <div className="card projects">
      <h2 className="section-title">Mis Proyectos</h2>
      
      <div className="projects__grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-card__image">
              <img src={`/images/${project.image}`} alt={project.title} />
            </div>
            
            <div className="project-card__content">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__description">{project.description}</p>
              
              <div className="project-card__technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-card__links">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-card__link"
                  >
                    <FaGithub /> Código
                  </a>
                )}
                
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-card__link"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;