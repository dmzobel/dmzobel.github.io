import React from 'react';
import { Marshall } from '../images';
import Technologies from './Technologies';
import Interests from './Interests';

const Home = () => (
  <React.Fragment>
    <div className="banner">
      <div className="circle-img">
        <img src={Marshall} alt="" className="headshot" />
      </div>
      <div className="banner-text">
        <h2>Hey, I'm Marshall Zobel:</h2>
        <Technologies />
        <p>I'm a software developer currently living in New York.</p>
      </div>
    </div>
  </React.Fragment>
);

export default Home;

// <div>
//   <div className="top-divider">
//     <h2>About Me</h2>
//   </div>

//   <div className="bottom-divider">
//     <h2>Technical Proficiencies</h2>
//   </div>
// </div>
// <Technologies />
// <Interests />
