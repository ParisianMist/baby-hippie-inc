import './Header.scss';

import bhLogo from '../../assets/logo/baby-hippie-logo.png';
import iconMblMenu from '../../assets/icons/icon-header-mbl-menu.svg'

const Header = () => {

    //JS Code

    //HTML structure

    return (
        <div className='header'>
            <a href="/" className="header__logo-link">
                <img src={bhLogo} alt="baby hippie logo" className="header__logo" />
            </a>
            <div className="header__nav--tab-desk">
                <a href="/about" className="header__nav-item">about</a>
                <a href="/services" className="header__nav-item">servies</a>
                <a href="/blog" className="header__nav-item">blog</a>
            </div>
            <div className="header__nav">
                <a href="/services" className="header__button">
                    book appointment
                </a>

                {/* use state to bring up mobile menu */}
                <img src={iconMblMenu} alt="" className="header__nav--mbl" />

            </div>
        </div>
    );
};

export default Header;