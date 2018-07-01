import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <Link to="/">
      <h1>Marshall Zobel</h1>
    </Link>
    <Link to="/timeline">Timeline</Link>
    <Link to="/projects">Projects</Link>
  </div>
);

export default Navbar;
