import React from 'react';

const About = () => {
    return (
        <section className="about-area" id="about">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src="./img/me.png" alt="About us" className="img-fluid" style={{ height: '650px', width: '500px' }} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 about-title">
                        <h2 className="text-uppercase pt-5">
                            <span>Let me</span>
                            <span>introduce</span>
                            <span>myself</span>
                        </h2>
                        <div className="paragraph py-4 w-75">
                            <p className="para">
                                A Computer Science Engineer, specializing in the software development arena. I'm currently working
                                as an Associate Developer in an agile software development environment.
                            </p>
                            <p className="para">
                                I'm hands on in all stages of the software development life-cycle, from planning and design to 
                                testing and deployment and release. My tasks involve brainstorming ideas, integrating new systems, 
                                rolling new features, fixing bugs, optimizing software pipeline.
                            </p>
                            <p className="para">
                                Skills: AWS Certified (Cloud Practitioner), JAVA, NodeJS, React, Angular, C++, Spring, CI/CD 
                            </p>
                        </div>
                        <button type="button" className="btn button primary-button text-uppercase">Download cv</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;