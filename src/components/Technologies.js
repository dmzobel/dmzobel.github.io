import React from 'react';

import {
  git,
  htmlCss,
  js,
  node,
  python,
  react,
  redux,
  sql,
} from '../images/index.js'

export default props => (
  <div className="icon-row">
    <img
      src={python}
      alt="python"
      className="icon"
    />
    <img
      src={sql}
      alt="sequel"
      className="icon"
    />
    <img
      src={js}
      alt="javascript"
      className="icon"
    />
    <img
      src={node}
      alt="node"
      className="icon"
    />
    <img
      src={react}
      alt="react"
      className="icon"
    />
    <img
      src={redux}
      alt="redux"
      className="icon"
    />
    <img
      src={htmlCss}
      alt="html and css"
      className="icon"
    />
    <img
      src={git}
      alt="git"
      className="icon"
    />
  </div>
);
