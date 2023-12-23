import { useState } from 'react';

import './Header.scss';

import bhLogo from '../../assets/logo/baby-hippie-logo.png';
import iconMblMenu from '../../assets/icons/icon-header-mbl-menu.svg'

import navLinks from '../../data/services.json'
const Header = () => {

    //state
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    };

    //Data
    const navData = (
        <>
            {navLinks.map(navLink => (
                <a href={navLink.href} key={navLink.name} className="header__nav-item">
                    {navLink.name}
                </a>
            ))}
        </>
    );

    //HTML structure
    return (
        <>
            <div className='header'>
                <div className="header--top">
                    <a href="/" className="header__logo-link">
                        <img src={bhLogo} alt="baby hippie logo" className="header__logo" />
                    </a>
                    <div className="header__nav--tab-desk">
                        {navData}
                    </div>
                    <div className="header__nav">
                        <a href="/services" className="header__button">
                            book appointment
                        </a>
                        {/* use state to bring up mobile menu */}
                        <img
                            className="header__nav-mbl-icon"
                            src={iconMblMenu}
                            alt="hanmburger menu"
                            onClick={toggleMobileMenu}
                        />
                    </div>
                </div>
                <div className="header--bottom">
                    <div className={`header__nav--mbl ${mobileMenuOpen ? 'header__nav--mbl-open' : ''}`}>
                        {navData}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;