import React, { Component } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import "./App.css"

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
        <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
        <br />
        <span>{msg}</span>
      </p>
    )
  }
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<div>Home</div>} />
        <Route path="/about" element={<div>About Me</div>} />
        <Route path="/gharana" element={<div>Gharana</div>} />
        <Route path="/teaching" element={<div>Teaching</div>} />
        <Route path="/events" element={<div>Events</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
        <Route path="/" element={<Home />} /> {/* Default route */}
      </Routes>
    </Router>
  );
};

export default App;

