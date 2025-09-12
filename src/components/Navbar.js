import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../img/Logo.JPG';
import '../styles/Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const handleToggle = () => {
        setIsNavExpanded(!isNavExpanded);
    };

    const closeNavbar = () => {
        setIsNavExpanded(false);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeNavbar}>
                    <img src={logo} alt="logo" style={{ width: '40px', borderRadius: '50%', marginRight: '10px' }} />
                    <span className="fw-bold">Prishita Singh</span>
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={handleToggle}
                    aria-expanded={isNavExpanded}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavExpanded ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className={`nav-link${location.pathname === '/' ? ' active' : ''}`} to="/" onClick={closeNavbar}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link${location.pathname === '/about' ? ' active' : ''}`} to="/about" onClick={closeNavbar}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link${location.pathname === '/journey' ? ' active' : ''}`} to="/journey" onClick={closeNavbar}>Journey</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link${location.pathname === '/technology' ? ' active' : ''}`} to="/technology" onClick={closeNavbar}>Languages</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link${location.pathname === '/skillset' ? ' active' : ''}`} to="/skillset" onClick={closeNavbar}>Skillset</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link${location.pathname === '/contact' ? ' active' : ''}`} to="/contact" onClick={closeNavbar}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;