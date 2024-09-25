import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">CarConnect</div>

      {/* Botón hamburguesa para pantallas pequeñas */}
      <button className="navbar-toggle" onClick={toggleMenu}>
        &#9776; {/* Ícono de menú hamburguesa */}
      </button>

      {/* Menú de navegación */}
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={toggleMenu}>Inicio</a></li>
        <li><a href="#about" onClick={toggleMenu}>Acerca de</a></li>
        <li><a href="#testimonials" onClick={toggleMenu}>Testimonios</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contacto</a></li>
        <li><a href="#login" className="navbar-login" onClick={toggleMenu}>Ingresar</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
