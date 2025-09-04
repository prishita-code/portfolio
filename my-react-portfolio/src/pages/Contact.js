import React from 'react';
import { Link } from 'react-router-dom';
import gmailImg from '../img/testimonials/gmail.jpg';
import linkedinImg from '../img/testimonials/linkedin.png';
import instagramImg from '../img/testimonials/insta.png';
import youtubeImg from '../img/testimonials/youtube.png';

const Contact = () => {
    return (
        <div className="contact-area" id="contact">
            <div className="container py-5">
                <div className="row justify-content-center text-center mb-4">
                    <div className="col-12">
                        <h1 className="text-uppercase title-h1">CONTACT ME</h1>
                        <p className="para">
                            Let's stay CONNECTED! Feel free to reach out to me through any of the 
                            mediums attached below:
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center text-center">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h4 className="text-uppercase">
                            <img src={gmailImg} alt="gmail" style={{ width: '32px', marginRight: '8px' }} />
                            E-mail
                        </h4>
                        <p className="para">Reach out to me and mail me at</p>
                        <a href="mailto:prishitasingh25@gmail.com">prishitasingh25@gmail.com</a>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h4 className="text-uppercase">
                            <img src={linkedinImg} alt="linkedin" style={{ width: '32px', marginRight: '8px' }} />
                            LinkedIn
                        </h4>
                        <p className="para">You can also connect with me on LinkedIn.</p>
                        <a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/prishitasingh">linkedin/prishitasingh</a>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h4 className="text-uppercase">
                            <img src={instagramImg} alt="instagram" style={{ width: '32px', marginRight: '8px' }} />
                            Instagram
                        </h4>
                        <p className="para">Link to my Food and Painting Account</p>
                        <a className="nav-link" href="https://instagram.com/colorandfoodrush_official?igshid=1rdxrfc73odz">instagram/colorandfoodrush_official</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;