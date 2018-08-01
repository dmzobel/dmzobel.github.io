import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  state = {
    open: false
  };

  toggleBurgerMenu = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

  render() {
    let burgerClass;
    burgerClass = this.state.open ? 'burger-menu open' : 'burger-menu';

    return (
      <div className="navbar">
        <div className="nav-left">
          <Link to="/">
            <h1>Marshall Zobel</h1>
          </Link>
          <Link to="/">Home</Link>
          <Link to="/timeline">Timeline</Link>
          <Link to="/projects">Projects</Link>
        </div>
        <div className="nav-mobile">
          <Link to="/">
            <h1>Marshall Zobel</h1>
          </Link>
          <div className="burger" onClick={this.toggleBurgerMenu}>
            <span />
            <span />
            <span />
            <div className={burgerClass}>
              <Link to="/">Home</Link>
              <Link to="/timeline">Timeline</Link>
              <Link to="/projects">Projects</Link>
            </div>
          </div>
        </div>
        <div className="nav-right">
          <a
            href="https://github.com/dmzobel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://image.flaticon.com/icons/svg/25/25231.svg"
              alt=""
              className="small-icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/marshallzobel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="http://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo-500x500.png"
              alt=""
              className="small-icon"
            />
          </a>
          <a
            href="https://twitter.com/dmzobel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://logos-download.com/wp-content/uploads/2016/02/Twitter_logo_bird_transparent_png.png"
              alt=""
              className="small-icon"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
