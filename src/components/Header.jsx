/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css"; // Ensure the file name matches the correct casing

const Header = () => {
  return (
    <header className="header">
      <h1>DevVault</h1>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
