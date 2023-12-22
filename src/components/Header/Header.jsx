import './Header.scss';

import bhLogo from '../../assets/logo/baby-hippie-logo.png';
import iconMblMenu from '../../assets/icons/icon-header-mbl-menu.svg'

const Header = () => {

    //JS Code

    //HTML structure

    return (
        <div className='header'>
            <img src={bhLogo} alt="baby hippie logo" className="header__logo" />
            <ul className="header__nav--tab-desk">
                <li className="header__nav-item">about</li>
                <li className="header__nav-item">services</li>
                <li className="header__nav-item">blog</li>
            </ul>
            <div className="header__nav">
                <div className="header__button">
                    book appointment
                </div>
                <img src={iconMblMenu} alt="" className="header__nav--mbl" />

            </div>
        </div>
    );
};

export default Header;