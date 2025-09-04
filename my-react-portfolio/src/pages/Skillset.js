import React from 'react';
import S1 from '../img/services/s1.png';
import S2 from '../img/services/s2.png';
import S3 from '../img/services/s3.png';
import S4 from '../img/services/s4.png';

const Skillset = () => {
    return (
        <section className="services-area" id="skillset">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-lg-12 text-center services-title">
                        <h1 className="text-uppercase title-text">Skill set</h1>
                        <p className="para">
                            Below are my few Technical Skills listed below. In my free time, I 
                            love to paint and have food. 
                        </p>
                    </div>
                </div>
                    <div className="container services-list">
                        <div className="row g-4 justify-content-center text-center align-items-stretch">
                            <div className="col-lg-4 col-md-6 col-sm-12 h-100">
                                <div className="services h-100 d-flex flex-column">
                                    <div className="sevices-img text-center py-4">
                                        <img src={S1} alt="Backend developer" />
                                    </div>
                                    <div className="card-body text-center flex-grow-1">
                                        <h5 className="card-title text-uppercase font-roboto">Backend developer</h5>
                                        <p className="card-text text-secondary">
                                            Developed and deployed functional APIs, jobs and services while aligning with scheduler in real time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 h-100">
                                <div className="services h-100 d-flex flex-column">
                                    <div className="sevices-img text-center py-4">
                                        <img src={S2} alt="Frontend developer" />
                                    </div>
                                    <div className="card-body text-center flex-grow-1">
                                        <h5 className="card-title text-uppercase font-roboto">Frontend developer</h5>
                                        <p className="card-text text-secondary">
                                            Built interactive UIs and dashboards using React, Angular, and modern CSS frameworks.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 h-100">
                                <div className="services h-100 d-flex flex-column">
                                    <div className="sevices-img text-center py-4">
                                        <img src={S3} alt="DevOps & SRE" />
                                    </div>
                                    <div className="card-body text-center flex-grow-1">
                                        <h5 className="card-title text-uppercase font-roboto">DevOps & SRE</h5>
                                        <p className="card-text text-secondary">
                                            Automated deployments, monitored reliability, and implemented CI/CD pipelines for scalable systems.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 h-100">
                                <div className="services h-100 d-flex flex-column">
                                    <div className="sevices-img text-center py-4">
                                        <img src={S4} alt="Technical Program Manager" />
                                    </div>
                                    <div className="card-body text-center flex-grow-1">
                                        <h5 className="card-title text-uppercase font-roboto">Technical Program Manager</h5>
                                        <p className="card-text text-secondary">
                                            Led cross-functional teams, managed SDLC, and delivered projects using Agile/Scrum methodologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Skillset;