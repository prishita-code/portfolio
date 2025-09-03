import React from 'react';

const Contact = () => {
    return (
        <div className="contact-area" id="contact">
            <div className="container">
                <div className="row text-center">
                    <div className="col-12">
                        <h1 className="text-uppercase title-h1">CONTACT ME</h1>
                        <p className="para">
                            Let's stay CONNECTED! Feel free to reach out to me through any of the 
                            mediums attached below:
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <h4 className="text-uppercase">E-mail</h4>
                        <p className="para">Reach out to me and mail me at</p>
                        <a href="mailto:prishitasingh25@gmail.com">prishitasingh25@gmail.com</a>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <h4 className="text-uppercase">LinkedIn</h4>
                        <p className="para">You can also connect with me on LinkedIn.</p>
                        <a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/prishitasingh">linkedin/prishitasingh</a>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <h4 className="text-uppercase">Instagram</h4>
                        <p className="para">Link to my Food and Painting Account</p>
                        <a className="nav-link" href="https://instagram.com/colorandfoodrush_official?igshid=1rdxrfc73odz">instagram/colorandfoodrush_official</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;