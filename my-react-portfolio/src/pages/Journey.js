import React from "react";

const Journey = () => {
    return (
        <section className="services-area" id="journey">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-lg-12 text-center services-title">
                        <h1 className="text-uppercase title-text">My Journey</h1>
                        <p className="para">
                            This is a brief overview of my professional and educational journey.
                        </p>
                    </div>
                </div>
                <div className="container services-list">
                    <div className="row g-4">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="services">
                                <div className="card-body text-center">
                                    <h5 className="card-title text-uppercase font-roboto">Education</h5>
                                    <p className="card-text">Bachelor's in Computer Science from XYZ University</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="services">
                                <div className="card-body text-center">
                                    <h5 className="card-title text-uppercase font-roboto">Work Experience</h5>
                                    <p className="card-text">Software Engineer at ABC Corp (2020 - Present)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="services">
                                <div className="card-body text-center">
                                    <h5 className="card-title text-uppercase font-roboto">Internships</h5>
                                    <p className="card-text">Summer Intern at DEF Inc (2019)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;