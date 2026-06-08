import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container h-100 d-flex align-items-center justify-content-center">
        <div className="hero-content animate-up">
          <h1 className="hero-title">CMPF : Toujours à vos côtés</h1>
          <p className="hero-subtitle">
            Secours médical & Assistance routière d'urgence 24h/7j partout au Maroc. 
            <br/>Intervention rapide, sécurisée et professionnelle.
          </p>
          <a href="tel:0661502763" className="phone-badge">
            <FaPhoneAlt className="icon-pulse" /> 06 61 50 27 63
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
