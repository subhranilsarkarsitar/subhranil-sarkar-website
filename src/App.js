import React from "react"
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';

import OnePage from "./pages/OnePage";
import Events from "./pages/Events";

import "./App.css"
import "./typography.css"
import "./onepage.css"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/events" element={<Events />} />
        {/* Every other address is the one long page; OnePage scrolls to the matching section */}
        <Route path="*" element={<OnePage />} />
      </Switch>
    </Router>
  );
};

export default App;
