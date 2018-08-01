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
          writing JavaScript at all levels of the stack, and I'm always up for
          learning new technologies, whether it's Haskell, GraphQL, or augmented
          reality!
        </p>
        <br />
        <p>
          My humble beginnings in the tech world began with a Codecademy course,
          which led to Harvard's online CS50, which developed into an unexpected
          passion that I couldn't ignore. So, after working as a consultant in
          Washington D.C. for several years, I decided it was time for a new
          adventure.
        </p>
        <br />
        <p>
          I enrolled in Fullstack Academy of Code to learn the fundamentals of
          software engineering by building, and made a lot of great friendships
          along the way. I love the process of creating a project from scratch
          and polishing it into something beautiful, seamless, and intuitive.
        </p>
        <br />
        <p>
          Aside from coding, I am a{' '}
          <a
            href="https://medium.com/@dmzobel/a-running-list-of-2018s-reads-3bd5aeac1917"
            target="_blank"
            rel="noopener noreferrer"
          >
            voracious reader
          </a>, frequent movie-goer, and sports nut. Feel free to reach out on
          <a
            href="https://www.linkedin.com/in/marshallzobel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>!
        </p>
      </div>
    </div>
    <div className="sub-section">
      <h1>Additional Technologies</h1>
      <Technologies />
    </div>
    <div className="sub-section">
      <h1>Interests</h1>
      <Interests />
    </div>
  </React.Fragment>
);

export default Home;
