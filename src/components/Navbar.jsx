import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" fixed="top" className="navbar-light-bg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} alt="CMPF Logo" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <Nav.Link href="/#services">Services</Nav.Link>
            <Nav.Link href="/#agences">Nos Agences</Nav.Link>
            <Nav.Link as={Link} to="/ambulance" className="nav-btn-ambulance ms-lg-2 mt-2 mt-lg-0">
              Ambulance
            </Nav.Link>
            <Nav.Link as={Link} to="/depannage" className="nav-btn-depannage ms-lg-2 mt-2 mt-lg-0">
              Dépannage
            </Nav.Link>
            <Nav.Link href="tel:0661502763" className="nav-phone ms-lg-3 mt-2 mt-lg-0">
              06 61 50 27 63
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
