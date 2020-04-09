import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './containers/about/About.jsx';

const routing = (
    <Router>
      <Route to="/" component={About} />
    </Router>
  )

  export default routing