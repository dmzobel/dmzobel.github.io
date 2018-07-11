import React from 'react';
import { Marshall, leftArrow } from '../images';
import Technologies from './Technologies';
import Interests from './Interests';
import Movies from './Movies';

const Home = () => (
  <React.Fragment>
    <div className="home-container">
      <div className="banner-text">
        <p>Who is Marshall?</p>
      </div>
      <div className="circle-img">
        <img src={Marshall} alt="" className="headshot" />
      </div>
      <div className="banner-text">
        <p>He's this guy!</p>
        <img src={leftArrow} alt="" className="icon" />
      </div>
    </div>
    <div>Find out what he's all about!</div>
    <div className="about">
      <Technologies />
      <Interests />
      <Movies />
    </div>
  </React.Fragment>
);

export default Home;
