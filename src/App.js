
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





function App() {
  return (
    <div>
    <Router>
    <nav>
      <Link className="Link" to="/home">Home</Link>
      <Link className="Link" to="/about">About</Link>
      <Link className="Link"to="/knitting">Knitting</Link>
 
    </nav>
    <Routes>
      <Route path="/"  element = {<Home/>} />
      <Route path="/about"  element = {<About/>}/>
      <Route path="/knitting" element = {<Knitting/>}/>
    </Routes>
    
    <footer className="cont py-3 my-4 ">
    <ul className="nav justify-content-center  border-bottom pb-3 mb-3">
      <Link className="foot" to="/"><li className="nav-item px-2">Home</li></Link>
      <Link className="foot" to="/about"><li className="nav-item px-2">About</li></Link>
      <Link className="foot" to="/knitting"><li className="nav-item px-2">Knitting</li></Link>
    </ul>
    <h6 className="text-center text-body-light">Design and development: Butylava Aksana ©️2024 All rights reserved.</h6>

  <h6 className="text-center text-body-light">Site is created for educational purposes and does not constitute an actual offer.</h6>
  </footer>
  </Router>
    </div>
  );
}

export default App;