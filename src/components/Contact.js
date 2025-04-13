import React, { useState } from 'react';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('Mensaje enviado con éxito!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="card contact">
      <h2 className="section-title">Contacto</h2>
      
      <div className="contact__content">
        <div className="contact__info">
          <h3 className="contact__subtitle">Información de Contacto</h3>
          
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
              <p>+54 351 5942866</p>
            </div>
          </div>
        </div>
        
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <button type="submit" className="btn btn--primary">
            <FaPaperPlane /> Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;