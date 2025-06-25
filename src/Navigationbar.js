// NavigationBar.js
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import './App.css'; // If it includes relevant navbar styles

function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className={`py-3 ${scrolled ? 'scrolled' : ''}`}>
      <Container>
        <Navbar.Brand href="#home" className="brand-logo">
          <img
            src={scrolled ? './logo-light.png' : './logo-dark.png'}
            alt=""
            className={scrolled ? "logo-dark" : "logo-light"}
            onError={(e) => {
              console.error('Failed to load logo:', e.target.src);
              e.target.style.display = 'none';
            }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-link-custom">About Us</Nav.Link>
            <NavDropdown title="Solutions" id="solutions-dropdown" className="nav-dropdown-custom">
              <NavDropdown.Item href="#design" className="dropdown-item-custom">Design</NavDropdown.Item>
              <NavDropdown.Item href="#build" className="dropdown-item-custom">Build</NavDropdown.Item>
              <NavDropdown.Item href="#operate" className="dropdown-item-custom">Operate</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#projects" className="nav-link-custom">Projects</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
            <Button variant="success" className="ms-2 px-2 py-1 small-btn">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
