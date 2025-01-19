import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from React Router

import './Home.css'; // Import the external CSS file

const Home = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <Link className="nav-item" to="/home">Home</Link>
        <Link className="nav-item" to="/about">About Me</Link>
        <Link className="nav-item" to="/gharana">Gharana</Link>
        <Link className="nav-item" to="/teaching">Teaching</Link>
        <Link className="nav-item" to="/events">Events</Link>
        <Link className="nav-item" to="/contact">Contact</Link>
      </nav>
      <div className="main-content">
        <div className="image-container">
          <img
            className="background-image"
            src="path/to/your/image.jpg" // Replace with the correct image path
            alt="Sitar Background"
          />
          <div className="overlay"></div>
        </div>
        <div className="text-content">
          <h1 className="title">Subhranil Sarkar</h1>
          <h2 className="subtitle">Sitar</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;