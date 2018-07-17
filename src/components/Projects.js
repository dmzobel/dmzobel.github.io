import React from 'react';
import { bhDemo1, bhDemo2 } from '../images';

const Projects = () => (
  <React.Fragment>
    <div>
      <h1>Banana Hunt</h1>
      <img src={bhDemo1} alt="" />
      <img src={bhDemo2} alt="" />
    </div>
    <div>Vintage</div>
    <div>WizBang</div>
  </React.Fragment>
);

export default Projects;
