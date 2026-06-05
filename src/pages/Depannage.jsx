import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaTools, FaClock, FaShieldAlt, FaTruckLoading, FaCheckCircle, FaArrowLeft, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CustomNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import imgTowing from '../assets/image copy 2.png';

const DepannagePage = () => {
  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CustomNavbar />
      
      {/* Page Header */}
      <div className="service-page-hero towing-theme text-white d-flex align-items-center justify-content-center">
        <div className="hero-overlay"></div>
        <Container className="position-relative text-center z-3 py-5">
          <Link to="/" className="btn btn-outline-light mb-4 rounded-pill px-4 animate-up delay-1">
            <FaArrowLeft className="me-2" /> Retour à l'accueil
          </Link>
          <h1 className="display-3 fw-black text-uppercase animate-up delay-1 mb-3">
            Dépannage & Remorquage 24h/7j
          </h1>
          <p className="lead text-light-80 animate-up delay-2 max-width-600 mx-auto mb-4 fs-4 fw-medium">
            CMPF Assistance assure votre dépannage routier w remorquage partout au Maroc.
          </p>
          
          <div className="phone-display-box animate-up delay-2 mx-auto mb-4 p-3 rounded-4 shadow-lg" style={{ maxWidth: '440px', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
            <span className="text-uppercase text-light-50 fw-bold tracking-wider small d-block mb-1">STANDARD ASSISTANCE 24/7</span>
            <span className="display-6 fw-black text-white d-block">06 66 09 57 92</span>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-3 animate-up delay-3">
            <a href="tel:0666095792" className="btn btn-info btn-lg rounded-pill px-4 py-3 fw-bold shadow-lg d-flex align-items-center gap-2" style={{ backgroundColor: 'var(--accent-cyan)', borderColor: 'var(--accent-cyan)', color: 'var(--primary-color)' }}>
              <FaPhoneAlt /> Appel Direct
            </a>
            <a href="https://wa.me/212666095792" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg rounded-pill px-4 py-3 fw-bold shadow-lg d-flex align-items-center gap-2" style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}>
              <FaWhatsapp size={22} /> Assistance WhatsApp
            </a>
          </div>
        </Container>
      </div>

      {/* Detail Section */}
      <section className="py-5 bg-white">
        <Container className="py-4">
          <Row className="align-items-center g-5">
            <Col lg={6} className="animate-up delay-1">
              <div className="position-relative">
                <img 
                  src={imgTowing} 
                  alt="Dépannage & Remorquage CMPF" 
                  className="img-fluid rounded-4 shadow-lg w-100" 
                  style={{ objectFit: 'cover', maxHeight: '450px' }}
                />
                <div 
                  className="position-absolute bottom-0 end-0 bg-info text-dark p-4 m-3 rounded-4 shadow-lg text-center"
                  style={{ backdropFilter: 'blur(10px)', background: 'rgba(91, 192, 190, 0.95)' }}
                >
                  <h4 className="fw-bold mb-0">Intervention Rapide</h4>
                  <p className="small mb-0">Moins de 30 minutes</p>
                </div>
              </div>
            </Col>
            
            <Col lg={6} className="animate-up delay-2">
              <div className="ps-lg-4">
                <span className="badge bg-info-soft text-info mb-3 px-3 py-2 rounded-pill fw-bold">ASSISTANCE ROUTIÈRE</span>
                <h2 className="display-6 fw-bold mb-4">Bloqué sur la route ? Pas de panique</h2>
                <p className="text-muted mb-4 lead">
                  Qu'il s'agisse d'une panne mécanique, d'un accident, d'une crevaison ou d'une clé oubliée à l'intérieur, nos équipes de dépanneurs professionnels interviennent rapidement pour vous sortir de toute situation délicate.
                </p>
                
                <div className="d-flex align-items-start gap-3 mb-4">
                  <div className="p-3 bg-info-soft text-info rounded-circle">
                    <FaTruckLoading size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold">Matériel Professionnel Adapté</h5>
                    <p className="text-muted mb-0">Dépanneuses modernes équipées pour le chargement en toute sécurité de citadines, berlines, SUV, utilitaires et motos.</p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3 mb-4">
                  <div className="p-3 bg-info-soft text-info rounded-circle">
                    <FaTools size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold">Dépannage sur Place</h5>
                    <p className="text-muted mb-0">Si possible, nos techniciens effectuent les réparations mineures sur place (changement de batterie, roue de secours, etc.) pour vous permettre de repartir immédiatement.</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Interventions */}
      <section className="py-5 bg-light">
        <Container className="py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-uppercase section-title">Nos Prestations d'Assistance</h2>
            <p className="text-muted max-width-600 mx-auto">Une gamme complète de solutions pour vous assister en cas d'imprévu routier.</p>
          </div>
          
          <Row className="g-4">
            {[
              {
                title: "Remorquage Auto & Moto",
                desc: "Transport sécurisé de votre véhicule en panne ou accidenté vers le garage de votre choix ou vers votre domicile."
              },
              {
                title: "Aide au Démarrage (Batterie)",
                desc: "Dépannage de batterie à plat avec booster professionnel, ou remplacement immédiat par une batterie neuve si nécessaire."
              },
              {
                title: "Remplacement de Roue",
                desc: "Changement de roue en cas de crevaison ou crevaison multiple. Nous montons votre roue de secours en toute sécurité."
              },
              {
                title: "Panne de Carburant & Erreur",
                desc: "Livraison rapide de carburant en cas de panne sèche, ou vidange du réservoir en cas d'erreur de carburant."
              }
            ].map((item, idx) => (
              <Col md={6} key={idx} className="animate-up">
                <Card className="border-0 shadow-sm rounded-4 h-100 p-4 hover-lift">
                  <Card.Body className="d-flex align-items-start gap-3 p-0">
                    <FaCheckCircle className="text-info mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="fw-bold mb-2">{item.title}</h4>
                      <p className="text-muted mb-0">{item.desc}</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Emergency CTA Banner */}
      <section className="py-5 bg-dark text-white position-relative overflow-hidden">
        <div className="hero-overlay opacity-90" style={{ background: 'linear-gradient(135deg, #0b132b 0%, #1c2541 100%)' }}></div>
        <Container className="py-5 position-relative z-3 text-center">
          <h2 className="display-5 fw-black text-uppercase mb-3">Besoin d'un Remorquage Urgent ?</h2>
          <p className="lead text-light-50 mb-4 max-width-600 mx-auto">
            Contactez notre standard dépannage disponible 24h/24. Une dépanneuse est immédiatement envoyée vers votre position.
          </p>
          <a 
            href="tel:0666095792" 
            className="btn btn-info btn-lg rounded-pill px-5 py-3 fw-bold fs-4 shadow-lg text-dark"
            style={{ transition: 'all 0.3s', backgroundColor: 'var(--accent-cyan)', borderColor: 'var(--accent-cyan)' }}
          >
            <FaPhoneAlt className="me-3 animate-pulse" /> 06 66 09 57 92
          </a>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default DepannagePage;
