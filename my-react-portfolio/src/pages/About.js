import React from 'react';
import meImg from '../img/me.png';
import '../styles/style.css';

const About = () => {
    return (
        <section className="about-area" id="about">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src={meImg} alt="About Prishita" className="img-fluid" style={{ height: '650px', width: '500px' }} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 about-title">
                        <h2 className="text-uppercase pt-5">
                            <span>Let me</span>
                            <span> introduce</span>
                            <span> myself</span>
                        </h2>
                        <div className="paragraph py-4 w-75">
                            <p className="para">
                                Technical Program Manager and Developer with a proven track record of leading the delivery of high-scale software projects and complex online services. My deep hands-on technical expertise in full-stack development and SRE provides a critical foundation for effectively managing programs, de-risking projects, and bridging communication between engineering teams and business stakeholders.
                            </p>
                            <p className="para mb-2 fw-bold">I specialize in:</p>
                            <ul className="para ps-3">
                                <li>Leading cross-functional teams using Agile/Scrum methodologies to deliver projects on time.</li>
                                <li>Managing the full SDLC, from requirements gathering to deployment and incident management.</li>
                                <li>Implementing SRE principles to improve system reliability and reduce operational overhead.</li>
                                <li>Translating technical concepts for executive reporting and making data-driven decisions.</li>
                            </ul>
                            <p className="para mt-3">
                                <strong>Open to:</strong> Technical Program Management, Site Reliability Engineering, and Software Development roles.
                            </p>
                            <p className="para text-muted small">
                                #TPM #TechnicalProgramManager #SRE #SiteReliabilityEngineering #SoftwareDeveloper #Agile #SDLC
                            </p>
                        </div>
                        {/* <button type="button" className="btn btn-primary text-uppercase">Download CV</button> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;