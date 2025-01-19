import React from "react"
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from "./pages/About";
import Gharana from "./pages/Gharana";
import Teach from "./pages/Teach";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

import "./App.css"

// class LambdaDemo extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { loading: false, msg: null }
//   }

//   handleClick = api => e => {
//     e.preventDefault()

//     this.setState({ loading: true })
//     fetch("/.netlify/functions/" + api)
//       .then(response => response.json())
//       .then(json => this.setState({ loading: false, msg: json.msg }))
//   }

//   render() {
//     const { loading, msg } = this.state

//     return (
//       <p>
//         <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
//         <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
//         <br />
//         <span>{msg}</span>
//       </p>
//     )
//   }
// }

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gharana" element={<Gharana />} />
        <Route path="/teaching" element={<Teach />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} /> {/* Default route */}
      </Switch>
    </Router>
  );
};

export default App;

