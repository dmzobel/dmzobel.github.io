import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <div>
      <Link to="/">
        <h1>Marshall Zobel</h1>
      </Link>
      <Link to="/timeline">Timeline</Link>
      <Link to="/projects">Projects</Link>
    </div>
    <div>
      <Link to="https://www.linkedin.com/in/marshallzobel/">
        <img
          src="http://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo-500x500.png"
          alt=""
          className="icon"
        />
      </Link>
    </div>
  </div>
);

export default Navbar;
