import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="gy-4">
          <Col lg={4}>
            <div className="mb-3 d-flex align-items-center gap-3">
              <img src={logo} alt="CMPF Logo" height="60" style={{ background: 'white', borderRadius: '5px', padding: '5px' }} />
              <div>
                <h4 className="mb-0">
                  <span className="text-white">CMPF</span>
                </h4>
                <div style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem', fontWeight: 'bold' }}>AMBULANCE & ASSISTANCE</div>
              </div>
            </div>
            <p className="text-light opacity-75">
              Votre partenaire de confiance pour les urgences médicales et l'assistance routière 24h/24 et 7j/7 partout au Maroc.
            </p>
          </Col>
          <Col lg={4}>
            <h5 className="mb-3">Contact Rapide</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FaPhoneAlt className="me-2 text-danger" /> 
                <a href="tel:0661502763" className="text-white text-decoration-none fw-bold">06 61 50 27 63</a>
              </li>
              <li className="mb-2">
                <FaEnvelope className="me-2 text-info" /> 
                <span className="text-light opacity-75">cmpfcasa@cmpfassistance.ma</span>
              </li>
              <li>
                <FaMapMarkerAlt className="me-2 text-warning" /> 
                <span className="text-light opacity-75">Intervention sur tout le Maroc</span>
              </li>
            </ul>
          </Col>
          <Col lg={4}>
            <h5 className="mb-3">Liens Utiles</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#home" className="text-light text-decoration-none opacity-75">Accueil</a></li>
              <li className="mb-2"><a href="#services" className="text-light text-decoration-none opacity-75">Services</a></li>
              <li><a href="#agences" className="text-light text-decoration-none opacity-75">Nos Agences</a></li>
            </ul>
          </Col>
        </Row>
        <hr className="mt-4 mb-3 border-light opacity-25" />
        <div className="text-center text-light opacity-50 small">
          &copy; {new Date().getFullYear()} CMPF. Tous droits réservés.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
