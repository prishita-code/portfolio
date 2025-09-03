import React from 'react';

const Home = () => {
    return (
        <section className="site-banner" id="home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 site-title">
           {/* Place this inside your Banner or Home component */}
                        <div className="banner-text-container text-center">
                            <h1 className="display-4 fw-bold text-black">Hey</h1>
                            <h2 className="display-5 fw-semibold text-black">I am Prishita</h2>
                            <h3 className="h4 text-black">Full Stack Developer</h3>
                        </div>
                        <div className="site-buttons mt-4">
                        <div className="d-flex flex-row flex-wrap justify-content-center gap-3">
                            <a href="#about">
                            <button type="button" className="btn btn-primary btn-lg px-4 rounded-pill shadow-sm text-uppercase">
                                Know Me
                            </button>
                            </a>
                            <a href="#contact">
                            <button type="button" className="btn btn-outline-primary btn-lg px-4 rounded-pill shadow-sm text-uppercase">
                                Contact Me
                            </button>
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 banner-image">
                        <img src="./img/banner/prishi.png" alt="banner-img" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;