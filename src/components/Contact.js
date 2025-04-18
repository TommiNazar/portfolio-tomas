import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="card contact">


<p className="contact__note"><strong>¿Sabías que mi experiencia como mago me ayuda a crear interfaces 
que sorprenden y deleitan a los usuarios? </strong><br /><br />

</p>
      <h2 className="section-title">Contacto</h2>
      
      <div className="contact__content">
        <div className="contact__info">
          <div className="contact__item">
            <div className="contact__icon">
              <FaMapMarkerAlt />
            </div>
            <div className="contact__text">
              <h4>Ubicación</h4>
              <p>Córdoba, Argentina</p>
            </div>
          </div>
          
          <div className="contact__item">
            <div className="contact__icon">
              <FaEnvelope />
            </div>
            <div className="contact__text">
              <h4>Email</h4>
              <p>tomminazar@gmail.com</p>
            </div>
          </div>
          
          <div className="contact__item">
            <div className="contact__icon">
              <FaPhone />
            </div>
            <div className="contact__text">
              <h4>Teléfono</h4>
              <p>+54 351 594 2866</p>
            </div>
          </div>
        </div>
        
        <div className="contact__social">
          <h3 className="contact__subtitle">Mis Redes</h3>
          <div className="social-links">
            <a 
              href="https://github.com/TommiNazar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub /> GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/tomas-nazar-6a3815181/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a 
              href="https://wa.me/543515942866" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

