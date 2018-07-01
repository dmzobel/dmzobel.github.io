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
import Timeline from './Timeline';

const App = () => (
  <Router>
    <div id="app">
      <Navbar />
      <div id="content-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/timeline" component={Timeline} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
