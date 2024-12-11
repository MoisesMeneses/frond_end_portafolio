import React, { useState } from 'react';
import c from '../assets/c++.webp';
import java from '../assets/java.png';
import python from '../assets/python.png';
import php from '../assets/php.png';
import flutter from '../assets/flutter.png';
import js from '../assets/js.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import elixir from '../assets/elixir.png';
import cs from '../assets/cshar.png';

const Habilidad = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const skills = [
    {
      img: c,
      name: 'C++',
      level: '70%',
      description:
        'C++ es un lenguaje de programación potente y flexible usado principalmente para desarrollo de software de alto rendimiento.',
    },
    {
      img: java,
      name: 'Java',
      level: '70%',
      description:
        'Java es un lenguaje de propósito general ideal para desarrollo de aplicaciones empresariales y móviles.',
    },
    {
      img: python,
      name: 'Python',
      level: '90%',
      description:
        'Python es conocido por su simplicidad y versatilidad, utilizado en áreas como ciencia de datos, desarrollo web e inteligencia artificial.',
    },
    {
      img: php,
      name: 'PHP',
      level: '80%',
      description:
        'PHP es un lenguaje diseñado para el desarrollo web del lado del servidor, ampliamente usado en sitios y sistemas dinámicos.',
    },
    {
      img: js,
      name: 'JavaScript',
      level: '70%',
      description:
        'JavaScript es el corazón de la web moderna, usado para interactividad, animaciones y desarrollo de aplicaciones web.',
    },
    {
      img: flutter,
      name: 'Flutter',
      level: '90%',
      description:
        'Flutter es un framework de Google que permite crear aplicaciones multiplataforma con un solo código.',
    },
    {
      img: html,
      name: 'HTML',
      level: '80%',
      description:
        'HTML es el lenguaje estándar para la creación de páginas web y la base de toda estructura de contenido en la web.',
    },
    {
      img: css,
      name: 'CSS',
      level: '70%',
      description:
        'CSS es un lenguaje de diseño que se utiliza para definir el aspecto y formato de documentos web.',
    },
    {
      img: elixir,
      name: 'Elixir',
      level: '60%',
      description:
        'Elixir es un lenguaje funcional diseñado para aplicaciones distribuidas, escalables y de alta disponibilidad.',
    },
    {
      img: cs,
      name: 'C#',
      level: '70%',
      description:
        'C# es un lenguaje moderno y versátil desarrollado por Microsoft, ideal para aplicaciones de escritorio, web y videojuegos.',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % skills.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + skills.length) % skills.length);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '20px 20px',backgroundColor: '#254336', color:'white', width: '20%' }}>HABILIDADES</h1>
      <div className="skills-gallery">
        <button className="arrow left-arrow" onClick={prevSlide}>
          &#8592;
        </button>
        <div className="gallery-container">
          <div
            className="gallery-slider"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="gallery-item">
                <img src={skill.img} alt={skill.name} />
                <p className="skill-name">{skill.name}</p>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: skill.level }}
                  ></div>
                </div>
                <p className="skill-percentage">{skill.level}</p>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="arrow right-arrow" onClick={nextSlide}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Habilidad;
