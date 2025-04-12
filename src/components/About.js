import React from 'react';

const About = () => {
  return (
    <div className="card about">
      <h2 className="section-title">Sobre Mí</h2>
      
      <div className="about__content">
        <div className="about__text">
          <p>
            Soy un desarrollador Full Stack con experiencia en la creación de aplicaciones web modernas 
            y responsivas. Me especializo en JavaScript, React, Node.js y bases de datos tanto SQL como NoSQL.
          </p>
          
          <p>
            Mi enfoque se centra en escribir código limpio, eficiente y bien documentado, siguiendo 
            las mejores prácticas de la industria. Disfruto resolviendo problemas complejos y aprendiendo 
            nuevas tecnologías para mantenerme actualizado en este campo en constante evolución.
          </p>
          
          <h3 className="about__subtitle">Educación</h3>
          <ul className="about__list">
            <li>
              <strong>Ingeniería en Sistemas</strong> - Universidad Tecnológica Nacional (En curso)
            </li>
            <li>
              <strong>Desarrollo Full Stack</strong> - Coderhouse (2022)
            </li>
          </ul>
          
          <h3 className="about__subtitle">Experiencia</h3>
          <ul className="about__list">
            <li>
              <strong>Desarrollador Full Stack Freelance</strong> (2022 - Presente)
              <p>Desarrollo de aplicaciones web personalizadas para diversos clientes.</p>
            </li>
            <li>
              <strong>Prácticas Profesionales</strong> - Empresa XYZ (2021)
              <p>Colaboración en el desarrollo de un sistema de gestión interno.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;