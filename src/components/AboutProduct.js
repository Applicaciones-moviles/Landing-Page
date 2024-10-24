import React from 'react';
import '../styles/AboutProduct.css';
import imagen1 from '../assets/imagen1.png';
import imagen2 from '../assets/imagen2.png';
import imagen3 from '../assets/imagen3.png';
import imagen4 from '../assets/imagen4.png';
import imagen5 from '../assets/imagen5.png';

const AboutProduct = () => {
  return (
    <section id="about-product" className="about-product-section">
      <h2>Acerca del producto</h2>
      <div className="about-images-container">
        <img src={imagen1} alt="Imagen 1" className="about-image" />
        <img src={imagen2} alt="Imagen 2" className="about-image" />
        <img src={imagen3} alt="Imagen 3" className="about-image" />
        <img src={imagen4} alt="Imagen 4" className="about-image" />
        <img src={imagen5} alt="Imagen 5" className="about-image" />
      </div>
    </section>
  );
};

export default AboutProduct;
