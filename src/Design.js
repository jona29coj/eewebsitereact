import React from 'react';
import {
  Building2,
  Leaf,
  ArrowRight,
} from 'lucide-react';
import './Design.css';

function Design() {
  return (
    <div className="app-container">
      <section className="passive-strategies-section">
        <div className="section-wrapper">
          <div className="herobuild-text">
            <h2 className="herobuild-title">
              <br />The Future of Buildings Starts Here!
            </h2>
            <p className="herobuild-description">
              Transforming passive energy consumers into active contributors through innovative
              sustainable design strategies and smart building technologies.
            </p>
          </div>

          <div className="transformation-grid">
            <div className="transformation-card">
              <div className="card-icon">
                <Building2 />
              </div>
              <h3 className="card-title">FROM</h3>
              <div className="passive-badge">PASSIVE CONSUMERS</div>
              <p className="card-description">
                Buildings today are passive energy consumers - taking in power with no built-in
                mechanisms to conserve or optimize.
              </p>
            </div>

            <div className="arrow-container">
              <div className="arrow-icon">
                <ArrowRight />
              </div>
            </div>

            <div className="transformation-card">
              <div className="card-icon green">
                <Leaf />
              </div>
              <h3 className="card-title">TO</h3>
              <div className="active-badge">ACTIVE CONTRIBUTORS</div>
              <p className="card-description">
                We transform buildings into optimized systems that save energy, reduce emissions, and support a greener future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design & Measure Section */}
      <section className="transformation-sectiondesign1">
      <section className="design-measure-section">
        <div className="design-measure-container">
          {/* Left Text Section */}
          <div className="design-text">
            <h3 className="design-title">
              Design & Measure to<br />Reduce Consumption
            </h3>
            <p className="design-paragraph">
              The greenest form of energy is the one we don’t use – which is why the first step toward true efficiency is identifying where energy is wasted. HVACs, lifts, heavy equipment, exhausts all consume high energy on a continuous basis; identifying and eliminating inefficiencies can go a long way towards saving cost and carbon.
            </p>
            <p className="design-paragraph">
              In commercial facilities, cooling typically accounts for nearly 40% of total energy consumption, making it a critical focus area. Through thermal mapping and solar heat gain analysis, we uncover hidden inefficiencies — from overexposed facades to poorly performing zones — that lead to unnecessarily energy use in large, complex spaces.
            </p>
            <p className="design-paragraph">
              Our technology addresses these gaps head-on, using data-driven insights to guide smarter steps in design, operation, and control, ensuring energy is used only where and when it's truly needed.
            </p>
          </div>

          {/* Right Image and Labels */}
          <div className="design-image-section">
            <img
              src="/Design.png"
              alt="Design Visual"
              className="design-graphic"
            />

            <div className="design-label label-top">
              <h4>Digital Twin of the Facility</h4>
              <p>
                A real-time virtual replica of your facility that visualizes, simulates, and optimizes energy and system performance for smarter decision-making.
              </p>
            </div>

            <div className="design-label label-middle">
              <h4>Energy Modeling</h4>
              <p>
                Full scale simulation of a facility’s energy use is generated to predict performance, identify inefficiencies, and guide design and operational improvements.
              </p>
            </div>

            <div className="design-label label-bottom">
              <h4>Thermal and Heat Mapping</h4>
              <p>
                This evaluates how sunlight and heat enters and impacts a building, helping optimize shading, glazing, and HVAC design to reduce cooling loads and energy consumption.
              </p>
            </div>
          </div>
        </div>
      </section>
      </section>
      <section className="passive-strategies-section">
        <div className="passive-strategies-container">
          {/* Left Image Section */}
          <div className="passive-image-section">
            <img
              src="/sustainability.png"
              alt="Sustainable Passive Design Strategies"
              className="passive-graphic"
            />
          </div>

          {/* Right Text Section */}
          <div className="passive-text-section">
            <h3 className="passive-title">Sustainable Design Strategies</h3>
            <p className="passive-paragraph">
              Sustainable design combines both passive and active strategies to minimise energy consumption while enhancing occupant comfort and environmental performance.
            </p>
            <p className="passive-paragraph">
              <strong>Passive strategies</strong> harness natural elements—like daylight, ventilation, thermal mass, and building orientation—to reduce reliance on mechanical systems. These include techniques such as optimal window placement, shading devices, and natural cooling.
            </p>
            <p className="passive-paragraph">
              <strong>Active strategies</strong> involve the use of efficient technologies and systems—like high-performance HVAC, lighting controls, solar panels, and energy monitoring—to optimise energy use and reduce emissions.
            </p>
            <p className="passive-paragraph">
              Together, these approaches create buildings that are not only energy-efficient but also resilient, cost-effective, and climate-responsive.
            </p>
          </div>
        </div>
      </section>

     

      
    </div>
  );
}

export default Design;
