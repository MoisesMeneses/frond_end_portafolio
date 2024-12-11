import React from 'react';

const Proyecto = () => {
  return (
    <div>
      <header>
        <h1>Mis Proyectos</h1>
        <p>Bienvenido a la sección de mis proyectos desarrollados en diferentes tecnologías.</p>
      </header>

      <section className="projects">
        <div className="project-card">
          <h2>1. IoT para Minas con MicroPython</h2>
          <p>Este proyecto tiene como objetivo la implementación de un sistema de monitoreo de calidad del aire en minas utilizando IoT y MicroPython. El sistema mide parámetros como temperatura, humedad, gases, y partículas suspendidas, y se puede controlar remotamente.</p>
          <a href="proyecto1.html">Ver detalles</a>
        </div>

        <div className="project-card">
          <h2>2. Página Web Enfocada para Películas</h2>
          <p>Desarrollo de un sitio web interactivo para la gestión y visualización de películas, donde los usuarios pueden buscar, filtrar y obtener detalles sobre sus películas favoritas.</p>
          <a href="proyecto2.html">Ver detalles</a>
        </div>

        <div className="project-card">
          <h2>3. App Móvil para Reservas de Citas con Médicos</h2>
          <p>Aplicación móvil que permite a los usuarios reservar citas médicas, ver horarios disponibles y gestionar su historial médico de forma sencilla y eficiente.</p>
          <a href="proyecto3.html">Ver detalles</a>
        </div>

        <div className="project-card">
          <h2>4. App Móvil Juego de Cachos</h2>
          <p>Juego móvil inspirado en el tradicional juego de Cachos, donde los jugadores pueden desafiar a sus amigos o jugar contra la IA en diferentes niveles de dificultad.</p>
          <a href="proyecto4.html">Ver detalles</a>
        </div>

        <div className="project-card">
          <h2>5. App Móvil Juego de Tik-Tak-Toe</h2>
          <p>Juego móvil clásico de Tic-Tac-Toe donde los jugadores pueden jugar de manera interactiva en una interfaz simple y amigable.</p>
          <a href="proyecto5.html">Ver detalles</a>
        </div>

        <div className="project-card">
          <h2>6. App Móvil Notas</h2>
          <p>Aplicación móvil que permite a los usuarios tomar notas, organizarlas por categorías y acceder a ellas rápidamente. Ideal para la gestión de tareas diarias.</p>
          <a href="proyecto6.html">Ver detalles</a>
        </div>

        <div className="project-card">
          <h2>7. App de Escritorio Inventario para una Tienda</h2>
          <p>Aplicación de escritorio para gestionar el inventario de una tienda, permitiendo llevar un control de productos, ventas y stock en tiempo real.</p>
          <a href="proyecto7.html">Ver detalles</a>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Eloy Moises Meneses Jancko. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Proyecto;
