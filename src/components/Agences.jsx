import React from 'react';
import { Container } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Agences = () => {
  const cities = [
    "Casablanca", "Rabat", "Fès", "Meknès", 
    "Tanger", "Tétouan", "Agadir", "Marrakech", 
    "Laâyoune", "Ouarzazate", "Nador", "Oujda"
  ];

  return (
    <section id="agences" className="agences-section text-center">
      <Container>
        <div className="animate-up">
          <h2 className="section-title text-white">Nos Agences</h2>
          <p className="mb-5 text-light opacity-75">
            Nous couvrons l'ensemble du territoire marocain pour vous garantir une intervention rapide.
          </p>
          
          <div className="d-flex flex-wrap justify-content-center">
            {cities.map((city, index) => (
              <div 
                key={index} 
                className={`agence-badge animate-up`} 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <FaMapMarkerAlt className="me-2" />
                {city}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Agences;
