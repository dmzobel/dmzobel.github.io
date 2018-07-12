import React from 'react';
import { Marshall } from '../images';
import Technologies from './Technologies';
import Interests from './Interests';

const Home = () => (
  <React.Fragment>
    <Technologies />
    <div>
      <div className="gray" />
      <div className="circle-img">
        <img src={Marshall} alt="" className="headshot" />
      </div>
      <div className="green" />
    </div>
    <Interests />
  </React.Fragment>
);

export default Home;
