import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import diroma from '../assets/diroma.png'
import appClima from '../assets/appClima.png'
import magiaInteractiva from '../assets/magiaInteractiva.png'
import jure from '../assets/jureArquitectura.png'
import calculadora from '../assets/calculadora.png'
import porfolio from '../assets/porfolio.png'

const projects = [
  {
    id: 1,
    title: "E-commerce-Diroma",
    description: "Plataforma de comercio electrónico con carrito de compras, con formulario conectado al mail donde le llegan los pedidios realizados por los clientes, con diseño resposive",
    technologies: ["React", "Node.js", "Sass"],
    github: "https://github.com/TommiNazar/diroma-ecommerce",
    demo: "https://diroma-ecommerce.vercel.app/",
    image: diroma
  },
  {
    id: 2,
    title: "App-clima-react",
    description: "Aplicación Weather Dashboard, Panel de control meteorológico que muestra pronósticos actuales y futuros con datos de API, con diseño resposive.",
    technologies: ["React", "API"],
    github: "https://github.com/TommiNazar/app-clima-react",
    demo: "https://app-clima-react-opal.vercel.app/",
    image: appClima
  },
  {
    id: 3,
    title: "magia-interactiva-js",
    description: "Pagina interactiva que le realiza al usuario trucos de magiaI.",
    technologies: ["JavaScript", "Css", "HTML"],
    github: "https://github.com/TommiNazar/magia-interactiva-js",
    demo: "https://magia-interactiva-js.vercel.app/",
    image: magiaInteractiva
  },

  {
    id: 4,
    title: "jureArquitectura",
    description: "Pagina informativa del estudio de arquitectura Jure, con diseño resposive.",
    technologies: ["HTML", "Css", "Sass", "Bootstrap"],
    github: "https://github.com/TommiNazar/jureArquitectura",
    demo: "https://jure-arquitectura.vercel.app/",
    image: jure
  },
  {
    id: 5,
    title: "calculadoraReact",
    description: "Calculadora realizada con React.",
    technologies: ["React", "Css"],
    github: "https://github.com/TommiNazar/calculadoraReact",
    demo: "https://calculadora-react-seven-rho.vercel.app/",
    image: calculadora
  },
  {
    id: 6,
    title: "este porfolio",
    description: "Porfolio realizado con React y Sass con diseño resposive.",
    technologies: ["React", "Css", "Sass"],
    github: "https://github.com/TommiNazar/portfolio-tomas",
    demo: "https://portfolio-tomas-nine.vercel.app/",
    image: porfolio
  },

];

const Projects = () => {
  return (
    <div className="card projects">
      <h2 className="section-title">Mis Proyectos</h2>
      
      <div className="projects__grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-card__image">
              <img src={project.image} alt={project.title} />
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
                    <FaExternalLinkAlt /> link
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