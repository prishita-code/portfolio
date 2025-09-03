import React from 'react';

const Technology = () => {
    return (
        <section className="brand-area" id="technology">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-12">
                        <div className="first-row row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-brand">
                                    <img src="./img/brands/angular.png" alt="Angular" />
                                    <div>Angular</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-brand">
                                    <img src="./img/brands/c++.jpg" alt="C++" />
                                    <div>C++</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-brand">
                                    <img src="./img/brands/go.png" alt="Go Lang" />
                                    <div>Go Lang</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-brand">
                                    <img src="./img/brands/java.jpg" alt="Java" style={{ width: '60%', height: '75%' }} />
                                    <div>Java</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-brand" style={{ paddingTop: '3em' }}>
                                    <img src="./img/brands/react.jpg" alt="React" />
                                    <div>React</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-brand">
                                    <img src="./img/brands/nodejs.png" alt="NodeJS" style={{ width: '70%', height: '70%' }} />
                                    <div>NodeJS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12">
                        <div className="experience-area">
                            <div className="d-flex flex-row years-area">
                                <h2 className="p-3 years" style={{ fontWeight: 400, fontSize: '4.5em', color: 'slateblue', fontWeight: 'bold' }}>1</h2>
                                <h2>
                                    <span>Year</span>
                                    <span>Work</span>
                                    <span>Experience</span>
                                </h2>
                            </div>
                            <div className="d-flex flex-row flex-wrap call-area">
                                <span><i className="fa fa-briefcase fa-3x px-3"></i></span>
                                <span className="call-now">
                                    <div className="text-uppercase h4 font-roboto">Technologies</div>
                                </span>
                            </div>
                            <div className="bg-panel"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technology;