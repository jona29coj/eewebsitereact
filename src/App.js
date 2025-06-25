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
import Operate from './Operate'; // ✅ Make sure this path is correct
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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        fontSize: '43px',
        fontWeight: '600',
        fontFamily: 'Times New Roman, serif',
        color: '#fff',
        gap: '1rem',
        minWidth: '12ch',
      }}
    >
      <span style={{ whiteSpace: 'nowrap' }}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Empowering
      </span>
      <span
        style={{
          fontFamily: 'Times New Roman, serif',
          fontSize: '43px',
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

  return (
    <>
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
              <Nav.Link href="#Home " onClick={() => setActivePage('home')} className="nav-link-custom">Home</Nav.Link>
              <Nav.Link  href="#AboutUs" onClick={() => setActivePage('AboutUs')} className="nav-link-custom">About Us</Nav.Link>

              <NavDropdown title="Solutions" id="solutions-dropdown" className="nav-dropdown-custom">
                <NavDropdown.Item href="#design" onClick={() => setActivePage('Design')} className="dropdown-item-custom">
                  Design
                </NavDropdown.Item>
                <NavDropdown.Item href="#build" onClick={() => setActivePage('Build')}  className="dropdown-item-custom">
                  Build
                </NavDropdown.Item>
                <NavDropdown.Item href="#operate" onClick={() => setActivePage('operate')} className="dropdown-item-custom">
                  Operate
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#projects" onClick={() => setActivePage('Projects')}   className="nav-link-custom">Projects</Nav.Link>
              <Nav.Link href="#contact" onClick={() => setActivePage('Contact')} className="nav-link-custom">Contact</Nav.Link>
              <Button href="#login" onClick={() => setActivePage('Login')} variant="success" className="ms-2 px-2 py-1 small-btn">Login</Button>
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
            <div className="z-3">
              <h1 className="fw-bold" style={{ lineHeight: 1.1 }}>
                <div
                  style={{
                    marginBottom: '0.1rem',
                    fontFamily: 'Times New Roman, serif',
                    fontSize: '43px',
                    minWidth: '12ch',
                    display: 'inline-block',
                    textAlign: 'left',
                    color: '#fff',
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sustainable Energy Solutions
                </div>

                <div style={{ marginBottom: '0.1rem' }}>
                  <Typewriter
                    texts={['Hotels', 'Residencies', 'Utilities', 'Industries']}
                    speed={70}
                    pause={1000}
                  />
                </div>

                <div
                  style={{
                    fontSize: '40px',
                    fontWeight: 600,
                    fontFamily: 'Times New Roman, serif',
                    minWidth: '12ch',
                    display: 'inline-block',
                    textAlign: 'left',
                    marginTop: 0,
                    lineHeight: 1,
                    color: '#fff',
                  }}
                >
                  For a Greener Tomorrow
                </div>
              </h1>

              <a href="#about" className="btn btn-light mt-4 px-4 py-2 fw-semibold">
                Explore More
              </a>
            </div>
          </section>
          <About />
          <WhatDrivesUs />
          <Solutions />
          <VideoParallaxSection />
          <ImpactStats />
          <Spotlight />
          <Partners />
          
        </>
      )}
      {activePage === 'Contact' && <Contact />}  
      {activePage === 'AboutUs' && <AboutUs />}      
      {activePage === 'operate' && <Operate />}
      {activePage === 'Design' && <Design />}
      {activePage === 'Build' && <Build />}
      {activePage === 'Projects' && <ProjectsContent setActivePage={setActivePage} />}
      {activePage === 'Project2' && <Project2 />}
      {activePage === 'Project3' && <Project3/>}
      {activePage === 'Project4' && <Project4/>}
      {activePage === 'Login' && <Login/>}
      


        <footer className="elements-footer py-2">
          <Container>
            <div className="row">
              {/* Quick Links Column */}
              <div className="col-md-4 mb-4">
                <img 
                  src="/logo-white.png" 
                  alt="Elements Energy Logo" 
                  height="40"
                  className="mb-3"
                  onError={(e) => {
                    console.error('Failed to load logo:', e.target.src);
                    e.target.style.display = 'none';
                  }}
                />
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><a href="#about" className="text-white text-decoration-none">About Us</a></li>
                  <li className="mb-2"><a href="#solutions" className="text-white text-decoration-none">Solutions</a></li>
                  <li className="mb-2"><a href="#projects" className="text-white text-decoration-none">Projects</a></li>
                </ul>
              </div>
    
              {/* Contact Column */}
              <div className="col-md-4 mb-4">
                <h5>Contact Us</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="tel:+919916585292" className="text-white text-decoration-none">+91 99165 85292</a>
                  </li>
                  <li className="mb-2">
                    <a href="mailto:info@elementsenergies.com" className="text-white text-decoration-none">info@elementsenergies.com</a>
                  </li>
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
    
              {/* Social Media Column */}
              <div className="col-md-4 mb-4">
                <h5>Follow Us</h5>
                <div className="d-flex gap-3 mt-3">
                  <a href="https://in.linkedin.com/company/elements.energies" className="social-icon-link">
                    <img 
                      src="./linkdin.png"
                      alt="LinkedIn" 
                      className="social-icon-img"
                      style={{ height: '24px', width: '24px' }}
                      onError={(e) => {
                        console.error('Failed to load LinkedIn icon:', e.target.src);
                        e.target.style.display = 'none';
                      }}
                    />
                  </a>
    
                  <a href="https://www.instagram.com/elements_energies" className="social-icon-link">
                    <img 
                      src="./insta.png"
                      alt="Instagram"
                      className="social-icon-img"
                      style={{ height: '24px', width: '24px' }}
                      onError={(e) => {
                        console.error('Failed to load Instagram icon:', e.target.src);
                        e.target.style.display = 'none';
                      }}
                    />
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
