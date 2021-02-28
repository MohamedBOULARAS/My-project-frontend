import React, { useState } from 'react';
import './NavBarFct.css';
import { Link, Router } from 'react-router-dom';





const NavFCT = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground)

    return (
        <>
        <nav className={navbar ? 'navfct active' : 'navfct'}>
            <div className="navfct-container">
                <Link to="/" className="navfct-logo">
                    INFINITE
                </Link>
                <ul className='navfct-menu'>
                    <li className='navfct-item'>
                        <Link to="/" className="navfct-links">
                        <i style={{fontSize: '27px', color: 'grey'}} class="fas fa-tools"></i>
                        </Link>
                    </li>
                    <li className='navfct-item'>
                        <Link to="/" className="navfct-links">
                        <i style={{fontSize: '27px', color: 'grey'}} class="fas fa-user-circle"></i>
                        </Link>
                    </li>
                    <li className='navfct-item'>
                        <Link to="/" className="navfct-links">
                        <i style={{fontSize: '27px', color: 'grey'}} class="fas fa-power-off"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
};

export default NavFCT;
