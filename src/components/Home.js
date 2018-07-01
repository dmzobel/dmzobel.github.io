import React from 'react';
import { Marshall } from '../images';

const Home = () => (
  <React.Fragment>
    <div className="home-container">
      <img src={Marshall} alt="" className="image" />
      <div className="bio">
        <p>
          Hey, welcome to my site! My name is Marshall and I am software
          developer currently living in New York City.
        </p>
        <p>
          I am originally from Virginia, where I attended the College of William
          and Mary.
        </p>
        <p>
          After working for several years in the consulting industry, I
          developed an interest in coding that eventually pushed me to enroll in
          Fullstack Academy of code.
        </p>
      </div>
    </div>
    <div className="interests">
      <p>Financial crisis</p>
      <p>Books</p>
      <p>Baseball / Sports</p>
      <p>Movie posters: Arrival, Her, Good Will Hunting, Wind River</p>
    </div>
  </React.Fragment>
);

export default Home;
