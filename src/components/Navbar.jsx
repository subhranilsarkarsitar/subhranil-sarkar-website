import React from "react";
import { Link } from 'react-router-dom'; // Import Link component from React Router

import SitarIcon from './SitarIcon';

import './Navbar.css';

const Navbar = ({ open }) => {
    return (
        <nav className="collapsible-menu navbar">
            <input type="checkbox" id="menu" checked={open} />
            <label htmlFor="menu">☰</label>
            <div className="menu-content">
                <SitarIcon />
                <Link className="nav-item" to="/home">Home</Link>
                <Link className="nav-item" to="/about">About Me</Link>
                <Link className="nav-item" to="/gharana">Gharana</Link>
                <Link className="nav-item" to="/sitar-and-us">Sitar & Us</Link>
                <Link className="nav-item" to="/teaching">Teaching</Link>
                <Link className="nav-item" to="/events">Events</Link>
                <Link className="nav-item" to="/contact">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;