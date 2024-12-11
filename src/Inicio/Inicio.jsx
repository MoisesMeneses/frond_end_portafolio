import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Perfil from '../assets/image.png';

const Inicio = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();

      setTime({
        hours,
        minutes,
        seconds,
      });
    };

    const interval = setInterval(updateClock, 1000);

    // Llamamos a updateClock una vez al cargar para evitar un retraso
    updateClock();

    // Limpiamos el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  // Calculamos el ángulo de rotación para las agujas del reloj
  const secondDeg = (time.seconds / 60) * 360;
  const minuteDeg = (time.minutes / 60) * 360 + (time.seconds / 60) * 6;
  const hourDeg = (time.hours % 12) / 12 * 360 + (time.minutes / 60) * 30;

  return (
  <>
    <div className='inicio'>
      
        <div className="clock-container">
          <div className="clock">
            <div
              className="hour"
              style={{ transform: `rotate(${hourDeg}deg)` }}
            ></div>
            <div
              className="minute"
              style={{ transform: `rotate(${minuteDeg}deg)` }}
            ></div>
            <div
              className="second"
              style={{ transform: `rotate(${secondDeg}deg)` }}
            ></div>
          </div>
        </div>
        <div className="container">
          <nav>
            <Link to="/">INICIO</Link>
            <Link to="/habilidades">HABILIDADES</Link>
            <Link to="/proyectos">PROYECTOS</Link>
            <Link to="/contacto">CONTACTO</Link>
          </nav>
      </div>
    </div>
      

      <div className="img">
        <img src={Perfil} alt="Perfil" />
      </div>
      <div className="content">
        <h1 className="title">Hola, soy Eloy Moises Meneses Jancko</h1>
        <p className="subtitle">
          Soy Ingeniero Informático y desarrollador Full Stack con experiencia en
          diversas tecnologías como C++, Java, Python, PHP y JavaScript. Me
          apasiona la IoT y siempre busco crear soluciones eficientes y fáciles
          de usar. Mi enfoque es combinar habilidades técnicas con un diseño
          centrado en el usuario. Bienvenido a mi portafolio, donde podrás
          conocer más sobre mis habilidades y proyectos.
        </p>
      </div>
  </>
  );
};

export default Inicio;
