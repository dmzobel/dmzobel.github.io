import React from 'react';
import { bhDemo1, bhDemo2, vintage, wizBang } from '../images';

const Projects = () => (
  <React.Fragment>
    <div className="project-section">
      <img src={bhDemo1} alt="" className="screenshot" />
      <div>
        <h1>Banana Hunt</h1>
        <br />
        <p>
          Banana Hunt is a mobile game for iOS that takes users on an augmented
          reality (AR) scavenger hunt. The goal is collect all of the virtual
          bananas as fast as possible, and earn a place on the leaderboard!
          Users can also create their own custom scavenger hunts, placing
          virtual bananas in their surrounding environment. You can drop as many
          bananas as you want, wherever you want, in as wide an area as you
          want, and then see who can capture them the quickest!
        </p>
        <br />
        <a
          href="https://github.com/BananaHuntAR"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{' '}
        |{' '}
        <a
          href="https://bananahuntar.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          Website
        </a>{' '}
        |{' '}
        <a
          href="https://www.youtube.com/watch?v=LcGKAu49MnA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo Video
        </a>
      </div>
      <img src={bhDemo2} alt="" className="screenshot" />
    </div>
    <hr className="divider" />

    <div className="project-section">
      <div>
        <h1>Vintage</h1>
        <br />
        <p>
          To the everyday consumer, wine can be an intimidating purchase.
          Vintage hopes to ease some of those feelings by focusing the
          consumer's attention on regions and vintages that have a greater
          likelihood of producing high quality wine.
        </p>
        <br />
        <p>
          Vintage is a data modeling web application that allows users to
          compare the quality of different wine vintages. Using the{' '}
          <a href="https://www.ncdc.noaa.gov/cdo-web/webservices/v2">
            NOAA Climate Data API
          </a>
          , the application gathers climate data from various regions around the
          world and feeds the data into Princeton economist Orley Ashenfelter's
          Bordeaux Equation, generating a score for each vintage that is
          predictive of the wine's quality.
        </p>
        <br />
        <a
          href="https://github.com/dmzobel/vintage"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{' '}
        |{' '}
        <a
          href="https://www.youtube.com/watch?v=TcvQIIqjxEc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo Video
        </a>
      </div>
      <img src={vintage} alt="" className="screenshot-desktop" />
    </div>
    <hr className="divider" />

    <div className="project-section">
      <img src={wizBang} alt="" className="screenshot-desktop" />
      <div>
        <h1>WizBang</h1>
        <br />
        <p>
          WizBang is an E-commerce web application offering magical products to
          wannabe wizards and witches. Users can browse a list of products and
          artifacts, add the desired items to their cart, and checkout using
          Stripe. The application also incorporates OAuth functionality,
          allowing users to save items to a Wish List and view their previous
          orders.
        </p>
        <br />
        <a
          href="https://github.com/wizards-store/grace-shopper"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{' '}
        |{' '}
        <a
          href="https://wizbang-1802.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          Website
        </a>
      </div>
    </div>
  </React.Fragment>
);

export default Projects;
