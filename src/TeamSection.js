// TeamSection.js
import React from 'react';
import { Users } from 'lucide-react';
import './AboutUs.css';

const teamMembers = [
  {
    id: 1,
    name: "Auna Sando",
    position: "CEO",
    description: " Founder and architect driving Elements Energy’s vision for sustainable and net-zero buildings.",
    image: "team/auna.png"
  },
  {
    id: 2,
    name: "Chemmal Swami Durai",
    position: "Energy Analyst & Head of Operations",
    description: "Leads operations while driving energy audits and efficiency strategies.",
    image: "team/chemmal.png"
  },
  {
    id: 3,
    name: "Jonathan Prince",
    position: "Head of Technology",
    description: "Oversees the technology development, leading the design and advancement of our energy management platform.",
    image: "team/jonathan.png"
  },
  {
    id: 4,
    name: "Immanuvel",
    position: "Sustainability Analyst",
    description: "Works on designing sustainability assessments and carbon reduction strategies.",
    image: "/team/Immanuvel.jpeg"
  },
    {
    id: 5,
    name: "Tharun ",
    position: "Electrical & Electronics Engineer",
    description: "Focused on hardware integration and smart energy systems.",
    image: "team/Tharun.jpg"
  },
  {
    id: 6,
    name: "Anandha Krishnan",
    position: "Project Associate – IT",
    description: "Supports IT systems and project implementation for energy solutions.",
    image: "team/anandhaK.png"
  },

   {
    id: 7,
    name: "Harshetha V",
    position: "Software Developer Intern",
    description: "Assists in frontend development and data analytics for the energy management platform.",
    image: "team/Harshetha.jpg"
  },
  {
    id: 8,
    name: "Anson Sando",
    position: "Advisor",
    description: "Strategic advisor guiding business growth and partnerships.",
    image: "team/anson.png"
  }
];

function TeamSection() {
  return (
    <section className="page-sectionab team-section" style={{ position: 'relative', marginTop: '120px' }}>
      <div className="team-content">
        <div className="section-intro">
          <div className="section-header centered">
            <Users className="section-icon large" />
            <h1 className="section-main-title">Our Team</h1>
          </div>
          <p className="section-subtitle">
            Meet the passionate individuals driving innovation in sustainable energy solutions.
          </p>
        </div>

        <div className="team-container">
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member">
                <div className="team-avatar">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
