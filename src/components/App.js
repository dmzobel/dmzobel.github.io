import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';

const App = () => (
  <Router>
    <div id="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
);

export default App;
