import { Link, useLocation } from 'react-router-dom';
import logo from '../img/Logo.JPG';
import '../styles/Navbar.css';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src={logo} alt="logo" style={{ width: '40px', borderRadius: '50%', marginRight: '10px' }} />
                    <span className="fw-bold">Prishita Singh</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className={`nav-link${location.pathname === '/' ? ' active' : ''}`} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link${location.pathname === '/about' ? ' active' : ''}`} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link${location.pathname === '/technology' ? ' active' : ''}`} to="/technology">Languages</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link${location.pathname === '/skillset' ? ' active' : ''}`} to="/skillset">Skillset</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link${location.pathname === '/contact' ? ' active' : ''}`} to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;