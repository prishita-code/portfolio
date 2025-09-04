import React from 'react';
import angularImg from '../img/brands/angular.png';
import cppImg from '../img/brands/c++.jpg';
import goImg from '../img/brands/go.png';
import javaImg from '../img/brands/java.jpg';
import reactImg from '../img/brands/react.jpg';
import nodejsImg from '../img/brands/nodejs.png';
import '../styles/style.css';

const technologies = [
    { img: angularImg, name: 'Angular' },
    { img: cppImg, name: 'C++' },
    { img: goImg, name: 'Go Lang' },
    { img: javaImg, name: 'Java' },
    { img: reactImg, name: 'React' },
    { img: nodejsImg, name: 'NodeJS' },
];

const Technology = () => {
    return (
        <section className="services-area" id="technology">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center services-title">
                        <h1 className="text-uppercase title-text">Technologies</h1>
                        <p className="para">
                            Here are some of the technologies I work with.
                        </p>
                    </div>
                </div>
                <div className="container services-list">
                    <div className="row">
                        {technologies.map((tech, idx) => (
                            <div className="col-lg-4 col-md-6 col-sm-12" key={idx}>
                                <div className="services">
                                    <div className="sevices-img text-center py-4">
                                        <img src={tech.img} alt={tech.name} style={{ maxHeight: '100px' }} />
                                    </div>
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-uppercase font-roboto">{tech.name}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technology;