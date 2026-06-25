import React from "react"
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from "./pages/About";
import Gharana from "./pages/Gharana";
import Teach from "./pages/Teach";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import SitarAndUs from "./pages/SitarAndUs";
import Baithaki from "./pages/Baithaki";

import "./App.css"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gharana" element={<Gharana />} />
        <Route path="/sitar-and-us" element={<SitarAndUs />} />
        <Route path="/baithaki" element={<Baithaki />} />
        <Route path="/teaching" element={<Teach />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} /> {/* Default route */}
      </Switch>
    </Router>
  );
};

export default App;

