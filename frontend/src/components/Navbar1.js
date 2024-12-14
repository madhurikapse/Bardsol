import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar1 = () => {
  return (
    <>
    <nav className="Navbar1">
      <div className="social-icons">
        <FaFacebook size={20} className="icon" />
        <FaTwitter size={20} className="icon" />
        <FaInstagram size={20} className="icon" />
        <FaLinkedin size={20} className="icon" />
      </div>
      <div className="email-section">
        <FaEnvelope size={20} className="icon" />
        <span>Email Us</span>
      </div>
    </nav>
    </>
  );
};

export default Navbar1;
