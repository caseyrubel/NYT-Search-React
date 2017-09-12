import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Main from "../components/Main";
import Search from "../components/children/Search";
import Saved from "../components/children/Saved";

const Routes = (props) => (
  <Router {...props}>
    <Main>

      <Route path="/" component={Search} />
      <Route path="/saved" component={Saved} />

    </Main>
  </Router>
);

export default Routes;