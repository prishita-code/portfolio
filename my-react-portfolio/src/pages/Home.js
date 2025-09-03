
import {Link} from 'react-router-dom';
import bannerImg from '../img/banner/prishi.png'; // Update the path as needed

const Home = () => {
    return (
        <section className="site-banner" id="home">
            <div className="container">
                <div className="row align-items-center min-vh-100">
                    <div className="col-lg-6 col-md-12 site-title">
                        <div className="banner-text-container text-center text-lg-start">
                            <h1 className="display-4 fw-bold text-black">Hey</h1>
                            <h2 className="display-5 fw-semibold text-black">I am Prishita</h2>
                            <h3 className="h4 text-black">Full Stack Developer</h3>
                        </div>
                        <div className="site-buttons mt-4">
                            <div className="d-flex flex-row flex-wrap justify-content-center justify-content-lg-start gap-3">
                                <Link to="/about">
                                    <button type="button" className="btn btn-outline-primary btn-lg px-4 rounded-pill shadow-sm text-uppercase">
                                        Know Me
                                    </button>
                                </Link>
                                <Link to="/contact">
                                    <button type="button" className="btn btn-outline-primary btn-lg px-4 rounded-pill shadow-sm text-uppercase">
                                        Contact Me
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 banner-image text-center text-lg-end">
                        <img src={bannerImg} alt="banner-img" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;