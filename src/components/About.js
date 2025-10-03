import React from 'react';
import { DiJavascript1, DiReact, DiHtml5, DiCss3 } from 'react-icons/di';
import { SiSass, SiPython, SiFirebase, SiArduino, SiUnity, SiDjango } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: "JavaScript", icon: <DiJavascript1 />, level: 80 },
    { name: "React", icon: <DiReact />, level: 80 },
    { name: "HTML5", icon: <DiHtml5 />, level: 90 },
    { name: "CSS3", icon: <DiCss3 />, level: 90 },
    { name: "Sass", icon: <SiSass />, level: 90 },
    { name: "Firebase", icon: <SiFirebase />, level: 75 },
    { name: "Arduino", icon: <SiArduino />, level: 80 },
    { name: "Unity", icon: <SiUnity />, level: 70 },
    { name: "Python", icon: <SiPython />, level: 80 },
    { name: "Django", icon: <SiDjango />, level: 60 }
  ];

  return (
    <div className="card about">
      <h2 className="section-title">Sobre Mí</h2>
      
      <div className="about__content">
        <div className="about__text">
          <p>
            Soy Tomás Nazar, <strong>desarrollador Front End</strong> con experiencia freelance en el rubro tecnológico 
            y una trayectoria profesional diversa que incluye desde el mundo corporativo en Nestlé (Distribuidora Córdoba) 
            hasta presentaciones como <strong>mago/ilusionista profesional</strong>. Esta combinación única me ha dotado de 
            habilidades versátiles: la precisión técnica del desarrollo web, la disciplina del entorno corporativo 
            y la creatividad escénica.
          </p>
          
          <p>
            Como <strong>programador especializado en React</strong>, he trabajado en proyectos freelance desarrollando 
            aplicaciones web responsivas y dinámicas. Mi enfoque autodidacta y mi pasión por la tecnología me han permitido 
            adquirir habilidades sólidas en el ecosistema JavaScript mientras continúo formándome en BackEnd con Python.
          </p>
          
          <p>
            Mi experiencia en Nestlé me brindó <strong>capacidad de trabajo en equipo</strong> y comprensión de procesos 
            empresariales, mientras que mi faceta como mago profesional desarrolló mi <strong>creatividad</strong> y 
            habilidades para <strong>comunicar ideas complejas</strong> de manera clara y atractiva.
          </p>
          
          <h3 className="about__subtitle">Formación</h3>
          <p>
            
            Mi formación incluye <strong>Tecnicatura en Mecatronica</strong> en la UTN, ademas realice el bootcamp de 
            <strong> Desarrollo Full Stack</strong> en Coderhouse y otros cursos, donde adquirí las bases sólidas 
            que aplico en mis proyectos diarios.
          </p>
          
          <h3 className="about__subtitle">Mis Habilidades Técnicas</h3>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar">
                    <div 
                      className="skill-level" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;