import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaPhoneAlt, FaAmbulance, FaTruckPickup } from 'react-icons/fa';
import logo from '../assets/logo.png';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" fixed="top" className="navbar-light-bg">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
          <img src={logo} alt="CMPF Logo" height="50" />
          <div className="d-flex flex-column lh-1">
            <span className="text-dark fw-bold fs-5">CMPF</span>
            <span style={{ color: 'var(--accent-blue)', fontSize: '0.7rem', fontWeight: 'bold' }}>AMBULANCE & ASSISTANCE</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#agences">Nos Agences</Nav.Link>
            <Nav.Link href="tel:0666095792" className="nav-phone ms-lg-3 mt-2 mt-lg-0">
              <FaPhoneAlt className="me-2" /> 06 66 09 57 92
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
