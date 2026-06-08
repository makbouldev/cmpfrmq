import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaHeartbeat, FaClock, FaShieldAlt, FaBriefcaseMedical, FaCheckCircle, FaArrowLeft, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CustomNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import imgAmbulance from '../assets/image.png';

const AmbulancePage = () => {
  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CustomNavbar />
      
      {/* Page Header */}
      <div className="service-page-hero ambulance-theme text-white d-flex align-items-center justify-content-center">
        <div className="hero-overlay"></div>
        <Container className="position-relative text-center z-3 py-5">
          <Link to="/" className="btn btn-outline-light mb-4 rounded-pill px-4 animate-up delay-1">
            <FaArrowLeft className="me-2" /> Retour à l'accueil
          </Link>
          <h1 className="display-3 fw-black text-uppercase animate-up delay-1 mb-3">
            Ambulance Médicalisée 24h/7j
          </h1>
          <p className="lead text-light-80 animate-up delay-2 max-width-600 mx-auto mb-4 fs-4 fw-medium">
            CMPF vous garantit une assistance médicale d'urgence et un transport sanitaire sécurisé partout au Maroc.
          </p>
          
          <div className="phone-display-box animate-up delay-2 mx-auto mb-4 p-3 rounded-4 shadow-lg" style={{ maxWidth: '440px', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
            <span className="text-uppercase text-light-50 fw-bold tracking-wider small d-block mb-1">NUMÉRO D'URGENCE 24/7</span>
            <span className="display-6 fw-black text-white d-block">06 61 50 27 63</span>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-3 animate-up delay-3">
            <a href="tel:0661502763" className="btn btn-danger btn-lg rounded-pill px-4 py-3 fw-bold shadow-lg d-flex align-items-center gap-2">
              <FaPhoneAlt /> Appel Direct
            </a>
            <a href="https://wa.me/212661502763" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg rounded-pill px-4 py-3 fw-bold shadow-lg d-flex align-items-center gap-2" style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}>
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
                  src={imgAmbulance} 
                  alt="Ambulance Médicalisée CMPF" 
                  className="img-fluid rounded-4 shadow-lg w-100" 
                  style={{ objectFit: 'cover', maxHeight: '450px' }}
                />
                <div 
                  className="position-absolute bottom-0 end-0 bg-danger text-white p-4 m-3 rounded-4 shadow-lg text-center"
                  style={{ backdropFilter: 'blur(10px)', background: 'rgba(230, 57, 70, 0.95)' }}
                >
                  <h4 className="fw-bold mb-0">Urgences 24/7</h4>
                  <p className="small mb-0">Disponibilité immédiate</p>
                </div>
              </div>
            </Col>
            
            <Col lg={6} className="animate-up delay-2">
              <div className="ps-lg-4">
                <span className="badge bg-danger-soft text-danger mb-3 px-3 py-2 rounded-pill fw-bold">SERVICE PREMIUM</span>
                <h2 className="display-6 fw-bold mb-4">Votre santé, notre priorité absolue</h2>
                <p className="text-muted mb-4 lead">
                  Nos ambulances médicalisées sont de véritables unités de soins mobiles. Conçues pour assurer la sécurité et le confort du patient, elles répondent aux normes sanitaires les plus strictes.
                </p>
                
                <div className="d-flex align-items-start gap-3 mb-4">
                  <div className="p-3 bg-danger-soft text-danger rounded-circle">
                    <FaBriefcaseMedical size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold">Équipe Médicale Qualifiée</h5>
                    <p className="text-muted mb-0">Médecins urgentistes, infirmiers réanimateurs et ambulanciers diplômés d'État formés aux gestes de premier secours.</p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3 mb-4">
                  <div className="p-3 bg-danger-soft text-danger rounded-circle">
                    <FaHeartbeat size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold">Équipement de Pointe</h5>
                    <p className="text-muted mb-0">Matériel de monitorage, respirateurs artificiels, défibrillateurs, et tout le nécessaire de réanimation d'urgence.</p>
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
            <h2 className="fw-bold text-uppercase section-title">Nos Types d'Intervention</h2>
            <p className="text-muted max-width-600 mx-auto">Nous intervenons dans plusieurs cadres pour assurer tous vos besoins de mobilité médicale.</p>
          </div>
          
          <Row className="g-4">
            {[
              {
                title: "Transport d'Urgence",
                desc: "Prise en charge immédiate pour les urgences vitales et le transfert rapide vers les hôpitaux ou cliniques les plus proches."
              },
              {
                title: "Transfert Inter-Hôpitaux",
                desc: "Déplacement de patients nécessitant une surveillance médicale continue entre différentes structures de soins hospitalières."
              },
              {
                title: "Rapatriement Sanitaire",
                desc: "Organisation du retour de patients malades ou accidentés vers leur ville d'origine ou vers un centre de soins spécialisé."
              },
              {
                title: "Couverture Événementielle",
                desc: "Mise à disposition de dispositifs prévisionnels de secours et d'ambulances pour sécuriser vos événements culturels ou sportifs."
              }
            ].map((item, idx) => (
              <Col md={6} key={idx} className="animate-up">
                <Card className="border-0 shadow-sm rounded-4 h-100 p-4 hover-lift">
                  <Card.Body className="d-flex align-items-start gap-3 p-0">
                    <FaCheckCircle className="text-danger mt-1 flex-shrink-0" size={20} />
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
          <h2 className="display-5 fw-black text-uppercase mb-3">Besoin d'une Ambulance Immédiate ?</h2>
          <p className="lead text-light-50 mb-4 max-width-600 mx-auto">
            Contactez notre centrale de régulation disponible 24h/24. Une équipe est prête à intervenir à tout moment.
          </p>
          <a 
            href="tel:0661502763" 
            className="btn btn-danger btn-lg rounded-pill px-5 py-3 fw-bold fs-4 shadow-lg text-white"
            style={{ transition: 'all 0.3s' }}
          >
            <FaPhoneAlt className="me-3 animate-pulse" /> 06 61 50 27 63
          </a>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default AmbulancePage;
