import React from 'react';
import { Marshall, leftArrow, jsIcon, skiing } from '../images';

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
      <div className="about-block">
        <p>What technologies does he work with?</p>
        <img src={jsIcon} alt="" className="icon" />
      </div>
      <div className="about-block">
        <p>Hobbies and Interests</p>
        <img src={skiing} alt="" className="icon" />
      </div>
      <div className="about-block">
        <p>Spends way too much time watching movies</p>
        <img
          src={
            'https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_UX182_CR0,0,182,268_AL_.jpg'
          }
          alt=""
          className="icon"
        />
      </div>
    </div>
  </React.Fragment>
);

export default Home;
