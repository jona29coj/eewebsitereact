import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import './App.css';

import Partners from './Partner';
import Solutions from './Solution';
import About from './About';
import VideoParallaxSection from './VideoParallax';
import WhatDrivesUs from './WhatDriveUs';
import ImpactStats from './ImpactStats';
import Spotlight from './Spotlight';
import Operate from './Operate';
import Design from './Design';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Build from './Build';
import ProjectsContent from './Projects';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import Login from './Login';

function Typewriter({ texts, speed = 100, pause = 2000 }) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink(b => !b), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    let timeout;
    const currentText = texts[textIndex];

    if (!deleting && charIndex < currentText.length) {
      timeout = setTimeout(() => setCharIndex(charIndex + 1), speed);
    } else if (!deleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(charIndex - 1), speed / 2);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTextIndex((textIndex + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, pause, speed, textIndex, texts]);

  const currentFullText = texts[textIndex];
  const visibleText = currentFullText.substring(0, charIndex);
  const paddedText = visibleText.padEnd(currentFullText.length, ' ');

  return (
    <div className='texttype'
      style={{
        display: 'flex',
        fontSize: '43px',
        justifyContent: 'center',
        fontWeight: '600',
        fontFamily: 'Times New Roman, serif',
        color: '#fff',
        gap: '1rem',
        minWidth: '12ch',
      }}
    >
      <span style={{ whiteSpace: 'nowrap' }} className='empoweringtext'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Empowering
      </span>
      <span className='Typingtext'
        style={{
          fontFamily: 'Times New Roman, serif',
          minWidth: '12ch',
          display: 'inline-block',
          whiteSpace: 'pre',
          textAlign: 'left',
        }}
      >
        {paddedText
          .split('')
          .map((char, idx) =>
            idx === charIndex ? (blink ? '|' : ' ') : char
          )
          .join('')}
      </span>
    </div>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Sync activePage with URL hash
  useEffect(() => {
    const syncWithHash = () => {
      const hash = window.location.hash.replace('#', '');
      setActivePage(hash || 'home');
    };

    syncWithHash(); // Run on initial mount

    window.addEventListener('hashchange', syncWithHash);
    return () => window.removeEventListener('hashchange', syncWithHash);
  }, []);

  return (
    <>
      <Navbar expand="lg" fixed="top" className={`py-3 ${scrolled ? 'scrolled' : ''}`}>
        <Container>
          <Navbar.Brand href="#home" onClick={() => setActivePage('home')} className="brand-logo">
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
              <Nav.Link href="#AboutUs" className="nav-link-custom">About Us</Nav.Link>

              <NavDropdown title="Solutions" id="solutions-dropdown" className="nav-dropdown-custom">
                <NavDropdown.Item href="#Design" className="dropdown-item-custom">Design</NavDropdown.Item>
                <NavDropdown.Item href="#Build" className="dropdown-item-custom">Build</NavDropdown.Item>
                <NavDropdown.Item href="#operate" className="dropdown-item-custom">Operate</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#Projects" className="nav-link-custom">Projects</Nav.Link>
              <Nav.Link href="#Contact" className="nav-link-custom">Contact</Nav.Link>
              <Button href="#Login" variant="success" className="ms-2 px-2 py-1 small-btn">Login</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {activePage === 'home' && (
        <>
          <section className="hero-section d-flex align-items-center justify-content-center text-white text-center">
            <video autoPlay loop muted playsInline className="hero-video">
              <source src="hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="overlay" />
            <div className="z-3 hero-text-container">
              <h1 className="fw-bold" style={{ lineHeight: 1.2 }}>
                <div style={{
                  fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                  fontFamily: 'Times New Roman, serif',
                  color: '#fff',
                  textAlign: 'center'
                }}>
                  Sustainable Energy Solutions
                </div>
                <div style={{ margin: '0rem 0' }} className='typewords'>
                  <Typewriter
                    texts={['Hotels', 'Residencies', 'Utilities', 'Industries']}
                    speed={70}
                    pause={1000}
                  />
                </div>
                <div style={{
                  fontSize: 'clamp(1.2rem, 4vw, 2rem)',
                  fontWeight: 600,
                  fontFamily: 'Times New Roman, serif',
                  color: '#fff'
                }}>
                  For a Greener Tomorrow
                </div>
              </h1>

              <a href="#AboutUs" className="btn btn-light mt-4 px-4 py-2 fw-semibold">Explore More</a>
            </div>
          </section>

          <section className="section about-section"><About /></section>
          <section className="section drives-section"><WhatDrivesUs /></section>
          <section className="section solutions-section"><Solutions /></section>
          <section className="section parallax-section"><VideoParallaxSection /></section>
          <section className="section impact-section"><ImpactStats /></section>
          <section className="section spotlight-section"><Spotlight /></section>
          <section className="section partners-section"><Partners /></section>
        </>
      )}

      {activePage === 'Contact' && <Contact />}
      {activePage === 'AboutUs' && <AboutUs />}
      {activePage === 'operate' && <Operate />}
      {activePage === 'Design' && <Design />}
      {activePage === 'Build' && <Build />}
      {activePage === 'Projects' && <ProjectsContent setActivePage={setActivePage} />}
      {activePage === 'Project2' && <Project2 />}
      {activePage === 'Project3' && <Project3 />}
      {activePage === 'Project4' && <Project4 />}
      {activePage === 'Login' && <Login />}

      <footer className="elements-footer py-2">
        <Container>
          <div className="row">
            <div className="col-md-4 mb-4">
              <img src="/logo-white.png" alt="Elements Energy Logo" height="40" className="mb-3" />
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#AboutUs" className="text-white text-decoration-none">About Us</a></li>
                <li className="mb-2"><a href="#Design" className="text-white text-decoration-none">Solutions</a></li>
                <li className="mb-2"><a href="#Projects" className="text-white text-decoration-none">Projects</a></li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="tel:+919916585292" className="text-white text-decoration-none">+91 99165 85292</a></li>
                <li className="mb-2"><a href="mailto:info@elementsenergies.com" className="text-white text-decoration-none">info@elementsenergies.com</a></li>
              </ul>
              <div className="mt-3">
                <h5>Address</h5>
                <p className="mb-0">
                  IIT-Madras Research Park<br />
                  Kanagam Road, Tharamani<br />
                  Chennai, Tamil Nadu
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Follow Us</h5>
              <div className="d-flex gap-3 mt-3">
                <a href="https://in.linkedin.com/company/elements.energies">
                  <img src="./linkdin.png" alt="LinkedIn" style={{ height: '24px', width: '24px' }} />
                </a>
                <a href="https://www.instagram.com/elements_energies">
                  <img src="./insta.png" alt="Instagram" style={{ height: '24px', width: '24px' }} />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default App;
