import React from 'react';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import imagen from '../assets/profile.jpg'

const Home = () => {
  return (
    <div className="card home">
      <div className="home__content">
        <div className="home__image-container">
          <img 
            src= {imagen} 
            alt="Tomás Nazar" 
            className="home__image" 
          />
          <div className="home__image-effect"></div>
        </div>
        
        <div className="home__text">
          <h1 className="home__title">
            Hola, soy <span className="highlight">Tomás Nazar</span>
          </h1>
          <h2 className="home__subtitle">Desarrollador Front End</h2>
          <p className="home__description">
            Programador junior apasionado por crear experiencias web atractivas y funcionales. 
            Con habilidades sólidas en React y JavaScript, estoy en constante aprendizaje 
            para expandir mis conocimientos hacia el desarrollo Full Stack.
          </p>
          
          <div className="home__buttons">
            <a href="#contact" className="btn btn--primary">
              Contáctame
            </a>
            <a href="/cv-tomas-nazar.pdf" download className="btn btn--secondary">
              <FaFileDownload /> Descargar CV
            </a>
          </div>
        </div>
      </div>
      
      <div className="home__social">
        <a href="https://github.com/TommiNazar" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/tomas-nazar-6a3815181/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Home;