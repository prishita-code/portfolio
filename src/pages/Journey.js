import React, { useState, useEffect, useRef } from 'react';
import '../styles/journey.css';
import birthImage from '../img/banner/prishi.png';

const Journey = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const milestoneRefs = useRef([]);

  const milestones = [ 
    { year: '1997', title: 'Birth', description: 'Started my journey in this world.', image: birthImage },
    { year: '2002', title: 'Started school', description: 'Class 1' },
    { year: '2014', title: 'Secondary School', description: 'Completed Class 10' },
    { year: '2016', title: 'High School', description: 'Completed Class 12' },
    { year: '2016', title: 'Bachelors', description: 'Started pursuing Bachelors in Technology (Computer Science)' },
    { year: '2019', title: 'Internship', description: 'Summer Intern' },
    { year: '2020', title: 'Graduated', description: 'Finished Bachelors' },
    { year: '2020', title: 'First Job', description: 'Joined as a Software Engineer at Macquarie' },
    { year: '2022', title: 'Promoted', description: 'Promoted to Senior Software Developer' },
    { year: '2022', title: 'Masters', description: 'Started Masters at Trinity College Dublin (MSc Computer Science)' },
    { year: '2023', title: 'Graduated', description: 'Completed Masters' },
    { year: '2023', title: 'New Role', description: 'Joined Bank of Ireland as Technical Service Owner' },
    { year: '2025', title: 'Promoted', description: 'Promoted to Senior Resilience Analyst' },
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
        <h2 className="title-text">My Journey </h2>
        <p className="subtitle">Across the years</p>

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
                    {/* Text side */}
                    <div className="milestone-text">
                        <div className="milestone-header">
                        <span className="milestone-year">{milestone.year}</span>
                        <h3 className="milestone-title">{milestone.title}</h3>
                        </div>
                        <p className="milestone-description">{milestone.description}</p>
                    </div>

                    {/* Image side */}
                    {milestone.image && (
                        <div className="milestone-image">
                        <img src={milestone.image} alt={milestone.title} />
                        </div>
                    )}
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
