import React from 'react';
import { Link } from 'react-router-dom';

import MobileNavbar from './MobileNavbar';
import './Navbar.style.css';
import {
  github,
  linkedin,
} from '../images/index.js'

const Navbar = () => (
  <div className="navbar">
    <MobileNavbar />
    <div className="nav-left">
      <Link to="/">
        <h1>Marshall Zobel</h1>
      </Link>
      <Link to="/">Home</Link>
      <Link to="/timeline">Timeline</Link>
      <Link to="/projects">Projects</Link>
    </div>
    <div className="nav-right">
      <a
        href="https://github.com/dmzobel"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={github}
          alt=""
          className="small-icon"
        />
      </a>
      <a
        href={"https://www.linkedin.com/in/marshallzobel/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={linkedin}
          alt=""
          className="small-icon"
        />
      </a>
    </div>
  </div>
);

export default Navbar;
