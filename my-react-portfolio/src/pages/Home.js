import React from 'react';

const Home = () => {
    return (
        <section className="site-banner" id="home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 site-title">
                        <h3 className="title-text">Hey</h3>
                        <h1 className="title-text text-uppercase">I am Prishita</h1>
                        <h4 className="title-text text-uppercase">Full Stack Developer</h4>
                        <div className="site-buttons">
                            <div className="d-flex flex-row flex-wrap">
                                <a href="#about">
                                    <button type="button" className="btn button primary-button mr-4 text-uppercase">know me</button>
                                </a>
                                <a href="#contact">
                                    <button type="button" className="btn button secondary-button text-uppercase">Contact me</button>
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