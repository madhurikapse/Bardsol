import React from 'react';
import './Navbar2.css';

const Navbar = () => {
  return (
    <nav>
      <div className="Navbar2">
        <img src="https://bradsol.com/wp-content/uploads/2021/08/bradsol-logo2.png" alt="Logo" className="logo" />
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#capabilities">Capabilities</a></li>
          <li><a href="#engage">How We Engage</a></li>
          <li><a href="#partner">Solution </a></li>
          <li><a href="#partner">partner</a></li>
          <li><a href="#partner">company</a></li>
          <li><a href="#resource">Resource</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
