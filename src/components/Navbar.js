import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import "./Navbar.css";


function Navbar() {

    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <header>
            <nav>
                <Link to="/lndry_2.0/" className="navbar-logo" onClick={closeMobileMenu}>
                    LNDRY
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/lndry/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item" onClick={closeMobileMenu}>
                        <Link to="/lndry/about" className="nav-links">
                            About
                        </Link>
                    </li>
                    <li className="nav-item" onClick={closeMobileMenu}>
                        <Link to="/lndry/services" className="nav-links">
                            Services
                        </Link>
                    </li>
                    <li className="nav-item" onClick={closeMobileMenu} style={{marginRight: "20px"}}>
                        <Link to="/lndry/pricing" className="nav-links">
                            Pricing
                        </Link>
                    </li>
                    <Button linkBtn="/lndry/contact" labelBtn="Contact" />
                </ul>
                
            </nav>
        </header>
            
    )
}

export default Navbar
