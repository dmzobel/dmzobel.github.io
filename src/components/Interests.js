import React from 'react';

import {
  baseball,
  book,
  exercise,
  hiking,
  movies,
  skiing,
  yoga,
} from '../images/index.js'

export default () => (
  <div className="icon-row">
    <img
      src={hiking}
      alt="hiking"
      className="icon"
    />
    <img
      src={baseball}
      color="white"
      alt="baseball"
      className="icon"
    />
    <img
      src={skiing}
      alt="skiing"
      className="icon invert"
    />
    <img
      src={book}
      alt="books"
      className="icon"
    />
    <img
      src={exercise}
      alt="exercise"
      className="icon"
    />
    <img
      src={movies}
      alt="movies"
      className="icon"
    />
    <img
      src={yoga}
      alt="yoga"
      className="icon"
    />
  </div>
);
