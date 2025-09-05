import React, { useState, useEffect, useRef } from 'react';
import '../styles/journey.css';

const Journey = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const milestoneRefs = useRef([]);

  const milestones = [
    { year: '2018', title: 'First Steps', description: 'Started our journey with a small team and big dreams.' },
    { year: '2019', title: 'Growth Phase', description: 'Expanded our services and reached new markets.' },
    { year: '2020', title: 'Adaptation', description: 'Pivoted during challenging times and found new opportunities.' },
    { year: '2021', title: 'Breakthrough', description: 'Launched our flagship product to great acclaim.' },
    { year: '2022', title: 'Expansion', description: 'Opened offices in three new countries.' },
    { year: '2023', title: 'Innovation', description: 'Introduced groundbreaking AI technology to our platform.' },
    { year: '2024', title: 'Future Vision', description: 'Setting new industry standards with our latest initiatives.' }
  ];

  const handleNext = () => {
    if (activeIndex < milestones.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  // Auto-scroll to active milestone
  useEffect(() => {
    if (milestoneRefs.current[activeIndex]) {
      milestoneRefs.current[activeIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [activeIndex]);

  // Bee position calculation
  const beePosition = (activeIndex / (milestones.length - 1)) * 100;

  return (
    <div className="journey-wrapper">
      {/* Fixed Section */}
      <div className="journey-header">
        <h2 className="title-text">Our Journey Timeline</h2>
        <p className="subtitle">Follow our growth through the years</p>

        <div className="timeline-controls">
          <button 
            className="control-btn" 
            onClick={handlePrevious}
            disabled={activeIndex === 0}
          >
            <i className="fas fa-chevron-up"></i> Previous
          </button>
          <span className="active-milestone">
            {milestones[activeIndex].year} - {milestones[activeIndex].title}
          </span>
          <button 
            className="control-btn" 
            onClick={handleNext}
            disabled={activeIndex === milestones.length - 1}
          >
            Next <i className="fas fa-chevron-down"></i>
          </button>
        </div>
      </div>

      {/* Scrollable Timeline */}
      <div className="timeline-scroll" ref={scrollRef}>
        <div className="clean-timeline">
          {/* Bee Tracker */}
          <div className="bee-track">
            <div className="bee-container" style={{ top: `${beePosition}%` }}>
              <div className="bee">
                <div className="bee-body"></div>
                <div className="bee-wing left"></div>
                <div className="bee-wing right"></div>
                <div className="bee-stinger"></div>
              </div>
            </div>
          </div>

          {/* Milestones */}
          <div className="milestones">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                ref={(el) => (milestoneRefs.current[index] = el)}
                className={`milestone ${index === activeIndex ? 'active' : ''} ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="milestone-content">
                  <div className="milestone-header">
                    <span className="milestone-year">{milestone.year}</span>
                    <h3 className="milestone-title">{milestone.title}</h3>
                  </div>
                  <p className="milestone-description">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
