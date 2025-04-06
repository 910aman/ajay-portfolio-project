import { useState, useEffect } from 'react';
import './style.css'; // Assuming your styles live here

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isHeaderActive, setIsHeaderActive] = useState(false);

    // Toggle navigation menu
    const toggleNav = () => {
        setIsNavOpen(prev => !prev);
    };

    // Close nav on link click
    const closeNav = () => {
        setIsNavOpen(false);
    };

    // Scroll effect for sticky header
    useEffect(() => {
        const handleScroll = () => {
            setIsHeaderActive(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isHeaderActive ? 'active' : ''}`} data-header>
            <div className="container">
                <a href="#" className="logo">
                    <img src="./assets/images/logo.svg" width="40" height="40" alt="Ajay home" />
                </a>

                <button className="nav-open-btn" aria-label="open menu" onClick={toggleNav}>
                    <img src="./assets/images/menu.svg" width="17" height="17" alt="menu icon" />
                </button>

                <nav className={`navbar ${isNavOpen ? 'active' : ''}`} >
                    <div className="navbar-top">
                        <a href="#" className="logo">
                            <img src="./assets/images/nav-logo.svg" width="140" height="40" alt="Ajay home" className="img" />
                        </a>

                        <button className="nav-close-btn" aria-label="close menu" onClick={toggleNav}>
                            <span className="span one"></span>
                            <span className="span two"></span>
                        </button>
                    </div>

                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <a href="#home" className="navbar-link" onClick={closeNav}>Home</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#gallery" className="navbar-link" onClick={closeNav}>Gallery</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#about" className="navbar-link" onClick={closeNav}>About</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#services" className="navbar-link" onClick={closeNav}>Services</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#portfolio" className="navbar-link" onClick={closeNav}>Portfolio</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#contact" className="navbar-link" onClick={closeNav}>Contact us</a>
                        </li>
                    </ul>

                    {/* <button className="login-btn">
                        <img src="./assets/images/user.svg" width="21" height="21" alt="user icon" />
                        <span className="span">Login</span>
                    </button> */}

                    <p className="navbar-title">My Address</p>

                    <address className="navbar-text">
                        Gajanan Villa, B/h Sthapatya Elegance, Naroda-Dehgam, Ahmedabad - 32330
                    </address>

                    <p className="navbar-text">
                        Urgent issue? Call me at{' '}
                        <a href="tel:9180853846" className="contact-link">91808-53846</a>
                    </p>
                </nav>

                {isNavOpen && (
                    <div className="overlay active" onClick={toggleNav}></div>
                )}
            </div>
        </header>
    );
};

export default Header;
