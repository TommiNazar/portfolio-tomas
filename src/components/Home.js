import React from 'react';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg';

const Home = () => {
  return (
    <div className="card home">
      <div className="home__content">
        <div className="home__image-container">
          <img src={profileImage} alt="Tomás Nazar" className="home__image" />
        </div>
        
        <div className="home__text">
          <h1 className="home__title">
            Hola, soy <span className="highlight">Tomás Nazar</span>
          </h1>
          <h2 className="home__subtitle">Desarrollador Full Stack</h2>
          <p className="home__description">
            Creo soluciones digitales eficientes y escalables con tecnologías modernas. 
            Apasionado por el desarrollo web y la creación de experiencias de usuario memorables.
          </p>
          
          <div className="home__buttons">
            <a 
              href="#contact" 
              className="btn btn--primary"
            >
              Contáctame
            </a>
            <a 
              href="/cv-tomas-nazar.pdf" 
              download 
              className="btn btn--secondary"
            >
              <FaFileDownload /> Descargar CV
            </a>
          </div>
        </div>
      </div>
      
      <div className="home__social">
        <a href="https://github.com/tomasnazar" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/tomasnazar" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Home;