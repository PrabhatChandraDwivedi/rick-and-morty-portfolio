import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
    <nav className="navbar" style={{background:"black"}}>
        <h1 className="navbar-logo">Prabhat</h1>
        <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact" className="navbar-contact">Message Me</Link></li>
        </ul>
    </nav>
);

export default Navbar;
