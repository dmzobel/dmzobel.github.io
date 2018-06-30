import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';

const App = () => (
  <div id="app">
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
