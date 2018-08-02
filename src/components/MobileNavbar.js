import React from 'react';
import { Link } from 'react-router-dom';

export default class MobileNavbar extends React.Component {
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
    );
  }
}
