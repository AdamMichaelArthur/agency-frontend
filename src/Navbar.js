// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import ContactIcons from './components/ContactIcons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-padding">
      <Link className="navbar-brand" to="/">
        <img src="/images/logo.webp" alt="Logo" style={{ marginRight: '10px' }} />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="d-flex justify-content-center">
        <ContactIcons />
      </div>
    </nav>
  );
};

export default Navbar;
