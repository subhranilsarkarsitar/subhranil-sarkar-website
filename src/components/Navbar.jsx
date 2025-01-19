import React from "react";
import { Link } from 'react-router-dom'; // Import Link component from React Router

import SitarIcon from './SitarIcon';

const Navbar = () => {
    return (
        <nav className="navbar">
            <SitarIcon />
            <Link className="nav-item" to="/home">Home</Link>
            <Link className="nav-item" to="/about">About Me</Link>
            <Link className="nav-item" to="/gharana">Gharana</Link>
            <Link className="nav-item" to="/teaching">Teaching</Link>
            <Link className="nav-item" to="/events">Events</Link>
            <Link className="nav-item" to="/contact">Contact</Link>
        </nav>
    );
}

export default Navbar;