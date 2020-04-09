import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './containers/home/Home';
import About from './containers/about/About';


const routing = (
    <Router>
      <Route to="/" component={Home} />
      <Route to="/about" component={About} />
    </Router>
  )

  export default routing