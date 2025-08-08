import React from 'react';
import './Projects.css';
import { ArrowRight } from 'lucide-react';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';

function ProjectsContent({ activePage, setActivePage }) {
  if (activePage === 'Project2') {
    return <Project2 setActivePage={setActivePage} />;
  }

  if (activePage === 'Project3') {
    return <Project3 setActivePage={setActivePage} />;
  }

  if (activePage === 'Project4') {
    return <Project4 setActivePage={setActivePage} />;
  }

  return (
    <div className="projects-page">
      <h2 className="projects-title">Our Projects</h2>
      <p className="projects-subtitle">Innovative energy solutions and sustainable design</p>

      <div className="projects-container">

        {/* Project 1 – Split Left/Right */}
        <div className="project-card horizontal">
          <div className="card-image1 horizontal-image">
           
          </div>
          <div className="card-content horizontal-content">
            <h3>Centre for Quantum Information, Communication and Computing Lab</h3>
            <p className="category">SPACE DESIGN</p>
            <button
              className="view-button"
              onClick={() => setActivePage('Project2')}
            >
              View Details <ArrowRight size={16} />
            </button>
          </div>
        </div>
{/* Projects 2 & 3 – Side by side */}
        <div className="vertical-projects">
          {/* Project 2 */}
          <div className="project-card vertical">
            <div className="card-image2">
             
            </div>
            <div className="card-content">
              <h3>Metalware Corporation</h3>
              <p className="category">ENERGY ANALYSIS</p>
              <button
                className="view-button-vertical"
                onClick={() => setActivePage('Project3')}
              >
                View Details <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card vertical">
            <div className="card-image3">

            </div>
            <div className="card-content">
              <h3>Ecotech Factory</h3>
              <p className="category">ENERGY ANALYSIS</p>
              <button
                className="view-button-vertical"
                onClick={() => setActivePage('Project4')}
              >
                View Details <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProjectsContent;
