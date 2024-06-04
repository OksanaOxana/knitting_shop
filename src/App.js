
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React from "react";
import './App.css';
import About from "./About/About";
import Knitting from "./Knitting/Knitting";
import Home from "./Home/Home";
import Footer from "./Footer";


function App() {
  return (
      <Router>
        <nav>
          <Link className="Link" to="/">Home</Link>
          <Link className="Link" to="/about">About</Link>
          <Link className="Link"to="/knitting">Knitting</Link>
        </nav>
        <Routes>
          <Route path="/"  element = {<Home/>} />
          <Route path="/about"  element = {<About/>}/>
          <Route path="/knitting" element = {<Knitting/>}/>
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;