import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Events = () => {
    return (
      <div className="container events">
        <Navbar />
        <div className="main-content page-content">
          <div className="text-content">
            <h1 className="title">Events</h1>
            <p className="description">Coming Soon...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default Events;
