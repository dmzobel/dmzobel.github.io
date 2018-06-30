import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <Link to="/">
      <h1>Marshall Zobel</h1>
    </Link>
    <Link to="/projects">Projects</Link>
    <Link to="">Resume</Link>
  </div>
);

export default Navbar;
