import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaAmbulance, FaTools } from 'react-icons/fa';
import imgAmbulance from '../assets/image.png';
import imgTowing from '../assets/image copy 2.png';

const Services = () => {
  return (
    <section id="services" className="service-section">
      <Container>
        <div className="text-center mb-5 animate-up delay-1">
          <h2 className="section-title">Nos Services</h2>
          <p className="text-muted">Intervention rapide et équipement de pointe pour votre sécurité.</p>
        </div>
        
        <Row className="g-4">
          <Col md={6} id="ambulance-service">
            <div className="service-card animate-up delay-2">
              <div className="service-img-container">
                <img src={imgAmbulance} alt="Service Ambulance" className="w-100 service-img" />
              </div>
              <div className="service-icon">
                <FaAmbulance />
              </div>
              <div className="p-4 pt-2">
                <h3 className="mb-3">Ambulance Médicalisée</h3>
                <p className="text-muted">
                  Transport sanitaire urgent et non urgent. Nos ambulances sont équipées du matériel de réanimation de dernière génération avec une équipe médicale qualifiée disponible 24h/24 et 7j/7 pour vous accompagner en toute sécurité.
                </p>
                <ul className="list-unstyled mt-3">
                  <li><i className="text-danger me-2">✓</i> Urgences médicales</li>
                  <li><i className="text-danger me-2">✓</i> Transfert inter-hôpitaux</li>
                  <li><i className="text-danger me-2">✓</i> Consultations et soins</li>
                </ul>
              </div>
            </div>
          </Col>
          
          <Col md={6} id="depannage-service">
            <div className="service-card animate-up delay-3">
              <div className="service-img-container">
                <img src={imgTowing} alt="Service Remorquage" className="w-100 service-img" />
              </div>
              <div className="service-icon blue">
                <FaTools />
              </div>
              <div className="p-4 pt-2">
                <h3 className="mb-3">Dépannage & Remorquage</h3>
                <p className="text-muted">
                  Assistance routière rapide pour tout type de véhicule. Que ce soit pour une panne, un accident ou un pneu crevé, nos dépanneuses interviennent dans les plus brefs délais pour vous assister où que vous soyez.
                </p>
                <ul className="list-unstyled mt-3">
                  <li><i className="text-info me-2">✓</i> Remorquage auto et moto</li>
                  <li><i className="text-info me-2">✓</i> Aide au démarrage (batterie)</li>
                  <li><i className="text-info me-2">✓</i> Changement de roue et crevaison</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
