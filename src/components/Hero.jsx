import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container h-100 d-flex align-items-center justify-content-center">
        <div className="hero-content animate-up">
          <h1 className="hero-title">Ambulance & Dépannage</h1>
          <p className="hero-subtitle">
            Ambulance médicalisée et Remorquage auto 24/7 partout au Maroc. 
            <br/>Intervention rapide et professionnelle.
          </p>
          <a href="tel:0666095792" className="phone-badge">
            <FaPhoneAlt className="icon-pulse" /> 06 66 09 57 92
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
