import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Baithaki = () => {
  return (
    <div className="container baithaki">
        <Navbar />
        <div className="main-content page-content">
          <div className="image-container">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/bm-logo.png`}
              alt="The Baithaki Movement by Subhranil Sarkar"
              className="gharana-image"
            />
          </div>
          <div className="text-content">
            <h1 className="title">Baithaki Movement</h1>
            <p className="description">
              The Baithaki Movement is a back to the roots series brought to you by sitarist Subhranil Sarkar.
            </p>
            <p className="description">
              Follow us on social media for the latest updates
            </p>
            <p className="description">
              <a href="https://www.instagram.com/baithaki.movement" target="_blank">Instagram</a>
              <br />
              <a href="https://www.facebook.com/profile.php?id=100093679717387" target="_blank">Facebook</a>
            </p>
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default Baithaki;
