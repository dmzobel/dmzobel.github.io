import React from 'react';

export default props => {
  return props.primary ? (
    <div className="icon-row">
      <img
        src={`https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png`}
        alt="javascript"
        className="icon"
      />
      <img
        src={`https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png`}
        alt="node"
        className="icon"
      />
      <img
        src={`https://d1eq8vvyuam4eq.cloudfront.net/assets/images/hacknlearn/react-logo.svg`}
        alt="react"
        className="icon"
      />
    </div>
  ) : (
    <div className="icon-row">
      <img
        src={`https://git-scm.com/images/logos/downloads/Git-Icon-Black.png`}
        alt="git"
        className="icon"
      />
      <img
        src={`http://www.bobbyberberyan.com/wp-content/uploads/2012/03/HTML5CSS3Logos.svg`}
        alt="html and css"
        className="icon"
      />
      <img
        src={`https://cdn.worldvectorlogo.com/logos/redux.svg`}
        alt="redux"
        className="icon"
      />
      <img
        src={`https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png`}
        alt="express"
        className="icon"
      />
      <img
        src="https://cdn.worldvectorlogo.com/logos/sequelize.svg"
        alt="sequelize"
        className="icon"
      />
      <img
        src={`https://cdn.worldvectorlogo.com/logos/postgresql.svg`}
        alt="postgres"
        className="icon"
      />
    </div>
  );
};
