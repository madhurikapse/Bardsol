import React, { useState } from 'react';
import './Navbar2.css';

const Navbar = () => {
  // State to manage the menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
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

        {/* Hamburger Icon (only visible when menu is closed) */}
        {!isMenuOpen && (
          <div className="menu-icon" onClick={toggleMenu}>
            &#9776; {/* Hamburger icon */}
          </div>
        )}

        {/* Close Icon (only visible when menu is open) */}
        {isMenuOpen && (
          <div className="close-icon" onClick={toggleMenu}>
            &#10005; {/* Close icon */}
          </div>
        )}

        {/* Navigation Links */}
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
