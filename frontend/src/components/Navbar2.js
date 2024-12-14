import React, { useState } from 'react';
import './Navbar2.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="Navbar2">
        <img
          src="https://bradsol.com/wp-content/uploads/2021/08/bradsol-logo2.png"
          alt="Logo"
          className="logo"
        />

        {!isMenuOpen && (
          <div className="menu-icon" onClick={toggleMenu}>
            &#9776; 
          </div>
        )}

      
        {isMenuOpen && (
          <div className="close-icon" onClick={toggleMenu}>
            &#10005; 
          </div>
        )}

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#capabilities">Capabilities</a></li>
          <li><a href="#engage">How We Engage</a></li>
          <li><a href="#partner">Solution</a></li>
          <li><a href="#partner">Partner</a></li>
          <li><a href="#company">Company</a></li>
          <li><a href="#resource">Resource</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
