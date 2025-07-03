import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './ImpactStats.css';

const ImpactStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const stats = [
    {
      value: 700,
      suffix: ' Kg',
      label: 'CO₂ Reduction',
      description: 'With our energy-efficient technology, we significantly reduce carbon dioxide emissions, contributing to a greener and more sustainable environment.'
    },
    {
      value: 70,
      suffix: '%',
      label: 'Cost Savings',
      description: 'With implementation of our Advanced EMS, we achieve a significant reduction in energy consumption,optimizing performance, efficiency across the board.'
    },
    {
      value: 4,
      suffix: 'X',
      label: 'Energy Efficiency',
      description: 'EMS provides continuous monitoring of energy usage, allowing for real-time adjustments and ensuring optimal energy efficiency.'
    },
    {
      value: 1.2,
      suffix: ' M',
      label: 'Building Footprint',
      decimals: 1,
      description: 'With a larger building footprint, the EMS can manage and optimize a more extensive range of systems which allows for more significant energy savings.'
    }
  ];

  return (
    <section className="impact-section" ref={ref}>
      <h3 className="impact-heading"> Our Impact</h3>
      <div className="impact-section text-white">  
        <p className="impact-subtitle text-center">
          Real change. Real numbers. Real sustainability.
        </p>

        <p className="impact-description text-center">
          At Elements Energy, impact isn't an afterthought — it's at the core of everything we do.
          From slashing energy bills to cutting carbon emissions, we help organizations turn their
          sustainability goals into tangible results. Backed by intelligent design and real-time data,
          our solutions are driving meaningful change across campuses, industries, and communities —
          proving that technology can be both smart and sustainable.
        </p>
      </div>

      <div className="impact-row">
        {stats.map((stat, index) => (
          <div key={index} className="impact-stat">
            <div className="impact-number">
              {inView ? (
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={4}
                  decimals={stat.decimals || 0}
                  suffix={stat.suffix}
                />
              ) : (
                `${stat.value}${stat.suffix}`
              )}
            </div>
            <div className="impact-label">{stat.label}</div>
            <p className="impact-description">{stat.description}</p>
            {index !== stats.length - 1 && <div className="vertical-divider" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactStats;
