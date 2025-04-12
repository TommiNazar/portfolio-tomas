import React from 'react';
import { FaSun, FaMoon, FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';

const Navbar = ({ activeSection, setActiveSection, theme, toggleTheme }) => {
  const navItems = [
    { id: 'home', icon: <FaHome />, label: 'Inicio' },
    { id: 'about', icon: <FaUser />, label: 'Sobre mí' },
    { id: 'skills', icon: <MdComputer />, label: 'Habilidades' },
    { id: 'projects', icon: <FaProjectDiagram />, label: 'Proyectos' },
    { id: 'contact', icon: <FaEnvelope />, label: 'Contacto' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <FaCode />
        <span>TN</span>
      </div>
      
      <ul className="navbar__menu">
        {navItems.map((item) => (
          <li 
            key={item.id}
            className={`navbar__item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => setActiveSection(item.id)}
          >
            <div className="navbar__icon">{item.icon}</div>
            <span className="navbar__label">{item.label}</span>
          </li>
        ))}
      </ul>
      
      <div className="navbar__theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </div>
    </nav>
  );
};

export default Navbar;