import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Main from "../components/Main";
import Search from "../components/children/Search";

const Routes = (props) => (
  <Router {...props}>
    <Main>
      <Route path="/" component={Search} />
    </Main>
  </Router>
);

export default Routes;