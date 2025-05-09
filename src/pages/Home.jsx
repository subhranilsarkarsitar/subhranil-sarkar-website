import React from 'react';

import Navbar from '../components/Navbar';

import './Home.css'; // Import the external CSS file
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home container" style={{
      backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/home.jpg')`
    }}>
      <Navbar />
      <div className="main-content">
        <div className="text-content">
          <h1 className="title">Subhranil<br />Sarkar</h1>
          <h2 className="subtitle">Sitar</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;