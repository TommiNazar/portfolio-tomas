import React from 'react';
import { DiJavascript1, DiReact, DiNodejs, DiHtml5, DiCss3, DiMongodb, DiGit } from 'react-icons/di';
import { SiTypescript, SiRedux, SiExpress, SiPostgresql, SiFirebase, SiSass } from 'react-icons/si';

const skills = [
  { name: "JavaScript", icon: <DiJavascript1 />, level: 90 },
  { name: "TypeScript", icon: <SiTypescript />, level: 70 },
  { name: "React", icon: <DiReact />, level: 85 },
  { name: "Redux", icon: <SiRedux />, level: 80 },
  { name: "Node.js", icon: <DiNodejs />, level: 80 },
  { name: "Express", icon: <SiExpress />, level: 75 },
  { name: "HTML5", icon: <DiHtml5 />, level: 95 },
  { name: "CSS3", icon: <DiCss3 />, level: 90 },
  { name: "Sass", icon: <SiSass />, level: 85 },
  { name: "MongoDB", icon: <DiMongodb />, level: 75 },
  { name: "PostgreSQL", icon: <SiPostgresql />, level: 70 },
  { name: "Firebase", icon: <SiFirebase />, level: 65 },
  { name: "Git", icon: <DiGit />, level: 80 },
];

const Skills = () => {
  return (
    <div className="card skills">
      <h2 className="section-title">Habilidades</h2>
      
      <div className="skills__grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-card__icon">
              {skill.icon}
            </div>
            <div className="skill-card__info">
              <h3 className="skill-card__name">{skill.name}</h3>
              <div className="skill-card__progress">
                <div 
                  className="skill-card__progress-bar"
                  style={{ width: `${skill.level}%` }}
                ></div>
                <span className="skill-card__progress-text">{skill.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;