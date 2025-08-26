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
      <h2 className="projects-title">Impact Stories</h2>
      <p className="projects-subtitle">At Elements Energy, we design and deliver innovative energy solutions across diverse sectors. Our work spans industries, commercial facilities, institutes, airports, and the hospitality sector,
helping each achieve significant energy savings and move closer to net-zero goals. Every project reflects our commitment to sustainability, efficiency, and smart energy management, tailored to the
unique needs of our clients.</p>

      <div className="projects-container">

        {/* Project 1 – Split Left/Right */}
        <div className="project-card horizontal">
          <div className="card-image1 horizontal-image">
           
          </div>
          <div className="card-content horizontal-content">
            <div className="logo-title">
                <img src="quantumlogo.png" alt="Logo" className="logo" />
                <h2>IITM CDOT Samgnya</h2>
            </div>
            <h3>Centre for Quantum Information, Communication and Computing Lab</h3>
            <p className="category">Elements Energy is proud to be designing India’s first Quantum Computing Centre. This state-of-the-
            art facility demands an advanced approach to energy efficiency, reliability, and precision
            environmental control. We have designed a facility that not only meets the unique needs of the
            quantum labs but also places sustainability at its forefront, ensuring a future-ready and energy-
            conscious infrastructure.​

            ​</p>
            <button
              className="view-button"
              onClick={() => setActivePage('Project2')}
            >
              Explore<ArrowRight size={16} />
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
              <img src="Metal-logo.png" alt="metalware" className="mwlogo" />
              <p className="category">Elements Energy is working with Metalware
                Corporation to transform their
                manufacturing facilities into a model of
                energy efficiency and smart operations</p>
              <button
                className="view-button-vertical"
                onClick={() => setActivePage('Project3')}
              >
                Explore <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card vertical">
            <div className="card-image3">

            </div>
            <div className="card-content">
              <img src="Metal-logo.png" alt="rmz" className="mwlogo" />
              <p className="category">Elements Energy is partnering with RMZ
                Developers to integrate sustainable
                energy solutions into their commercial
                and mixed-use developments.</p>
              <button
                className="view-button-vertical"
                onClick={() => setActivePage('Project4')}
              >
                Explore <ArrowRight size={16} />
              </button>
            </div>
            
          </div>
          {/* Project 4 */}
          <div className="project-card vertical">
            <div className="card-image3">

            </div>
            <div className="card-content">
              <img src="Metal-logo.png" alt="crown" className="mwlogo" />
              <p className="category">Elements Energy is enhancing the energy
                performance of Crown Interiorz Mall by
                implementing smart energy management
                and optimization solutions.</p>
              <button
                className="view-button-vertical"
                onClick={() => setActivePage('Project4')}
              >
                Explore <ArrowRight size={16} />
              </button>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProjectsContent;
