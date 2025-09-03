import React from 'react';

const Skillset = () => {
    return (
        <section className="services-area" id="skillset">
            <div className="container">
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
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="services">
                                <div className="sevices-img text-center py-4">
                                    <img src="./img/services/s1.png" alt="Services-1" />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title text-uppercase font-roboto">Backend developer</h5>
                                    <p className="card-text text-secondary">
                                        Developed and deployed functional API,
                                         jobs and services while aligning with 
                                         scheduler in real time
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="services">
                                <div className="sevices-img text-center py-4">
                                    <img src="./img/services/s2.png" alt="Services-2" />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title text-uppercase font-roboto">ux/ui Design</h5>
                                    <p className="card-text text-secondary">
                                        Created Wireframes and implemented 
                                        the functionality and the responsive
                                        design using framework.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="services">
                                <div className="sevices-img text-center py-4">
                                    <img src="./img/services/s3.png" alt="Services-3" />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title text-uppercase font-roboto">Web Developer</h5>
                                    <p className="card-text text-secondary">
                                        Some quick example text to build on the card
                                        title and make up
                                        the bulk of the card's content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="services">
                                <div className="sevices-img text-center py-4">
                                    <img src="./img/services/s4.png" alt="Services-4" />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title text-uppercase font-roboto">Cloud</h5>
                                    <p className="card-text text-secondary">
                                        AWS Cloud Practitioner Certified
                                        Upscalling new features to apps with respect to cloud
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