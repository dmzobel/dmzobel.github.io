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
        <h2>Hey, I'm Marshall:</h2>
        <Technologies primary={true} />
        <p>
          I'm a software developer currently living in New York. I specialize in
          writing JavaScript at all levels of the stack, but I'm always up for
          learning new technologies, whether it's Haskell, GraphQL, or augmented
          reality!
        </p>
        <br />
        <p>
          My humble beginnings in the tech world began with a Codecademy course,
          which led to Harvard's CS50 online course, which led to an unexpected
          passion that I could no longer ignore. After working as a consultant
          in Washington D.C. for several years, I decided it was time for a new
          adventure.
        </p>
        <br />
      </div>
    </div>
    <div className="sub-section">
      <h1>Technical Proficiency</h1>
      <Technologies />
    </div>
    <div className="sub-section">
      <h1>Interests</h1>
      <Interests />
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
