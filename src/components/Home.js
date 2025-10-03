import React from 'react';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import imagen from '../assets/profile.jpeg'
import CV from '../assets/TomasNazarCV.pdf'

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
            Programador apasionado por crear experiencias atractivas y funcionales. 
            Con habilidades sólidas en React, JavaScript y Python. Soy una persona curiosa, 
            con ganas de crear, conectar ideas y hacer que las cosas pasen. 
            Estoy en constante aprendizaje 
            para expandir mis conocimientos y habilidades
          </p>
          
          <div className="home__buttons">
            <a href="#contact" className="btn btn--primary">
              Contáctame
            </a>
            <a href = {CV} download className="btn btn--secondary">
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