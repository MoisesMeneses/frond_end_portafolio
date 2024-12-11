import logo from './logo.svg';
import './App.css';
import '../src/styles/styles.css'
import '../src/styles/reloj.css'
import '../src/styles/habilidades.css'
import '../src/styles/proyectos.css'
import '../src/styles/contactos.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Habilidad from './habilidad/Habilidad';
import Proyecto from './proyecto/Proyecto';
import Contacto from './contacto/Contacto';
import Inicio from './Inicio/Inicio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/habilidades" element={<Habilidad />} />
        <Route path="/proyectos" element={<Proyecto />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
