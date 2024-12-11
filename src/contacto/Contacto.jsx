import React, { useState } from 'react';

const Contacto = () => {
  // Estado para almacenar los valores del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Estado para mostrar mensajes de validación
  const [formMessage, setFormMessage] = useState('');

  // Manejo del cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejo de la validación y envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Validar que todos los campos estén llenos
    if (!name || !email || !message) {
      setFormMessage('Todos los campos son obligatorios.');
      return;
    }

    // Si pasa la validación
    setFormMessage('¡Formulario enviado con éxito!');
    // Aquí podrías enviar los datos a un servidor o API
    console.log('Formulario enviado con éxito', formData);

    // Restablecer el formulario después de enviarlo
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      <header>
        <h1>Contacto</h1>
        <p>Si tienes alguna duda o pregunta, no dudes en ponerte en contacto conmigo. ¡Estoy aquí para ayudarte!</p>
      </header>

      <section className="contact-form">
        <form id="contactForm" onSubmit={handleSubmit}>
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
            <label htmlFor="email">Correo electrónico</label>
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
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" id="submitBtn">Enviar</button>
        </form>
        {formMessage && <p id="formMessage">{formMessage}</p>}
      </section>

      {/* Información de contacto adicional */}
      <section className="contact-info">
        <h2>Mis datos de contacto</h2>
        <ul>
          <li><strong>Teléfono:</strong> 74201734</li>
          <li><strong>Correo Electrónico:</strong> <a href="mailto:menesesjancko86@gmail.com">menesesjancko86@gmail.com</a></li>
        </ul>
      </section>

      <footer>
        <p>&copy; 2024 Eloy Moises Meneses Jancko. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Contacto;
