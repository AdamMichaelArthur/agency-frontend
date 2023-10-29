// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import ContactIcons from './components/ContactIcons';

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg  navbar-padding">
      <Link className="navbar-brand" to="/">
        <img src="/images/logo.webp" alt="Logo" style={{ marginRight: '10px' }} />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>

      <div className="d-flex justify-content-center">
        <ContactIcons />
      </div>
      
      </div>
  );
};

export default Navbar;
