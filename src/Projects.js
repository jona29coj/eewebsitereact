import React from 'react';
import './Projects.css';
import { ArrowRight } from 'lucide-react';

function ProjectsContent({ setActivePage }) {
  return (
    <div className="projects-page">
      <h2 className="projects-title">Our Projects</h2>
      <p className="projects-subtitle">Innovative energy solutions and sustainable design</p>

      <div className="projects-container">
        {/* Card 1 */}
        <div className="project-card">
          <div className="card-image1">
            <span className="tag">Space Design</span>
          </div>
          <div className="card-content">
            <h3>Centre for Quantum Information, Communication and Computing Lab</h3>
            <p className="category">SPACE DESIGN</p>
            <p>...</p>
            <button className="view-button" href="#CQuICC" onClick={() => setActivePage('Project2')}>
              View Details <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="project-card">
          <div className="card-image2">
            <span className="tag">Energy Analysis</span>
          </div>
          <div className="card-content">
            <h3>Metalware Corporation</h3>
            <p className="category">ENERGY ANALYSIS</p>
            <p>...</p>
            <button className="view-button" href="#Elements energy" onClick={() => setActivePage('Project3')}>
              View Details <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="project-card">
          <div className="card-image3">
            <span className="tag">Energy Analysis</span>
          </div>
          <div className="card-content">
            <h3>Ecotech Factory</h3>
            <p className="category">ENERGY ANALYSIS</p>
            <p>...</p>
            <button className="view-button" href="Ecotech " onClick={() => setActivePage('Project4')}>
              View Details <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsContent;
